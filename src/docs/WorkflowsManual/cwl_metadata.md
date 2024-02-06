---
layout: docs
title: "CWL Metadata"
date: 2024-02-05
add toc: false
add support: false
add sidebar: _sidebars/mainSidebar.md
---

# CWL Metadata

Metadata plays a crucial role in enhancing the comprehensibility of CWL files. By embedding additional information about the performer and the process within the metadata, 
researchers can create a more comprehensive and informative description of their workflows.

- Performer Metadata:

    In scientific research, it's essential to know who is responsible for a particular workflow. 
    By including performer metadata in CWL files, researchers can specify the individuals or teams behind 
    the development and execution of the workflow.

- Process Metadata:

    Annotating the CWL file with metadata related to the underlying processes adds another layer of information, 
    making it easier to understand and reproduce the workflow. Process metadata may include:
    - Description of Processes: Detailed explanations of the steps involved in the workflow, providing context for each stage or the individual process.
    - Input and Output Descriptions: Clarifications about the expected inputs and outputs of each step, aiding users in understanding the data flow.
    - Description of parameters contained in the YAML jobfile

## Annotating a CWL or job file

CWL or job files can be annotated using ontology terms in the yaml format. They support the use of namespaces according to the 
[schema salad specification](https://www.commonwl.org/v1.0/SchemaSalad.html#Explicit_context). An example for the annotation with 
authorship metadata can be found [here](https://www.commonwl.org/user_guide/topics/metadata-and-authorship.html). The metadata concerning the executed 
run should be separated in the CWL and job file, depending on what the metadata describes. If an input for a tool, that is specified in the job file, is described, the 
metadata should be placed in the job file. If the metadata describes the tool itself, it should be placed in the CWL file.

In the case of a self contained tool, the corresponding metadata section could look like this and would be located in the cwl file:
```yaml
arc:has technology type:
  - class: arc:technology type
    arc:annotation value: "Docker Container"

arc:technology platform: ".NET"

arc:performer:
  - class: arc:Person
    arc:first name: "Example"
    arc:last name: "Person"
    arc:email: "example.person@email.de "
    arc:affiliation: "Institution"
    arc:has role: 
      - class: arc:role
        arc:term accession: "https://credit.niso.org/contributor-roles/formal-analysis/"
        arc:annotation value: "Formal analysis"

arc:has process sequence:
  - class: arc:process sequence
    arc:name: "script.fsx"
    arc:has input: 
      - class: arc:data
        arc:name: "folderIn/input.table"
    arc:has output:
      - class: arc:data
        arc:name: "folderout/output.table"
    arc:has parameter value: 
      - class: arc:process parameter value
        arc:has parameter:
          - class: arc:protocol parameter
            arc:has parameter name: 
            - class: arc:parameter name
              arc:term accession: "http://purl.obolibrary.org/obo/NCIT_C43582"
              arc:term source REF: "NCIT"
              arc:annotation value: "Data Transformation"
        arc:value: 
          - class: arc:ontology annotation
            arc:term accession: "http://purl.obolibrary.org/obo/NCIT_C64911"
            arc:term source REF: "NCIT"
            arc:annotation value: "Addition"


$namespaces:
  arc: https://github.com/nfdi4plants/ARC_ontology

$schemas:
  - https://raw.githubusercontent.com/nfdi4plants/ARC_ontology/main/ARC_v2.0.owl

```
This metadata section provides information about the technology platform and the person executing the workflow. It also provides information about the tool input 
and output files, as well as the operations that are applied to the data. In this case, everything is encoded in the executed script and there are no variable inputs. 
Therefore, all metadata is written in the CWL file. An example for this can be found [here](https://git.nfdi4plants.org/muehlhaus/ArcPrototype/-/tree/CWLExamples/workflows/ARCMount).

Frequently though, tools have input parameters, that alter the tools execution or input and output files. In this case, the metadata has to be written in the right location. For a tool with 
varying inputs and specifiable output location, this could look as the following for the CWL file:
```yaml
arc:has technology type:
  - class: arc:technology type
    arc:annotation value: "Docker Container"

arc:technology platform: ".NET"

arc:performer:
  - class: arc:Person
    arc:first name: "Example"
    arc:last name: "Person"
    arc:email: "example.person@email.de "
    arc:affiliation: "Institution"
    arc:has role: 
      - class: arc:role
        arc:term accession: "https://credit.niso.org/contributor-roles/formal-analysis/"
        arc:annotation value: "Formal analysis"

arc:has process sequence:
  - class: arc:process sequence
    arc:name: "script.fsx"
    arc:has parameter value: 
      - class: arc:process parameter value
        arc:has parameter:
          - class: arc:protocol parameter
            arc:has parameter name: 
            - class: arc:parameter name
              arc:term accession: "http://purl.obolibrary.org/obo/NCIT_C43582"
              arc:term source REF: "NCIT"
              arc:annotation value: "Data Transformation"
        arc:value: 
          - class: arc:ontology annotation
            arc:term accession: "http://purl.obolibrary.org/obo/NCIT_C64911"
            arc:term source REF: "NCIT"
            arc:annotation value: "Addition"
```
And this for the job file:
```yaml
arc:has process sequence:
  - class: arc:process sequence
    arc:has input: 
      - class: arc:data
        arc:name: "folderIn/input.table"
    arc:has output:
      - class: arc:data
        arc:name: "folderout/output.table"

$namespaces:
  arc: https://github.com/nfdi4plants/ARC_ontology

$schemas:
  - https://raw.githubusercontent.com/nfdi4plants/ARC_ontology/main/ARC_v2.0.owl
```
Examples for this can be found [here](https://git.nfdi4plants.org/muehlhaus/ArcPrototype/-/blob/CWLExamples/workflows/FixedScript/FSharpArcCapsule.cwl) 
for the cwl file and [here](https://git.nfdi4plants.org/muehlhaus/ArcPrototype/-/blob/CWLExamples/runs/FSharpArcCapsule.yml) for the job file.

An application example including metadata can be found [here](https://git.nfdi4plants.org/zimmer/TurboIDSampleArc/-/tree/CWL). It contains a [CWL](https://git.nfdi4plants.org/zimmer/TurboIDSampleArc/-/blob/CWL/workflows/EvalTurboID/TurboIDSampleArc.cwl) 
file with the ARC mounted and a fixed script. The CWL file has two mandatory and one optional parameter. There is one [job file](https://git.nfdi4plants.org/zimmer/TurboIDSampleArc/-/blob/CWL/runs/TurboIDSampleArc.yml) 
for the execution without the optional parameter and one [job file](https://git.nfdi4plants.org/zimmer/TurboIDSampleArc/-/blob/CWL/runs/TurboIDSampleArcFDR.yml) for 
the execution with the optional parameter. The metadata between the two job files differs by the metadata concerning the optional parameter.