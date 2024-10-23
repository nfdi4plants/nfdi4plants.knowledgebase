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


---
---

# Backup Slides


---

<img class="arcitectLogo" src="./start-here/arcitectLogo.png"/>

## Download the demo data

![bg right:40% w:250](./../../../img/ARCitect-help-Sidebar.png)

1. Open the ARCitect
2. Login (1) to your DataHUB account
3. Navigate to **Download ARC** (4)

---

<img class="arcitectLogo" src="./start-here/arcitectLogo.png"/>

## Download the demo data

4. Search for **Talinum-CAM-Photosynthesis**
5. Click the download button, select a location and open the ARC.
6. Open the downloaded ARC

![w:700](./../../../img/arcitect-download-TalinumARC.png)

:bulb: This is basically the ARC we created in the last session.

---


---


---

## Annotation of the result data points

![w:700](./start-here/arc-prototypic-datamap.svg)

Persistence from sample to data point using fragment selectors

---

## Point into results - Fragment selectors

![w:700](./start-here/arc-prototypic-datamap-fragment-selectors1.svg)

---

## DataMAP: Annotation for the fragment selectors

![w:700](./start-here/arc-prototypic-datamap-fragment-selectors2.svg)
