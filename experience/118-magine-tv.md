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
description: Continued development of the Film2Home and Plejmo services after Magine TV's acquisition.
highlights:
 - Continued development of the Video on Demand site Plejmo.
 - Designed version 2 of Plejmo's Rest API.
 - Continued improving the CI/CD processes set up at Film2Home
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
## About the Role
When Film2Home went bankrupt, Magine TV bought **Plejmo** and hand-picked a few of the people who had built it. I was one of them. I kept working on the same platform: improving it, extending the API and running the CI/CD pipeline I had built at Film2Home.

## What I Worked On
### Plejmo REST API
I kept **API v1** stable and backward‑compatible while designing and implementing **API v2**, which introduced:

- OAuth‑based token authentication
- a new, cleaner model for delivering metadata content
- new endpoints intended for the upcoming Plejmo app
- support for third‑party integrations, including MovieZine and a Finnish VOD service in Vaasa (Whatson)

### Gamification Proof of Concept
I built a proof‑of‑concept for a **levels and achievements** system. Because I had originally implemented Plejmo’s **service‑bus architecture** at Film2Home, it was straightforward to add a standalone service that subscribed to the relevant events. The PoC:

- consumed user‑activity events from the service bus
- awarded achievements and progression based on those events

That experience came in handy years later at Betsson in the Levels & Achievements project.

### Analytics Integration (Segment.io)
Segment.io was part of the production system. I implemented event publishing so user activity and platform events could be tracked consistently across clients and services.

### CI/CD Pipeline
The CI/CD pipeline built around **Octopus Deploy** was already in good shape thanks to the work I had done at Film2Home. 
At Magine it was more about stewardship than reinvention. My focus was on:

- keeping the pipeline stable and reliable
- upgrading Octopus Deploy and related tooling
