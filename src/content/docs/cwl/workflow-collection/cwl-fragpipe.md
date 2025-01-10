---
title: "CWL Fragpipe"
lastUpdated: 2025-01-09
authors:
  - caro-ott
sidebar:
  order: -1
---

# FragPipe

[FragPipe](https://fragpipe.nesvilab.org/) is a software suite for the analysis of mass spectrometry-based proteomics data. 
It is available as a Graphical User Interface (GUI) and as a command line tool. An official docker image is available on [dockerhub](https://hub.docker.com/r/fcyucn/fragpipe).
There are different settings for several analysis workflows. A collection of predefined workflows is available on their [github repository](https://github.com/Nesvilab/FragPipe/tree/develop/MSFragger-GUI/workflows).

# Requirements for the FragPipe ARC-CWL workflow

Most requirements can be downloaded from this repository: [FragPipe-CWL](https://github.com/caroott/FragPipe-CWL/tree/master). 
FragPipe requires additional tools to run. They have to be downloaded manually due to licensing restrictions. How to download the tools is explained [here](#fragpipe-tools).

## Dockerfile

The current official dockerimage is missing `curl`. Thsi can be circumvented by using an own Dockerfile based on the official one and adding the `curl` installation command to the file. 
Such a Dockerfile can be found [here](https://github.com/caroott/FragPipe-CWL/blob/master/Dockerfile).

## ARC parameter collection script

This workflow uses a script to collect the required parameters for the FragPipe ARC-CWL workflow. The script can be found [here](https://github.com/caroott/FragPipe-CWL/blob/master/scripts/manifestAndWorkflow.fsx).
This script will create the required manifest file and adapt the workflow file for the run.

## CommandLineTool and Workflow descriptions

The CommandLineTool and Workflow descriptions for the parameter collection can be found here:
 - [FragPipe CommandLineTool](https://github.com/caroott/FragPipe-CWL/blob/master/Fragpipe.cwl)
 - [ManifestAndWorkflow CommandLineTool](https://github.com/caroott/FragPipe-CWL/blob/master/ManifestAndWorkflow.cwl)
 - [Workflow](https://github.com/caroott/FragPipe-CWL/blob/master/Workflow.cwl)

The workflow executes both CommandLineTool descriptions in the correct order.

## FragPipe tools

The FragPipe tools have to be downloaded manually due to licensing restrictions. The easiest way is to download all required tools through the 
FragPipe GUI and mount them into the docker container. For that the tools have to be placed in the `tools` directory in the workflow directory. 

### Downloading the tools with the FragPipe GUI

1. Download the FragPipe GUI from the [FragPipe releases](https://github.com/Nesvilab/FragPipe/releases) and unzip it.
2. Navigate to the `bin` folder and run the `fragpipe.exe`.
3. In the config tab click on the `Download / Update` button and follow the steps
![](@images/guides/cwl/ToolDownload.png)
4. Copy the `tools` directory into your workflow directory.

## Directory structure

After obtaining all required files, your workflows directory structure should look like this:
```
\--- workflows  
    \--- Fragpipe
            | Dockerfile
            | Fragpipe.cwl
            | ManifestAndWorkflow.cwl
            | Workflow.cwl
        \--- tools
        \--- scripts
                    | manifestAndWorkflow.fsx
```

# Setting up the run

The run requires a `run.cwl` and a `run.yml` file. The `run.cwl` file content could look like this:
```yaml
cwlVersion: v1.2
class: Workflow

requirements:
  - class: MultipleInputFeatureRequirement
  - class: SubworkflowFeatureRequirement
# you can specify resources here:
#  - class: ResourceRequirement
#    coresMin: 20
#    ramMin: 40960
inputs:
  arcDirectory: Directory
  runName: string
  assayName: string
  experimentColumn: string
  replicateColumn: string
  acquisitionColumn: string
  fastAPath: string
  ddaOnly: string
  headless: boolean
  workdir: string
  toolsFolder: string
  threads: int

steps:
  FragpipeAll:
    run: ../../workflows/Fragpipe/workflow.cwl
    in:
      arcDirectory: arcDirectory
      runName: runName
      assayName: assayName
      experimentColumn: experimentColumn
      replicateColumn: replicateColumn
      acquisitionColumn: acquisitionColumn
      fastAPath: fastAPath
      ddaOnly: ddaOnly
      headless: headless
      workdir: workdir
      toolsFolder: toolsFolder
      threads: threads
    out: [result]

outputs:
  FragpipeAllResult:
    type: Directory
    outputSource: FragpipeAll/result
```

If you changed the name of the folder in workflows, you have to update it in `run` value of the FragpipeAll step.

The run.yml file contains all the necessary information for your run. You can specify how the run should be named, 
the name of the assay you want to analyze, the columns in your assay or study files specifying the experiment, replicate and acquisition mode, the path 
to the fasta protein database file, if you want to run DDA only, if you want to run headless, the working directory, the path to the tools folder and the number of threads to use.

An example `run.yml` file could look like this:
```yaml
arcDirectory:
  class: Directory
  path: ../../
runName: MyRun
assayName: MyAssay
experimentColumn: "Condition, Parameter"
replicateColumn: "Replicate, Characteristic"
acquisitionColumn: "scan mode, Parameter"
fastAPath: ./arc/studies/MyOrganism/resources/ProteinsFastaWithDecoys.fasta
ddaOnly: "TRUE"
headless: true
workdir: ./arc/runs/MyRun
toolsFolder: ./arc/workflows/Fragpipe/tools
threads: 20
```

You have to update the paths and names in the `run.yml` file to match your ARC. The three columns specified here must exist in your assay or study files. The first part is the column name, the second the column type. 
An experiment column could be a condition like heat or cold for example. The acquisition column specifies if the scan mode is DDA or DIA. 
Your assay must have one sheet named "Mass spectrometry", which is linked to previous assays and studies containing the previous columns trough inputs and outputs (standard assay/study setup). The output of this sheet 
must be of type `Data` and contain the names of your mass spectrometry files or folders (just the name, not the path, e.g. `MyRun.d`).

FragPipe itself requires a `fragpipe.workflow` file, specifying the workflow settings. You can use a predesigned workflow from the FragPipe repository or create your own (this is easier with the GUI). 

## Directory structure

After you obtained those files, the folder structure should look like this:
```
\--- runs
    \--- MyRun
        | run.cwl
        | run.yml
        | fragpipe.workflow
\--- workflows
    \--- Fragpipe
            | Dockerfile
            | Fragpipe.cwl
            | ManifestAndWorkflow.cwl
            | Workflow.cwl
        \--- tools
        \--- scripts
                    | manifestAndWorkflow.fsx
```

# Running the workflow

To run the workflow with the cwltool, you navigate to the `runs` folder and run the following command:
```bash
cwltool ./MyRun/run.cwl ./MyRun/run.yml
```