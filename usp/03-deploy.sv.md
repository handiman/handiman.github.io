---
title: Automatiserad deploy
slug: automated-delivery
sitemap: true
description: Tråkiga, automatiserade driftsättningar med GitHub Actions, Azure Pipelines, Octopus Deploy eller det teamet redan har. Från 45 minuter till 5 på Norconsult Astando.
---
Deploy ska vara tråkigt. På Norconsult Astando kortade jag deploytiden från runt 45 minuter till cirka 5; på Plejmo från cirka en timme till under två minuter.

Jag använder **GitHub Actions**, **Azure Pipelines**, **Octopus Deploy** – eller det teamet redan har.   
<!--more-->
Automatiserad deploy har många praktiska fördelar:
- **Det sparar tid** – deploy slutar vara en tidstjuv
- **Det är pålitligt** – samma steg körs på samma sätt varje gång
- **Det är personoberoende** – vem som helst kan starta en release, eller så sker den helt automatiskt

Här är två exempel på hur jag har hjälpt team att gå från manuella driftsättningar till förutsägbar, automatiserad deploy.

### [Norconsult Astando AB][astando]

**Isy Road** hade en helt manuell deployprocess.
Dokumentationen var utspridd över flera dokument och inte uppdaterad.
Jag hjälpte kunden att sätta upp automatiserad deploy för Isy Road som ett pilotprojekt. Vi använde **Octopus Deploy**, och fördelarna var bland annat:

* Deploytiden minskade från ~45 minuter till ~5 minuter per applikationsinstans – 15 stycken vid den tiden.
* Automatiserad databasdeploy.
* Större förtroende för processen.
* I stort sett inga deployrelaterade fel.

Pilotprojektet blev så lyckat att vi satte upp automatiserad deploy även för produkterna **Isy Map** och **Isy Case**.

### [Plejmo][plejmo]

**Plejmo** hade en helt manuell deployprocess som inte var särskilt svår, men som stal mycket tid från vårt lilla utvecklingsteam. Tid som hade kunnat användas bättre till att utveckla produkten.
Med **Octopus Deploy** kunde vi:

* Minska deploytiden från ~1 timme till under 2 minuter.
* Automatisera databasdeploy.
* I stort sett eliminera deployrelaterade fel.

Deployprocessen blev så snabb och smärtfri att vi kunde driftsätta flera gånger om dagen (vilket vi också ofta gjorde) – även när trycket var som störst.

[astando]: /sv/experience/norconsult-astando/
[plejmo]: /sv/experience/film2home/
