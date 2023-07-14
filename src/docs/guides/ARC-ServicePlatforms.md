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
add sidebar: _sidebars/mainSidebar.md
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

Central *enabling platforms* can range from small single-lab services to large instrumentation-based research infrastructures such as core facilities. Platforms offer a specific set of methods and assays as a routine support to a community of researchers. Typical examples with application in plant sciences include platforms offering "omics" technologies (genome, transcriptome, proteome, metabolome), phenotyping, (microscopic) imaging, genetic engineering or plant growth facilities. 

*For simplicity, in this guide we call researchers approaching the platforms "clients".*

<div style="height:40px; display: flex; align-items: center; justify-content: left;">
  <img src="./ARC-ServicePlatforms-images/icons-characters-PhDStudent.drawio.png" style="width:30px; margin-left: 10px; margin-right:10px">client
  <img src="./ARC-ServicePlatforms-images/icons-characters-serviceProvider.drawio.png" style="width:30px; margin-left: 10px; margin-right:10px">platform team
</div>

### Project communication and data flow

Central platforms interact with many versatile collaboration partners or clients. Most platforms have established workflows or routines for (i) project initiation, (ii) submission of samples to be assayed, (iii) exchange of and access to generated data. This communication typically includes a ping-pong of meetings or emails to shape the study in mind, elaborate the biological question and hypothesis, define the most suitable method offered by the platform. To effectively process the project, the platform raises requirements for how samples need to be prepared and submitted. 

### Project management

As a platform you manage a lot of projects in parallel. Keeping these projects up-to-date and coordinated between clients and platform team members is challenging.
Here's a few tips to support your project management:

- You can use the [wiki associated to the ARC](./../DataHUB-Manual/datahub-ARCWiki.html) to collect meeting minutes with your clients
- You can use the [ARC's issue board](./../DataHUB-Manual/datahub-ARCPanel.html) to coordinate tasks between clients, team members, data analysts and others involved
- You can use your established system of identifiers (e.g. for projects, samples) in [ISA metadata](./../guides/isa_FileTypes.html)
- You can also keep naming your ARCs with the same way you are used to name your project folders

### Streamlined data exchange
 
During project collaboration a lot of information and metadata is exchanged.  
Here's an idea what your data flow could look like with the ARC:

<div>
  <img src="./ARC-ServicePlatforms-images/servicePlatform-FileShare.drawio.png" style="width:60%;display: block;margin-left: auto;margin-right: auto;">
  <figcaption>  </figcaption>
</div>

1. Data exchange between client and platform occurs through the ARC shared via the DataHUB. Depending on the phase of the project this involves different data and information.  
   (1a) The client primarily describes the investigation's goal and study design, annotates the submitted samples with metadata and adds associated protocols. Once available the client receives assayed data and relevant information.  
   (1b) The platform team receives relevant sample metadata to run the respective assay and complements the ARC with platform-specific assay metadata, protocols and standard operating procedures (SOPs)
2. A clone of the ARC is stored locally at the platform (see also [data storage](#data-storage))
3. From the platform workstation, i.e. a computer attached to your assay device, the generated data can directly be written or transferred to the assay dataset folder of your ARC stored in the file share

Here's a few tips to streamline your data exchange:

- You can [create metadata templates](./../SwateManual/Docs05-Templates.html)
  - to communicate with clients and team members, which metadata is crucial for specific assays
- You can also store filled-out templates for your routine measurements as a reusable [JSON file](./../SwateManual/Docs06-ISA-JSON.html)

### Data storage, handling and transfer

File share: 
- This can be an institutional file server offered by your organisation or computing center
- lab internal file share
- depending on your needs this can also 

You already need to store your project data somewhere

- Depending on the type of offered technology, workstations are some for security 
- workstations need quickest data rates => write on close file share first, then transer to Hub

- the DataHUB is your geo-redundant backup
  - and it comes with revert

### Track changes and provenance

- many projects, many stakeholders / people involved (team members, clients, etc.)
- need to be able to retrace, who's done what, when, why

- name your team members / credit
- track changes

- ARC comes with [version control](./../fundamentals/VersionControlGit.html)
  - contribution by commit
- [ISA metadata model](./isa_FileTypes.html) allows to associate people with investigations and studies

### Routine computations

Your platform is specialized on a specific set of methods and assays. You perform routine assays, follow established protocols and SOPs to produce specific types of data.

- simplify (always same structure)
- make reproducible
- quality control and validate
  - within one ARC
  - across ARCs covering routine measurements
- automate

- the ARC model and

### Data publication

At some point you or your client want to publish the project

There are two options
1. Publish a snapshot of your ARC repository and get a DOI (coming soon)
2. Publish the dataset at a [domain-specific repository](./../fundamentals/PublicDataRepositories.md), established for your platform's type of assay
  :bulb: We are working on converters to read and reshape the relevant data and metadata of your ARC into a format accepted by the public repositories

:warning: Both these routines are work in progress! 

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

In the following, we recommend steps that you **can** take to prepare your platform towards using ARCs. 
Except for step 1, they are all optional and it depends on the platform, whether these are useful. 

1. Start creating your projects as ARCs
   - You'd be surprised how 
2. [Create a group](./../DataHUB-Manual/datahub-CreateGroup.html) in the DataHUB for your platform
   - A platform group 
   - If desired, you can easily set up an automated synchronization between your local (file share) and remote (DataHUB) ARCs
3. Design [metadata templates](./../guides/swate_template-contribution.html) for sample annotation
  - Let your clients know, what information you need from them
4. Share an example ARC in the [DataHUB](https://git.nfdi4plants.org)
  - An example ARC helps to show clients the ARC concept and structure
  - Where can they find what information (protocols, datasets, results)
  - How can they interact with the ARC

- Write a guide to tell your clients



