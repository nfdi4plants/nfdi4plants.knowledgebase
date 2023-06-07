---
layout: docs
title: FAIR Data Principles
published: 2022-05-19
author: Martin Kuhl
author_github: martin-kuhl
add toc: false
add sidebar: _sidebars/mainSidebar.md
article_status: published
todo:
---

The FAIR Principles were published in 2016 to serve as guidelines for improving the **F**indability, **A**ccessibility, **I**nteroperability, and **R**eusability of scientific data. Albeit data can only be FAIR when provided with [metadata][kb-Metadata], researchers rely on infrastructures to set a framework. Hence, FAIR(ness) addresses both stakeholders publishing data and those providing infrastructures, such as repositories.

The ultimate goal of FAIR (data) is to drive science and the production of new datasets, as it allows researchers to build on existing comprehensively annotated studies. In plant biology, this, e.g., can accelerate the innovation process of generating new crop species that provide a higher nutritional content or show a superior heat tolerance, regarding global warming. Submitting your proteomics dataset for such a new species in a standardized file format to a repository, e.g. [PRIDE][EBI-PRIDE], would be one implementation of the FAIR Principles. While researchers need to be able to find and understand published datasets, computers need to handle (big) data depending on the intended use case. Thus, the FAIR principles also aim to improve the machine-readability of datasets for autonomous processing, while preserving human-readability.

### Findable

