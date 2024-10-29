---
marp: true
paginate: true
theme: marp-theme_dataplant-ceplas-ccby
license: '[CC-BY 4.0](https://creativecommons.org/licenses/by/4.0/)'
title: Swate Intro
date: 2023-11-14
author:
- name: Dominik Brilhaus
  github: https://github.com/brilator
  orcid: https://orcid.org/0000-0001-9021-3197
---


# ARCs come with comprehensive metadata

![width:950](./../../../img/ARC_fillWithData_seq6.png)

---

# ARC builds on standards

![w:600](./../../../img/ARC_BuildsOnStandards3.png)

<span class="footer-reference">https://isa-tools.org/ | https://www.commonwl.org/
https://www.researchobject.org/ro-crate/ | https://git-scm.com</span>

---
 
# ARC builds on ISA

![w:900](./../../../img/ISAmodel_ARC01_img01.svg)

<span class="footer-reference">ISA Tools: https://isa-tools.org/format/specification.html</span>

---

# ARC builds on ISA to connect data

![w:1000](./../../../img/ISAmodel_ARC01_img02.svg)

---

# ARC builds on ISA to link data

<div class="two-columns">

  <div>

  - Samples are linked study-to-assay, assay-to-assay
  - Raw data is linked to assays
  - Protocols can be referenced
  - ...

  </div>

  <div>
  
  ![w:800](./../../../img/ISAmodel_ARC01_img02.svg)
  
  </div>
</div>



---

# Annotation by flattening the knowledge graph

![w:800](./../../../img/Swate_ParentChildTerm.svg)

- Low-friction metadata annotation
- Familiar spreadsheet, row/column-based environment

---

# Annotation principle

![w:650](./../../../img/Swate_ParentChildTerm2.svg)

- Low-friction metadata annotation
- Familiar spreadsheet, row/column-based environment

---

# Adding new building blocks

![w:1000](./../../../img/Swate_a_newBuildingBlocks.png)

Swate can be used for the annotation of **isa.study.xlsx and isa.assay.xlsx** files

---

# Annotation Building Block types

<div class="two-columns" style="font-size: 25px">
  
  <div>
  
- Input (e.g. Source Name, Sample Name)
- Protocol columns
- Characteristic // Parameter // Factor
- Output (e.g. Sample Name, Raw Data File, Derived Data File)

</div>
  
  <div>
  
  ![w:600px](./../../../img/Swate_a_Overview.png)
    
  </div>
</div>


Let's take a detour on [Annotation Principles](https://nfdi4plants.org/nfdi4plants.knowledgebase/docs/teaching-materials/units/AnnotationPrinciples/isa_AnnotationPrinciples-slides.html)

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

![w:750](./../../../img/Swate_a_OntologyTermSearch.png)

Enable **related term directed search** to directly fill cells with child terms

---

# Fill your table with ontology terms

![w:800](./../../../img/Swate_a_OntologyTermSearch2.png)

---

# Hierarchical combination of ontologies

![w:800](./../../../img/Swate_OntologyCombination.svg)

---

# Checklists and Templates

![w:800px](./../../../img/swate_TemplatesChecklists.svg)

Metadata standards or repository requirements can be represented as templates

---

# Realization of lab-specific metadata templates

![w:650px](./../../../img/SWATE_metadataTemplates.png)

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

![bg right w:450](./../../../img/Swate_a_templates.png)
