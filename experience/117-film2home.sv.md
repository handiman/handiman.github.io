---
title: Film2Home
#name: Film2Home/Plejmo
slug: film2home
#sitemap: true
#teaser: Delivered backend, frontend, and DevOps improvements across the Film2Home and Plejmo platforms, including API design and automated deployment.
#group: projects
roles: 
 - Fullstack-utvecklare
 - DevOps
#employer: /employment/16-magine-tv
#location: Stockholm, Sweden
start_date: 2014-11-03
end_date: 2015-09-01
skills:
 - C#
 - Asp.NET MVC
 - Azure Service Bus
 - CQRS
 - Octopus Deploy
 - Asp.NET Web Api
 - .NET Framework
 - TDD
 - REST API
 - WCF
 - Continuous Integration
 - JavaScript
 - jQuery
 - KnockoutJS
 - NHibernate
 - SQL Server
 - Dapper
 - Micro Services
 - CSS
 - HTML
 - EPiServer
 - IIS
 - Git
description: |
 Fullstackutveckling av VOD-tjänsterna (Video On Demand) Film2home och Plejmo, baserade på Asp.NET MVC och EpiServer. DevOps-uppgifter inklusive konfigurering av webbplatser, automatiserade byggen och automatiserad driftsättning.
key_highlight: 'Automatiserade driftsättningen, vilket minskade driftsättningstiden från cirka en timme till under två minuter'
highlights: 
 - Automatiserade driftsättningen, vilket minskade driftsättningstiden från cirka en timme till under två minuter.
 - Ökade prestandan genom att refaktorisera från en traditionell n-skiktsarkitektur till en service bus-arkitektur, vilket avlastade frontend-sajterna.
 - Designade Plejmos REST-API.
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
Film2Home var ett Video-on-Demand-bolag ägt av Bonver. Efter Bonvers konkurs köptes det av Magine TV, som fortsatte driva plattformen under både Film2Home och Plejmo.

Från 2014 till 2017 arbetade jag med tjänsterna som fullstackutvecklare och skötte även DevOps-arbetet. Plattformen bestod av ASP.NET MVC-applikationer med EPiServer för innehåll, plus backendtjänster för katalog, betalningar, användarkonton och metadata.

## Problem
- En traditionell n-skiktsarkitektur som hade svårt att klara belastningen
- Manuella driftsättningar som tog cirka en timme och var felbenägna
- Tredjepartsintegrationer för betalningar och metadata som blev allt svårare att hantera
- Inget API för de nya klienter som var på väg

## Tillvägagångssätt
### Arkitektur
- Införde CQRS för att separera läsningar från skrivningar
- Flyttade delar av systemet till en service bus-arkitektur på Azure Service Bus
- Bröt ut tredjepartsintegrationer till egna tjänster
### Backendutveckling
- Byggde och förvaltade ASP.NET MVC- och ASP.NET Web API-applikationer med C#, NHibernate och SQL Server
- Designade och implementerade version 1 av Plejmos REST-API
- Byggde en proof of concept för gamification (nivåer och prestationer) ovanpå service busen
### Frontendutveckling
- Byggde UI-funktioner i JavaScript, jQuery och KnockoutJS
- Arbetade med designers och redaktörer som använde EPiServer
### Systemintegration
- Byggde och förvaltade integrationer mot metadata- och betalleverantörer
- Byggde REST- och WCF-tjänster för interna och externa konsumenter
### Automation & DevOps
- Satte upp automatiserade byggen och driftsättningar med Octopus Deploy
- Skötte IIS-konfigurationen i alla miljöer

## Resultat
- Driftsättningstiden gick från cirka en timme till under två minuter, med i stort sett inga driftsättningsfel
- Bättre prestanda under belastning efter bytet från n-skikt till service bus-arkitektur
