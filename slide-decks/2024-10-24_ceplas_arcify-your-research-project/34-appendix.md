---
marp: true
theme: marp-theme_dataplant-ceplas-ccby
paginate: true
license: '[CC-BY 4.0](https://creativecommons.org/licenses/by/4.0/)'
title: appendix
author:
- name: Dominik Brilhaus
  github: https://github.com/brilator
  orcid: https://orcid.org/0000-0001-9021-3197
---

## Where do I store my ARC?

![](./../../images/arc-storagelocations-withnotes.drawio.png)

---

## ARC storage and sharing

![w:600](./../../images/arc-storagelocations-withnotes.drawio.png)

- DataHUB as "ground truth" / original clone
- You can sync and communicate all changes to your ARC via the DataHUB

<span style="font-size:0.8em"> :bulb: ARCitect and ARC commander provide options to avoid syncing large files (LFS = Large file storage) </span>

---

## Example setup to store and use ARCs

<div class=two-columns style="font-size: 25px">

  <div>
  
  ### Personal computer

  - work on small files
  - annotate metadata
  - add scripts, protocols
  
  ### Workstation / Server

  - work on large files
  - run computations
  
  </div>
  <div>

  ### FileShare
  
  - mount to local machine, sync ARC from there
  
  ### HPC

  - direct connection HPC to DataHUB (depends on security settings)
  - or mount to local machine and sync, ARC from there
  
  
  </div>

</div>

---

## Download the demo data

![bg right:40% w:250](./../../images/arcitect-help-sidebar.png)

1. Open the ARCitect
2. Login (1) to your DataHUB account
3. Navigate to **Download ARC** (4)

---



## Download the demo data

4. Search for **Talinum-CAM-Photosynthesis**
5. Click the download button, select a location and open the ARC.
6. Open the downloaded ARC

![w:700](./../../images/arcitect-download-talinumarc.png)

:bulb: This is basically the ARC we created in the last session.

---

## Annotation of the result data points

![w:700](../../nfdi4plants.knowledgebase/src/assets/images/start-here/arc-prototypic-datamap.svg)

Persistence from sample to data point using fragment selectors

---

## Point into results - Fragment selectors

![w:700](../../nfdi4plants.knowledgebase/src/assets/images/start-here/arc-prototypic-datamap-fragment-selectors1.svg)

---

## DataMAP: Annotation for the fragment selectors

![w:700](../../nfdi4plants.knowledgebase/src/assets/images/start-here/arc-prototypic-datamap-fragment-selectors2.svg)
