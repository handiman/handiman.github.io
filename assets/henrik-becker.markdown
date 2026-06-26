# {{ person.name }} - {{ person.jobTitle }}   

## Profile
{{ person.description }}

## Skills & Expertise
{% for category in featuredSkills %}| {{ category[0] }} {% endfor %}|
{% for category in featuredSkills %}| --- {% endfor %}|
{% assign maxRows = 0 %}{% for category in featuredSkills %}{% if category[1].size > maxRows %}{% assign maxRows = category[1].size %}{% endif %}{% endfor %}{% assign lastRow = maxRows | minus: 1 %}{% for i in (0..lastRow) %}{% for category in featuredSkills %}| {{ category[1][i].name }} {% endfor %}|
{% endfor %}

## Languages
| Language | Proficiency |
|-|-|
{% for language in languages %}| {{ language.name }} | {{ language.proficiency }} |
{% endfor %}{% assign language = nil %}

## Certifications 
| Title | Issuer | Date |
| ----- | ------ | ---- |
{% for cert in certs %}| [{{ cert.title }}]({{ cert.link }}) | {{ cert.issuer }} | {{ cert.achievement_date }} |
{% endfor %}

## Work Experience
{% for employment in collections.employment %}
### {{ employment.data.organization.name }}
_{{ employment.data.roles | join: ", " }} | {{ employment.data.start_date | date: "%b %Y" }}{% if employment.data.end_date %} - {{ employment.data.end_date | date: "%b %Y" }}{% endif %}_

{% if employment.data.mission %}
{{ employment.data.mission }}

*Clients:*
{% for client in collections.clients %}* [{{client.data.name}}]({{client.url}})
{% endfor %}{% else %}{{ employment.data.description }}{% for highlight in employment.data.highlights %}
* {{ highlight }}{% endfor %}{% for ass in employment.data.assignments %}
#### {{ ass.data.title }}
_{{ ass.data.roles | join: ", " }} | {{ ass.data.start_date | date: "%b %Y" }}{% if ass.data.end_date %} - {{ ass.data.end_date | date: "%b %Y" }}{% endif %}_   

{{ ass.data.description }}{% for highlight in ass.data.highlights %}
* {{ highlight }}{% endfor %}
{% if ass.data.employer.size > 1 and ass.data.employer.size < 4 %}{{ "\nNote: Engagement continued uninterrupted across " | append: ass.data.employer.size | append: " consulting firms" }}{% endif %}
{% endfor %}{% endif %}{% endfor %}


## Education
{% for edu in collections.education reversed %}
### {{ edu.data.title }}
_{{ edu.data.description }} | {{ edu.data.start_year }} - {{ edu.data.end_year }}_  
{% endfor %}
