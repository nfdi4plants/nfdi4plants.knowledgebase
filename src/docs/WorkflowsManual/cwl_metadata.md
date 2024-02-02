---
layout: docs
title: "CWL Metadata"
date: 2024-01-18
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