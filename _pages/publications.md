---
layout: archive
title: ""
permalink: /publications/
author_profile: true
---

> ### Research Statement:
>
> I work on developing convex optimization based computational methods and tools for analysis and control of dynamical systems. Recently, I have also stated to explore ways of integrating machine learning (non-convex) methods in control theory to potentially solve problems that cannot be solved using traditional convex optimization methods.
>

{% if author.googlescholar %}
  You can also find my articles on <u><a href="{{author.googlescholar}}">my Google Scholar profile</a>.</u>
{% endif %}

{% include base_path %}

{% for post in site.publications reversed %}
  {% include archive-single.html %}
  <hr style="text-align:left;margin-left:0;height:1px">
{% endfor %}
