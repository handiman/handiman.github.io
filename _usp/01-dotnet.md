---
title: Modern .NET Development
slug: dotnet-development
sitemap: true
---
I’ve worked with .NET since the very beginning. From classic .NET Framework via .NET Core to modern .NET and it’s still the ecosystem where I’m most at home.

C# is my everyday language, the one I think in, but I’ve also spent years in VB.NET when projects required it.
<!--more-->
If you need someone who understands the platform across its entire history — the old frameworks, the new patterns, the migration paths, the pitfalls, the tooling — I can help you build, modernize, or untangle just about anything in the .NET world.

Modern .NET isn’t just about using the latest SDK. It’s about building systems that are maintainable, observable, testable, and pleasant to work with — both today and five years from now. I help teams move toward architectures that reduce friction, increase clarity, and make it easier to deliver value without fighting the codebase.

Below are two examples of how I’ve applied modern .NET thinking in real projects.

### [Betsson — Levels Application][betsson]
As part of building a new internal application, I focused on establishing a modern .NET architecture from the start. This included adopting **.NET Aspire** for service composition, observability, and environment orchestration, along with clear architectural boundaries and maintainable patterns.

#### Benefits included:
- A clean, modern .NET foundation aligned with current best practices
- Built‑in diagnostics and observability through Aspire
- Faster onboarding for both new and rotating team members thanks to predictable structure and clear service boundaries
- Consistent local and cloud environments, reducing “works on my machine” issues
- More realistic integration testing through Aspire’s orchestrated service environments — simpler and more maintainable than equivalent Docker Compose setups
- A development experience where new features could be added without fighting the architecture

A chance to apply modern .NET thinking in a greenfield setting and set the team up for long‑term success.

### [Plejmo (Film2Home)][plejmo]
The platform originally followed a traditional n‑tier architecture, which made scaling and performance increasingly difficult. I refactored the system toward asynchronous processing using a **Service Bus** and **CQRS**, separating reads from writes and removing unnecessary coupling.
#### Benefits included:
- More resilient and scalable processing
- Clearer separation of responsibilities
- Faster, more predictable performance under load
- A codebase that was easier to evolve and reason about

A good example of choosing the right architecture — even when it meant significant refactoring.

[plejmo]: /projects/film2home
[betsson]: /projects/betsson