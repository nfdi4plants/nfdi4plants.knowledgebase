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

:construction: work in progress :construction:

<!-- http://127.0.0.1:8080/docs/guides/ARC-ServicePlatforms.html -->

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

Central platforms interact with many versatile collaboration partners or clients. Most platforms have established workflows or routines for (i) project initiation, (ii) submission of samples to be assayed, (iii) exchange of and access to generated data. This communication typically includes a ping-pong of meetings and emails to shape the study in mind, elaborate the biological question and hypothesis, define the most suitable method offered by the platform. To effectively process the project, the platform raises requirements for how samples need to be prepared and submitted.

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
   (1b) The platform team receives relevant sample metadata to run the respective assay and complements the ARC with platform-specific assay metadata, protocols and standard operating procedures (SOPs).
2. A clone of the ARC is stored locally at the platform.
3. From the platform data source, e.g. a workstation attached to your assay device, the generated data can directly be written or transferred to the assay dataset folder of your ARC stored in the file storage

A few tips to streamline your data exchange:

- You can [use metadata templates](./../SwateManual/Docs05-Templates.html)
  - to communicate with clients and team members, which metadata is crucial for specific assays
- You can also store filled-out templates for your routine measurements as a reusable [JSON file](./../SwateManual/Docs06-ISA-JSON.html)

### Data storage, handling and transfer

Your platform produces a lot of valuable raw data. Depending on your setup and the type of data you generate, the data is stored on individual machines, hard drives, institutional or internal file shares. For instance, workstations directly associated with measuring devices require quickest data transfer rates or specific security restrictions and write data to proximal data stores rather than a cloud storage.

The DataHUB can help as a platform to centralize data from different sources and function as a geo-redundant backup with tracked changes:

- No matter where you work (office desktop, remote laptop, workstation), you can always sync your current state of the ARC via the [DataHUB](./../implementation/DataHub.html)
- You can follow the evolution of a project via ARC's [version control](./../fundamentals/VersionControlGit.html)

### Track changes and provenance

Different people are involved in the projects passing your platform. From team members to internal and external collaboration partners (clients). This makes it sometimes hard to keep track of who contributed how, what, when, why and to manage who needs access to which data.

- The [DataHUB](./../implementation/DataHub.html) facilitates access management across institute boarders.
- ARCs document [changes and contributions](./../fundamentals/VersionControlGit.html)
- The [ISA metadata model](./isa_FileTypes.html) allows to associate contributors with investigations and studies. List your team members to ensure proper credit for their contributions.

### Routine computations

Your platform supports researchers with a specific set of methods and assays. You perform routine measurements, follow established protocols and SOPs to generate specific types of samples and data. Aligned with your lab workflows, you also follow computational routines: For the same types of (raw) data you re-use computational steps for processing and analysis.
Reusing computational workflows across projects helps comprehensibility for your clients and ensures reproducibility and quality for your data.

The standardized ARC structure helps with routine computations:

- The ARC's simple [directory structure](./../implementation/AnnotatedResearchContext.html) itself helps building routines, no matter whether you work with code or licensed software. Across projects, you and your collaborators know, where to find metadata and raw data, where to store processed data and results.
- The ARC facilitates task automation such as quality control and validation within one project or across multiple ARCs covering routine measurements
- Code-based computations can be designed as reusable and reproducible workflows using Common Workflow Language (CWL)

<!-- TODO: Link to CWL article / guide -->
:construction: Articles and guides on CWL are currently work in progress.

### Data publication

At some point you and your client want to [publish the data](./../fundamentals/DataPublications.html) resulting from the project.

There are two major options: You can publish the current version of the ARC and receive a [DOI](./../fundamentals/PersistentIdentifiers.html). Some scientific journals require data to be published in  [domain-specific repositories](./../fundamentals/PublicDataRepositories.html), specialized for a certain type of assay. For this purpose converters help you export the relevant dataset and metadata into a repository-accepted format.

<!-- TODO: Link to DOI and converter article / guide -->
:construction: Both these routines are work in progress.

:bulb: We are working on converters to read and reshape the relevant data and metadata of your ARC into a format accepted by domain-specific repositories. You can support this by telling us relevant repositories for your type of data or help creating [templates](./../SwateManual/Docs05-Templates.html).


---

## Preparing your platform to benefit from the ARC

Here we recommend steps that you *can* take to prepare your platform towards using ARCs.
They are optional and it depends on your platform, whether these are suitable.

1. [Create](./../guides/index-CreateYourARC.html) an example ARC
   - Try to structure a typical experiment run in your platform as an ARC
   - Consider what information is required to reproduce the experiment from *source-to-data*
     - What information is provided by the client or by the platform?
     - Which protocols (materials and methods) are required?
     - At what step and how does the client "hand over" or submit?
2. Share your example ARC in the [DataHUB](https://git.nfdi4plants.org)
   - An example ARC helps clients understand the ARC concept and structure with your type of data and metadata
   - Where can they find what information (protocols, datasets, results)
   - How can they interact with the ARC
3. [Create a group](./../DataHUB-Manual/datahub-CreateGroup.html) in the DataHUB for your platform
   - A group can help you organize all running projects in one place
   - You can easily manage access for multiple ARCs
   - If desired, you can easily set up an automated synchronization between your local (file share) and remote (DataHUB) ARCs
4. Design [metadata templates](./../guides/swate_template-contribution.html) for sample annotation
   - Let your clients know, what information you need from them
5. Write a short guide for your clients
   - How can they 
6. Start packaging your projects as ARCs

## Meet your clients in an ARC

Once you are ready to use ARCs for your

![](ARC-ServicePlatforms-images/servicePlatform-Timeline.drawio.png)

- you decide wether you meet the researchers half the way, let them initiate the ARC or

who initiates the ARC

- researcher

A major difference

Fork the client's project, rename it to your need, put everything irrelevant to .gitignore

### What about non-ARC clients

Not all of your clients are used to work with ARCs and associated tools or are planning to learn it. Still, running a service platform, you want to interact with those clients mostly in the same routines employed with everyone else.

Luckily the DataHUB comes with built-in, intuitive features that

- clients only need access
  - sign up with orcid
  - sign up with...

### Benefits for the researcher

- already described investigation (and study) for another facility, would not want to double the work for another assay
