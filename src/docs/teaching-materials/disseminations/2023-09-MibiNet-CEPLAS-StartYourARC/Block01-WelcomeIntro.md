---
marp: true
theme: marp-theme_dataplant-ceplas-mibinet-ccby
paginate: true
license: '[CC-BY 4.0](https://creativecommons.org/licenses/by/4.0/)'
title: Welcome and Intro to RDM
author:
- name: Dominik Brilhaus
  github: https://github.com/brilator
  orcid: https://orcid.org/0000-0001-9021-3197
---


# Block 1 &ndash; Welcome and Intro

<style scoped>section {background: none; background-color: white}</style>
<!-- _paginate: false -->

September 21st, 2023
 

<div style="position: fixed; bottom: 10%; right: 40%;">
  <div class="profile-picture">
    <img src="https://www.biological-data-science.hhu.de/fileadmin/_processed_/8/c/csm_Sabrina_Zander_3c8daca973.jpg" alt="Sabrina Zander" style="position:absolute; height: auto; width: auto; top:65%; left: 0%; transform:translateY(-50%);"> 
  </div>

  <div>

  Sabrina Zander <br> [MibiNet](https://www.sfb1535.hhu.de/projects/research-area-z/z03)
  </div>
</div>

<div style="position: fixed; bottom: 10%; right: 10%;">
  <div class="profile-picture">
    <img src="https://www.ceplas.eu/fileadmin/_processed_/d/c/csm_Brilhaus_Dominik_4fd48a61a2.jpeg" alt="Dominik Brilhaus">
  </div>

  <div>

  Dominik Brilhaus <br> [CEPLAS Data Science](https://www.ceplas.eu/en/research/data-science-and-data-management/)

  </div>

</div>

---

# Welcome

---

# About us



---

# Goals

- Appreciate FAIR principles
- Tools and services for FAIR data management
- Effectively manage your own research data
- Communication and terminology

<br>
  
:bulb: In this workshop we focus more on **how** and less on **why**

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

![h:500](./../../../img/ResearchDataLifecycle_seq1.png)

---

# The Research Data Lifecycle

![h:500](./../../../img/ResearchDataLifecycle_seq2.png)

---

# The Research Data Lifecycle

![h:500](./../../../img/ResearchDataLifecycle_seq3.png)

---

# The Research Data Lifecycle

![h:500](./../../../img/ResearchDataLifecycle_seq4.png)

---

# The Research Data Lifecycle

![h:500](./../../../img/ResearchDataLifecycle_seq5.png)

---

# The Research Data Lifecycle

![h:500](./../../../img/ResearchDataLifecycle_seq6.png)

---

# The Research Data Lifecycle

![h:500](./../../../img/ResearchDataLifecycle_seq7.png)

---

# The Research Data Lifecycle 

![h:500](./../../../img/ResearchDataLifecycle_seq9.png)

<!-- ################# -->
<!-- Source to following slide(s) -->
<!-- ./bricks/exercise_014_fair.md -->
<!-- ################# -->


---

# Have you ever heard about the <br> **FAIR principles**?

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
-->

<!-- ################# -->
<!-- Source to following slide(s) -->
<!-- ./bricks/lesson_018_FAIR_intro.md -->
<!-- ################# -->


<!-- TODO

- Illustrate the development since
- tentatively touch on the implications
  - researchers
  - infrastructures
  - stakeholders

 -->

---

# The FAIR guiding principles for scientific data management and stewardship

![bg right fit](./../../../img/FAIR_Principles_002.svg)

https://doi.org/10.1038/sdata.2016.18


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

![](./../../../img/FAIR_Benefits.png)


---

# Scattered Data Silos
 
![w:900](./custom/data_fragmentation_CEPLAS_seq1.png)

---

# Scattered Data Silos

![w:900](./custom/data_fragmentation_CEPLAS_MibiNet_TRR.png)

<!-- TODO

- enlarge picture 

 -->

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

![](./../../../img/FAIR_unFAIR_Stories.png)


---

# 3-2-1 backup rule
<!--replace figure-->
- **Three** different copies
- **Two** storage media
- **One** copy offsite

![bg w:500](./custom/backup_rule.png)


--- 


# Version control / Track changes

It’s good practice to document:
- What was changed?
- Who is responsible?
- When did it happen?
- Why the changes?

---



# Data Sharing - while working collaboratively

---

# Sharing is caring

- Research = Collaboration = Sharing
  - interaction
  - knowledge exchange
  - input from peers
  - elaborate, initiate or expand collaborations
- Sharing saves time and resources
  - common pipelines for data analysis
  - prevent redundant or overlapping investigations

**Sharing research data is the key to every successful research project.**

---

# Collaborative platforms

### Personal use
- GoogleDrive <https://drive.google.com/>
- Microsoft OneDrive / Sharepoint /Teams <https://onedrive.live.com/>
- Apple iCloud <https://www.icloud.com>

### Business solutions
- Owncloud https://owncloud.com/
- Nextcloud https://nextcloud.com/de/
- google cloud, aws, azure, etc.

---

# Collaborative platforms
### Institute's solutions
- local clouds, NAS server
- regional cloud solutions
- are guests allowed?

---

# Cloud Services

![bg right:50% w:800](./../../../img/DataSharing_Cloud_img6.png)

<span style="color:#B4CE82">✓ Documents</span>  
<span style="color:#B4CE82">✓ Small data</span>  
<span style="color:#B4CE82">✓ Presentations</span>  

<span style="color:#c21f3a">X  Code</span>  
<span style="color:#c21f3a">X  Data analytical projects</span>  
<span style="color:#c21f3a">X  Big (“raw”) data</span>  

---






# Using cloud services for text documents

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

### <span style="color:#B4CE82">Good</span>

- Collaborative writing
- Shared text
- Easy format, and conversion

</div>
<div class="columns-right">

### <span style="color:#F9CD69">Intermediate</span>

- Flexibility in drawing, editing
- Sometimes learning curve

</div>

<div class="columns-right">

### <span style="color:#c21f3a">Limited</span>  

- Too large files
- Security issues
- Proprietary documents

</div>
</div>

---

# Collaborative platforms

- Easy sharing and online collaboration
- Cloud based
- Unlimited open sharing (any one with link can edit)
- Closed sharing (sharing upon invitation)
- Limited project size (e.g. not suitable for large projects with many files/folders) 
- Paid
- Version control
- Easy format conversion
- Sustainable format
- Security?

---


# HHU Düsseldorf - Links

- Research Data Management Competence Center: https://www.fdm.hhu.de
- Support for research including HPC: https://www.zim.hhu.de/servicekatalog/forschungsunterstuetzung 
- Processing & storing data: https://www.zim.hhu.de/servicekatalog/rechnen-und-speichern

