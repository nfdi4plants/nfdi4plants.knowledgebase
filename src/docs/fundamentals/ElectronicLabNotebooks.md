---
layout: docs
title: Electronic Lab Notebooks (ELNs)
author:
- name: Dominik Brilhaus
  github: https://github.com/brilator
  orcid: https://orcid.org/0000-0001-9021-3197
add toc: true
add sidebar: _sidebars/mainSidebar.md
date: 2023-12-01
status: draft
---

## Protocols &ndash; Recipes to knowledge

Protocols form the basis to laboratory procedures. In a kitchen a recipe defines what inputs (*flour, milk, eggs, ...*) and steps (*mix, bake...*) are required to achieve what expected outcome (*chocolate cake*). Just like that a laboratory protocol defines what samples, materials, and components (*plant leaves, buffer, centrifuge, ...*) can be processed (*homogenize, mix, extract, ...*) to generate a desired outcome (*plant leaf extract*). Depending on the type of laboratory procedure, the protocol outcomes may be samples or data. In both cases the protocol is or contains **metadata**.

Protocols are the key to generate knowledge via predefined experimental processes. Since protocols are key to reproducibility and integrity of scientific results, they are an integral part of publications (e.g. the *materials and methods* section) to share, evaluate and reuse these methods with peers and communities.

Every lab builds on a collection of protocols. Some protocols may describe routinely performed *standard operating procedures*, while others may be continuously evolving and adapted to a specific use-case. In pre-digital times, protocols for a scientific project were collected in classical pen-and-paper lab notebooks. By design, the metadata knowledge collected in these single-copy protocols was hard to access (hidden in a shelf) and hard to maintain over generations of researchers or share and communicate with peers during the ongoing scientific process. 

## ELN &ndash; Digital protocol editors

Once a protocol is digitalized, the information that used to be stuck in a single copy of paper can be easily replicated, enabling faster collaboration, sharing, and reuse. This can be done via a combination of text software, local or cloud servers, wiki platforms or by using a specialized software such as &ndash; **electronic** lab notebooks (ELNs).

ELNs are designed to help overcome the limitations of classical pen-and-paper lab notebooks and to align with daily wet-lab routines. ELNs facilitate the editing and sharing of protocols, usually in a closed environment such as a lab or consortium. Designed as lightweight (low-burden, free-text) protocol editors, ELNs are a major step towards digitalization of laboratory processes.

## ARCs &ndash; Packaging protocols combined with the data

Protocols generated in ELNs integrate well with the [Annotated Research Context (ARC)](https://nfdi4plants.org/nfdi4plants.knowledgebase/docs/implementation/AnnotatedResearchContext.html). Protocols and the metadata they contain have a dedicated place and schema within the ARC. Each study and assay subfolder in the ARC comes with a folder called `protocols`. This folder collects all protocols associated with a particular set of data files in the `dataset` folder. In addition, the `isa.study.xlsx` and `isa.assay.xlsx` workbooks associated with each study or assay, help to communicate the protocol metadata in a structured and machine-readable way.

Since ARCs are designed as FAIR digital objects which combine the data files with the metadata into one research data package, they facilitate the storage, shareing, and reuse of the research data as a whole.

![](./../img/protocols2arc.drawio.svg)



<!-- rather than just the protocol // just the data without metadata  -->

<!-- 

## Actions to make the best of using ELNs with ARCs

In the following sections we outline recommendations to take full advantage of ELNs together with ARCs. These recommendations include conceptual measures or organizational decisions that are independent of the use of an ELN or ARC as well as manual practices that one could implement immediately to facilitate their integration. Further we will explore possible routes towards automated and tool-aided integrations and interfaces. We try to highlight, where the ARC and a typical ELN conceptually mean the same thing or in technical terms *could write to and read from the same file*.

The goal of bridging the use of ELNs with ARCs is to foster FAIRness in an approach that reduces the documentation work by minimizing duplications and redundancies. To achieve this, the approach needs to integrate smoothly with daily routines of both wet-lab and computational biologists. 

an intuitive and unblocked / unhindered mechanisms to "along the way"

### Structure your ELN: un-mix and disentangle

1. sharing with others is easier when we agree on a system (to name and structure)
2. the ARC structure / naming convention is built on the ISA metadata model
   - hierarchy / taxonomy
   - naming
   - linking
   - referencing
3. the ISA structure can easily be 

Independent of the ELN software you use or whether you prefer another digital routine -cloud, local file server or wiki- to structure and share your lab protocols, the intuitive ISA structure can easily be implemented.


Most ELN software allow some routine to structure / associate entries.



### Review protocol habits

Before (re-)structuring a whole laboratory's protocol collection, it helps to revise the strengths of the ISA model.

Protocols usually describe a single process. In rare cases a combination of multiple processes are combined to one protocol. 

- define where a process (protocol) starts and where it ends

what are inputs and outputs:  

- define clear process inputs and outputs

#### cut protocols into pieces

There is no clear "ruling" as to what defines as a single process.

Looking back at the kitchen analogy: If you're baking a chocolate cake, then going to the grocery store to buy the required ingredients could vaguely be defined as part of the process "chocolate cake baking". However, at the latest once you want to reuse some of the ingredients to cook another dish (process "crumbing a fish filet"), it would become hard to reference the process' (sub)part ("buying groceries"). Certainly, brewing coffee and setting the table should be defined as separate processes.

As vague rules of thumb, in a laboratory context one can recognize a process by either of the following criteria

- you can safely store away the input or output sample, material under suitable conditions (e.g. dry/wet, room temperature / freezer)
- someone else or you yourself could be interested in the output sample, material or data of your process for another purpose (frozen leaf powder for different extractions and assays)
- steps are performed across multiple days

As a counter example: centrifugation or incubation and setting samples aside during an extraction.

![](define-processes.drawio.svg)



### Identify your projects and resources

Once we have clearly defined modular processes, we can start to label them.


- project ID => INV ID
- Here's a strength in electronic lab notebooks
- samples, primers, materials => resources
- the definition of what defines a project can vary greatly from a small side project during a bachelor thesis with only the student and a supervisor involved towards multi-lab efforts and should not be enforced
- Note however: the smaller and more concise the project is defined, the more actionable it will be. Just as the ARC, laboratory projects are *immutable, but evolving*. 

- use identifiers
  - some ELN tools allow the use of tags or labels
  - 
- cross-referencing
- identifiers allow us to ... *identify* "things"



### Align annotations

- wording (ISA grammar, annotation principles)
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
3. Just like an ELN, the ARC can parallel your lab work
4. Daily routine: Export protocol to the ARC of the respective project
   1. Things are often "work in progress"
   2. ARC allows to "end-of-day-dump" your protocols into a subdir


## Outlook

- (local) ELN-ARC interface
  - read-write protocols
  - read-write isa.*.xlsx / isa.json
- create json templates in elabFTW
- automated ARC-ELN synchronization
- using isa templates in an ELN
- integrate ontology API into ELN
- access management

-->


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
5. classical pen-and-paper lab note book
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


<!-- integration (Using an ELN with your ARC) -->
<!-- you can take to make pave the way towards ELN-ARC integration (Using an ELN with your ARC) -->

<!-- - the ARC is your place to structure, store, annotate, share and evolve all data to your research project -->

<!-- 1:1 Project : ARC -->