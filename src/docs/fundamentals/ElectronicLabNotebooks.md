---
layout: docs
title: Electronic Lab Notebooks
author: Dominik Brilhaus
author_orcid: https://orcid.org/0000-0001-9021-3197
author_github: brilator
add toc: true
add sidebar: _sidebars/mainSidebar.md
date: 2023-02-03
article_status: draft
---

<!-- 
Definitions:

Method: how an experiment could be done (compare: recipe for baking a cake)
Protocol: how an experiment was done (used this type of flour, baked for 45 instead of 40 minutes)
-->


1. Protocols: basis to lab processes
2. Key to knowledge of a biological laboratory
3. Key to reproducibility and as such to a FAIR scientific process
  - mixed types of protocols
    - some routine, some continuously evolving
    - some protocols form the base to very central experiments and assays
1. classical pen-and-paper lab note book
   1. hard to access (hidden in a shelf)
   2. hard to maintain (over generations of researchers)
   3. hard to communicate adaptations (stickers, post-its, hand-written notes)
2. ELNs help overcome these limitations
   1. the fact that the digitalized form of what used to be on **one** paper can now be replicated with ease facilitates quicker collaboration, sharing, and reuse of those central entities at least within the closed lab context
   2. the exchange on laboratory protocols
   3. ELNs d


Electronic Lab Notebooks (ELNs) are a heap in digitalization of laboratory processes.

Protocols and methods that frequently used to be hard to access in classical pen-and-paper notebooks can now be shared with peers

- good tool to digitalize your protocols
- good protocol editor
- allows free / flexible editing of protocols
- sharing protocols with close surrounding / your lab
  - easy to reuse
- time stamping


In protocols we document exactly how a planned lab process was followed for a dedicated set of samples.
While a well established method for RNA extraction may state that "between 20 and 30 mg" of a ground leaf shall be used as the starting material, we would denote that RNA was extracted from exactly "23.6 mg" of leaf material for one identifiable sample.
While the method may generally recommend five technical replicates, the protocol would associate the five replicates with information 

## Where is the bridge between ELNs and ARCs? (ELNs = Protocols = Metadata)

- protocols integrate well with the ARC idea
- Every study and assay (subfolder) in the ARC comes with a dedicated folder `protocols`
- this folder collects all protocols directly associated with a dedicated set of data files in the parallel `dataset` folderd

## Steps you can take **today** to pave the way towards ELN-ARC integration (Using an ELN with your ARC)

the ARC is your place to structure, store, annotate, share and evolve all data to your research project

### Identify your projects and resources

- project ID => INV ID
- samples, primers, materials => resources
- the definition of what defines a project can vary greatly from a small side project during a bachelor thesis with only the student and a supervisor involved towards multi-lab efforts and should not be enforced
- Note however: the smaller and more concise the project is defined, the more actionable it will be. Just as the ARC, laboratory projects are *immutable, but evolving*. 

use identifiers

### Structure your ELN: unmix and disentangle

Most ELN software allow some routine to structure / associate entries.
This can be well aligned with ISA structure used in the ARC

Independent of the ELN software you use or if you prefer another digital routine -cloud, local file server or wiki- to structure and share your lab protocols, the intuitive ISA structure can easily be implemented and aligned with the ARC. 

ARC structure could be implemented in the ELN

1:1 Project : ARC

### Align annotations

- use templates
- 


## Outlook

- automated syncronization 
- 