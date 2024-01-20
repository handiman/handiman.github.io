---
name: Plejmo Backend Developer
roles: 
 - Fullstack Developer
organization:
 id: magine
 name: Magine TV AB
 address:
  city: Stockholm
start_date: 2015-09-14
end_date: 2017-07-05
summary:
 - Continued development of the Video on Demand site Plejmo.
 - Designed version 2 of Plejmo's Rest API.
 - Continued improving the CI/CD processes I set up at Film2Home
---
{% for summary in page.summary %}
* {{ summary}}{% endfor %}
<!--more-->