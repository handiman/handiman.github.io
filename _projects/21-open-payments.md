---
title: Open Payments
client: true
web_site: https://openpayments.io
role: Fullstack Developer
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
---
{% for summary in page.summary %}
* {{ summary}}{% endfor %}
<!--more-->

Open Payments provides a PSD2-compliant platform letting FinTech, 
E-commerce businesses etc integrate with European banks through 
a single unified API - the Open Payments Platform.

Much of my focus lay on implementing automated onboarding in the client's Customer Portal - a single page React application with a .Net Core backend integrating with a Dynamics CRM and a variety of Azure resources.
