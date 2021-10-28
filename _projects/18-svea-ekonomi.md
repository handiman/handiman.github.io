--- 
title: Svea Ekonomi
client: true
web_site: https://www.svea.com 
role: Backend Developer
employer: /employment/17-self-employed
location: Solna, Sweden
start_date: 2017-10-11
end_date: 2018-04-11
roles: Software Engineer, TDD mentor
skills: 
- C#
- Asp.Net Web Api
- CQRS
- TDD
- Specification By Example
- Continuous Integration
- Octopus Deploy
- Entity Framework
#- NuGet
#- Micro Services
#- Team Foundation Server
#- DocNet
summary: 
 - Development of the payment solution "Svea Checkout" being rolled out in Sweden, Norway and Finland.
 - Improved api documentation by generating most of it automatically
 - Improved test readability by rewriting them as executable specifications  
--- 
{% for summary in page.summary %}
* {{ summary}}{% endfor %}
<!--more-->