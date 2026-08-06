---
title: Taxi Stockholm
#name: Taxi Stockholm
slug: taxi-stockholm
#sitemap: true
via: 
  - Qbranch
roles: 
 - Systemutvecklare
#employer: 09-qbranch-stockholm-ab
#location: Stockholm, Sweden
start_date: 2005-05-01
end_date: 2005-07-01
skills:
 - Asp.NET
 - C#
 - EPiServer 4
 - SQL Server
description: CMS-migrering och integration mot ett äldre system för Taxi Stockholm, inklusive lågnivåarbete mot ett Unix-baserat bokningssystem via ett proprietärt protokoll.
highlights:
 - Migrerade Taxi Stockholms intranät och externa webbplats från Spirello till EPiServer.
 - Integrerade den nya webbplatsen med kundens Unix-baserade bokningssystem via ett proprietärt binärprotokoll.
---
<!--more-->
## Context
During my time at QBranch, I worked with Taxi Stockholm on the migration of their intranet and public website from Spirello to EPiServer 4. Alongside the CMS work, the project required integrating with Taxi Stockholm’s Unix‑based booking system — a legacy platform using a proprietary, undocumented‑outside‑the‑company protocol.

## Work
### EPiServer Migration
- Migrated the intranet and external website from Spirello to EPiServer 4
- Rebuilt templates, content structures, and administrative workflows
- Implemented features in ASP.NET and C#, backed by SQL Server
### Booking System Integration
- Integrated the EPiServer‑based site with Taxi Stockholm’s Unix booking system
- Worked directly with a proprietary binary protocol requiring low‑level socket programming in .NET
- Interpreted and implemented protocol specifications involving byte arrays, offsets, and custom message formats
- Built communication components that translated between the web application and the legacy backend
## Outcome
- Delivered a functioning EPiServer‑based intranet and public website
- Established a reliable integration path between the .NET application and the Unix booking system
- Gained hands‑on experience with low‑level networking, binary protocols, and legacy system interoperability

## Reflection
This project was a mix of modern CMS work and deep technical spelunking. The proprietary protocol integration pushed me into low‑level networking, binary parsing, and careful reading of sparse documentation — a reminder that sometimes the most interesting challenges sit far below the UI layer.
