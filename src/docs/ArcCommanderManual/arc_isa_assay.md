---
layout: docs
title: "Assay"
date: 2022-12-13
add toc: true
add support: false
add sidebar: _sidebars/mainSidebar.md
---

## Addition of assays

> :warning: Make sure to close all isa.*.xlsx files before submitting a new command to the command line, as otherwise the information cannot be saved by the ARC Commander.

- An assay may consist of experimentally measured data together with experimental protocols.
- An assay folder structure can be created by using `arc a init`. Under assays an assay folder named after the assay identifier is created which includes:
  - dataset
  - protocol
  - assay.isa.xlsx
  - README.md
- An existing assay can be registered to the investigation by using `arc a register`.
- To create the folder structure and afterwards register the new assay `arc a add` can be used. This command combines init and register.

> :warning: An assay identifier also sets the folder name, so ensure to avoid special characters!

> :warning: If you only initiated a study and assay but did not yet register it, `arc update` will overwrite the study name in ARC Commander v0.4.0. This is solved in [v0.5.0](https://github.com/nfdi4plants/arcCommander/releases/tag/v0.5.0-preview2-fat) which is currently available as a preview version. This problem does not occur when you use `arc a add` (see above and an example below the table).

|     Field                                 |     Description                                                                                                                                                                                                                                                                                                                    |     Input                   |
|-------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------|
|     StudyIdentifier                       |     Name of the study   in which the assay is situated                                                                                                                                                                                                                                                                             |                             |
|     AssayIdentifier (Mandatory)           |     Name of the assay of interest                                                                                                                                                                                                                                                                                                  |     GelBasedProteomicsWT    |
|     MeasurementType                       |     A term to qualify   the endpoint, or what is being measured (e.g. gene expression profiling or   protein identification). The term can be free text or from, for example, a controlled   vocabulary or an ontology. If the latter source is used the Term Accession   Number and Term Source REF fields below are required.    |     Proteomics              |
|     MeasurementTypeTermAccessionNumber    |     The accession number from the Term Source associated   with the selected term.                                                                                                                                                                                                                                                 |                             |
|     MeasurementTypeTermSourceREF          |     The Source REF has   to match one of the Term Source Name declared in the Ontology Source   Reference section.                                                                                                                                                                                                                 |                             |
|     TechnologyType                        |     Term to identify the technology used to perform the   measurement, e.g. DNA microarray, mass spectrometry. The term can be free   text or from, for example, a controlled vocabulary or an ontology. If the   latter source is used the Term Accession Number and Term Source REF fields   below are required.                 |     Mass spectrometry       |
|     TechnologyTypeTermAccessionNumber     |     The accession   number from the Term Source associated with the selected term.                                                                                                                                                                                                                                                 |                             |
|     TechnologyTypeTermSourceREF           |     Identifies the controlled vocabulary or ontology   that this term comes from. The Source REF has to match one of the Term Source   Names declared in the Ontology Source Reference section.                                                                                                                                    |                             |
|     TechnologyPlatform                    |     Manufacturer and   platform name, e.g. Bruker AVANCE                                                                                                                                                                                                                                                                           |     AB Sciex TT6600         |

If no study identifier is given, a study is created with the assay identifier as study identifier. Instead of using the editor, the following command can be used:  
`arc assay add -a GelBasedProteomicsM21 --measurementtype Proteomics --technologytype "Mass spectrometry" --technologyplatform "AB Sciex TT6600"`

## Listing and inspecting registered assays

- Registered assays can be listed by `arc a list`.
- To get detailed information about a specific entry use `arc a get`. If no arguments are specified an editor will request study and assay identifier (mandatory) to print all registered information into the shell.

## Editing assay information

- An assay can be edited using `arc a edit`.
  - If no further arguments are specified an editor opens, that asks for the assay and study identifier that should be edited.
  - If the assay exists, another editor opens with information already known for the respective assay. The required values can be edited.
- Instead of using the editor, the following command can be used. To circumvent editor pop ups, not `arc a edit`, but `arc a update` must be used:  
`arc a update -s GelBasedProteomicsWT -a GelBasedProteomicsWT --technologyplatform "AB Sciex TT6600"`

## Removing assays

- An assay can be unregistered from the investigation by using `arc a unregister`.
- An assay folder structure can be deleted by using `arc a delete`.
- To both, delete the assay folder structure and unregister it from the investigation `arc a remove` can be used.
- Supply a study identifier and assay identifier to directly use these commands via command line, i.e.: 
  - `arc a unregister -s <study identifier> -a <assay identifier>`
  - `arc a delete -s <study identifier> -a <assay identifier>`
  - `arc a remove -s <study identifier> -a <assay identifier>`

> :bulb: To remove, unregister, or delete an assay both study identifier and assay identifier are required to ensure the correct assay is chosen.

## Moving assays

- If an assay was mis-assigned to an incorrect study, or some assays should be grouped together (e.g. when a new study is created and some old assays would fit better to this new study), an assay can be moved from one study to another by using `arc a move`. After definition of the assay identifier together with old, and target study identifier, the assay is moved. If no study exist, that matches the given target study identifier, a new study is registered.
- Instead of using the editor, the following command can be used:  
`arc a move -s GelBasedProteomicsWT -a GelBasedProteomicsWT -t WTProteomics`
