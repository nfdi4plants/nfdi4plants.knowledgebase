---
layout: docs
title: Adding a Building Block
date: 2023-02-15
Author: Kevin Frey
add toc: true
add sidebar: _sidebars\mainSidebar.md
---

<p style="display: flex; justify-content: center">
<img src="./../img/Swate-AddBuildingBlock-Exp.jpg?v31.01.22" style="height: 300px">
</p>

1. Choose the type of building block you want to add (A). For more information on building block types, click [here](#building-block-types).
2. If you chose a [descriptive building block](#descriptive-building-blocks) type, use searchfield (B) to [search for a Ontology Term](./docs04-Ontology-Term-Search.html). This term together with your building block type describes your workflow.
    - Example 1: `Component [instrument model]` will describe any mass spectrometry instrument model used in your workflow ([source](http://www.ontobee.org/ontology/MS?iri=http://purl.obolibrary.org/obo/MS_1000031)).
    - <details><summary>Example 1 | Table</summary>
        <p>

        | Component [instrument model] 	| Term Source REF (MS:1000031) 	| Term Accession Number (MS:1000031) 	|
        |------------------------------	|------------------------------	|------------------------------------	|

        </p>
        </details>
    - Example 2 with unit: If you want to add a building block with a unit, check box (C) and use searchfield (D) to look for a fitting unit term. `Factor [temperature]` and `degree Celsius` as unit.
    - <details><summary>Example 2 with unit | Table</summary>
        <p>

        | Factor [temperature] 	| Unit 	| Term Source REF (PATO:0000146) 	| Term Accession Number (PATO:0000146) 	|
        |----------------------	|------	|--------------------------------	|--------------------------------------	|

        </p>
        </details>
    - If you cannot find a fitting term, you can use the [Advanced Term Search](./Docs07-Advanced-Term-Search.html) for both searchfield (B) and (D) with the blue links above the *Add building block*-button.
    - If you still cannot find a fitting term, you can write an issue to request a Term [here](https://github.com/nfdi4plants/nfdi4plants_ontology/issues/new/choose) **OR** use free text input.
3. Click *Add building block* to insert the building block in an existing [Annotation Table](./Docs02-Annotation-Table.html). The new building block will be added to the right of any currently selected column of the table. 
    - 👀 Swate will automatically skip any reference columns.
4. Any input or output building block will only add a <u>single</u> column, any descriptive building block will add <u>three</u> columns or <u>four</u> column if it is created with a unit. Only the main column column will be visible by default, all other reference columns will be hidden.
    - 👀 You can hold <kbd>Ctrl</kbd> and click the *Autoformat Table* <a href="./../img/Swate-Overlay-Exp.jpg" target="_blank">quick access button</a> to adjust column widths and unhide all hidden columns.   

<br>
