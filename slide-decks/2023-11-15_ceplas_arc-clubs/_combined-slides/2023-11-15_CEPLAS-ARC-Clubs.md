---
marp: true
theme: marp-theme_dataplant-ceplas-ccby
paginate: true
title: 2023-11-15_CEPLAS-ARC-Clubs
date: 2024-10-29
---


# The ARC Club

<!--  _color: white; -->
<!-- _paginate: false -->
<style scoped>section {background: none; background-color: white;}</style>

<br>

December 7<sup>th</sup>, 2023
Dominik Brilhaus, CEPLAS Data Science

![bg fit](./../../../images/background-title-ceplas.drawio.svg)

---

# House-keeping

Pad: https://pad.hhu.de/lhxZ_1GCRAa9ROHmj0zuYQ

- take notes
- ask questions
- copy / paste links, etc.

---

# Get-to-know

- Lab
- CEPLAS / TRR / MibiNet / ?
- My favorite lab assay
- Used code / programming language before
- Have an ORCID
- My motivation / expectation

---

# Materials

Slides will be shared via DataPLANT knowledge base

---

# Tentative agenda

<style scoped>
.columns {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
}
</style>

<div class="columns">
<div class="columns-left">

## Day 1

- Intro to ARC and demo
- ARCitect Hands-on
- Create your ARCs
- DataHUB Features

</div>

<div class="columns-right">

## Day 2

- ARC recap session
- ISA and Metadata
- Swate Hands-on
- Annotate data in your ARC

</div>
</div>

---

# The ARC Club  &ndash; Goals

- Move existing datasets into ARCs
- Share them via the DataHUB
- First few steps into ARCs
- You or collaborators can pick them up from there

![bg right w:500](./../../../images/ceplas-arcs.drawio.svg)

---

# Perfect is the enemy of good

- There is no perfect ARC
- There is no complete ARC
- The only bad ARCs are those that don't exist yet.

<br>

:rocket: Let's get started, the rest is easy :rocket:

---

# Let's draw a typical lab workflow from your lab :pencil: <!-- fit -->

---

# Resources

### <img align="left" style="height:35px" src='https://raw.githubusercontent.com/nfdi4plants/Branding/7e7d442aafeaa767b9c14a63a16e459dadcbdaaf/logos/DataPLANT/dataplant-logo-minimal-rounded-bg-darkblue.svg'/> DataPLANT (nfdi4plants)

Website: <a href="https://nfdi4plants.org/" target="_blank">https://nfdi4plants.org/</a>
Knowledge Base: <a href="https://nfdi4plants.org/nfdi4plants.knowledgebase/" target="_blank">https://nfdi4plants.org/nfdi4plants.knowledgebase/</a>
DataHUB: <a href="https://git.nfdi4plants.org" target="_blank">https://git.nfdi4plants.org</a>


GitHub: <a href="https://github.com/nfdi4plants" target="_blank">https://github.com/nfdi4plants</a>
HelpDesk: <a href="https://helpdesk.nfdi4plants.org" target="_blank">https://helpdesk.nfdi4plants.org</a>

:bulb: You can help us by raising issues, bugs, ideas...

---

---

# Contributors

Slides presented here include contributions by

- name: Dominik Brilhaus
  github: https://github.com/brilator
  orcid: https://orcid.org/0000-0001-9021-3197

---


<style>

figcaption {
  font-size: 10px;
  font-style: italic;
}

.reference-bgright {
  font-size:15px;
  line-height: 1.2em;
  position: fixed;
  right: 0px;
  bottom: 0px;
  transform: translate(-50%, -50%);
  margin: 0 auto;
}

</style>

# The ARC ecosystem

<!--  _color: white; -->
<!-- _paginate: false -->

<style scoped>section {background: none; background-color: white;}</style>

### *A FAIR RDM journey along a (mutable) data life cycle*

<br>

![bg fit](./../../../images/background-title-ceplas.drawio.svg)

---

# Data Stewardship between DataPLANT and the community  <!-- fit -->

![w:880](././../../../images/dataplant-collaborationceplas.drawio.png)

---

# The research data life cycle

<br>

![w:350](./../../../images/rdmkit-data-life-cycle-9.svg)

<span class="footer-reference">https://rdmkit.elixir-europe.org, [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)</span>

---

# Annotated Research Context (ARC)

![width:950](./../../../images/arc-datacentricintegration-img1.png)

---

# What does an ARC look like?

![width:950](./../../../images/arc-fillwithdata-seq1.png)

---

# ARCs store experimental data

![width:950](./../../../images/arc-fillwithdata-seq3.png)

---

# Computations can be run inside ARCs

![width:950](./../../../images/arc-fillwithdata-seq5.png)

---

# ARCs come with comprehensive metadata

![width:950](./../../../images/arc-fillwithdata-seq6.png)

---

# ARC builds on standards

![w:880](./../../../images/arc-buildsonstandards2.png)

<span class="footer-reference">https://isa-tools.org/ | https://www.commonwl.org/
https://www.researchobject.org/ro-crate/ | https://git-scm.com</span>

---

<!-- _paginate: false -->

<style scoped>section {background: none; background-color: white;}</style>

---


# Collect <img align="left" class="center" style="height:75px" src='./../../../images/screenshot-rdmkit-02-collect.png'/>

![width:800](./../../../images/arc-fillwithdata-experimental.png)

<!-- 

- create study folder
  - take a picture (add more demo pictures)
- create assay folder
  - add fastq data

-->

---

# Process (e.g. annotate)  <img align="left" class="center" style="height:75px" src='./../../../images/screenshot-rdmkit-03-process.png'/>

![w:650](./../../../images/swate-metadatatemplates.png)

<!-- 

- annotate plant samples
- annotate rnaseq extraction -->

---

# Analyse <img align="left" class="center" style="height:75px" src='./../../../images/screenshot-rdmkit-04-analyse.png'/>

<!-- 
- run fastqc
- receive back results
-->

![w:800](./../../../images/tpj16474-fig-0005-m.jpg)

<span class="footer-reference"> Weil, H.L., Schneider, K., et al. (2023), PLANTdataHUB: a collaborative platform for continuous FAIR data sharing in plant research. Plant J. https://doi.org/10.1111/tpj.16474 </span>

---

