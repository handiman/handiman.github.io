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
Under min tid på QBranch arbetade jag med Taxi Stockholm på migreringen av deras intranät och publika webbplats från Spirello till EPiServer 4. Vid sidan av CMS-arbetet krävde projektet integration med Taxi Stockholms Unix-baserade bokningssystem — en äldre plattform som använde ett proprietärt protokoll, odokumenterat utanför företaget.

## Arbete
### EPiServer-migrering
- Migrerade intranätet och den externa webbplatsen från Spirello till EPiServer 4
- Byggde om mallar, innehållsstrukturer och administrativa arbetsflöden
- Implementerade funktioner i ASP.NET och C#, med SQL Server i botten
### Integration med bokningssystem
- Integrerade den EPiServer-baserade webbplatsen med Taxi Stockholms Unix-bokningssystem
- Arbetade direkt med ett proprietärt binärprotokoll som krävde lågnivå-socketprogrammering i .NET
- Tolkade och implementerade protokollspecifikationer som involverade bytearrayer, offsets och anpassade meddelandeformat
- Byggde kommunikationskomponenter som översatte mellan webbapplikationen och den äldre backenden
## Resultat
- Levererade ett fungerande EPiServer-baserat intranät och publik webbplats
- Etablerade en pålitlig integrationsväg mellan .NET-applikationen och Unix-bokningssystemet
- Fick praktisk erfarenhet av lågnivånätverk, binärprotokoll och interoperabilitet med äldre system

## Reflektion
Det här projektet var en blandning av modernt CMS-arbete och djup teknisk grävning. Integrationen mot det proprietära protokollet drev mig in i lågnivånätverk, binärparsning och noggrann läsning av sparsam dokumentation — en påminnelse om att de mest intressanta utmaningarna ibland ligger långt under UI-lagret.
