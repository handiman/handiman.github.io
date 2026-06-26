---
title: Henrik Becker Consulting AB
name: Self Employed
slug: becker-consulting
sitemap: true
roles: 
 - IT Consultant
organization:
 id: henrik-becker-consulting-ab
 name: Henrik Becker Consulting AB
 address:
  city: Liding&ouml;
start_date: 2017-07-06
end_date: present
mission: Providing Fullstack .Net and DevOps expertise on a freelance basis in the Stockholm urban area.
#competencies: 
#  - name: Ruby
#    weight: 0.2
#    tech:
#      - Jekyll plugin development
#      - data serialization
#      - build pipeline automation
---
<!--more-->
## About the Company
I founded Henrik Becker Consulting AB in 2017 as a way to work independently and stay close to the craft. Based in Lidingö and working across the Stockholm region, I provide full‑stack .NET and DevOps expertise on a freelance basis. Keeping the company small lets me focus on what matters: understanding systems, working directly with teams, and delivering solutions that reduce complexity rather than add to it.

I’ve been coding professionally since 1999, and the company is where that experience comes together — architecture, integration, automation, and the long‑term thinking that makes software age gracefully.

## What I Do
My work centers on backend engineering and the infrastructure around it: the APIs, integrations, pipelines, and architectural decisions that shape how a system behaves over time.

I help clients with:
- **Backend Development**   
  Modern .NET and C# solutions built for clarity, maintainability, and scale.
- **System Integration**   
  REST, GraphQL, message queues, and cloud‑native tooling to connect services reliably.
- **Automation & DevOps**   
  CI/CD pipelines, scripting, and infrastructure as code for faster, safer delivery.
- **Architecture & Technical Guidance**  
  Structuring new projects, refactoring old ones, and helping teams make sound technical decisions.

My goal is always the same: build systems that are easier to understand, easier to maintain, and easier to evolve.

## Selected Clients
Over the years I’ve worked with organizations across finance, e‑commerce, gaming, and public infrastructure. Some of the clients I’ve partnered with include:
{% assign clients = site.projects | where: 'client', true %}
{% for client in clients reversed %}* [{{client.name}}]({{ client.url | relative_url }})
{% endfor %}
{% assign clients = nil %}
The work has ranged from backend development and integrations to automation pipelines and architectural support.

## Approach
I describe myself as a “simplificator” because that’s the core of what I do: take something complex and make it clearer without losing its depth. Sometimes that means rewriting a subsystem. Sometimes it means reorganizing a model. Sometimes it’s a single sentence of documentation that finally makes everything click.
Freelancing gives me the freedom to choose projects where I can make a meaningful difference and to stay close to the work itself, where the details matter.
