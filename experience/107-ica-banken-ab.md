---
title: ICA Banken
#name: ICA Banken AB
slug: ica-banken
#sitemap: true
via: 
  - Qbranch
roles: 
 - IT Consultant
#employer: 09-qbranch-stockholm-ab
#location: Sundbyberg, Sweden
start_date: 2006-03-01
end_date: 2006-03-01
skills:
 - SQL Server
 - T-SQL
 - VBScript
 - XML
 - XSLT
 - WMI
description: Brought in to troubleshoot a stalled SQL Server performance issue, followed by a broader database quality review.
highlights:
 - Diagnosed and resolved a stored procedure that had gone from minutes to nearly a full day of runtime.
 - Reviewed database design and operational practices, and recommended improvements.
 - Built a VBScript-based SQL Server inventory tool using WMI.
---
<!--more-->
## Context
After Sigtuna, ICA Banken brought me in to look at a SQL Server stored procedure that used to finish in minutes but had started running for nearly a full day before failing silently. Their senior developers had spent weeks on the database logic without finding the cause.

## Work
### Debugging
- Looked at the whole workflow around the stored procedure, not just the SQL
- Found that the cause wasn't in the database at all, but in a change to an external component that made the process pause indefinitely
- Fixed it within hours
### Database review
- Reviewed database design and operational practices, with recommendations on security and maintainability
### Tooling
- Built a VBScript-based SQL Server inventory tool using WMI

## Results
- A problem that had blocked the team for weeks was solved within hours
