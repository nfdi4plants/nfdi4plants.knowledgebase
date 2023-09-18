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

# Goal

- Illustrate current state of DataPLANT **tools** and concepts
- with one **practical** example

---

# Annotated Research Contexts (ARCs)

---

# Intro

- ARC
- ISA
- DataHUB

---

# A FAIR RDM journey along a (mutable) data life cycle

![bg right w:450](images/RDMkit-data_life_cycle_9.svg)



<span class="reference-bgright"> https://rdmkit.elixir-europe.org, [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)</span>

---

# Plan

<figure style="position: fixed; top: 0px; right: 0px; width: 150px">
    <img src="images/Screenshot-RDMkit-01-plan.png"></img>
    <figcaption align=right> rdmkit.elixir-europe.org, CC BY 4.0 </figcaption>
</figure>


![w:900](images/Figures-DataHUB-Fig5.png)

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

# Collect

<figure style="position: fixed; top: 0px; right: 0px; width: 150px">
    <img src="images/Screenshot-RDMkit-02-collect.png"></img>
    <figcaption align=right> rdmkit.elixir-europe.org, CC BY 4.0 </figcaption>
</figure>

<!-- 

- create study folder
  - take a picture (add more demo pictures)
- create assay folder
  - add fastq data

-->

---

# Process (e.g. annotate)

- annotate
- annotate rnaseq extraction

<figure style="position: fixed; top: 0px; right: 0px; width: 150px">
    <img src="images/Screenshot-RDMkit-03-process.png"></img>
    <figcaption align=right> rdmkit.elixir-europe.org, CC BY 4.0 </figcaption>
</figure>

---

# Analyse

<figure style="position: fixed; top: 0px; right: 0px; width: 150px">
    <img src="images/Screenshot-RDMkit-04-analyse.png"></img>
    <figcaption align=right> rdmkit.elixir-europe.org, CC BY 4.0 </figcaption>
</figure>

<!-- 
- run fastqc
- receive back results
-->

![w:800](images/Figures-DataHUB-Fig3.png)


<!-- ![w:500](../../../img/DataPLANT_ARC_SinglePointofEntry.svg)

![w:700](../../../img/DataPLANT_ARC_Workflows.svg) -->

---

# Preserve


<figure style="position: fixed; top: 0px; right: 0px; width: 150px">
    <img src="images/Screenshot-RDMkit-05-preserve.png"></img>
    <figcaption align=right style="font"> rdmkit.elixir-europe.org, CC BY 4.0 </figcaption>
</figure>

<!--
1. Validation: CQC on each DataHUB commit
2. Publication: DOI
-->

![h:400](images/Figures-DataHUB-Fig6a.png)

<span class="reference"> adapted from **Weil, Schneider *et al.*** (2023) "PLANTdataHUB: A collaborative platform for continuous FAIR data sharing in plant research",  The Plant Journal, https://doi.org/10.1111/tpj.16474 (*in production*) </span>

---

# Preserve


<figure style="position: fixed; top: 0px; right: 0px; width: 150px">
    <img src="images/Screenshot-RDMkit-05-preserve.png"></img>
    <figcaption align=right style="font"> rdmkit.elixir-europe.org, CC BY 4.0 </figcaption>
</figure>

<!--
1. Validation: CQC on each DataHUB commit
2. Publication: DOI
-->

![h:400](./images/Figures-DataHUB-Fig6.png)

<span class="reference"> **Weil, Schneider *et al.*** (2023) "PLANTdataHUB: A collaborative platform for continuous FAIR data sharing in plant research",  The Plant Journal, https://doi.org/10.1111/tpj.16474 (*in production*) </span>

---

# Share

<figure style="position: fixed; top: 0px; right: 0px; width: 150px">
  <img src="images/Screenshot-RDMkit-06-share.png"></img>
  <figcaption align=right style="font"> rdmkit.elixir-europe.org, CC BY 4.0 </figcaption>
</figure>

![w:700](./../../../img/ARC_DataSharing_Experts02_img1.png)

---

# Reuse

<figure style="position: fixed; top: 0px; right: 0px; width: 150px">
  <img src="images/Screenshot-RDMkit-07-reuse.png"></img>
  <figcaption align=right style="font"> rdmkit.elixir-europe.org, CC BY 4.0 </figcaption>
</figure>

![w:800](images/Figures-DataHUB-Fig7.png)

<!-- 
- via ARC https://arcregistry.nfdi4plants.org/arcsearch
- via ISA https://arcregistry.nfdi4plants.org/isasearch 
-->

<span class="reference"> **Weil, Schneider *et al.*** (2023) "PLANTdataHUB: A collaborative platform for continuous FAIR data sharing in plant research",  The Plant Journal, https://doi.org/10.1111/tpj.16474 (*in production*) </span>

---

# **Mutable** data life cycle

![w:700](images/Figures-DataHUB-Fig4.png)

<!-- 

- Invite other (demo) account
- add notes from there

-->


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

![bg right:40% w:550](./../custom/img/hackathon_group.png)

---

## Contributors 

Slides presented here include contributions by 

- Dominik Brilhaus | [GitHub](https://github.com/brilator) | [ORCID](https://orcid.org/0000-0001-9021-3197)
- Cristina Martins Rodrigues  | [GitHub](https://github.com/CMR248) | [ORCID](https://orcid.org/0000-0002-4849-1537)
- Martin Kuhl  | [GitHub](https://github.com/Martin-Kuhl) | [ORCID](https://orcid.org/0000-0002-8493-1077)



--- 


# Is GitLab FAIR?

![bg right:50% w:400](./images/cyra_et_al-2022-GitLab-FAIR.png)

Cyra et al. 2022. A push for better RDM: Erfahrungsbericht aus dem Einsatz von git für Forschungsdaten. DOI: 10.17192/bfdm.2022.2.8435.

---

# PLANTdataHUB publication

**Weil, Schneider *et al.* (2023)** "PLANTdataHUB: A collaborative platform for continuous FAIR data sharing in plant research",  The Plant Journal, https://doi.org/10.1111/tpj.16474
(*in production*)

---