---
layout: docs
title: Data Publications
published: 2022-05-19
author: Martin Kuhl
author_github: martin-kuhl
add toc: true
add sidebar: _sidebars/mainSidebar.md
article_status: published
todo:
---


Publishing research data allows others to access and use your data. Writing a manuscript can consume a lot of time. Some researchers might find this process tedious if they only want to publish certain data, which they considered as interesting or impactful during and after collection. Data publishing is an integral part of the open science movement. In general, the main goal of data publishing is to evolve data to first class research outputs, driven by a number of initiatives. This enables datasets to be cited similarly to other research publication types, such as articles or books, enabling producers of datasets to gain academic credit for their work.

## Benefits of data publications

The motivations for publishing data may range from a desire to make research more accessible, making datasets citable, or research funders or publishers require open data publishing. Some scientists might argue that they would feel uncomfortable about publishing their dataset, as it could allow people to use their work from the web and extract novelties out of it. However, most print-based science journals are available online nowadays, so the potential of exploiting is already present. Additionally, solutions to preserve privacy within data publishing has been proposed, including privacy protection algorithms, data ”masking” methods, and regional privacy level calculation algorithm. In general, the advantages of data publications prevail. Here is a list of some potential benefits you might get from publishing your dataset:

- Data can be reused for similar and new purposes
- Data can be integrated with other data to create new data resources - Invitations to collaborate
- Invitations to provide consultancy
- Greater citation rate
- Citation of data publications is likely to increase citations of related research papers
- Wider recognition among peers
- Overall acceleration of science and better science
- Data protection: once it’s published, with provenance and DOI (a) the data is safe (backed-up) at an additional storage site and (b) as a researcher I can prove it’s mine
- ...

## Criteria for data publications

There are a several criteria to consider during publication of your dataset:

1. Of course, your data needs to be hosted in a repository to make it available for everyone. Various [repositories][kb-PublicDataRepositories] exist, which have been developed to support data publication, e.g. [Zenodo][ext-zenodo], including general, but also domain-specific data repositories exist.
2. Your dataset needs to be well annotated, allowing other researchers to understand and reuse your data (see also [metadata][kb-Metadata]).
3. Your dataset needs to be assigned a [persistent identifier][kb-PersistentIdentifiers] (PID), such as a DOI. This can be assigned directly on the repository or with the help of a publication service, such as [Invenio][ext-invenio]. The identifier will others to cite your dataset.
4. If the publisher validates your data, your metadata annotation is reviewed to ensure comprehensibility.
There is also the possibility for publishing a data paper about the dataset, which may be published as a preprint, in a journal, or in a data journal that is dedicated to supporting data papers. The data may be hosted by the journal or hosted separately in a data repository.

<!-- TODO 
Within-article referencing does not work properly? 
Also, not really needed here. 
For more information see [data papers & data journals](#data-papers--data-journals).
-->


![Data publishing](../img/DataPublication.jpg)

**Figure 1:** During publication, datasets are typically deposited in a repository to make them available, documented to support reproduction and reuse, and assigned an identifier to facilitate citation. Some, but not all, publishers review datasets to validate them.

## Data papers & data journals

Data papers or data articles are “scholarly publications of a searchable metadata document describing a particular on-line accessible dataset, or a group of datasets, published in accordance to the standard academic practices”. The intent of a data paper is to offer a descriptive information on the related dataset(s) focusing on data collection and distinguishing features, rather than on data processing and analysis. Thereby, their aim is answering questions like “What data was published?”, “How was the data collected?”, or “Who collected the data?”. As data papers are considered academic publications, just as other types of papers, they allow scientists sharing data to receive credit and thus, upgrading the value of data sharing. This provides not only an additional incentive to share data, but also increases metadata quality and reusability of the shared data.

Data papers are supported by a variety of journals, of which some are “true” data journals, i.e. they are dedicated to publishing data papers only, while the majority are mixed journals meaning they publish a number of article types, including data papers. A comprehensive list of data journals for different domains can be found [here][ext-DataJournals].

## How does DataPLANT support me in Data publication?

The following table gives an overview about DataPLANT tools and services supporting you in data publishing. Follow the link in the first column for details.

Name | Type | Tasks on metadata
----------------|-----------|------------------
**[DataHUB][kb-DataHub]** | Service | **Share:** <ul><li>Federated system to share ARCs</li><li>Manage who can view or access your ARC</li></ul>
**Invenio** | Service under construction | **Share:** <ul><li>Assign a DOI to an ARC</li></ul>
**Metadata registry** | Service under construction | **Share:** <ul><li>Find ARC (meta)data</li></ul>
**Converters** | Tool under construction | **Curate:** <ul><li>Harmonize and migrate between metadata schema

## Sources and further information

- [Data publication: towards a database of everything](https://doi.org/10.1186/1756-0500-2-113)
- [Motivating Online Publication of Data](https://doi.org/10.1525/bio.2009.59.5.9)
- [Data publication consensus and controversies](https://dx.doi.org/10.12688%2Ff1000research.3979.3)
- [Making Data a First Class Scientific Output](https://doi.org/10.2218/ijdc.v7i1.218)
- [The data paper](https://dx.doi.org/10.1186%2F1471-2105-12-S15-S2)

<!-- Knowledge base cross-references -->

[kb-Metadata]: ./Metadata.html "Metadata"
[kb-PersistentIdentifiers]: ./PersistentIdentifiers.html  "Persistent Identifiers"
[kb-DataHub]: ./DataHub.html "DataPLANT DataHUB"
[kb-PublicDataRepositories]: ./PublicDataRepositories.html "Repositories"

<!-- DataPLANT web links -->

<!-- Reference web links -->

[ext-zenodo]: <https://zenodo.org/> "Zenodo"
[ext-invenio]: <https://inveniosoftware.org/products/rdm/> "Invenio"
[ext-DataJournals]: https://www.researchdata.uni-jena.de/en/information/data-publication "RDM Jena Data Journals"
