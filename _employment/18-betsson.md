---
name: Senior Software Engineer
slug: betsson
sitemap: true
roles: 
 - Senior Software Engineer
organization:
 id: betssongroup-ab
 name: Betsson Group AB
 type: Global online gaming & sportsbook enterprise
 address:
  city: Stockholm
start_date: 2023-12-18
end_date: 2025-12-05
---
<!--more-->
## About the Role
I joined Betsson as a consultant and later transitioned directly into a full‑time role as a Senior Software Engineer. I worked in the Player Rewards & Gamification value stream, focusing on three services: **Tournaments**, **Loyalty**, and **Levels**. Tournaments was where I spent most of my time. Loyalty was a legacy system, and Levels was the newer service intended to replace it.

## What I Worked On
### Tournaments
This was my primary area of responsibility. The Tournaments service lets players opt into leaderboard‑style competitions where points are awarded based on configurable business rules — for example, winning X euro on a slot machine might award Y points. Casino tournaments were already in place when I joined, and I helped extend the system to support Sportsbook tournaments.

My work included:
- implementing logic for awarding points from different event types
- extending the existing Casino tournament system to handle Sportsbook betting events
- improving performance in the real‑time Kafka message pipeline
- identifying and removing excessive logging that accounted for most of the performance issues
- making the scoring and event‑processing code paths clearer and easier to maintain

### Levels
Levels was the planned successor to the legacy Loyalty system, designed to support achievements, progression, and more flexible gamification features. I contributed to its early structure through:
- domain modeling and shaping the core concepts
- building proof‑of‑concepts to validate architectural and functional ideas
- introducing [.NET Aspire](https://learn.microsoft.com/en-us/dotnet/aspire/) to improve local development and integration testing
- helping define how achievements, progression, and rewards should be represented and processed
### Loyalty
Loyalty was a long‑standing legacy system with accumulated complexity. My involvement was limited to:
- maintenance and incremental improvements

## Reflection
Working across Tournaments, Loyalty, and Levels gave me a clear view of both the legacy and future directions of the value stream. Tournaments was where I made the most impact, and Levels gave me the chance to work on modeling and early‑stage architecture. Loyalty was maintenance work handled as needed.

I genuinely enjoyed my time at Betsson and the colleagues I worked with. I left only because I missed the autonomy of being my own boss.
