---
title: Automatiserade leveranser
slug: automated-delivery
sitemap: true
description: Tråkiga, automatiserade driftsättningar med GitHub Actions, Azure Pipelines, Octopus Deploy eller TeamCity. Från 45 minuter till 5 på Norconsult Astando.
---
Driftsättningar ska vara tråkiga. På Norconsult Astando kortade jag dem från ungefär 45 minuter till ungefär 5; på Plejmo från en timme till under två minuter.

**GitHub Actions**, **Azure Pipelines**, **Octopus Deploy** eller **TeamCity** – det teamet redan har.
<!--more-->Det ger också några praktiska fördelar:
- **Det sparar tid** – driftsättningar blir en icke-händelse i stället för en tidstjuv
- **Det är pålitligt** – samma steg körs på samma sätt varje gång
- **Det är personoberoende** – vem som helst kan starta en release, eller så sker den helt automatiskt

Här är två exempel på hur jag har hjälpt team att gå från manuella driftsättningar till förutsägbara, automatiserade leveranser.

### [Norconsult Astando AB][astando]

**Isy Road** hade en helt manuell driftsättningsprocess.
Dokumentationen var utspridd över flera dokument och inte uppdaterad.
Jag hjälpte kunden att sätta upp automatiserad driftsättning för Isy Road som ett pilotprojekt. Vi använde **Octopus Deploy**, och fördelarna var bland annat:

* Driftsättningstiden minskade från ~45 minuter till ~5 minuter per applikationsinstans – 15 stycken vid den tiden.
* Automatiserad databasdriftsättning.
* Större förtroende för driftsättningsprocessen.
* I stort sett inga driftsättningsrelaterade fel.

Pilotprojektet blev så lyckat att vi satte upp automatiserad driftsättning även för produkterna **Isy Map** och **Isy Case**.

### [Plejmo][plejmo]

**Plejmo** hade en helt manuell driftsättningsprocess som inte var särskilt svår, men som stal mycket tid från det lilla utvecklingsteamet – tid som borde ha gått till att utveckla produkten.
Med **Octopus Deploy** kunde vi:

* Minska driftsättningstiden från ~1 timme till under 2 minuter.
* Automatisera databasdriftsättningen.
* I stort sett eliminera driftsättningsrelaterade fel.

Driftsättningen blev så snabb och smärtfri att vi kunde (och ibland gjorde) driftsätta flera gånger om dagen – även när trycket var som störst.

[astando]: /sv/experience/norconsult-astando/
[plejmo]: /sv/experience/film2home/
