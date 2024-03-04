---
layout: docs
title: Persistent Identifiers
date: 2022-05-09
author:
- name: Dominik Brilhaus
  github: https://github.com/brilator
  orcid: https://orcid.org/0000-0001-9021-3197
add toc: true
add sidebar: _sidebars/mainSidebar.md
status: published
---

## What are PIDs?

Persistent identifiers (PIDs) &ndash; as the name suggests &ndash; enable to persistently identify a resource.
This may sound complicated, but consider a daily life example for PIDs: the International Standard Book Number (ISBN). The 13-digit ISBN code allows to unambiguously identify a book without having to specify book author, title or any other detail. Just as the ISBN alone helps you to find and order a book at a local retailer, PIDs enable you to easily find different entities or resources relevant to plant sciences. This can include publications, methods, samples or other experimental materials, software, and the datasets they produce or your contributions to the earlier.

## Globally unique and persistent

Two major requirements of PIDs are the reason they contribute to virtually all aspects of [FAIR][kb-FairDataPrinciples] data management. PIDs need to be **globally unique** and **persistent**, i.e. they stably resolve to identify the respective resource, also in the (foreseeable) future. Global uniqueness is nowadays technically achieved through use of the internet. In simple words: no web address may exist more than once. However, it is good to know that standard URLs (uniform resource locators, "web addresses") cannot be considered PIDs. Sparing the technical details behind PIDs (see [PURLs] and [Handles]), consider the homepage of an institute where a publication was originally stored at the URL  
`https://plant-science-institute.com/research/publications/publication` and after homepage restructuring moved to  
`https://plant-science-institute.com/about/outputs/publication`. The earlier URL becomes a "dead link", impossible to be properly resolved and identify the linked publication, a phenomenon known as "link rot".
Although many PIDs resolve to a URL, taking the user to the proper location, they more importantly resolve to the content of the linked digital object (e.g. a dataset or publication). The example shows that the technical layer alone (global uniqueness through web addresses) is not enough to guarantee persistence and prevent "link rot". This is achieved socially through defined policies and institutions: PIDs are actively curated and managed through registration services overseeing that the linked digital object is properly located.

## What can I reference with a PID and why do I benefit from PIDs?

Although basically any imaginable &ndash; both analog and digital &ndash; entity can be assigned a PID, we mostly focus on PIDs that identify digital objects or resources. However these digital resources themselves may be descriptors of analog entities such as items at museums, samples from a collection, artistic or musical outputs. The exact benefit and how a PID is assigned to a resource depends on the context: what type of entity is referenced with a PID.

The two best known examples for PIDs used in science are **DOI** (Digital Object Identifier) and **ORCID** (Open Researcher and Contributor ID).
The most established use of DOIs is to identify publications. Similar to an ISBN for a book, a DOI alone suffices to persistently link and refer to a publication, without naming the title, authors or journal. Usually DOIs are not actively requested by standard users, e.g. the authors submitting a manuscript to a journal or data to a repository, but they are assigned during the publication process, e.g. by the journal or data repository acting as the PID registration service.
<!-- As scientists, we benefit from DOI-referenced publications by better findability and more concise referencing (see also [kb-DataPublications]) -->
On the other hand, you, as a researcher, need to request an ORCID (once). ORCIDs concisely identify researchers independent of identical names between multiple researchers or name changes (e.g. due to wedding). They can actively be curated, e.g. to link and present all publication or other digital outputs.

<!-- In summary, PIDs help making data FAIR. A dataset that is persistently linked via a PID will be findable and accesible and thereby  -->

## Common examples for PIDs

### People

- Open Researcher and Contributor ID ([ORCID](<https://orcid.org/>))

### Digital objects and publications

- Digital Object Identifier ([DOI](<https://www.doi.org>))
- Persistent Identifiers for eResearch ([ePIC consortium](<https://www.pidconsortium.net>))
- Pubmed ID ([PMID](<https://pubmed.ncbi.nlm.nih.gov>))

### Samples and Resources

- Research Resource Identifiers ([RRIDs](<http://scicrunch.org/resources>))

### Institutions

- Research Organization Registry ([ROR](<https://ror.org>))
- Global Research Identifier Database ([GRID](<https://grid.ac>))

<!-- TODO ## How does DataPLANT support me in using PIDs?

The following table gives an overview about DataPLANT tools and services related to sharing data. Follow the link in the first column for details.

Name | Type | Tasks on metadata 
----------------|-----------|------------------ 
- invenio -->


## Sources and further information

- [Frequently Asked Questions about the DOI® System](<https://www.doi.org/faq.html>)

<!-- Links to DataPLANT knowledge base (kb-) -->

<!-- kb-Fundamentals -->

[kb-DataManagementPlan]: ../fundamentals/DataManagementPlan.html "Data Management Plan"
[kb-DataPublications]: ../fundamentals/DataPublications.html "Data Publication"
[kb-DataSharing]: ../fundamentals/DataSharing.html "Data Sharing"
[kb-FairDataPrinciples]: ../fundamentals/FairDataPrinciples.html "FAIR Data principles"
[kb-Metadata]: ../fundamentals/Metadata.html "Metadata"
[kb-PersistentIdentifiers]: ../fundamentals/PersistentIdentifiers.html "Persistent Identifiers"
[kb-PublicDataRepositories]: ../fundamentals/PublicDataRepositories.html "Repositories"
[kb-ResearchDataManagement]: ../fundamentals/ResearchDataManagement.html "Research Data Management"
[kb-VersionControlGit]: ../fundamentals/VersionControlGit.html "Version Control and Git"

<!-- kb-Implementation -->
[kb-AnnotatedResearchContext]: ../implementation/AnnotatedResearchContext.html "Annotated Research Context"
[kb-DataHub]: ../implementation/DataHub.html "DataPLANT DataHUB"

<!-- kb-Tutorials -->
[kb-QuickStart_arc]: ../tutorials/ARCUserJourney.html "ARC User Journey"


<!-- Links to DataPLANT Homepage (hp-) -->

[hp-Registration]: <https://register.nfdi4plants.org/> "DataPLANT Registration"
[hp-DataHUB]: <https://git.nfdi4plants.org> "DataPLANT DataHUB"
[hp-HelpDesk]: <https://helpdesk.nfdi4plants.org> "DataPLANT Help Desk"

<!-- Links to DataPLANT GitHub (gh-) -->

[gh-DataPlant]: <https://github.com/nfdi4plants/ARC-specification/> "GitHub DataPLANT"
[kb-ArcSpecs]: ./../implementation/ARC-specification.html "ARC specification"
[kb-ArcCommander-Manual]: ../ArcCommanderManual/index.html "ARC Commander Manual"

[PURLs]: https://en.wikipedia.org/wiki/Persistent_uniform_resource_locator "Wikipedia PURLs"
[Handles]: https://en.wikipedia.org/wiki/Handle_System "Wikipedia Handles"