# Preserve  <img align="left" class="center" style="height:75px" src='./../../../images/screenshot-rdmkit-05-preserve.png'/>

<!--
1. Validation: CQC on each DataHUB commit
2. Publication: DOI
-->

![h:400](./../../../images/tpj16474-fig-0008-m-modified.png)

<span class="footer-reference"> adapted from Weil, H.L., Schneider, K., et al. (2023), PLANTdataHUB: a collaborative platform for continuous FAIR data sharing in plant research. Plant J. https://doi.org/10.1111/tpj.16474 </span>

---

# Preserve and publish <img align="left" class="center" style="height:75px" src='./../../../images/screenshot-rdmkit-05-preserve.png'/>

<!--
1. Validation: CQC on each DataHUB commit
2. Publication: DOI
-->

![h:400](././../../../images/tpj16474-fig-0008-m.jpg)

<span class="footer-reference"> Weil, H.L., Schneider, K., et al. (2023), PLANTdataHUB: a collaborative platform for continuous FAIR data sharing in plant research. Plant J. https://doi.org/10.1111/tpj.16474 </span>

---

# Share and collaborate <img align="left" class="center" style="height:75px" src='./../../../images/screenshot-rdmkit-06-share.png'/>

![w:700](./../../../images/arc-datasharing-experts02-img1.png)

---

# Reuse <img align="left" class="center" style="height:75px" src='./../../../images/screenshot-rdmkit-07-reuse.png'/>

![w:800](./../../../images/tpj16474-fig-0001-m.jpg)

<!-- 
- via ARC https://arcregistry.nfdi4plants.org/arcsearch
- via ISA https://arcregistry.nfdi4plants.org/isasearch 
-->

<span class="footer-reference"> Weil, H.L., Schneider, K., et al. (2023), PLANTdataHUB: a collaborative platform for continuous FAIR data sharing in plant research. Plant J. https://doi.org/10.1111/tpj.16474 </span>

---

# **Mutable** data life cycle

![w:700](./../../../images/tpj16474-fig-0006-m.jpg)

<!-- 

- Invite other (demo) account
- add notes from there
-->

<span class="footer-reference"> Weil, H.L., Schneider, K., et al. (2023), PLANTdataHUB: a collaborative platform for continuous FAIR data sharing in plant research. Plant J. https://doi.org/10.1111/tpj.16474 </span>

---

# Plan &ndash; ARC scale <img align="left" class="center" style="height:75px" src='./../../../images/screenshot-rdmkit-01-plan.png'/>

![w:800](./../../../images/tpj16474-fig-0007-m.jpg)

<span class="footer-reference"> Weil, H.L., Schneider, K., et al. (2023), PLANTdataHUB: a collaborative platform for continuous FAIR data sharing in plant research. Plant J. https://doi.org/10.1111/tpj.16474 </span>

<!--
 
 - **ARCitect**: Create empty ARC
   - description
   - author
     - first name
     - last name
     - email
 - **ARCitect**: Upload ARC to DataHUB
 - **DataHUB**
   - Discuss, collect meeting minutes in Wiki
   - design / plant investigation (datahub wiki, issues)

-->

---

# Plan  &ndash; proposal scale <img align="left" class="center" style="height:75px" src='./../../../images/screenshot-rdmkit-01-plan.png'/>

<span class="footer-reference">**Zhou *et al.* (2023)**, DataPLAN: a web-based data management plan generator for the plant sciences, bioRxiv 2023.07.07.548147; doi: https://doi.org/10.1101/2023.07.07.548147 </span>

https://dmpg.nfdi4plants.org

![w:800](././../../../images/zhou2023-dataplan.png)

---

# The ARC ecosystem

![w:850](./../../../images/arc-ecosystem-07.drawio.png)

---

# The ARC ecosystem

![w:850](./../../../images/arc-ecosystem-09.drawio.png)

---

# The ARC ecosystem

![w:850](./../../../images/arc-ecosystem-10.drawio.png)

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

---


# ARCitect hands-on

<style scoped>section {background: none; background-color: white}</style>
<!-- _paginate: false -->

---

# ARCitect installation

Please install version **v0.0.21** (or later) of the ARCitect: https://github.com/nfdi4plants/ARCitect/releases/tag/v0.0.21

:fire: (released November 23rd, 2023) :fire:

---

## Download the demo data <!-- fit -->

https://nfdi4plant.sharepoint.com/:f:/s/Teaching/Eik7k-oJiMREgZ24kto7sIYBGxHmmZlS_Kzf7psk-5w-xg?e=u0sADd

![bg right w:600](./../../../images/demo-data-download.png)

---

# Sort Demo data in an ARC

![bg right width:400](./../../../images/demo-data-screenshot.png)

![width:900](./../../../images/arc-fillwithdata-experimental.png)

---

# Open ARCitect

1. Login to DataHUB (1)
   ![bg right:40% w:250](./../../../images/arcitect-help-sidebar.drawio.svg)

---

# Initiate the ARC folder structure

![bg right:40% w:250](./../../../images/arcitect-help-sidebar.drawio.svg)

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

![bg right:30% w:500](./../../../images/arcitect-talinumphotosynthesis.png)

---

# Add a description to your investigation

![w:800](./../../../images/arcitect-talinumphotosynthesis-investigationmetadata.png)

---

# Add a contributor


![bg right w:500](./../../../images/arcitect-talinumphotosynthesis-investigationperson.png)

---

# Add a study

by clicking "Add Study" and entering an identifier for your study

Use **talinum_drought** as an identifier

![bg right w:500](./../../../images/arcitect-talinumphotosynthesis-study.png)

---

# Study panel

In the study panel you can add

- general metadata,
- people, and
- publications
- data process information

![bg right w:500](./../../../images/arcitect-talinumphotosynthesis-studypanel.png)

---


# Add an assay

by clicking "Add Assay" and entering an identifier for your assay

Add two assays with **rnaseq** and **metabolomics** as an identifier
![bg right w:500](./../../../images/arcitect-talinumphotosynthesis-assay.png)

---

# Link your assay to a study

You can either
- link your new assay to an existing study in your ARC or
- create a new one
  
Link your assays to your **talinum_drought** study


![bg right w:500](./../../../images/arcitect-talinumphotosynthesis-assay2.png)

---

# Add information about your assay

