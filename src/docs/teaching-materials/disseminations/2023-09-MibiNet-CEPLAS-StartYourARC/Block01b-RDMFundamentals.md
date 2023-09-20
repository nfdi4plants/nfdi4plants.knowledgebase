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
---

# RDM fundamentals

- [RDM fundamentals](#rdm-fundamentals)
- [Storage](#storage)
- [sharing](#sharing)
- [Data Management Plan](#data-management-plan)
- [Version Control](#version-control)
- [Data Repositories](#data-repositories)
- [PIDs](#pids)
- [3-2-1 backup rule](#3-2-1-backup-rule)
- [Version control / Track changes](#version-control--track-changes)
- [Data Sharing - while working collaboratively](#data-sharing---while-working-collaboratively)
- [Sharing is caring](#sharing-is-caring)
- [Collaborative platforms](#collaborative-platforms)
- [Collaborative platforms](#collaborative-platforms-1)
- [Cloud Services](#cloud-services)
- [Using cloud services for text documents](#using-cloud-services-for-text-documents)
- [Collaborative platforms](#collaborative-platforms-2)
- [Your local support](#your-local-support)
- [HHU Düsseldorf - Links](#hhu-düsseldorf---links)

---

# Legal aspects of RDM

---

# Different laws touched by RDM

![w:700](./custom/Hartmann_TerraIncognita-Forschungsdaten-RechtlicheHeimat.png)

<span class="reference">Hartmann, Thomas. (2019). Rechtsfragen: Institutioneller Rahmen und Handlungsoptionen für universitäres FDM. Zenodo. https://doi.org/10.5281/zenodo.2654306</span>

---

# Open Access (OA) categories

- Gold: Published in an open-access journal that is indexed by the [DOAJ](https://doaj.org).
- Green: Toll-access on the publisher page, but there is a free copy in an OA repository.
- Hybrid: Free under an open license in a toll-access journal.
- Bronze: Free to read on the publisher page, but without a clearly identifiable license.
- Closed: All other articles, including those shared only on an Academic Social Network or in Sci-Hub.

<span class="reference">Piwowar H et al. (2018), PeerJ https://doi.org/10.7717/peerj.4375</span>

---

# Open Science is more than Open Access

![w:900](https://www.frontiersin.org/files/Articles/855198/frma-07-855198-HTML/image_m/frma-07-855198-g001.jpg)

<span class="reference">Okafor et al. (2022) https://doi.org/10.3389/frma.2022.855198, Figure 1</span>

---

# Creative commons

Check out: https://creativecommons.org/about/cclicenses/

![w:400](./custom/creative_commons_brochure.png)

<span class="reference">adapted from https://wiki.creativecommons.org/images/0/01/6licenses-folded.pdf</span>

---

# Data protection

[GDPR](https://gdpr-info.eu/): General Data Protection Regulation

[DS-GVO](https://www.datenschutz-wiki.de/Datenschutz-Grundverordnung) (german): Datenschutz-Grundverordnung
- required measures: "Technische und organisatorische Maßnahmen" [(TOMs)](https://www.datenschutz-wiki.de/Technische_und_organisatorische_Ma%c3%9fnahmen)

---

# Use of biological materials

- MTA: material transfer agreement
- [Nagoya Protocol](https://www.cbd.int/abs/about/)
- DSI: [Digital sequence information](https://www.genres.de/en/access-and-benefit-sharing/digital-sequence-information)

---

# FAIR and CARE

![](https://images.squarespace-cdn.com/content/v1/5d3799de845604000199cd24/1567592451970-2R8XFL670QNMAGDRV7ED/Be+FAIR+and+CARE.png?format=2500w)

<span class="reference">https://www.gida-global.org/care</span>

---

# CARE principles

![bg right w:450](https://storage.googleapis.com/jnl-up-j-dsj-files/journals/1/articles/1158/submission/proof/1158-10-8531-1-17-20201104.png)

<span class="reference">https://datascience.codata.org/articles/10.5334/dsj-2020-043/</span>

---

# CEPLAS relevant data handling guidelines & policies

![width:1200](./custom/legalAspects_rdm_guidelines_img1.png)

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

# Storage

---

# Data sharing

---

# Versioning

---

# Publication

## Data publications

---

---

# Public data repositories

---

# Domain-specific data repositories

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

# Choosing a data repository

Domain-specific >> Generic >> Institutional

*Find repositories at:*

- <https://www.re3data.org>
- <https://fairsharing.org>

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

## PIDs

---

# 3-2-1 backup rule

<!-- - **Three** different copies
- **Two** storage media
- **One** copy offsite -->

![w:800](./custom/3-2-1-backup-rule.drawio.svg)

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

# Your local support

# HHU Düsseldorf - Links

- Research Data Management Competence Center: https://www.fdm.hhu.de
- Support for research including HPC: https://www.zim.hhu.de/servicekatalog/forschungsunterstuetzung 
- Processing & storing data: https://www.zim.hhu.de/servicekatalog/rechnen-und-speichern