- [F1. (Meta)data are assigned a globally unique and persistent identifier](#f1-metadata-are-assigned-a-globally-unique-and-persistent-identifier)
- [F2. Data are described with rich metadata (defined by R1 below)](#f2-data-are-described-with-rich-metadata-defined-by-r1-below)
- [F3. Metadata clearly and explicitly include the identifier of the data they describe](#f3-metadata-clearly-and-explicitly-include-the-identifier-of-the-data-they-describe)
- [F4. (Meta)data are registered or indexed in a searchable resource](#f4-metadata-are-registered-or-indexed-in-a-searchable-resource)

### Accessible

- [A1. (Meta)data are retrievable by their identifier using a standardised communications protocol](#a1-metadata-are-retrievable-by-their-identifier-using-a-standardised-communications-protocol)
  - [A1.1 The protocol is open, free, and universally implementable](#a11-the-protocol-is-open-free-and-universally-implementable)
  - [A1.2 The protocol allows for an authentication and authorisation procedure, where necessary](#a12-the-protocol-allows-for-an-authentication-and-authorisation-procedure-where-necessary)
- [A2. Metadata are accessible, even when the data are no longer available](#a2-metadata-are-accessible-even-when-the-data-are-no-longer-available)

### Interoperable

- [I1. (Meta)data use a formal, accessible, shared, and broadly applicable language for knowledge representation](#i1-metadata-use-a-formal-accessible-shared-and-broadly-applicable-language-for-knowledge-representation)
- [I2. (Meta)data use vocabularies that follow FAIR principles](#i2-metadata-use-vocabularies-that-follow-fair-principles)
- [I3. (Meta)data include qualified references to other (meta)data](#i3-metadata-include-qualified-references-to-other-metadata)

### Reusable

- [R1. (Meta)data are richly described with a plurality of accurate and relevant attributes](#r1-metadata-are-richly-described-with-a-plurality-of-accurate-and-relevant-attributes)
  - [R1.1. (Meta)data are released with a clear and accessible data usage license](#r11-metadata-are-released-with-a-clear-and-accessible-data-usage-license)
  - [R1.2. (Meta)data are associated with detailed provenance](#r12-metadata-are-associated-with-detailed-provenance)
  - [R1.3. (Meta)data meet domain-relevant community standards](#r13-metadata-meet-domainrelevant-community-standards)

![FAIR Data Principles](../img/FAIR.jpg)

## Detailed explanation

### Findable

The first step in (re)using data is to find them. Metadata and data should be easy to find for both humans and computers, including machine-readable metadata that are essential for automatic discovery of your datasets and services.

#### F1. (Meta)data are assigned a globally unique and persistent identifier

A [persistent identifier][kb-PersistentIdentifiers] (PID) is a long-lasting reference, typically used in the context of digital resources accessible over the internet, in this case your dataset. Globally unique and persistent identifiers allow finding your data in the first place. Continuous availability of the digital object is guaranteed by registry providers, which maintain the link to the actual dataset.

A PID you have probably already heard of as most biological journals assign them to manuscripts, is the Digital Object Identifier ([DOI][doi]). Your personal 16-digit [ORCID][orcid] or the accession number of your RNASeq dataset on GEO also represent examples for PIDs. An overview which scientific repositories assign which type of PID can be found at the registry of research data repositories ([re3data.org][ext-re3data]).

#### F2. Data are described with rich metadata (defined by R1 below)

To enable (automatic) findability of your dataset, it is essential for humans and computers to understand its content. This is supported by comprehensive metadata in a standardized format about the dataset (how it was generated), its context (including associated data), or associated publications . This aspect goes hand in hand with making your data reusable and is therefore additionally addressed during metadata attributes (R1). As creator of the data, you should always keep in mind that it is best to provide as much information as possible, as others will generally profit from more input. Repository providers set the framework for this aspect by giving researchers the possibility to fully describe their datasets with proper metadata.

#### F3. Metadata clearly and explicitly include the identifier of the data they describe

Your data need to be assigned with a globally unique and persistent identifier (F1). Accordingly, this identifier must be included in your metadata file to link the information to the corresponding data file. A requirement, which must be ensured by infrastructure providers. Even though your dataset might not have been published, and archived subsequently, the PID included in the metadata can link you as the responsible contact person for the dataset. Thereby, the PID can still help other researchers to find your data and you in increasing your reach.

#### F4. (Meta)data are registered or indexed in a searchable resource

Repositories ensure that metadata of a submitted dataset are filed in a machine-readable format to enable indexing. The indices of your metadata are used to efficiently search and find datasets. Once again it needs to be highlighted, that you should equip your metadata with as much information as possible, as more input simplifies the searching process.

### Accessible

Once users find your data, they need to know how they can access it, possibly including authentication and authorization.

#### A1. (Meta)data are retrievable by their identifier using a standardised communications protocol

Standardized communication protocols, in combination with persistent identifiers, can guarantee access to your datasets, as links are maintained by the identifier providers. Examples of such protocols are http(s) or ftp(s). Accordingly, the combination of protocol and PID could look like <ins><https://doi.org/10.1000/182></ins>. Protocols with poor documentation or elements that need human assistance should be avoided, as these lead to hurdles in accessing data. For highly sensitive data it can be an option to provide an email or telephone number of a contact person, as fully mechanized protocols cannot guarantee secure access.

#### A1.1 The protocol is open, free, and universally implementable

Infrastructure providers should use free (no-cost), open-source protocols. Thus, these protocols are globally implementable and can grant researchers around the globe access to the data, at least to the metadata. As researcher, you can maximize the reuse of your data if you share your data with repositories that follow these criteria. Avoid proprietary and non-standard protocols.

#### A1.2 The protocol allows for an authentication and authorisation procedure, where necessary

At this point it is very important to differentiate between "accessible" and "open" data. The "A" in FAIR does not imply that you are required to grant free access for everyone to your data, but rather to specify conditions under which the data are accessible. Even protected data are FAIR, if requirements were defined on how the data can be retrieved. These must be processable automatically by a system, e.g. a repository, and can be especially necessary for sensitive data.

An example for this case is a private and thereby, non-visible repository on [GitLab][kb-DataHub], accessible only to defined users. As owner of the GitLab repository, you can select these users and researchers simply identify using the GitLab sign-in. Accordingly, the mechanism to allow users to identify themselves, belongs to the responsibility of the infrastructure provider.

#### A2. Metadata are accessible, even when the data are no longer available

Metadata and actual datasets should be stored in separate files. In this way, your metadata can and should persist even when the dataset was archived or is no longer supported (due to evolving technologies), as storing metadata is generally easier and cheaper. Researchers and infrastructure providers can thereby ensure that a link to responsible contact persons remains available and that researchers do not waste time searching for the data. This will also help you as the data provider to maintain your reach.

### Interoperable

To make your data reusable, it needs to interoperate with applications or workflows for analysis, storage, and processing.

#### I1. (Meta)data use a formal, accessible, shared, and broadly applicable language for knowledge representation

Besides other researchers, with whom you want to discuss and exchange your (newest) discoveries, your data can be processed by machines. This should be possible without human assistance or any additional algorithms, tools, or mappings specifically developed for this use case. Interoperability typically means that each computer system at least has knowledge of the other system's data exchange formats. Hence, using a good data model, to describe and structure your (meta)data and using commonly used controlled vocabularies, ontologies, and thesauri, each with globally unique PIDs, strongly supports you in generating interoperable data that can be found automatically. This holds especially true for metadata, as they contextualize your dataset and in the ideal case avoid any kind of questions or confusion.

<!-- TODO
- add link to kb ontology
 -->

#### I2. (Meta)data use vocabularies that follow FAIR principles

Ontologies and controlled vocabularies you use to describe your datasets need to be documented and resolvable using globally unique PIDs. These documentations include authors, definitions of terms and cross-references to other ontologies. Additionally, the documentation needs to be accessible and findable by anyone who uses the dataset, e.g., by a URL included in your metadata.

#### I3. (Meta)data include qualified references to other (meta)data

Datasets are not static since they can evolve through extension by additional data or analyses by new algorithms. In such cases you generate newer versions of your data, which need to be stated as such by qualified references. Qualified references are cross-references that explain their intent, meaning in our example that characterizing V1 as the previous version of V2 of your dataset is a much more qualified reference than simply describing the two versions as related. Correspondingly, you should provide as many meaningful links as possible, preferably via PIDs,  between datasets that build on other datasets, additional datasets needed to complete a dataset, or complementary information stored in a different dataset.

### Reusable

The ultimate goal of FAIR is to optimise the reuse of data. To achieve this, metadata and data should be well-described so that they can be replicated and/or combined in different settings.

#### R1. (Meta)data are richly described with a plurality of accurate and relevant attributes

Principle R1 is related to F2, but focuses on assisting humans and machines to decide if your data is actually useful in a particular context. This can be facilitated by giving as much standardized information as possible on the context under which and how the data was generated, e.g. "Which specific strain was used?" or "Under which parameters was the mass spectrometer?", but also "simple" information as the manufacturer of an incubator or sensor.
As author of your dataset you cannot expect other researchers to be familiar with your methods or domain. Therefore, you should be as generous as possible in providing metadata and even include information that seem irrelevant to you. As infrastructure provider you should give researchers the option to include a variety of metadata, including optional and free-text fields. Exemplary questions that need to be answered by the metadata are:

- Who created the data?
- When was the data created and/or published?
- How was the data generated?
- How was the data processed?
- Are there any limitations other users should be aware of?
- ...

#### R1.1. (Meta)data are released with a clear and accessible data usage license

You should clearly describe the usage rights for your data and include it in your metadata, as ambiguity could severely limit its reuse. Hence, the conditions under which the data can be used should be clear to machines and humans and can, e.g., be represented in form of a license. For scientific data, [Creative Commons licenses][ext-CreativeCommons] are commonly used.

#### R1.2. (Meta)data are associated with detailed provenance

Ultimately, this point means nothing more than "where does your (meta)data originate from?" This includes a human- and machine-readable description of persons who collected the data, the workflows used to generate your data, information on additional external data, but also different versions of the data, amongst others. This information must be linked via PIDs. Always keep in mind that other researchers want to be just as much acknowledged for their work as you.

#### R1.3. (Meta)data meet domain-relevant community standards

Researchers find it easiest to reuse data, if they are familiar with the type of data, file formats (well-established and sustainable), how the (meta)data is organized, and if commonly used vocabularies and ontologies are integrated.

FAIR data should at least meet minimal information standards, such as MIAPPE, MIAME, or MIAPE (see also [metadata][kb-Metadata]). Other community standards may be less formal, but nevertheless, publishing (meta)data in a manner that increases its use(ability) for the community is the primary objective of FAIRness. DataPLANT aims at supporting FAIR data by providing a framework for the plant biology community.

All of the above stated applies to data (or any digital object), metadata (information about that digital object), and infrastructure.

## How does DataPLANT support me in the creation of FAIR data?

The following table gives an overview about DataPLANT tools and services supporting you in FAIRification of your data. Follow the link in the first column for details.

Name | Type | Tasks on metadata
----------------|-----------|------------------
**[ARC][kb-AnnotatedResearchContext]**  <br> (Annotated Research Context) | Standard | **Structure:** <ul><li>Package data with metadata</li></ul>
**[Swate][gh-Swate]** <br> (Swate Workflow Annotation Tool for Excel) | Tool | **Collect and structure:** <ul><li>Annotate experimental and computational workflows with ISA metadata schema</li><li>Easy use of ontologies and controlled vocabularies</li><li>Metadata templates for versatile data types</li></ul>
**[ARC Commander][kb-ArcCommander-Manual]** | Tool | **Collect, structure and share:** <ul><li>Add bibliographical metadata to your ARC</li><li>ARC version control and sharing via DataPLANT's DataHUB</li><li>Automated metadata referencing and version control as your ARC grows</li></ul>
**[DataHUB][kb-DataHub]** | Service | **Share:** <ul><li>Federated system to share ARCs</li><li>Manage who can view or access your ARC</li></ul>
**Invenio** | Service under construction | **Share:** <ul><li>Assign a DOI to an ARC</li></ul>
**Metadata registry** | Service under construction | **Share:** <ul><li>Find ARC (meta)data</li></ul>
**Converters** | Tool under construction | **Curate:** <ul><li>Harmonize and migrate between metadata schema

<!-- TODOs

- Replace SWATE link with KB link (once available)
- Replace arcCommander link with KB link (once available)
- Add KB-converter link (once available)
- Add KB-metadata_registry link (once available)
-->

## Sources and further information

- [FAIR Principles](https://www.go-fair.org/fair-principles/)
- [The FAIR Guiding Principles for scientific data management and stewardship](https://www.nature.com/articles/sdata201618)


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
[kb-QuickStart_arc]: ../tutorials/QuickStart_arc.html "Quickstart ARC"


<!-- DataPLANT web links -->

[kb-ArcCommander-Manual]: ../ArcCommanderManual/index.html "ARC Commander Manual"
[gh-Swate]: <https://github.com/nfdi4plants/Swate/> "GitHub Swate"

<!-- Reference web links -->

[ext-EBI-PRIDE]: https://www.ebi.ac.uk/pride/ "EBI PRIDE"
[ext-re3data]: https://www.re3data.org/ "re3data.org"
[doi]: https://www.doi.org/ "Digital Object Identifier"
[orcid]: https://www.orcid.org/ "ORCID"
[ext-CreativeCommons]: https://creativecommons.org/ "Creative Commons"
