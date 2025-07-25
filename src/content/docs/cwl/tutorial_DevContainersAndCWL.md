---
title: "Dev Containers with CWL"
latIpdated: 2025-07-25
authors: 
  - pauline-hans
sidebar: 
  order: 8
--- 
# Dev Containers and CWL 
## What is a Docker Container? 
A container is a standardised software unit that bundles program code and all necessary dependencies so that applications can be executed quickly and reliably in different IT environments. You can imagine it as a box where all the stuff you need for your project is included. A Docker container image is a lightweight, self-contained, executable software package that contains everything necessary to run an application: the code, the runtime environment, system tools, libraries, and configurations. The use of Docker containers can, for example, increase reproducibility, which offers an enormous advantage over non-isolated projects outside a Docker container. Further information’s about Docker and Docker Container can be found here: 

https://www.docker.com/resources/what-container/
https://www.docker.com/products/docker-desktop/

## What is a Dev Container? 
A Devcontainer is also a Docker Container but to execute a Devcontainer you don’t need always Docker to run it. 

Imagine it like that every jacuzzi is a whirlpool but not every whirlpool is a jacuzzi. So every Devcontainer is a Docker container but not every Docker container is a Devcontainer
They do both the same and have the same intentions, if you run the container on Docker, it’s a Docker Container otherwise just a Devcontainer.    

## Common-Workflow-Language 
The Common-Workflow-Language (CWL) is detailed explained in the Knowledgebase: 

https://nfdi4plants.github.io/nfdi4plants.knowledgebase/cwl/cwl-introduction/

More Information (if needed) can be found here: https://www.commonwl.org/

# Tutorial 
## Setup 
1. Install VS Code 
- https://code.visualstudio.com/download

2. Install the Dev Containers Extension 
- https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers

3. Install other necessary extensions for your project
- For example: .NET Install Tool or Ionide for F#  

4. Install Docker Desktop: 
- https://docs.docker.com/desktop/setup/install/windows-install/

## Dev Container in VS Code 
1. Create a new Folder with your project name and open it in VS Code
2. Go into VS Code to the menu bar and click on "View" and then on "Command Palette" to execute the following command 

<b>"Dev Containers: Add Dev Container Configuration Files..."</b>

## Settings
For your settings there are two possible ways: 

### Option A
1. Start with "Add configuration to workspace"
2. Choose .NET (C#), Node.js (TypeScript) & MS SQL
3. 8.0-bookwork (default)
4. -lts (default)
5. then press ok, or select additional features if you want them

<b>Note: if you choose this way, then you have to insert the F# extension in the devcontainer.json file. For that you have to type in "ms-dotnettools.fsharp" into the extensions section!</b>

### Option B 
1. Sart with "Add configuration to workspace"
2. Choose F# (.NET) and press OK 

<b>Note: if you choose option B you have to create your own Docker File!</b>

Now you have files that are needed for running the dev container: devcontainer.json and Dockerfile 
    - The devcontainer.json tells VS Code how to work with that environment (extensions, settings, folder paths).
    - A Dockerfile is a text file that contains instructions to build a Docker image. It defines everything needed to set up and run your application in a container.
## Example 
This Example chooses Option B. For this we have to create a Dockerfile, this can be done by going into the terminal of VS Code and with the execute "touch Dockerfile". The following picture shows a simple Dockerfile. 

![image.png](attachment:image.png)

Note: Check your Dotnet Version via Terminal or Powershell with "dotnet --version". Now we have everything we need to start our project. 

# Start the programming journey 
## Creating the scripts 
This tutorial starts with two scripts, each of which creates a column chart and the target folder where the results are stored. 

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

```CWL 
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
```CWL 
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

```CWL workflow
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
And now you have everything you need for running a CWL workflow within a Docker Container. Just open your wsl (or Terminal when you work with Linux) and type in the execution order: `cwltool ./workflow.cwl ./run.yml`. 

