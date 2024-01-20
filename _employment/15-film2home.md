---
name: Plejmo Backend Developer
roles: 
 - Fullstack Developer
organization:
 id: film2home
 name: Film2Home AB
 address:
  city: Stockholm
start_date: 2014-11-03
end_date: 2015-08-27
buzzwords: 
 - CQRS
 - REST
 - OAuth
summary:
 - Development of the Video on Demand sites Film2Home and Plejmo.
 - Designed version 1 of Plejmo's Rest API.
 - Automated deployment thus eliminating the human factor and reducing deployment time from 1 hour to a couple of minutes.
 - Increased performance by refactoring from a traditional n-tier architecture to a service bus architcure thus offloading the front end sites.
---
{% for summary in page.summary %}
* {{ summary}}{% endfor %}
<!--more-->