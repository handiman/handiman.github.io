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
Jag kom till Magine TV för att fortsätta utveckla **Plejmo**, som Magine hade köpt från Film2Home. Jag hade redan arbetat med Plejmo på Film2Home, så det var en naturlig fortsättning.

## Vad jag gjorde
### Plejmos REST-API
Jag höll **API v1** stabilt och bakåtkompatibelt medan jag designade och implementerade **API v2**, som tillförde:

- OAuth-baserad tokenautentisering
- en renare modell för att leverera metadata
- nya endpoints för den kommande Plejmo-appen
- stöd för tredjepartsintegrationer, bland annat MovieZine och Whatson, en finsk VOD-tjänst i Vasa

### Proof of concept för gamification
Jag byggde en proof of concept för **nivåer och prestationer**. Eftersom Plejmo redan körde på den **service bus-arkitektur** jag byggt på Film2Home var det enkelt att lägga till en fristående tjänst som prenumererade på användarhändelser och delade ut prestationer och progression.

Idén kom tillbaka flera år senare på Betsson, där nivåer och prestationer blev mitt dagliga jobb.

### Analys (Segment.io)
- Implementerade händelsepublicering till Segment.io, så att användaraktivitet kunde följas över klienter och tjänster

### CI/CD
- Höll Octopus Deploy-pipelinen från Film2Home igång och uppgraderade Octopus och tillhörande verktyg
