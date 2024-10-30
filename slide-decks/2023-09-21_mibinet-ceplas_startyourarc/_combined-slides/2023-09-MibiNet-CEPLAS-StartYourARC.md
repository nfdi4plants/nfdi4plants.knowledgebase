---
marp: true
theme: marp-theme_dataplant-ceplas-mibinet-ccby
paginate: true
title: 2023-09-MibiNet-CEPLAS-StartYourARC
date: 2024-10-29
---


# Block 0 &ndash; Preparation

<style scoped>section {background: none; background-color: white}</style>
<!-- _paginate: false -->

**before** September 21st, 2023

<div style="position: fixed; bottom: 10%; right: 40%;">
  <div class="profile-picture">
    <img src="https://www.biological-data-science.hhu.de/fileadmin/_processed_/8/c/csm-sabrina-zander-3c8daca973.jpg" alt="Sabrina Zander" style="position:absolute; height: auto; width: auto; top:65%; left: 0%; transform:translateY(-50%);"> 
  </div>

  <div>

  Sabrina Zander <br> [MibiNet](https://www.sfb1535.hhu.de/projects/research-area-z/z03)
  </div>
</div>

<div style="position: fixed; bottom: 10%; right: 10%;">
  <div class="profile-picture">
    <img src="https://www.ceplas.eu/fileadmin/_processed_/d/c/csm-brilhaus-dominik-4fd48a61a2.jpeg" alt="Dominik Brilhaus">
  </div>

  <div>

  Dominik Brilhaus <br> [CEPLAS Data Science](https://www.ceplas.eu/en/research/data-science-and-data-management/)

  </div>

</div>

---

# Checklist hands-on sessions

<style scoped>

ul{
  list-style-type: none; /* Remove bullets */
}
</style>

:bulb: Please prepare the following before the workshop:

- :white_check_mark: Register at DataPLANT
- :white_check_mark: Install ARCitect on your computer
- :white_check_mark: Install Swate on your computer
- :white_check_mark: Bring your own data
- :white_check_mark: Find your command line
- :white_check_mark: Install ARC Commander and dependencies on your computer
- :white_check_mark: Install VS Code

---

# DataPLANT Registration

If you do not have a DataPLANT account, please register at the <a href="https://register.nfdi4plants.org" target="_blank">DataPLANT website</a>.

![w:800](./../../../images/dataplant-registration.png)

---

## Role and consortium

Please add your `Project/consortium` (e.g. CEPLAS, SFB, TRR) and choose the role `Guest`

![bg right:40% fit](./../../../images/dataplant-registration-roles.png)

---

# ARCitect Installation

Please follow the instructions to install the latest version of ARCitect.

- <a href="https://nfdi4plants.org/nfdi4plants.knowledgebase/docs/ARCitect-Manual/arcitect_installation_macos.html" target="_blank">macOS</a>
- <a href="https://nfdi4plants.org/nfdi4plants.knowledgebase/docs/ARCitect-Manual/arcitect_installation_windows.html" target="_blank">Windows</a>

---

# Swate Installation

Please follow <a href="https://nfdi4plants.org/nfdi4plants.knowledgebase/docs/SwateManual/Docs01-Installing-Swate.html" target="_blank">these instructions</a> to install the latest version of Swate.

---

# Hands-on: Bring your own data

In the hands-on session, we would like to start creating an ARC together.
To do so, please bring some data!

This can be data of your current research project or an already published manuscript with supplemental data. Anything that you feel familiar with.

---

# Recommended for trouble-shooting

:bulb: We will likely not use the tools on the next few slides. However, as of now (September 2023), it's probably better to have them ready for trouble-shooting and to show some inner workings of the ARC.

---

## The command line

Find the **command-line interface (CLI)** on your system.

- On Windows: Enter `powershell` into the explorer path
- On MacOS: Search `terminal` via spotlight (&#8984; + &#9251;) or navigate to `Applications` -> `Utilities` -> `Terminal`

<br>

:bulb: In our tutorials we sometimes use *terminal*, *command-line interface (CLI)* and *powershell* interchangeably.

---

# ARC Commander Installation

Please install the latest version of the ARC Commander and dependencies for your operating system according to the <a href="https://nfdi4plants.org/nfdi4plants.knowledgebase/docs/ArcCommanderManual/index.html" target="_blank">manual's setup instructions</a>.

Check if the ARC Commander is functional by displaying the ARC Commander version and help menu:

```bash
arc --version
```

![bg right:30% width:300](./../../../images/arc-manual-setup.png)

---

## Have a simple text editor ready

- Windows Notepad
- MacOS TextEdit

Recommended text editor with code highlighting, git support, terminal, etc: <a href="https://code.visualstudio.com/" target="_blank">Visual Studio Code</a>

---

# Resources

### <img align="left" style="height:35px" src='https://raw.githubusercontent.com/nfdi4plants/Branding/7e7d442aafeaa767b9c14a63a16e459dadcbdaaf/logos/DataPLANT/dataplant-logo-minimal-rounded-bg-darkblue.svg'/> DataPLANT (nfdi4plants)

Website: <a href="https://nfdi4plants.org/" target="_blank">https://nfdi4plants.org/</a>
Knowledge Base: <a href="https://nfdi4plants.org/nfdi4plants.knowledgebase/" target="_blank">https://nfdi4plants.org/nfdi4plants.knowledgebase/</a>
DataHUB: <a href="https://git.nfdi4plants.org" target="_blank">https://git.nfdi4plants.org</a>
GitHub: <a href="https://github.com/nfdi4plants" target="_blank">https://github.com/nfdi4plants</a>

---

---

# Contributors

Slides presented here include contributions by

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
    <img src="https://www.biological-data-science.hhu.de/fileadmin/_processed_/8/c/csm-sabrina-zander-3c8daca973.jpg" alt="Sabrina Zander" style="position:absolute; height: auto; width: auto; top:65%; left: 0%; transform:translateY(-50%);"> 
  </div>

  <div>

  Sabrina Zander <br> [MibiNet](https://www.sfb1535.hhu.de/projects/research-area-z/z03)
  </div>
</div>

<div style="position: fixed; bottom: 10%; right: 10%;">
  <div class="profile-picture">
    <img src="https://www.ceplas.eu/fileadmin/_processed_/d/c/csm-brilhaus-dominik-4fd48a61a2.jpeg" alt="Dominik Brilhaus">
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

![h:500](./../../../images/researchdatalifecycle-seq1.png)

---

# The Research Data Lifecycle

![h:500](./../../../images/researchdatalifecycle-seq2.png)

---

# The Research Data Lifecycle

![h:500](./../../../images/researchdatalifecycle-seq3.png)

---

# The Research Data Lifecycle

![h:500](./../../../images/researchdatalifecycle-seq4.png)

---

# The Research Data Lifecycle

![h:500](./../../../images/researchdatalifecycle-seq5.png)

---

# The Research Data Lifecycle

![h:500](./../../../images/researchdatalifecycle-seq6.png)

---

# The Research Data Lifecycle

![h:500](./../../../images/researchdatalifecycle-seq7.png)

---

# The Research Data Lifecycle ***is mutable***

![h:500](./../../../images/researchdatalifecycle-seq9.png)

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

![bg right w:600](./../../../images/wilkinson2016-fair.png)

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

![](./../../../images/fair-benefits.png)

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

![w:900](././../../../images/data-fragmentation-ceplas.png)

---

# Scattered Data Silos

![w:900](././../../../images/data-fragmentation-ceplas-mibinet-trr.png)

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

![](./../../../images/fair-unfair-stories.png)

---


# RDM fundamentals

Dominik Brilhaus
Sept 20th, 2023

---

# Legal aspects of RDM

---

# Different laws touched by RDM

![w:700](././../../../images/hartmann-terraincognita-forschungsdaten-rechtlicheheimat.png)

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

![w:400](././../../../images/creative-commons-brochure.png)

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

![](https://images.squarespace-cdn.com/content/v1/5d3799de845604000199cd24/1567592451970-2R8XFL670QNMAGDRV7ED/Be+FAIR+and+care.png?format=2500w)

<span class="footer-reference">https://www.gida-global.org/care</span>

---

# CARE principles

![bg right w:450](https://storage.googleapis.com/jnl-up-j-dsj-files/journals/1/articles/1158/submission/proof/1158-10-8531-1-17-20201104.png)

<span class="footer-reference">https://datascience.codata.org/articles/10.5334/dsj-2020-043/</span>

---

# Research Data policies
![w:500](./../../../images/forschungsdaten-policy-kit-abb2.png)


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

# Public data repositories

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

# Generic data repositories

![bg right:40% width:400](./../../../images/repositories-genericrepos-collage.drawio.svg)

**Good**

- Allow publication of any kind of data Assign PIDs / DOIs
- Long-term accessible
- Very simple to use

**Intermediate**

- Only generic / high-level metadata schema
- Limited reusability

---

# Peristent Identifiers (PIDs)

--- 

# Spot the PIDs

![w:900](././../../../images/exercise-pids-img1.png)

<span class="footer-reference"> https://doi.org/10.1093/plcell/koab243</span>

---

# Globally unique, stable, persistent identifiers (PIDs)

- Long-term findability
- Make data, digital objects, people, … uniquely identifiable
- Diminish “dead links”
- Cope with name changes

![bg right width:500](././../../../images/pid-collage.drawio.svg)

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

# Data stores

![w:900](././../../../images/data-stores.drawio.svg)

---

# Backup vs. Archive

   <br>    |    Backup     |    Archive
-------|-----------|-----------
Storage type  | Short-, mid-term  | Long-term
Purpose  | Disaster recovery | Long-term storage, compliance
Reason  | Duplication  | Migration
Usage  | Work in progress  | Cold, Unused data
Changes  | Short-term updates  | No updates
Trend  | Cyclic, Replacement  | Growing
Latency  | Short/Costly  | High/Cheaper

---

# 3-2-1 backup rule

![w:800](././../../../images/3-2-1-backup-rule.drawio.svg)

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

# Data Sharing

---

# Cloud Services

![bg right:50% w:800](./../../../images/datasharing-cloud-img6.png)

<span style="color:#B4CE82">✓ Documents</span>  
<span style="color:#B4CE82">✓ Small data</span>  
<span style="color:#B4CE82">✓ Presentations</span>  

<span style="color:#c21f3a">X  Code</span>  
<span style="color:#c21f3a">X  Data analytical projects</span>  
<span style="color:#c21f3a">X  Big (“raw”) data</span>  

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

---

# Contributors

Slides presented here include contributions by

- name: Dominik Brilhaus
  github: https://github.com/brilator
  orcid: https://orcid.org/0000-0001-9021-3197
- name: Hajira Jabeen
  github: https://github.com/HajiraJabeen
  orcid: https://orcid.org/0000-0003-1476-2121
---


# Block 2 &ndash; Intro to DataPLANT and ARC

---

# DataPLANT &ndash; <br>The NFDI4Plants

![bg right:50% width:500px](./../../../images/dataplant-taskareas.svg)

- NFDI: "Nationale Forschungsdaten Infrastruktur" &ndash; [www.nfdi.de](https://www.nfdi.de/)
- Funded since end of 2020

---

# Data Stewardship between DataPLANT and the community  <!-- fit -->

![w:880](././../../../images/dataplant-collaborationceplas-mibinet.drawio.png)

---

# Annotated Research Context (ARC)

![width:950](./../../../images/arc-datacentricintegration-img1.png)

---

# What does an ARC look like?

![width:950](./../../../images/arc-fillwithdata-seq1.png)

---

# What does an ARC look like?

![width:950](./../../../images/arc-fillwithdata-seq2.png)

---

# What does an ARC look like?

![width:950](./../../../images/arc-fillwithdata-seq3.png)

---

# What does an ARC look like?

![width:950](./../../../images/arc-fillwithdata-seq4.png)

---

# What does an ARC look like?

![width:950](./../../../images/arc-fillwithdata-seq5.png)

---

# What does an ARC look like?

![width:950](./../../../images/arc-fillwithdata-seq6.png)

---

![left h:640](./../../../images/user-challenges-002.svg)

---

![bg cover](./../../../images/dataplant-bigpicture-seq1.png)

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


<style>

figcaption {
  font-size: 10px;
  font-style: italic;
}

.reference {
  font-size:15px;
  line-height: 1.2em;
  position: fixed;
  left: 50%;
  bottom: 0px;
  transform: translate(-50%, -50%);
  margin: 0 auto;
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

# ARC Ecosystem Demo

"A FAIR RDM journey along a (mutable) data life cycle"

Dominik Brilhaus

<br>

![bg left w:350](./../../../images/rdmkit-data-life-cycle-9.svg)

<span class="footer-reference">https://rdmkit.elixir-europe.org, [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)</span>

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

# Plan (ARC scale) <img align="left" class="center" style="height:75px" src='./../../../images/screenshot-rdmkit-01-plan.png'/>

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

# Plan (proposal scale) <img align="left" class="center" style="height:75px" src='./../../../images/screenshot-rdmkit-01-plan.png'/>

<span class="footer-reference">**Zhou *et al.* (2023)**, DataPLAN: a web-based data management plan generator for the plant sciences, bioRxiv 2023.07.07.548147; doi: https://doi.org/10.1101/2023.07.07.548147 </span>

https://dmpg.nfdi4plants.org

![w:800](././../../../images/zhou2023-dataplan.png)

---

---

# Contributors

Slides presented here include contributions by

- name: Dominik Brilhaus
  github: https://github.com/brilator
  orcid: https://orcid.org/0000-0001-9021-3197

---


# Check-in and ARC Commander Hands-on

Dominik Brilhaus &ndash; CEPLAS Data Science

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

![bg right width:400](./../../../images/demo-data-screenshot.png)

---

## Goal

- Structure,
- Annotate, and
- Share your experimental data.

<br>

:bulb: We'll talk about data annotation later

---


## Structure your data

![width:800](./../../../images/arc-fillwithdata-experimental.png)

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
arc investigation create -i TalinumPhotosynthesis --title TalinumPhotosynthesis --description "This is a very interesting investigation about life and photosynthesis"
```

---

## Add (at least one) person

```bash
arc investigation person register --lastname Brilhaus --firstname Dominik --email brilhaus@hhu.de --affiliation CEPLAS
```

<br>

> :bulb: For each person added, the minimum information is
> lastname | firstname | email | affiliation

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

![w:650](./../../../images/arc-datasharing-experts02-img1.png)

---

# Upload your local ARC to the DataHUB

```bash
arc sync -r https://git.nfdi4plants.org/<username>/arc-demo
```

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

## Sort the demo data into the ARC

Identify "raw dataset(s)" and "protocols" and move them to the proper subfolders in the ARC.

![bg right w:500](./../../../images/demo-data-screenshot.png)

---


## Sync your ARC to the DataHUB

To save the changes, sync the ARC to the DataHUB including a message.

```bash
arc sync -m "sorted the demo data"
```

---

## Check the ARC in the DataHUB

- Navigate to `https://git.nfdi4plants.org/<username>/arc-demo` to visit your ARC in the DataHUB

---

## Your ARC is ready

![bg 80% right:75%](./../../../images/demo-data-screenshot.png)
![bg 80%](./../../../images/demo-arc-screenshot.png)

---

---

# Contributors

Slides presented here include contributions by

- name: Dominik Brilhaus
  github: https://github.com/brilator
  orcid: https://orcid.org/0000-0001-9021-3197

---


# Block 3 &ndash; ARCitect and hands-on

<style scoped>section {background: none; background-color: white}</style>
<!-- _paginate: false -->

---

# ARCitect installation

Please install the latest version of the ARCitect: https://github.com/nfdi4plants/ARCitect

:fire: (released September 20th, 2023) :fire:

---

# Download the demo data

```bash
git clone "https://demo-user:1_eznikmzxzARAbUxxnF@git.nfdi4plants.org/teaching/demo-arc_level0.git"
```

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

![bg right:30% w:500](././../../../images/arcitect-talinumphotosynthesis.png)

---

# Add a description to your investigation

![w:800](./../../../images/arcitect-talinumphotosynthesis-investigationmetadata.png)

---

# Add (at least one) contributor


![bg right w:500](./../../../images/arcitect-talinumphotosynthesis-investigationperson.png)

---

# Add a study

by clicking "Add Study" and entering an identifier for your study

Use **talinum_drought** as an identifier

![bg right w:500](././../../../images/arcitect-talinumphotosynthesis-study.png)

---

# Study panel

In the study panel you can add

- general metadata,
- people, and
- publications
- data process information

![bg right w:500](././../../../images/arcitect-talinumphotosynthesis-studypanel.png)

---


# Add an assay

by clicking "Add Assay" and entering an identifier for your assay

Add two assays with **rnaseq** and **metabolomics** as an identifier
![bg right w:500](././../../../images/arcitect-talinumphotosynthesis-assay.png)

---

# Link your assay to a study

You can either
- link your new assay to an existing study in your ARC or
- create a new one
  
Link your assays to your **talinum_drought** study


![bg right w:500](././../../../images/arcitect-talinumphotosynthesis-assay2.png)

---

# Add information about your assay

In the assay panel you can

1. link or unlink the assay to studies, and
2. define the assay's
   - measurement type
   - technology type, and
   - technology platform.
3. add data process information

![bg right w:500](././../../../images/arcitect-talinumphotosynthesis-assaypanel.png)

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

💡 protocols can directly imported via ARCitect

💡 to add multiple datasets folders, they have to be added manually via file browser 

---

# Login to the DataHUB

Click **Login** (1) in the sidebar to login to the DataHUB.

:bulb: This automatically opens your browser at the DataHUB (https://git.nfdi4plants.org) and asks you to login, if you are not already logged in. 

![bg right:40% w:250](./../../../images/arcitect-help-sidebar.drawio.svg)

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

![bg right w:500](././../../../images/cqc-error-email2.png)

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


# Block 5 &ndash; Metadata and ISA

<style scoped>section {background: none; background-color: white}</style>
<!-- _paginate: false -->

September 28th, 2023

<div style="position: fixed; bottom: 10%; right: 40%;">
  <div class="profile-picture">
    <img src="https://www.biological-data-science.hhu.de/fileadmin/_processed_/8/c/csm-sabrina-zander-3c8daca973.jpg" alt="Sabrina Zander" style="position:absolute; height: auto; width: auto; top:65%; left: 0%; transform:translateY(-50%);">
  </div>

  <div>

  Sabrina Zander <br> [MibiNet](https://www.sfb1535.hhu.de/projects/research-area-z/z03)
  </div>
</div>

<div style="position: fixed; bottom: 10%; right: 10%;">
  <div class="profile-picture">
    <img src="https://www.ceplas.eu/fileadmin/_processed_/d/c/csm-brilhaus-dominik-4fd48a61a2.jpeg" alt="Dominik Brilhaus">
  </div>

  <div>

  Dominik Brilhaus <br> [CEPLAS Data Science](https://www.ceplas.eu/en/research/data-science-and-data-management/)

  </div>

</div>

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


# Block 6 &ndash; Swate hands-on

<style scoped>section {background: none; background-color: white}</style>
<!-- _paginate: false -->

September 28th, 2023
 

<div style="position: fixed; bottom: 10%; right: 40%;">
  <div class="profile-picture">
    <img src="https://www.biological-data-science.hhu.de/fileadmin/_processed_/8/c/csm-sabrina-zander-3c8daca973.jpg" alt="Sabrina Zander" style="position:absolute; height: auto; width: auto; top:65%; left: 0%; transform:translateY(-50%);"> 
  </div>

  <div>

  Sabrina Zander <br> [MibiNet](https://www.sfb1535.hhu.de/projects/research-area-z/z03)
  </div>
</div>

<div style="position: fixed; bottom: 10%; right: 10%;">
  <div class="profile-picture">
    <img src="https://www.ceplas.eu/fileadmin/_processed_/d/c/csm-brilhaus-dominik-4fd48a61a2.jpeg" alt="Dominik Brilhaus">
  </div>

  <div>

  Dominik Brilhaus <br> [CEPLAS Data Science](https://www.ceplas.eu/en/research/data-science-and-data-management/)

  </div>

</div>

---



# Goals

- Get familiar with ISA metadata and Swate
- Annotate data in your ARC

---

## Check Swate installation

:ballot_box_with_check: Make sure [Swate is installed](./../SwateManual/Docs01-Installing-Swate.html):

1. Open Excel (online or Desktop)
2. Go to the `Insert` tab: Click the arrow next to "My Add-ins". There you should be able to select Swate.
3. Go to the `Data` tab: you should see the Swate (Core) add-in.

:bulb: Alternatively, you can use [Swate standalone](https://swate-alpha.nfdi4plants.org)  
(:warning: this is however *work in progress* and likely to change)

---

## Have a simple text editor ready

- Windows Notepad
- MacOS TextEdit

Recommended text editors with code highlighting:

- Visual Studio Code <https://code.visualstudio.com/>
- BBEdit <https://www.barebones.com/products/bbedit/>
- Sublime <https://www.sublimetext.com/>

---


## Download the demo data

```bash
git clone "https://demo-user:5ehDYeHcqP2MqVXsNNPu@git.nfdi4plants.org/teaching/demo-arc_level1.git"
```

---

## Where we left off last time


👩‍💻 Initiated an ARC
📂 Structured and ...  
🌐 Shared with collaborators

<br>

**Today** we want to 

<img align="left" height=35px src='https://raw.githubusercontent.com/nfdi4plants/Branding/master/icons/Swate/Excel/Core/swate-c-40x40.png'/> ... **annotate the experimental data**

![bg right:40% width:400](./../../../images/demo-arc-screenshot.png)

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

> :bulb: Each table is by default created with one input (`Source Name`) and one output (`Sample Name`) column  

> :bulb: Only one annotation table can be added per Excel sheet

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

> :bulb: This adds three columns to your table, one visible and **two** hidden.

![bg right:30% w:400](./../../../images/swate-addbuildingblock-exp.jpg?v31.01.22)


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

![w:1000](./../../../images/demo-isa.study1.png)

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

# Annotation with ARCitect

--- 

## Process Information

![w:700](././../../../images/arcitect-assay-data.png)

<!-- TODO Update ARCitect Annotation 
Examples, Excelsheet... --> 

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

