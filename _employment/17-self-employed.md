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
mission: Providing Fullstack .Net and DevOps expertise on a freelance basis in the Stockholm region.
clients:
 - name: Norconsult Astando
   url: https://www.norconsultastando.se
 - name: Open Payments
   url: https://openpayments.io
 - name: Insplanet
   url: https://www.inplanet.com
 - name: Svea Ekonomi
   url: https://www.svea.com
---
{{ mission }}

###### Clients:

{% for client in page.clients %}* [{{client.name}}]({{client.url}}) 
{% endfor %}
<!--more-->

## {{page.title}}