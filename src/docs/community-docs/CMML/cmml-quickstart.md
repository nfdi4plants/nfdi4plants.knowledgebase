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


### Contact the CMML

Please check the CMML websites for contact options: 

- at CEPLAS: https://www.ceplas.eu/en/research/plant-metabolism-and-metabolomics-facility
- at HHU: https://www.plant-biochemistry.hhu.de/facilities/metabolic-profiling


### 👥Cooperation &ndash; User regulation

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
6. Please follow the link (green arrow) in the e-mail and log in with your DataHUB account.

<img src="./image/cmml-quickstart/DataHUB-Access-Mail.png" style="width:65%;display: block; margin: 20px auto;">

5. __Read and follow__ the next instructions - __📘 User Guide - ARC__ and __📙 User Guide - DataHUB__.

***

## 📙 User Guide - DataHUB

### 📖 Introduction to DataHUB

This section gives you a short introduction to some helpful parts of DataHUB. The sidebar is found on the left side of the website.

<img src="image/cmml-quickstart/ARC_Menu.png" style="width:25%; display: block; margin: 20px auto;">

1. If you click on the __name of the ARC__ you can always return to the front page.

   :arrow_right: At the front page there is also the possibility to search for specific files with __'Find Files'__.

2. Under __'Project information'__ in the section __'Members'__ you can see all members involved in the ARC and there is also the possibility to add other members.

3. The section __'Issues'__ should help to collaborate on ideas, solve problems, and plan work.

4. Under __'Wiki'__ you can create or edit a 'Page' for meeting-protocols or writing down sharable notes.

<!-- 

@Dominik: part mit deleting/adding/changing files and folders
---

The DataHUB allows to directly operate files and folders without using any other tools similar to what you are used to from your computer's file explorer or finder.
-->

***

### 📖 Add files or folders
<!-- 
<img src="./../img/datahub-addFiles.drawio.png" style="width:100%;display: block;margin: 20px auto;">

1. From the [ARC panel](./datahub-ARCPanel.html), navigate to subdirectory of your ARC. 
2. Click the plus sign next to your ARC's name (1).
3. Select to upload a file (2) or create a new directory (3) in the current directory. 
4. This will open a new menu where you can upload your file or choose a name for your new directory. 
-->

***

### 📖 Replace, delete or download single files
<!-- 
<img src="./../img/datahub-deleteFile01.drawio.png" style="width:100%;display: block;margin: 20px auto;">

1. Select a file (1) that you want to change or download

<img src="./../img/datahub-deleteFile02.drawio.png" style="width:90%;display: block;margin: 20px auto;">

2. From the next view you can choose to replace (2) a file via upload, delete (3) or download (4) the file. 

:bulb: By selecting replace (2) you can simply upload another version of the same file. The name of the original file is kept. 
-->

***

### 📖 Download folders
<!-- 
<img src="./../img/datahub-download.drawio.png" style="width:100%;display: block;margin: 20px auto;">

1. From the [ARC panel](./datahub-ARCPanel.html), navigate to subdirectory of your ARC that you would like to download
2. From the download menu, you can
   1. download the complete ARC including all data files (1) or 
   2. download only the currently displayed directory including all its files (2)

-->
***

## 📘 User Guide - ARC

### 📖 Introduction to ARC

The ARC always has a specific folder structure that consists of:

- studies
- assays
- workflows
- runs

It can also contain project-specific folders like 'images' or 'literature'.

<img src="./image/cmml-quickstart/ARC-Folder-structure.png" style="width:30%; display: block; margin: 20px auto;">

 Those folders contain specific parts of a research project.

> Example:
>
> - studies: Cultivation and sampling of plants or cells 
> - assays: Metabolite extraction and derivatization or measurements of the samples


The following guide will help you to get started to work with ARC.

***

### 📖 isa.investigations.xlsx

This workbook records the metadata of the whole project. In the first part it stores information about the whole project. It includes an Identifier, Title and Description and also publication data - if published. There is also a part for personal data. Here each column is deticated to a person and it can be filled out manually.

<img src="./image/cmml-quickstart/isa-investigation.png" style="width:45%; display: block; margin: 20px auto;">

:pen: __Fill out__ the part __'INVESTIGATION CONTACTS'__ with your personal data (the following are mandatory):

- First and Last Name
- Email
- Phone
- Address
- Affiliation

:bulb: For the other parts below the __'INVESTIGATION CONTACTS'__ sections it is recommended to use [ARC Commander](./../../implementation/ArcCommander.html) for adding the metadata. This is less error-prone than filling it out manually.

***

### 📖 Studies and Assays

Study and assay folders always consist of the following structures:



```markdown
└── <StudyName>
    ├── README.md
    ├── isa.study.xlsx
    ├── protocols
    └── resources
```

```markdown
└── <AssayName>
    ├── README.md
    ├── isa.assay.xlsx
    ├── protocols
    └── dataset
```

<!-- 
<img src="image/cmml-quickstart/1689767362252.png" style="width:55%; display: block; margin: 20px auto;"> -->

Every part of a research project finds a place to be put in:

1. __isa.study.xlsx__ or __isa.assay.xlsx__:  

   :arrow_right: for this description go to the [next](#📖-isastudyxlsx-or-isaassayxlsx) part of the instruction

2. __Protocols__:  

   - "substitute" for Lab-book
   - here you should write down the used method, but also put in for example plasmid-cards that are specific for this part of the research
   - most optimal file-format would be .txt, but a Word-file can also be possible

3. __Resources__ (only in studies)

4. __Dataset__ (only in assays)
  
5. __README.md__: description and notes for the specific study or assay

***

### 📖 isa.study.xlsx and isa.assay.xlsx

The isa.study- and isa.assay-file consist of two excel-sheet

1. __Samplesheet__ that holds the name of the study or assay

  :arrow_right: Here you __describe__ the samples in details, how they have been processed and give them a __CMML-specific label__ that consists of your project-number and a following numbering

__:pen: The samples must be labelled with the last digits and the box with the project-number and sampleset.__
> Example:
>
> - The __first sampleset__ has 20 samples and your project-number is: 23-0065
> - The final numbering in the samplesheet would be: __23-0065_001__ up to __23-0065_020__
> - The samplebox must be labbeled with __23-0065_01__
> - The sampletubes must then be labelled with __001__ up to __020__
> - If you provide another sampleset, the numbering on the tubes are consecutive for all samples.
>

2. __Metadata__ - the sheet is called 'Study' or 'Assay'

 :pen: __Fill out__ the Metadata as best as you can (the following parts are mandatory):

- __for studies__:
  - Study Title
  - Study Description
  - STUDY CONTACTS
- __for assays__:
  - ASSAY PERFORMERS

***

## 🌱 CMML Support

If any problems occur there is the possibility to check the common [__Knowledgebase__](https://nfdi4plants.org/nfdi4plants.knowledgebase/index.html) from DataPLANT for solutions. Otherwise contact the CMML so the problems can be solved together. You can always come back to the __Qickstart__ with the shared link and we are open for any suggestions on it to improve it.
