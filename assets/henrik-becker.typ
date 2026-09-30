// CV as PDF, compiled post-build from the same buildCV JSON as the HTML CV.
// Kept ATS-friendly on purpose: one column, no photo, no icons, no boxes or
// tables around text, real headings, plain-text contact details and links
// that spell out their address, and no hyphenation (split words confuse
// text extraction).

#let data-file = sys.inputs.at("data", default: "henrik-becker.json")
#let lang = sys.inputs.at("lang", default: "en")
#let cv = json(data-file)
#let h = cv.headings
#let intro = cv.introduction

// Palette from the shared site design (becker-consulting.se), darkened
// body text for print. Geist, as on the sites (static TTFs in /fonts).
#let ink = rgb("#2E2429")
#let body-text = rgb("#3D3439")
#let muted = rgb("#6B6268")
#let accent = rgb("#A4533D")
#let rule = 0.5pt + rgb("#C9C4C6")

#let space_1 = 4pt
#let space_2 = 8pt
#let space_3 = 16pt

#set document(
  title: intro.name + " – " + intro.jobTitle,
  author: intro.name,
  description: intro.description,
  keywords: cv.coreSkills.map(c => c.name) + cv.coreSkills
    .map(c => c.at("skills", default: ()))
    .flatten(),
)

#set page(
  paper: "a4",
  margin: (x: 2cm, top: 1.8cm, bottom: 1.8cm),
  footer: context {
    set text(size: 8pt, fill: muted)
    intro.name
    std.h(1fr)
    counter(page).display("1/1", both: true)
  },
)

#set text(
  font: "Geist",
  size: 10pt,
  lang: lang,
  weight: "regular",
  fill: body-text,
  hyphenate: false,
)
// Non-breaking hyphens (U+2011) in the data aren't in Geist and don't match
// a plain-text keyword search; print ordinary hyphens.
#show "\u{2011}": "-"
#set par(justify: false, leading: 0.6em, spacing: space_2 + 2pt)
#show strong: set text(weight: "semibold", fill: ink)
#show link: set text(fill: ink)

#set list(marker: [•], indent: 0pt, body-indent: 0.5em, spacing: 0.55em)

#show title: set text(size: 22pt, weight: "medium", fill: ink)
#show title: set block(below: 0.35em)

#show heading: set text(fill: ink)
#show heading.where(level: 2): it => block(
  above: space_3 + 6pt,
  below: space_2 + 2pt,
  width: 100%,
  stroke: (bottom: rule),
  inset: (bottom: 5pt),
  text(size: 13pt, weight: "medium", it.body),
)
#show heading.where(level: 3): set text(size: 11.5pt, weight: "semibold")
#show heading.where(level: 3): set block(above: space_3, below: space_1 + 2pt)
#show heading.where(level: 4): set text(size: 10.5pt, weight: "semibold")
#show heading.where(level: 4): set block(above: space_2 + 4pt, below: space_1 + 2pt)

// Small run-in label ("Highlights", "Tech & Methods").
#let label(body) = block(
  above: space_2 + 2pt,
  below: space_1 + 2pt,
  text(size: 9pt, weight: "semibold", fill: accent, body),
)

// ---------------------------------------------------------------- dates --

#let months = if lang == "sv" {
  ("jan", "feb", "mar", "apr", "maj", "jun", "jul", "aug", "sep", "okt", "nov", "dec")
} else {
  ("Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec")
}

// "2021-10-11T00:00:00.000Z" -> "Oct 2021"; anything else passes through.
#let format-date(s) = {
  if s == none or s == "" { return none }
  if s == "present" { return h.at("present", default: "present") }
  let parts = s.split("-")
  if parts.len() >= 2 {
    months.at(int(parts.at(1)) - 1) + " " + parts.at(0)
  } else {
    s
  }
}

#let format-period(start, end) = {
  let a = format-date(start)
  let b = format-date(end)
  if a == none { none } else if b == none or a == b { a } else { a + " – " + b }
}

