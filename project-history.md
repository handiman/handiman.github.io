---
title: Project History
---
{% assign periods = '' %}
{% for project in site.projects %}
  {% assign period = project.end_date | date: '%Y' %}
  {% assign periods = periods | append: ',' | append: period %}
{% endfor %}
{% assign periods = periods | split: ',' | uniq %}
<article class="uk-container">
  <header><h1>{{ page.title }}</h1></header>
  <table>
    <tbody>
    {% for period in periods reversed %}{% assign projects_ids = '' %}
        {% for project in site.projects reversed %}{% assign year = project.end_date | date: '%Y' %}
          {% if year == period %}{% assign projects_ids = projects_ids | append: project.id | append: ',' %}{% endif %}
        {% endfor %}
        {% assign project_ids = projects_ids | split: ',' %}
        {% for project_id in project_ids %}{% assign first = forloop.first %}{% assign rowspan = forloop.length %}{% assign match = site.projects | where: 'id', project_id %}
          {% for project in match %}
          <tr>{% if first %}
            <td rowspan="{{ rowspan }}">{{ period | capitalize }}</td>{% endif %}
            <td>{{ project.title }}</td>
          </tr>
          {% endfor %}
        {% endfor %}
    {% endfor %}
    </tbody>
  </table>
</article>