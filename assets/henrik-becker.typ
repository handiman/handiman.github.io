#let cv = json("henrik-becker.json")
#let border_radius = 8pt
#let border_color = rgb("#5F6F67");
#let border = 0.5pt + border_color
#let space_1 = 8pt
#let space_2 = 14pt
#let space_3 = 26pt

#set page(
  paper: "a4",
  margin: (x: 2cm, y: 2cm),
  numbering: "1/1"
)

#set par(
  justify: true,
  leading: 0.52em,
  spacing: space_2
)

#set text(
  font: "IBM Plex Sans", 
  size: 12pt,
  lang: "en",
  weight: "light"
)
#show strong: set text(weight: "thin")

#set list(
  marker: none,
  body-indent: 0pt
)
#show list: set block(below: space_3)

#set document(
  title: cv.introduction.name
)

#show title: set text(size: 24pt, weight: "regular") 
#show heading.where(level: 2): set text(size: 20pt, weight: "regular")
#show heading.where(level: 2): set block(
  above: space_3,
  below: space_2,
  inset: (bottom: space_2),
  stroke: (bottom: border),
  width: 100%
)
#show heading.where(level: 3): set text(
  size: 18pt, 
  weight: "regular"
)
#show heading.where(level: 3): set block(
  above: space_2,
  below: space_2
)
#show heading.where(level: 4): set text(size: 14pt, weight: "regular")
#show heading.where(level: 4): set block(
  above: space_2,
  below: space_2
)

#let experience(xp) = [
  === #xp.title
  #if xp.type != none [
    _ #xp.type _ \
  ]
  #if type(xp.roles) == str [
    * #xp.roles *
  ] else [
    * #xp.roles.join(", ") *
  ]
  | #xp.startDate - #xp.endDate
  
  #xp.summary

  #let competencies = xp.at("competencies", default: none)
  #if competencies != none [
    ==== Tech & Methods Used
    #for category in xp.competencies [
      - *#category.name:* #category.tech.join(", ")
    ]
  ]
]

#let rounded-rect-right(width, height, radius) = {
  path({
    move((0, 0))
    line((width - radius, 0))
    arc((width, radius), radius, start-angle: -90deg, end-angle: 0deg)
    line((width, height - radius))
    arc((width - radius, height), radius, start-angle: 0deg, end-angle: 90deg)
    line((0, height))
    close()
  })
}


#let masthead(
  name: cv.introduction.name,
  job_title: cv.introduction.jobTitle,
  email: cv.introduction.email,
  phone: cv.introduction.telephone,
  same_as: cv.introduction.sameAs,
  photo: "img/portrait-800x1199.jpg",
  scale: 6
) = {
  let img_width = 800pt / scale
  let img_height = 1199pt / scale
  box(
    stroke: border, 
    radius: border_radius,
    grid(
      columns: (2fr, 1fr),
      grid.cell(align: horizon, inset: (left: space_3), [
        #title()
        ==== #job_title
        #link("mailto:\"" + name + "\"<" + email + ">", email) \
        #link("tel:" + phone.replace("(0)", "").replace(" ", ""), phone) \
        #for social in same_as [
          #link(social, social.replace("https://", "").replace("www.linkedin", "linkedin")) \
        ]
      ]),
      grid.cell(align: right, inset: (bottom: 0.5pt), [
        #box(
          width: img_width,
          height: img_height,
          stroke: none,
          clip: true,
          radius: (
            top-left: 0pt,
            bottom-left: 0pt,
            top-right: border_radius,
            bottom-right: border_radius
          ),
          image(photo, width: img_width, height: img_height))
      ])
    )
  )
}

#let introduction() = [
  == Introduction
  #cv.introduction.description
]

#let core_competencies(coreSkills: cv.coreSkills) = [
  == Core Competencies
  #set list(
    marker: [--],
    body-indent: 0.5em
  )
  #for category in coreSkills [
    #let skills = category.at("skills", default: none)
    - #category.name
      #if skills != none [
        (#skills.join(", "))       
      ]
  ]
]

#let featured_projects(projects: cv.featuredProjects) = [
  == Featured Projects
  #for xp in projects [
    #experience(xp)
  ]
]

#let professional_experience(employment: cv.professionalExperience) = [
  == Professional Experience
  #for xp in employment [
    #experience(xp)
  ]
]

#let early_career(employment: cv.earlyCareer) = [
  == Early Career
  #for xp in employment [
    #experience(xp)
  ]
]

#let professional_context(
  languages: cv.languages,
  certifications: cv.certifications,
  education: cv.education
) = [
  == Professional Context
  === Lanuages
  #for language in languages [
    - *#language.name:* #language.proficiency
  ]
  === Certifications
  #for cert in certifications [
    - *#cert.title:* #cert.issuer (#cert.achievementDate)
  ]
  === Education
  #for edu in education [
    - *#edu.title:* #edu.description (#edu.period)
  ]
]

#masthead()
#introduction()
#core_competencies()
#featured_projects()
#professional_context()
#professional_experience()
#early_career()
