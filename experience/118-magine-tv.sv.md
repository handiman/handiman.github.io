---
title: MagineTV
name: Plejmo Backend Developer
slug: magine-tv
sitemap: true
roles: 
 - Fullstack-utvecklare
organization:
 id: magine
 name: Magine TV AB
 type: Cloud‑based TV streaming platform, startup
 address:
  city: Stockholm
start_date: 2015-09-14
end_date: 2017-07-05
description: Fortsatt utveckling av tjänsterna Film2Home och Plejmo efter Magine TV:s förvärv.
highlights:
 - Fortsatte utvecklingen av VOD-sajten Plejmo.
 - Designade version 2 av Plejmos REST-API.
 - Fortsatte förbättra de CI/CD-processer som etablerats hos Film2Home.
skills:
 - C#
 - Asp.NET Web Api
 - Azure Service Bus
 - CQRS
 - Octopus Deploy
 - Asp.NET MVC
 - .NET Framework
 - TDD
 - REST API
 - WCF
 - Continuous Integration
 - JavaScript
 - jQuery
 - KnockoutJS
 - NHibernate
 - Dapper
 - SQL Server
 - Micro Services
 - CSS
 - HTML
 - EPiServer
 - IIS
 - Git
---
<!--more-->
## Om rollen
När Film2Home gick i konkurs köpte Magine TV **Plejmo** och handplockade några av oss som hade byggt tjänsten. Jag var en av dem. Jag fortsatte med samma plattform: förbättrade den, utökade API:et och skötte CI/CD-pipelinen jag hade byggt på Film2Home.

## Vad jag arbetade med
### Plejmo REST API
Jag höll **API v1** stabilt och bakåtkompatibelt samtidigt som jag designade och implementerade **API v2**, som introducerade:

- OAuth-baserad tokenautentisering
- en ny, renare modell för att leverera metadatainnehåll
- nya endpoints avsedda för den kommande Plejmo-appen
- stöd för tredjepartsintegrationer, inklusive MovieZine och en finsk VOD-tjänst i Vasa (Whatson)

### Gamification Proof of Concept
Jag byggde en proof-of-concept för ett **nivå- och prestationssystem**. Eftersom jag ursprungligen hade implementerat Plejmos **service bus-arkitektur** hos Film2Home var det enkelt att lägga till en fristående tjänst som prenumererade på relevanta händelser. PoC:n:

- konsumerade användaraktivitetshändelser från service busen
- delade ut prestationer och progression baserat på dessa händelser

Erfarenheten kom väl till pass flera år senare på Betsson i projektet Levels & Achievements.

### Analysintegration (Segment.io)
Segment.io var en del av produktionssystemet. Jag implementerade händelsepublicering så att användaraktivitet och plattformshändelser kunde spåras konsekvent över klienter och tjänster.

### CI/CD-pipeline
CI/CD-pipelinen byggd kring **Octopus Deploy** var redan i gott skick tack vare arbetet jag gjort hos Film2Home.
Hos Magine handlade det mer om förvaltning än nyskapande. Mitt fokus låg på:

- att hålla pipelinen stabil och tillförlitlig
- att uppgradera Octopus Deploy och relaterade verktyg
