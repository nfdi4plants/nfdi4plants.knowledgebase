---
marp: true
theme: marp-theme_dataplant-ceplas-ccby
paginate: true
license: '[CC-BY 4.0](https://creativecommons.org/licenses/by/4.0/)'
title: ARCitect Hands-on
author:
- name: Dominik Brilhaus
  github: https://github.com/brilator
  orcid: https://orcid.org/0000-0001-9021-3197
- name: Cristina Martins Rodrigues
  github: https://github.com/CMR248
  orcid: https://orcid.org/0000-0002-4849-1537
- name: Sabrina Zander
  github: https://github.com/SabrinaZander
  orcid: https://orcid.org/0009-0000-4569-6126
- name: Kevin Frey
  github: https://github.com/Freymaurer
  orcid: https://orcid.org/0000-0002-8493-1077
- name: Lukas Weil
- name: Timo Mühlhaus
---

<style>

.arcitectLogo {
  position: absolute;
  top: 1%;
  left: 1%;
  width: 100px;

}

</style>


## Options to annotate the data analysis

![](./start-here/arc-prototypic-workflows1.svg)

---

## A computational workflow is like a protocol

![](./start-here/arc-prototypic-workflows2.svg)

---

## Option I: Create a virtual assay

![](./start-here/arc-prototypic-workflows-virtual.svg)

---

## Option II: Create a workflow and run

![](./start-here/arc-prototypic-workflows-cwl1.svg)

---

## Use CWL to wrap your workflow

![](./start-here/arc-prototypic-workflows-cwl2.svg)

---


<img class="arcitectLogo" src="./start-here/arcitectLogo.png"/>

## Add datasets

In the file tree you can
  - **import dataset files or folders** and 
  - **protocols** associated to that dataset.

:bulb: **Import Dataset** allows to import data from any location on your computer into the ARC.

:warning: Depending on the file size, this may take a while. Test this with a small batch of files first.

![bg right:40% w:400](./../../../img/arcitect-ARCPanel-assay03.png)