In the assay panel you can

1. link or unlink the assay to studies, and
2. define the assay's
   - measurement type
   - technology type, and
   - technology platform.
3. add data process information

![bg right w:500](./../../../images/arcitect-talinumphotosynthesis-assaypanel.png)

---

# Add protocols

You can either
- directly write a **new protocol** within the ARCitect or
- import an existing one from your computer

![w:800](./../../../images/arcitect-arcpanel-protocol.png)

---

# Add protocols and datasets

In the file tree you can
  - **add a dataset** and 
  - **protocols** associated to that dataset.

:bulb: **Add Dataset** allows to import data from any location on your computer into the ARC.

:warning: Depending on the file size, this may take a while. Test this with a small batch of files first.

<!-- Demo dataset cannot be added via add dataset. Only individual files can be added, not multiple folders -->

![bg right:40% w:400](./../../../images/arcitect-arcpanel-assay03.png)

---

# Sort Demo Data to your ARC

💡 protocols can directly be imported via ARCitect

💡 to add multiple datasets folders, they have to be added manually via file browser

---

# Upload your local ARC to the DataHUB

From the sidebar, navigate to **Versions** (6)

![bg right:40% w:250](./../../../images/arcitect-help-sidebar.drawio.svg)

---

# Versions

The versions panel allows you to
- store the local changes to your ARC in form of "commits",
- sync the changes to the DataHUB, and
- check the history of your ARC

![bg right w:650](./../../../images/arcitect-versionspanel.png)

---

# Connection to the DataHUB

If you are logged in, the versions panel shows
- your DataHUB's *Full Name* and *eMail*
- the URL of the current ARC in the DataHUB `https://git.nfdi4plants.org/<YourUserName>/<YourARC>`

![bg right w:650](./../../../images/arcitect-versionspanel.png)

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
<img align="left" height=35px src='https://raw.githubusercontent.com/nfdi4plants/Branding/master/icons/Swate/Excel/Core/swate-c-40x40.png'/> ... annotated experimental data
<br>
🌐 Shared with collaborators

![bg right width:400](./../../../images/demo-arc-screenshot.png)

---

---

# Received two emails from "GitLab" about a failed pipeline? <!-- fit -->

![w:600](./../../../images/cqc-error-email.png)

:fire: Don't worry :smile:

---

## Pipeline Failed

![bg right w:700](./../../../images/cqc-error-badges.png)

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

![bg right w:500](./../../../images/cqc-error-email2.png)

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

![bg right:60% w:600](./../../../images/cqc-activate-autodevops.png)

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

---


# DataPLANT DataHUB

---

# ARC builds on standards + Git

![w:900](./../../../images/arc-buildsonstandards2.png)

---

# The DataPLANT DataHUB &ndash; a GitLab ***Plus***

![](./../../../images/datahub-gitlab.drawio.png)

---

![bg cover](./../../../images/dataplant-bigpicture-seq2.png)

---

![bg cover](./../../../images/dataplant-bigpicture-seq3.png)

---

![bg cover](./../../../images/dataplant-bigpicture-seq4.png)

---

![bg cover](./../../../images/dataplant-bigpicture-seq5.png)

---

![bg cover](./../../../images/dataplant-bigpicture-seq6.png)

---

![bg cover](./../../../images/dataplant-bigpicture-seq7.png)

---

![bg cover](./../../../images/dataplant-bigpicture-seq8.png)

---

# **Mutable** data life cycle

![w:700](./../../../images/tpj16474-fig-0006-m.jpg)

<!-- 

- Invite other (demo) account
- add notes from there
-->

<span class="footer-reference"> Weil, H.L., Schneider, K., et al. (2023), PLANTdataHUB: a collaborative platform for continuous FAIR data sharing in plant research. Plant J. https://doi.org/10.1111/tpj.16474 </span>

---

# Project management

![w:800](./../../../images/tpj16474-fig-0007-m.jpg)

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

---


# DataHub Hands-On

---

# Navigation Bar

![](./../../../images/datahub-navbar.drawio.svg)

