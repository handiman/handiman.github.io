---
title: Länsförsäkringar
name: Länsförsäkringar
slug: lansforsakringar
sitemap: true
roles: 
 - System Developer
employer: avega-group
location: Stockholm, Sweden
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
highlights:
 - Var instrumentell i migreringen av betalplattformens databas från Oracle till SQL Server.
 - Arbetade med utvecklingen av en WCF-baserad betalplattform med stöd för automatiska betaltjänster och betalningsuppmaningar.
 - Kvalitetssäkring och prestandaoptimering av anslutande system.
---
<!--more-->
## Kontext
Jag anslöt till [Länsförsäkringar](https://www.lf.se) som en del av ett långsiktigt uppdrag via [Avega Group](https://avega.se/), och arbetade med bolagets betalplattform och flera kringliggande system. Arbetet spände över backend-utveckling, databasmigrering, prestandautredningar och kvalitetssäkring i en komplex finansiell miljö.

## Arbete
### Databasmigrering
- Spelade en nyckelroll i migreringen av betalplattformens databas från **Oracle** till **SQL Server**
- Anpassade lagrade procedurer, datamodeller och integrationspunkter för att säkerställa funktionsparitet och acceptabel prestanda
- Tog på mig ansvar som normalt skulle falla på DBA:er eller arkitekter, inklusive analys, planering och validering av den nya SQL Server-miljön
### Utveckling av betalplattformen
- Arbetade med ett **WCF-baserat** tjänstelager som användes av interna system ansvariga för automatiserade betalningar och betalningsuppmaningar
- Vidareutvecklade och underhöll affärslogik implementerad i **VB.NET**
- Säkerställde att tjänsten betedde sig förutsägbart under belastning och integrerade rent med kringliggande system
### Integration med JD Edwards EnterpriseOne
- Läste operativ och finansiell data direkt från **JD Edwards EnterpriseOne**-databasen
- Implementerade logik för att översätta och anpassa JDE:s datastrukturer till format lämpliga för betalplattformen
- Bidrog till att säkerställa konsekvens mellan JDE:s datamodell och den framväxande SQL Server-baserade plattformen
### Kvalitetssäkring & prestanda
- Undersökte hur olika tillvägagångssätt presterade efter migreringen från Oracle till SQL Server
- Utförde prestandajämförelser mellan databassidans loopar, lagrade procedurer och applikationssidans logik
- Identifierade kontraintuitiva men effektiva optimeringar — till exempel visade sig upprepade SQL Server-funktionsanrop från en VB.NET-loop vara snabbare än att loopa inuti en lagrad procedur, trots det ökade antalet nätverksanrop
- Tillämpade dessa insikter för att förbättra genomströmning och stabilitet i betalplattformen och dess integrationer
### Utvecklingspraxis
- Arbetade med **Team Foundation Server** för versionshantering och byggautomation
- Deltog i **kontinuerlig integration**-flöden
- Tillämpade **testdriven utveckling** där det var lämpligt för att förbättra kodkvalitet och minska regressioner
- Arbetade inom ett **Scrum**-team, bidrog som utvecklare samtidigt som jag stöttade teamets sprintbaserade leveranstakt
### Resultat
- Stöttade framgångsrikt övergången från Oracle till SQL Server, vilket minskade licenskostnader och förenklade plattformen
- Stärkte betalplattformen med förbättrad tillförlitlighet och tydligare prestandaegenskaper

## Reflektion
Det här uppdraget kombinerade djupt tekniskt arbete med långsiktigt plattformsförvaltarskap. Databasmigreringen krävde noggrann analys och en stark förståelse för både Oracle och SQL Server, medan prestandautredningarna gav insikter som formade hur plattformen utvecklades. Integrationen med JD Edwards EnterpriseOne lade till ytterligare ett lager av komplexitet och gav mig värdefull erfarenhet av storskaliga finansiella system och deras datamodeller.
