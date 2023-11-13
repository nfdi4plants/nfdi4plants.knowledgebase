---
marp: true
theme: marp-theme_dataplant-ceplas-mibinet-ccby
paginate: true
license: '[CC-BY 4.0](https://creativecommons.org/licenses/by/4.0/)'
title: RDM Fundamentals
author:
- name: Dominik Brilhaus
  github: https://github.com/brilator
  orcid: https://orcid.org/0000-0001-9021-3197
- name: Hajira Jabeen
  github: https://github.com/HajiraJabeen
  orcid: https://orcid.org/0000-0003-1476-2121
---

# RDM fundamentals

Dominik Brilhaus
Sept 20th, 2023

---

# Legal aspects of RDM

---

# Different laws touched by RDM

![w:700](././../../../img/Hartmann_TerraIncognita-Forschungsdaten-RechtlicheHeimat.png)

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

![w:400](././../../../img/creative_commons_brochure.png)

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
![w:500](./../../../img/Forschungsdaten-Policy-Kit-Abb2.png)


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

![bg right:40% width:400](./../../../img/repositories_genericRepos_collage.drawio.svg)

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

![w:900](././../../../img/exercise_PIDs_img1.png)

<span class="footer-reference"> https://doi.org/10.1093/plcell/koab243</span>

---

# Globally unique, stable, persistent identifiers (PIDs)

- Long-term findability
- Make data, digital objects, people, … uniquely identifiable
- Diminish “dead links”
- Cope with name changes

![bg right width:500](././../../../img/pid_collage.drawio.svg)

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

![w:900](././../../../img/data-stores.drawio.svg)

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

![w:800](././../../../img/3-2-1-backup-rule.drawio.svg)

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

![bg right:50% w:800](./../../../img/DataSharing_Cloud_img6.png)

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