1. navigate directly to the [projects panel](./../../../../../../DataHUB-Manual/datahub-Manual/datahub-projectsPanel.html) via the icon in the top-left (1)
2. open the [hamburger Menu](#hamburger-menu) (2)
3. use the search field (3) to find ARCs, users and groups
4. open the [avatar Menu](#avatar-menu) (4)

---

# Hamburger Menu

<div class="two-columns">

<div style="padding: 100px 0;">

1. From the hamburger menu (1) you can
2. navigate to the [projects](./../../../DataHUB-Manual/datahub-projectsPanel.html) (2)
3. or [groups](datahub-groupsPanel.html) (3) panels

</div>

<div>

![](./../../../images/datahub-hamburgermenu.drawio.svg)

</div>
</div>


---

# Avatar Menu

<div class="two-columns">

<div>

1. In the avatar menu (1) you can
2. find your profile name and user name (2), 
3. navigate to the [user settings](./../../../DataHUB-Manual/datahub-userSettings.html) (3) 
4. or sign out (4) of the DataHUB.

</div>

<div>

![w:400](./../../../images/datahub-avatarmenu.drawio.svg)

</div>
</div>

---

# Projects Panel

![](./../../../images/datahub-projectspanel.drawio.svg)

1. Choose a tab (1) to see only your ARCs, or explore other publicly available ARCs. 
2. The main panel (2) lists all ARCs
3. Here you can also see, the visibility level (3), and 
4. your permission or role (4) for the listed ARC. 
5. You can create a **New Project** in the top-right corner (5).

---

# ARC Panel

The ARC Panel is the main working area for your ARC.

![w:1000](./../../../images/datahub-arc-overview.drawio.svg)

---

# ARC Panel &ndash; sidebar


<div class="two-columns">

<div>

1. access the project information (1), e.g. invite members to the ARC
2. follow the progress of your ARC repository (2),
3. organize tasks in issue lists and boards (3),
4. take notes in a wiki to your ARC (4),
5. adapt the [settings (5) of the ARC](datahub-ARCSettings.html).

</div>

<div>

![w:600](./../../../images/datahub-arc-overview.drawio.svg)

</div>
</div>


---

# ARC Panel &ndash; main panel

<div class="two-columns">

<div>

6. see the ARC's name and visibility level (6),
7. follow the ARC's commit history (7),
8. see files contained in your ARC just like on your computer (8),
9. add new files or directories (9), and
10. download or clone your ARC (10).

</div>

<div>

![w:600](./../../../images/datahub-arc-overview.drawio.svg)

</div>
</div>

---

# Collaborate and share

![w:650](./../../../images/arc-datasharing-experts02-img1.png)

---

# Invite collaborators

* Unless changed, your ARC is set to private by default.
* To collaborate, you can invite lab colleagues or project partners to your ARC by following the steps on the subsequent slides. 
* To get started [sign in](https://auth.nfdi4plants.org/realms/dataplant/login-actions/registration?client_id=account&tab_id=4bQkU161waI) to the DataHUB and open the ARC you want to share.

---

1. Click on **Project Information** in the left navigation panel

![fit w:1050](./../../../images/datahub-members-seq2.png)

---

2. Click on **Members**

![fit w:1050](./../../../images/datahub-members-seq3.png)

---

3. Click on **Invite members**

![fit w:1050](./../../../images/datahub-members-seq4.png)

---

4. Search for potential collaborators

![fit w:1050](./../../../images/datahub-members-seq5.png)

---

5. Select a role

![fit w:1050](./../../../images/datahub-members-seq6.png)

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

![](./../../../images/arc-sharing-img1.png)

---


# Version control

- Commit history

---

# Project Management

- You can use issues

---

# ARCs come with their own wiki space

<div class="two-columns">

<div style="font-size: 27px">

- directly associated to your ARC
- same access rights as your ARC
- share meeting minutes or ideas with collaboration partners
- keep ARC clean of files that are not considered "research data"

</div>

<div>

![w:600](./../../../images/datahub-wiki.png)

</div>
</div>

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

![w:800](./../../../images/googlecom-screenshot-kg.png)

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

![bg right:60% w:780](./../../../images/ontologies-pizzaanalogy-seq1.png)

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

![w:1000](./../../../images/ontologies-pizzaanalogy-seq2.png)

---

# Modeling a pizza menu

![w:1000](./../../../images/ontologies-pizzaanalogy-seq3.png)

---

# Modeling a pizza menu

![w:1000](./../../../images/ontologies-pizzaanalogy-seq4.png)

---

# Modeling a pizza menu

![w:1000](./../../../images/ontologies-pizzaanalogy-seq5.png)

---

# Predicates have two directions

![w:1000](./../../../images/ontologies-pizzaanalogy-seq6.png)

---

# Looking at the menu from a different perspective

An object of one triplet can be the subject to another

![w:1000](./../../../images/ontologies-pizzaanalogy-seq7.png)

---

# (Towards) a knowledge graph

![w:1020](./../../../images/ontologies-pizzaanalogy-seq8.png)

---

# Searching the menu

An ontology can be queried:

- *"name all pizzas with topping mushrooms"*

![bg right w:1020](./../../../images/ontologies-pizzaanalogy-seq9.png)

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

![w:900](./../../../images/isamodel-arc01-img01.svg)

<https://isa-tools.org/format/specification.html>

---

# ARC builds on ISA

![w:1100](./../../../images/isamodel-arc01-img02.svg)

---

# isa.<>.xlsx files within ARCs

![w:1000](./../../../images/isamodel-arc01-img03.svg)

---

# Study and assay files are registered in the investigation file <!-- fit -->

![w:950](./../../../images/isamodel-arc01-img04.svg)

---

# The output of a study or assay file can function as input for a new isa.assay.xlsx

Output building blocks:

- Sample Name
- Raw Data File
- Derived Data File

![bg right w:600](./../../../images/isamodel-arc01-img05.svg)

---

#

![bg w:1050](./../../../images/isamodel-arc01-img6.svg)

---

# Swate

---

# Annotation by flattening the knowledge graph

![w:800](./../../../images/swate-parentchildterm.svg)

- Low-friction metadata annotation
- Familiar spreadsheet, row/column-based environment

---

# Annotation principle

<!-- <style scoped>
section p img{
  /* padding-left: 230px */
}  
</style> -->

![w:650](./../../../images/swate-parentchildterm2.svg)

- Low-friction metadata annotation
- Familiar spreadsheet, row/column-based environment

---

# Adding new building blocks (columns)

![w:750](./../../../images/swate-newparameter.svg)

- Swate can be used for the annotation of **isa.study.xlsx and isa.assay.xlsx** files

---

# Annotation Building Block types <!--fit-->

<style scoped>

section{
    font-size: 25px
}

</style>

![bg right w:700](./../../../images/swate-overview.svg)

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

![w:750](./../../../images/swate-ontologytermsearch.svg)

Enable **related term directed search** to directly fill cells with child terms

---

# Fill your table with ontology terms

![w:800](./../../../images/swate-ontologytermsearch2.svg)

---

# Hierarchical combination of ontologies

![w:800](./../../../images/swate-ontologycombination.svg)

<!-- combination of ISA (Characteristics, Parameter, Factor) and a biological or technological ontology (e.g. temperature, strain, instrument model) gives the flexibility to display an ontology term, e.g. temperature, as a regular process parameter or as the factor your study is based on (Parameter \[temperature\] or Factor \[temperature\]). -->

---

# Swate templates

---

# Checklists and Templates

![w:800px](./../../../images/swate-templateschecklists.svg)

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

![w:850px](./../../../images/swate-metadatatemplates.png)

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

![bg right w:450](./../../../images/swate-templates.svg)

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
  
---


# Swate hands-on

---

# Goals

- Get familiar with ISA metadata and Swate
- Annotate data in your ARC

---

## Check Swate installation

:ballot_box_with_check: Make sure [Swate is installed](./../../../SwateManual/Docs01-Installing-Swate.html):

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

![bg right:40% w:250](./../../../images/arcitect-help-sidebar.drawio.svg)

1. Open the ARCitect
2. Login (1) to your DataHUB account
3. Navigate to **Download ARC** (4)

---

## Download the demo data

4. Search for **Talinum-CAM-Photosynthesis**
5. Click the download button, select a location and open the ARC.

![w:700](./../../../images/arcitect-download-talinumarc.png)

:bulb: This is basically the ARC we created last session.

---

## Where we left off last time

👩‍💻 Initiated an ARC
📂 Structured and ...  
🌐 Shared with collaborators

<br>

**Today** we want to

<img align="left" height=35px src='https://raw.githubusercontent.com/nfdi4plants/Branding/master/icons/Swate/Excel/Core/swate-c-40x40.png'/> ... **annotate the experimental data**

![bg right:40% width:400](./../../../images/arcitect-talinum-demo-arc.png)

---

# Swate hands-on with demo data

---

## Swate Overview

![width:1000](./../../../images/swate-overview.png)

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

:bulb: Each table is by default created with one input (`Source Name`) and one output (`Sample Name`) column  

:bulb: Only one annotation table can be added per Excel sheet

</div>

<div class="columns-right">
    <img src="./../../../images/swate-createannotationtable-exp.jpg" style="width: 1200px">
</div>

</div>

---

## Add a building block

1. Navigate to the *Building Blocks* tab via the navbar. Here you can add *Building Blocks* to the table.
2. Instead of *Parameter* select *Characteristic* from the drop-down menu (A)
3. Search for `organism` in the search bar (B). This search looks for suitable *Terms* in our *Ontology* database.
4. Select the Term with the id `OBI:0100026` and, 
5. Click <kbd>Add building block</kbd>.

:bulb: This adds three columns to your table, one visible and **two** hidden.

![bg right:30% w:400](./../../../images/swate-addbuildingblock-exp.jpg?v31.01.22)

---

## Insert values to annotate your data

1. Navigate to the *Terms* tab in the Navbar
2. In the annotation table, select any number of cells below `Characteristic [organism]`
3. Click into the search field in Swate.

:bulb: You should see `organism` showing in a field in front of the search field  
:bulb: The search will now yield results related to `organism`

4. In the search field, search for "Talinum fruticosum"
5. Select the first hit and click <kbd>Fill selected cells with this term</kbd>

---

## Add a building block with a unit

1. In the *Building Blocks* tab, select *Parameter*, search for `light intensity exposure` and select the term with id `PECO:0007224`.
2. Check the box for *This Parameter has a unit* and search for `microeinstein per square meter per second` in the adjacent search bar.
3. Select `UO:0000160`.
4. Click <kbd>Add building block</kbd>.

:bulb: This adds four columns to your table, one visible and **three** hidden.

---

## Insert unit-values to annotate your data

In the annotation table, select any cell below `Parameter [light intensity exposure]` and add "425" as light intensity.

:bulb: You can see the numbers being complemented with the chosen unit, e.g. `425.00 microeinstein per square meter per second`

---

## Showing ontology reference columns

Hold <kbd>Ctrl</kbd> and click the *Autoformat Table* quick access button to adjust column widths and un-hide all hidden columns.

:bulb: You can see that your organism of choice was added with id and source Ontology in the reference (hidden) columns.

:warning: This feature is currently not supported on MacOS

---

## Update ontology reference columns

Click the <kbd>Update Ontology Terms</kbd> quick access buttons.

:bulb: This updates all reference columns according to the main column. In this case the reference columns for `Parameter [light intensity exposure]` are updated with the id and source ontology of the `microeinstein per square meter per second` unit.

---

## Your ISA table is growing

At this point. Your table should look similar to this:

![w:1000](./../../../images/demo-isa.study1.png)

---

## Hiding ontology reference columns

Click the <kbd>Autoformat Table</kbd> quick access button without holding <kbd>Ctrl</kbd> to hide all reference columns.

---

## Exercise :pencil:

Try to add suitable *building blocks* for other pieces of metadata from the plant growth protocol (`studies/talinum_drought/protocols/plant_material.txt`).

---

## Add a factor building block

1. In the *Building Blocks* tab, select *Factor*, search for `watering exposure` and select the term with id `PECO:0007383`.
2. Click <kbd>Add building block</kbd>.
3. Add the drought treatment ("no water for 12 days", "re-water for 2 days") to the respective samples

:bulb: There are different options to add the drought treatment.

---

## Link the protocol to the isa table

1. In the *Building Blocks* tab, select *Protocol Columns* -> *Protocol REF*.
2. Click <kbd>Add building block</kbd>.
3. Add the name of the protocol file (plant_material.txt) to the *Protocol REF* column.

:bulb: This allows you to reference the free-text, human-readable protocol.

---

## Fill out source name and sample name

Transfer the sample ids from the protocol.

1. Invent names for `Source Name` (we do not have this information)
2. Use the sample names (DB_*) as `Sample Name`

---

## Let's annotate the RNA Seq data

1. Navigate to the demo ARC. 
2. Open the lab notes `assays/rnaseq/protocols/RNA_extraction.txt` in a text editor.
3. Open the empty `assays/rnaseq/isa.assay.xlsx)` workbook in Excel.

---

## Use a template

1. Navigate to *Templates* in the Navbar and click *Browse database* in the first function block.

:bulb: Here you can find community created workflow annotation templates

1. Search for `RNA extraction` and click <kbd>select</kbd> 
    - You will see a preview of all building blocks which are part of this template.
2. Click <kbd>Add template</kbd> to add all Building Blocks from the template to your table, which <u>do not exist yet</u>.

![bg right:30% w:350px](./../../../images/swate-templates.svg)

---

## Adding / Updating unit references

Sometimes you need to add or update the unit of an existing building block. 

1. Select any number of rows of the `Parameter [biosource amount]` building block to mark it for the next steps.
2. Open the *Building Blocks* tab
3. In the bottom panel "Add/Update unit reference to existing building block", search for the unit "milligram". Select the unit term and click <kbd>Update unit for cells</kbd>.
:bulb: If you already had values in the main column they will be updated automatically.
4. Click the *Update Ontology Terms* <a href="./images/swate-overlay-exp.jpg" target="_blank">quick access button</a>, to update the reference columns.
   
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

## Link samples across studies and assays

1. Use the `Sample Name` of studies/talinum_drought/isa.study.xlsx as the `Source Name` to **rna-extraction**.
1. Use the `Sample Name` of **rna-extraction** as the `Source Name` to **illumina-libraries**.

<script type="module">
import mermaid from 'https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.esm.min.mjs';
mermaid.initialize({ startOnLoad: true });
</script>

<div class="mermaid">
flowchart LR
%% Nodes
  S1(Seeds)
  S2(Leaves)  
  M1(RNA)
  P1>plant growth]
  P2>RNA extraction]
  P6>Illumina]
  D2(fastq files)
