---
layout: docs
title: 🚀 QuickStart for Cooperation with CMML
date: 2023-07-21
author:
- name: Lea Wirth
  orcid: https://orcid.org/0009-0009-6869-5746
  github: lewir101
- name: Dominik Brilhaus
  orcid: https://orcid.org/0000-0001-9021-3197
  github: brilator
add toc: true
add support: false
add sidebar: _sidebars/mainSidebar.md
---

## About this guide

This quick start introduces how to cooperate with the [CEPLAS metabolomics & metabolism laboratory (CMML)](https://www.ceplas.eu/en/research/plant-metabolism-and-metabolomics-facility) at Heinrich-Heine-University in Düsseldorf.

Major focus here is on exchange of data between CMML and the user using tools and services provided by DataPLANT.

### ☎️ Contact the CMML

Please check the CMML websites for contact options:

- at CEPLAS: https://www.ceplas.eu/en/research/plant-metabolism-and-metabolomics-facility
- at HHU: https://www.plant-biochemistry.hhu.de/facilities/metabolic-profiling


### 👥 Cooperation &ndash; User regulation

Please note that __all cooperations__ are incumbent upon the [User regulation ("Nutzerordnung")](https://www.plant-biochemistry.hhu.de/facilities/metabolic-profiling/nutzerordnung).

## Data Flow between CMML and the user

### 🌐 ARC - Annotated Research Context

The CMML uses the [Annotated Research Context (ARC)](./../../implementation/AnnotatedResearchContext.html) for data exchange.
With the ARC we can easily exchange sample sheets, workflows, protocols and share (meta-)data inside a common and shareable folder structure. The ARC is shared via DataPLANT's [DataHUB](./../../implementation/DataHub.html).

<img src="../../img/ARC_DataSharing_Collaborators_img2.png" style="width:65%; display: block; margin: 20px auto;">

The CMML creates an ARC for your project at the [DataHUB](https://git.nfdi4plants.org/) and invites you to the ARC. In order to do so, please complete the following setup.

***

### 👣 Setup

1. Please [__create a DataHUB account!__](https://register.nfdi4plants.org)

    :bulb: You can also log in with your scientific account ORCID or Life Sciences!

2. Once you successfully created your account and logged in, you can find your _@username_ (blue arrow) in the avatar menu in the top right of the website (yellow arrow).

<img src="./image/cmml-quickstart/DataHUB-Username.png" style="width:35%; display: block; margin: 20px auto;">

3. Please __email__ this _@username_ to the CMML.   
4. The CMML will invite you to a shared ARC for your project.
5. Once the access to your ARC was granted, you will receive an e-mail.
6. Please follow the link in the e-mail (green arrow) and log in with your DataHUB account.

<img src="./image/cmml-quickstart/DataHUB-Access-Mail.png" style="width:65%;display: block; margin: 20px auto;">

***

## 📙 User Guide &ndash; DataHUB

### 📖 Introduction to the DataHUB

This section gives you a short introduction to some helpful parts of the DataHUB.

:bulb: Please check out the [DataHUB manual](./../../DataHUB-Manual/index.html) for more details.

The sidebar is found on the left side of your ARC.

<img src="./image/cmml-quickstart/ARC_Menu.png" style="width:25%; display: block; margin: 20px auto;">

1. If you click on the __name of the ARC__ you can always return to the front page.

   :arrow_right: At the front page there is also the possibility to search for specific files with __'Find Files'__.

2. Under __'Project information'__ in the section __'Members'__ you can see all members involved in the ARC and there is also the possibility to add other members.

3. The section __'Issues'__ should help to collaborate on ideas, solve problems, and plan work.

4. Under __'Wiki'__ you can create or edit a 'Page' for meeting-protocols or writing down sharable notes.

:bulb: The DataHUB allows to directly operate files and folders without using any other tools similar to what you are used to from your computer's file explorer or finder.

:bulb: For details, please check out the [DataHUB manual](./../../DataHUB-Manual/datahub-files.html).

## 📘 User Guide - ARC

### 📖 Introduction to ARC

The basic ARC folder structure consists of:

- studies
- assays
- workflows
- runs

Those folders contain specific parts of a research project.

> Example:
>
> - studies: Cultivation and sampling of plants or cells 
> - assays: Metabolite extraction and derivatization or measurements of the samples

It can also contain project-specific folders like 'images' or 'literature'.

<img src="./image/cmml-quickstart/ARC-Folder-structure.png" style="width:30%; display: block; margin: 20px auto;">

The following guide will help you to get started to work with ARC.

***

### 📖 isa.investigations.xlsx

This workbook records the metadata of the whole project. In the first part it stores information about the whole project. It includes an Identifier, Title and Description and also publication data - if published. There is also a part for personal data. Here each column is deticated to a person and it can be filled out manually.

<img src="./image/cmml-quickstart/isa-investigation.png" style="width:45%; display: block; margin: 20px auto;">

:pen: __Fill out__ the part __'INVESTIGATION CONTACTS'__ with your personal data. You can download the file and replace the online-version afterwards. The following are mandatory:

- First and Last Name
- Email
- Phone
- Address
- Affiliation

:bulb: For the other parts below the __'INVESTIGATION CONTACTS'__ sections it is recommended to use [ARC Commander](./../../implementation/ArcCommander.html) for adding the metadata. This is less error-prone than filling it out manually.

***

### 📖 Studies and Assays

Study and assay folders always consist of the following structures:

<img src="image/cmml-quickstart/datahub-ISA-subfolders.png" style="width:55%; display: block; margin: 20px auto;">

Every part of a research project finds a place to be put in:

1️⃣ __isa.study.xlsx__ or __isa.assay.xlsx__ consist of two excel sheets:  

- __Sample sheet__ that holds the name of the study or assay
  
:arrow_right: Here you __describe__ your samples, how they have been processed and give them a __CMML-specific label__ that consists of your project-number and a following numbering. You can download the file and replace the online-version afterwards.

:pen: The samples must be __labelled with a continous number and the box with the project-number and sample set.__

> Example:
>
> - The __first sampleset__ has 20 samples and your project-number is: 23-0065
> - The final numbering in the samplesheet would be: __23-0065_001__ up to __23-0065_020__
> - The sample box must be labeled with __23-0065_01__
> - The sample tubes must then be labelled with __001__ up to __020__
> - If you provide another sample set, the numbering on the tubes are consecutive for all samples.

- __Metadata__ - the sheet is called 'Study' or 'Assay'

2️⃣ __Protocols__:  

    - "substitute" for Lab-book
    - here you should write down the used method, but also put in for example plasmid-cards that are specific for this part of the research
    - most optimal file-format would be .txt, but a Word-file can also be possible

3️⃣ __Resources__ (only in studies)

4️⃣ __Dataset__ (only in assays)
  
5️⃣ __README.md__: description and notes for the specific study or assay

***

## 🌱 CMML Support

If any problems occur there is the possibility to check the common [__Knowledgebase__](./../../index.html) from DataPLANT for solutions. Otherwise contact the CMML so the problems can be solved together. You can always come back to this __Qickstart__ with the shared link and we are open for any suggestions to improve it.
