---
layout: docs
title: 🚀 QuickStart for Cooperation with CMML 🌱
published: 2023-07-12
author:
- name: Lea Wirth
  orcid: https://orcid.org/0009-0009-6869-5746
  github: lewir101
add toc: true
add support: true
add sidebar: _sidebars/mainSidebar.md
---

## 👥Cooperation - User regulation

__All cooperations__ are incumbent upon the ["Nutzerordnung"](https://www.plant-biochemistry.hhu.de/facilities/metabolic-profiling/nutzerordnung).

Excerpt of ["Nutzerordnung"](https://www.plant-biochemistry.hhu.de/facilities/metabolic-profiling/nutzerordnung):

>Das CEPLAS metabolomics & metabolism laboratory (CMML) ist Teil der Infrastruktureinheit „Technologie-Plattform: Pflanzenstoffwechsel und Metabolomik“ des Cluster of Excellence on Plant Sciences (CEPLAS) sowie des Instituts Biochemie der Pflanzen. Die Aufgabe des CMML ist die Bereitstellung und Entwicklung analytischer Methoden im Bereich Stoffwechselanalytik (Metabolomics) mit besonderem Fokus auf sogenannte Primärmetabolite. Des Weiteren unterstützen wir Forschende des Clusters und der Heinrich-Heine-Universität im Bereich Experimentdesign und Probenaufarbeitung in dem interdisziplinären Umfeld der Lebenswissenschaften (v.a. Pflanzenbiologie, Mikrobiologie, Medizin). Eine Nutzung durch externe Forschergruppen ist nach Absprache ebenfalls möglich.

***

## 🌐 ARC - Annotated Research Context

DataPLANT provides with the Annotated Research Context (ARC) an Research Data Management (RDM) platform after the FAIR principle. The CMML  implements the ARC for cooperations.

<img src="./src/../../../../_public/docs/img/ARC_DataSharing_Collaborators_img2.png" style="width:65%; display: block; margin: 20px auto;">

The aim is to exchange samplesheets, workflows, protocols and share (meta-)data inside a common and shareable folder structure.

:bulb: For more information about ARC click [here](./../../implementation/AnnotatedResearchContext.html).

The previously created ARC will be shared with you over the [DataHUB platform](https://git.nfdi4plants.org/). Please read the following setup and complete the next steps.

***

## 👣 Setup

1. At first you have to [__create a DataHUB account__](https://register.nfdi4plants.org)!

    :bulb: You can also log in with your scientific account ORCID or Life Sciences!

2. If you have sucessfully created your account you can check on the website at the top left (yellow arrow) your _@username_ (blue arrow).

<img src="./image/cmml-quickstart/DataHUB-Username.png" style="width:45%; display: block; margin: 20px auto;">

1. __Commit__ this _@username_ to the CMML to get started with the common ARC.

    ✉️ You will recieve an e-mail after the access for the ARC was granted.

2. __Follow__ the link (green arrow) in the e-mail and log in with your DataHUB account.

> ![dataHUB/gitLab Mail]()

<img src="./image/cmml-quickstart/DataHUB-Access-Mail.png" style="width:95%;display: block; margin: 20px auto;">

5. __Read and follow__ the next instructions - __📘 User Guide__.

***

## 📘 User Guide

### 📖 Introduction

The ARC always has a specific folder structure that consists of:

- studies
- assays
- workflows
- runs

It can also contain project-specific folders like 'images' or 'literature'.

<img src="./image/cmml-quickstart/ARC-Folder-structure.png" style="width:45%; display: block; margin: 20px auto;">

 Those folders contain specific parts of a research project.
> Example:
>
> - studies: Cultivation and sampling of plants
> - assays: Extraction, derivatization and measuring of the samples

<!--
 > ![Folder Structure](./image/cmml-quickstart/ARC_IllustratedFolderStructure.jpg)
-->

The following guide will help you to get started to work with ARC.

<!-- 

@note for lea: Missing - context of the structures
-->

***

### 📖 isa.investigations.xlsx

This workbook records the metadata of the whole project. In the first part it stores information about the whole project. It includes an Identifier, Title and Description and also publication data - if published. There is also a part for personal data. Here each column is deticated to a person and it can be filled out manually.

> ![isa-investigation](./image/cmml-quickstart/isa-investigation.png)

:pen: __Fill out__ the part __'INVESTIGATION CONTACTS'__ with your personal data (the following are mandatory):

- First and Last Name
- Email
- Phone
- Address
- Affiliation

:bulb: For the other parts below the __'INVESTIGATION CONTACTS'__ sections it is recommended to use [ARC Commander](./../../implementation/ArcCommander.html) for adding the metadata. This is less error-prone than filling it out manually.

***

### 📖 Studies

<!-- not ready yet -->

A study always consists of the following structures:
<!--
> ![Study folder structure](./image/cmml-quickstart/Study_FolderStructure.png)
--> 

> <img src="./image/cmml-quickstart/Study_FolderStructure.png" style="width:45%; display: block; margin: 20px auto;">

- protocols:  
- resources
- isa.study.xlsx: samplesheet, (meta-)data
- README.md

<!-- 

@note for lea: Missing - explanation of each structure

foto bringt mir ja garnichts 
foto vom datahub machen 
ebenfalls bei dem Assay
-->

***

### 📖 Assays

<!-- not ready yet -->

 An assay always consists of the following structures:
<!--
 > ![Assay-folder-structure](image/cmml-quickstart/Assay_FolderStructure.png)
-->

 > <img src ="image/cmml-quickstart/Assay_FolderStructure.png" style="width:45%; display: block; margin: 20px auto;">

- dataset
- protocols
- isa.assay.xlsx: samplesheet, (meta-)data
- README.md
  
<!-- 

@note for lea: Missing - explanation of each structure
-->

<!--

@Dominik: part mit deleting/adding/changing files and folders

-->