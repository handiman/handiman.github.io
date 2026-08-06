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
---
<!--more-->
## Om rollen
Jag anslöt till Magine TV för att fortsätta utvecklingen av **Plejmo**, en Video-on-Demand-tjänst som Magine hade förvärvat från Film2Home. Eftersom jag redan hade arbetat med Plejmo hos Film2Home var den här rollen en naturlig fortsättning — att förbättra plattformen, utöka API:et och underhålla den CI/CD-pipeline jag ursprungligen byggt.

## Vad jag arbetade med
### Utveckling av Plejmo-plattformen
Jag arbetade över hela stacken för att vidareutveckla Plejmo-tjänsten, med fokus på stabilitet, underhållbarhet och stegvisa förbättringar av både backend- och frontend-komponenter.

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

### Analysintegration (Segment.io)
Segment.io var en del av produktionssystemet. Jag implementerade händelsepublicering så att användaraktivitet och plattformshändelser kunde spåras konsekvent över klienter och tjänster.

### CI/CD-pipeline
CI/CD-pipelinen byggd kring **Octopus Deploy** var redan i gott skick tack vare arbetet jag gjort hos Film2Home.
Hos Magine handlade det mer om förvaltning än nyskapande. Mitt fokus låg på:

- att hålla pipelinen stabil och tillförlitlig
- att uppgradera Octopus Deploy och relaterade verktyg
- att fördjupa min förståelse för Octopus och tillämpa förbättringar där det var användbart

## Reflektion
Magine var en fortsättning på arbetet jag påbörjat hos Film2Home, men inom ett större streamingfokuserat bolag. Det var stadig, praktisk utveckling på en produkt jag kände väl, med utrymme att modernisera de delar som behövde det och utrymme att utforska tidiga idéer kring gamification som senare blev en större del av mitt arbete.

