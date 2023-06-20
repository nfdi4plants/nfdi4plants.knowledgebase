---
marp: true
layout: docs
title: ISA File Types
author: 
- name: Dominik Brilhaus
  github: https://github.com/brilator
  orcid: https://orcid.org/0000-0001-9021-3197
- name: Martin Kuhl
  github: https://github.com/Martin-Kuhl
  orcid: https://orcid.org/0000-0002-8493-1077
date: 2023-06-14
add toc: false
add sidebar: _sidebars/mainSidebar.md
---

## About this guide

In this guide we introduce the different ISA file types used in the ARC.

<a href="./index.html">
    <span class="badge-category">User</span><span class="badge-selected" id="badge-newbie">Newbie</span>
    <span class="badge-category">Mode</span><span class="badge-selected" id="badge-tutorial">Tutorial</span>
</a>

<br>
<br>

---

## ARC builds on ISA

The ARC builds on the <a href="https://isa-specs.readthedocs.io/en/latest/isamodel.html" target="_blank">ISA Abstract Model</a> for metadata annotation.
Briefly, the ISA model comes with a hierarchy (ISA = Investigation - Study - Assay) that aligns well with most projects in (plant) biology labs. It allows to group multiple assays to one study and multiple studies to one investigation.


<div class="center75percent">
  <img src="./../img/ISAmodel_ARC01_img01.svg">
  <figcaption> Image source (left panel): <a href="https://isa-tools.org/format/specification.html" target="_blank">https://isa-tools.org/format/specification.html</a></figcaption>
</div>


:bulb: For more details about the ISA model, please also refer to ISA tools (https://isa-tools.org/) and ISA specifications (https://isa-specs.readthedocs.io/). 


<!-- Source to slide(s) -->
<!-- ../../bricks/ARC_ISAmodel.md -->

---

<img src="./../img/ISAmodel_ARC01_img02.svg" style="width:70%;display: block;margin-left: auto;margin-right: auto;">

<!-- Source to slide(s) -->
<!-- ../../bricks/ARC_ISA-tab.md -->

---



---

## isa.<>.xlsx files within ARCs

<img src="./../img/ISAmodel_ARC01_img03.svg" style="width:70%;display: block;margin-left: auto;margin-right: auto;">

<!-- Source to slide(s) -->
<!-- ../../bricks/ARC_ISAxlsx01.md -->


---

## Study and assay files are registered in the investigation file <!-- fit -->

<img src="./../img/ISAmodel_ARC01_img04.svg" style="width:70%;display: block;margin-left: auto;margin-right: auto;">

<!-- Source to slide(s) -->
<!-- ../../bricks/ARC_ISAxlsx02.md -->


---

## The output of a study or assay file can function as input for a new isa.assay.xlsx 

Output building blocks:
- Sample Name
- Raw Data File
- Derived Data File

<img src="./../img/ISAmodel_ARC01_img05.svg" style="width:70%;display: block;margin-left: auto;margin-right: auto;">

<!-- Source to slide(s) -->
<!-- ../../bricks/ARC_ISAxlsx03.md -->


---

## 

<img src="./../img/ISAmodel_ARC01_img6.svg" style="width:70%;display: block;margin-left: auto;margin-right: auto;">

<!-- Source to slide(s) -->
<!-- ../../bricks/ARC_ISAxlsx04.md -->
