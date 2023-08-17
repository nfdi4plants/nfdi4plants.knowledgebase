---
marp: true
theme: marp-theme_dataplant-ceplas-ccby
paginate: true
license: '[CC-BY 4.0](https://creativecommons.org/licenses/by/4.0/)'
layout: slides
author:
- name: Dominik Brilhaus
  github: https://github.com/brilator
  orcid: https://orcid.org/0000-0001-9021-3197
date: 2023-08-14
title: ARC Club - ARCitect QuickStart
---

# The ARC Club

ARCitect QuickStart

Dominik Brilhaus &ndash; CEPLAS Data Science
August 16th, 2023

---

## Initiate the ARC folder structure

![bg right:40% w:250](./../../../img/ARCitect-help-Sidebar.drawio.svg)

1. Create a **New ARC** (2)
2. Select a location and name for your ARC

---

## Your ARC's name

💡 By default, your ARC's name will be used
   - for the ARC folder on your machine
   - to create your ARC in the DataHUB at `https://git.nfdi4plants.org/<YourUserName>/<YourARC>` (see next steps)
   - as the identifier for your investigation

💡 Make sure that no ARC exists at  `https://git.nfdi4plants.org/<YourUserName>/<YourARC>`. Otherwise you will sync to that ARC.

![bg right:30% w:450](./../../../img/arcitect-ARCPanel.png)

---

## Add a study

by clicking "Add Study" and entering an identifier for your study

![bg right w:500](./../../../img/arcitect-ARCPanel-study01.png)

---

## Add information about your study

In the study panel you can add

- general metadata,
- people, and
- publications

![bg right w:600](./../../../img/arcitect-StudyPanel.png)

---

## Add protocols to your study

In the file tree you can **add protocols**

![bg right w:500](./../../../img/arcitect-ARCPanel-study02.png)

---

## Add protocols

You can either
- directly write a **new protocol** within the ARCitect or
- import an existing one from your computer

![w:800](./../../../img/arcitect-ARCPanel-protocol.png)

---

## Add an assay

by clicking "Add Assay" and entering an identifier for your assay

![bg right w:500](./../../../img/arcitect-ARCPanel-assay01.png)

---

## Link your assay to a study

You can either
- link your new assay to an existing study in your ARC or
- create a new one

![bg right w:500](./../../../img/arcitect-ARCPanel-assay02.png)

---

## Add information about your assay

In the assay panel you can

1. link or unlink the assay to studies, and
2. define the assay's
   - measurement type
   - technology type, and
   - technology platform.

![bg right w:700](./../../../img/arcitect-AssayPanel.png)

---

## Add protocols and datasets

In the file tree you can
  - **add a dataset** and 
  - **protocols** associated to that dataset.

:bulb: **Add Dataset** allows to import data from any location on your computer into the ARC.

:warning: Depending on the file size, this may take a while. Test this with a small batch of files first.

![bg right:40% w:400](./../../../img/arcitect-ARCPanel-assay03.png)

---

## Login to the DataHUB

Click **Login** (1) in the sidebar to login to the DataHUB.

:bulb: This automatically opens your browser at the DataHUB (https://git.nfdi4plants.org) and asks you to login, if you are not already logged in. 

![bg right:40% w:250](./../../../img/ARCitect-help-Sidebar.drawio.svg)

---

## Upload your local ARC to the DataHUB

From the sidebar, navigate to **Versions** (6)

![bg right:40% w:250](./../../../img/ARCitect-help-Sidebar.drawio.svg)

---

## Versions

The versions panel allows you to
- store the local changes to your ARC in form of "commits",
- sync the changes to the DataHUB, and
- check the history of your ARC

![bg right w:650](./../../../img/arcitect-VersionsPanel.png)

---

## Connection to the DataHUB

If you are logged in, the versions panel shows
- your DataHUB's *Full Name* and *eMail*
- the URL of the current ARC in the DataHUB `https://git.nfdi4plants.org/<YourUserName>/<YourARC>`

![bg right w:650](./../../../img/arcitect-VersionsPanel.png)