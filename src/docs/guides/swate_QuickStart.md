---
layout: docs
title: Swate QuickStart
date: 2024-04-18
author:
- name: Martin Kuhl
  github: https://github.com/Martin-Kuhl
  orcid: https://orcid.org/0000-0002-8493-1077
- name: Stella Eggels
add toc: true
add sidebar: _sidebars/mainSidebar.md
status: published
todo:
---

## About this guide

DataPLANT provides the tool [Swate](./../implementation/Swate.html) to support you in data annotation. In this guide, we focus on adding metadata to your studies and assays with our tool. Use the isa.study.xlsx to describe the characteristics of your samples, e.g. how you grew your plant, and isa.assay.xlsx to annotate the experimental analyses.

<div style="padding-bottom: 20px">
    <a href="./index.html">
  <span class="badge-category">User</span><span class="badge-selected" id="badge-newbie">Newbie</span>
  <span class="badge-category">Mode</span><span class="badge-selected" id="badge-tutorial">Tutorial</span>
    </a>
</div>




## Before we can start

:bulb: Consider reading about [Swate](./../implementation/Swate.html)

:bulb: We assume that you already created an ARC that contains one or more isa.study.xlsx and isa.assay.xlsx file(s), respectively.

## Open or create an annotation table

- To create an annotation table with the [Swate standalone](https://swate-alpha.nfdi4plants.org/) in your browser, click "New File" and select which kind of annotation table you want to create. If you already created a isa.study.xlsx or isa.assay.xlsx file, you can select "Import File" to modify and add to it.

<img src="./../img/Swate_a_NewFile.PNG" style="height: 250px">


- To create an annotation table within ARCitect, add a new table to your assay or study by clicking the plus (+) symbol next to your metadata sheet

<img src="./../img/Swate_a_Arcitect_newTable.png" style="height: 400px">


- Fill in the metadata sheet of your study or assay

- Create and fill your annotation table with help of the [annotation principles](https://nfdi4plants.github.io/AnnotationPrinciples/).  
Briefly:
  - *Characteristics* are used for study descriptions and describe inherent properties of the source material (e.g. a certain strain)  
  - *Parameters* describe steps in your experimental workflow (e.g. a measurement temperature) 
  - *Components* describe physical obsjects of your protocol (e.g. an instrument name) 
  - *Factors* describe independent variables that result in a specific output (e.g. the light intensity)

- The combination of ISA terms (Characteristics, Parameter, Component, Factor) and biological or technological ontology terms (e.g. temperature, strain, instrument model) gives the flexibility to display an ontology term, e.g. temperature, as a regular process parameter or as the factor your study is based on (Parameter \[temperature\] or Factor \[temperature\]).

## Customize your table by adding building blocks

1. To add a building block, click the "add building block" symbol ( a ) in the top left corner.

2. Choose the type of building block you want to add ( b ).

3. If you chose a descriptive building block type (building blocks besides Input and Output), use search field ( c ) to search for an ontology term. Swate accesses the SwateDB with a list of established external ontologies designated suitable for use in plant science. In addition, we feature our own ontology DPBO to extend the DB with missing, but necessary terms.

4. If you want to add a building block with a unit, activate the unit box ( d ) and use the search field to look for a fitting unit term, e.g. degree Celsius as unit for Parameter \[temperature\].

<img src="./../img/Swate_a_Addbuildingblock_2.png" style="height: 300px">


5. For more information on customizing your annotation table click [here](./SwateManual/Docs03-Building-Blocks.html).

## Use templates

Alternatively, you can also use one of DataPLANT’s [Swate templates](./SwateManual/Docs05-Templates.html). You can find them via the "add template" button, next to the "add building block" button.  

<img src="./../img/Swate_a_Addtemplate.png" style="height: 500px">

## Annotate your samples and data

Add rows beneath the building blocks with the plus symbol ( A ) and fill the cells with ontology terms to note the respective *Characteristics, Parameter,* *Component* and *Factor* values of your experiment. By activating the ontology term search function (magnifying glass, B), you can fill cells with ontology terms.

1. When *Ontology term search* ( B ) is enabled, Swate  will suggest a selection of suitable terms from the ontology database for the column header, e.g. *TripleTOF* *5600* for *instrument model.* Alternatively to activating the *Ontology term search* within the cells of your annotation table, you can use the ontology term search panel on the right side after expanding it with the arrow on the bottom right ( C ).

2. If you could not find a fitting term, you can use the advanced term search with the blue link ("use advanced search", D) below the ontology term search field in the right panel. 

3. If you still could not find a fitting term, use free text input.

![](./../img/Swate_a_ontologytermsearch3.png)


> Note: More information on how to use Swate can be found [here][kb-SwateManual].

<div style="page-break-after: always;"></div>

<!-- Links to DataPLANT knowledge base (kb-) -->

<!-- kb-Fundamentals -->

[kb-DataManagementPlan]: ../fundamentals/DataManagementPlan.html "Data Management Plan"
[kb-DataPublications]: ../fundamentals/DataPublications.html "Data Publication"
[kb-DataSharing]: ../fundamentals/DataSharing.html "Data Sharing"
[kb-FairDataPrinciples]: ../fundamentals/FairDataPrinciples.html "FAIR Data principles"
[kb-Metadata]: ../fundamentals/Metadata.html "Metadata"
[kb-PersistentIdentifiers]: ../fundamentals/PersistentIdentifiers.html "Persistent Identifiers"
[kb-PublicDataRepositories]: ../fundamentals/PublicDataRepositories.html "Repositories"
[kb-ResearchDataManagement]: ../fundamentals/ResearchDataManagement.html "Research Data Management"
[kb-VersionControlGit]: ../fundamentals/VersionControlGit.html "Version Control and Git"
[kb-SwateManual]: ../SwateManual/index.html "Swate Manual"

<!-- kb-Implementation -->
[kb-AnnotatedResearchContext]: ../implementation/AnnotatedResearchContext.html "Annotated Research Context"
[kb-DataHub]: ../implementation/DataHub.html "DataPLANT DataHUB"
[kb-ArcCommander]: ../implementation/ArcCommander.html "ARC Commander"

<!-- kb-Tutorials -->
[kb-QuickStart_arc]: ../tutorials/arcCommander_QuickStart.html "ARC User Journey"
[kb-swate_QuickStart]: ../tutorials/swate_QuickStart.html "Swate QuickStart"


<!-- Links to DataPLANT Homepage (hp-) -->

[hp-Registration]: <https://register.nfdi4plants.org/> "DataPLANT Registration"
[hp-DataHUB]: <https://git.nfdi4plants.org> "DataPLANT DataHUB"
[hp-HelpDesk]: <https://helpdesk.nfdi4plants.org> "DataPLANT Help Desk"

<!-- Links to DataPLANT GitHub (gh-) -->

[gh-DataPlant]: <https://github.com/nfdi4plants/> "GitHub DataPLANT"
[kb-ArcSpecs]: ./../implementation/ARC-specification.html "ARC specification"
[gh-ArcCommander]: <https://github.com/nfdi4plants/arcCommander/> "ArcCommander"
[kb-ArcCommander-Manual]: ../ArcCommanderManual/index.html "ARC Commander Manual"
[gh-Swate]: <https://github.com/nfdi4plants/Swate/> "GitHub Swate"

<!-- Links to external (ext-) sources -->
