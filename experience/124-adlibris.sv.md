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
  - name: Backend-utveckling
    weight: .9
    tech: 
      - C#
      - Asp.NET Core
      - Asp.NET MVC
      - SQL Server
  - name: Frontend-utveckling
    weight: .5
    tech:
      - JavaScript
      - React
      - jQuery
  - name: Systemintegration
    weight: .75  
    tech:
      - Identity Server (OpenID/Oauth)
      - Azure App Services
  - name: Automatisering      
    weight: .5
    tech:
      - Octopus Deploy
---
<!--more-->
## Kontext
[Adlibris](https://www.adlibris.com/) är Nordens största nätbokhandel. År 2021 gick jag in i Storefront-teamet som fullstackutvecklare. Teamet var mitt i två saker:

- att successivt flytta storefronten från jQuery till React
- att bryta ut delar av en långlivad backendmonolit till egna tjänster

Samtidigt byggdes en ny mobilapp, och Adlibris utvärderade alternativ för ett nytt CMS.

## Arbete
### Backendutveckling
- Byggde en OpenID Connect/OAuth2-identitetstjänst med IdentityServer4, för både den nya appen och storefronten
- Byggde API:er i ASP.NET Core och .NET 5 som användes av Storefront- och Account Management-teamen
- Arbetade med att bryta upp backendmonoliten
### Frontendutveckling
- Arbetade med flytten från jQuery till React och byggde React-komponenter för storefronten
- Mindre UI-rättningar i JavaScript och jQuery
### CMS-utvärdering
- Byggde en proof of concept för strukturerad innehållsmodellering i Contentful, som användes i CMS-utvärderingen
### Automation
- Satte upp driftsättningar för nya tjänster i Octopus Deploy
