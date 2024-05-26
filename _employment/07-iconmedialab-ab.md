---
name: IT Consultant/System Developer
location: Stockholm, Sweden
description: 
 - Web development for Hewlett Packard Sweden, Compaq, Siemens Medical and IconMedialab's intranet.
# Not in schema
roles: 
 - IT Consultant
organization:
 id: iconmedialab-ab
 name: IconMedialab AB
start_date: 1999-09-01
end_date: 2002-01-01
---
{% for summary in page.description %}
* {{ summary}}{% endfor %}
<!--more-->
