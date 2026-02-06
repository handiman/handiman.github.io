---
title: Open Payments
name: Open Payments
slug: open-payments
sitemap: true
client: true
logo: /assets/img/logo-openpayments.svg
organization:
  url: https://openpayments.io
roles: 
 - Fullstack Developer
employer: /employment/17-self-employed
location: Stockholm, Sweden
start_date: 2019-12-02
end_date: 2020-06-30
roles: Software Engineer
skills: 
 - Asp.Net Core
 - C#
 - React
 - Redux
 - TypeScript
 - Azure
 - Azure DevOps
 #- OData
 #- Git
summary: 
 - Automated customer onboarding process using a React SPA with a .Net Core backend that integrated with Dynamics CRM and a variety of Azure resources.
 - Improved test automation by making functional/integration tests require less manual intervention.
 - Reduced deployment time thanks to improved test automation.
competencies:
  - name: Backend development 
    weight: .9
    tech:
     - C#
     - Asp.Net Core
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
## Context
[Open Payments](https://openpayments.io) provides a PSD2‑compliant platform that allows FinTech companies, e‑commerce businesses, and other financial actors to integrate with European banks through a single unified API.

Between late 2019 and mid‑2020, I worked as a Fullstack Developer on the Customer Portal — the interface through which clients onboard, configure access, and manage their integrations. The portal consisted of a React single‑page application backed by an ASP.NET Core API, with deep integration into Dynamics CRM and multiple Azure services.

## Problem
The onboarding process for new customers involved several manual steps across CRM, internal systems, and Azure resources. This created friction for both customers and internal teams:

- onboarding required manual verification and configuration
- functional tests depended on manual setup, slowing down delivery
- deployments were slower than necessary due to test bottlenecks

The goal was to automate onboarding, reduce manual intervention, and improve the reliability and speed of the delivery pipeline.

## Approach
My work focused on full‑stack development, system integration, and improving test automation.
### Backend Development
- Built and maintained ASP.NET Core APIs supporting the Customer Portal
- Integrated backend services with Dynamics CRM and Azure resources
- Implemented business logic for onboarding flows and customer configuration
### Frontend Development
- Developed features in the React SPA using TypeScript, Redux, and modern React patterns
- Improved UX around onboarding and configuration flows
### System Integration
- Connected the Customer Portal to Dynamics CRM for customer data and onboarding state
- Integrated with Azure Functions and other Azure services used by the platform
### Automation
- Improved functional and integration tests to reduce manual setup
- Enabled faster deployments by making tests more reliable and self‑contained
- Contributed to CI/CD workflows in Azure DevOps

## Outcome
- Delivered an automated onboarding flow that reduced manual work and improved customer experience
- Improved test automation, reducing the need for manual intervention and increasing deployment speed
- Strengthened the Customer Portal through full‑stack contributions across backend, frontend, and integrations

## Reflection
This project highlighted the value of combining full‑stack development with thoughtful automation. By reducing manual steps in both onboarding and testing, the team could deliver changes faster and with greater confidence. It also reinforced the importance of clear integration boundaries when working with CRM systems and cloud‑based services.
