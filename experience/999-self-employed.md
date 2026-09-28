---
title: Henrik Becker Consulting AB
#name: Self Employed
slug: becker-consulting
#sitemap: true
description: Backend, integration and DevOps assignments as an independent consultant in Stockholm.
comment: Assignments listed below from October 2017 onward were delivered as a contractor through Henrik Becker Consulting AB, unless noted otherwise.
roles: 
 - Owner
organization:
 id: henrik-becker-consulting-ab
 name: Henrik Becker Consulting AB
 address:
  city: Liding&ouml;
start_date: 2017-07-06
end_date: present
skills:
- Azure API Management
- GitHub Actions
- C#
- .NET
- ASP.NET
- Cloudflare Workers
- Cloudflare D1
- Cloudflare R2
- Durable Objects
#competencies: 
#  - name: Ruby
#    weight: 0.2
#    tech:
#      - Jekyll plugin development
#      - data serialization
#      - build pipeline automation
---
<!--more-->
## About the company
I started Henrik Becker Consulting AB in 2017, after almost twenty years of writing code as an employee and as a consultant through other firms. It's a one-person company in Lidingö. I work on site in the Stockholm area or remotely.

The exception was Betsson, where I started as a consultant and stayed on as an employee for two years because I liked the place and the people. In the end I missed the freedom and variety of consulting, so I came back to it, with perfect timing: the consultant market decided to jump off a cliff. The upside is that I'm available.

## What I do
Mostly backend development in C# and .NET, system integration and delivery automation, and architecture when a team needs it. The details are on the [home page](/#offer). I like leaving code a bit simpler than I found it.

## Clients
Some of the organisations I've worked with over the years:
{% for client in collections.clients %}* {% if client.data.organization.url %}[{{ client.data.title }}]({{ client.data.organization.url }}){% else %}{{ client.data.title }}{% endif %}
{% endfor %}
