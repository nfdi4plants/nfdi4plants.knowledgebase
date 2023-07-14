---
marp: true
theme: marp-theme_dataplant-ceplas-mibinet-ccby
paginate: true
license: '[CC-BY 4.0](https://creativecommons.org/licenses/by/4.0/)'
title: Metadata and ISA
author:
- name: Dominik Brilhaus
  github: https://github.com/brilator
  orcid: https://orcid.org/0000-0001-9021-3197
- name: Sabrina Zander
  orcid: https://orcid.org/0009-0000-4569-6126
---

# Block 5 &ndash; Metadata and ISA

<style scoped>section {background: none; background-color: white}</style>
<!-- _paginate: false -->

September 28th, 2023
 

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




# Part 1: Metadata




---

# Part 2: ISA

---

## ARC builds on ISA

![w:900](./../../../img/ISAmodel_ARC01_img01.svg)

https://isa-tools.org/format/specification.html

<!-- Source to slide(s) -->
<!-- ../../bricks/ARC_ISAmodel.md -->

---

# ARC builds on ISA

![w:1100](./../../../img/ISAmodel_ARC01_img02.svg)

<!-- Source to slide(s) -->
<!-- ../../bricks/ARC_ISA-tab.md -->


---

# isa.<>.xlsx files within ARCs

![w:1000](./../../../img/ISAmodel_ARC01_img03.svg)

<!-- Source to slide(s) -->
<!-- ../../bricks/ARC_ISAxlsx01.md -->


---

# Study and assay files are registered in the investigation file <!-- fit -->

![w:950](./../../../img/ISAmodel_ARC01_img04.svg)

<!-- Source to slide(s) -->
<!-- ../../bricks/ARC_ISAxlsx02.md -->


---

# The output of a study or assay file can function as input for a new isa.assay.xlsx 

Output building blocks:
- Sample Name
- Raw Data File
- Derived Data File

![bg right w:600](./../../../img/ISAmodel_ARC01_img05.svg)

<!-- Source to slide(s) -->
<!-- ../../bricks/ARC_ISAxlsx03.md -->


---

# 

![bg w:1050](./../../../img/ISAmodel_ARC01_img6.svg)

<!-- Source to slide(s) -->
<!-- ../../bricks/ARC_ISAxlsx04.md -->


---


# Annotation Building Block types <!--fit-->

![bg right:40% w:520](./../../../img/Swate_Overview.svg)

- Source Name (Input)
- Protocol Columns
  - Protocol Type, Protocol Ref
- Characteristic
- Parameter
- Factor
- Component
- Output Columns
  - Sample Name, Raw Data File, Derived Data File


:bulb: For details, check out the [Annotation Principles](https://nfdi4plants.github.io/AnnotationPrinciples/).

<!-- Source to slide(s) -->
<!-- ../../bricks/lesson_Swate_DataPLANT-Annotation_Building_Block_types.md -->


---
