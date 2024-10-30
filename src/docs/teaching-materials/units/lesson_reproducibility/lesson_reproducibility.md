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
title: lesson_reproducibility
---

# Code Notebooks

- <https://jupyter.org/>
- <http://rmarkdown.rstudio.com>

**Good**

- Document and comment code
- Local sharing (mostly reproducible, executable code)
- Interactive (good start for non-coders)

**Intermediate**

- Reproducibility (package / library dependencies)
- Version control (e.g. git plugin)

<!-- Source to slide(s) -->
<!-- ../../bricks/lesson_reproducibility-Code_Notebooks.md -->


---

# Computational workflow languages
<style scoped>
.columns {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 6em;
}
</style>

<div class="columns">
<div class="columns-left">

- Describe analysis workflows and tools
- Make them portable and scalable
- Across a variety of environments (software and hardware)

</div>

<div class="columns-right">

<!-- - <https://www.docker.com>
- singularity -->
<https://www.commonwl.org>
<https://www.nextflow.io>
<https://nf-co.re/>
<https://snakemake.github.io>
<br>
<https://galaxyproject.eu/>

</div>

<!-- Source to slide(s) -->
<!-- ../../bricks/lesson_reproducibility-Computational_workflow_languages.md -->
