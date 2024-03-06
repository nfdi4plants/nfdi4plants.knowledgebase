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

# ARC storage and sharing

![](./../../../img/ARC-storageLocations-withNotes.drawio.png)

---

# ARC storage and sharing

![w:600](./../../../img/ARC-storageLocations-withNotes.drawio.png)

- DataHUB as "ground truth" / original clone
- You can sync and communicate all changes to your ARC via the DataHUB

<span style="font-size:0.8em"> :bulb: ARCitect and ARC commander provide options to avoid syncing large files (LFS = Large file storage) </span>

---

<div class=two-columns>

  <div>
  
  - Personal computer
    - work on small files
    - annotate metadata
    - add scripts
    - add protocols
  
  - Workstation / Server
    - work on large files
    - run analyses
  
  </div>
  
  <div>
  
  - FileShare
    - mount to local machine and arc sync
  
  - HPC
    - direct connection HPC to DataHUB (depends on security settings)
    - or mount to local machine and arc sync from there
  
  </div>

</div>