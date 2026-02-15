---
title: "Project Confirmation"
reference: "14818"

parties:
  client_company: "Aston Carter International Limited UK Filial"
  client_company_registration: "516404-0163"
  client_company_address: "Drottninggatan 27, 6th floor, 111 51 Stockholm, Sweden"
  client_brand: "TEKsystems"

  consultant_company: "Henrik Becker Consulting AB"
  consultant_company_registration: "559120-2147"
  consultant_company_address: "Ängsklockevägen 87, 181 57 Lidingö"

preamble:
  - "Recruitment company providing consultants to clients."
  - "Consultant company specialized in technical IT services."
  - "Client intends to carry out the project described below."

project_details:
  client: "Betsson Technologies AB"

  consultant:
    primary: "Henrik Becker"
    substitute_allowed: true
    substitute_description: "Other personnel provided by the consultant company if needed."

  project_role: "Back End Developer (.NET)"
  services_description: "Backend development services within .NET as required for the project."

commercial_terms:
  agreed_rate:
    amount_sek: 870
    currency: "SEK"
    vat_included: false
    unit: "hour"

  standard_hours_per_week: 40

  excess_hours:
    allowed: true
    condition: "Must be approved in writing by the client before work begins."
    rate: "Agreed Rate"

invoicing:
  schedule: "Monthly in arrears"
  reference_clause: "Clause 3.1"   # You can remove this if irrelevant in your own version

resources:
  site:
    applicable: false
    address: "Regeringsgatan 28, 111 53 Stockholm"

project_period:
  duration: "6 months"
  start_date: "2021-10-11"
  end_date: "2022-04-10"

notice_period:
  duration: "1 month"
  reference: "Article 12.2"
  description: "Either party may terminate the agreement with written notice."

specific_terms:
  applicable: false
  notes: []

signatures:
  acknowledgement:
    description: "Parties confirm that they have read and agreed to the general terms and conditions."

  location: "Stockholm"
  date_signed: "2021-09-24"

  client_representative:
    name: "Johanna Gray"
    title: "Business Support Manager"
    signature: null   # or a string if you want to store signature metadata

  consultant_representative:
    name: "Henrik Becker"
    title: "Owner"
    signature: "Henrik Becker (2021-09-24 20:15 GMT+2)"  
client_specific_addendum:
  date: "2021-09-24"

  parties:
    client_company: "Aston Carter International Limited UK Filial"
    client_company_registration: "516404-0163"
    consultant_company: "Henrik Becker Consulting AB"
    consultant_company_registration: "559120-2147"

  background:
    - "Consultant provides services under the general terms and the project confirmation."
    - "Consultant confirms receipt and acceptance of the general terms."
    - "Addendum modifies the existing agreement for the project."
    - "Addendum prevails over general terms in case of conflict."

  amendments:
    confidentiality_penalty:
      clause_reference: "6.2"
      penalty_amount_sek: 500000
      description: "Penalty per confidentiality breach; does not limit right to claim damages."

    competitor_notification:
      obligation_period: "6 months after termination"
      description: "Consultant must notify if intending to provide services to a competitor."

    external_engagements:
      approval_required: true
      description: "Other assignments during the agreement term require prior written client approval."

    working_hours:
      standard_hours_per_week: 40
      lunch_included: false
      schedule:
        days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]
        time_range: "08:00–18:00"
        flexible_by_agreement: true

  signatures:
    client_representative:
      name: "Johanna Gray"
      title: "Business Support Manager"
      signature: null
      date: null

    consultant_representative:
      name: "Henrik Becker"
      title: "Owner"
      signature: null
      date: null
---
