---
layout: none
title: ARC storage locations
marp: true
theme: marp-theme_dataplant-ceplas-ccby
paginate: true
license: '[CC-BY 4.0](https://creativecommons.org/licenses/by/4.0/)'
date: 2023-12-05
author:
- name: Dominik Brilhaus
  orcid: https://orcid.org/0000-0001-9021-3197
  github: brilator
---

# Where do I store my ARC?

---

# DataHUB as the *"ground truth"*

![w:600px](./../../../img/ARC-storageLocations-withNotes.drawio.png)

:bulb: ARCitect and ARC commander provide options to avoid syncing large files (LFS = Large file storage)

---

- Laptop
  - work on small files
  - annotate metadata
  - add scripts
  - add protocols

:bulb: also applies to other ARCs where you would not want to download the large files

- Desktop
  - work on large files
  - run analyses
  
- mount file server / HPC
- direct connection HPC to DataHUB (depends on security settings)

:bulb: This is just one example. Details may differ.