%% Links
S1 ---P1--> S2
S2 ---P2--> M1
M1 ---P6--> D2
</div>

---

## Link dataset files to samples

1. In the *Building Blocks* tab, select *Output Columns* -> *Raw Data File*.
2. Click <kbd>Add building block</kbd>.

:bulb: You see a warning about a changed output column.

3. Click <kbd>Continue</kbd>.
4. Go to the *File Picker* tab and click <kbd>Pick file names</kbd>.
5. Select and open the *fastq.gz files from the dataset folder.
6. Copy / paste them to the `Raw Data File`. 

:bulb: This allows you to link your samples to the resulting raw data files.

---

## Your ISA table is ready 🎉

Go ahead, adjust the Building Blocks you want to use to describe your experiment as you see fit.
Insert values using Swate Term search and add input and output.

---

## Re-use a protocol (process.json)

1. Open the empty `assays/metabolomics/isa.assay.xlsx)` workbook in Excel.
2. Navigate to *Templates* in the Navbar and scroll down to "Add template(s) from file."
3. Click <kbd>Upload protocol</kbd>
4. Select the file "swate_agilent_gc.json" from the demo data.
5. Click <kbd>Insert json</kbd>

![bg right:25% w:300px](./../../../images/swate-tab-templates.png)

:bulb: This adds not only an empty template, but a filled out table with keys (headers) and values (cells).

