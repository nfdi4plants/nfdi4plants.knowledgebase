---
layout: docs
title: ARCs in service platforms
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

In this guide we explore how the ARC can help streamline data flows and project management in a core facility.

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
- :bulb: Note that this guide can only stay at a very abstract level. Feel free to contact us to work out a suitable solution for your facility together.
- :warning: In part, this guide presents interim solutions for which we are working on more user-friendly implementations. Your feedback helps!

</div>


## Legend and definition




<div style="height:40px; display: flex; align-items: center; justify-content: left;">
  <img src="./ARC-ServicePlatforms-images/icons-characters-PhDStudent.drawio.png" style="width:30px; margin-left: 10px; margin-right:10px">Customer (i.e. researcher asking for core facility service)
</div>
<div style="height:40px; display: flex; align-items: center; justify-content: left;">
  <img src="./ARC-ServicePlatforms-images/icons-characters-serviceProvider.drawio.png" style="width:30px; margin-left: 10px; margin-right:10px">Core facility team
</div>


## Core facilities

Core facilities are instrumentation-based research infrastructures, that provide a specific set of methods or assays. 


to routinely measure biological samples


- examples are core facilities for omics technologies and imaging
- different (business) models of running a core facility

- lot of customer interaction
- 







## Project initiation

Most core facilities have a more or less established routine for submission of samples to be assayed
This includes a ping-pong of meetings to find out
  - what is the biological question, what does the researcher want to find out, what is the most suitable method
  - how do the samples need to be prepared and submitted
  - what data 

During this time a lot of metadata is exchanged
  - meeting minutes could be attached to the ARC's wiki

- typically 


## templates for sample submission 

- Use templates
  - user-targeted templates
  - templates for your routine measurements can be stored as a reusable JSON file
- metadata in

- assay data out



## routine computational workflows

- the ARC model and 

- quality control
  - within one ARC
  - across ARCs covering routine measurements


## What about non-plant-scientists / non-ARC users 

Although we're doing our best to promote the ARC idea and adapt it to a diverse range of use-cases, there will always be users (or customers), who do not actively use the ARC or associated tools. Still, running a core facility, you want to interact with those users mostly in the same routines employed with everyone else.

Luckily the DataHUB comes with built-in, intuitive features that 


- users only need access
  - sign up with orcid
  - sign up with...


## 


- you decide wether you meet the researchers half the way, let them initiate the ARC or

who initiates the ARC
  - researcher 


## Benefits for the researcher

- already described investigation (and study) for another facility, would not want to double the work for another assay



## Recommended steps

- generate templates for sample annotation
- prepare an example ARC in the DataHUB
  - An example ARC helps to show users the ARC concept and structure
  - Where can they find what information (protocols, the datasets)
  - How can they interact with the ARC
