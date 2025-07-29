---
title: "Dev Containers with CWL"
lastUpdated: 2025-07-25
authors:
  - pauline-hans
sidebar:
  order: 8
---

import { FileTree } from '@astrojs/starlight/components';
import { Steps } from '@astrojs/starlight/components';
import { Tabs, TabItem, Card } from '@astrojs/starlight/components';

# Dev Containers and CWL

## What is a Docker Container?

A container is a standardized software unit that bundles program code and all necessary dependencies so that applications can run quickly and reliably in different IT environments. You can think of it as a box that includes everything needed for your project.

A Docker container image is a lightweight, self-contained, executable software package that contains everything necessary to run an application: the code, the runtime environment, system tools, libraries, and configurations. Using Docker containers can, for example, improve reproducibility, which is a significant advantage over non-isolated projects.

:::tip
Further information about Docker and Docker containers can be found here:

- https://www.docker.com/resources/what-container/
- https://www.docker.com/products/docker-desktop/
:::

## What is a Dev Container?

A Dev Container is also a Docker container, but you don't always need Docker to execute it.

Think of it like this: every Jacuzzi is a whirlpool, but not every whirlpool is a Jacuzzi. Likewise, every Dev Container is a Docker container, but not every Docker container is a Dev Container. They serve the same purpose and operate similarly. If you run the container using Docker, it’s a Docker container; otherwise, it’s just a Dev Container.

## Common Workflow Language

