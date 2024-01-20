---
name: IT Consultant/System Developer
roles: 
 - IT Consultant
organization:
 id: ework
 name: eWork
start_date: 2002-01-01
end_date: 2005-03-31
summary: 
 - Web development for Hewlett Packard Sweden
---
{% for summary in page.summary %}
* {{ summary}}{% endfor %}
<!--more-->
