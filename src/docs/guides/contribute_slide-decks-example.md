---
layout: slides
marp: true
title: Contribute slide decks - Example
date: 2023-06-29
author: 
- name: Dominik Brilhaus
  github: https://github.com/brilator
  orcid: https://orcid.org/0000-0001-9021-3197
add toc: true
add sidebar: _sidebars/mainSidebar.md
footer: I am a footer
---

<!-- _paginate: false -->

---

# I'm a headline

- some
- notes

- [Jump to slide 3](#3)

---

# headline level 2

```bash
I am code
```

---

# full slide image

![I am a full slide image](./../img/datahub_collaboration.png)

---

# image to right

- some notes
- about the image

![bg right w:1000](./../img/datahub_collaboration.png)

---

# Speaker notes

- notes are in the comment
- only visible in presenter mode (export to html)

<!-- 
I am a speaker note
 -->

---

# speaker notes everywhere

<!-- 
I am a speaker note
 -->

- notes are in the comment
- only visible in presenter mode (export to html)

<!-- 
I am another speaker note
 -->

---

# Use of html elements is supported

<span style="color:#B4CE82">DataPLANT olive</span>  

<span style="color:#c21f3a">DataPLANT red</span>  

<span style="color:#F9CD69">DataPLANT yellow</span>

<span style="color:#4FB3D9">DataPLANT lightblue</span>


---

# Two types of bullet points

Lists with `-` are rendered as a single slide
```md
- item 1
- item 2
- item 3
```

Lists with `*` are rendered into "multiple" slides (in html), building up one per bullet point

```md
* item 1
* item 2
* item 3
```

---

# asterisk bullets

* item 1
* item 2
* item 3

---

# Styling with css

- Marp supports basically all layouting with combination of html and css
- con: hard to learn
- pro: very flexible and pretty much everything can be googled

---

# Global and local directives

MARP differentiates global (all slides) and local (current slide) "directives" (styles)

> https://marpit.marp.app/directives

- CSS global:

```markdown
<style>
</style>
```

- CSS local:

```markdown
<style scoped>
</style>
```

:warning: Do not use global styling in bricks! Otherwise these will mess up styling of slide decks combined from multiple bricks / units. 

---

# column-split slides

<style scoped>
.columns {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1rem;
}
</style>

<div class="columns">
<div class="columns-left">

# Column 1

Content 1

</div>
<div class="columns-right">

# Column 2

Content2

</div>
</div>


---

# This is a very very very very very unusually long headline that I want to fit on one line <!-- fit -->

add `<!-- fit -->` behind a headline to make it fit into one line

```md
---

# This is a very very very very very unusually long headline that I want to fit on one line <!-- fit -->
```

---

# Align content in center

---

# align all content

<style scoped>
section {
  text-align: center  
}
</style>

some content

![w:600](./../img/logos/DataPLANT/DataPLANT_logo_bg_black.svg)

---


# center align image (Incorrect)


<style scoped>
img {
  display: block;
  margin: 0 auto;
}
</style>

![w:600](./../img/logos/DataPLANT/DataPLANT_logo_bg_black.svg)

> Note, this will also center **all** images on the slide (including those in the footer)!

---

# center align image (Not perfect, but better)


<style scoped>
section p img {
  display: block;
  margin: 0 auto;
}
</style>

![w:600](./../img/logos/DataPLANT/DataPLANT_logo_bg_black.svg)


---

# Crop an image


<style scoped>

section p img {
width: 800px;
height: 200px;
object-fit: cover;
object-position: 100% 100%;
/* display: block; */;
}
</style>

*E.g. a figure coming from what used to be a slide with header/footer*


![](./../img/logos/DataPLANT/DataPLANT_logo_bg_black.svg)


---

# Omitting footer from individual slides 

e.g. if a footer (logos, page numbers, etc.) is used over all slides

<style scoped>
footer {
  display: none;
}
section::after {
  display: none
}
</style>


---


# Add caption to figure to right side of image

<style scoped>
figure {
  position: relative;
  width: 300px;
}

figcaption {
  position: absolute;
  top: 0;
  right: 0;
  width: 40px;
  padding-left: 60px;
  font-size: 20px;
  writing-mode: vertical-rl;
}
</style>

<figure>
  <img src="./../img/logos/DataPLANT/DataPLANT_logo_bg_black.svg">
  <figcaption>This is the caption This is the caption This is the caption This is the caption This is the caption </figcaption>
</figure>


---


# to bottom of image

<style scoped>
figure {
  position: relative;
  width: 250px;
}

figcaption {
  position: absolute;
  height: 40px;
  font-size: 20px;
  text-align: center;
}
</style>

<figure>
  <img src="./../img/logos/DataPLANT/DataPLANT_logo_bg_black.svg">
  <figcaption>This is the caption This is the caption This is the caption This is the caption This is the caption </figcaption>
</figure>


---

# Image with caption right, bullet list left

<style scoped>
.columns {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 10rem;
}
figure {
  position: relative;
  width: 300px;
}

figcaption {
  position: absolute;
  top: 0;
  right: 0;
  width: 40px;
  padding-left: 60px;
  font-size: 20px;
  writing-mode: vertical-rl;
}
</style>

<div class="columns">
<div class="columns-left">

- ok this is 
- rather
- annoying
- and a somewhat
- cumbersome
  -  workaround

</div>
<div class="columns-right">

<figure>
  <img src="./../img/logos/DataPLANT/DataPLANT_logo_bg_black.svg">
  <figcaption>This is the caption This is the caption This is the caption This is the caption This is the caption </figcaption>
</figure>

</div>
</div>