---

## A small detour on "Excel Tables"

Swate uses Excel's "table" feature to annotate workflows. Each table represents one *process* from input (e.g. plant leaf material) to output (e.g. leaf extract).

Example workflows with three *processes* each:

- Plant growth &rarr; sampling &rarr; extraction
- Measured data files  &rarr; statistical analysis  &rarr; result files

:bulb: Excel tables allow to group data that belongs together inside one sheet. This is not to be confused with a (work)sheet or workbook.
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

---


# The ARC Club

Happy ARCing

---

## Moving from FileShare to DataHUB &ndash; *via* ARCs

![w:900](./../../../images/insitutefileshare03todatahubviaarc.drawio.svg)

---

## Assign projects


---

## Rough routine for each project

1. Identify the available data and resources
2. Create the ARC
3. Add metadata and data
4. Share via DataHUB group

---

## Low(er) hanging fruits: published projects

1. Add the authors
2. Add the publication(s)
   1. Add citation and DOI
   2. Add supplemental
   3. Convert M&M to *protocols*
3. Reference data in public repositories
4. Add large data (e.g. from file share)
5. Set ARC to **public!**

---

## More challenging ARCs

- (unpublished) left-overs of colleagues who have since moved
- unclear status

---

## Collect / derive as much info about the **investigation** as possible

**MUST** haves

```yaml
Investigation Identifier
Investigation Title
...
Investigation Publication Status
...
Investigation Person Last Name
Investigation Person First Name
```

:bulb: This and more investigation-level info can be collected in the ARC's `isa.investigation.xlsx`

---

## Create and share the ARC

```bash
arc init
arc sync -f -r https://git.nfdi4plants.org/<GroupName>/<InvestigationID>
```

---

## Copy data

1. **Copy** data to the ARC, do not **move** data from original source  
(we'll take care of that later)
2. Ideally use `rsync` rather than copying manually
3. Ideally use `md5` or `md5sum` to check for correct file transfer

:bulb: Ask the coders for help!

---

## Perspective and administration in the future

---

## Administration / Backup

![Alt text](./../../../images/insitutefileshare04-backupclones.drawio.svg)

---



<!-- 

Note this slide deck is buggy. 
- The mermaid graphs display well in vscode preview (with mermaid extension installed)
- Slides can be exported to html or pdf using the vscode marp extension or marp-cli, but:
  - in the pdf version font size is not properly adapted
  - in the html version one has to reload / refresh (browser) each mermaid-containing slide to load the graphic 

-->




# Structure your current project folder into an ARC

<script type="module">
import mermaid from 'https://cdn.jsdelivr.net/npm/mermaid@11/dist/mermaid.esm.min.mjs';
mermaid.initialize({ startOnLoad: true });
</script>

# Sketch your laboratory workflows

The ARC helps

- to tell, which finding or result originated from which biological experiment
- link dataset files to the individual sample
- to follow a path of *processes* with *inputs* and *outputs*
- allow inputs and outputs want to be reused or reproduced, some of the processes want to be applied to other inputs

<!-- 
Before creating an ARC for an existing dataset, it might help to visualize what was done in the lab.  The following is very simplified example that most plant biologists can hopefully relate to. -->

# Green-house to gene expression

<!-- 
Consider you want to investigate the effect of drought stress on the transcript levels of you gene of interest (GOI) via qRT-PCR. You grow plants from seeds, drought-stress the plants and collect leaves at the end of the growth study. From the leave samples &ndash; homogenized to powder and stored in a freezer &ndash; you take an aliquot to extract RNA, from which you synthesize cDNA. The cDNA (together with other biologicals and chemicals) is the input for a qRT-PCR yielding relative transcript levels as the output. 

-->

<script type="module">

import mermaid from 'https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.esm.min.mjs';

mermaid.initialize({ startOnLoad: true });
</script>

<div class="mermaid" style="min-width: 480px; max-width: 960px; min-height: 360px;max-height: 600px;">
flowchart LR
%% Nodes
  S1(Seeds)
  S2(Leaves)
  M1(RNA)
  M3(cDNA)
  P1>plant growth]
  P2>RNA extraction]
  P4>cDNA synthesis]
  P5>qRT-PCR]
  D1("qRT results")
%% Links
  S1 ---P1--drought\nstress--> S2
  S2 ---P2--> M1
  M1 ---P4--> M3
  M3 ---P5--> D1
%% Defining node styles
  classDef S fill:#b4ce82, stroke:#333;
  classDef M fill:#ffc000;
  classDef D fill:#c21f3a,color:white;
  classDef P stroke-width:0px;  
%% Assigning styles to nodes
  class Sx,S1,S2 S;
  class Mx,M1,M2,M3,M4,M5,M6 M;
  class Dx,D1,D2,D3,D4,D5 D;
  class Px,P1,P2,P3,P4,P5,P6,P7,P8,P9,P10,P11,P12,P13 P;
