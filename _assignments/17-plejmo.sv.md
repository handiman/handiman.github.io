---
title: Film2Home/Plejmo
name: Film2Home/Plejmo
slug: film2home
sitemap: true
teaser: Levererade förbättringar inom backend, frontend och DevOps på Film2Home- och Plejmo-plattformarna, inklusive API-design och automatiserad driftsättning.
group: projects
roles: 
 - Fullstack Developer
 - DevOps
employer: /employment/16-magine-tv
location: Stockholm, Sweden
start_date: 2014-11-03
end_date: 2017-07-05
skills:
 - Asp.NET MVC
 - Asp.NET Web Api
 - C#
 - .NET Framework
 - TDD 
 - CQRS
 - Continuous Integration
 - Octopus Deploy
 - JavaScript
 - jQuery
 - KnockoutJS
 - NHibernate
 - SQL Server
 - Micro Services
 - CSS
 - HTML
 - EPiServer
 - IIS
description: |
 Back- och frontend-utveckling av en VOD-tjänst (Video On Demand) baserad på Asp.NET MVC och EPiServer. DevOps-uppgifter inklusive konfigurering av webbplatser, automatiserade byggen och automatiserad driftsättning.
highlights: 
 - Utveckling av VOD-sajterna Film2Home och Plejmo.
 - Designade Plejmos REST-API.
 - Automatiserade driftsättningen och eliminerade därmed den mänskliga faktorn, vilket minskade driftsättningstiden från en timme till några minuter.
 - Ökade prestandan genom att refaktorisera från en traditionell n-skiktsarkitektur till en service bus-arkitektur, vilket avlastade frontend-sajterna.
competencies:
  - name: Backend development
    weight: .9
    tech:
      - C#
      - .NET Framework
      - Asp.NET MVC
      - Asp.NET Web Api
      - NHibernate
      - SQL Server
      - EPiServer
  - name: Architecture
    weight: .4
    tech:
      - CQRS
      - Micro Services
      - Rest APIs
  - name: System integration
    weight: .6
    tech:
      - Azure Service Bus
      - Rest APIs
      - WCF
  - name: Frontend development
    weight: .7
    tech:
      - JavaScript
      - jQuery
      - KnockoutJS
  - name: Automation
    weight: .7       
    tech:
      - Octopus Deploy
---
<!--more-->
## Kontext
Film2Home var ursprungligen ett fristående Video-on-Demand-bolag ägt av Bonver. Efter att bolaget gått i konkurs förvärvades det av Magine TV, som fortsatte driva och vidareutveckla plattformen under både varumärkena Film2Home och Plejmo.

Från 2014 till 2017 arbetade jag som fullstackutvecklare och DevOps-ingenjör på dessa tjänster. Plattformen kombinerade ASP.NET MVC-applikationer, EPiServer-baserad innehållshantering och en växande uppsättning backend-tjänster som stöttade katalog, betalningar, användarkonton och innehållsmetadata.

Arbetet spände över fullstackutveckling, systemintegration och DevOps i en miljö där snabb iteration, stabilitet och driftsäkerhet var lika viktiga.

## Problem
Det befintliga systemet stod inför flera utmaningar typiska för mognande VOD-plattformar:

- En traditionell n-skiktsarkitektur som kämpade med prestanda under belastning
- Manuella driftsättningar som var långsamma, felbenägna och svåra att koordinera
- Ökande komplexitet kring tredjepartsintegrationer (betalningar, metadataleverantörer, etc.)
- Ett behov av en modernare API-yta i takt med att nya klienter och webbapplikationer introducerades

Målet var att förbättra prestanda, minska operativ friktion och stötta plattformens utveckling utan att destabilisera pågående drift.

## Tillvägagångssätt
Mitt arbete kombinerade arkitekturell refaktorisering, backend-utveckling, frontend-förbättringar och DevOps-automation. Viktiga områden inkluderade:
### Arkitektur
- Introducerade CQRS-mönster för att separera läsningar från skrivningar och förbättra skalbarheten
- Refaktoriserade delar av systemet mot en service bus-driven arkitektur med Azure Service Bus
- Skapade mikrotjänster för tredjepartsintegrationer för att minska koppling och förbättra tillförlitlighet
- Möjliggjorde snabb experimentering genom att frikoppla komponenter, vilket gjorde det enkelt att koppla in nya funktioner och tjänster
### Backend-utveckling
- Byggde och underhöll ASP.NET MVC- och ASP.NET Web API-applikationer
- Designade och implementerade version 1 av Plejmos REST-API
- Utvecklade domänlogik med C#, .NET Framework, NHibernate och SQL Server
- Byggde en proof-of-concept-gamificationtjänst (nivåer, prestationer, etc.) som integrerades smidigt tack vare den nya service bus-arkitekturen
### Frontend-utveckling
- Implementerade UI-funktioner med JavaScript, jQuery och KnockoutJS
- Förbättrade klientsidans prestanda och responsivitet
- Samarbetade med designers och innehållsteam som arbetade i EPiServer
### Systemintegration
- Byggde och underhöll integrationer med externa metadata- och betalningsleverantörer
- Utvecklade och underhöll REST- och WCF-tjänster för interna och externa konsumenter
### Automation & DevOps
- Konfigurerade automatiserade byggen och driftsättningspipelines med Octopus Deploy
- Minskade driftsättningstiden från cirka en timme till några minuter
- Eliminerade manuella driftsättningsfel genom automation och miljökonsekvens
- Hanterade IIS-konfigurationer och sajtuppsättning över flera miljöer

## Resultat
- Levererade Film2Home- och Plejmo-webbplattformarna på flera marknader
- Designade och lanserade Plejmos första REST-API, vilket möjliggjorde nya klienter och integrationer
- Minskade driftsättningstiden dramatiskt och förbättrade den operativa stabiliteten genom automation
- Ökade systemprestanda genom att refaktorisera från en traditionell n-skiktsarkitektur till en service bus-orienterad approach
- Förbättrade skalbarhet och tillförlitlighet genom att isolera tredjepartsintegrationer i dedikerade tjänster
- Visade den nya arkitekturens flexibilitet genom en gamification-proof-of-concept som kunde läggas till med minimal friktion

## Reflektion
Det här projektet belyste värdet av att kombinera fullstackutveckling med DevOps-disciplin. Många av de mest betydelsefulla förbättringarna kom från att förenkla arkitekturen, minska driftsättningsfriktionen och förtydliga systemgränserna.
Att arbeta på en konsumentvänd VOD-plattform förstärkte också vikten av prestanda, stabilitet och förutsägbar leverans — särskilt när kunder förväntar sig omedelbar tillgång till innehåll.


