---
title: Sigtuna Council
#name: Sigtuna Council
slug: sigtuna-council
#sitemap: true
via: 
  - Qbranch
roles: 
 - Systemutvecklare
#employer: 09-qbranch-stockholm-ab
#location: Märsta, Sweden
start_date: 2005-10-01
end_date: 2006-03-01
skills:
 - Identity Management
 - Microsoft Identity Integration Server
 - C#
 - SQL Server
 - Novell eDirectory
 - Active Directory
 - MSMQ
 - Novell C API
 - GroupWise Administrative Objects API
description: Ensam utvecklare på en av Sveriges första driftsättningar av Microsoft Identity Integration Server (MIIS), senare använd av Microsoft som referensfall.
highlights:
 - Var ensam utvecklare på ett projekt som blev Microsofts referensfall för MIIS.
 - Implementerade management agents som kopplade samman kundens HR-system med eDirectory och Active Directory.
 - Automatiserade skapandet av GroupWise-konton och hemkataloger på Novell-servrar.
 - Skrev regeltillägg för attributflöden och kopplingar mellan katalogtjänster.
---
<!--more-->
## Kontext
Under min tid på QBranch var jag ensam utvecklare på ett identitetshanteringsinitiativ för Sigtuna kommun. Projektet byggdes på **Microsoft Identity Integration Server (MIIS)** — vid den tiden en helt ny produkt, i stort sett okänd i Sverige. Den här implementationen blev en av de första MIIS-driftsättningarna i landet och användes senare av Microsoft som ett **referensfall**, vilket innebar att jag kortvarigt tillhörde en mycket liten grupp människor i Sverige med verklig praktisk MIIS-erfarenhet.

## Arbete
### Management agents
- Implementerade MIIS management agents för kommunens HR-system, Novell eDirectory och Active Directory
- Designade och byggde attributflöden, join-regler och provisioneringslogik över flera katalogtjänster
### Provisionering & automation
- Automatiserade skapandet av GroupWise-konton med GroupWise Administrative Objects API
- Automatiserade skapandet av hemkataloger på Novell-servrar via Novell C API
- Säkerställde konsekvent hantering av identitetslivscykeln över heterogena system
### Integration & meddelandehantering
- Använde C#, SQL Server och MSMQ för att stötta synkroniseringsflöden och driftsäkerhet
- Byggde anpassade tillägg för att hantera specialfall och domänspecifika regler
## Resultat
- Levererade en av Sveriges första MIIS-baserade identitetshanteringslösningar
- Gav Microsoft ett verkligt referensfall för MIIS
- Enade identitetsprovisionering över HR, eDirectory, Active Directory och GroupWise
- Minskade manuellt kontoskapande och förbättrade konsekvensen över systemen
## Reflektion
Det här projektet var också min första riktiga kontakt med Scrum. Projektledaren och jag höll våra "daily stand-ups" i bilen på väg till kunden — dagliga avstämningar, tekniskt sett — men taktfastheten och öppenheten gjorde skillnad. Scrum hjälpte oss hålla oss samordnade och leverera i tid trots komplexiteten i att integrera flera katalogtjänster och äldre system.

Att arbeta som ensam utvecklare på en av Sveriges första MIIS-implementationer lärde mig hur man navigerar heterogena miljöer, designar robust synkroniseringslogik och automatiserar identitetsprovisionering över system som aldrig var designade för att prata med varandra. Det förblir ett av de mer tekniskt unika projekten från mina tidiga konsultår.