// Role(s) in bold, period right-aligned on the same line.
#let meta-line(roles, start, end) = {
  let roles-text = if roles == none or roles.len() == 0 { none } else { roles.join(", ") }
  let period = format-period(start, end)
  if roles-text == none and period == none { return }
  block(above: 0pt, below: space_2, {
    if roles-text != none [*#roles-text*]
    if period != none {
      std.h(1fr)
      text(fill: muted, period)
    }
  })
}

// ------------------------------------------------------------ entries --

#let highlights-list(item) = {
  let highlights = item.at("highlights", default: none)
  if highlights != none and highlights.len() > 0 {
    label(h.highlights)
    for highlight in highlights [- #highlight]
  }
}

#let competencies-list(item) = {
  let competencies = item.at("competencies", default: none)
  if competencies != none and competencies.len() > 0 {
    label(h.tech_stack)
    set text(size: 9.5pt)
    for category in competencies [- *#category.name:* #category.tech.join(", ")]
  }
}

#let entry(xp, level: 3) = {
  heading(level: level, xp.title)
  let kind = xp.at("type", default: none)
  if kind != none {
    block(above: 0pt, below: space_1 + 1pt, text(fill: muted, style: "italic", kind))
  }
  meta-line(
    xp.at("roles", default: none),
    xp.at("startDate", default: none),
    xp.at("endDate", default: none),
  )
  if xp.at("description", default: none) != none [#xp.description]
  highlights-list(xp)
  competencies-list(xp)

  let assignments = xp.at("assignments", default: none)
  if assignments != none {
    pad(left: 1em, for ass in assignments { entry(ass, level: 4) })
  }
}

// ------------------------------------------------------------- blocks --

#let masthead() = {
  // Phone without the "(0)" trunk prefix, which parsers tend to mangle.
  let phone = intro.telephone.replace("(0)", "").replace("  ", " ")
  let pretty(url) = url.replace("https://", "").replace("http://", "").replace("www.", "")
  let contacts = (
    link("mailto:" + intro.email, intro.email),
    link("tel:" + phone.replace(" ", ""), phone),
  )
  // schema.org PostalAddress from person.yml, shown as "Lidingö, Stockholm".
  let address = intro.at("address", default: none)
  if address != none {
    let place = ("addressLocality", "addressRegion")
      .map(k => address.at(k, default: none))
      .filter(v => v != none)
    if place.len() > 0 { contacts.insert(0, place.join(", ")) }
  }
  let socials = ()
  let url = intro.at("url", default: none)
  if url != none { contacts.push(link(url, pretty(url))) }
  for social in intro.at("sameAs", default: ()) { socials.push(link(social, pretty(social))) }

  title(intro.name)
  block(above: 0pt, below: space_2, text(size: 12.5pt, fill: accent, weight: "medium", intro.jobTitle))
  // One contact per unbreakable box so an address never splits over lines.
  let line(items) = items.map(box).join([#std.h(0.4em)|#std.h(0.4em)])
  block(below: space_2, text(size: 9.5pt)[#line(contacts) \ #line(socials)])
}

#let introduction() = [
  == #h.summary
  #intro.description
]

#let core_competencies(coreSkills: cv.coreSkills) = [
  == #h.core_competencies
  #for category in coreSkills {
    let skills = category.at("skills", default: none)
    [- *#category.name*#if skills != none [: #skills.join(", ")]]
  }
]

#let work_experience(employment: cv.workExperience) = [
  == #h.experience
  #for xp in employment { entry(xp) }
]

#let projects(projects: cv.projects) = [
  == #h.projects
  #for xp in projects { entry(xp) }
]

#let early_career(employment: cv.earlierCareer) = [
  == #h.earlier_career
  #for xp in employment { entry(xp) }
]

#let languages(languages: cv.languages) = [
  == #h.languages
  #for language in languages [- *#language.name:* #language.proficiency]
]

#let certifications(certifications: cv.certifications) = [
  == #h.certs
  #for cert in certifications [
    - *#cert.title*, #cert.issuer, #cert.achievementDate.slice(0, 4)
  ]
]

#let education(education: cv.education) = [
  == #h.education
  #for edu in education [
    - *#edu.title*, #edu.description, #edu.period
  ]
]

#masthead()
#introduction()
#core_competencies()
#certifications()
#work_experience()
#projects()
#early_career()
#education()
#languages()
