---
layout: docs
title: Adding a Building Block
date: 2024-04-26
author: 
- name: Kevin Frey
  github: https://github.com/Freymaurer
  orcid: https://orcid.org/0000-0002-8510-6810
- name: Stella Eggels
add toc: true
add sidebar: _sidebars\mainSidebar.md
---

<p style="display: flex; justify-content: center">
<img src="./../img/Swate_a_Addbuildingblock_3.png" >
</p>

1. Click on "Add building block" in the top bar or in the sidebar.
2. Choose the type of building block you want to add ( a ). For more information on building block types, click [here](https://nfdi4plants.org/nfdi4plants.knowledgebase/docs/SwateManual/swate_blocks_types.html).
3. If you chose a descriptive building block type, use search field ( b ) to [search for an ontology term](https://nfdi4plants.org/nfdi4plants.knowledgebase/docs/SwateManual/Docs04-Ontology-Term-Search.html). This term together with your building block type describes your workflow. If you want to add a building block with a unit, activate the unit box ( c ) and use the search field to look for a fitting unit term.
    - Example 1: `Component [instrument model]` will describe any mass spectrometry instrument model used in your workflow ([source](http://www.ontobee.org/ontology/MS?iri=http://purl.obolibrary.org/obo/MS_1000031)).
    - <details><summary>Example 1 | Table</summary>
        <p>

        | Component [instrument model] 	| TSR (MS:1000031) 	| TAN (MS:1000031) 	|
        |------------------------------	|------------------------------	|------------------------------------	|

        </p>
        </details>
    - Example 2 with unit: `Factor [temperature]` and `degree Celsius` as unit.
    - <details><summary>Example 2 with unit | Table</summary>
        <p>

        | Factor [temperature] 	| Unit 	| TSR (PATO:0000146) 	| TAN (PATO:0000146) 	|
        |----------------------	|------	|--------------------------------	|--------------------------------------	|

        </p>
        </details>
 - If you cannot find a fitting term, you can write an issue to request an ontology term [here](https://github.com/nfdi4plants/nfdi4plants_ontology/issues/new/choose) **OR** use free text input.
4. Click *Add column* to insert the building block into an existing [Annotation Table](./Docs02-Annotation-Table.html). The new building block will be added to the right side of the table. To change the position you can right-click into any cell (except the header) of the column you want to move and select "Move Column".
5. Any *Input* or *Output* building block will only add a <u>single</u> column, any descriptive building block will add <u>three</u> columns or <u>four</u> columns if it is created with a unit. Only the main column will be visible by default, all other reference columns will be hidden.
    - 👀 You can expand the hidden columns with the two arrows (>>) in the header of the first column.   

<br>
