---
marp: true
paginate: true
theme: marp-theme_dataplant-ceplas-mibinet-ccby
license: '[CC-BY 4.0](https://creativecommons.org/licenses/by/4.0/)'
title: ARC Ecosystem Demo
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

<br>

![w:350](./../../../img/RDMkit-data_life_cycle_9.svg)

<span class="reference"> https://rdmkit.elixir-europe.org, [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)</span>

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

![w:800](./../../../img/Weil2023-TPJ-PlantDataHub-Fig3.png)


<!-- ![w:500](../../../img/DataPLANT_ARC_SinglePointofEntry.svg)
![w:700](../../../img/DataPLANT_ARC_Workflows.svg) -->

---

# Preserve  <img align="left" class="center" style="height:75px" src='./../../../img/Screenshot-RDMkit-05-preserve.png'/>

<!--
1. Validation: CQC on each DataHUB commit
2. Publication: DOI
-->

![h:400](./../../../img/Weil2023-TPJ-PlantDataHub-Fig6a.png)

<span class="reference"> adapted from **Weil, Schneider *et al.*** (2023) "PLANTdataHUB: A collaborative platform for continuous FAIR data sharing in plant research",  The Plant Journal, https://doi.org/10.1111/tpj.16474 (*in production*) </span>

---

# Preserve and publish <img align="left" class="center" style="height:75px" src='./../../../img/Screenshot-RDMkit-05-preserve.png'/>

<!--
1. Validation: CQC on each DataHUB commit
2. Publication: DOI
-->

![h:400](././../../../img/Weil2023-TPJ-PlantDataHub-Fig6.png)

<span class="reference"> **Weil, Schneider *et al.*** (2023) "PLANTdataHUB: A collaborative platform for continuous FAIR data sharing in plant research",  The Plant Journal, https://doi.org/10.1111/tpj.16474 (*in production*) </span>

---

# Share and collaborate <img align="left" class="center" style="height:75px" src='./../../../img/Screenshot-RDMkit-06-share.png'/>

![w:700](./../../../img/ARC_DataSharing_Experts02_img1.png)

---

# Reuse <img align="left" class="center" style="height:75px" src='./../../../img/Screenshot-RDMkit-07-reuse.png'/>

![w:800](./../../../img/Weil2023-TPJ-PlantDataHub-Fig7.png)

<!-- 
- via ARC https://arcregistry.nfdi4plants.org/arcsearch
- via ISA https://arcregistry.nfdi4plants.org/isasearch 
-->

<span class="reference"> **Weil, Schneider *et al.*** (2023) "PLANTdataHUB: A collaborative platform for continuous FAIR data sharing in plant research",  The Plant Journal, https://doi.org/10.1111/tpj.16474 (*in production*) </span>

---

# **Mutable** data life cycle

![w:700](./../../../img/Weil2023-TPJ-PlantDataHub-Fig4.png)

<!-- 

- Invite other (demo) account
- add notes from there
-->

---

# Plan (ARC scale) <img align="left" class="center" style="height:75px" src='./../../../img/Screenshot-RDMkit-01-plan.png'/>

![w:800](./../../../img/Weil2023-TPJ-PlantDataHub-Fig5.png)

<span class="reference"> **Weil, Schneider *et al.*** (2023) "PLANTdataHUB: A collaborative platform for continuous FAIR data sharing in plant research",  The Plant Journal, https://doi.org/10.1111/tpj.16474 (*in production*) </span>

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

<span class="reference">**Zhou *et al.* (2023)**, DataPLAN: a web-based data management plan generator for the plant sciences, bioRxiv 2023.07.07.548147; doi: https://doi.org/10.1101/2023.07.07.548147 </span>

https://dmpg.nfdi4plants.org

![w:800](././../../../img/zhou2023-dataplan.png)
