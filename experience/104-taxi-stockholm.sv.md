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
## Kontext
Under min tid på Qbranch arbetade jag med Taxi Stockholm på att flytta deras intranät och publika webbplats från Spirello till EPiServer 4. Den nya sajten behövde också prata med deras Unix-baserade bokningssystem via ett proprietärt binärt protokoll som inte var dokumenterat utanför företaget.

## Arbete
### EPiServer-migrering
- Migrerade intranätet och den publika webbplatsen från Spirello till EPiServer 4
- Byggde om mallar, innehållsstrukturer och redaktionella flöden
- ASP.NET, C# och SQL Server
### Integration med bokningssystemet
- Integrerade sajten med Unix-bokningssystemet via socketprogrammering på låg nivå i .NET
- Implementerade protokollet utifrån knapphändiga specifikationer: byte-arrayer, offsets och egna meddelandeformat
