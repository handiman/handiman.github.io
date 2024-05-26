---
name: IT Consultant/System Developer
location: Stockholm, Sweden
description: 
 - Web development for Hewlett Packard Sweden
# Not in schema
roles: 
 - IT Consultant
organization:
 id: ework
 name: eWork
start_date: 2002-01-01
end_date: 2005-03-31
---
{% for summary in page.description %}
* {{ summary}}{% endfor %}
<!--more-->
