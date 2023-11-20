---
license: '[CC-BY 4.0](https://creativecommons.org/licenses/by/4.0/)'
layout: docs
author:
- name: Dominik Brilhaus
  github: https://github.com/brilator
  orcid: https://orcid.org/0000-0001-9021-3197
date: 2023-10-31
status: ready
title: CEPLAS ARC Clubs
add toc: true
add support: false
add sidebar: _sidebars/mainSidebar.md
---

<style>
.columns {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 50px;
}
</style>

This is a two-day adventure to prepare your lab for the ARC universe.

Contact: Dominik Brilhaus; [CEPLAS Data Science](https://www.ceplas.eu/en/research/data-science-and-data-management)

## Goals

<div class="columns">
<div class="columns-left">

- Move existing datasets into [ARCs](./../../../implementation/AnnotatedResearchContext.html)
- Share them via the [DataHUB](./../../../implementation/DataHub.html)
  - This can be done privately, group-internally or publicly
- First few steps into the ARC ecosystem
  - We will not produce "perfect" or "final" ARCs
  - You or collaborators can pick them up from there in the future

</div>

<div class="columns-right">

<img style="height:250px" src='./../../../img/ceplas-ARCs.drawio.svg'/>

</div>
</div>

## Setting

<div class="columns">
<div class="columns-left">

- Good internet connection
- Ideally isolated from lab // office // daily duties
- Access to the data to be ARCified (file share, hard disks, cloud, ...)
- Agile, communicative, collaborative, positive
- Technical *ad-hoc* support by DataPLANT

</div>

<div class="columns-right">

<img style="height:250px" src='./../../../img/ARCClub.drawio.svg'>

</div>
</div>

## Participants

This event benefits from a good mix of participants from you lab:

- wet lab biologists
- dry lab biologists, coders
- data handlers, data users
- long-term lab-associates with a good project overview

Group size: 5-10 (for the interactive parts)

## Tentative agenda

We will mostly introduce concepts and tools in the mornings.  
The afternoons focus on interactive parts. Here you have the chance to use the tools with your own data while we are there to help. 

**Day 1**

Morning
- Intro to ARC and demo
- ARCitect Hands-on

Afternoon
- Create your ARCs
- DataHUB Features

**Day 2**

Morning
- ARC recap session
- ISA and Metadata
- Swate Hands-on

Afternoon
- Annotate data in your ARC
- Wrap-up

## Checklist for participants

Please prepare the following **before the workshop**.

- Bring your laptop / computer
- Bring datasets to be ARCified
- Sign up for a DataHUB user account https://register.nfdi4plants.org/
  - Please add your `Project/consortium` (e.g. CEPLAS, SFB, TRR) and choose the role `Guest`
- Install <a href="https://nfdi4plants.org/nfdi4plants.knowledgebase/docs/ARCitect-Manual/index.html" target="_blank">ARCitect</a>
- Install <a href="https://nfdi4plants.org/nfdi4plants.knowledgebase/docs/SwateManual/Docs01-Installing-Swate.html" target="_blank">Swate</a>

:bulb: Not all installations are perfectly straight-forward. We will start the first day with a tech-check to make sure your machine is up and running.

### Optional (for coders or trouble-shooting)

- Find the command-line on your machine
  - On Windows: Enter `powershell` or `cmd` into the explorer path
  - On MacOS: Search `terminal` via spotlight (&#8984; + &#9251;) or navigate to `Applications` -> `Utilities` -> `Terminal`
  - :bulb: No worries, we will not be using this a lot during the workshop. It's more for setup and trouble-shooting.
- Install <a href="https://git-scm.com/downloads" target="_blank">Git</a> and <a href="https://git-lfs.github.com/" target="_blank">Git LFS</a>
  - Git LFS may already be installed with your Git installation (at least on Windows)
  - For macOS we recommend to install via homebrew as described on the site above
- Install <a href="https://nfdi4plants.org/nfdi4plants.knowledgebase/docs/ArcCommanderManual/index-setup.html" target="_blank">ARC Commander</a>

## Checklist for co-organizers (from lab)

To make this as smooth as possible and create an enjoyable atmosphere, we ideally need

- a room with good internet connection
  - Wifi (via Eduroam?)
  - or LAN sockets (might require to setup LAN  network with local computing center)
  - (optional) LAN cables
- multi-outlet power strips
- a list of putative datasets or projects to be ARCified
  - discuss with the PI or participants
- a <a href="./../../../DataHUB-Manual/datahub-CreateGroup.html" target="_blank">DataHUB user group</a> for your lab
  - (optional) invite members from your lab
