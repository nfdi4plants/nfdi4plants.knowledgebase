---
layout: docs
title: "CWL Examples"
date: 2024-02-05
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
[Example](https://git.nfdi4plants.org/muehlhaus/ArcPrototype/-/tree/CWLExamples/workflows/FixedScript)

### With a fixed script in a mounted arc

When scripting, it is convenient to work within the environment of the ARC (e.g. location of files, writing results in the runs 
folder and so on). When the ARC is mounted within the CWL process, the script can be ran in that environment and the corresponding runs folder 
is then returned as an output.

```yaml
cwlVersion: v1.2
class: CommandLineTool
hints:
  DockerRequirement:
    dockerPull: address/to/my/docker
requirements:
  - class: InitialWorkDirRequirement
    listing:
      # this specifies the name of the root folder
      - entryname: arc
        entry: $(inputs.arcDirectory)
        writable: true
  - class: NetworkAccess
    networkAccess: true
baseCommand: [run, ./arc/workflows/myWorkflow/myAnalysis.script]
inputs:
  # the arc root directory is given as an input, but not called by the process
  arcDirectory:
    type: Directory
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
      glob: "./arc/runs/myRun"
```

[Example](https://git.nfdi4plants.org/muehlhaus/ArcPrototype/-/tree/CWLExamples/workflows/ARCMount)
### Within an ARC with a devcontainer

Within the context of an ARC, researches often work within devcontainers or the ARC environment. CWL is able to replicate 
this workflow under the premise, that in the end everything can be executed in one go by including the Dockerfile of the devcontainer. 
The entire arc directory can be mounted into the working directory of the CWL process as well, making the script for the devcontainer 
and CWL process identical. This enables explorative work in scripts which can then be executed with CWL after completion without much overhead.

```yaml
cwlVersion: v1.2
class: CommandLineTool
hints:
    dockerImageId: "devcontainer"
    dockerFile: {$include: "devcontainer/Dockerfile"}
requirements:
  - class: InitialWorkDirRequirement
    listing:
      # this specifies the name of the root folder
      - entryname: arc
        entry: $(inputs.arcDirectory)
        writable: true
  - class: NetworkAccess
    networkAccess: true
baseCommand: [run, ./arc/workflows/myWorkflow/myAnalysis.script]
inputs:
  # the arc root directory is given as an input, but not called by the process
  arcDirectory:
    type: Directory
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
      glob: "./arc/runs/myRun"
```
The Dockerfile should only include operations that reference resources that are available online or within the baseimage. COPY operations that point to local files for 
example won't work in the context of CWL. If they are necessary for the execution in the devcontainer context (e.g. configuration for editors), but not the execution of the script, they 
can be prefixed with a `*` to make the execution of the operation optional.

[Example](https://git.nfdi4plants.org/muehlhaus/ArcPrototype/-/tree/CWLExamples/workflows/Devcontainer)
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