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
I joined Magine TV to continue developing **Plejmo**, which Magine had acquired from Film2Home. I had already worked on Plejmo at Film2Home, so this was a natural continuation.

## What I did
### Plejmo REST API
I kept **API v1** stable and backward-compatible while designing and implementing **API v2**, which added:

- OAuth-based token authentication
- a cleaner model for delivering metadata
- new endpoints for the upcoming Plejmo app
- support for third-party integrations, including MovieZine and Whatson, a Finnish VOD service in Vaasa

### Gamification proof of concept
I built a proof of concept for **levels and achievements**. Since Plejmo already ran on the **service bus architecture** I had built at Film2Home, it was easy to add a standalone service that subscribed to user-activity events and awarded achievements and progression.

The idea came back years later at Betsson, where levels and achievements became my day job.

### Analytics (Segment.io)
- Implemented event publishing to Segment.io, so user activity could be tracked across clients and services

### CI/CD
- Kept the Octopus Deploy pipeline from Film2Home running and upgraded Octopus and related tooling
