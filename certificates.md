---
layout: slider
---

# My certificates

<div class="slider">
  <a class="prev" onclick="moveSlide(-1)">&#10094;</a>

  <div class="slides">
    {% for certificate in site.data.certificates %}
      <div class="slide">
        <img src="{{certificate.img}}" alt="{{certificate.name}}">
      </div>
    {% endfor %}
  </div>

  <a class="next" onclick="moveSlide(1)">&#10095;</a>
</div>
