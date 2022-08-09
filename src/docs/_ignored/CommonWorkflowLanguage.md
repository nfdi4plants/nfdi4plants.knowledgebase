---
layout: docs
title: Common Workflow Language
published: 2022-08-08
author: Dominik Brilhaus
author_orcid: https://orcid.org/0000-0001-9021-3197
author_github: brilator
add toc: true
add sidebar: _sidebars/mainSidebar.md
article_status: draft
---

> Note: This is just a first collection of thoughts.
> Could be partitioned into fundamentals/implementation/tutorial

## Fundamentals: (code / software) reproducibility

- Reproducibility of computational analyses
  - a) you can "reproduce" that exact same output (run result) using the exact same inputs
  - b) you can apply the analysis onto other data to produce analogous outputs, that can be fed into other workflows (e.g. generate similar figures)

- How we usually (learn to) work with scripts
  - interactive, iterative
  - adapt script to specific needs
  - write (hard-code) inputs, outputs into script

- Problem
  - hand script to colleague
  - script not working due to missing (software) dependencies, changed (absolute) paths to environments / inputs / other dependencies (e.g. database resources)

- Example sources for scripts
  - workshop / summer school
  - colleagues
  - manual / tutorial to a tool (downloaded and adapted from GitHub)
  - copy/pasted from stack overflow

- Software dependencies
  - on multiple levels / in different shapes
  - operating system (Linux, Windows, Mac)
  - programming environment / interpreter (shell, python, r, julia, f#)
  - packages / libraries within the programming environment
  - version of one of above
  - (use of) virtual environments

## Implementation: Make your ARC reproducible / executable with CWL

1. add workflows / scripts to `workflows`
2. Make workflows CWL-executable, by adding (parallel to the workflow / in the same workflows subdir) a .cwl file that
   - describes the expected inputs, outputs, and parameters
3. Execute the workflow
   1. "directly", calling the parameters via CLI
    
    ```bash
    cwltool my_workflow.cwl -p1 parameter1 -p2 parameter2
    ```

   2. referencing to a YAML file, that collects the required parameters
    ```bash
    cwltool my_workflow.cwl my_workflow_parameters.yml
    ```

- use of paths / working directories
- runs folder
- Workflow metadata: my_workflow_parameters.yml

## Tutorial: CWL Generator quickstart

### Install

[gh-CWLgenerator][https://github.com/nfdi4plants/CWLGenerator]

### Dependencies

- Node.js (required for CWL Generator)
- cwltool / cwl-runner
- Docker (?)

### Recommendations

- VS code extension [CWL (Rabix/Benten)](https://marketplace.visualstudio.com/items?itemName=sbg-rabix.benten-cwl)


### Note / Typical errors

- (re)moved a required input or output
- cwltool can neither resolve "~" nor $HOME ?!
- let recurrent variables (script name, outfolder, etc.) come first
