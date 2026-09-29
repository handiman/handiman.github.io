---
title: Film2Home
#name: Film2Home/Plejmo
slug: film2home
#sitemap: true
teaser: Delivered backend, frontend, and DevOps improvements across the Film2Home and Plejmo platforms, including API design and automated deployment.
#group: projects
roles: 
 - Fullstack Developer
 - DevOps
#employer: /employment/16-magine-tv
#location: Stockholm, Sweden
start_date: 2014-11-03
end_date: 2015-09-01
skills:
 - C#
 - Asp.NET MVC
 - Azure Service Bus
 - CQRS
 - Octopus Deploy
 - Asp.NET Web Api
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
 - CSS
 - HTML
 - EPiServer
 - IIS
 - Git
description: |
 Fullstack development of the Video On Demand (VOD) services Film2home and Plejmo based on Asp.NET MVC and EpiServer. DevOps tasks including configuring web sites, configuring automated builds and setting up automated deployment. 
key_highlight: 'Automated deployment, cutting deployment time from about an hour to under two minutes'
highlights: 
 - Automated deployment, cutting deployment time from about an hour to under two minutes.
 - Increased performance by refactoring from a traditional n-tier architecture to a service bus architecture thus offloading the front end sites.
 - Designed Plejmo's REST API.
competencies:
  - name: Backend development
    weight: .9
    tech:
      - C#
      - .NET Framework
      - Asp.NET MVC
      - Asp.NET Web Api
      - NHibernate
      - SQL Server
      - EPiServer
  - name: Architecture
    weight: .4
    tech:
      - CQRS
      - Micro Services
      - Rest APIs
  - name: System integration
    weight: .6
    tech:
      - Azure Service Bus
      - Rest APIs
      - WCF
  - name: Frontend development
    weight: .7
    tech:
      - JavaScript
      - jQuery
      - KnockoutJS
  - name: Automation
    weight: .7       
    tech:
      - Octopus Deploy
---
<!--more-->
## Context
Film2Home was a Video-on-Demand company and a subsidiary of Bonver. After Film2Home went bankrupt it was acquired by Magine TV, which kept running the platform under both the Film2Home and Plejmo brands.

From 2014 to 2017 I worked on these services as a fullstack developer and also did the DevOps work. The platform was ASP.NET MVC applications with EPiServer for content, plus backend services for catalog, payments, user accounts and content metadata.

## Problem
- A traditional n-tier architecture that struggled under load
- Manual deployments that took about an hour and were error-prone
- Third-party integrations for payments and metadata that were getting harder to manage
- No API for the new clients that were on the way

## Approach
### Architecture
- Introduced CQRS to separate reads from writes
- Moved parts of the system to a service bus architecture on Azure Service Bus
- Moved third-party integrations into separate services
### Backend development
- Built and maintained ASP.NET MVC and ASP.NET Web API applications with C#, NHibernate and SQL Server
- Designed and implemented version 1 of Plejmo's REST API
- Built a gamification proof of concept (levels and achievements) on top of the service bus
### Frontend development
- Built UI features in JavaScript, jQuery and KnockoutJS
- Worked with the designers and editors using EPiServer
### System integration
- Built and maintained integrations with metadata and payment providers
- Built REST and WCF services for internal and external consumers
### Automation & DevOps
- Set up automated builds and deployments with Octopus Deploy
- Managed IIS configuration across environments

## Results
- Deployment time went from about an hour to under two minutes, with virtually no deployment errors
- Better performance under load after moving from n-tier to the service bus architecture
