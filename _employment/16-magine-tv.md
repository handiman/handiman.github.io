---
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
summary:
 - Continued development of the Video on Demand site Plejmo.
 - Designed version 2 of Plejmo's Rest API.
 - Continued improving the CI/CD processes I set up at Film2Home
#{% for summary in page.summary %}
#* {{ summary}}{% endfor %}
---
<!--more-->
## About the Role
I joined Magine TV to continue the development of **Plejmo**, a Video‑on‑Demand service that Magine had acquired from Film2Home. Since I had already worked on Plejmo at Film2Home, this role was a natural continuation — improving the platform, extending the API, and maintaining the CI/CD pipeline I had originally built.

## What I Worked On
### Plejmo Platform Development
I worked across the full stack to evolve the Plejmo service, focusing on stability, maintainability, and incremental improvements to both backend and frontend components.

### Plejmo REST API
I kept **API v1** stable and backward‑compatible while designing and implementing **API v2**, which introduced:

- OAuth‑based token authentication
- a new, cleaner model for delivering metadata content
- new endpoints intended for the upcoming Plejmo app
- support for third‑party integrations, including MovieZine and a Finnish VOD service in Vaasa (Whatson)

The goal was to modernize the API without disrupting existing clients.

### Gamification Proof of Concept
I built a proof‑of‑concept for a **levels and achievements** system. Because I had originally implemented Plejmo’s **service‑bus architecture** at Film2Home, it was straightforward to add a standalone service that subscribed to the relevant events. The PoC:
- consumed user‑activity events from the service bus
- awarded achievements and progression based on those events

It was an early exploration of ideas I later developed more formally at Betsson.

### Analytics Integration (Segment.io)
Segment.io was part of the production system. I implemented event publishing so user activity and platform events could be tracked consistently across clients and services.

### CI/CD Pipeline
The CI/CD pipeline built around **Octopus Deploy** was already in good shape thanks to the work I had done at Film2Home. 
At Magine it was more about stewardship than reinvention. My focus was on:

- keeping the pipeline stable and reliable
- upgrading Octopus Deploy and related tooling
- deepening my understanding of Octopus and applying improvements where useful

## Reflection
Magine was a continuation of the work I had started at Film2Home, but within a larger streaming‑focused company. It was steady, hands‑on engineering on a product I knew well, with room to modernize the parts that needed it — and space to explore early ideas around gamification that later became a bigger part of my work

