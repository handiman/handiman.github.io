---
title: Henrik Becker Consulting AB
#name: Self Employed
slug: becker-consulting
#sitemap: true
description: Uppdrag inom backend, integration och DevOps som oberoende konsult i Stockholm.
comment: Uppdragen nedan från och med oktober 2017 utfördes som konsult genom Henrik Becker Consulting AB, om inget annat anges.
roles: 
 - Ägare
organization:
 id: henrik-becker-consulting-ab
 name: Henrik Becker Consulting AB
 address:
  city: Lidingö
start_date: 2017-07-06
end_date: present
#competencies: 
#  - name: Ruby
#    weight: 0.2
#    tech:
#      - Jekyll plugin development
#      - data serialization
#      - build pipeline automation
skills:
- C#
- .NET
- ASP.NET
- GitHub Actions
- Azure API Management
- Cloudflare Workers
- Cloudflare D1
- Cloudflare R2
- Durable Objects
---
<!--more-->
## Om företaget
Jag startade Henrik Becker Consulting AB 2017, efter nästan tjugo år av kodande som anställd och som konsult via andra bolag. Det är ett enmansföretag på Lidingö. Jag jobbar på plats i Stockholmsområdet eller på distans.

Undantaget var Betsson, där jag började som konsult och stannade två år som anställd, för att jag trivdes med både företaget och kollegorna. Till slut saknade jag friheten och variationen i konsultlivet, så jag gick tillbaka – med perfekt tajming: konsultmarknaden bestämde sig för att hoppa från ett stup. Fördelen är att jag är tillgänglig.

## Vad jag gör
Mest backendutveckling i C# och .NET, systemintegration och leveransautomatisering, och arkitektur när ett team behöver det. Detaljerna finns på [startsidan](/#offer). Jag gillar att lämna koden lite enklare än jag hittade den.

## Kunder
Några av de organisationer jag har arbetat med genom åren:
{% for client in collections.clients %}* {% if client.data.organization.url %}[{{ client.data.title }}]({{ client.data.organization.url }}){% else %}{{ client.data.title }}{% endif %}
{% endfor %}
