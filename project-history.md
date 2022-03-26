---
title: Project History
---
{% assign present = site.projects %}
<article class="uk-container">
  <header><h1>{{ page.title }}</h1></header>
  <div>
    {% assign periods = '' %}
    {% for project in site.projects reversed %}
      {% assign period = project.end_date | date: '%Y' %}
      {% assign periods = periods | append: ',' | append: period %}
    {% endfor %}
    {% assign periods = periods | split: ',' | uniq %}
    {% for period in periods %}
      {% unless forloop.first %}
      <div>{{ period | capitalize }}</div>
      {% endunless %}
    {% endfor %}
  </div>
  <table>
    <!--<tbody>
      {% for project in present reversed %}
      <tr>
        {% if forloop.first %}
        <td rowspan="{{ present.length }}">
          <h6>Present</h6>
        </td>
        {% endif %}
        <td>
          {{ project.title }}
        </td>
      </tr>     
      {% endfor %}
    </tbody>-->
  </table>
</article>