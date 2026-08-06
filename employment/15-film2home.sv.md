---
title: Film2Home
name: Plejmo Backend Developer
slug: film2home
roles: 
 - Fullstack Developer
organization:
 id: film2home
 name: Film2Home AB
 type: Digital movie rental & streaming service
 address:
  city: Stockholm
start_date: 2014-11-03
end_date: 2015-08-27
buzzwords: 
 - CQRS
 - REST
 - OAuth
highlights:
 - Utveckling av VOD-sajterna Film2Home och Plejmo.
 - Designade version 1 av Plejmos REST-API.
 - Automatiserade driftsättningen och eliminerade därmed den mänskliga faktorn, vilket minskade driftsättningstiden från en timme till några minuter.
 - Ökade prestandan genom att refaktorisera från en traditionell n-skiktsarkitektur till en service bus-arkitektur, vilket avlastade frontend-sajterna.
---
<!--more-->
## Om rollen
Jag anslöt till Film2Home för att arbeta med deras Video-on-Demand-plattformar **Film2Home** och **Plejmo**. Det här var början på mitt långa engagemang i Plejmo — att designa dess första publika API, förbättra prestanda och modernisera hur plattformen byggdes och driftsattes.

## Vad jag arbetade med
### Plattformsutveckling
Jag arbetade över hela stacken på både Film2Home och Plejmo, implementerade nya funktioner, förbättrade stabiliteten och städade upp äldre kodvägar i takt med att tjänsterna utvecklades.

### Plejmo REST API v1
Jag designade och implementerade den första versionen av Plejmos REST-API. Målen var:

- en tydlig, konsekvent resursmodell
- förutsägbart beteende för klienter
- en grund som kunde utvecklas utan att bryta kompatibiliteten

### CQRS och service bus-arkitektur
En stor del av mitt arbete handlade om att tänka om kring hur plattformen hanterade belastning och komplexitet. Jag introducerade **CQRS** och flyttade systemet från en traditionell n-skiktsarkitektur till en **service bus-baserad** design. Det här skiftet:
- separerade läsningar och skrivningar för bättre prestanda och tydlighet
- avlastade tungt arbete från frontend-sajterna
- möjliggjorde asynkron bearbetning av uppgifter
- gjorde systemet mer modulärt och lättare att utöka

### CI/CD-automation
Jag automatiserade driftsättningsprocessen med **Octopus Deploy**, och ersatte ett långsamt, manuellt och felbenäget arbetsflöde. Resultaten var:
- driftsättningstiden minskade från cirka en timme till några minuter
- färre misstag och återställningar
- en förutsägbar, repeterbar releaseprocess

## Reflektion
Film2Home var där Plejmos tekniska grunder lades — API:et, CQRS- och service bus-arkitekturen och CI/CD-pipelinen. Det lade grunden för allt jag senare gjorde hos Magine, och påverkade så småningom mitt arbete med händelsedrivna system och gamification hos Betsson.
