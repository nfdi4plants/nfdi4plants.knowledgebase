---
marp: false
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
add toc: true
add sidebar: _sidebars/mainSidebar.md
---

## About this guide

In this guide we introduce the different ISA file types used in the ARC.

<a href="./index.html">
    <span class="badge-category">User</span><span class="badge-selected" id="badge-newbie">Newbie</span>
    <span class="badge-category">Mode</span><span class="badge-selected" id="badge-read">Read</span>
</a>

<br>
<br>

---

## Before we can start

<div id="before-start">

- :bulb: Consider reading about the [ARC](./../implementation/AnnotatedResearchContext.html)
- :bulb: This guide only shows the ISA file types (not their content). Check out the 
- :bulb: For more details about the ISA model, please also refer to ISA tools (https://isa-tools.org/) and ISA specifications (https://isa-specs.readthedocs.io/).


:bulb: For details, check out the [annotation principles](https://nfdi4plants.github.io/AnnotationPrinciples/)

</div>

---

## ARC builds on ISA

The ARC builds on the <a href="https://isa-specs.readthedocs.io/en/latest/isamodel.html" target="_blank">ISA Abstract Model</a> for metadata annotation.
Briefly, the ISA model comes with a hierarchy (ISA: Investigation - Study - Assay) that aligns well with most projects in (plant) biology labs. It allows to group multiple assays to one study, and multiple studies to one investigation.

<div class="center75percent">
  <img src="./../img/ISAmodel_ARC01_img01.svg">
  <figcaption> Image source (left panel): <a href="https://isa-tools.org/format/specification.html" target="_blank">https://isa-tools.org/format/specification.html</a></figcaption>
</div>

Your ARC has one `isa.investigation.xlsx` workbook at its root (i.e. every ARC collects the data to one investigation). Each study or assay that you add to your ARC contains one `isa.study.xlsx` or `isa.assay.xlsx`, respectively. 


---

## ISA-Tab for intuitive collection of metadata

The most user-intuitive format of the ISA metadata framework is <a href="https://isa-specs.readthedocs.io/en/latest/isatab.html" target="_blank">ISA-Tab</a>. As the name suggest, it's a tabular format. Hence, you can view the files in a spread-sheet program of choice. 


<div class="center75percent">
  <img src="./../img/ISAmodel_ARC01_img02.svg">
  <figcaption>Comparison of the ISA file types. Grey cells: keys. White cells: values.</a></figcaption>
</div>

The major difference between the ISA workbooks is their **read-direction**: 
- `isa.investigation.xlsx` is read *top-to-bottom* (keys on the left, values extending to the right)
- `isa.study.xlsx` and `isa.assay.xlsx` *left-to-right* (keys on top, value extending to the bottom)

---

## A to registry to your ARC 

The `isa.investigation.xlsx` allows to store metadata relevant on the investigation-level (e.g. title, date, contributor and publication details of the investigation). In addition, it functions as a "registry" to your ARC. 

Each study (`isa.study.xlsx`) and assay (`isa.assay.xlsx`) of your ARC as well as a summary of metadata contained in them are registered and listed in the `isa.investigation.xlsx`. 

<img src="./../img/ISAmodel_ARC01_img04.svg" style="width:70%;display: block;margin-left: auto;margin-right: auto;">

---

## Communicate how your processes connect

The output of a study or assay file can function as input for a new isa.assay.xlsx 

- communicate the connection of processes

Output building blocks:
- Sample Name
- Raw Data File
- Derived Data File

<img src="./../img/ISAmodel_ARC01_img05.svg" style="width:70%;display: block;margin-left: auto;margin-right: auto;">


---

## You can point to data files

- In the 


<img src="./../img/ISAmodel_ARC01_img6.svg" style="width:70%;display: block;margin-left: auto;margin-right: auto;">

<!-- Source to slide(s) -->
<!-- ../../bricks/ARC_ISAxlsx04.md -->
