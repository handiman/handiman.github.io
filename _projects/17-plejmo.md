---
name: Film2Home/Plejmo
slug: film2home
sitemap: true
teaser: Delivered backend, frontend, and DevOps improvements across the Film2Home and Plejmo platforms, including API design and automated deployment.
group: projects
roles: 
 - Fullstack Developer, DevOps
employer: /employment/16-magine-tv
location: Stockholm, Sweden
start_date: 2014-11-03
end_date: 2017-07-05
#roles: Devops. TDD mentor. Software Engineer.
skills:
 - Asp.Net MVC
 - Asp.Net Web Api
 - C#
 - .Net Framework
 - TDD 
 - CQRS
 - Continuous Integration
 - Octopus Deploy
 - JavaScript
 - jQuery
 - KnockoutJS
 - NHibernate
 - SQL Server
 #- Micro Services
 #- CSS
 #- HTML
 #- EPiServer
 #- IIS
description: |
 Back- and front end development of a Video On Demand (VOD) service based on Asp.Net MVC and EpiServer. DevOps tasks including configuring web sites, configuring automated builds and setting up automated deployment. 
#_achievements: 
# - Increased system performance by refactoring the system to the CQRS pattern with a denormalized, read optimized database for querying.
# - Increased stability and scalability by creating Micro Services for third party integration.
# - Reduced errors during deployment by implementing automated deployment.
# - Increased code quality by introducing automated acceptance tests and living documentation.
#achievements: 
# - Development of the Video on Demand sites Film2Home and Plejmo.
# - Designed version 1 of Plejmo's Rest API.
# - Automated deployment thus eliminating the human factor and reducing deployment time from 1 hour to a couple of minutes.
# - Increased performance by refactoring from a traditional n-tier architecture to a service bus architcure thus offloading the front end sites.
summary: 
 - Development of the Video on Demand sites Film2Home and Plejmo.
 - Designed Plejmo's REST API.
 - Automated deployment thus eliminating the human factor and reducing deployment time from 1 hour to a couple of minutes.
 - Increased performance by refactoring from a traditional n-tier architecture to a service bus architcure thus offloading the front end sites.
competencies:
  - name: Backend development
    weight: .9
    tech:
      - C#
      - .Net Framework
      - Asp.Net MVC
      - Asp.Net Web Api
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
Film2Home was originally a standalone Video‑on‑Demand company owned by Bonver. After the company went bankrupt, it was acquired by Magine TV, who continued operating and evolving the platform under both the Film2Home and Plejmo brands.

From 2014 to 2017, I worked as a Fullstack Developer and DevOps engineer on these services. The platform combined ASP.NET MVC applications, EPiServer‑based content management, and a growing set of backend services supporting catalog, payments, user accounts, and content metadata.

The work spanned full‑stack development, system integration, and DevOps in an environment where rapid iteration, stability, and deployment reliability were equally important.

## Problem
The existing system faced several challenges typical of maturing VOD platforms:

- A traditional n‑tier architecture that struggled with performance under load
- Manual deployments that were slow, error‑prone, and difficult to coordinate
- Increasing complexity around third‑party integrations (payments, metadata providers, etc.)
- A need for a more modern API surface as new clients and web applications were introduced

The goal was to improve performance, reduce operational friction, and support the evolution of the platform without destabilizing ongoing operations.

## Approach
My work combined architectural refactoring, backend development, frontend improvements and DevOps automation. Key areas included:
### Architecture
- Introduced CQRS patterns to separate reads from writes and improve scalability
- Refactored parts of the system toward a service‑bus‑driven architecture using Azure Service Bus
- Created microservices for third‑party integrations to reduce coupling and improve reliability
- Enabled rapid experimentation by decoupling components, making it straightforward to plug in new features and services
### Backend Development
- Built and maintained ASP.NET MVC and ASP.NET Web API applications
- Designed and implemented version 1 of Plejmo’s REST API
- Developed domain logic using C#, .NET Framework, NHibernate, and SQL Server
- Built a proof‑of‑concept gamification service (levels, achievements, etc.) that integrated cleanly thanks to the new service‑bus architecture
### Frontend Development
- Implemented UI features using JavaScript, jQuery, and KnockoutJS
- Improved client‑side performance and responsiveness
- Collaborated with designers and content teams working in EPiServer
### System Integration
- Built and maintained integrations with external metadata and payment providers
- Developed and maintained REST and WCF services for internal and external consumers
### Automation & DevOps
- Configured automated builds and deployment pipelines using Octopus Deploy
- Reduced deployment time from roughly one hour to a few minutes
- Eliminated manual deployment errors through automation and environment consistency
- Managed IIS configurations and site setup across multiple environments

## Outcome
- Delivered the Film2Home and Plejmo web platforms across multiple markets
- Designed and shipped Plejmo’s first REST API, enabling new clients and integrations
- Reduced deployment time dramatically and improved operational stability through automation
- Increased system performance by refactoring from a traditional n‑tier architecture to a service‑bus‑oriented approach
- Improved scalability and reliability by isolating third‑party integrations into dedicated services
- Demonstrated the architectural flexibility of the new system through a gamification proof of concept that could be added with minimal friction

## Reflection
This project highlighted the value of combining full‑stack development with DevOps discipline. Many of the most impactful improvements came from simplifying architecture, reducing deployment friction, and clarifying system boundaries.
Working on a consumer‑facing VOD platform also reinforced the importance of performance, stability, and predictable delivery — especially when customers expect instant access to content.


