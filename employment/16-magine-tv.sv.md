---
title: MagineTV
name: Plejmo Backend Developer
slug: magine-tv
sitemap: true
roles: 
 - Fullstack Developer
organization:
 id: magine
 name: Magine TV AB
 type: Cloud‑based TV streaming platform, startup
 address:
  city: Stockholm
start_date: 2015-09-14
end_date: 2017-07-05
highlights:
 - Fortsatte utvecklingen av VOD-sajten Plejmo.
 - Designade version 2 av Plejmos REST-API.
 - Fortsatte förbättra de CI/CD-processer jag satte upp hos Film2Home.
---
<!--more-->
## Om rollen
Efter Film2Homes konkurs köpte Magine TV **Plejmo** och handplockade några av utvecklarna. Jag var en av dem.

## Vad jag gjorde
### Plejmos REST-API
Jag höll **API v1** stabilt och bakåtkompatibelt medan jag designade och implementerade **API v2**, som tillförde:

- OAuth-baserad tokenautentisering
- en renare modell för att leverera metadata
- nya endpoints för den kommande Plejmo-appen
- stöd för tredjepartsintegrationer, bland annat MovieZine och Whatson, en finsk VOD-tjänst i Vasa

### Proof of concept för gamification
Jag byggde en proof of concept för **nivåer och prestationer**. Eftersom Plejmo redan körde på den **service bus-arkitektur** jag byggt på Film2Home var det enkelt att lägga till en fristående tjänst som prenumererade på användarhändelser och delade ut prestationer och progression.

Erfarenheten kom väl till pass flera år senare på Betsson i projektet Levels & Achievements.

### Analys (Segment.io)
- Implementerade händelsepublicering till Segment.io, så att användaraktivitet kunde följas över klienter och tjänster

### CI/CD
- Höll Octopus Deploy-pipelinen från Film2Home igång och uppgraderade Octopus och tillhörande verktyg
