---
title: Adlibris
#name: Adlibris
client: true
#employer: self-employed
logo: /assets/img/logo-adlibris.svg
organization:
  url: https://www.adlibris.com
  location: Stockholm, Sweden
roles: 
 - Fullstack-utvecklare
start_date: 2021-02-22
end_date: 2021-10-10
skills: 
 - C#
 - Asp.NET Core
 - Asp.NET MVC
 - JavaScript
 - jQuery
 - React
 - SQL Server
 - Octopus Deploy
 - Azure App Services
 - Identity Server (OpenID/Oauth)
 - Micro Services
 - Git 
description: Adlibris är Nordens största nätbokhandel med ett växande ekosystem av digitala tjänster och applikationer. År 2021 gick jag med i Storefront-teamet som fullstackutvecklare för att stötta den pågående moderniseringen av den kundvända plattformen.
highlights: 
 - OpenID/OAuth-tjänst implementerad med Identity Server 4 för den nya Adlibris-appen under utveckling.
 - API för kontohantering byggt med Asp.NET Core och .NET 5, driftsatt på Azure.
 - Innehållsmodellering och integration mot Contentful CMS.
competencies:
  - name: Backend development 
    weight: .9
    tech: 
      - C#
      - Asp.NET Core
      - Asp.NET MVC
      - SQL Server
  - name: Front end development
    weight: .5
    tech:
      - JavaScript
      - React
      - jQuery
  - name: System integration
    weight: .75  
    tech:
      - Identity Server (OpenID/Oauth)
      - Azure App Services
  - name: Automation      
    weight: .5
    tech:
      - Octopus Deploy
---
<!--more-->
## Kontext
[Adlibris](https://www.adlibris.com/) är Nordens största nätbokhandel med ett växande ekosystem av digitala tjänster och applikationer. År 2021 gick jag med i Storefront-teamet som fullstackutvecklare för att stötta den pågående moderniseringen av den kundvända plattformen.

Teamet var mitt uppe i två stora initiativ:

- successiv migrering av storefronten från jQuery till React
- refaktorisering av delar av en långlivad backend-monolit till tydligare, mer underhållbara tjänster

Samtidigt utvärderade Adlibris alternativ för ett framtida innehållshanteringssystem, och flera grundläggande delar — identitet, autentiseringsflöden och innehållsmodellering — behövde uppmärksamhet för att stötta både den föränderliga storefronten och en ny mobilapp under utveckling.

## Problem
Storefront-teamet behövde modernisera både frontend och backend samtidigt som de fortsatte leverera funktioner. Viktiga luckor inkluderade:

- ingen modern OpenID Connect/OAuth2-identitetstjänst för storefronten eller den nya appen
- saknade integrationspunkter som behövdes av Account Management-teamet
- behovet av att utforska strukturerad innehållsmodellering som en del av utvärderingen av nya CMS-alternativ
- driftsättningsautomation som behövde stötta nya tjänster
- en frontend delad mellan äldre jQuery och nya React-komponenter

Utmaningen var att stärka grunden medan storefronten aktivt byggdes om.

## Tillvägagångssätt
### Backend-utveckling
- Implementerade en OpenID Connect/OAuth2-identitetstjänst med IdentityServer4, avsedd för både den nya appen och storefronten
- Byggde stödjande API:er i ASP.NET Core och .NET 5 som användes av Storefront- och Account Management-teamen
- Bidrog till refaktoriseringsarbetet i backend-monoliten
### Frontend-utveckling
- Bidrog till den successiva migreringen från jQuery till React
- Implementerade React-komponenter som användes i den föränderliga storefronten
- Levererade mindre UI-förbättringar i JavaScript och jQuery där det behövdes
### Systemintegration
- Levererade en IdentityServer4-lösning förberedd för integration med både den nya appen och framtida autentiseringsflöden för storefronten
- Byggde en proof-of-concept för strukturerad innehållsmodellering i Contentful som en del av utvärderingen av framtida CMS-alternativ
- Säkerställde smidig kommunikation mellan backend-tjänster och Azure-hostad infrastruktur
### Automation
- Använde Octopus Deploy för att automatisera driftsättningar för nya och befintliga tjänster
- Förbättrade driftsättningskonsekvensen över miljöer

## Resultat
- Levererade en produktionsklar IdentityServer4-baserad autentiseringstjänst avsedd för både den nya appen och storefronten
- Byggde stödjande API:er som användes av Storefront- och Account Management-teamen
- Tog fram en Contentful-proof-of-concept som informerade Adlibris utvärdering av framtida CMS-plattformar
- Bidrog till React-migreringen och backend-refaktoriseringsarbetet
- Stärkte driftsättningsautomationen för Storefront-tjänster

## Reflektion
Det här projektet kombinerade identitetsteknik, API-design, frontend-modernisering och arkitekturell utforskning. Det förstärkte värdet av att förbättra grundläggande system samtidigt som en stor, kundvänd plattform moderniserades stegvis, och vikten av att kliva in och lösa de problem som behöver lösas, även när de faller utanför den ursprungliga planen.
