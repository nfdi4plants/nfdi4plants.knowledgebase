---
title: ISA File Types
authors: 
  - dominik-brilhaus
  - martin-kuhl
lastUpdated: 2023-06-14
sidebar:
  badge:
    text: wip
    variant: note
---

Here we introduce the different ISA file types used in the ARC.

## ARC builds on ISA

The ARC builds on the <a href="https://isa-specs.readthedocs.io/en/latest/isamodel.html" target="_blank">ISA Abstract Model</a> for metadata annotation. Briefly, the ISA model comes with a hierarchy (ISA: Investigation - Study - Assay) that aligns well with most projects in (plant) biology labs. It allows to group multiple assays to one study, and multiple studies to one investigation.


![](@images/core-concepts/isa-files-types/isa-files01.svg)

*Image source (left panel): <a href="https://isa-tools.org/format/specification.html" target="_blank">https://isa-tools.org/format/specification.html*

Your ARC has one `isa.investigation.xlsx` workbook at its root (i.e. every ARC collects the data to one investigation). Each study or assay that you add to your ARC contains one `isa.study.xlsx` or `isa.assay.xlsx`, respectively. 

## ISA-Tab for intuitive collection of metadata

The most user-intuitive format of the ISA metadata framework is <a href="https://isa-specs.readthedocs.io/en/latest/isatab.html" target="_blank">ISA-Tab</a>. As the name suggest, it's a tabular format. Hence, you can view the files in a spread-sheet program of choice. 

![](@images/core-concepts/isa-files-types/isa-files02.svg)
  
Comparison of the ISA file types. Grey cells: `keys`. White cells: values.

The major difference between the ISA workbooks is their **read-direction**:
- `isa.investigation.xlsx` is read *top-to-bottom* (keys on the left, values extending to the right)
- `isa.study.xlsx` and `isa.assay.xlsx` *left-to-right* (keys on top, value extending to the bottom)

## A registry to your ARC

The `isa.investigation.xlsx` allows to store metadata relevant on the investigation-level (e.g. title, date, contributor and publication details of the investigation). In addition, it functions as a "registry" to your ARC.

Each study (`isa.study.xlsx`) and assay (`isa.assay.xlsx`) of your ARC as well as a summary of metadata contained in them are registered and listed in the `isa.investigation.xlsx`. 

![](@images/core-concepts/isa-files-types/isa-files04.svg)

<!-- The isa.investigation.xlsx functions as registry to your ARC. -->


## Communicate how your processes connect

The output of one study or assay can function as the input to another study or assay. By using the same unique identifiers across your `isa.study.xlsx` and `isa.assay.xlsx` workbooks, respectively, 
you can communicate how the experimental processes and workflows connect.

![](@images/core-concepts/isa-files-types/isa-files05.svg)

:::tip
Use unique identifiers across ISA files to connect your lab workflows
:::

## You can point to data files

By linking files stored in your ARC (e.g. raw data files in a dataset folder), you can let others know which experimental workflow was followed to produce these data files.

![](@images/core-concepts/isa-files-types/isa-files06.svg)


## Resources

For more details about the ISA model, please also refer to ISA tools (https://isa-tools.org/) and ISA specifications (https://isa-specs.readthedocs.io/)
