---
title: Modern .NET-utveckling
slug: dotnet-development
sitemap: true
description: Modern utveckling i .NET och C#, från .NET Framework till .NET 10, Aspire och Orleans, inklusive den äldre koden som de flesta team fortfarande lever med.
---
Jag har arbetat med .NET sedan första versionen. På senaste tiden har det inneburit .NET 9 och 10, Aspire och Orleans. 

C# är det språk jag oftast använder, det jag är expert på och det jag tänker i.
<!--more-->
Jag är väl bevandrad i både nya mönster och den äldre koden som många team fortfarande lever med.

Två exempel:

### [Betsson — Levels-applikationen][betsson]
När vi byggde Levels-applikationen införde jag **.NET Aspire** från början för tjänstesammansättning, observerbarhet och lokal orkestrering.

- Integrationstesterna kördes mot Aspires orkestrerade miljö, som var enklare att underhålla än en motsvarande Docker Compose-uppsättning
- Nya och roterande teammedlemmar kom snabbare igång tack vare en förutsägbar struktur
- Lokala miljöer och molnmiljöer betedde sig likadant

### [Plejmo (Film2Home)][plejmo]
Plattformen hade en traditionell n-lagerarkitektur som hade svårt att klara belastningen. Jag flyttade den till asynkron bearbetning med **Azure Service Bus** och **CQRS**, med läsningar skilda från skrivningar.

- Bättre prestanda under belastning
- Tydligare ansvarsfördelning
- Lättare att ändra

[plejmo]: /sv/experience/film2home/
[betsson]: /sv/experience/betsson/
