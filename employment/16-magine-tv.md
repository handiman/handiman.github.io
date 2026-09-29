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
highlights:
 - Continued development of the Video on Demand site Plejmo.
 - Designed version 2 of Plejmo's Rest API.
 - Continued improving the CI/CD processes I set up at Film2Home
---
<!--more-->
## About the role
After Film2Home's bankruptcy, Magine TV bought **Plejmo** and hand-picked a few of the developers. I was one of them.

## What I did
### Plejmo REST API
I kept **API v1** stable and backward-compatible while designing and implementing **API v2**, which added:

- OAuth-based token authentication
- a cleaner model for delivering metadata
- new endpoints for the upcoming Plejmo app
- support for third-party integrations, including MovieZine and Whatson, a Finnish VOD service in Vaasa

### Gamification proof of concept
I built a proof of concept for **levels and achievements**. Since Plejmo already ran on the **service bus architecture** I had built at Film2Home, it was easy to add a standalone service that subscribed to user-activity events and awarded achievements and progression.

That experience came in handy years later at Betsson in the Levels & Achievements project.

### Analytics (Segment.io)
- Implemented event publishing to Segment.io, so user activity could be tracked across clients and services

### CI/CD
- Kept the Octopus Deploy pipeline from Film2Home running and upgraded Octopus and related tooling
