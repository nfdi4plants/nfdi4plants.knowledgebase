---
layout: docs
title: ARC Commander QuickStart (Experts)
published: 2023-01-27
author: "Dominik Brilhaus"
author_orcid: https://orcid.org/0000-0001-9021-3197
author_github: brilator
add toc: false
add support: false
add sidebar: _sidebars/mainSidebar.md
article_status: published
todo:
---

<br>

<a href="./index.html">
    <span style="color: #2D3E50; padding: 4px 8px;text-align: center; border-radius: 10px 0px 0px 10px; border: solid 1px;">User</span><span style="background-color: #FFC000;color:white; padding: 4px 8px;text-align: center; border-radius: 0px 10px 10px 0px; border: solid 1px #2D3E50">Advanced</span>
    <span style="color: #2D3E50; padding: 4px 8px;text-align: center; border-radius: 10px 0px 0px 10px; border: solid 1px;">Mode</span><span style="background-color: #2D3E50;color:white; padding: 4px 8px;text-align: center; border-radius: 0px 10px 10px 0px; border: solid 1px #2D3E50">Tutorial</span>
</a>

## About

In this guide we focus on how to use the [ARC Commander](./../implementation/ArcCommander.html) to create your ARC and structure, store and share your data.

## Before we can start

:ballot_box_with_check: You know how to use a command line  
:ballot_box_with_check: You have created an ARC before  
:ballot_box_with_check: The latest version of the [ARC Commander](https://github.com/nfdi4plants/arcCommander/releases) is installed on your computer  
:ballot_box_with_check: You have a [DataPLANT](https://register.nfdi4plants.org) account  
:ballot_box_with_check: Your computer is linked to the [DataHUB](https://git.nfdi4plants.org) via personal access token

:rocket: Voila! You are ready to follow these few steps to create a minimal ARC sharable via DataPLANT's DataHUB.

## Two minutes two your ARC

```bash
# Create and navigate to your ARC folder
mkdir <path/to/YourARCFolder>
cd <path/to/YourARCFolder>

# Setup the ARC structure with one study and one assay
arc init
arc investigation create -i <YourInvestigationID>
arc assay add -s <YourStudyID> -a <YourAssayID>

arc sync -f -r https://git.nfdi4plants.org/<YourUserName>/<YourARC> -m "initialize ARC structure"
```

> 💡 Make sure that no ARC exists at `https://git.nfdi4plants.org/<YourUserName>/<YourARC>`. Otherwise you will sync to that ARC.

> 💡 The last command will prompt an Error `ERROR: GIT: fatal: repository 'https://git.nfdi4plants.org/<YourUserName>/<YourARC>' not found` (Windows) or `ERROR: GIT: fatal: couldn't find remote ref main` (macOS). Don't worry, the ARC is being created at that DataHUB during this step.

