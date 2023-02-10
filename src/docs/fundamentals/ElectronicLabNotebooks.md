---
layout: docs
title: Electronic Lab Notebooks (ELNs)
author: Dominik Brilhaus
author_orcid: https://orcid.org/0000-0001-9021-3197
author_github: brilator
add toc: false
add sidebar: _sidebars/mainSidebar.md
date: 2023-02-10
article_status: draft
---

- [Protocols - Recipes to Knowledge](#protocols---recipes-to-knowledge)
- [ELN - Digital Protocol Editors](#eln---digital-protocol-editors)
- [ARCs - Packaging ELN protocols with the data](#arcs---packaging-eln-protocols-with-the-data)
- [Actions to make the best of using ELNs with ARCs](#actions-to-make-the-best-of-using-elns-with-arcs)
  - [Identify your projects and resources](#identify-your-projects-and-resources)
  - [Structure your ELN: unmix and disentangle](#structure-your-eln-unmix-and-disentangle)
  - [Review your protocol habits :D](#review-your-protocol-habits-d)
  - [Align annotations](#align-annotations)
  - [ISA](#isa)
  - [Export protocols to ARC](#export-protocols-to-arc)
- [Outlook](#outlook)

## Protocols - Recipes to Knowledge

Protocols form the basis to laboratory procedures. In a kitchen a recipe defines what inputs (*flour, milk, eggs, ...*) and steps (*mix, bake...*) are required to achieve what expected outcome (*chocolate cake*). Just like that a laboratory protocol defines what samples, materials, and components (*plant leaves, buffer, centrifuge, ...*) can be processed (*homogenize, mix, extract, ...*) to generate a desired outcome (*plant leaf extract*). Depending on the type of laboratory procedure, the protocol outcomes may be samples or data. In both cases the protocol is **metadata**.

Protocols are the key to generate knowledge via predefined experimental processes. Since protocols are key to reproducibility and integrity of scientific results, they are an integral part of publications (*materials and methods* section) to share, evaluate and reuse these methods with peers and communities.

Every lab builds on a collection of protocols. Some protocols may describe routinely performed *standard operating procedures*, while others may be continuously evolving and adapted to a specific use-case. In pre-digital times, protocols for a scientific project were collected in classical pen-and-paper lab notebooks. By design, the metadata knowledge collected in these single-copy protocols was hard to access (hidden in a shelf), maintain (over generations of researchers) or share and communicate (hand-written notes, post-its) with peers during the ongoing scientific process. <!-- (unless published) -->

## ELN - Digital Protocol Editors

Once a protocol is digitalized, the information that used be stuck in a single-copy paper can be replicated with ease, facilitating quicker collaboration, sharing, and reuse (of those laboratory-central processes). This can be done via a combination of text software, local or cloud servers, wiki platforms or by using a specialized software - the **electronic** lab notebook (ELN).

ELNs were developed (designed) to help overcome the limitations of classical pen-and-paper lab notebooks and align well with daily wet-lab routines. ELNs facilitate the editing and sharing of protocols, usually in a closed environment such as a lab or consortium.

Designed as lightweight (low-burden, free-text) protocol editors, ELNs are a major step towards digitalization of laboratory processes.

## ARCs - Packaging ELN protocols with the data

Protocols generated in ELNs integrate well with the ARC. Protocols and the metadata they contain have a dedicated place and schema within the ARC. Every study and assay (subfolder) in the ARC comes with a folder called `protocols`. This folder collects all protocols directly associated with a specific set of data files in the parallel `dataset` folder. In addition, the `isa.study.xlsx` and `isa.assay.xlsx` workbooks associated to each study or assay, help to communicate the protocol's metadata in a structured and machine-readable way.

Since ARCs (are designed as FAIR digital objects, which) combine the data files with the metadata in one research data package, they facilitate to store, share and reuse the research data as a whole. <!-- rather than just the protocol // just the data without metadata  -->

## Actions to make the best of using ELNs with ARCs

In the following sections we outline recommendations to take full advantage of ELNs together with ARCs. These recommendations include conceptual measures or organisational decisions that are independent of the use of an ELN or ARC as well as manual practices that one could implement immediately to facilitate their integration. Further we will explore possible routes towards automated and tool-aided integrations and interfaces. We try to highlight, where the ARC and a typical ELN conceptually mean the same thing or in technical terms *could write to and read from the same file*.

The goal of bridging the use of ELNs with ARCs is to foster FAIRness in a way that 


reduce the documentation work load
- reduce duplications and redundancies
- an intuitive and unblocked / unhindered mechanisms to "along the way"


<!-- integration (Using an ELN with your ARC) -->
<!-- you can take to make pave the way towards ELN-ARC integration (Using an ELN with your ARC) -->


the ARC is your place to structure, store, annotate, share and evolve all data to your research project


### Identify your projects and resources

- project ID => INV ID
- samples, primers, materials => resources
- the definition of what defines a project can vary greatly from a small side project during a bachelor thesis with only the student and a supervisor involved towards multi-lab efforts and should not be enforced
- Note however: the smaller and more concise the project is defined, the more actionable it will be. Just as the ARC, laboratory projects are *immutable, but evolving*. 

use identifiers

- cross-referencing
- 

### Structure your ELN: unmix and disentangle

Most ELN software allow some routine to structure / associate entries.
This can be well aligned with ISA structure used in the ARC

Independent of the ELN software you use or whether you prefer another digital routine -cloud, local file server or wiki- to structure and share your lab protocols, the intuitive ISA structure can easily be implemented and aligned with the ARC.

ARC structure could be implemented in the ELN

1:1 Project : ARC


### Review your protocol habits :D 

- define clear process inputs and outputs
- define where a process (protocol) starts and where it ends
- 

Looking back at the kitchen analogy: If you're baking a chocolate cake, then going to the grocery store to buy the required ingredients could vaguely be defined as part of the process "chocolate cake baking". However, at the latest once you want to reuse some of the ingredients to cook another dish (process "crumbing a fish filet"), it would become hart to reference the process' (sub)part ("buying groceries"). Certainly, brewing coffee and setting the table should be defined as separate processes.


### Align annotations

1. same wording (ISA grammar, annotation principles)
2. 
- use templates


### ISA


`./isa.investigation.xlsx`

INVESTIGATION
Investigation Identifier
Investigation Title
Investigation Description
...
INVESTIGATION CONTACTS
Investigation Person Last Name
Investigation Person First Name
...
Investigation Person Email
...

`./studies/<YourStudyName>/isa.study.xlsx`

STUDY
Study Identifier
Study Title
Study Description
...

STUDY FACTORS
Study Factor Name
Study Factor Type
...
STUDY ASSAYS
Study Assay Measurement Type
...
Study Assay Technology Type
...
Study Assay Technology Platform
Study Assay File Name
STUDY PROTOCOLS
Study Protocol Name
...



### Export protocols to ARC

1. Take advantage of ARC's version control system
2. ARC: structured ELN backup
3. Daily routine: Export protocol to the ARC of the respective project

## Outlook

- (local) ELN-ARC interface
  - read-write protocols
  - read-write isa.*.xlsx / isa.json
- automated ARC-ELN synchronization
- using isa templates in an ELN
- integrate ontology API into ELN
- access management



<!-- 

Notes



1. Protocols: basis to lab procedures
2. Key to knowledge of a biological laboratory
3. Protocols = Metadata

4. Key to reproducibility and as such to a FAIR scientific process
  - mixed types of protocols
  - some routine, some continuously evolving
  - some protocols form the base to very central experiments and assays
  - Protocols are an integral part of publications (*materials and methods* section). Methods are shared with peers 
1. classical pen-and-paper lab note book
   1. metadata knowledge stuck in a single copy
   2. hard to access (hidden in a shelf)
   3. hard to maintain (over generations of researchers)
   4. hard to communicate adaptations (stickers, post-its, hand-written notes) -->

<!-- 

In protocols we document exactly how a planned lab process was followed for a dedicated set of samples.
While a well established method for RNA extraction may state that "between 20 and 30 mg" of a ground leaf shall be used as the starting material, we would denote that RNA was extracted from exactly "23.6 mg" of leaf material for one identifiable sample.
While the method may generally recommend five technical replicates, the protocol would associate the five replicates with information 


Definitions:

Method: how an experiment could be done (compare: recipe for baking a cake)
Protocol: how an experiment was done (used this type of flour, baked for 45 instead of 40 minutes)


the fact that the digitalized form of what used to be on **one** paper can now be replicated with ease facilitates quicker collaboration, sharing, and reuse of those central entities at least within 





Tools to edit and share protocols 

With the purpose of protocol editors 

1. the closed lab context
2. the exchange on laboratory protocols
3. ELNs d



- good tool to digitalize your protocols
- good protocol editor
- allows free / flexible editing of protocols
- sharing protocols with close surrounding / your lab
  - easy to reuse
- time stamping



<!-- Where is the bridge between ELNs and ARCs? (ELNs = Protocols = Metadata) -->