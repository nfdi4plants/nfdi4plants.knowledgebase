---
marp: true
theme: dataplant_marp-theme
paginate: true
footer: ' <a href="https://nfdi4plants.org"> <img id="footer-img1" src="./../../../img/logos/DataPLANT/DataPLANT_logo_square_bg_transparent.svg"></a>
  <a href="https://ceplas.eu"> <img id="footer-img2" src="./../../../img/logos/CEPLAS/CEPLAS_Icon.jpeg"></a><a
  href="https://creativecommons.org/licenses/by/4.0/"><img id="footer-img3" src="./../../../img/logos/CreativeCommons/by.svg"></a> '
style: 'footer {height: 30px;padding: 10px;bottom: 00px;} #footer-img1 {height: 30px;padding-left:
  0px;} #footer-img2 {height: 30px;padding-left: 20px;opacity: 0.5;} #footer-img3
  {height: 20px;padding-left: 20px;opacity: 0.5;}'
layout: slides
author:
- name: Dominik Brilhaus
  github: https://github.com/brilator
  orcid: https://orcid.org/0000-0001-9021-3197
license: '[CC-BY 4.0](https://creativecommons.org/licenses/by/4.0/)'
date: 2023-03-16
description:
- contemporaneous documentation
- introduce electronic lab notebook (ELN)
- show digital tools for collaborative, shared documentation
title: lesson_documentation
---

# Digital documentation

*Of **anything** from green house to digital data object*


Electronic lab notebook

- Lab methods
- Sample processing

(Computational) processing steps

- Data processing (excel sheets)
- Analyses (excel, code, etc.)
- Keep track of tools, versions and parameters used

<!-- Source to slide(s) -->
<!-- ../../bricks/lesson_documentation-Digital_documentation.md -->


---

# Electronic lab notebooks (ELNs)

<style scoped>
.columns {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 1rem;
}
ul {
    margin: 5; padding: 0;
}
</style>

<div class="columns">
<div class="columns-left">

### <span style="color:#B4CE82">Good</span>

- Documenting daily lab routine
- Lab methods & protocols
- Lab inventory (biologicals, chemicals, instruments)
- Local sharing & collaboration
- (P)IDs
- Backup (locally)

</div>
<div class="columns-right">

### <span style="color:#F9CD69">Intermediate</span>

- Version control
- Track changes / contributions
- External sharing

</div>

<div class="columns-right">

### <span style="color:#c21f3a">Limited</span>  

- Raw data
- Analyses
- Structured metdata

</div>
</div>

<!-- Source to slide(s) -->
<!-- ../../bricks/lesson_documentation-ELNs.md -->


---

# Markup Languages

- HyperText Markup Language (HTML)
- Extensible Markup Language (XML)
- LaTeX (check out [overleaf](https://www.overleaf.com/)!)
- Markdown
<br>

> WYSIWYG: *What You See Is What You Get*
> You literally "code out", what you want the text to look like

<!-- Source to slide(s) -->
<!-- ../../bricks/lesson_documentation-Markup_Languages.md -->


---

# Markdown vs. HTML

<style scoped>
.columns {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 5rem;
}
ul {
    margin: 5; padding: 0;
}
</style>

<div class="columns">
<div class="columns-left">


**In HTML:**

```html
<html>
  <body>    
    <h3>headline level 3</h3>
    <h4>headline level 4</h4>
  </body>
</html>
```

**In Markdown:**

```md
  ### headline level 3
  #### headline level 4
```

</div>
<div class="columns-right">

### Rendered output

### headline level 3
#### headline level 4

</div>
</div>

<!-- Source to slide(s) -->
<!-- ../../bricks/lesson_documentation-Markdown_HTML.md -->


---

# What is Markdown?

- Markdown is a **lightweight** markup language
- File extensions: `.md` or `.markdown`
- Official markdown website: <https://daringfireball.net/projects/markdown/>

<!-- Source to slide(s) -->
<!-- ../../bricks/lesson_documentation-Markdown.md -->


---

# Why Markdown?

<style scoped>
.columns {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1rem;
}
ul {
  font-size: 25px;
    /* margin: 5; padding: 0; */
}
</style>

<div class="columns">
<div class="columns-left">


### simple, plain text format

- no hassle with formatting
- Worry about content, not layout
- most benefits of LaTeX, but simpler

### easy-to-read, easy-to-write

- intuitively human-readable
- machine-actionable, convertible

### easy-to-reuse

- text is not stuck in formats or layouts

</div> 
<div class="columns-right">

### independent

- open source
- You only need a text editor
- No need for "word processor programs" (Microsoft Word, WordPad, macOS Pages, Google Docs, LibreOffice Writer)

### extendible

- many programs, tools and platforms work with or understand markdown

<!-- Source to slide(s) -->
<!-- ../../bricks/lesson_documentation-Why_Markdown.md -->


---

# Text editors and IDEs

*Please do not open markdown (.md) files in MS word*

Recommended text editors with code highlighting

- Visual Studio Code <https://code.visualstudio.com/>
- BBEdit <https://www.barebones.com/products/bbedit/>
- Sublime <https://www.sublimetext.com/>

- These highlight the structure / hierarchy of many text / code file types and make them a bit more comprehensible than pure text editors

<!-- Source to slide(s) -->
<!-- ../../bricks/lesson_documentation-Text_editors_and_IDEs.md -->