</div>

# Confirm findings on protein level

<!-- You found your GOI affected by drought stress on transcript level. To confirm that the expression of the encoded protein is likewise affected, you take another aliquot from the same leave samples, extract proteins, separate them by SDS-PAGE and immunoblot the SDS gel with antibodies specific for your GOI. -->

<div class="mermaid">
%%{
  init: {
    'theme': 'base',
    'themeVariables': {
      'background': '#fff',
      'lineColor': '#2d3e50',
      'primaryTextColor': '#2d3e50'
    }
  }
}%%
graph LR
%% Nodes
  S1(Seeds)
  S2(Leaves)
  M1(RNA)
  M2(protein)
  M3(cDNA)
  M5(SDS-gel)
  M6(western blot)
  P1>plant growth]
  P2>RNA extraction]
  P3>protein extraction]
  P4>cDNA synthesis]
  P5>qRT-PCR]
  P8>SDS Page]
  P9>taking a photo]
  P10>Immunoblotting]
  D1("qRT results")
  D3(Image of \n SDS gel)
%% Links
  S1 ---P1--drought\nstress--> S2
  S2 ---P2--> M1
  S2 ---P3--> M2
  M1 ---P4--> M3
  M3 ---P5--> D1
  M2 ---P8--> M5
  M5 ---P9--> D3
  M5 ---P10--> M6
%% Defining node styles
  classDef S fill:#b4ce82, stroke:#333;
  classDef M fill:#ffc000;
  classDef D fill:#c21f3a,color:white;
  classDef P stroke-width:0px;  
%% Assigning styles to nodes
  class Sx,S1,S2 S;
  class Mx,M1,M2,M3,M4,M5,M6 M;
  class Dx,D1,D2,D3,D4,D5 D;
  class Px,P1,P2,P3,P4,P5,P6,P7,P8,P9,P10,P11,P12,P13 P;
</div>

# Global overview of gene expression

<!-- You could show that the expression of your GOI was affected by drought on both transcript and protein level. In order to identify transcripts that correlate with your GOI under drought stress, you prepare RNA extracted earlier and submit it to a company for mRNA-Seq. -->


<div class="mermaid" style="width: 900px">
%%{
  init: {
    'theme': 'base',
    'themeVariables': {
      'fontSize': '5px',
      'background': '#fff',
      'lineColor': '#2d3e50',
      'primaryTextColor': '#2d3e50'
    }
  }
}%%
graph LR
%% Nodes
  S1(Seeds)
  S2(Leaves)
  M1(RNA)
  M2(protein)
  M3(cDNA)
  M4(RNASeq Libraries)
  M5(SDS-gel)
  M6(western blot)
  P1>plant growth]
  P2>RNA extraction]
  P3>protein extraction]
  P4>cDNA synthesis]
  P5>qRT-PCR]
  P6>Library preparation]
  P7>Next Generation Sequencing]
  P8>SDS Page]
  P9>taking a photo]
  P10>Immunoblotting]
  D1("qRT results")
  D2(fastq files)
  D3(Image of \n SDS gel)  
%% Links
S1 ---P1--drought\nstress--> S2
  S2 ---P2--> M1
  S2 ---P3--> M2
  M1 ---P4--> M3
  M3 ---P5--> D1
  M1 ---P6--> M4
  M4 ---P7--> D2  
  M2 ---P8--> M5
  M5 ---P9--> D3
  M5 ---P10--> M6
%% Defining node styles
  classDef S fill:#b4ce82, stroke:#333;
  classDef M fill:#ffc000;
  classDef D fill:#c21f3a,color:white;
  classDef P stroke-width:0px;  
%% Assigning styles to nodes
  class Sx,S1,S2,S4 S;
  class Mx,M1,M2,M3,M4,M5,M6 M;
  class Dx,D1,D2,D3,D4,D5 D;
  class Px,P1,P2,P3,P4,P5,P6,P7,P8,P9,P10,P11,P12,P13 P;
</div>

# Adding external data

<!-- From the company you receive the RNA-Seq reads in form of fastq files. In order to quantify the reads and generate a gene expression count table, you map them against a suitable reference genome downloaded from an online database or publication's supplemental data. -->

<div class="mermaid">
%%{
  init: {
    'theme': 'base',
    'themeVariables': {
      'background': '#fff',
      'lineColor': '#2d3e50',
      'primaryTextColor': '#2d3e50'
    }
  }
}%%
graph LR
%% Nodes
  S1(Seeds)
  S2(Leaves)
  M1(RNA)
  M2(protein)
  M3(cDNA)
  M4(RNASeq Libraries)
  M5(SDS-gel)
  M6(western blot)
  P1>plant growth]
  P2>RNA extraction]
  P3>protein extraction]
  P4>cDNA synthesis]
  P5>qRT-PCR]
  P6>Library preparation]
  P7>Next Generation Sequencing]
  P8>SDS Page]
  P9>taking a photo]
  P10>Immunoblotting]
  P11>mapping]
  D1("qRT results")
  D2(fastq files)
  D3(Image of \n SDS gel)
  D4(reference \n genome)
  D5(count table)  
%% Links
    S1 ---P1--drought\nstress--> S2
    P12>Download]
    x(Paper supplement) ---P12--> D4
  S2 ---P2--> M1
  S2 ---P3--> M2
  M1 ---P4--> M3
  M3 ---P5--> D1
  M1 ---P6--> M4
  M4 ---P7--> D2
  D2 --- P11
  D4 --- P11
  P11 --> D5
  M2 ---P8--> M5
  M5 ---P9--> D3
  M5 ---P10--> M6
%% Defining node styles
  classDef S fill:#b4ce82, stroke:#333;
  classDef M fill:#ffc000;
  classDef D fill:#c21f3a,color:white;
  classDef P stroke-width:0px;  
%% Assigning styles to nodes
  class Sx,S1,S2,S4 S;
  class Mx,M1,M2,M3,M4,M5,M6 M;
  class Dx,D1,D2,D3,D4,D5 D;
  class Px,P1,P2,P3,P4,P5,P6,P7,P8,P9,P10,P11,P12,P13 P;
</div>

# What this could look like in an ARC



