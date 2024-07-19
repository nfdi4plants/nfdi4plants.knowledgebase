---
layout: docs
title: ARC Commander QuickStart (Experts)
date: 2023-01-27
author:
- name: Dominik Brilhaus
  github: https://github.com/brilator
  orcid: https://orcid.org/0000-0001-9021-3197
add toc: true
add support: true
add sidebar: _sidebars/mainSidebar.md
status: published
---

## About this guide

In this guide we focus on how to use the [ARC Commander](./../implementation/ArcCommander.html) to create your ARC and structure, store and share your data.

<div style="padding-bottom: 20px">
    <a href="./index.html">
        <span class="badge-category">User</span><span class="badge-selected" id="badge-advanced">Advanced</span>
        <span class="badge-category">Mode</span><span class="badge-selected" id="badge-tutorial">Tutorial</span>
    </a>
</div>

## Before we can start

:ballot_box_with_check: You know how to use a <a href="./tutorial_TheCommandLine.html" target="_blank">command line</a>  
:ballot_box_with_check: You have created an ARC before  
:ballot_box_with_check: The latest version of the [ARC Commander](https://github.com/nfdi4plants/arcCommander/releases) is installed on your computer  
:ballot_box_with_check: You have a [DataPLANT](https://register.nfdi4plants.org) account  
:ballot_box_with_check: Your computer is linked to the [DataHUB](https://git.nfdi4plants.org) via personal access token

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

