---
layout: docs
title: ArcCommander
published: 2022-08-10
author: Dominik Brilhaus
author_orcid: https://orcid.org/0000-0001-9021-3197
author_github: brilator
add toc: true
add sidebar: _sidebars/mainSidebar.md
article_status: draft
---


## A tool to make FAIR RDM easy

The arcCommander is one of two central DataPLANT tools designed for convenient interaction with your ARC (the other one being SWATE[$Link$]).

It supports you in many actions on files within your ARC related to sorting, associating and keeping track.

- Create the ARC directory
  - The arcCommander creates the directory structure with the root directories "studies", "assays", "runs", and "workflows" as well as their respective sub-directories (see ARC[[$Link$]] for details)

- Sanity / integrity check
  - ISA model intact (-> machine readability)
  - ARC intact following the specs
  - follow the ISA schema
  - registration of files in the isa.investigation.xlsx
  - warn about inconsistencies, e.g.
    - duplicate isa.investigation.xlsx (every ARC is described with only one isa.investigation.xlsx)
    - assays or studies not registered

- Keeping track / version-control
  - initalize the ARC as a git [$link] repository
  - allow you to easily clone ("download") or push ("submit") an ARC from / to the DataHUB
  - sync your ARC with the DataHUB
  - even takes care of properly keeping track of your large data files via "git-lfs"
  - 

## What the arcCommander ***does not do***

- delete, modify or move your files
- For instance, the arcCommander will not search any metadata or other data files in your ARC and move them into the intended folders. If such files exist somewhere in your ARC, they will simply be ignored as "additional payload" ([$linkARCSpecs]).
- While the arcCommander may help with suggestions, it will not guess your intentions or override your decisions.

- The ArcCommander does not operate your ARC automatically. You have the full control over the actions. Whenever you decide to add or link new (meta)data in your ARC or synchronize it with the DataHUB[$linkdatahub], you can do so with a few commands.

## Do I ***have*** to use the arcCommander?

No! As with most tools and services developed in DataPLANT, you are not obliged to use the arcCommander to benefit from DataPLANT's support in FAIR RDM.
However, we'd highly recommend to check it out (quickstart [[$Link$]])

Or do you prefer to...

- ...create the directory structure from scratch for every ARC?  
- ...properly link all your isa.* metadata and files by hand?
- ...remember where to put what metadata information?
- ...learn a bunch of git and git-lfs commands by heart?

## How does it work?

For details

The arcCommander runs on all major operating systems. However, at the moment the tool

