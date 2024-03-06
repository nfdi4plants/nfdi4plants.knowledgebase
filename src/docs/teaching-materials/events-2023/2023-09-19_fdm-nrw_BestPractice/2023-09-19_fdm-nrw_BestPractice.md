---
marp: true
paginate: true
theme: marp-theme_dataplant-ceplas-ccby
license: '[CC-BY 4.0](https://creativecommons.org/licenses/by/4.0/)'
title: Annotated Research Contexts (ARCs) – A FAIR research data management journey along a mutable data life cycle
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

# Annotated Research Contexts (ARCs)

## A FAIR RDM journey along a mutable data life cycle

<style scoped>section {background: none; background-color: white}</style>
<!-- _paginate: false -->

<br>

fdm.nrw
"Best Practice Day &ndash; die Tools des FDMs"
September 19th, 2023

<div style="position: fixed; bottom: 10%; right: 10%;">
  <div class="profile-picture">
    <img src="https://www.ceplas.eu/fileadmin/_processed_/d/c/csm_Brilhaus_Dominik_4fd48a61a2.jpeg" alt="Dominik Brilhaus">
  </div>

  <div>

  Dominik Brilhaus <br> [CEPLAS Data Science](https://www.ceplas.eu/en/research/data-science-and-data-management/)

  </div>

</div>

---

# Annotated Research Contexts (ARCs)

## A FAIR RDM journey along a mutable data life cycle

<style scoped>h1,h2,p {color: grey} section {background: none; background-color: white}</style>
<!-- _paginate: false -->

<br>

fdm.nrw
"Best <span style="color:#C21F3A;font-size: 40px;font-weight: bold;">Practice</span> Day &ndash; die <span style="color:#C21F3A;font-size: 40px;font-weight: bold;">Tools</span> des FDMs"
September 19th, 2023

---

# Data Stewardship between DataPLANT and the community  <!-- fit -->

![w:700](./images/DataPLANT-collaborationCEPLAS.drawio.png)

---

# Annotated Research Context (ARC)

![width:950](./../../../img/ARC_DataCentricIntegration_img1.png)

---

# The ARC &ndash; a package for your research data

![width:950](./../../../img/ARC_fillWithData_seq8.png)

<!-- --- 


# Annotated Research Contexts (ARCs)

![w:600](./../../../img/tpj16474-fig-0003-m.jpg)

<span class="footer-reference"> Weil, H.L., Schneider, K., et al. (2023), PLANTdataHUB: a collaborative platform for continuous FAIR data sharing in plant research. Plant J. https://doi.org/10.1111/tpj.16474 </span> -->

---

# "A FAIR RDM journey along a (mutable) data life cycle" <!-- fit -->

<br>

![w:350](./../../../img/RDMkit-data_life_cycle_9.svg)

<span class="footer-reference"> https://rdmkit.elixir-europe.org, [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)</span>

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


<!-- ![w:500](../../../img/DataPLANT_ARC_SinglePointofEntry.svg)
![w:700](../../../img/DataPLANT_ARC_Workflows.svg) -->

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

## Conclusion

- ARC ecosystem support the full data life cycle
- **Data-centric**: it's more about the data than tools or implementations

---

# Resources

### <img align="left" style="height:35px" src='https://raw.githubusercontent.com/nfdi4plants/Branding/7e7d442aafeaa767b9c14a63a16e459dadcbdaaf/logos/DataPLANT/DataPLANT_logo_minimal_rounded_bg_darkblue.svg'/> DataPLANT (nfdi4plants)



Website: <a href="https://nfdi4plants.org/" target="_blank">https://nfdi4plants.org/</a>
Knowledge Base: <a href="https://nfdi4plants.org/nfdi4plants.knowledgebase/" target="_blank">https://nfdi4plants.org/nfdi4plants.knowledgebase/</a>
DataHUB: <a href="https://git.nfdi4plants.org" target="_blank">https://git.nfdi4plants.org</a>
GitHub: <a href="https://github.com/nfdi4plants" target="_blank">https://github.com/nfdi4plants</a>

---

# Acknowledgements

<style scoped>

section {
  font-size: 22px;  
}

</style>

**CEPLAS**

Björn Usadel, Andrea Schrader, Hajira Jabeen (until 2021)

**DataPLANT**

Kaiserslautern: Timo Mühlhaus, Christoph Garth
- Kevin Frey, Lukas Weil, Oliver Maus, Kevin Schneider  
(`ARC Commander`, `Swate`, `ARChigator`)
- Jonas Lukasczyk (`ARCitect`)

Freiburg: Dirk von Suchodeletz
- Jonathan Bauer, Marcel Tschöpe (`DataHUB`, `Swobup`)
- Cristina Martins Rodrigues (`Knowledge Base`)

![bg right:40% w:550](./../../../img/hackathon_group.png)
