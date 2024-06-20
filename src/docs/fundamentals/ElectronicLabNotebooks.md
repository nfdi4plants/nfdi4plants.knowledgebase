---
layout: docs
title: Electronic Lab Notebooks (ELNs)
author:
- name: Dominik Brilhaus
  github: https://github.com/brilator
  orcid: https://orcid.org/0000-0001-9021-3197
- name: Lucas Beuter
  github: https://github.com/Lu98Be
add toc: true
add sidebar: _sidebars/mainSidebar.md
date: 2023-12-01
status: draft
---

:construction: work in progress :construction:

- [Protocols - Recipes to Knowledge](#protocols---recipes-to-knowledge)
- [ELN - Digital Protocol Editors](#eln---digital-protocol-editors)
- [How do you find the right ELN?](#how-do-you-find-the-right-eln)
- [ARCs - Packaging ELN protocols with the data](#arcs---packaging-protocols-combined-with-the-data)
- [Example - eLabFTW](#example---elabftw)
<!-- - [Actions to make the best of using ELNs with ARCs](#actions-to-make-the-best-of-using-elns-with-arcs) -->
<!-- - [Outlook](#outlook) -->

## Protocols - Recipes to knowledge

Protocols form the basis to laboratory procedures. In a kitchen a recipe defines what inputs (*flour, milk, eggs, ...*) and steps (*mix, bake...*) are required to achieve what expected outcome (*chocolate cake*). Just like that a laboratory protocol defines what samples, materials, and components (*plant leaves, buffer, centrifuge, ...*) can be processed (*homogenize, mix, extract, ...*) to generate a desired outcome (*plant leaf extract*). Depending on the type of laboratory procedure, the protocol outcomes may be samples or data. In both cases the protocol is or contains [metadata][knowledge-mets].

Protocols are the key to generate knowledge via predefined experimental processes. Since protocols are key to reproducibility and integrity of scientific results, they are an integral part of publications (e.g. the *materials and methods* section) to share, evaluate and reuse these methods with peers and communities.

Every lab builds on a collection of protocols. Some protocols may describe routinely performed *standard operating procedures*, while others may be continuously evolving and adapted to a specific use-case. In pre-digital times, protocols for a scientific project were collected in classical pen-and-paper lab notebooks. By design, the metadata knowledge collected in these single-copy protocols was hard to access (hidden in a shelf) and hard to maintain over generations of researchers or share and communicate with peers during the ongoing scientific process. 

Also, a lot of data in research is gathered in a digital form, which is not very suitable for an analog notebook.
Furthermore, there is no backup for the notebook or any other option to access the protocols if the notebook goes missing.

## ELN - Digital protocol editors

Electronic Lab Notebooks (ELN) are a step forward to solve these problems through its digital nature.
With an free-text editor and e.g. a tag system you are able to write down information combined with metadata.
Together with a linking system you are able to include and attach all kind of files like images, tables or documents.
You are also able to link between different protocols by utilizing the different protocol id's.
Many ELNs utilize custom templates and are compatible with all usual media formats, enabling you to standardize common protocols.
Through timestamps and a change history you are able to track the changes made in a protocol over time enabling better reproducibility.
This creates [FAIR][knowledge-fair] protocols for your research and is a major step towards the digitalization of laboratory processes.

- **F**indable, every entry and piece of data is findable through a search function and linkage
- **A**ccessible, access the notebook from everywhere, manage access rights and share data for good collaboration
- **I**nteroperable, an ELN uses common formats usable on any computer, making it easy interchangeable; you can also create interfaces between your ELN and your instruments or repository's to have a better workflow in your research
- **R**eusable, with good, described data and metadata you can easily reproduce any experiment or change little aspects for further research

With an ELN, you can track your research from different places at any time, as long as you have a stable internet connection.
Also, once the notebook digitalized, all the information that used be stuck in a single-copy notebook can be replicated with ease, facilitating quicker collaboration, sharing, and reuse (of those laboratory-central processes).

## How do you find the right ELN?

There are many different solutions out there, which makes finding the best fitting ELN for your lab very difficult. You should be aware of the following topics to find the right ELN:

| Topic                 | Detail                                                                                                                                                     |
| --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Price**             | Many solutions are paid and therefore may be unusable for labs with limited budget                                                                         |
| **Data storage**      | You can either store your data on a local server or you can buy a cloud solution to host your data                                                         |
| **Privacy**           | A lot of ELN's are cloud hosted and could therefore have problems with regulations like the GDPR                                                           |
| **Specialization**    | Some ELNs are more aligned to a specific research field like chemistry, while some are more general with less special tools                                |
| **Usability**         | The ELN should be at least as easy to use as a plain sheet of paper with a user-friendly interface; You can test this through demos                        |
| **Collaboration**     | With role management you can protect your data by limiting the access while you also are able to share the research and results to collaborate with others |
| **Metadata**          | Document metadata in a human and machine-readable way; Read here to learn more about [Metadata][knowledge-mets]                                            |
| **Templates**         | Templates allow you to have standardized documentation, making it easier and faster to write down measurements and results                                 |
| **Search**            | A search function allows you to find any of your data fast and easy                                                                                        |
| **Compliance**        | Some labs need to fulfil requirements like GLP (good laboratory practices); the ELN should therefore be compatible with the required compliance            |
| **Evidence security** | The ELN should have an option to timestamp the individual entries, so you can trace the history of the changes made and verify the integrity of your data  |
| **API**               | With an API, you can create interfaces for external applications like storage systems or instruments                                                       |
| **Exit strategy**     | You should be able to export your whole ELN at any time in usable formats like PDF, zip or .eln                                                            |
| **Reliability**       | It is preferable to use an ELN from a reliable source with long term support and development of the product                                                |

For more help to find the right ELN, there is the [ELN Finder][web-elnfinder]. With it you can filter out a wide list of ELN's by different attributes.

## ARCs - Packaging protocols combined with the data

Protocols generated in ELNs integrate well with the [Annotated Research Context (ARC)](https://nfdi4plants.org/nfdi4plants.knowledgebase/docs/implementation/AnnotatedResearchContext.html). Protocols and the metadata they contain have a dedicated place and schema within the ARC. Each study and assay subfolder in the ARC comes with a folder called `protocols`. This folder collects all protocols associated with a particular set of data files in the `dataset` folder. In addition, the `isa.study.xlsx` and `isa.assay.xlsx` workbooks associated with each study or assay, help to communicate the protocol metadata in a structured and machine-readable way.

Since ARCs are designed as FAIR digital objects which combine the data files with the metadata into one research data package, they facilitate the storage, shareing, and reuse of the research data as a whole.

![](./../img/protocols2arc.drawio.svg)

## Example - eLabFTW 
<!--with LISTER-->

[eLabFTW][web-elabftw] is a free and open source ELN which can be used in a broad field of research.
It has every common feature and is fully customizable due to its open source nature.
You can install it either on your own local server or buy a hosted cloud solution.
It is able to manage different research teams on one central instance.

The user interface is simply and responsive designed, you can access the ELN from any device with internet.
It has two sections, one for experiments and one for database.
In the experiment section, you can easily protocol your current studies and assays or review already exiting protocols.
You can tag your entry with metadata for better findability and determine view and writing rights.
In the text field you can freely write text, add templates or insert images and tables.

Down below are different fields, where you can either add steps for you experiment, link to other experiments or objects from the database or add your own custom field.
Also you can comment the experiment, timestamp it either through a trusted source or through a blockchain.
You can duplicate you experiment, lock it or export it.

The database is a collection of different objects like instruments, plants, chemicals and so on.
Every object has a default template which makes creating and editing any object more easy and faster.
You can link in your experiment to any database object or other experiment.

All data is secured by state of the art encryption and web security practices.
It also has extra features like latex support, drawing and molecule tool, a scheduler for your team, support of several languages and many more to come developed by an active community.

You can test the ELN online in a free [demo][web-elabdemo].

<!--
### LISTER
LISTER is a tool made with python to make eLabFTW compatible with the ISA model.
The tool takes the entries of an experiment plus the attached database entries to create an Excel file containing all the necessary metadata as defined in the ISA standard.
It also comes with its own markup language to annotate metadata.

With eLabFTW and LISTER you can use all the features of a good ELN, and you can afterwards store your data on your ARC with the help of LISTER.

There is also a [demo][web-listerdemo] for eLabFTW available, with experiments documented in the LISTER markup language. <!-- NOTE: the demo currently has a certificate problem and could therefore create problems accessing it

## Example - eLabJournal

[eLabJournal][web-elabjournal] is a paid closed-source ELN from eLabNext. It provides a full ELN with many features and add-on's.
It supports all common file and document formats, including online integration of MS Office formats.
Furthermore, it can either be hosted on a cloud or installed on a server infrastructure of your institute.
Like many other paid ELN, it has a full support and user training service provided by the company.
It supports many different compliances and options for evidence security.

<!-- TODO -->

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

<!-- This guide was inspired by the [guide][web-nfdi4chem] made by the nfdi4chem consortia. -->

<!-- References -->

[knowledge-fair]: ../fundamentals/FairDataPrinciples.html "Article about FAIR Principles"
[knowledge-mets]: ../fundamentals/Metadata.html "Article about Metadata"
[web-elabftw]: https://www.elabftw.net/ "Homepage of eLabFTW"
[web-elabdemo]: https://demo.elabftw.net/ "Demo of eLabFTW"
[web-listerdemo]: https://elabftw.pharm.hhu.de/ "Demo of eLabFTW with LISTER"
[web-elnfinder]: https://eln-finder.ulb.tu-darmstadt.de/home "ELN Finder"
[web-elabjournal]: https://www.elabnext.com/products/elabjournal/ "Homepage of eLabJournal"
[web-nfdi4chem]: https://knowledgebase.nfdi4chem.de/knowledge_base/docs/eln/ "ELN Guide made by nfdi4chem"
