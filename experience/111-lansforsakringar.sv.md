---
title: Länsförsäkringar
#name: Länsförsäkringar
slug: lansforsakringar
#sitemap: true
via:
- Avega Group
roles: 
 - Systemutvecklare
#employer: avega-group
#location: Stockholm, Sweden
start_date: 2009-09-01
end_date: 2011-05-01
skills:
 - VB.NET
 - WCF
 - WPF
 - Oracle
 - SQL Server
 - Team Foundation Server
 - Continuous Integration
 - Test Driven Development
description: Backend-utveckling, databasmigrering och prestandaarbete på Länsförsäkringars betalplattform, inklusive en övergång från Oracle till SQL Server.
highlights:
 - Ledde migreringen av betalplattformens databas från Oracle till SQL Server.
 - Byggde ut en WCF-baserad betalplattform med stöd för automatiserade betalningar och betalningsuppmaningar.
 - Undersökte och förbättrade prestanda i plattformen och dess anslutande system.
---
<!--more-->
## Kontext
Jag kom till [Länsförsäkringar](https://www.lf.se) på ett långt uppdrag via [Avega Group](https://avega.se/), och arbetade med betalplattformen och flera kringliggande system.

## Arbete
### Databasmigrering
- Arbetade med att migrera betalplattformens databas från **Oracle** till **SQL Server**
- Anpassade lagrade procedurer, datamodeller och integrationspunkter
- Deltog i analys, planering och validering av den nya SQL Server-miljön
### Betalplattformen
- Arbetade med ett tjänstelager i **WCF** som interna system använde för autogiro och betalningspåminnelser
- Vidareutvecklade och förvaltade affärslogik i **VB.NET**
### JD Edwards EnterpriseOne
- Läste verksamhets- och ekonomidata direkt från databasen i **JD Edwards EnterpriseOne** och anpassade den för betalplattformen
### Prestanda
- Jämförde olika angreppssätt efter migreringen: loopar i databasen, lagrade procedurer och logik i applikationen
- Fann att upprepade anrop till en SQL Server-funktion från en loop i VB.NET, mot förväntan, var snabbare än att loopa i en lagrad procedur, trots de extra rundresorna
### Utvecklingspraxis
- **Team Foundation Server**, **kontinuerlig integration** och **testdriven utveckling** i ett **Scrum**-team
