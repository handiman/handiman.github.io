---
title: Länsförsäkringar
name: Länsförsäkringar
slug: lansforsakringar
sitemap: true
roles: 
 - System Developer
employer: /employment/12-avega-group-ab
location: Stockholm, Sweden
start_date: 2009-09-01
end_date: 2011-05-01
skills:
 - VB.Net
 - WCF
 - WPF
 - Oracle
 - SQL Server
 - Team Foundation Server
 - Continuous Integration
 - Test Driven Development
summary:
 - Was instrumental in the migration of the payment platform's database from Oracle to SQL Server.
 - Worked with the development of a WCF based payment platform adding support for automatic payment services and prompts. 
 - Quality assurance and performance optimization of connecting systems.
---
<!--more-->
## Context
I joined [Länsförsäkringar](https://www.lf.se) as part of a long‑term [Avega Group](https://avega.se/) assignment, working on the company’s payment platform and several surrounding systems. The work spanned backend development, database migration, performance investigations, and quality assurance across a complex financial environment.

## Work
### Database Migration
- Played a key role in migrating the payment platform’s database from **Oracle** to **SQL Server**
- Adapted stored procedures, data models, and integration points to ensure functional parity and acceptable performance
- Took on responsibilities that would normally fall to DBAs or architects, including analysis, planning, and validation of the new SQL Server environment
### Payment Platform Development
- Worked on a **WCF‑based** service layer used by internal systems responsible for automated payments and payment prompts
- Extended and maintained business logic implemented in **VB.NET**
- Ensured the service behaved predictably under load and integrated cleanly with surrounding systems
### Integration with JD Edwards EnterpriseOne
- Read operational and financial data directly from the **JD Edwards EnterpriseOne** database
- Implemented logic to translate and adapt JDE data structures into formats suitable for the payment platform
- Helped ensure consistency between JDE’s data model and the evolving SQL Server‑based platform
### Quality Assurance & Performance
- Investigated how different approaches performed after the migration from Oracle to SQL Server
- Benchmarked and compared performance characteristics between database‑side loops, stored procedures, and application‑side logic
- Identified counterintuitive but effective optimizations — for example, repeated SQL Server function calls from a VB.NET loop proved faster than looping inside a stored procedure, despite the increased number of network round‑trips
- Applied these findings to improve throughput and stability in the payment platform and its integrations
### Engineering Practices
- Worked with **Team Foundation Server** for version control and build automation
- Participated in **continuous integration** workflows
- Applied **test‑driven development** where appropriate to improve code quality and reduce regressions
- Worked within a **Scrum** team, contributing as a developer while supporting the team’s sprint‑based delivery rhythm
### Outcome
- Successfully supported the transition from Oracle to SQL Server, reducing licensing costs and simplifying the platform
- Strengthened the payment platform with improved reliability and clearer performance characteristics

## Reflection
This assignment combined deep technical work with long‑term platform stewardship. The database migration required careful analysis and a strong understanding of both Oracle and SQL Server, while the performance investigations provided insights that shaped how the platform evolved. Integrating with JD Edwards EnterpriseOne added another layer of complexity and gave me valuable experience with large‑scale financial systems and their data models.
