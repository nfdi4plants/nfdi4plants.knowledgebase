---
marp: true
theme: marp-theme_dataplant-ceplas-mibinet-ccby
paginate: true
license: '[CC-BY 4.0](https://creativecommons.org/licenses/by/4.0/)'
title: Welcome and Intro
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

# House-keeping

Pad: https://pad.hhu.de/Aem023liTWKyfPysU0H8Gw
 
---

# Your motivation

<style scoped>

section {
    font-size: 24px;
}
</style>

- how to **organise** and handle the data collected from my experiments
- grasp important concepts on **research data management**
- make data **available to the others** in the work group
- store the data in a sorted way to allow **reproducibilty** and **not loose any important data**
- learn how to **store** my data correctly
- help others to **find** important data
- familiarize myself with systems and organizing data in an easy but also **time efficient way**
- data has to be **accessible and usable** for other members of the project
- generate data that can be used by the **other projects**
- know how **data (including metadata)** should be structured and integrated uniformly in the ARC
- learn to build **ARCs** in order to have the data produced during the PhD in an organised manner
- ...

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
09:30 - 10:45 | Welcome and intro to RDM
10:45 - 11:00 | *Short break*
11:00 - 12:00 | Intro to DataPLANT and ARC
12:00 - 13:00 | *Lunch*
13:00 - 15:30 | ARC Demo and ARC Hands-on

</div>

<div class="columns-right">

## Day 2

Time | Topics
-------- | --------
09:30 - 10:30 | ARC Feedback session
10:30 - 10:45 | *Short break*
10:45 - 12:00 | ISA and Metadata
12:00 - 13:00 | *Lunch*
13:00 - 15:00 | Hands-on Swate
15:00 - 15:30 | Wrap-up

</div>
</div>

---

# Introduce yourselves

- UoC / HHU
- CEPLAS / MibiNet
- Used code / programming language before
- Has an ORCID

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

# The Research Data Lifecycle ***is mutable***

![h:500](./../../../img/ResearchDataLifecycle_seq9.png)

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

---

# FAIR

- **F**indable
- **A**ccessible
- **I**nteroperable
- **R**eusable

https://doi.org/10.1038/sdata.2016.18

![bg right w:600](./../../../img/wilkinson2016-FAIR.png)

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

# Is your data FAIR?

**F**indable | **A**ccessible | **I**nteroperable | **R**eusable

- Where do you store your data?
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

![w:900](././../../../img/data_fragmentation_CEPLAS.png)

---

# Scattered Data Silos

![w:900](././../../../img/data_fragmentation_CEPLAS_MibiNet_TRR.png)

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
