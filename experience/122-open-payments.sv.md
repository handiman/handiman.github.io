---
title: Open Payments
#name: Open Payments
client: true
logo: /assets/img/logo-openpayments.svg
organization:
  url: https://openpayments.io
roles: 
 - Fullstack-utvecklare
#employer: self-employed
#location: Stockholm, Sweden
start_date: 2019-12-02
end_date: 2020-06-30
#skills: 
# - Asp.NET Core
# - C#
# - React
# - Redux
# - TypeScript
# - Azure
# - Azure DevOps
# - Micro Services
#- OData
#- Git
description: |
  Open Payments erbjuder en PSD2-kompatibel plattform som gör det möjligt för fintech-bolag, e-handelsföretag och andra finansiella aktörer att integrera med europeiska banker via ett enda enhetligt API.
highlights: 
 - Automatiserade kundonboardingprocessen med en React-SPA och en .NET Core-backend som integrerades med Dynamics CRM och en rad Azure-resurser.
 - Förbättrade testautomationen genom att minska behovet av manuell hantering i funktions-/integrationstester.
 - Minskade driftsättningstiden tack vare förbättrad testautomation.
competencies:
  - name: Backend development 
    weight: .9
    tech:
     - C#
     - Asp.NET Core
  - name: Frontend development     
    weight: .9
    tech:
      - React
      - Redux
      - TypeScript    
  - name: System integration
    weight: .5
    tech: 
      - Azure functions      
  - name: Automation
    weight: .3
    tech:
      - Azure DevOps
---
<!--more-->
## Kontext
[Open Payments](https://openpayments.io) erbjuder en PSD2-kompatibel plattform som gör det möjligt för fintech-bolag, e-handelsföretag och andra finansiella aktörer att integrera med europeiska banker via ett enda enhetligt API.

Mellan slutet av 2019 och mitten av 2020 arbetade jag som fullstackutvecklare på Customer Portal — gränssnittet genom vilket kunder onboardas, konfigurerar åtkomst och hanterar sina integrationer. Portalen bestod av en React-SPA med en ASP.NET Core API i botten, med djup integration mot Dynamics CRM och flera Azure-tjänster.

## Problem
Onboardingprocessen för nya kunder involverade flera manuella steg över CRM, interna system och Azure-resurser. Det här skapade friktion för både kunder och interna team:

- onboarding krävde manuell verifiering och konfiguration
- funktionstester var beroende av manuell uppsättning, vilket saktade ner leveransen
- driftsättningar var långsammare än nödvändigt på grund av testflaskhalsar

Målet var att automatisera onboarding, minska manuell inblandning och förbättra tillförlitligheten och hastigheten i leveranspipelinen.

## Tillvägagångssätt
Mitt arbete fokuserade på fullstackutveckling, systemintegration och förbättrad testautomation.
### Backend-utveckling
- Byggde och underhöll ASP.NET Core API:er som stöttade Customer Portal
- Integrerade backend-tjänster med Dynamics CRM och Azure-resurser
- Implementerade affärslogik för onboardingflöden och kundkonfiguration
### Frontend-utveckling
- Utvecklade funktioner i React-SPA:n med TypeScript, Redux och moderna React-mönster
- Förbättrade UX kring onboarding- och konfigurationsflöden
### Systemintegration
- Kopplade samman Customer Portal med Dynamics CRM för kunddata och onboardingstatus
- Integrerade med Azure Functions och andra Azure-tjänster som användes av plattformen
### Automation
- Förbättrade funktions- och integrationstester för att minska manuell uppsättning
- Möjliggjorde snabbare driftsättningar genom att göra testerna mer tillförlitliga och självständiga
- Bidrog till CI/CD-flöden i Azure DevOps

## Resultat
- Levererade ett automatiserat onboardingflöde som minskade manuellt arbete och förbättrade kundupplevelsen
- Förbättrade testautomationen, vilket minskade behovet av manuell inblandning och ökade driftsättningshastigheten
- Stärkte Customer Portal genom fullstackbidrag över backend, frontend och integrationer

## Reflektion
Det här projektet belyste värdet av att kombinera fullstackutveckling med genomtänkt automation. Genom att minska manuella steg i både onboarding och testning kunde teamet leverera ändringar snabbare och med större säkerhet. Det förstärkte också vikten av tydliga integrationsgränser vid arbete med CRM-system och molnbaserade tjänster.
