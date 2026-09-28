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
Efter Sigtuna tog ICA Banken in mig för att titta på en lagrad procedur i SQL Server som brukade bli klar på några minuter men hade börjat köra i nästan ett helt dygn innan den tyst föll. Deras seniora utvecklare hade lagt veckor på databaslogiken utan att hitta orsaken.

## Arbete
### Felsökning
- Tittade på hela flödet runt den lagrade proceduren, inte bara SQL-koden
- Hittade att orsaken inte låg i databasen alls, utan i en ändring i en extern komponent som fick processen att vänta i all oändlighet
- Löste det inom några timmar
### Databasgranskning
- Granskade databasdesign och driftrutiner, med rekommendationer kring säkerhet och förvaltningsbarhet
### Verktyg
- Byggde ett VBScript-baserat inventeringsverktyg för SQL Server med WMI

## Resultat
- Ett problem som hade blockerat teamet i veckor löstes på några timmar
