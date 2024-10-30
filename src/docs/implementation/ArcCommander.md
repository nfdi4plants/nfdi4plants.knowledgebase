---
layout: docs
title: ARC Commander
date: 2022-08-10
author:
- name: Dominik Brilhaus
  github: https://github.com/brilator
  orcid: https://orcid.org/0000-0001-9021-3197
add toc: true
add sidebar: _sidebars/mainSidebar.md
status: published
---

## A tool to make FAIR RDM easy

The ARC Commander is one of two central DataPLANT tools designed for convenient interaction with your [ARC][kb-AnnotatedResearchContext] (the other one being [SWATE][kb-Swate]).
It supports you in many actions on files within your ARC enabling you to sort, associate and keep track of your files.

The major function of the ARC Commander is to set up the ARC directory and put it under [version-control][kb-VersionControlGit] for you. The ARC Commander creates the directory structure with the root directories "studies", "assays", "runs", and "workflows" (see [ARC][kb-AnnotatedResearchContext] for details).  According to the design of your project, you can use the ARC Commander to create study and assay sub-directories and add the associated details and data files. While setting up the root directory structure, the ARC Commander initializes your ARC as a [git][kb-VersionControlGit] repository, allowing you to track changes of your ARC and easily back-up and synchronize it with the [DataHUB][kb-DataHub]. This includes an efficient mechanism to keep track of your large data files. <!-- with the git lfs extension --> The ARC Commander makes it straight-forward to download shared ARCs from the DataHUB for collaboration.

Apart from managing the ARC as a whole in terms of file handling, the ARC Commander supervises the integrity and connections between files of your ARC. It ensures that the ARC is intact following the [ARC specifications][kb-ArcSpecs] <!-- is this really true? --> as well as the ISA model to provide machine-readability of metadata. By (automatically) registering your studies and assays including their associated meta(data) files in the `isa.investigation.xlsx` registry file, the ARC Commander makes the resources in your ARC identifiable and findable. It would also warn you about possible inconsistencies, such as duplicate ISA metadata files (e.g. every ARC stores only one `isa.investigation.xlsx`) or studies and assays that may have been added manually and not registered, yet.

## What the ARC Commander does not do

Unless you actively request it to, the ARC Commander does not delete, modify or move files within your ARC. While it may help with suggestions, the ARC Commander will not guess your intentions or override your decisions. For instance, the ARC Commander will not search any (ISA) metadata or other data files in your ARC and move them into the intended folders. If such files exist somewhere in your ARC, they will simply be ignored as "additional payload" (see [ARC specifications][kb-ArcSpecs]). The ARC Commander does not operate / manage your ARC automatically. You have the full control over all actions. Whenever you decide to add or link new (meta)data in your ARC or synchronize it with the [DataHUB][kb-DataHub], you can do so with a few commands.

## Do I have to use the ARC Commander?

No. As with most tools and services developed in DataPLANT, you are not obliged to use the ARC Commander to benefit from DataPLANT's support in [FAIR RDM][kb-ResearchDataManagement].
However, we'd highly recommend to check it following the [ARC Commander QuickStart][kb-arcCommander_QuickStart].

<!-- Or do you prefer to... -->
The alternative would be to

- ...create the directory structure from scratch for every ARC?  
- ...properly link all your isa.* metadata and files by hand?
- ...remember where to put what metadata information?
- ...learn a bunch of git and git-lfs commands by heart?
- ...

## How does it work?

The ARC Commander runs on current Windows, Mac and Linux operating systems. At the moment, the tool is solely designed as a <dfn title="Command-line interface">CLI</dfn>-based software. For the future, the DataPLANT developers work on a <dfn title="Graphical user interface">GUI</dfn> version, making it even more intuitive for all users.

For details, please

 - try out the [ARC Commander QuickStart][kb-arcCommander_QuickStart],
 - check the [GitHub repository][gh-ARC Commander] to download and install the latest ARC Commander release on your device, or
 - explore the [ARC Commander Manual][kb-ARC Commander-Manual] for in-depth details.

<!-- Links to DataPLANT knowledge base (kb-) -->

<!-- kb-Fundamentals -->

[kb-DataManagementPlan]: ../fundamentals/DataManagementPlan.html "Data Management Plan"
[kb-DataPublications]: ../fundamentals/DataPublications.html "Data Publication"
[kb-DataSharing]: ../fundamentals/DataSharing.html "Data Sharing"
[kb-FairDataPrinciples]: ../fundamentals/FairDataPrinciples.html "FAIR Data principles"
[kb-Metadata]: ../fundamentals/Metadata.html "Metadata"
[kb-PersistentIdentifiers]: ../fundamentals/PersistentIdentifiers.html "Persistent Identifiers"
[kb-PublicDataRepositories]: ../fundamentals/PublicDataRepositories.html "Repositories"
[kb-ResearchDataManagement]: ../fundamentals/ResearchDataManagement.html "Research Data Management"
[kb-VersionControlGit]: ../fundamentals/VersionControlGit.html "Version Control and Git"

<!-- kb-Implementation -->
[kb-AnnotatedResearchContext]: ../implementation/AnnotatedResearchContext.html "Annotated Research Context"
[kb-ARC Commander-Manual]: ../ArcCommanderManual/index.html "ARC Commander Manual"
[kb-arcCommander_QuickStart]: ../guides/arcCommander_QuickStart.html "ARC Commander QuickStart"
[kb-DataHub]: ../implementation/DataHub.html "DataPLANT DataHUB"
[kb-Swate]: ../implementation/Swate.html "Swate"

<!-- kb-Tutorials -->

<!-- Links to DataPLANT Homepage (hp-) -->

[hp-Registration]: <https://register.nfdi4plants.org/> "DataPLANT Registration"
[hp-DataHUB]: <https://git.nfdi4plants.org> "DataPLANT DataHUB"
[hp-HelpDesk]: <https://helpdesk.nfdi4plants.org> "DataPLANT Help Desk"

<!-- Links to DataPLANT GitHub (gh-) -->

[gh-DataPlant]: <https://github.com/nfdi4plants/> "GitHub DataPLANT"
[kb-ArcSpecs]: ./../implementation/ARC-specification.html "ARC specification"
[gh-ARC Commander]: <https://github.com/nfdi4plants/arcCommander> "ARC Commander"

<!-- Links to external (ext-) sources -->
