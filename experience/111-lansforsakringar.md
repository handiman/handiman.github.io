---
title: Länsförsäkringar
#name: Länsförsäkringar
slug: lansforsakringar
#sitemap: true
via:
- Avega Group
roles: 
 - System Developer
#employer: avega-group
#location: Stockholm, Sweden
start_date: 2009-09-01
end_date: 2011-05-01
skills:
 - VB.NET
 - WCF
 - WPF
 - Oracle
 - SQL Server
 - Team Foundation Server
 - Continuous Integration
 - Test Driven Development
description: Backend development, database migration, and performance work on Länsförsäkringar's payment platform, including a move from Oracle to SQL Server.
highlights:
 - Led the migration of the payment platform's database from Oracle to SQL Server.
 - Built out a WCF-based payment platform, adding support for automated payments and payment prompts.
 - Investigated and improved performance across the platform and its connecting systems.
---
<!--more-->
## Context
I joined [Länsförsäkringar](https://www.lf.se) on a long-term [Avega Group](https://avega.se/) assignment, working on the payment platform and several surrounding systems.

## Work
### Database migration
- Worked on migrating the payment platform's database from **Oracle** to **SQL Server**
- Adapted stored procedures, data models and integration points
- Took part in the analysis, planning and validation of the new SQL Server environment
### Payment platform
- Worked on a **WCF** service layer used by internal systems for automated payments and payment prompts
- Extended and maintained business logic in **VB.NET**
### JD Edwards EnterpriseOne
- Read operational and financial data directly from the **JD Edwards EnterpriseOne** database and adapted it for the payment platform
### Performance
- Benchmarked different approaches after the migration: loops in the database, stored procedures and application-side logic
- Found that, counterintuitively, repeated SQL Server function calls from a VB.NET loop were faster than looping inside a stored procedure, despite the extra round-trips
### Engineering practices
- **Team Foundation Server**, **continuous integration** and **test-driven development** in a **Scrum** team
