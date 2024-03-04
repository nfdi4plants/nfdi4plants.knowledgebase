---
marp: true
paginate: true
theme: marp-theme_dataplant-ceplas-ccby
license: '[CC-BY 4.0](https://creativecommons.org/licenses/by/4.0/)'
title: ARC Ecosystem Demo
date: 2023-09-20
author:
- name: Dominik Brilhaus
  github: https://github.com/brilator
  orcid: https://orcid.org/0000-0001-9021-3197
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

![bg left w:350](./../../../img/RDMkit-data_life_cycle_9.svg)

<span class="footer-reference">https://rdmkit.elixir-europe.org, [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)</span>

---

# Collect <img align="left" class="center" style="height:75px" src='./../../../img/Screenshot-RDMkit-02-collect.png'/>

![width:800](./../../../img/ARC_fillWithData_experimental.png)

<!-- 

- create study folder
  - take a picture (add more demo pictures)
- create assay folder
  - add fastq data

-->

---

# Process (e.g. annotate)  <img align="left" class="center" style="height:75px" src='./../../../img/Screenshot-RDMkit-03-process.png'/>

<style scoped>

section p img {
width: 900px;
height: 400px;
object-fit: cover;
object-position: 50% 60%;
/* display: block; */;
}
</style>


![](./../../../img/Swate_metadataTemplates.png)

<!-- 

- annotate plant samples
- annotate rnaseq extraction -->

---

# Analyse <img align="left" class="center" style="height:75px" src='./../../../img/Screenshot-RDMkit-04-analyse.png'/>

<!-- 
- run fastqc
- receive back results
-->

![w:800](./../../../img/tpj16474-fig-0005-m.jpg)

<span class="footer-reference"> Weil, H.L., Schneider, K., et al. (2023), PLANTdataHUB: a collaborative platform for continuous FAIR data sharing in plant research. Plant J. https://doi.org/10.1111/tpj.16474 </span>

---

# Preserve  <img align="left" class="center" style="height:75px" src='./../../../img/Screenshot-RDMkit-05-preserve.png'/>

<!--
1. Validation: CQC on each DataHUB commit
2. Publication: DOI
-->

![h:400](./../../../img/tpj16474-fig-0008-m-modified.png)

<span class="footer-reference"> adapted from Weil, H.L., Schneider, K., et al. (2023), PLANTdataHUB: a collaborative platform for continuous FAIR data sharing in plant research. Plant J. https://doi.org/10.1111/tpj.16474 </span>

---

# Preserve and publish <img align="left" class="center" style="height:75px" src='./../../../img/Screenshot-RDMkit-05-preserve.png'/>

<!--
1. Validation: CQC on each DataHUB commit
2. Publication: DOI
-->

![h:400](././../../../img/tpj16474-fig-0008-m.jpg)

<span class="footer-reference"> Weil, H.L., Schneider, K., et al. (2023), PLANTdataHUB: a collaborative platform for continuous FAIR data sharing in plant research. Plant J. https://doi.org/10.1111/tpj.16474 </span>

---

# Share and collaborate <img align="left" class="center" style="height:75px" src='./../../../img/Screenshot-RDMkit-06-share.png'/>

![w:700](./../../../img/ARC_DataSharing_Experts02_img1.png)

---

# Reuse <img align="left" class="center" style="height:75px" src='./../../../img/Screenshot-RDMkit-07-reuse.png'/>

![w:800](./../../../img/tpj16474-fig-0001-m.jpg)

<!-- 
- via ARC https://arcregistry.nfdi4plants.org/arcsearch
- via ISA https://arcregistry.nfdi4plants.org/isasearch 
-->

<span class="footer-reference"> Weil, H.L., Schneider, K., et al. (2023), PLANTdataHUB: a collaborative platform for continuous FAIR data sharing in plant research. Plant J. https://doi.org/10.1111/tpj.16474 </span>

---

# **Mutable** data life cycle

![w:700](./../../../img/tpj16474-fig-0006-m.jpg)

<!-- 

- Invite other (demo) account
- add notes from there
-->

<span class="footer-reference"> Weil, H.L., Schneider, K., et al. (2023), PLANTdataHUB: a collaborative platform for continuous FAIR data sharing in plant research. Plant J. https://doi.org/10.1111/tpj.16474 </span>

---

# Plan (ARC scale) <img align="left" class="center" style="height:75px" src='./../../../img/Screenshot-RDMkit-01-plan.png'/>

![w:800](./../../../img/tpj16474-fig-0007-m.jpg)

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

# Plan (proposal scale) <img align="left" class="center" style="height:75px" src='./../../../img/Screenshot-RDMkit-01-plan.png'/>

<span class="footer-reference">**Zhou *et al.* (2023)**, DataPLAN: a web-based data management plan generator for the plant sciences, bioRxiv 2023.07.07.548147; doi: https://doi.org/10.1101/2023.07.07.548147 </span>

https://dmpg.nfdi4plants.org

![w:800](././../../../img/zhou2023-dataplan.png)

---

---

# Contributors

Slides presented here include contributions by

- name: Dominik Brilhaus
  github: https://github.com/brilator
  orcid: https://orcid.org/0000-0001-9021-3197
