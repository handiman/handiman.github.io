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
 - Fullstack Developer
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
description: Adlibris is the largest online bookstore in the Nordics with a growing ecosystem of digital services and applications. In 2021, I joined the Storefront team as a Fullstack Developer to support the ongoing modernization of the customer‑facing platform.
highlights: 
 - OpenID/Oauth service implemented with Identity Server 4 for the new Adlibris app under development.
 - Account management API built with Asp.NET Core and .NET 5 hosted on Azure. 
 - Contentful CMS content modeling and integration.
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
## Context
[Adlibris](https://www.adlibris.com/) is the largest online bookstore in the Nordics. In 2021 I joined the Storefront team as a fullstack developer. The team was in the middle of two things:

- gradually moving the storefront from jQuery to React
- breaking parts of a long-lived backend monolith into separate services

At the same time a new mobile app was being built, and Adlibris was evaluating options for a new CMS.

## Work
### Backend development
- Built an OpenID Connect/OAuth2 identity service with IdentityServer4, for both the new app and the storefront
- Built APIs in ASP.NET Core and .NET 5 used by the Storefront and Account Management teams
- Worked on breaking up the backend monolith
### Frontend development
- Worked on the move from jQuery to React and built React components for the storefront
- Smaller UI fixes in JavaScript and jQuery
### CMS evaluation
- Built a proof of concept for structured content modelling in Contentful, used in the CMS evaluation
### Automation
- Set up deployments for new services in Octopus Deploy
