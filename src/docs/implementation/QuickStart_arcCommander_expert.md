---
layout: docs
title: ARC Commander QuickStart (Expert Version)
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

> :warning: Before using this guide, please follow the Setup instructions in the [ARC Commander manual](https://nfdi4plants.org/nfdi4plants.knowledgebase/docs/implementation/ArcCommanderManual/index.html)

## Checkpoint

:white_check_mark: You know how to use a command line or terminal  
:white_check_mark: You have created an ARC before  
:white_check_mark: The latest version of the [ARC Commander](https://github.com/nfdi4plants/arcCommander/releases) is installed on your computer  
:white_check_mark: You have a [DataPLANT](https://register.nfdi4plants.org) account  
:white_check_mark: Your computer is linked to the [DataHUB](https://git.nfdi4plants.org) via personal access token

> :rocket: Voila! You are ready to follow these few steps to create a minimal ARC sharable via DataPLANT's DataHUB.

Replace the `<variables>` in the following code block with your information and execute it in your command line.

```bash
# Create and navigate to your ARC folder
mkdir <path/to/YourARCFolder>
cd <path/to/YourARCFolder>

# Setup the ARC structure with one study and one assay
arc init
arc i create -i <YourInvestigationID>
arc a add -s <YourStudyID> -a <YourAssayID>

arc sync -f -r https://git.nfdi4plants.org/<YourUserName>/<YourARC> -m "initialize ARC structure"
```

> 💡 Make sure that no ARC exists at `https://git.nfdi4plants.org/<YourUserName>/<YourARC>`. Otherwise you will sync to that ARC.

> 💡 The last command will prompt an Error `ERROR: GIT: fatal: repository 'https://git.nfdi4plants.org/<YourUserName>/<YourARC>' not found` (Windows) or `ERROR: GIT: fatal: couldn't find remote ref main` (macOS). Don't worry, the ARC is being created at that DataHUB during this step.

> 💡 You might need to repeat linking your computer to the DataHUB first via  
`arc remote accesstoken get -s https://git.nfdi4plants.org`.
