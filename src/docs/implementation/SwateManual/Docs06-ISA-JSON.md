---
layout: docs
title: ISA-JSON import and export
published: 2022-09-19
Author: Kevin Frey
add toc: false
add sidebar: _sidebars\mainSidebar.md
---

<br>

It is possible to export and import your Swate annotation tables to ISA-JSON conform .json files. 

## ISA-JSON and ISADotNet

We follow ISA-JSON [schemas](https://isa-specs.readthedocs.io/en/latest/isajson.html#schemas). To ensure correct Swate import we need to add additional information to the json files. 

For example:

- Add comments to remember column position.
    
```json
"comments": [
    {
        "name": "ValueIndex",
        "value": "0"
    }
]
```
- Add the term accession to the name to store the unique identifier of ontology terms.
```json
"componentName": "LECO instrument model (MS:1001800)",
```

## Export

This is done via the Swate.Experts interface under the *Json Exporter* tab. 
You can choose multiple option to export your Swate tables:
- Export the active table or all annotation tables in the workbook.
- Export as [assay.json](https://isa-specs.readthedocs.io/en/latest/isajson.html#assay-schema-json) or [sequence of process.json](https://isa-specs.readthedocs.io/en/latest/isajson.html#process-schema-json).


## Import

You can import all files created by the Swate export function by using the Swate.Core "Add template(s) from file" option under the "Templates" tab.

The app will try to fit the imported json to any supported information and directly insert all tables into the excel workbook.
