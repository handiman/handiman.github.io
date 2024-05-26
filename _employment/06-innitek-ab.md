---
name: IT Consultant
location: Danderyd, Sweden
description: 
 - Developed a document management system based on Visual Basic 5 for Looström & Gelin AB.
 - Built the company web site based on ASP
# Not in schema
roles: 
 - IT Consultant
organization:
 id: innitek-ab
 name: Innitek AB
start_date: 1998-10-01
end_date: 1999-07-31
---
{% for summary in page.description %}
* {{ summary}}{% endfor %}
<!--more-->

