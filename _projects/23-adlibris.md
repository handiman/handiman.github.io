---
name: Adlibris
slug: adlibris
sitemap: true
client: true
organization:
  url: https://www.adlibris.com
  location: Stockholm, Sweden
roles: 
 - Fullstack Developer
start_date: 2021-02-22
end_date: 2021-10-10
skills: 
 - C#
 - Asp.Net Core
 - Asp.Net MVC
 - JavaScript
 - jQuery
 - React
 - SQL Server
 - Octopus Deploy
 - Azure App Services
 - Identity Server
summary: 
 - OpenID/Oauth service implemented with Identity Server 4 for the new Adlibris app under development.
 - Account management API built with Asp.Net Core and .Net 5 hosted on Azure. 
 - Contentful CMS content modeling and integration.
competencies:
  - name: Backend development 
    weight: .9
    tech: 
      - C#
      - Asp.Net Core
      - Asp.Net MVC
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
      - Identity Server
      - Azure App Services
  - name: Automation      
    weight: .5
    tech:
      - Octopus Deploy
---

## Context
[Adlibris][adlibris] is the largest online bookstore in the Nordics with a growing ecosystem of digital services and applications. In 2021, I joined the Storefront team as a Fullstack Developer to support the ongoing modernization of the customer‑facing platform.

The team was in the middle of two major initiatives:

- gradually migrating the storefront from jQuery to React
- refactoring parts of a long‑lived backend monolith into clearer, more maintainable services

At the same time, Adlibris was evaluating options for a future content management system, and several foundational pieces — identity, authentication flows, and content modeling — needed attention to support both the evolving storefront and a new mobile app under development.

## Problem
The Storefront team needed to modernize both the frontend and backend while continuing to deliver features. Key gaps included:

- no modern OpenID Connect/OAuth2 identity service for the storefront or the new app
- missing integration points needed by the Account Management team
- the need to explore structured content modeling as part of evaluating new CMS options
- deployment automation that needed to support new services
- a frontend split between legacy jQuery and new React components

The challenge was to strengthen the foundation while the storefront was actively being rebuilt.

## Approach
### Backend Development
- Implemented an OpenID Connect/OAuth2 identity service using IdentityServer4 intended for both the new app and the storefront
- Built supporting APIs in ASP.NET Core and .NET 5 used by the Storefront and Account Management teams
- Contributed to refactoring efforts in the backend monolith
### Frontend Development
- Contributed to the gradual migration from jQuery to React
- Implemented React components used in the evolving storefront
- Delivered smaller UI improvements in JavaScript and jQuery where needed
### System Integration
- Delivered an IdentityServer4 solution prepared for integration with both the new app and future storefront authentication flows
- Built a proof‑of‑concept for structured content modeling in Contentful as part of evaluating future CMS options
- Ensured smooth communication between backend services and Azure‑hosted infrastructure
### Automation
- Used Octopus Deploy to automate deployments for new and existing services
- Improved deployment consistency across environments

## Outcome
- Delivered a production‑ready IdentityServer4‑based authentication service intended for both the new app and the storefront
- Built supporting APIs used by the Storefront and Account Management teams
- Produced a Contentful proof‑of‑concept that informed Adlibris’s evaluation of future CMS platforms
- Contributed to the React migration and backend refactoring efforts
- Strengthened deployment automation for Storefront services

## Reflection
This project combined identity engineering, API design, frontend modernization, and architectural exploration. It reinforced the value of improving foundational systems while incrementally modernizing a large, customer‑facing platform and the importance of stepping in to solve the problems that need solving, even when they fall outside the original plan.

[adlibris]: {{ page.organization.url }}