<div class="mermaid">
%%{
  init: {
    'theme': 'base',
    'themeVariables': {
      'background': '#fff',
      'lineColor': '#2d3e50',
      'primaryTextColor': '#2d3e50'
    }
  }
}%%
graph LR
%% Nodes
  S1(Seeds)
  S2(Leaves)
  M1(RNA)
  M2(protein)
  M3(cDNA)
  M4(RNASeq Libraries)
  M5(SDS-gel)
  M6(western blot)
  P1>plant growth]
  P2>RNA extraction]
  P3>protein extraction]
  P4>cDNA synthesis]
  P5>qRT-PCR]
  P6>Library preparation]
  P7>Next Generation Sequencing]
  P8>SDS Page]
  P9>taking a photo]
  P10>Immunoblotting]
  P11>mapping]
  D1("qRT results")
  D2(fastq files)
  D3(Image of \n SDS gel)
  D4(reference \n genome)
  D5(count table)  
%% Links
subgraph Studies
  subgraph study:drought
    S1 ---P1--drought\nstress--> S2
  end
  subgraph study:genome-ref
    P12>Download]
    x(Paper supplement) ---P12--> D4
  end
end
subgraph Assays
  subgraph assay:qRT-PCR
  S2 ---P2--> M1
  M1 ---P4--> M3
  M3 ---P5--> D1
  end
  subgraph assay:SDS-gel
    S2 ---P3--> M2
    M2 ---P8--> M5
    M5 ---P9--> D3
  end
  subgraph assay:RNA-Seq
    M1 ---P6--> M4
    M4 ---P7--> D2
  end
  subgraph assay:western Blot
    M5 ---P10--> M6
  end
end
subgraph Worklows/Runs
  subgraph workflow:mapping
      D2 --- P11
      D4 --- P11    
  end
  subgraph run
    P11 --> D5
  end
end
%% Add legend
subgraph Legend
    Sx(Sample)    
    Px>Process]
    Mx(Material)    
    Dx(Data)
end
%% Defining node styles
  classDef S fill:#b4ce82, stroke:#333;
  classDef M fill:#ffc000;
  classDef D fill:#c21f3a,color:white;
  classDef P stroke-width:0px;  
%% Assigning styles to nodes
  class Sx,S1,S2,S4 S;
  class Mx,M1,M2,M3,M4,M5,M6 M;
  class Dx,D1,D2,D3,D4,D5 D;
  class Px,P1,P2,P3,P4,P5,P6,P7,P8,P9,P10,P11,P12,P13 P;
%% Box style
style Worklows/Runs fill:#fff, stroke-width:2px, stroke:#333;
style Studies fill:#fff, stroke-width:2px, stroke:#333;
style Assays fill:#fff, stroke-width:2px, stroke:#333;
</div>

# Add a new study and sample set

<div class="mermaid">
%%{
  init: {
    'theme': 'base',
    'themeVariables': {
      'background': '#fff',
      'lineColor': '#2d3e50',
      'primaryTextColor': '#2d3e50'
    }
  }
}%%
graph LR
%% Nodes
  S1(Seeds)
  S2(Leaves)
  M1(RNA)
  M2(protein)
  M3(cDNA)
  M4(RNASeq Libraries)
  M5(SDS-gel)
  M6(western blot)
  P1>plant growth]
  P2>RNA extraction]
  P3>protein extraction]
  P4>cDNA synthesis]
  P5>qRT-PCR]
  P6>Library preparation]
  P7>Next Generation Sequencing]
  P8>SDS Page]
  P9>taking a photo]
  P10>Immunoblotting]
  P11>mapping]
  D1("qRT results")
  D2(fastq files)
  D3(Image of \n SDS gel)
  D4(reference \n genome)
  D5(count table)  
%% Links
subgraph Studies
  subgraph study:drought
    S1 ---P1--drought\nstress--> S2
  end
  subgraph study:heat
    P13>plant growth] 
    S1 ---P13--heat\nstress--> S4(Leaves)
  end
  subgraph study:genome-ref
    P12>Download]
    x(Paper supplement) ---P12--> D4
  end
end
subgraph Assays
  subgraph assay:Another Assay
    P14>Process XY]
    D6(Output XY)
    S4 ---P14--> D6
  end
  subgraph assay:qRT-PCR
    S2 ---P2--> M1
    M1 ---P4--> M3
    M3 ---P5--> D1
  end
  subgraph assay:SDS-gel
    S2 ---P3--> M2
    M2 ---P8--> M5
    M5 ---P9--> D3
  end
  subgraph assay:RNA-Seq
    M1 ---P6--> M4
    M4 ---P7--> D2
  end
  subgraph assay:western Blot
    M5 ---P10--> M6
  end
end
subgraph Worklows/Runs
  subgraph workflow:mapping
      D2 --- P11
      D4 --- P11    
  end
  subgraph run
    P11 --> D5
  end
end
%% Add legend
subgraph Legend
    Sx(Sample)    
    Px>Process]
    Mx(Material)    
    Dx(Data)
end
%% Defining node styles
  classDef S fill:#b4ce82, stroke:#333;
  classDef M fill:#ffc000;
  classDef D fill:#c21f3a,color:white;
  classDef P stroke-width:0px;  
%% Assigning styles to nodes
  class Sx,S1,S2,S4 S;
  class Mx,M1,M2,M3,M4,M5,M6 M;
  class Dx,D1,D2,D3,D4,D5,D6 D;
  class Px,P1,P2,P3,P4,P5,P6,P7,P8,P9,P10,P11,P12,P13,P14 P;
%% Box style
style Worklows/Runs fill:#fff, stroke-width:2px, stroke:#333;
style Studies fill:#fff, stroke-width:2px, stroke:#333;
style Assays fill:#fff, stroke-width:2px, stroke:#333;
</div>

# What about computational workflows?

:bulb: On a side note, the above is a very wet-lab heavy example. However, conceptually the same applies to computational workflows. Coders oftentimes design their scripts, workflows and pipelines in successive modules with defined inputs and outputs.

---


# Where do I store my ARC?

---

# ARC storage and sharing

![](./../../../images/arc-storagelocations-withnotes.drawio.png)

---

# ARC storage and sharing

![w:600](./../../../images/arc-storagelocations-withnotes.drawio.png)

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
---

