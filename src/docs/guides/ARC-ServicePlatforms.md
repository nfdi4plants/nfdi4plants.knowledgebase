---
layout: docs
title: ARCs in Enabling Platforms
date: 2023-07-12
author:
- name: Dominik Brilhaus
  orcid: https://orcid.org/0000-0001-9021-3197
  github: brilator
add toc: true
add support: true
# add sidebar: _sidebars/mainSidebar.md
---

## About this guide

In this guide we explore how the ARC can help streamline data flows and project management in enabling platforms.

<a href="./index.html">
    <span class="badge-category">User</span><span class="badge-selected" id="badge-advanced">Advanced</span>
    <span class="badge-category">Mode</span><span class="badge-selected" id="badge-read">Read</span>    
</a>

<br>
<br>


## Before we can start

<div id="before-start">

It helps to be familiar with

- :ballot_box_with_check: the concept of the [ARC](./../implementation/AnnotatedResearchContext.html)
- :ballot_box_with_check: the different [ISA file types](./isa_FileTypes.html)
- :ballot_box_with_check: the [DataHUB](./../implementation/DataHub.html)
<br>
<br>
- :bulb: Note that this guide can only stay at a very abstract level. Feel free to contact us to work out a suitable solution for your platform together.
- :warning: In part, this guide presents interim solutions for which we are working on more user-friendly implementations. Your feedback helps!

</div>

## Enabling Platforms

Central *enabling platforms* can range from small single-lab services to larg instrumentation-based research infrastructures such as core facilities. Platforms offer a specific set of methods and assays as a routine support to a community of researchers. Typical examples with application in plant sciences include platforms offering omics technologies (genome, transcriptome, proteome, metabolome), phenotyping, (microscopic) imaging, genetic engineering or plant growth facilities. 

*In the following we call researchers approaching the platforms "clients".*


<div style="height:40px; display: flex; align-items: center; justify-content: left;">
  <img src="./ARC-ServicePlatforms-images/icons-characters-PhDStudent.drawio.png" style="width:30px; margin-left: 10px; margin-right:10px">client
</div>
<div style="height:40px; display: flex; align-items: center; justify-content: left;">
  <img src="./ARC-ServicePlatforms-images/icons-characters-serviceProvider.drawio.png" style="width:30px; margin-left: 10px; margin-right:10px">platform team
</div>

## Project communication and data flow

Central platforms interact with many versatile collaboration partners or clients. Most platforms have established workflows or routines for (i) project initiation, (ii) submission of samples to be assayed, (iii) exchange of and access to generated data. This communication typically includes a ping-pong of meetings or emails to shape the study in mind, elaborate the biological question and hypothesis, define the most suitable method offered by the platform. To effectively process the project, the platform raises requirements for how samples need to be prepared and submitted. 

During this time a lot of metadata is exchanged
  - meeting minutes could be collected in the ARC's wiki


## Streamlined data exchange


<div>
  <img src="./ARC-ServicePlatforms-images/servicePlatform-FileShare.drawio.png" style="width:80%;display: block;margin-left: auto;margin-right: auto;">
  <figcaption>  </figcaption>
</div>


Data exchange between client and platform occurs via the DataHUB. Depending on the phase of the project this involves different data and information. The client primarily describes the investigation's goal and study design, annotates the submitted samples with metadata and adds associated protocols (1a).
Once available the client receives assayed data and relevant information. The platform team receives relevant sample metadata to run the respective assay and complements with platform-specific assay metadata and protocols (1b). 




## Use of identifiers  / Project management
for ISA

## templates for sample submission 

- Use templates
  - user-targeted templates
  - templates for your routine measurements can be stored as a reusable JSON file

## routine computational workflows

- the ARC model and 

- quality control
  - within one ARC
  - across ARCs covering routine measurements


## Meet your clients in an ARC


![](ARC-ServicePlatforms-images/servicePlatform-Timeline.drawio.png)


- you decide wether you meet the researchers half the way, let them initiate the ARC or

who initiates the ARC
  - researcher


A major difference 

Fork the client's project, rename it to your need, put everything irrelevant to .gitignore


## What about non-plant-scientists / non-ARC clients 

Not all of your clients are used to work with ARCs and associated tools or are planning to learn it. Still, running a service platform, you want to interact with those clients mostly in the same routines employed with everyone else.

Luckily the DataHUB comes with built-in, intuitive features that 


- clients only need access
  - sign up with orcid
  - sign up with...


## Benefits for the researcher

- already described investigation (and study) for another facility, would not want to double the work for another assay


## Preparing your platform to benefit from the ARC

1. Start creating your projects as ARCs
   - 
2. [Create a group](./../DataHUB-Manual/datahub-CreateGroup.html) in the DataHUB for your platform
   - A platform group 
   - If desired, you can easily set up an automated synchronization between your local (file share) and remote (DataHUB) ARCs
- Design [metadata templates](./../guides/swate_template-contribution.html) for sample annotation
  - Let your clients know, what information you need from them
- Share an example ARC in the [DataHUB](https://git.nfdi4plants.org)
  - An example ARC helps to show clients the ARC concept and structure
  - Where can they find what information (protocols, datasets, results)
  - How can they interact with the ARC

- Write a guide to tell your clients



