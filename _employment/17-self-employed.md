---
title: Self Employed
role: Self Employed IT Consultant
organization:
 id: henrik-becker-consulting-ab
 name: Henrik Becker Consulting AB
 address:
  city: Liding&ouml;
start_date: 2017-07-06
end_date: present
mission: Providing Fullstack .Net and DevOps expertise on a freelance basis in the Stockholm urban area.
---
{{ mission }}

###### Clients:
{% assign clients = site.projects | where: 'client', true %}
{% for client in clients reversed %}* [{{client.title}}]({{ client.web_site }}) 
{% endfor %}
{% assign clients = nil %}
<!--more-->

## {{page.title}}