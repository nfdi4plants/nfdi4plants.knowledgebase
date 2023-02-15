---
layout: docs
title: Swate QuickStart
published: 2022-08-05
author: Martin Kuhl
author_github: martin-kuhl
add toc: false
add sidebar: _sidebars/mainSidebar.md
article_status: published
todo:
---


This document is work in progress. If you experience any inconsistencies, have questions or would like to suggest additions, please feel free to <a href="javascript:location='mailto:\u0069\u006e\u0066\u006f\u0040\u006e\u0066\u0064\u0069\u0034\u0070\u006c\u0061\u006e\u0074\u0073\u002e\u006f\u0072\u0067';void 0">contact us</a> or open an issue in our [Helpdesk](<https://helpdesk.nfdi4plants.org>).

We are very happy that you chose our tools and infrastructure to create and share your own ARCs. In this QuickStart we assume that your ARC already contains one or more isa.study.xlsx and isa.assay.xlsx file(s), respectively. Use the isa.study.xlsx to describe the characteristics of your samples, e.g. how you grew your plant, and isa.assay.xlsx to annotate the experimental analyses. In the following we will focus on adding metadata to your studies and assays with our excel tool Swate.

## Swate

DataPLANT provides the Excel Add-In Swate to support you in data annotation.
Please download and install the newest Swate version according to [these instructions](https://nfdi4plants.github.io/Swate-docs/docs/implementation/SwateManual/Docs01-Installing-Swate.html).

- Use the *create annotation table* button in the yellow pop-up box (this only appears if you start Swate on an Excel worksheet without an existing annotation table). An annotation table with the building blocks *Source Name* and *Sample Name* will be generated.  

![](https://raw.githubusercontent.com/wiki/nfdi4plants/Swate/images/UserDocs/Swate-CreateAnnotationTable-Exp.jpg)

- Annotate your table with help of the [annotation principles](https://nfdi4plants.github.io/AnnotationPrinciples/).  
Briefly:
  - *Characteristics* are used for study descriptions and describe inherent properties of the source material (e.g. a certain strain).  
  - *Parameters* describe steps in your experimental workflow (e.g. an instrument model or a growth chamber), and  
  - *Factors* describe independent variables that result in a specific output (e.g. the light intensity).

- The combination of ISA (Characteristics, Parameter, Factor) and a biological or technological ontology (e.g. temperature, strain, instrument model) gives the flexibility to display an ontology term, e.g. temperature, as a regular process parameter or as the factor your study is based on (Parameter \[temperature\] or Factor \[temperature\]).

## Customize your table by adding building blocks

1. Choose the type of building block you want to add (A).

2. If you chose a descriptive building block type (building blocks besides Sample Name, Source Name, and Data File Name), use search field (B) to search for an Ontology Term. Swate accesses the SwateDB with a list of established external ontologies designated suitable for use in plant science. In addition, we feature our own ontology DPBO to extend the DB with missing, but necessary terms.

3. If you want to add a building block with a unit, check box (C) and use search field (D) to look for a fitting unit term, e.g. degree Celsius as unit for Parameter \[temperature\].

4. If you could not find a fitting term, you can use the Advanced Term Search with the blue links above the *Add building block* button. If you still could not find a fitting term, use free text input.  

![](https://raw.githubusercontent.com/wiki/nfdi4plants/Swate/images/UserDocs/Swate-AddBuildingBlock-Exp.jpg)

5. For more information on customizing your annotation table click [here](https://github.com/nfdi4plants/Swate/wiki/Docs03-Building-Blocks).

## Use templates

Alternatively, you can also use one of DataPLANT’s [Swate templates](https://github.com/nfdi4plants/Swate/wiki/Docs05-Templates). You can find them under the *Protocol Insert* tab in Swate.  

![](https://user-images.githubusercontent.com/39732517/128495178-cc14690a-fc8a-4a3c-b591-365176ea2b00.png)

## Annotate your samples and data

Fill the cells beneath each building block with ontology terms to note the respective *Characteristics, Parameter,* and *Factor* values of your experiment. Using the ontology term search function, you can fill multiple cells at once.

1. When *Use related term directed search* (A) is enabled, Swate
  will suggest a selection of suitable terms within the ontology
  for the column header, e.g. *TripleTOF* *5600* for *instrument
  model.*

2. When term directed search (A) is disabled, Swate will still
  suggest ontology terms, but without relation to the column
  header.

3. If you could not find a fitting term, use free text input.

![](../img/swate_ontologyTermSearch2.png)


> Note: More information on how to use Swate can be found [here][gh-SwateWiki].

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

<!-- kb-Implementation -->
[kb-AnnotatedResearchContext]: ../implementation/AnnotatedResearchContext.html "Annotated Research Context"
[kb-DataHub]: ../implementation/DataHub.html "DataPLANT DataHUB"
[kb-ArcCommander]: ../implementation/ArcCommander.html "ARC Commander"

<!-- kb-Tutorials -->
[kb-QuickStart_arc]: ../tutorials/QuickStart_arcCommander.html "Quickstart ARC"
[kb-QuickStart_Swate]: ../tutorials/QuickStart_swate.html "Swate QuickStart"


<!-- Links to DataPLANT Homepage (hp-) -->

[hp-Registration]: <https://register.nfdi4plants.org/registration> "DataPLANT Registration"
[hp-DataHUB]: <https://git.nfdi4plants.org> "DataPLANT DataHUB"
[hp-HelpDesk]: <https://helpdesk.nfdi4plants.org> "DataPLANT Help Desk"

<!-- Links to DataPLANT GitHub (gh-) -->

[gh-DataPlant]: <https://github.com/nfdi4plants/> "GitHub DataPLANT"
[gh-ArcSpecs]: <https://github.com/nfdi4plants/ARC-specification/> "ARC specifications"
[gh-ArcCommander]: <https://github.com/nfdi4plants/arcCommander/> "ArcCommander"
[gh-ArcCommander-Wiki]: <https://github.com/nfdi4plants/arcCommander/wiki> "ArcCommander Wiki"
[gh-Swate]: <https://github.com/nfdi4plants/Swate/> "Swate repository"
[gh-SwateWiki]: <https://nfdi4plants.github.io/Swate-docs/index.html> "Swate Wiki"

<!-- Links to external (ext-) sources -->
