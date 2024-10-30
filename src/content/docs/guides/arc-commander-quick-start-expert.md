---
title: ARC Commander QuickStart (Experts)
lastUpdated: 2023-01-27
authors:
  - dominik-brilhaus
pagefind: false 
---

## About this guide

In this guide we focus on how to use the [ARC Commander](/arc-commander) to create your ARC and structure, store and share your data.

## Before we can start

☑️ You know how to use a command line
☑️ You have created an ARC before  
☑️ The latest version of the [ARC Commander](https://github.com/nfdi4plants/arcCommander/releases) is installed on your computer  
☑️ You have a [DataPLANT](https://register.nfdi4plants.org) account  
☑️ Your computer is linked to the [DataHUB](https://git.nfdi4plants.org) via personal access token

:rocket: Voila! You are ready to follow these few steps to create a minimal ARC sharable via DataPLANT's DataHUB.

## Two minutes to your ARC

```bash
# Create and navigate to your ARC folder
mkdir <path/to/YourARCFolder>
cd <path/to/YourARCFolder>

# Setup the ARC structure with one study and one assay
arc init -i <YourInvestigationID>
arc assay add -s <YourStudyID> -a <YourAssayID>

arc sync -f -r https://git.nfdi4plants.org/<YourUserName>/<YourARC> -m "initialize ARC structure"
```

> 💡 Make sure that no ARC exists at `https://git.nfdi4plants.org/<YourUserName>/<YourARC>`. Otherwise you will sync to that ARC.

> 💡 The last command will prompt an Error `ERROR: GIT: fatal: repository 'https://git.nfdi4plants.org/<YourUserName>/<YourARC>' not found` (Windows) or `ERROR: GIT: fatal: couldn't find remote ref main` (macOS). Don't worry, the ARC is being created at that DataHUB during this step.

