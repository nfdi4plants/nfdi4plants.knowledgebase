---
layout: docs
title: Research Data Management
date: 2022-05-19
author:
- name: Martin Kuhl
  github: https://github.com/Martin-Kuhl
  orcid: https://orcid.org/0000-0002-8493-1077
add toc: true
add sidebar: _sidebars/mainSidebar.md
status: published
---

## What is Research Data Management?

Research Data Management (RDM) combines conceptual, organizational, and technical measures and practices for handling your research data during its evolution in a way that other researchers can find, understand, and ultimately, reuse them. RDM strategies can greatly vary between domains or even data types. Hence, an approach for unification, ideally for all scenarios, would be highly desirable. For plant sciences, it is widely accepted to divide RDM into a data life cycle with different phases, i.e. planning, collecting, processing, analysing, preserving, sharing, and reusing your research data. This also includes how your data will be handled after a project has ended, e.g. long-term storage of and access rights to the data. DataPLANT, and this Knowledge Base, aims at supporting you during these phases and thereby, in the [FAIRification][kb-FairDataPrinciples] of your data.

## Research Data Life Cycles

For plant sciences, we would like to complement the concept of the data life cycle with the aspect of multiple connections between and iterations within the cycle. These additions mirror the evolution of data, as research data are not static, can build on each other, and sometimes might call for a re-evaluation. In some scenarios you might need to jump back to data collection after you made a breakthrough during your analyses. In another case, you might think that it would be helpful to process older data with different tools or a distinct focus as your results gave you new insights.

![Research Data Management Lifecycles](./../img/Lifecycle.jpg)

### Planning

Data management planning represents the phase of defining your strategy for managing data and documentation generated within the project. In this phase you try to anticipate the best ways to avoid problems and setting the conditions for your research data to achieve the highest possible impact in science, even after project completion. This can, e.g., involve standards or best practices. The outcomes of your planning, including aspects of the data management process  before, during, and after the end of a project, is usually formalised in a [Data Management Plan][kb-DataManagementPlan] (DMP), which is often required by research organisations and funders.

### Collecting

The data collection phase is the time to gather information about specific variables of interest, e.g. in plant sciences the expression of a certain protein under stress conditions. While data collection methods strongly depend on the field and research subject, it is always important to ensure data quality. You can also use already existing data in your project. This can either be previously collected datasets or consensus data, such as a reference genome. For more information see also [Reusing](#-Reusing).

Besides data quality, the collection phase also determines the quality of your documentation, including the provenance of researchers, instruments, or samples. This serves the purpose to make your data understandable and reproducible. Tools or the integration of multiple tools (also called tool ecosystem) can assist you in data management and documentation during data collection.

### Processing

During this phase of your project, you convert your data into a desired format and prepare it for analysis. Ideally, data processing includes some automated, yet oftentimes still manual, steps in a workflow, which help you in evaluating the quality of your data. The main goals are to convert your data into a readable format needed for downstream analysis in order to create clean, high-quality datasets for reliable results. When data is imported from existing sources, e.g. data to be reused from another project, processing can also include manual steps to make it suitable for analysis. Accurate data processing is also essential for combining two or more datasets into a single dataset. Again, a high-quality documentation during data processing is key to ensure reproducibility of your results.

### Analysing

Data analysis follows the (often automated, batch) data processing stage. It consists of exploring your data to identify or understand relationships between variables by applying mathematical formula (or models). Steps of the analysis workflow are oftentimes repeated several times to iteratively optimize the workflow for data exploration. Your data analysis methods will differ depending on the type of your data (quantitative or qualitative).

The data analysis part of a project is often considered as central, as you generate new knowledge and information at this stage. Due to the relevance of the data analysis stage in research findings, it is essential that your analysis workflow complies with the [FAIR principles][kb-FairDataPrinciples]. Precisely, this means that the workflow is reproducible by other researchers and scientists.

### Preserving

The process of data preservation represents a series of activities necessary to ensure safety, integrity and accessibility of your data for as long as necessary, even decades. It prevents data from becoming unavailable and unusable over time through appropriate actions and therefore, is indeed more than just data storage and backup. Such activities can include that the data is organised and described with appropriate metadata to be always understandable and reusable. Main reasons for research data preservation are to guarantee verification and reproducibility for several years after the end of a project, allow reuse of your data, or a requirement by funders, publishers, institutions, or organisations for a specific purpose, such as teaching or research building on the findings and conclusions.

### Sharing

Sharing is not limited to publishing your data to share it with the global research community. This can also mean to send your data to collaboration partners in the context of a collaborative research project.It is important to know that data sharing is not equal to open data or public data, as you can also choose to share your data with defined access rights. You can share your data at any time during the research data life cycle but the data should be available at the time of a publication of articles that use the corresponding data to make scientific conclusions. For more information see also [Data Sharing][kb-DataSharing].

### Reusing

Reuse of data is particularly important in science, as it  drives research by enabling different researchers (or yourself) to build upon the same data independently of one another resulting again in new, maybe unanticipated, uses for the data. Reusability is one key component of the [FAIR principles][kb-FairDataPrinciples]. By reusing data you can also avoid doing unnecessary experiments for data that has already been published or verify reported findings as correct, laying a robust foundation for subsequent studies.

## How does DataPLANT support me in Research Data Management?

The following table gives an overview about DataPLANT tools and services for RDM. Follow the link in the first column for details.

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

- [RDMkit](https://rdmkit.elixir-europe.org/index)

<!-- Knowledge base cross-references -->

[kb-DataPublications]: ../fundamentals/DataPublications.html "Data Publication"
[kb-DataManagementPlan]: ../fundamentals/DataManagementPlan.html "Data Management Plan"
[kb-FairDataPrinciples]: ../fundamentals/FairDataPrinciples.html "FAIR Data principles"
[kb-Metadata]: ../fundamentals/Metadata.html "Metadata"
[kb-PersistentIdentifiers]: ../fundamentals/PersistentIdentifiers.html "Persistent Identifiers"
[kb-AnnotatedResearchContext]: ../implementation/AnnotatedResearchContext.html "Annotated Research Context"
[kb-DataHub]: ../implementation/DataHub.html "DataPLANT DataHUB"
[kb-ResearchDataManagement]: ../fundamentals/ResearchDataManagement.html "Research Data Management"
[kb-DataSharing]: ../fundamentals/DataSharing.html "Data Sharing"
[kb-VersionControlGit]: ./VersionControlGit.html "Git"
[kb-PublicDataRepositories]: ../fundamentals/PublicDataRepositories.html "Repositories"

<!-- DataPLANT web links -->

[kb-ArcCommander-Manual]: ../ArcCommanderManual/index.html "ARC Commander Manual"
[gh-Swate]: <https://github.com/nfdi4plants/Swate/> "GitHub Swate"
