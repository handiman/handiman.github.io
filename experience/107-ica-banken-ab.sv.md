---
title: ICA Banken
#name: ICA Banken AB
slug: ica-banken
#sitemap: true
via: 
  - Qbranch
roles: 
 - Systemutvecklare
#employer: 09-qbranch-stockholm-ab
#location: Sundbyberg, Sweden
start_date: 2006-03-01
end_date: 2006-03-01
skills:
 - SQL Server
 - T-SQL
 - VBScript
 - XML
 - XSLT
 - WMI
description: Anlitad för att felsöka ett akut prestandaproblem i SQL Server, följt av en bredare granskning av databaskvaliteten.
highlights:
 - Diagnostiserade och löste en lagrad procedur vars körtid gått från minuter till nästan ett helt dygn.
 - Granskade databasdesign och driftrutiner och rekommenderade förbättringar.
 - Byggde ett VBScript-baserat inventeringsverktyg för SQL Server med hjälp av WMI.
---
<!--more-->
## Kontext
Efter Sigtuna kommun-projektet anlitades jag av ICA Banken för att felsöka ett långvarigt prestandaproblem i en av deras SQL Server-processer. En lagrad procedur som tidigare tog minuter att slutföra hade plötsligt börjat köra i nästan ett helt dygn innan den misslyckades tyst. Deras seniora utvecklare hade lagt veckor på att undersöka databaslogiken utan att hitta orsaken.

## Arbete
### Felsökning & optimering
- Analyserade en komplex lagrad procedur som användes för dataimport och underhåll
- Undersökte inte bara SQL-logiken utan även de externa verktyg och processer som proceduren var beroende av
- Identifierade att grundorsaken inte fanns i databasen alls, utan i en förändring i en extern komponent som fick processen att pausa på obestämd tid
- Löste problemet inom loppet av några timmar och hjälpte till att stabilisera det omgivande arbetsflödet
### Databaskvalitetsanalys
- Genomförde en granskning av databasdesign och driftrutiner
- Identifierade områden där säkerhet och underhållbarhet kunde förbättras
- Gav rekommendationer som stärkte helhetsmiljön
### Inventering & automation
- Utvecklade ett VBScript-baserat inventeringsverktyg för SQL Server med hjälp av WMI
- Hjälpte ICA Banken få bättre överblick över sitt serverlandskap och sin konfiguration

## Resultat
- Löste ett högprofilerat produktionsproblem som blockerat teamet i veckor
- Förbättrade databassäkerhet och driftshygien
- Levererade verktyg som förenklade serverinventering och administration
- Lämnade ett starkt intryck hos både ICA Bankens och QBranchs ledning

## Reflektion
Det här uppdraget blev ett av de klassiska konsultögonblicken där det verkliga problemet visade sig ligga utanför koden som alla hade granskat. Genom att ta ett steg tillbaka och se på hela arbetsflödet — inte bara SQL:en — blev grundorsaken tydlig. Det förstärkte en viktig lärdom tidigt i min karriär: ibland är den snabbaste vägen till en lösning att ifrågasätta de antaganden som alla andra redan accepterat.
