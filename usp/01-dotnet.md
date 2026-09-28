---
title: Modern .NET Development
slug: dotnet-development
sitemap: true
---
I’ve worked with .NET since the first version, and C# is the language I think in.

Lately that means .NET 9 and 10, Aspire and Orleans.
<!--more-->
I've followed .NET from the first Framework versions through .NET Core to .NET 10, so I know both the new patterns and the older code most teams still live with.

Two examples:

### [Betsson — Levels application][betsson]
When we built the Levels application, I introduced **.NET Aspire** from the start for service composition, observability and local orchestration.

- Integration tests ran against Aspire's orchestrated environment, which was simpler to maintain than an equivalent Docker Compose setup
- New and rotating team members got up to speed faster thanks to a predictable structure
- Local and cloud environments behaved the same

### [Plejmo (Film2Home)][plejmo]
The platform had a traditional n-tier architecture that struggled under load. I moved it to asynchronous processing with **Azure Service Bus** and **CQRS**, separating reads from writes.

- Better performance under load
- Clearer separation of responsibilities
- Easier to change

[plejmo]: /experience/film2home/
[betsson]: /experience/betsson/
