#let agreement(agreement: none, doc) = {
  /*------------------------ 
    CONFIG
  ------------------------*/
  let space_1 = 8pt
  let space_2 = 14pt
  let space_3 = 26pt
  let space_4 = 32pt
  let client = agreement.parties.client
  let consultant = agreement.parties.consultant

  set page(
    paper: "a4",
    margin: (x: 2cm, y: 2cm),
    footer: context {
      set align(right)
      if int(counter(page).display()) > 0 [
        Sida #counter(page).display(
          "1(1)",
          both: true
        )
      ]
    }
  )
  set table.hline(
    stroke: .5pt + rgb("#CCCCCC")
  )
  set par(
    justify: true
  )

  set text(
    font: "IBM Plex Sans", 
    size: 12pt,
    lang: "sv",
    weight: "light"
  )
  
  set heading(numbering: "1.")

  show strong: set text(weight: "thin")

  // Title
  show title: set text(size: 24pt, weight: "regular") 
  show title: set block(above: 0pt, below: 0pt)

  // H1
  show heading.where(level: 1): set text(size: 24pt, weight: "regular")
  show heading.where(level: 1): set block(
    above: space_3,
    below: space_2
  )

  // H2
  show heading.where(level: 2): set text(size: 20pt, weight: "regular")
  show heading.where(level: 2): set block(
    above: space_3,
    below: space_2
  )

  // H3
  show heading.where(level: 3): set text(
    size: 18pt, 
    weight: "regular"
  )
  show heading.where(level: 3): set block(
    above: space_2,
    below: space_2
  )

  // H4
  show heading.where(level: 4): set text(
    size: 14pt, 
    weight: "regular")
  show heading.where(level: 4): set heading(
    numbering: none
  )
  show heading.where(level: 4): set block(
    above: space_2,
    below: space_2
  )

  // H5
  show heading.where(level: 5): set text(
    weight: "regular")
  show heading.where(level: 5): set heading(
    numbering: none
  )
  show heading.where(level: 5): set block(
    above: space_1,
    below: space_1
  )  

  /*------------------------ 
    HELPERS
  ------------------------*/
  let phone(phone) = link("tel:" + phone.replace("(0)", "").replace(" ", ""), phone)
  
  let email(name, email) = link("mailto:\"" + name + "\"<" + email + ">", email)
  
  let summary(summary) = [
    #if type(summary) == str [
      #par(summary)
    ] else [
      #for paragraph in summary [
        #par(paragraph)
      ]
    ]
  ]

  let details(details) = [
    #if details != none [
      #for (header, content) in details [
        == #header
        #if type(content) == str [
          #par(content)
        ] else [
          #for paragraph in content [
            #par(paragraph)
          ]
        ]
      ]
    ]  
  ]

  /*------------------------ 
    TEMPLATE
  ------------------------*/
  [
    #align(center + horizon, [
      #upper(title()) \
      mellan \
      *#client.name* \
      och \
      *#consultant.name* \
      #agreement.valid_from
      #counter(page).update(0)
      #pagebreak()
    ])

    = Avtalsparter
    #grid(
      columns: (1fr, 1fr), [
        ==== #client.name
        #client.address
        ===== Organisationsnummer
        #client.orgNo
        ===== Kontaktperson
        #client.contact.name \
        #phone(client.contact.telephone) \
        #email(client.contact.name, client.contact.email)
      ],[
        ==== #consultant.name
        #consultant.address
        ===== Organisationsnummer
        #consultant.orgNo
        ===== Kontaktperson
        Henrik Becker \
        #phone(consultant.telephone)  \
        #email("Henrik Becker", consultant.email)
    ])
    Mellan #client.name (_ ”Beställaren” _) och #consultant.name (_ ”Konsulten” _) har idag #agreement.valid_from träffats följande avtal. 

    = Uppdragets art och omfattning
    #summary(agreement.scope.summary)
    #details(agreement.scope.details)

    = Ersättning
      Ersättningen som Beställaren betalar till Konsulten för genomförande av Uppdraget utgår med #agreement.fees.rate #agreement.fees.currency/#agreement.fees.rate_type. 

      #text(stroke: red, [TODO: Konsulten har rätt att justera avtalat timarvode årligen i {{ month_name }} med start den 1 {{ month_name }} {{ agreement.valid_from | date: "%Y" | plus: 1 }} och med {{ agreement.fees.rate_increase }}.])

      == Arbetstid och övertid
      Konsulten utför Uppdraget på heltid motsvarande högst #agreement.scope.standard_hours.
      
      Övertid får endast utföras efter skriftligt godkännande från Beställaren och ersätts enligt överenskommelse.
      
      #details(agreement.fees.details)

      = Betalning
      #details(agreement.invoicing)

      = Försäkring och F-skatt
      #details(agreement.insurance_and_tax)

      = Äganderätt och nyttjanderätt
      #for paragraph in agreement.interpersonal_rights [
        #par(paragraph)
      ]

      = Ansvar
      == Beställarens ansvar
      Beställarens ansvar består i att: \
      #for item in agreement.liability.client [
        + #item
      ]

      == Konsultens ansvar
      #for item in agreement.liability.consultant [
        + #item
      ]

      == Ansvarsbegränsning
      #agreement.liability.limitation

      = Sekretess
      #agreement.confidentiality.clause

      Konsulten förbinder sig att: \
      #for detail in agreement.confidentiality.details [
        + #detail
      ]

      Undantag: \
      #for exception in agreement.confidentiality.exceptions [
        + #exception
      ]

      = Avtalstid
      Detta avtal träder i kraft #agreement.scope.start_date och gäller till och med #agreement.scope.end_date.

      Om Avtalet inte sägs upp av någon part senast #agreement.termination.notice_period
      före avtalstidens utgång förlängs Avtalet med #agreement.scope.auto_extension åt gången med #agreement.termination.notice_period  uppsägningstid. 
      
      Uppsägning ska ske skriftligt.

      = Ändring av Avtalet
      #for paragraph in agreement.amendmets [
        #par(paragraph)
      ]

      = Hävning av Avtalet
      #for paragraph in agreement.termination.details [
        #par(paragraph)
      ]

      = Tillämplig lag och tvistlösning
      #par(agreement.governing_law.law)
      #par(agreement.governing_law.dispute)

      = Befriande omständigheter
      #for paragraph in agreement.force_majeure [
        #par(paragraph)
      ]

      #align(bottom,  [
        Avtalet är upprättat i två (2) identiska exemplar, varav parterna erhållit var sitt.
        #grid(
          columns: (1fr, 1fr), 
          gutter: space_3, [
            ==== För #client.name
            #table(
              columns: (3cm, 1fr),
              stroke: 0pt,
              inset: (left: 0pt, bottom: 0pt),
              table.cell(inset: (top: space_4), [*Ort & datum:*]),[],
              table.hline(start: 1),
              table.cell(colspan:2, inset: (top: space_3 * 2), stroke: (bottom: 0.5pt), []),
              table.hline(),
              table.cell(colspan:2, client.contact.name)
            )
          ],[
            ==== För #consultant.name
            #table(
              columns: (3cm, 1fr),
              stroke: 0pt,
              inset: (left: 0pt, bottom: 0pt),
              table.cell(inset: (top: space_4), [*Ort & datum:*]),[],
              table.hline(start: 1),
              table.cell(colspan:2, inset: (top: space_3 * 2), stroke: (bottom: 0.5pt), []),
              table.hline(),
              table.cell(colspan:2, [Henrik Becker])
            )
          ]
        )
      ])
  ]
}