The Common Workflow Language (CWL) is explained in detail in the Knowledge Base and can be found [here](https://nfdi4plants.github.io/nfdi4plants.knowledgebase/cwl/cwl-introduction/).

:::tip
Additional information can be found [here](https://www.commonwl.org/).
:::

# Tutorial

## Setup
<steps>
  1. Install VS Code:  
    - https://code.visualstudio.com/download
  2. Install the Dev Containers extension:  
    - https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers
  3. Install other necessary extensions for your project:  
    - For example: .NET Install Tool or Ionide for F#
  4. Install Docker Desktop:  
    - https://docs.docker.com/desktop/setup/install/windows-install/
</steps>


## Dev Container in VS Code
<steps>
  1. Create a new folder with your project name and open it in VS Code.  
  2. In the VS Code menu bar, click **View** > **Command Palette** and run the following command:
  
  **`Dev Containers: Add Dev Container Configuration Files...`**
</steps>

## Settings

There are two options for setting up your environment:

### Option A
<steps>
  1. Start with "Add configuration to workspace"  
  2. Choose **.NET (C#), Node.js (TypeScript) & MS SQL**  
  3. Select `8.0-bookworm` (default)  
  4. Select `-lts` (default)  
  5. Then press OK, or select additional features if desired
</steps>

**Note:** If you choose this option, you must manually add the F# extension to the `devcontainer.json` file. Insert `"ms-dotnettools.fsharp"` in the `"extensions"` section.

### Option B
<steps>
  1. Start with "Add configuration to workspace"  
  2. Choose **F# (.NET)** and press OK
</steps>

**Note:** If you choose this option, you’ll need to create your own Dockerfile!

You now have the files needed to run the Dev Container: `devcontainer.json` and `Dockerfile`.  
- `devcontainer.json` tells VS Code how to work with that environment (extensions, settings, folder paths).  
- The `Dockerfile` is a text file with instructions to build a Docker image—it defines everything needed to set up and run your application in a container.

<Card icon="pen" title= "Example">

This example uses **Option B**, which requires creating a Dockerfile. You can create it by running the command `touch Dockerfile` in the VS Code terminal. The image below shows a simple Dockerfile:

``` Dockerfile
FROM mcr.microsoft.com/dotnet/sdk:8.0

ENV DOTNET.DockerScoutOptOut=1

COPY *.devcontainer/settings.vscode.json /root/.vscode-remote/data/Machine/setting.json

RUN apt-get update && apt-get -y install git procps 
```


**Note:** Check your .NET version using the terminal or PowerShell with `dotnet --version`.

Now we have everything we need to start our project.

# Start the Programming Journey

## Creating the Scripts

This tutorial starts with two scripts, each of which creates a column chart and a target folder to store the results.

```fsx  
#r "nuget: Plotly.NET, 5.0.0"
#r "nuget: Plotly.NET.Interactive, 5.0.0"
#r "nuget: Plotly.NET.ImageExport, 6.1.0"
open Plotly.NET
open Plotly.NET.Interactive
open System 
open System.IO 

//creating target directory, where the results are stored
let outputDir = "./Results"
Directory.CreateDirectory(outputDir) |> ignore

//example: simple column chart for Devcontainer Tutorial 
let x = 25
let y = 85
let combine = [|x, y|]

let buildChart = 
    Chart.Column (
        keysValues = combine,
        Name = "Example Chart for Devcontainer Tutorial"
    )
buildChart |> Chart.saveHtml (Path.Combine(outputDir, "exampleChart1"))
```

The second example Script is identical 

```fsx2
#r "nuget: Plotly.NET, 5.0.0"
#r "nuget: Plotly.NET.Interactive, 5.0.0"
#r "nuget: Plotly.NET.ImageExport, 6.1.0"
open Plotly.NET
open Plotly.NET.Interactive
open System 
open System.IO

//example Chart 2 for Devocontainer tutorial 

let outputDir = "./Results"
Directory.CreateDirectory(outputDir) |> ignore
let x = 34
let y = 26 
let combine = [| x, y|]

let buildChart = 
    Chart.Column (
        keysValues = combine,
        Name = "Example Chart for Devcontainer Tutorial"
    )
buildChart |> Chart.saveHtml (Path.Combine(outputDir, "exampleChart2"))
```
After that we need the CWL Command-Line-Tools and the CWL-Workflow 

```yaml
cwlVersion: v1.2
class: CommandLineTool
hints:
  DockerRequirement:
    dockerImageId: "devcontainertutorial"
    dockerFile: {$include: "./Dockerfile"}
requirements:
  - class: InitialWorkDirRequirement
    listing:
      - entryname: devcontainerTutorial
        entry: $(inputs.devcontainerTutorial)
        writable: true
  - class: EnvVarRequirement
    envDef:
      - envName: DOTNET_NOLOGO
        envValue: "true"
  - class: NetworkAccess
    networkAccess: true
baseCommand: [dotnet, fsi, "./devcontainerTutorial/exampleChart1.fsx"]

inputs: 
  devcontainerTutorial:
    type: Directory

outputs: 
  output_exampleChart1: 
    type: Directory
    outputBinding: 
      glob: ./Results
``` 
```yaml 
cwlVersion: v1.2
class: CommandLineTool
hints:
  DockerRequirement:
    dockerImageId: "devcontainertutorial"
    dockerFile: {$include: "./Dockerfile"}
requirements:
  - class: InitialWorkDirRequirement
    listing:
      - entryname: devcontainerTutorial
        entry: $(inputs.devcontainerTutorial)
        writable: true
  - class: EnvVarRequirement
    envDef:
      - envName: DOTNET_NOLOGO
        envValue: "true"
  - class: NetworkAccess
    networkAccess: true
baseCommand: [dotnet, fsi, "./devcontainerTutorial/exampleChart2.fsx"]

inputs: 
  devcontainerTutorial:
    type: Directory

outputs: 
  output_exampleChart2: 
    type: Directory
    outputBinding: 
      glob: ./Results
```
With the Command-Line-Tools we can create the CWL workflow: 

```yaml
cwlVersion: v1.2
class: Workflow 
hints: 
    DockerRequirement: 
      dockerImageId: "devcontainerTutorial"
      dockerFile: {$include: "./Dockerfile"}
requirements: 
  - class: InitialWorkDirRequirement
    listing: 
      - entryname: tutorialDevcontainer 
        entry: $(inputs.tutorialDevcontainer)
        writable: true 
  - class: MultipleInputFeatureRequirement 

inputs: 
  devcontainerTutorial: Directory 

steps: 
  exampleChart1: 
    run: exampleChart1.cwl 
    in: 
      devcontainerTutorial: devcontainerTutorial
    out: [output_exampleChart1]
  exampleChart2: 
    run: exampleChart2.cwl 
    in: 
      devcontainerTutorial: devcontainerTutorial
    out: [output_exampleChart2]

outputs: 
  output_1: 
    type: Directory  
    outputSource: exampleChart1/output_exampleChart1
  output_2: 
    type: Directory 
    outputSource: exampleChart2/output_exampleChart2
```
We are almost there, because the YAML file is missing for the final execution. 
(Additional information about the YAML file can be found here: https://www.commonwl.org/user_guide/topics/yaml-guide.html). The YAML file for this tutorial looks like this: 

```yaml 
devcontainerTutorial: 
    class: Directory 
    path: ./ 
``` 
ANow you have everything you need to run a CWL workflow within a Docker container. Just open your WSL (or terminal, if you're using Linux) and run the following command: `cwltool ./workflow.cwl ./run.yml`. 

