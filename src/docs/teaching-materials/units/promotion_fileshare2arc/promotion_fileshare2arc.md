---
marp: true
theme: dataplant_marp-theme
paginate: true
license: '[CC-BY 4.0](https://creativecommons.org/licenses/by/4.0/)'
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
duration_minutes: 10
date: 2023-03-29
status: ready
description: slide-deck to illustrate how ARC + DataHUB could be implemented parallel
  or replacing a local file share
title: promotion_fileshare2arc
---

# Migrating from file share to DataHUB

Dominik Brilhaus - April 13, 2023

---

# (Institute) File share as the place for your raw data

![](images/DataExchange-StatusQuo-002-measure.drawio.svg)

---

# Sharing and collaborating with locals

![](images/DataExchange-StatusQuo-003-analyze.drawio.svg)

:warning: No control and documentation over who has done what and why?

---

# File Share Backend: Computing center

![](images/DataExchange-StatusQuo-004-backend.drawio.svg)

---

# Sharing and collaborating with externals

![](images/DataExchange-StatusQuo-005-Share.drawio.svg)

---

# Replacing the server with the DataHUB

![](images/DataExchange-viaHub-001-ARC.drawio.svg)

---

# Replacing the server with the DataHUB

![](images/DataExchange-viaHub-001-ARC-sync.drawio.svg)

:bulb: Controlled, step-by-step documentation of who has done what.

---

# Replacing the "ground truth"

![](images/DataExchange-viaHub-002-backend.drawio.svg)

---

# Share via hub

![](images/DataExchange-viaHub-003-Share.drawio.svg)

:bulb: Invite external partners to your ARC. 

---

# Possible conflicts

![](images/DataExchange-viaHub-004-mergeConflicts.drawio.svg)

---

# arc sync

![](images/DataExchange-viaHub-005-config.drawio.svg)
