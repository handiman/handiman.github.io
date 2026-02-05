---
name: Plejmo Backend Developer
slug: film2home
roles: 
 - Fullstack Developer
organization:
 id: film2home
 name: Film2Home AB
 type: Digital movie rental & streaming service
 address:
  city: Stockholm
start_date: 2014-11-03
end_date: 2015-08-27
buzzwords: 
 - CQRS
 - REST
 - OAuth
summary:
 - Development of the Video on Demand sites Film2Home and Plejmo.
 - Designed version 1 of Plejmo's Rest API.
 - Automated deployment thus eliminating the human factor and reducing deployment time from 1 hour to a couple of minutes.
 - Increased performance by refactoring from a traditional n-tier architecture to a service bus architcure thus offloading the front end sites.
#{% for summary in page.summary %}
#* {{ summary}}{% endfor %}
---
<!--more-->
## About the Role
I joined Film2Home to work on their Video‑on‑Demand platforms **Film2Home** and **Plejmo**. This was the beginning of my long involvement with Plejmo — designing its first public API, improving performance, and modernizing how the platform was built and deployed.

## What I Worked On
### Platform Development
I worked across the full stack on both Film2Home and Plejmo, implementing new features, improving stability, and cleaning up legacy code paths as the services evolved.

### Plejmo REST API v1
I designed and implemented the first version of Plejmo’s REST API. The goals were:

- a clear, consistent resource model
- predictable behavior for clients
- a foundation that could evolve without breaking compatibility

This API later became the stable base I maintained at Magine while building API v2.

### CQRS and Service‑Bus Architecture
A major part of my work was rethinking how the platform handled load and complexity. I introduced **CQRS** and moved the system from a traditional n‑tier architecture to a **service‑bus‑based** design. This shift:
- separated reads and writes for better performance and clarity
- offloaded heavy work from the frontend sites
- enabled asynchronous processing of tasks
- made the system more modular and easier to extend

This architecture later made it trivial to plug in new services at Magine — including the gamification PoC.

### CI/CD Automation
I automated the deployment process using **Octopus Deploy**, replacing a slow, manual, error‑prone workflow. The results were:
- deployment time reduced from about an hour to a few minutes
- fewer mistakes and rollbacks
- a predictable, repeatable release process

This pipeline became the foundation I later maintained and refined at Magine.

## Reflection
Film2Home was where Plejmo’s technical foundations were laid — the API, the CQRS and service‑bus architecture, and the CI/CD pipeline. It set the stage for everything I later did at Magine, and eventually influenced my work with event‑driven systems and gamification at Betsson
