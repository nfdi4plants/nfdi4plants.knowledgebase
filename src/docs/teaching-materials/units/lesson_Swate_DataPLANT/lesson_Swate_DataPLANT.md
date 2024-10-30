---
marp: true
theme: dataplant_marp-theme
paginate: true
footer: ' <a href="https://nfdi4plants.org"> <img id="footer-img1" src="./../../../img/logos/DataPLANT/DataPLANT_logo_square_bg_transparent.svg"></a>
  <a href="https://creativecommons.org/licenses/by/4.0/"><img id="footer-img2" src="./../../../img/logos/CreativeCommons/by.svg">
  </a> '
style: ' footer {height: 30px; padding: 10px; bottom: 00px;} #footer-img1 {height:
  30px; padding-left: 0px;} #footer-img2 {height: 20px; padding-left: 20px; opacity:
  0.5;} '
layout: slides
author:
- name: Martin Kuhl
  github: https://github.com/Martin-Kuhl
  orcid: https://orcid.org/0000-0002-8493-1077
license: '[CC-BY 4.0](https://creativecommons.org/licenses/by/4.0/)'
date: 2023-03-16
title: lesson_Swate_DataPLANT
---

# Swate workflow annotation tool for Excel

![](./../../../img/logos/Swate/Swate_logo_for_excel.svg)

<!-- Source to slide(s) -->
<!-- ../../bricks/lesson_Swate_DataPLANT-Swate_workflow_annotation_tool_for_Excel.md -->


---

# Annotation by flattening the knowledge graph

![w:800](./../../../img/Swate_ParentChildTerm.svg)

- Low-friction metadata annotation
- Familiar spreadsheet, row/column-based environment

<!-- Source to slide(s) -->
<!-- ../../bricks/lesson_Swate_DataPLANT-Annotation_by_flattening_the_knowledge_graph.md -->


---

# Annotation principle

<!-- <style scoped>
section p img{
  /* padding-left: 230px */
}  
</style> -->
![w:650](./../../../img/Swate_ParentChildTerm2.svg)

- Low-friction metadata annotation
- Familiar spreadsheet, row/column-based environment

<!-- Source to slide(s) -->
<!-- ../../bricks/lesson_Swate_DataPLANT-Annotation_principle.md -->


---

# Adding new building blocks (columns)

![w:750](./../../../img/Swate_NewParameter.svg)

- Swate can be used for the annotation of **isa.study.xlsx and isa.assay.xlsx** files

<!-- Source to slide(s) -->
<!-- ../../bricks/lesson_Swate_DataPLANT-Adding_new_building_blocks.md -->


---

# Annotation Building Block types <!--fit-->

![bg right w:620](./../../../img/Swate_Overview.svg)

- Source Name (Input)
- Protocol Columns
  - Protocol Type, Protocol Ref
- Characteristic
- Parameter
- Factor
- Component
- Output Columns
  - Sample Name, Raw Data File, Derived Data File

<!-- Source to slide(s) -->
<!-- ../../bricks/lesson_Swate_DataPLANT-Annotation_Building_Block_types.md -->


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

![w:750](./../../../img/Swate_OntologyTermSearch.svg)

Enable **related term directed search** to directly fill cells with child terms

<!-- Source to slide(s) -->
<!-- ../../bricks/lesson_Swate_DataPLANT-Ontology_term_search.md -->


---

# Fill your table with ontology terms

![w:800](./../../../img/Swate_OntologyTermSearch2.svg)

<!-- Source to slide(s) -->
<!-- ../../bricks/lesson_Swate_DataPLANT-Fill_your_table_with_ontology_terms.md -->


---

# Hierarchical combination of ontologies

![w:800](./../../../img/Swate_OntologyCombination.svg)

<!-- combination of ISA (Characteristics, Parameter, Factor) and a biological or technological ontology (e.g. temperature, strain, instrument model) gives the flexibility to display an ontology term, e.g. temperature, as a regular process parameter or as the factor your study is based on (Parameter \[temperature\] or Factor \[temperature\]). -->

<!-- Source to slide(s) -->
<!-- ../../bricks/lesson_Swate_DataPLANT-Hierarchical_combination_of_ontologies.md -->
