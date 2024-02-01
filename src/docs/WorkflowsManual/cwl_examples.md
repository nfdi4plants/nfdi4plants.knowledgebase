---
layout: docs
title: "CWL Examples"
date: 2024-01-18
add toc: false
add support: false
add sidebar: _sidebars/mainSidebar.md
---

# CWL Examples

CWL and job files are written in the [YAML](https://en.wikipedia.org/wiki/YAML) format. All indentations 
are made using double spaces.

## Wrapping a console tool
### Without docker

A command line tool requires a `baseCommand` which is used to call the tool. This can be 
the name of the tool, if it is added to the PATH, or a relative/absolute path to the `.exe`. 
If the basecommand consists of multiple words, it can be written as a list: `[my, Tool]`. The next part is the `inputs` 
section. It consists of a variable number of arguments required for the tool to run. Each input can specify 
the type, position and prefix of the input. The last part is the `outputs` section. Multiple outputs can be specified by 
name, type and their location.

```yaml
cwlVersion: v1.2
class: CommandLineTool
baseCommand: myTool
inputs:
  input1:
    type: File
    inputBinding:
      position: 1
  input2:
    type: Directory
    inputBinding:
      position: 2
      # prefix is optional
      prefix: -i
outputs:
  myOutput:
    type: Directory
    outputBinding:
      # this returns the whole working directory
      glob: $(runtime.outdir)
```

### With a docker container

To ensure reproducibility of the tools execution on any system, it is recommended to pack it in a docker 
container. The docker container is automatically pulled with a reference to the container under 
either `requirements` or `hints`. Additional requirements, such as network access, can be specified as well.

```yaml
cwlVersion: v1.2
class: CommandLineTool
hints:
  DockerRequirement:
    dockerPull: address/to/my/docker
requirements:
  - class: NetworkAccess
    networkAccess: true
baseCommand: myTool
inputs:
  input1:
    type: File
    inputBinding:
      position: 1
  input2:
    type: Directory
    inputBinding:
      position: 2
      # prefix is optional
      prefix: -i
outputs:
  myOutput:
    type: Directory
    outputBinding:
      # this returns the whole working directory
      glob: $(runtime.outdir)
```

### With a fixed script file

Oftentimes, individual analysis is done within scripts for the flexibility, instead of tools with 
fixed tasks. In this case, it is recommended to encode the script as a fixed part of the cwl description. 
The script is then accessible in the cwl description and can be calles as part of the `baseCommand`. It can be 
a script that functions as a command line and still expects inputs, or as a self contained analysis without further input requirements.

```yaml
cwlVersion: v1.2
class: CommandLineTool
hints:
  DockerRequirement:
    dockerPull: address/to/my/docker
requirements:
  - class: InitialWorkDirRequirement
    listing:
      - entryname: myAnalysis.script
        entry:
          $include: myAnalysis.script
  - class: NetworkAccess
    networkAccess: true
baseCommand: [run, myAnalysis.script]
inputs:
  input1:
    type: File
    inputBinding:
      position: 1
  input2:
    type: Directory
    inputBinding:
      position: 2
      # prefix is optional
      prefix: -i
outputs:
  myOutput:
    type: Directory
    outputBinding:
      # this returns the whole working directory
      glob: $(runtime.outdir)
```

### Within an ARC with a devcontainer

Within the context of an ARC, researches often work within devcontainers or the ARC environment. CWL is able to replicate 
this workflow under the premise, that in the end everything can be executed in one go. The entire arc directory can be mounted 
into the working directory of the CWL process.

```yaml
cwlVersion: v1.2
class: CommandLineTool
hints:
  DockerRequirement:
    dockerPull: address/to/my/docker
requirements:
  - class: InitialWorkDirRequirement
    listing:
      - entryname: myAnalysis.script
        entry:
          $include: myAnalysis.script
  - class: NetworkAccess
    networkAccess: true
baseCommand: [run, myAnalysis.script]
inputs:
  input1:
    type: File
    inputBinding:
      position: 1
  input2:
    type: Directory
    inputBinding:
      position: 2
      # prefix is optional
      prefix: -i
outputs:
  myOutput:
    type: Directory
    outputBinding:
      # this returns the whole working directory
      glob: $(runtime.outdir)
```

## Workflows

Workflows can connect multiple command line tools, for example. It is possible to use the output of a 
tool as an input for the following tool and return them as intermediate results as well.

```yaml
cwlVersion: v1.2
class: Workflow

requirements:
  MultipleInputFeatureRequirement: {}

inputs:
  inputTool1_1: File
  inputTool1_2: Directory
  inputTool2_1: File

steps:
  myTool1:
    run: path/to/myTool1.cwl
    in:
      input1: inputTool1_1
      input2: inputTool1_2
    out: [myOutput1]
  myTool2:
    run: path/to/myTool2.cwl
    in:
      input1: inputTool2_1
      # direct reference to the output of myTool1. This creates a dependency.
      input2: myTool1/myOutput1
    out: [myOutput2]
outputs:
  outputTool1:
    type: Directory
    outputSource: myTool1/myOutput1
  outputTool1:
    type: Directory
    outputSource: myTool2/myOutput2
```