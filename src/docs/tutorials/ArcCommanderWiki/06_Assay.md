---
layout: docs
title: "Assay"
published: 2022-12-13
add toc: true
add sidebar: _sidebars/arcCommanderManualSidebar.md
---

## 5.1 Addition of assays

- An assay may consist of experimental measuring data together with experimental protocols.
Note: An assay identifier also sets the folder name, so ensure to avoid special characters!
- An assay folder structure can be created by using `arc a init`. Under assays an assay folder named after the assay identifier is created which includes:
  - dataset
  - protocol
  - assay.isa.xlsx
  - README.md
- An existing assay can be registered to the investigation by using `arc a register`.
- To create the folder structure and afterwards register the new assay `arc a add` can be used. This command combines init and register.

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
`arc a add -a GelBasedProteomicsM21 --measurementtype Proteomics --technologytype "Mass spectrometry" --technologyplatform "AB Sciex TT6600"`

## 5.2 Listing and inspecting registered assays
- Registered assays can be listed by `arc a list`.
- To get detailed information about a specific entry use `arc a get`. If no arguments are specified an editor will request study and assay identifier (mandatory) to print all registered information into the shell.

## 5.3 Editing assay information

- An assay can be edited using `arc a edit`.
  - If no further arguments are specified an editor opens, that asks for the assay and study identifier that should be edited.
  - If the assay exists, another editor opens with information already known for the respective assay. The required values can be edited.
- Instead of using the editor, the following command can be used. To circumvent editor pop ups, not `arc a edit`, but `arc a update` must be used:  
`arc a update -s GelBasedProteomicsWT -a GelBasedProteomicsWT --technologyplatform "AB Sciex TT6600"`

## 5.4 Removing assays
_Note: To remove, unregister, or delete an assay both study identifier and assay identifier are required to ensure the correct assay is chosen._
- An assay can be unregistered from the investigation by using `arc a unregister`.
- An assay folder structure can be deleted by using `arc a delete`.
- To both, delete the assay folder structure and unregister it from the investigation `arc a remove` can be used.

## 5.5 Moving assays
- If an assay was mis-assigned to an incorrect study, or some assays should be grouped together (e.g. when a new study is created and some old assays would fit better to this new study), an assay can be moved from one study to another by using `arc a move`. After definition of the assay identifier together with old, and target study identifier, the assay is moved. If no study exist, that matches the given target study identifier, a new study is registered.
- Instead of using the editor, the following command can be used:  
`arc a move -s GelBasedProteomicsWT -a GelBasedProteomicsWT -t WTProteomics`