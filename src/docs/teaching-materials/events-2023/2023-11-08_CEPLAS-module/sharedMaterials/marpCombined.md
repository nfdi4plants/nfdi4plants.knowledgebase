---
marp: true
theme: marp-theme_dataplant-ceplas-ccby
paginate: true
license: '[CC-BY 4.0](https://creativecommons.org/licenses/by/4.0/)'
title: CEPLAS Good Data Management Practices
author:
- name: Dominik Brilhaus
  github: https://github.com/brilator
  orcid: https://orcid.org/0000-0001-9021-3197
---

# Good Data Management Practices

<!--  _color: white; -->
<!-- _paginate: false -->
<style scoped>section {background: none; background-color: white;}</style>

*part of M4468 &ndash; Plant developmental genetics, evolution<br>and biostatistics in the CEPLAS research program*
<br>
November 8th and 9th, 2023
Dominik Brilhaus, CEPLAS Data Science

![bg fit](./../../../../img/background_title_ceplas.drawio.svg)

---

# Preparation

<!--  _color: white; -->
<!-- _paginate: false -->

<style scoped>section {background: none; background-color: white;}</style>

**before** November 8th, 2023

Dominik Brilhaus, [CEPLAS Data Science](https://www.ceplas.eu/en/research/data-science-and-data-management/)

![bg fit](./../../../../img/background_title_ceplas.drawio.svg)

---

# Checklist hands-on sessions

<style scoped>

ul{
  list-style-type: none; /* Remove bullets */
}
</style>

:bulb: Please prepare the following before the class:

- :white_check_mark: Register at DataPLANT
- :white_check_mark: Find your command line
- :white_check_mark: Install and configure Git on your computer
- :white_check_mark: Install ARC Commander on your computer
- :white_check_mark: Install ARCitect on your computer
- :white_check_mark: Install Swate on your computer
- :white_check_mark: (optional) Install VS Code

---

# DataPLANT Registration

If you do not have a DataPLANT account, please register at the <a href="https://register.nfdi4plants.org" target="_blank">DataPLANT website</a>.

![w:800](./../../../../img/dataplant_registration.png)

---

## Role and consortium

Please add your `Project/consortium` (e.g. CEPLAS) and choose the role `Guest`

![bg right:40% fit](./../../../../img/dataplant_registration_roles.png)

---

# The command line

Find the **command-line interface (CLI)** on your system.

- On Windows: Enter `powershell` into the explorer path
- On MacOS: Search `terminal` via spotlight (&#8984; + &#9251;) or navigate to `Applications` -> `Utilities` -> `Terminal`

<br>

:bulb: In our tutorials we sometimes use *terminal*, *command-line interface (CLI)* and *powershell* interchangeably.

---

# Git Installation

Please install <a href="https://git-scm.com/downloads" target="_blank">Git</a> and <a href="https://git-lfs.github.com/" target="_blank">Git LFS</a> on your system

:bulb: Git LFS may already be installed with your Git installation (at least on Windows)

:bulb: For macOS we recommend to install via homebrew as described on the site above

---

# Configuration of Git

Check the git user configuration on your system, by executing

```bash
git config --global --get-regexp user
```

This should prompt two lines
`user.name <Your Name>`
`user.email <Your Email>`

:bulb: Configuration needs to be done once after installation of git on your system.

---

# Git configuration

Set the git user configuration on your system, by executing

1. Your name

```bash
git config --global user.name "Your Name"
```

2. Your email address

```bash
git config --global user.email "Your Email"
```

---

# ARC Commander Installation

Please install the latest version of the ARC Commander and dependencies for your operating system according to the <a href="https://nfdi4plants.org/nfdi4plants.knowledgebase/docs/ArcCommanderManual/index.html" target="_blank">manual's setup instructions</a>.

Check if the ARC Commander is functional by displaying the ARC Commander version and help menu:

```bash
arc --version
```

![bg right:30% width:300](./../../../../img/arc-manual-setup.png)

---

# ARCitect Installation

Please follow the instructions to install the latest version of ARCitect.

- <a href="https://nfdi4plants.org/nfdi4plants.knowledgebase/docs/ARCitect-Manual/arcitect_installation_macos.html" target="_blank">macOS</a>
- <a href="https://nfdi4plants.org/nfdi4plants.knowledgebase/docs/ARCitect-Manual/arcitect_installation_windows.html" target="_blank">Windows</a>

---

# Swate Installation

Please follow <a href="https://nfdi4plants.org/nfdi4plants.knowledgebase/docs/SwateManual/Docs01-Installing-Swate.html" target="_blank">these instructions</a> to install the latest version of Swate.

---

## Have a simple text editor ready

- Windows Notepad
- MacOS TextEdit

Recommended text editor with code highlighting, git support, terminal, etc: <a href="https://code.visualstudio.com/" target="_blank">Visual Studio Code</a>

---

# Resources

### <img align="left" style="height:35px" src='https://raw.githubusercontent.com/nfdi4plants/Branding/7e7d442aafeaa767b9c14a63a16e459dadcbdaaf/logos/DataPLANT/DataPLANT_logo_minimal_rounded_bg_darkblue.svg'/> DataPLANT (nfdi4plants)

Website: <a href="https://nfdi4plants.org/" target="_blank">https://nfdi4plants.org/</a>
Knowledge Base: <a href="https://nfdi4plants.org/nfdi4plants.knowledgebase/" target="_blank">https://nfdi4plants.org/nfdi4plants.knowledgebase/</a>
DataHUB: <a href="https://git.nfdi4plants.org" target="_blank">https://git.nfdi4plants.org</a>
GitHub: <a href="https://github.com/nfdi4plants" target="_blank">https://github.com/nfdi4plants</a>

---


<!-- Source to slide(s) -->
<!-- ./../../../../img/00-Preparation.md -->


---

# Good Data Management Practices

<!--  _color: white; -->
<!-- _paginate: false -->
<style scoped>section {background: none; background-color: white;}</style>

*part of M4468 &ndash; Plant developmental genetics, evolution<br>and biostatistics in the CEPLAS research program*
<br>
November 8<sup>th</sup>, 2023
Dominik Brilhaus, CEPLAS Data Science

![bg fit](./../../../../img/background_title_ceplas.drawio.svg)

---

# Welcome

---

# House-keeping

Pad: https://pad.hhu.de/oI-NjeUtSHSMzk5huWRkJw
 
---

# Materials

Slides will be shared via DataPLANT knowledge base and the Sciebo folder

---

# Tentative agenda

<style scoped>
.columns {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    font-size: 20px;
}
</style>

<div class="columns">
<div class="columns-left">

## Day 1

Time | Topics
-------- | --------
09:30 - 10:45 | Intro to RDM and ARC
10:45 - 11:00 | *Short break*
11:00 - 12:00 | ARC Hands-on
12:30 - 13:30 | *Lunch*
13:00 - 15:30 | Data storage and sharing
15:30 - 16:00 | Wrap-up

</div>

<div class="columns-right">

## Day 2

Time | Topics
-------- | --------
09:30 - 10:30 | ARC Feedback session
10:30 - 10:45 | *Short break*
10:45 - 12:00 | ISA and Metadata
12:30 - 13:30 | *Lunch*
13:00 - 15:00 | Hands-on Swate
15:00 - 15:30 | ARC ecosystem: Additional features
15:30 - 16:00 | Wrap-up

</div>
</div>

---

# Goals

- Appreciate FAIR principles
- Tools and services for FAIR data management
- Effectively manage your own research data
- Communication and terminology

---

# Why Research Data Management (RDM)?

- Increase transparency
- Make data accessible
- Save time (writing, reusing)
- Reduce the risk of data loss
- Optimize the costs
- Facilitate future reuse and sharing
- Improve citations

![bg right:40% w:400](https://rdmpromotion.rbind.io/material/CC-BY-NC/futureself.png)

---

# The Research Data Lifecycle

![h:500](./../../../../img/ResearchDataLifecycle_seq1.png)

---

# The Research Data Lifecycle

![h:500](./../../../../img/ResearchDataLifecycle_seq2.png)

---

# The Research Data Lifecycle

![h:500](./../../../../img/ResearchDataLifecycle_seq3.png)

---

# The Research Data Lifecycle

![h:500](./../../../../img/ResearchDataLifecycle_seq4.png)

---

# The Research Data Lifecycle

![h:500](./../../../../img/ResearchDataLifecycle_seq5.png)

---

# The Research Data Lifecycle

![h:500](./../../../../img/ResearchDataLifecycle_seq6.png)

---

# The Research Data Lifecycle

![h:500](./../../../../img/ResearchDataLifecycle_seq7.png)

---

# The Research Data Lifecycle ***is mutable***

![h:500](./../../../../img/ResearchDataLifecycle_seq9.png)

---

# FAIR

- **F**indable
- **A**ccessible
- **I**nteroperable
- **R**eusable

https://doi.org/10.1038/sdata.2016.18

![bg right:45% w:600](./../../../../img/wilkinson2016-FAIR.png)

---

# The FAIR principles

<style scoped>

section p img {
width: 1100px;
height: 450px;
object-fit: cover;
/* object-position: 100% 100%; */
}
</style>

![](./../../../../img/FAIR_Benefits.png)

---

# Is your data FAIR?

**F**indable | **A**ccessible | **I**nteroperable | **R**eusable

- Where do you store your data?
- How do you annotate your data?
- How do you share your data?
- What tools do you use to analyse your data?
- How do you reuse other people's data?

---

## Findable

> The first step in (re)using data is to find them. Metadata and data should be easy to find for both humans and computers. Machine-readable metadata are essential for automatic discovery of datasets and services, so this is an essential component of the FAIRification process.

- F1. (Meta)data are assigned a globally unique and persistent identifier.
- F2. Data are described with rich metadata (defined by R1 below).
- F3. Metadata clearly and explicitly include the identifier of the data they describe.
- F4. (Meta)data are registered or indexed in a searchable resource.

<span class="footer-reference">https://www.go-fair.org/fair-principles/<span>

---

## Accessible

> Once the user finds the required data, she/he/they need to know how they can be accessed, possibly including authentication and authorisation.

- A1. (Meta)data are retrievable by their identifier using a standardised communications protocol
  - A1.1 The protocol is open, free, and universally implementable
  - A1.2 The protocol allows for an authentication and authorisation procedure, where necessary
- A2. Metadata are accessible, even when the data are no longer available

<span class="footer-reference">https://www.go-fair.org/fair-principles/<span>

---

## Interoperable

> The data usually need to be integrated with other data. In addition, the data need to interoperate with applications or workflows for analysis, storage, and processing.

- I1. (Meta)data use a formal, accessible, shared, and broadly applicable language for knowledge representation.
- I2. (Meta)data use vocabularies that follow FAIR principles.
- I3. (Meta)data include qualified references to other (meta)data.

<span class="footer-reference">https://www.go-fair.org/fair-principles/<span>

---

## Reusable

> The ultimate goal of FAIR is to optimise the reuse of data. To achieve this, metadata and data should be well-described so that they can be replicated and/or combined in different settings.

- R1. (Meta)data are richly described with a plurality of accurate and relevant attributes
- R1.1. (Meta)data are released with a clear and accessible data usage license
- R1.2. (Meta)data are associated with detailed provenance
- R1.3. (Meta)data meet domain-relevant community standards

<span class="footer-reference">https://www.go-fair.org/fair-principles/<span>

---

# FAIR on multiple layers

> The principles refer to three types of entities: **data** (or any digital object), **metadata** (information about that digital object), and **infrastructure**.

<span class="footer-reference">https://www.go-fair.org/fair-principles/<span>

--- 

# Scattered Data Silos

![w:900](./../../../../img/data_fragmentation_CEPLAS.png)

---

# Scattered Data Silos

![w:900](./../../../../img/data_fragmentation_CEPLAS_MibiNet_TRR.png)

---

# FAIR Data for everyone

<style scoped>

section p img {
width: 1300px;
height: 350px;
object-fit: cover;
/* object-position: 100% 100%; */
}
</style>

![](./../../../../img/FAIR_unFAIR_Stories.png)

--- 

--- 

# Contributors

Slides presented here include contributions by

- name: Dominik Brilhaus
  github: https://github.com/brilator
  orcid: https://orcid.org/0000-0001-9021-3197
<!-- Source to slide(s) -->
<!-- ./../../../../img/10-WelcomeIntro.md -->


---

# :pencil: Understand your colleague’s project :pencil:

1. Go to the shared folder prepared before class
1. Try to identify one experiment that led to results (e.g. a figure in the thesis)
1. What are the samples (e.g. plants, bacteria)?
1. How were the samples prepared (~ materials)?  
1. How was the experiment performed (~ methods)?
1. What is the raw data (~ results)?
1. How was the data analyzed (~ computational methods, statistics)?  
1. Collect all of the above in a `README_<YourArbitraryParticipantID>.txt` in the same folder.

---

# Assignment

Participant | looks at project of
--- | ---
Participant01 | Participant02
Participant02 | Participant03
… | …
Participant n | Participant n+1

<!-- Source to slide(s) -->
<!-- ./../../../../img/15-exercise_FAIRProject.md -->


---

# Intro to DataPLANT and ARC

---

# DataPLANT &ndash; <br>The NFDI4Plants

![bg right:50% width:500px](./../../../../img/DataPLANT_TaskAreas.svg)

- NFDI: "Nationale Forschungsdaten Infrastruktur" &ndash; [www.nfdi.de](https://www.nfdi.de/)
- Funded since end of 2020

---

# Data Stewardship between DataPLANT and the community  <!-- fit -->

![w:880](./../../../../img/DataPLANT-collaborationCEPLAS.drawio.png)

---

# Annotated Research Context (ARC)

![width:950](./../../../../img/ARC_DataCentricIntegration_img1.png)

---

# What does an ARC look like?

![width:950](./../../../../img/ARC_fillWithData_seq1.png)

---

# What does an ARC look like?

![width:950](./../../../../img/ARC_fillWithData_seq2.png)

---

# What does an ARC look like?

![width:950](./../../../../img/ARC_fillWithData_seq3.png)

---

# What does an ARC look like?

![width:950](./../../../../img/ARC_fillWithData_seq4.png)

---

# What does an ARC look like?

![width:950](./../../../../img/ARC_fillWithData_seq5.png)

---

# What does an ARC look like?

![width:950](./../../../../img/ARC_fillWithData_seq6.png)

---

# ARC builds on standards

![w:900](./../../../../img/ARC_BuildsOnStandards1.png)

---

# ARC builds on standards + Git

![w:900](./../../../../img/ARC_BuildsOnStandards2.png)

---

---

# Contributors

Slides presented here include contributions by

- name: Dominik Brilhaus
  github: https://github.com/brilator
  orcid: https://orcid.org/0000-0001-9021-3197
- name: Cristina Martins Rodrigues
  github: https://github.com/CMR248
  orcid: https://orcid.org/0000-0002-4849-1537
- name: Martin Kuhl
  github: https://github.com/Martin-Kuhl
  orcid: https://orcid.org/0000-0002-8493-1077


<!-- Source to slide(s) -->
<!-- ./../../../../img/20-DataPLANT-ARC.md -->


---

# ARC Commander Hands-on

---

## Registration

Everyone <a href="https://register.nfdi4plants.org" target="_blank">signed-up</a> at the DataHUB?

---

## Check your installation

Open a terminal and one after the other execute

```bash
git --version
```

```bash
git-lfs --version
```

```bash
arc --version
```

:bulb: If you see a warning at any of these, let us know.

---

## Config

```bash
git config --global --get-regexp user
```

:bulb: If this does not display your user name and email, you need to [configure git](https://nfdi4plants.org/nfdi4plants.knowledgebase/docs/ArcCommanderManual/arc_installation_git.html).

---

## Have a simple text editor ready

- Windows Notepad
- MacOS TextEdit

Recommended text editor with code highlighting, git support, terminal, etc: <a href="https://code.visualstudio.com/" target="_blank">Visual Studio Code</a>

---

## Create a fresh folder for your ARCs

For this workshop, create a new folder somewhere on your machine where you want to store ARCs, e.g. in your documents folder:

- `C:\Users\<username>\Documents\workshop-arcs` (windows)
- `~/Documents/workshop-arcs` (mac)

:warning: Ideally this folder is not "watched" by any cloud service (Sciebo, google drive, iCloud, etc.)

---

# Hands-on with demo data

First steps towards your ARC using the **ARC Commander**

---

## Download the demo data

```bash
git clone "https://demo-user:1_eznikmzxzARAbUxxnF@git.nfdi4plants.org/teaching/demo-arc_level0.git"
```

---

## You just received your data

![bg right width:400](./../../../../img/demo_data_screenshot.png)

---

## Goal

- Structure,
- Annotate, and
- Share your experimental data.

<br>

:bulb: We'll talk about data annotation later

---


## Structure your data

![width:800](./../../../../img/ARC_fillWithData_experimental.png)

---

# Your fresh ARC folder

1. Create a new folder, which you want to initialize as an ARC.
2. Open the command line inside the folder or navigate via command line to that folder.

For example:
```bash
mkdir -p ~/Documents/workshop-arcs/arc-demo
cd ~/Documents/workshop-arcs/arc-demo
```
---

## Initiate the ARC folder structure

```bash
arc init
```

---

## Create an investigation

```bash
arc investigation create -i TalinumPhotosynthesis
```

---

## Add a person

```bash
arc i person register --lastname Brilhaus --firstname Dominik --email brilhaus@hhu.de --affiliation CEPLAS
```


---

## Add a study

```bash
arc study add -s talinum_drought
```
  
---

## Add assays

```bash
arc assay add -s talinum_drought -a rnaseq
arc assay add -s talinum_drought -a metabolomics
```

---

## Collaborate and share

![w:650](./../../../../img/ARC_DataSharing_Experts02_img1.png)

---

# Upload your local ARC to the DataHUB

```bash
arc sync -f -r https://git.nfdi4plants.org/<username>/arc-demo
```

---

## Sort the demo data into the ARC

Identify "raw dataset(s)" and "protocols" and move them to the proper subfolders in the ARC.

![bg right w:500](./../../../../img/demo_data_screenshot.png)

---


## Sync your ARC to the DataHUB

To save the changes, sync the ARC to the DataHUB including a message.

```bash
arc sync -m "sorted the demo data"
```

---

## Check the ARC in the DataHUB

Navigate to `https://git.nfdi4plants.org/<username>/arc-demo` to visit your ARC in the DataHUB

---

## Your ARC is ready

![bg 80% right:75%](./../../../../img/demo_data_screenshot.png)
![bg 80%](./../../../../img/demo_arc_screenshot.png)

---

---

# Contributors

Slides presented here include contributions by

- name: Dominik Brilhaus
  github: https://github.com/brilator
  orcid: https://orcid.org/0000-0001-9021-3197

<!-- Source to slide(s) -->
<!-- ./../../../../img/25-ARCCommander-HandsOn.md -->


---

# ARCitect hands-on

<style scoped>section {background: none; background-color: white}</style>
<!-- _paginate: false -->

---

# ARCitect installation

Please install version **v0.0.10** of the ARCitect: https://github.com/nfdi4plants/ARCitect/releases/tag/v0.0.10

:fire: (released September 20th, 2023) :fire:

---

## Download the demo data <!-- fit -->

https://nfdi4plant.sharepoint.com/:f:/s/Teaching/Eik7k-oJiMREgZ24kto7sIYBGxHmmZlS_Kzf7psk-5w-xg?e=u0sADd

![bg right w:600](./../../../../img/demo-data-download.png)

---

# Sort Demo data in an ARC

![bg right width:400](./../../../../img/demo_data_screenshot.png)

![width:900](./../../../../img/ARC_fillWithData_experimental.png)

---

# Open ARCitect


1. Login to DataHUB (1)
   ![bg right:40% w:250](./../../../../img/ARCitect-help-Sidebar.drawio.svg)

---

# Initiate the ARC folder structure

![bg right:40% w:250](./../../../../img/ARCitect-help-Sidebar.drawio.svg)

1. Create a **New ARC** (2)
2. Select a location and name it **TalinumPhotosynthesis**

---

# Your ARC's name

<style scoped>section {font-size: 25px;}</style>

💡 By default, your ARC's name will be used
   - for the ARC folder on your machine
   - to create your ARC in the DataHUB at `https://git.nfdi4plants.org/<YourUserName>/<YourARC>` (see next steps)
   - as the identifier for your investigation

💡 Make sure that no ARC exists at  `https://git.nfdi4plants.org/<YourUserName>/<YourARC>`. Otherwise you will sync to that ARC.

💡Don't use spaces in ARC's name

![bg right:30% w:500](./../../../../img/ARCitect_TalinumPhotosynthesis.png)

---

# Add a description to your investigation

![w:800](./../../../../img/ARCitect_TalinumPhotosynthesis_InvestigationMetadata.png)

---

# Add a contributor


![bg right w:500](./../../../../img/ARCitect_TalinumPhotosynthesis_InvestigationPerson.png)

---

# Add a study

by clicking "Add Study" and entering an identifier for your study

Use **talinum_drought** as an identifier

![bg right w:500](./../../../../img/ARCitect_TalinumPhotosynthesis_Study.png)

---

# Study panel

In the study panel you can add

- general metadata,
- people, and
- publications
- data process information

![bg right w:500](./../../../../img/ARCitect_TalinumPhotosynthesis_StudyPanel.png)

---


# Add an assay

by clicking "Add Assay" and entering an identifier for your assay

Add two assays with **rnaseq** and **metabolomics** as an identifier
![bg right w:500](./../../../../img/ARCitect_TalinumPhotosynthesis_Assay.png)

---

# Link your assay to a study

You can either
- link your new assay to an existing study in your ARC or
- create a new one
  
Link your assays to your **talinum_drought** study


![bg right w:500](./../../../../img/ARCitect_TalinumPhotosynthesis_Assay2.png)

---

# Add information about your assay

In the assay panel you can

1. link or unlink the assay to studies, and
2. define the assay's
   - measurement type
   - technology type, and
   - technology platform.
3. add data process information

![bg right w:500](./../../../../img/ARCitect_TalinumPhotosynthesis_AssayPanel.png)

---

# Add protocols

You can either
- directly write a **new protocol** within the ARCitect or
- import an existing one from your computer

![w:800](./../../../../img/arcitect-ARCPanel-protocol.png)

---

# Add protocols and datasets

In the file tree you can
  - **add a dataset** and 
  - **protocols** associated to that dataset.

:bulb: **Add Dataset** allows to import data from any location on your computer into the ARC.

:warning: Depending on the file size, this may take a while. Test this with a small batch of files first.

<!-- Demo dataset cannot be added via add dataset. Only individual files can be added, not multiple folders -->

![bg right:40% w:400](./../../../../img/arcitect-ARCPanel-assay03.png)

---

# Sort Demo Data to your ARC

💡 protocols can directly be imported via ARCitect

💡 to add multiple datasets folders, they have to be added manually via file browser

---

# Login to the DataHUB

Click **Login** (1) in the sidebar to login to the DataHUB.

:bulb: This automatically opens your browser at the DataHUB (https://git.nfdi4plants.org) and asks you to login, if you are not already logged in. 

![bg right:40% w:250](./../../../../img/ARCitect-help-Sidebar.drawio.svg)

---

# Upload your local ARC to the DataHUB

From the sidebar, navigate to **Versions** (6)

![bg right:40% w:250](./../../../../img/ARCitect-help-Sidebar.drawio.svg)

---

# Versions

The versions panel allows you to
- store the local changes to your ARC in form of "commits",
- sync the changes to the DataHUB, and
- check the history of your ARC

![bg right w:650](./../../../../img/arcitect-VersionsPanel.png)

---

# Connection to the DataHUB

If you are logged in, the versions panel shows
- your DataHUB's *Full Name* and *eMail*
- the URL of the current ARC in the DataHUB `https://git.nfdi4plants.org/<YourUserName>/<YourARC>`

![bg right w:650](./../../../../img/arcitect-VersionsPanel.png)

---

# Check if your ARC is successfully uploaded

1. [sign in](https://auth.nfdi4plants.org/realms/dataplant/login-actions/registration?client_id=account&tab_id=4bQkU161waI) to the DataHUB 
2. Check your projects

---

# Your ARC is ready

<style scoped>

section p br {
   display: block;
   margin-top: 20px;
   content: "";
}
</style>

👩‍💻 Initiated an ARC
<br>
📂 Structured and ...  
<br>
<img align="left" height=35px src='https://raw.githubusercontent.com/nfdi4plants/Branding/master/icons/Swate/Excel/Core/swate_c_40x40.png'/> ... annotated experimental data
<br>
🌐 Shared with collaborators

![bg right width:400](./../../../../img/demo_arc_screenshot.png)

---

---

# Received two emails from "GitLab" about a failed pipeline? <!-- fit -->

![w:600](./../../../../img/cqc-error-email.png)

:fire: Don't worry :smile:

---

## Pipeline Failed

![bg right w:700](./../../../../img/cqc-error-badges.png)

- a "continuous quality control" (CQC) pipeline validates your ARC
- This fails if one of the following metadata items is missing:

    ```bash
    Investigation Identifier
    Investigation Title
    Investigation Description
    Investigation Person Last Name
    Investigation Person First Name
    Investigation Person Email
    Investigation Person Affiliation
    ```  

---

## Pipeline Failed

If the pipeline has failed once, it is disabled by default

![bg right w:500](./../../../../img/cqc-error-email2.png)

---

## Reactivate the CQC pipeline

<style scoped>
section {font-size: 22px;}
</style>

To reactivate it and let the DataHUB validate your ARC again:
  
  1. navigate to CI/CD setting `<arc-url>/-/settings/ci_cd`
  2. expand "Auto DevOps"
  3. check box "Default to Auto DevOps pipeline"
  4. Save changes

![bg right:60% w:600](./../../../../img/cqc-activate-autodevops.png)

---

---

# Contributors

Slides presented here include contributions by

- name: Dominik Brilhaus
  github: https://github.com/brilator
  orcid: https://orcid.org/0000-0001-9021-3197
- name: Cristina Martins Rodrigues
  github: https://github.com/CMR248
  orcid: https://orcid.org/0000-0002-4849-1537
- name: Sabrina Zander
  github: https://github.com/SabrinaZander
  orcid: https://orcid.org/0009-0000-4569-6126

<!-- Source to slide(s) -->
<!-- ./../../../../img/26-ARCitect-HandsOn.md -->


---

# Data Storage and Versioning

---

# Data stores

![w:900](./../../../../img/data-stores.drawio.svg)

---

# Backup vs. Archive

| <br>         | Backup              | Archive                       |
|--------------|---------------------|-------------------------------|
| Storage type | Short-, mid-term    | Long-term                     |
| Purpose      | Disaster recovery   | Long-term storage, compliance |
| Reason       | Duplication         | Migration                     |
| Usage        | Work in progress    | Cold, Unused data             |
| Changes      | Short-term updates  | No updates                    |
| Trend        | Cyclic, Replacement | Growing                       |
| Latency      | Short/Costly        | High/Cheaper                  |

---

# 3-2-1 backup rule

![w:800](./../../../../img/3-2-1-backup-rule.drawio.svg)

---

# Version control and track changes

It’s good practice to document:

- What was changed?
- Who is responsible?
- When did it happen?
- Why the changes?

---

# Types of Version Control

- by file name (_v1, _v2)
- cloud services
  - dropbox, icloud, gdrive
- distributed version control system
  - e.g. Git

---

# Which files need to be "versioned"? :pencil: 

- paper manuscript (.docx)
- single-cell RNASeq reads (.fastq.gz)
- spread sheet with photometer measurements (.xlsx)
- calendar invitation (.ical)
- photo of SDS-PAGE (.jpeg)
- excel workbook with calculations (.xlsx)
- presentation for a conference (.pdf)
- data analysis script (.py)

<!--

## No versioning

- "Raw data" or "original data" > backup and do not touch
- do not calculate anything in measurement excel workbooks

## Versioning

anything that is (frequently) updated
- manuscripts
- calculations
- workflows
- scripts

## Does not matter

things you use and ignore
- calendar invitations

-->

---

# Concept of Git and git-based platforms

---

# Cloud Services

![bg right:50% w:800](./../../../../img/DataSharing_Cloud_img6.png)

<span style="color:#B4CE82">✓ Documents</span>  
<span style="color:#B4CE82">✓ Small data</span>  
<span style="color:#B4CE82">✓ Presentations</span>  

<span style="color:#c21f3a">X  Code</span>  
<span style="color:#c21f3a">X  Data analytical projects</span>  
<span style="color:#c21f3a">X  Big (“raw”) data</span>  

---

# Git and git platforms

![bg right:50% w:800](./../../../../img/DataSharing_git_img1.png)

<span style="color:#F9CD69">∼ Documents</span>
<span style="color:#B4CE82">✓ Small data</span>  
<span style="color:#F9CD69">∼ Presentations</span>

<span style="color:#B4CE82">✓✓ Code</span>
<span style="color:#B4CE82">✓✓ Data analytical projects</span>
<span style="color:#F9CD69">∼ Big (“raw”) data</span>

---

# Why git? ≈> Why code?

- Save time
- Avoid doing repetitive tasks “by hand”
- Reuse scripts, analyses, pipelines
- Reproduce results

---

# A simple example: RNASeq project

![w:900](./../../../../img/git_RNASeq_Example_img1.png)

---

# A simple example: RNASeq project

![w:900](./../../../../img/git_RNASeq_Example_img2.png)

---

# A simple example: RNASeq project

![w:900](./../../../../img/git_RNASeq_Example_img3.png)

---

# A simple example: RNASeq project

![w:900](./../../../../img/git_RNASeq_Example_img4.png)

---

# A simple example: RNASeq project

![w:900](./../../../../img/git_RNASeq_Example_img5.png)

---

# Take snapshots of your code work…

(... as long as it works)

![w:900](./../../../../img/git_RNASeq_Example_img6.png)

---

# Take snapshots of your code work…

(... as long as it works)

![w:900](./../../../../img/git_RNASeq_Example_img7.png)

---

# Scenario 1: More data

![w:900](./../../../../img/git_RNASeq_Example_img8.png)

---

# Scenario 1: More data

![w:900](./../../../../img/git_RNASeq_Example_img9.png)

---

# Scenario 1: More data

![w:900](./../../../../img/git_RNASeq_Example_img10.png)

---

# Let git track changes and keep things clean

![w:900](./../../../../img/git_RNASeq_Example_img11.png)

---

# Scenario 2: Pipeline breaks

![w:900](./../../../../img/git_RNASeq_Example_img12.png)

---

# Revert to snapshot

![w:900](./../../../../img/git_RNASeq_Example_img13.png)

---

# Scenario 3: New project, same type of data and analysis

![w:900](./../../../../img/git_RNASeq_Example_img14.png)

---

# Scenario 3: New project, same type of data and analysis

![w:900](./../../../../img/git_RNASeq_Example_img15.png)

---

# Re-use code

![w:900](./../../../../img/git_RNASeq_ReuseCode_img1.png)

---

# Re-use code

![w:900](./../../../../img/git_RNASeq_ReuseCode_img2.png)

---

# Re-use code – People have done this

![w:900](./../../../../img/git_RNASeq_ReuseCode_img3.png)

---

# Re-use code – People have done this

![w:900](./../../../../img/git_RNASeq_ReuseCode_img4.png)

---

# Re-use code – Link and contribute

![w:900](./../../../../img/git_RNASeq_ReuseCode_img5.png)

---

# Git: summary

- Version control system
- Git “repository” = a central data package (directory)
- Allows to track changes to any file in the repository
  - **What** was changed
  - **When** was it changed
  - By **whom** was it changed
  - **Why** was it changed?

---

# GitHub and GitLab

- A well-documented cloud environment
- Active syncing
- Not automatically synced
- Non-automated version control
- You have the control what changes to track and what to sync
- Time machine to go back to older versions

---

# GitHub and Gitlab team projects

Simplifies concurrent work & merging changes

- Online service to host our projects
- Share code with other developers
- Others can download our projects, work on and contribute to them
- They can upload their changes and merge them with the main project

---

# Cloud vs. Git

![w:1000](./../../../../img/git_cloud_comparison.png)

--- 

--- 

# Contributors

Slides presented here include contributions by

- name: Dominik Brilhaus
  github: https://github.com/brilator
  orcid: https://orcid.org/0000-0001-9021-3197
- name: Hajira Jabeen
  github: https://github.com/HajiraJabeen
  orcid: https://orcid.org/0000-0003-1476-2121
<!-- Source to slide(s) -->
<!-- ./../../../../img/30-StorageVersioning.md -->


---

# DataPLANT DataHUB

---

# ARC builds on standards + Git

![w:900](./../../../../img/ARC_BuildsOnStandards2.png)

---

# The DataPLANT DataHUB &ndash; a GitLab ***Plus***

![](./../../../../img/DataHUB-GitLab.drawio.png)

---

![bg cover](./../../../../img/DataPLANT_BigPicture_seq2.png)

---

![bg cover](./../../../../img/DataPLANT_BigPicture_seq3.png)

---

![bg cover](./../../../../img/DataPLANT_BigPicture_seq4.png)

---

![bg cover](./../../../../img/DataPLANT_BigPicture_seq5.png)

---

![bg cover](./../../../../img/DataPLANT_BigPicture_seq6.png)

---

![bg cover](./../../../../img/DataPLANT_BigPicture_seq7.png)

---

![bg cover](./../../../../img/DataPLANT_BigPicture_seq8.png)

---

# **Mutable** data life cycle

![w:700](./../../../../img/tpj16474-fig-0006-m.jpg)

<!-- 

- Invite other (demo) account
- add notes from there
-->

<span class="footer-reference"> Weil, H.L., Schneider, K., et al. (2023), PLANTdataHUB: a collaborative platform for continuous FAIR data sharing in plant research. Plant J. https://doi.org/10.1111/tpj.16474 </span>

---

# Project management

![w:800](./../../../../img/tpj16474-fig-0007-m.jpg)

<span class="footer-reference"> Weil, H.L., Schneider, K., et al. (2023), PLANTdataHUB: a collaborative platform for continuous FAIR data sharing in plant research. Plant J. https://doi.org/10.1111/tpj.16474 </span>

---

---

# Contributors

Slides presented here include contributions by

- name: Dominik Brilhaus
  github: https://github.com/brilator
  orcid: https://orcid.org/0000-0001-9021-3197
- name: Cristina Martins Rodrigues
  github: https://github.com/CMR248
  orcid: https://orcid.org/0000-0002-4849-1537

<!-- Source to slide(s) -->
<!-- ./../../../../img/42-DataHUB.md -->


---

# DataHub Hands-On

---

# Navigation Bar

![](./../../../../img/datahub-navbar.drawio.svg)

1. navigate directly to the [projects panel](./../../../../img/../../../../../img/../../../../../img/../DataHUB-Manual/datahub-Manual/datahub-projectsPanel.html) via the icon in the top-left (1)
2. open the [hamburger Menu](#hamburger-menu) (2)
3. use the search field (3) to find ARCs, users and groups
4. open the [avatar Menu](#avatar-menu) (4)

---

# Hamburger Menu

1. From the hamburger menu (1) you can
2. navigate to the [projects](./../../../../img/../../../../../img/DataHUB-Manual/datahub-projectsPanel.html) (2)
3. or [groups](datahub-groupsPanel.html) (3) panels

![bg right w:500](./../../../../img/datahub-hamburgerMenu.drawio.svg)

---

# Avatar Menu

1. In the avatar menu (1) you can
2. find your profile name and user name (2), 
3. navigate to the [user settings](./../../../../img/../../../../../img/DataHUB-Manual/datahub-userSettings.html) (3) 
4. or sign out (4) of the DataHUB.

![bg right w:500](./../../../../img/datahub-avatarMenu.drawio.svg)

---

# Projects Panel

![](./../../../../img/datahub-projectsPanel.drawio.svg)

1. Choose a tab (1) to see only your ARCs, or explore other publicly available ARCs. 
2. The main panel (2) lists all ARCs
3. Here you can also see, the visibility level (3), and 
4. your permission or role (4) for the listed ARC. 
5. You can create a **New Project** in the top-right corner (5).

---

# ARC Panel

The ARC Panel is the main working area for your ARC.

![w:1000](./../../../../img/datahub-ARC-overview.drawio.svg)

---

# ARC Panel &ndash; sidebar <!-- fit -->

<style scoped> section {font-size: 23px;} </style>

![bg right w:600](./../../../../img/datahub-ARC-overview.drawio.svg)

1. access the project information (1), e.g. invite members to the ARC
2. follow the progress of your ARC repository (2),
3. organize tasks in issue lists and boards (3),
4. take notes in a wiki to your ARC (4),
5. adapt the [settings (5) of the ARC](datahub-ARCSettings.html).

---

# ARC Panel &ndash; main panel <!-- fit -->

<style scoped> section {font-size: 23px;} </style>

![bg right w:600](./../../../../img/datahub-ARC-overview.drawio.svg)

6. see the ARC's name and visibility level (6),
7. follow the ARC's commit history (7),
8. see files contained in your ARC just like on your computer (8),
9. add new files or directories (9), and
10. download or clone your ARC (10).

---

# Collaborate and share

![w:650](./../../../../img/ARC_DataSharing_Experts02_img1.png)

---

# Invite collaborators

* Unless changed, your ARC is set to private by default.
* To collaborate, you can invite lab colleagues or project partners to your ARC by following the steps on the subsequent slides. 
* To get started [sign in](https://auth.nfdi4plants.org/realms/dataplant/login-actions/registration?client_id=account&tab_id=4bQkU161waI) to the DataHUB and open the ARC you want to share.

---

1. Click on **Project Information** in the left navigation panel

![fit w:1050](./../../../../img/datahub_members_seq2.png)

---

2. Click on **Members**

![fit w:1050](./../../../../img/datahub_members_seq3.png)

---

3. Click on **Invite members**

![fit w:1050](./../../../../img/datahub_members_seq4.png)

---

4. Search for potential collaborators

![fit w:1050](./../../../../img/datahub_members_seq5.png)

---

5. Select a role

![fit w:1050](./../../../../img/datahub_members_seq6.png)

---

# Choosing the proper role

<style scoped> section{font-size: 22px;}</style>

<u>Guests</u>
Have the least rights. They will not be able to see the content of your ARC (only the wiki page).

<u>Reporters</u>
Have **read access** to your ARC. This is recommended for people you ask for consultancy.

<u>Developers</u>
The choice for most people you want to invite to your ARC. Developers have **read and write access**, but cannot maintain the project on the DataHUB, e.g. inviting others.

<u>Maintainers</u> 
Gives the person the same rights as you have (except of removing you from your own project). This is recommended for inviting PIs or group leaders allowing them to add their group members for data upload or analysis to the project as well.

*A detailed list of all permissions for the individual roles can be found [here](https://docs.gitlab.com/ee/user/permissions.html)*

---

# <div align="center">Congratulations!</div>
<div align="center">You have just shared your ARC with a collaborator.</div>

<style scoped>

section p img {
width: 1000px;
height: 300px;
object-fit: cover;
object-position: 100% 45%;
/* display: block; */;
}
</style>

![](./../../../../img/ARC_Sharing_img1.png)

---


# Version control

- Commit history

---

# Project Management

- Issues

---

# ARCs come with their own wiki space

- directly associated to your ARC
- same access rights as your ARC
- share meeting minutes or ideas with collaboration partners
- keep ARC clean of files that are not considered "research data"

![bg right w:600](./../../../../img/datahub-wiki.png)

---

---

# Contributors

Slides presented here include contributions by

- name: Dominik Brilhaus
  github: https://github.com/brilator
  orcid: https://orcid.org/0000-0001-9021-3197
- name: Cristina Martins Rodrigues
  github: https://github.com/CMR248
  orcid: https://orcid.org/0000-0002-4849-1537

<!-- Source to slide(s) -->
<!-- ./../../../../img/43-DataHUB-HandsOn.md -->


---

# :pencil: Structure your project as an ARC :pencil:

1. Follow the slides to build an ARC for your project
1. Go back to the shared folder prepared before class
1. Add data from your project to your ARC
<!-- Source to slide(s) -->
<!-- ./../../../../img/45-exercise_FAIRProject_ARC.md -->


---

# Q&A and Wrap-up Day1

---

# Preparation for next day

- Please try to prepare your own ARC
- Please install SWATE

---

# Resources

### <img align="left" style="height:35px" src='https://raw.githubusercontent.com/nfdi4plants/Branding/7e7d442aafeaa767b9c14a63a16e459dadcbdaaf/logos/DataPLANT/DataPLANT_logo_minimal_rounded_bg_darkblue.svg'/> DataPLANT (nfdi4plants)

Website: <a href="https://nfdi4plants.org/" target="_blank">https://nfdi4plants.org/</a>
Knowledge Base: <a href="https://nfdi4plants.org/nfdi4plants.knowledgebase/" target="_blank">https://nfdi4plants.org/nfdi4plants.knowledgebase/</a>
DataHUB: <a href="https://git.nfdi4plants.org" target="_blank">https://git.nfdi4plants.org</a>


GitHub: <a href="https://github.com/nfdi4plants" target="_blank">https://github.com/nfdi4plants</a>
HelpDesk: <a href="https://helpdesk.nfdi4plants.org" target="_blank">https://helpdesk.nfdi4plants.org</a>

:bulb: You can help us by raising issues, bugs, ideas...

---

# Overview of Institutional services at UoC and HHU

<style scoped>
section {font-size: 25px;}
</style>


### UoC

- C3RDM: https://fdm.uni-koeln.de/en/home
- Data storage and sharing: https://rrzk.uni-koeln.de/daten-speichern-teilen
- HPC: https://rrzk.uni-koeln.de/hpc-projekte 
- service overview: https://fdm.uni-koeln.de/en/rdm-services/service-catalogue

### HHU

- RDM Competence Center: https://www.fdm.hhu.de
- Support for research including HPC: https://www.zim.hhu.de/servicekatalog/forschungsunterstuetzung 
- Processing & storing data: https://www.zim.hhu.de/servicekatalog/rechnen-und-speichern

---

# Five-Finger-Feedback

<style scoped>
section {
  text-align: center;
  /* background: #F9CD69; */
}
</style>

![width:800px](./../../../../img/feedback01_FiveFinger.drawio.svg)

<!-- 
- Invite participants to give feedback
- If feasible, collect transparently on a board or in a markdown pad, etc. 

# Five-Finger-Feedback

...was too short | I'm happy with... | I did not like at all ...| This idea or advice was good: ... | I really liked ...  
---|---|---|---|---
... | ... | ... | ... | ...

-->

<!-- Source to slide(s) -->
<!-- ./../../../../img/49-WrapUpDay1.md -->


---

# Good Data Management Practices

<!--  _color: white; -->
<!-- _paginate: false -->
<style scoped>section {background: none; background-color: white;}</style>

*part of M4468 &ndash; Plant developmental genetics, evolution<br>and biostatistics in the CEPLAS research program*
<br>
November 10<sup>th</sup>, 2023
Dominik Brilhaus, CEPLAS Data Science

![bg fit](./../../../../img/background_title_ceplas.drawio.svg)

---

# House-keeping

Pad: https://pad.hhu.de/oI-NjeUtSHSMzk5huWRkJw

---

# Tentative agenda

## Day 2

Time | Topics
-------- | --------
09:30 - 10:30 | Feedback session
10:30 - 10:45 | *Short break*
10:45 - 12:30 | ISA, Metadata and Swate
12:30 - 13:30 | *Lunch*
13:30 - 15:00 | Hands-on Swate
15:00 - 15:30 | Data Publication
15:30 - 16:00 | Wrap-up

---

# Points to discuss from and since day 1

<!-- Source to slide(s) -->
<!-- ./../../../../img/50-WelcomeIntroDay2.md -->


---

# Metadata and ISA

---

# What is <br> **metadata**?

<style scoped>
section {
  text-align: center;
  background: #F9CD69;
}
section::after {
  display: none;
}
footer {
  display: none;
}
</style>

<!-- 
Exercise: Association map

Online: Let participants annotate (via video conference tool)
Presence: Draw map on (white) board

-->

---

# Viola's PhD Project

Exercise: Take 5 minutes to note down the metadata

<style scoped>
section {
  text-align: justify;  
}
</style>

Viola investigates the effect of the plant circadian clock on sugar metabolism in *W. mirabilis*. For her PhD project, which is part of an EU-funded consortium in Prof. Beetroot's lab, she acquires seeds from a South-African botanical society. Viola grows the plants under different light regimes, harvests leaves from a two-day time series experiment, extracts polar metabolites as well as RNA and submits the samples to nearby core facilities for metabolomics and transcriptomics measurements, respectively. After a few weeks of iterative consultation with the facilities' heads as well as technicians and computational biologists involved, Viola receives back a wealth of raw and processed data. From the data she produces figures and wraps everything up to publish the results in the Journal of Wonderful Plant Sciences.

---

# Metadata everywhere

<style scoped>
section {
  text-align: justify;  
}
</style>

`Viola` investigates the `effect of the plant circadian clock` on `sugar metabolism` in *`W. mirabilis`*. For her `PhD project`, which is part of an `EU-funded consortium` in `Prof. Beetroot's lab`, she acquires `seeds` from a `South-African botanical society`. Viola `grows the plants` under `different light regimes`, harvests `leaves` from a `two-day time series experiment`, extracts `polar metabolites` as well as `RNA` and submits the samples to nearby `core facilities for metabolomics and transcriptomics` measurements, respectively. `After a few weeks` of iterative consultation with the facilities' heads as well as `technicians` and `computational biologists` involved, Viola receives back a wealth of `raw and processed data`. From the data she `produces figures` and wraps everything up to `publish the results in the Journal of Wonderful Plant Sciences`.

---

# Project metadata

<style scoped>
.columns {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 1rem;
}
ul {
    margin: 5; padding: 0;
}
</style>

<div class="columns">
<div class="columns-left">

### project design

- researcher
- institute and project
- biological context
- research question
- purpose of data collection
- ...

</div>
<div class="columns-right">

### experimental processes

- origin and nature of the biological material
- lab protocols
- instrument model
- ...

</div>

<div class="columns-right">

### data-analytical processes

- algorithms
- tools
- software versions and dependencies employed
- ...

</div>
</div>

---

# Other types of metadata

<style scoped>
.columns {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 1rem;
}
ul {
    margin: 5; padding: 0;
}
</style>

<div class="columns">
<div class="columns-left">

### bibliographic

- Title
- Publication date and title
- Description
- Author
- Contacts
- Keywords
- ...

</div>
<div class="columns-right">

### legal or administrative

- data origin, ownership, rovenance,
- licensing
- ethical aspects
- ...

</div>

<div class="columns-right">

### technical

- expected data volume
- storage location
- file formats
- ...

</div>
</div>

---

# Metadata from a FAIR perspective

<style scoped>
.columns {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 4rem;
}

</style>

<div class="columns">
<div class="columns-left">

**Findable**

- metadata names the content of the data
- basis for search engines
- makes it categorizable for people and machines

**Accessible**

- information about origin
- location of storage
- access rights

</div>

<div class="columns-right">

**Interoperable**

- metadata identifies software and file formats
- required conversions between file formats

**Reusable**

- obtain and reuse research data according to clear rules described in licenses

</div>
</div>

---

# Metadata "Standards"

Examples from [Minimum Information for Biological and Biomedical Investigations (MIBBI)](https://fairsharing.org/3518):

- MIAPPE | Minimum Information About a Plant Phenotyping Experiment <https://www.miappe.org>
- MIAME | Minimum Information About a Microarray Experiment <https://www.fged.org/projects/miame/>
- MIAPE | Minimum Information About a Proteomics Experiment <https://www.psidev.info/miape>
- MINSEQE | Minimum Information about a high-throughput SEQuencing Experiment <https://www.fged.org/projects/minseqe>

:bulb: Check out <https://fairsharing.org/> for more examples

---

# Metadata standards ≈ Checklists

- Determine (minimal) required information
- Usually **do not** determine the format (i.e. shape or file type)

---

# A small Interactive detour

-> favorite Movie

<!-- 

- let participant name a movie
- how do you find out the actors, director, release year, etc.? 
- => google.com
- google movie - see knowledge graph to the right
  - how does google know all that?!
- ===> schema.org

 -->

---

# How does google "know"?!

![w:800](./../../../../img/googlecom-screenshot-kg.png)

---

# Schemas and machine-readability

---

## Structured data and the internet

Schema.org

- create, maintain, and promote schemas for structured data on the Internet, on web pages, in email messages, ...
- Structured data can be used to ***mark up*** all kinds of items from products to events to recipes
- Communicate with search engines (-> SEO, search engine optimization)
- Enhance findability from search engine results
- Provide context to an ambigous webpage
- Metadata interoperability and standardization across all website using schema.org

--- 

## Structured data and the internet: Schema.org

<style scoped>
code {
    display: inline-block;
    width: 700px;
    font-size: 18px;
}
</style>

<https://schema.org/Person>

```json
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Person",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Seattle",
    "addressRegion": "WA",
    "postalCode": "98052",
    "streetAddress": "20341 Whitworth Institute 405 N. Whitworth"
  },
  "colleague": [
    "http://www.xyz.edu/students/alicejones.html",
    "http://www.xyz.edu/students/bobsmith.html"
  ],
  "email": "mailto:jane-doe@xyz.edu",
  "image": "janedoe.jpg",
  "jobTitle": "Professor",
  "name": "Jane Doe",
  "telephone": "(425) 123-4567",
  "url": "http://www.janedoe.com"
}
</script>
```

---

## JSON-LD

<style scoped>
code {
    display: inline-block;
    width: 700px;
}
</style>

JSON-LD = JavaScript Object Notation for Linked Data

```json
<script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "SportsTeam",
    "name": "San Francisco 49ers",
    "member": {
      "@type": "OrganizationRole",
      "member": {
        "@type": "Person",
        "name": "Joe Montana"
      },
      "startDate": "1979",
      "endDate": "1992",
      "roleName": "Quarterback"
    }
  }
</script>
```

---

## RDFa

RDFa = Resource Description Framework in Attributes

```
<div vocab="http://schema.org/" typeof="SportsTeam">
  <span property="name">San Francisco 49ers</span>
  <div property="member" typeof="OrganizationRole">
    <div property="member" typeof="http://schema.org/Person">
      <span property="name">Joe Montana</span>
    </div>
    <span property="startDate">1979</span>
    <span property="endDate">1992</span>
    <span property="roleName">Quarterback</span>
  </div>
</div>
```

---

# Standards

### Dublin Core

<https://www.dublincore.org/schemas/>

### DataCite Schema

- Schema: <http://schema.datacite.org/meta/kernel-4.3/metadata.xsd>
- Full Example: <https://schema.datacite.org/meta/kernel-4.3/example/datacite-example-full-v4.xml>

---

## DataCite Schema: Simple Example

<style scoped>
code {
    /*display: inline-block;*/
    font-size: 12px;
}
</style>

```xml
...
  <identifier identifierType="DOI">10.5072/D3P26Q35R-Test</identifier>
  <creators>
    <creator>
      <creatorName nameType="Personal">Fosmire, Michael</creatorName>
      <givenName>Michael</givenName>
      <familyName>Fosmire</familyName>
    </creator>
    <creator>
      <creatorName nameType="Personal">Wertz, Ruth</creatorName>
      <givenName>Ruth</givenName>
      <familyName>Wertz</familyName>
    </creator>
    <creator>
      <creatorName nameType="Personal">Purzer, Senay</creatorName>
      <givenName>Senay</givenName>
      <familyName>Purzer</familyName>
    </creator>
  </creators>
  <titles>
    <title xml:lang="en">Critical Engineering Literacy Test (CELT)</title>
  </titles>
  <publisher xml:lang="en">Purdue University Research Repository (PURR)</publisher>
  <publicationYear>2013</publicationYear>
  <subjects>
    <subject xml:lang="en">Assessment</subject>
    <subject xml:lang="en">Information Literacy</subject>
    <subject xml:lang="en">Engineering</subject>
    <subject xml:lang="en">Undergraduate Students</subject>
    <subject xml:lang="en">CELT</subject>
    <subject xml:lang="en">Purdue University</subject>
  </subjects>
  <language>en</language>
  <resourceType resourceTypeGeneral="Dataset">Dataset</resourceType>
...
```

<https://schema.datacite.org/meta/kernel-4.3/example/datacite-example-dataset-v4.xml>

---

# Ontologies

---

# Ontology

(Sometimes also referred to "semantic model")

An ontology combines features of

- a **dictionary**,
- a **taxonomy**, and
- a **thesaurus**

---

## Dictionary

Alphabetically lists terms and their definitions
<br>

**Pizza**: *"a dish made typically of flattened bread dough spread with a savory mixture usually including tomatoes and cheese and often other toppings and baked"*

---

## Taxonomy

Hierarchy or classification

![bg right:60% w:780](./../../../../img/Ontologies_pizzaAnalogy_seq1.png)

---

## Thesaurus

Dictionary of synonyms and relations
<br>

**Pizza** ≈ Lahmacun ≈ Focaccia ≈ Flammkuchen

---

# Ontology

- Structures a set of **concepts** in a particular area and the relations between them in a **graph-like manner**
- Can be used in disambiguation, defining hierarchies, a standard to define terms
- Define a common vocabulary of concepts and their relationships to **model** a particular domain while making it **machine understandable**

---

# The semantic triple

![w:1000](./../../../../img/Ontologies_pizzaAnalogy_seq2.png)

---

# Modeling a pizza menu

![w:1000](./../../../../img/Ontologies_pizzaAnalogy_seq3.png)

---

# Modeling a pizza menu

![w:1000](./../../../../img/Ontologies_pizzaAnalogy_seq4.png)

---

# Modeling a pizza menu

![w:1000](./../../../../img/Ontologies_pizzaAnalogy_seq5.png)

---

# Predicates have two directions

![w:1000](./../../../../img/Ontologies_pizzaAnalogy_seq6.png)

---

# Looking at the menu from a different perspective

An object of one triplet can be the subject to another

![w:1000](./../../../../img/Ontologies_pizzaAnalogy_seq7.png)

---

# (Towards) a knowledge graph

![w:1020](./../../../../img/Ontologies_pizzaAnalogy_seq8.png)

---

# Searching the menu

An ontology can be queried:

- *"name all pizzas with topping mushrooms"*

![bg right w:1020](./../../../../img/Ontologies_pizzaAnalogy_seq9.png)

<!-- 
TODO: 
- This is actually not a proper ontology(!), but rather a knowledge graph (= ontology + data)

-->

---

# The Pizza Ontology

- Example from protege: <https://protege.stanford.edu/ontologies/pizza/pizza.owl>
- Visualize via WebVOWL <http://vowl.visualdataweb.org/webvowl.html>

---

# Example ontologies

### EDAM ontology

- Description: <http://edamontology.org/page>
- Browser: <https://edamontology.github.io/edam-browser>

### PECO ontology

- Human-readble: <https://www.ebi.ac.uk/ols/ontologies/peco>
- Raw (OWL): <http://purl.obolibrary.org/obo/peco.owl>

> Explore more examples
>
> - <https://www.ebi.ac.uk/ols/>
> - <https://bioportal.bioontology.org>

<!-- 
LIVE-Demo 
- Search an "interesting" term from PECO in browser (EBI OLS)
  - Example: 
    - plant exposure
       abiotic plant exposure
          physical plant exposure
            water environment exposure
              drought environment exposure
- Show the graph view (and expand it interactively)
- Mention that terms (subjects, objects) and properties (predicates) have "URIs", "PIDs"
- Show that terms can have alternative / external IDs and link to "outdated" ontologies

-->

---

# ARC builds on ISA

![w:900](./../../../../img/ISAmodel_ARC01_img01.svg)

<https://isa-tools.org/format/specification.html>

---

# ARC builds on ISA

![w:1100](./../../../../img/ISAmodel_ARC01_img02.svg)

---

# isa.<>.xlsx files within ARCs

![w:1000](./../../../../img/ISAmodel_ARC01_img03.svg)

---

# Study and assay files are registered in the investigation file <!-- fit -->

![w:950](./../../../../img/ISAmodel_ARC01_img04.svg)

---

# The output of a study or assay file can function as input for a new isa.assay.xlsx

Output building blocks:

- Sample Name
- Raw Data File
- Derived Data File

![bg right w:600](./../../../../img/ISAmodel_ARC01_img05.svg)

---

#

![bg w:1050](./../../../../img/ISAmodel_ARC01_img6.svg)

---

# Swate

---

# Annotation by flattening the knowledge graph

![w:800](./../../../../img/Swate_ParentChildTerm.svg)

- Low-friction metadata annotation
- Familiar spreadsheet, row/column-based environment

---

# Annotation principle

<!-- <style scoped>
section p img{
  /* padding-left: 230px */
}  
</style> -->

![w:650](./../../../../img/Swate_ParentChildTerm2.svg)

- Low-friction metadata annotation
- Familiar spreadsheet, row/column-based environment

---

# Adding new building blocks (columns)

![w:750](./../../../../img/Swate_NewParameter.svg)

- Swate can be used for the annotation of **isa.study.xlsx and isa.assay.xlsx** files

---

# Annotation Building Block types <!--fit-->

<style scoped>

section{
    font-size: 25px
}

</style>

![bg right w:700](./../../../../img/Swate_Overview.svg)

- Source Name (Input)
- Protocol Columns
  - Protocol Type, Protocol Ref
- Characteristic
- Parameter
- Factor
- Component
- Output Columns
  - Sample Name, Raw Data File, Derived Data File

Let's take a detour on [Annotation Principles](https://nfdi4plants.org/nfdi4plants.knowledgebase/docs/guides/isa_AnnotationPrinciples.html) | [slides](https://nfdi4plants.org/nfdi4plants.knowledgebase/docs/teaching-materials/units/AnnotationPrinciples/isa_AnnotationPrinciples-slides.html)

---

# Ontology term search

<style scoped>
h1{
  text-align: left
}
section {
  text-align: center;
}
</style>

![w:750](./../../../../img/Swate_OntologyTermSearch.svg)

Enable **related term directed search** to directly fill cells with child terms

---

# Fill your table with ontology terms

![w:800](./../../../../img/Swate_OntologyTermSearch2.svg)

---

# Hierarchical combination of ontologies

![w:800](./../../../../img/Swate_OntologyCombination.svg)

<!-- combination of ISA (Characteristics, Parameter, Factor) and a biological or technological ontology (e.g. temperature, strain, instrument model) gives the flexibility to display an ontology term, e.g. temperature, as a regular process parameter or as the factor your study is based on (Parameter \[temperature\] or Factor \[temperature\]). -->

---

# Swate templates

---

# Checklists and Templates

![w:800px](./../../../../img/swate_TemplatesChecklists.svg)

Metadata standards or repository requirements can be represented as templates

<style scoped>
h1{
  text-align: left
}
section {
  text-align: center;
}
</style>

---

# Realization of lab-specific metadata templates

![w:850px](./../../../../img/SWATE_metadataTemplates.png)

Facilities can define their most common workflows as templates

<style scoped>
h1{
  text-align: left
}
section {
  text-align: center;
}
</style>

---

# Directly import templates via Swate

- DataPLANT curated
- Community templates

![bg right w:450](./../../../../img/Swate_Templates.svg)

---

---

# Contributors

Slides presented here include contributions by

- name: Dominik Brilhaus
  github: https://github.com/brilator
  orcid: https://orcid.org/0000-0001-9021-3197
- name: Martin Kuhl
  github: https://github.com/Martin-Kuhl
  orcid: https://orcid.org/0000-0002-8493-1077
  
<!-- Source to slide(s) -->
<!-- ./../../../../img/60-MetadataISA.md -->


---

# Swate hands-on

---

# Goals

- Get familiar with ISA metadata and Swate
- Annotate data in your ARC

---

## Check Swate installation

:ballot_box_with_check: Make sure [Swate is installed](./../../../../img/../../../../../img/SwateManual/Docs01-Installing-Swate.html):

1. Open Excel (online or Desktop)
2. Go to the `Insert` tab: Click the arrow next to "My Add-ins". There you should be able to select Swate.
3. Go to the `Data` tab: you should see the Swate (Core) add-in.

:bulb: Alternatively, you can use [Swate standalone](https://swate-alpha.nfdi4plants.org)  
(:warning: this is however *work in progress* and likely to change)

---

## Have a simple text editor ready

- Windows Notepad
- MacOS TextEdit

Recommended text editor with code highlighting, git support, terminal, etc: <a href="https://code.visualstudio.com/" target="_blank">Visual Studio Code</a>

---

## Download the demo data

![bg right:40% w:250](./../../../../img/ARCitect-help-Sidebar.drawio.svg)

1. Open the ARCitect
2. Login (1) to your DataHUB account
3. Navigate to **Download ARC** (4)

---

## Download the demo data

4. Search for **Talinum-CAM-Photosynthesis**
5. Click the download button, select a location and open the ARC.

![w:700](./../../../../img/arcitect-download-TalinumARC.png)

:bulb: This is basically the ARC we created last session.

---

## Where we left off last time

👩‍💻 Initiated an ARC
📂 Structured and ...  
🌐 Shared with collaborators

<br>

**Today** we want to

<img align="left" height=35px src='https://raw.githubusercontent.com/nfdi4plants/Branding/master/icons/Swate/Excel/Core/swate_c_40x40.png'/> ... **annotate the experimental data**

![bg right:40% width:400](./../../../../img/arcitect-talinum-demo-ARC.png)

---

# Swate hands-on with demo data

---

## Swate Overview

![width:1000](./../../../../img/Swate_Overview.png)

---

## Let's annotate the plant samples first

1. Navigate to the demo ARC. 
2. Open the lab notes `studies/talinum_drought/protocols/plant_material.txt` in a text editor. 
3. Open the empty `studies/talinum_drought/isa.study.xlsx` workbook in Excel.


---

## Create an annotation table

<br>

<style scoped>
.columns {
    /* grid-template-columns: repeat(2, minmax(0, 1fr)); */
    grid-template-columns: 500px 500px;
    gap: 30px;
    display: flex;
    justify-content: center;
}
</style>

<div class="columns">
<div class="columns-left">

Create a Swate annotation table via the <kbd>create annotation table</kbd> button in the yellow pop-up box *OR* click the <kbd>Create Annotation Table</kbd> quick access button.

<br>

> :bulb: Each table is by default created with one input (`Source Name`) and one output (`Sample Name`) column  

> :bulb: Only one annotation table can be added per Excel sheet

</div>

<div class="columns-right">
    <img src="./../../../../img/Swate-CreateAnnotationTable-Exp.jpg" style="width: 1200px">
</div>

</div>

---

## Add a building block

1. Navigate to the *Building Blocks* tab via the navbar. Here you can add *Building Blocks* to the table.
2. Instead of *Parameter* select *Characteristic* from the drop-down menu (A)
3. Search for `organism` in the search bar (B). This search looks for suitable *Terms* in our *Ontology* database.
4. Select the Term with the id `OBI:0100026` and, 
5. Click <kbd>Add building block</kbd>.

> :bulb: This adds three columns to your table, one visible and **two** hidden.

![bg right:30% w:400](./../../../../img/Swate-AddBuildingBlock-Exp.jpg?v31.01.22)


---
## Insert values to annotate your data

1. Navigate to the *Terms* tab in the Navbar
2. In the annotation table, select any number of cells below `Characteristic [organism]`
3. Click into the search field in Swate.

> :bulb: You should see `organism` showing in a field in front of the search field  
> :bulb: The search will now yield results related to `organism`

4. In the search field, search for "Talinum fruticosum"
5. Select the first hit and click <kbd>Fill selected cells with this term</kbd>

---

## Add a building block with a unit

1. In the *Building Blocks* tab, select *Parameter*, search for `light intensity exposure` and select the term with id `PECO:0007224`.
2. Check the box for *This Parameter has a unit* and search for `microeinstein per square meter per second` in the adjacent search bar.
3. Select `UO:0000160`.
4. Click <kbd>Add building block</kbd>.

> :bulb: This adds four columns to your table, one visible and **three** hidden.

---

## Insert unit-values to annotate your data

In the annotation table, select any cell below `Parameter [light intensity exposure]` and add "425" as light intensity.

> :bulb: You can see the numbers being complemented with the chosen unit, e.g. `425.00 microeinstein per square meter per second`

---

## Showing ontology reference columns

Hold <kbd>Ctrl</kbd> and click the *Autoformat Table* quick access button to adjust column widths and un-hide all hidden columns.

> :bulb: You can see that your organism of choice was added with id and source Ontology in the reference (hidden) columns.  
> :warning: This feature is currently not supported on MacOS

---

## Update ontology reference columns

Click the <kbd>Update Ontology Terms</kbd> quick access buttons.

> :bulb: This updates all reference columns according to the main column. In this case the reference columns for `Parameter [light intensity exposure]` are updated with the id and source ontology of the `microeinstein per square meter per second` unit.

---

## Your ISA table is growing

At this point. Your table should look similar to this:

![w:1000](./../../../../img/demo_isa.study1.png)

---

## Hiding ontology reference columns

Click the <kbd>Autoformat Table</kbd> quick access button without holding <kbd>Ctrl</kbd> to hide all reference columns.

---

## Exercise :pencil:

Try to add suitable *building blocks* for other pieces of metadata from the plant growth protocol (`studies/talinum_drought/protocols/plant_material.txt`).

---


## Let's annotate the RNA Seq data

1. Navigate to the demo ARC. 
2. Open the lab notes `assays/rnaseq/protocols/RNA_extraction.txt` in a text editor. 
3. Open the empty `assays/rnaseq/isa.assay.xlsx)` workbook in Excel.

---

## Use a template

1. Navigate to *Templates* in the Navbar and click *Browse database* in the first function block.

> :bulb: Here you can find community created workflow annotation templates

1. Search for `RNA extraction` and click <kbd>select</kbd> 
    - You will see a preview of all building blocks which are part of this template.
2. Click <kbd>Add template</kbd> to add all Building Blocks from the template to your table, which <u>do not exist yet</u>.

![bg right:30% w:350px](./../../../../img/swate_templates.svg)

---

## Adding / Updating unit references

Sometimes you need to add or update the unit of an existing building block. 

1. Select any number of rows of the `Parameter [biosource amount]` building block to mark it for the next steps.
2. Open the *Building Blocks* tab
3. In the bottom panel "Add/Update unit reference to existing building block", search for the unit "milligram". Select the unit term and click <kbd>Update unit for cells</kbd>.
:bulb: If you already had values in the main column they will be updated automatically.
4. Click the *Update Ontology Terms* <a href="./../../../../img/img/Swate-Overlay-Exp.jpg" target="_blank">quick access button</a>, to update the reference columns.
   
---

## Remove building blocks

If there are any Building Blocks which do not fit your experiment you can use the <kbd>Remove Building Block</kbd> quick access button to remove it including all related (hidden) reference columns.

:warning: Due to the hidden reference columns, we recommend not to delete table columns via usual Excel functions. 

---

## New process, new worksheet

1. Add a new sheet to the `assays/rnaseq/isa.assay.xlsx)` workbook.
2. Add the template "RNASeq Assay"

---

## Exercise :pencil:

Try to fill the two sheets with the protocol details:
  - `assays/rnaseq/protocols/RNA_extraction.txt` and
  - `assays/rnaseq/protocols/Illumina_libraries.txt`

---

## Your ISA table is ready 🎉

Go ahead, adjust the Building Blocks you want to use to describe your experiment as you see fit.
Insert values using Swate Term search and add input and output.

---

## A small detour on "Excel Tables"

Swate uses Excel's "table" feature to annotate workflows. Each table represents one *process* from input (e.g. plant leaf material) to output (e.g. leaf extract).

Example workflows with three *processes* each:

- Plant growth &rarr; sampling &rarr; extraction
- Measured data files  &rarr; statistical analysis  &rarr; result files

> :bulb: Excel tables allow to group data that belongs together inside one sheet. This is not to be confused with a (work)sheet or workbook.
> ```bash
> workbook              (e.g. "isa.assay.xlsx")
>  └─── worksheet       (e.g. "plant_growth")
>           └─── table  (e.g. "annotationTable")

---

# :construction: Known issues with ARCitect and Swate (Nov 2023)

1. Annotation within ARCitect is not yet available.
2. Swate and ARCitect handle isa.study.xlsx / isa.assay.xlsx files differently.


---

---

# Contributors

Slides presented here include contributions by

- name: Dominik Brilhaus
  github: https://github.com/brilator
  orcid: https://orcid.org/0000-0001-9021-3197
- name: Kevin Frey
  github: https://github.com/Freymaurer
  orcid: https://orcid.org/0000-0002-8493-1077
- name: Martin Kuhl
  github: https://github.com/Martin-Kuhl
  orcid: https://orcid.org/0000-0002-8493-1077
- name: Sabrina Zander
  orcid: https://orcid.org/0009-0000-4569-6126

<!-- Source to slide(s) -->
<!-- ./../../../../img/70-Swate-HandsOn.md -->


---

# :pencil: Annotate your ARC with metadata :pencil:

1. Go to your ARC
2. Try to annotate studies and assays with proper metadata using Swate

<!-- Source to slide(s) -->
<!-- ./../../../../img/75-exercise_FAIRProject_SWATE.md -->


---

# Legal aspects of RDM

---

# Different laws touched by RDM

![w:700](./../../../../img/Hartmann_TerraIncognita-Forschungsdaten-RechtlicheHeimat.png)

<span class="footer-reference">Hartmann, Thomas. (2019). Rechtsfragen: Institutioneller Rahmen und Handlungsoptionen für universitäres FDM. Zenodo. https://doi.org/10.5281/zenodo.2654306</span>

---

# Open Access (OA) categories

- Gold: Published in an open-access journal that is indexed by the [DOAJ](https://doaj.org).
- Green: Toll-access on the publisher page, but there is a free copy in an OA repository.
- Hybrid: Free under an open license in a toll-access journal.
- Bronze: Free to read on the publisher page, but without a clearly identifiable license.
- Closed: All other articles, including those shared only on an Academic Social Network or in Sci-Hub.

<span class="footer-reference">Piwowar H et al. (2018), PeerJ https://doi.org/10.7717/peerj.4375</span>

---

# Open Science is more than Open Access

![w:900](https://www.frontiersin.org/files/Articles/855198/frma-07-855198-HTML/image_m/frma-07-855198-g001.jpg)

<span class="footer-reference">Okafor et al. (2022) https://doi.org/10.3389/frma.2022.855198, Figure 1</span>

---

# Creative commons

Check out: https://creativecommons.org/about/cclicenses/

![w:400](./../../../../img/creative_commons_brochure.png)

<span class="footer-reference">adapted from https://wiki.creativecommons.org/images/0/01/6licenses-folded.pdf</span>

---

# Data protection

[GDPR](https://gdpr-info.eu/): General Data Protection Regulation
[DS-GVO](https://www.datenschutz-wiki.de/Datenschutz-Grundverordnung) (german): Datenschutz-Grundverordnung

---

# Use of biological materials

- MTA: material transfer agreement
- Nagoya Protocol: https://www.cbd.int/abs/about/
- DSI: [Digital sequence information](https://www.genres.de/en/access-and-benefit-sharing/digital-sequence-information)

---

# FAIR and CARE

![](https://images.squarespace-cdn.com/content/v1/5d3799de845604000199cd24/1567592451970-2R8XFL670QNMAGDRV7ED/Be+FAIR+and+CARE.png?format=2500w)

<span class="footer-reference">https://www.gida-global.org/care</span>

---

# CARE principles

![bg right w:450](https://storage.googleapis.com/jnl-up-j-dsj-files/journals/1/articles/1158/submission/proof/1158-10-8531-1-17-20201104.png)

<span class="footer-reference">https://datascience.codata.org/articles/10.5334/dsj-2020-043/</span>

---

# Research Data policies
![w:500](./../../../../img/Forschungsdaten-Policy-Kit-Abb2.png)


<span class="footer-reference">Hiemenz, Bea & Kuberek, Monika (2018) http://dx.doi.org/10.14279/depositonce-7521</span>

---

# CEPLAS relevant data handling guidelines & policies

<style scoped> section{font-size: 25px;} </style>

- [Deutsche Forschungsgemeinschaft (2015): DFG Guidelines on the Handling of Research Data](https://www.dfg.de/en/research_funding/proposal_review_decision/applicants/research_data/)
- [Amtliche Mitteilungen der Universität zu Köln AM 07/2018: Leitlinie zum Umgang mit Forschungsdaten](https://am.uni-koeln.de/e21463/am_mitteilungen/@6/AM_2018-07_Leitlinie-zum-Umgang-mit-Forschungsdaten_ger.pdf)
- [Amtliche Bekanntmachung der Heinrich-Heine-Universität Nr. 43/2022: Forschungsdaten-Richtlinie](https://www.fdm.hhu.de/fileadmin/redaktion/Forschungsdatenmanagement/2022_Forschungsdaten-Richtlinie.pdf) 
- [Leitlinie zum Umgang mit Forschungsdaten im Forschungszentrum Jülich 05/2019](https://www.fz-juelich.de/SharedDocs/Downloads/ZB/DE/Forschungsdaten/fdm_leitlinie_forschungsdaten_fzj.pdf)
- [Senat der Max-Planck-Gesellschaft (2009): Regeln zur Sicherung guter wissenschaftlicher Praxis](https://www.mpg.de/199493/regelnWissPraxis.pdf)

---

# The Data Management Plan (DMP)

- Covers the full research data lifecycle
- Frequently updated as your project develops
- Required to different extents by funding agencies (e.g. DFG, Horizon Europe, BMBF, BMEL, ... )

---

# DMP tools

- Data Stewardship Wizard https://ds-wizard.org/
- RDMO https://rdmorganiser.github.io/ (e.g. https://rdmo.hhu.de)
- Dataplan: https://dmpg.nfdi4plants.org

> Check out the [Elixir RDMkit](https://rdmkit.elixir-europe.org/data_management_plan) for more

---



---

# Contributors

Slides presented here include contributions by

- name: Dominik Brilhaus
  github: https://github.com/brilator
  orcid: https://orcid.org/0000-0001-9021-3197
- name: Hajira Jabeen
  github: https://github.com/HajiraJabeen
  orcid: https://orcid.org/0000-0003-1476-2121
<!-- Source to slide(s) -->
<!-- ./../../../../img/80-LegalAspects.md -->


---

# :pencil: Share your ARC :pencil:

1. Follow the next slides to learn how to share your ARC with a colleague
3. Go to your colleague’s ARC and try to understand it

---

# :pencil: Understand your colleague’s ARC :pencil:

1. Go to your colleague’s ARC
2. Try to identify one experiment that led to results (e.g. a figure in the thesis)
3. What are the samples (e.g. plants, bacteria)?
4. How were the samples prepared (~ materials)?  
5. How was the experiment performed (~ methods)?
6. What is the raw data (~ results)?
7. How was the data analyzed (~ computational methods, statistics)?  
8. Collect all of the above in a `README_<YourArbitraryParticipantID>.md` in the same folder.

---

# Assignment

Participant | looks at ARC of
--- | ---
Participant02 | Participant01
Participant03 | Participant02
… | …
Participant n | Participant n-1

<!-- Source to slide(s) -->
<!-- ./../../../../img/90-exercise_FAIRProject_final.md -->


---

# Electronic Lab Notebooks (ELNs)

---

# ELN ≈ Digital Protocol Editors

- Documenting daily lab routine
- Lab methods & protocols
- Lab inventory (biologicals, chemicals, instruments)
- Local sharing & collaboration
- Backup (locally)

✅ ELNs help to digitalize research documentation

![bg right:40% w:400](./../../../../img/Documents_Handwritten.svg)

---

<!-- 
# Are ELNs FAIR?

- Version control / Track changes
- Transparent contributions
- Use of IDs / PIDs
- External sharing / access
- (Long term) data storage
- Analyses
  - is code reproducible
- Metadata
  - standards
  - schemata

--- -->

# Are ELNs FAIR?

FAIR indicator* | ELN
-------------- | ---
**Findable**
F1. (Meta)data are assigned a globally unique and persistent identifier.
F2. Data are described with rich metadata (defined by R1 below).
F3. Metadata clearly and explicitly include the identifier of the data they describe.
F4. (Meta)data are registered or indexed in a searchable resource.
**Accessible**
A1. (Meta)data are retrievable by their identifier using a standardised communications protocol
A1.1 The protocol is open, free, and universally implementable
A1.2 The protocol allows for an authentication and authorisation procedure, where necessary
A2. Metadata are accessible, even when the data are no longer available
**Interoperable**
I1. (Meta)data use a formal, accessible, shared, and broadly applicable language for knowledge representation.
I2. (Meta)data use vocabularies that follow FAIR principles.
I3. (Meta)data include qualified references to other (meta)data.
**Reusable**
R1. (Meta)data are richly described with a plurality of accurate and relevant attributes
R1.1. (Meta)data are released with a clear and accessible data usage license
R1.2. (Meta)data are associated with detailed provenance
R1.3. (Meta)data meet domain-relevant community standards

<span class="footer-reference">*FAIR classified by https://www.go-fair.org/fair-principles/<span>

---

# Findable

| FAIR indicator*                                                                       | elabFTW |
|---------------------------------------------------------------------------------------|---------|
| F1. (Meta)data are assigned a globally unique and persistent identifier.              | 🟠 / 🔴 |
| F2. Data are described with rich metadata (defined by R1 below).                      | 🔴      |
| F3. Metadata clearly and explicitly include the identifier of the data they describe. | 🟠 / 🔴 |
| F4. (Meta)data are registered or indexed in a searchable resource.                    | 🔴      |

<span class="footer-reference">*FAIR classified by https://www.go-fair.org/fair-principles/<span>

--- 

# Accessible

| FAIR indicator*                                                                                 | elabFTW |
|-------------------------------------------------------------------------------------------------|---------|
| A1. (Meta)data are retrievable by their identifier using a standardised communications protocol | 🔴
| A1.1 The protocol is open, free, and universally implementable                                  | 🟢 / 🟠
| A1.2 The protocol allows for an authentication and authorisation procedure, where necessary     | ❓
| A2. Metadata are accessible, even when the data are no longer available                         | ❓

<span class="footer-reference">*FAIR classified by https://www.go-fair.org/fair-principles/<span>

--- 

# Interoperable

| FAIR indicator*                                                                                                | elabFTW |
|----------------------------------------------------------------------------------------------------------------|---------|
| I1. (Meta)data use a formal, accessible, shared, and broadly applicable language for knowledge representation. | 🔴
| I2. (Meta)data use vocabularies that follow FAIR principles.                                                   | 🔴
| I3. (Meta)data include qualified references to other (meta)data.                                               | 🔴

<span class="footer-reference">*FAIR classified by https://www.go-fair.org/fair-principles/<span>

---

# Reusable

| FAIR indicator*                                                                          | elabFTW |
|------------------------------------------------------------------------------------------|---------|
| R1. (Meta)data are richly described with a plurality of accurate and relevant attributes | 🔴
| R1.1. (Meta)data are released with a clear and accessible data usage license             | 🔴
| R1.2. (Meta)data are associated with detailed provenance                                 | 🔴
| R1.3. (Meta)data meet domain-relevant community standards                                | 🔴

<span class="footer-reference">*FAIR classified by https://www.go-fair.org/fair-principles/<span>
---

---

# Contributors

Slides presented here include contributions by

- name: Dominik Brilhaus
  github: https://github.com/brilator
  orcid: https://orcid.org/0000-0001-9021-3197

<!-- Source to slide(s) -->
<!-- ./../../../../img/91-ELNs.md -->


---

# Data publication and repositories

---

# Peristent Identifiers (PIDs)

---

# Spot the PIDs

![w:900](./../../../../img/exercise_PIDs_img1.png)

<span class="footer-reference"> https://doi.org/10.1093/plcell/koab243</span>

---

# Globally unique, stable, persistent identifiers (PIDs)

- Long-term findability
- Make data, digital objects, people, … uniquely identifiable
- Diminish “dead links”
- Cope with name changes

![bg right width:500](./../../../../img/pid_collage.drawio.svg)

---

# Properties of a PID

Ideally, PIDs are

- Stable and permanent
- Location-independent
- Globally unique and valid
- Addressable (citable)
- Clickable (resolvable)

<span class="footer-reference">Adapted from https://www.ebi.ac.uk/rdf/documentation/good_practice_uri/<span>

---

# Additional resources

- https://www.doi.org
- https://www.orcid.org
- https://pidservices.org/
- https://datacite.org
- https://www.project-freya.eu/en

---


# Institutional publication guidelines

HHU Düsseldorf recommends use of ORCID and other PIDs

Publikationsrichtlinie der Heinrich-Heine-Universität Düsseldorf vom 09.11.2023: 

https://www.hhu.de/die-hhu/kontakt-und-services/zentrale-und-amtliche-bekanntmachungen/nr-34-2023


---

# Domain-specific data repositories

<style scoped>
section {font-size: 25px;}
</style>

**Good**

- Assign PIDs / DOIs
- Long-term accessible
- Data type specific
- Apply metadata standards
- Usually recommended / required by journals
- Mostly accepted by the community

**Intermediate**

- User-friendliness
- Different metadata schema
- Complex and versatile submission routines

---

# Domain-specific data repositories

<style scoped>
table {
  width: 100%;  
  height: 400;
}
</style>

Repository | Description | Biological data domain
-- | -- | --
[EBI-ENA](<https://www.ebi.ac.uk/ena/>) | European Nucleotide Archive | genome / transcriptome sequences
[EBI-ArrayExpress](<https://www.ebi.ac.uk/arrayexpress/>) | Archive of Functional Genomics Data | transcriptome  
[EBI-MetaboLights](<https://www.ebi.ac.uk/metabolights/>) | Database of Metabolomics | metabolome
[EBI-PRIDE](<https://www.ebi.ac.uk/pride/>) | PRoteomics IDEntifications Database | proteome
[EBI-BioImage Archive](<https://www.ebi.ac.uk/bioimage-archive/>) | Stores and distributes biological images | imaging, microscopy
[e!DAL-PGP](<https://edal.ipk-gatersleben.de/index.html>) | Plant Genomics & Phenomics Research Data Repository | phenome
[NCBI-GEO](<https://www.ncbi.nlm.nih.gov/geo/>) | Gene Expression Omnibus | transcriptome
[NCBI-GenBank](<https://www.ncbi.nlm.nih.gov/genbank/>) | Genetic Sequence Database | genome
[NCBI-SRA](<https://www.ncbi.nlm.nih.gov/sra/>) | Sequence Read Archive | genome / transcriptome sequences

---

# Choosing a data repository

Domain-specific >> Generic >> Institutional

*Find repositories at:*

- <https://www.re3data.org>
- <https://fairsharing.org>

---

# Generic data repositories

![bg right:40% width:400](./../../../../img/repositories_genericRepos_collage.drawio.svg)

**Good**

- Allow publication of any kind of data Assign PIDs / DOIs
- Long-term accessible
- Very simple to use

**Intermediate**

- Only generic / high-level metadata schema
- Limited reusability

---

# From ARC to repositories

<style scoped>

section p img {
width: 1000px;
height: 400px;
object-fit: cover;
object-position: 100% 80%;
/* display: block; */;
}
</style>

![](./../../../../img/ARC_Repository03_img1.png)

---

# Moving from paper to data publications

![w:400px](./../../../../img/DataPLANT_LandingPage_Mission.svg)

<!-- 
![w:800px](./../../../../img/FAIRData_ClassicalPublication.svg)

--- -->

---

# Publish your ARC, get a DOI

![w:800px](./../../../../img/ARC_SeamlessPublication.svg)


---

# Publish your ARC with a few clicks

![w:900px](./../../../../img/data-publication/cqc-results.png)

---

# Validation


![h:400](./../../../../img/tpj16474-fig-0008-m-modified.png)

<span class="footer-reference"> adapted from Weil, H.L., Schneider, K., et al. (2023), PLANTdataHUB: a collaborative platform for continuous FAIR data sharing in plant research. Plant J. https://doi.org/10.1111/tpj.16474 </span>

---

# Validate & publish


![h:400](./../../../../img/tpj16474-fig-0008-m.jpg)

<span class="footer-reference"> Weil, H.L., Schneider, K., et al. (2023), PLANTdataHUB: a collaborative platform for continuous FAIR data sharing in plant research. Plant J. https://doi.org/10.1111/tpj.16474 </span>

---

# Receive a DOI

![w:800px](./../../../../img/data-publication/doi-accession.png)


---

---

# Contributors

Slides presented here include contributions by

- name: Dominik Brilhaus
  github: https://github.com/brilator
  orcid: https://orcid.org/0000-0001-9021-3197

<!-- Source to slide(s) -->
<!-- ./../../../../img/92-DataPublications.md -->


---

<style>
.columns {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 20px;
}
</style>

# Code Notebooks and IDEs

<div class="columns">
<div class="columns-left">

- Visual Studio Code: https://code.visualstudio.com/
- RMarkdown: http://rmarkdown.rstudio.com
- Jupyter Notebooks: https://jupyter.org/ 

</div>

<div class="columns-right" style="list-style-type: none;">

- 🟢 Interactive (good start for non-coders)
- 🟢 Document and comment code
- 🟢 Often offer integrated version control (e.g. git plugin)
- 🟠 Executable code + "result preview"
- 🟠 Reproducibility (package / library dependencies)


</div>


</div>
</div>

---

# Computational workflow languages

<div class="columns">
<div class="columns-left">

- Describe analysis workflows and tools
- Make them portable and scalable
- Across a variety of environments (software and hardware)

</div>

<div class="columns-right">

<!-- - <https://www.docker.com>
- singularity -->
<https://www.commonwl.org>
<https://www.nextflow.io>
<https://nf-co.re/>
<https://snakemake.github.io>
<br>
<https://galaxyproject.eu/>

</div>

---

---

# Contributors

Slides presented here include contributions by

- name: Dominik Brilhaus
  github: https://github.com/brilator
  orcid: https://orcid.org/0000-0001-9021-3197

<!-- Source to slide(s) -->
<!-- ./../../../../img/93-CodeReproducibility.md -->



