---
layout: docs
title: Public Data Repositories
date: 2022-05-09
author:
- name: Dominik Brilhaus
  github: https://github.com/brilator
  orcid: https://orcid.org/0000-0001-9021-3197
add toc: true
add sidebar: _sidebars/mainSidebar.md
status: published
---

## What are data repositories?

Public data repositories are one option to [publish your research data][kb-DataPublications]. They usually focus on the data &ndash; as opposed to other research outputs such as manuscripts. Data repositories assign [persistent identifiers][kb-PersistentIdentifiers] (e.g. a DOI) to your dataset and by that comply with requirements of most publication journals.  
We differentiate between domain-specific and general-purpose repositories.

### Domain-specific data repositories

Domain-specific data repositories are well-established in a domain or community specialized on a certain data type. They frequently co-develop or foster compliance with metadata standards (see [metadata][kb-Metadata]) and oftentimes curate data. Data deposition at these repositories is recommended.  
The following table lists examples of relevant endpoint repositories (ER) for data produced by DataPLANT participants. Check the links below for additional repositories.

Repository | Description | Biological data domain | DataPLANT Templates available
-- | -- | -- | -- | -- |
[EBI-ENA](<https://www.ebi.ac.uk/ena/>) | European Nucleotide Archive | genome / transcriptome sequences | :white_check_mark:
[EBI-ArrayExpress](<https://www.ebi.ac.uk/arrayexpress/>) | Archive of Functional Genomics Data | transcriptome  
[EBI-MetaboLights](<https://www.ebi.ac.uk/metabolights/>) | Database of Metabolomics | metabolome | :white_check_mark:
[EBI-PRIDE](<https://www.ebi.ac.uk/pride/>) | PRoteomics IDEntifications Database | proteome | :white_check_mark:
[EBI-BioImage Archive](<https://www.ebi.ac.uk/bioimage-archive/>) | Stores and distributes biological images | imaging, microscopy | 
[e!DAL-PGP](<https://edal.ipk-gatersleben.de/index.html>) | Plant Genomics & Phenomics Research Data Repository | phenome | 
[NCBI-GEO](<https://www.ncbi.nlm.nih.gov/geo/>) | Gene Expression Omnibus | transcriptome | :white_check_mark:
[NCBI-GenBank](<https://www.ncbi.nlm.nih.gov/genbank/>) | Genetic Sequence Database | genome | :white_check_mark:
[NCBI-SRA](<https://www.ncbi.nlm.nih.gov/sra/>) | Sequence Read Archive | genome / transcriptome sequences | :white_check_mark:

### General-purpose repositories

In cases where no suitable domain-specific repository exists, general-purpose repositories are an option to publicly deposit research data and receive a [PID][kb-PersistentIdentifiers]. A benefit of general-purpose repositories is that they allow deposition of virtually any data type. Also research data packages with mixes of data types and computational workflows can be deposited, which aligns well with typical plant science investigations. However, since these repositories can only foster compliance with metadata standards at a very generic level (e.g. bibliographic or technical, see [metadata][kb-Metadata]), they limit the capacity for [FAIR][kb-FairDataPrinciples] reuse of data.  

Examples for general-purpose repositories include

- Zenodo <https://zenodo.org>,
- DRYAD <https://datadryad.org/>, and
- FigShare <https://figshare.com>.

## Finding a suitable repository

The following resources provide good starting points to seek a suitable repository for your research data.

- FAIRsharing: <https://fairsharing.org>
- re3data (Registry of Research Data Repositories): <https://www.re3data.org>
- Overview of EMBL-EBI repositories: <https://www.ebi.ac.uk/services/all>
- Overview of NCBI repositories: <https://www.ncbi.nlm.nih.gov/guide/sitemap/>

## Submitting data to a public data repository

Depositing research data at a public data repository can be tedious. Especially the domain-specific repositories require compliance with specific data submission routines (a) in terms of format and content and (b) for both "raw data" and "metadata". Only data types relevant for the respective domain are accepted and need to be provided in proper data formats. In order to guarantee that the information required to properly describe the data is present, they require adherence to domain-specific [metadata][kb-Metadata] standards, represented in the proper format and oftentimes require the use of controlled vocabularies and ontologies. And finally the mere technicalities of how to collect and submit the (meta)data varies greatly between repositories, ranging from the use of pure upload via file transfers (e.g. FTP), APIs, online web forms or specialized software requiring local installation. The large repository providers invest a lot to harmonize their formats and submission routines. Still, there is a long way to go and we are currently far away from the unified way where "If you know one, you know them all."

![Submitting to repositories](./../img/repositories_submission.png)

<!-- TODO: add section on 

- no fun 
- always different
- lots of metadata required

Need: unified way, single entry point, templates, SWATE -->

## How does DataPLANT support me in submitting to public data repositories?

The following table gives an overview about DataPLANT tools and services related to submitting data to repositories. Follow the link in the first column for details.

Name | Type | Tasks on metadata 
----------------|-----------|------------------ 
**[ARC][kb-AnnotatedResearchContext]**  <br> (Annotated Research Context) | Standard | **Structure:** <ul><li>Package data with metadata</li></ul>
**[Swate][gh-Swate]** <br> (Swate Workflow Annotation Tool for Excel) | Tool | **Collect and structure:** <ul><li>Annotate experimental and computational workflows with ISA metadata schema</li><li>Easy use of ontologies and controlled vocabularies</li><li>Metadata templates for versatile data types</li></ul>
**[ARC Commander][kb-ArcCommander-Manual]** | Tool | **Collect, structure and share:** <ul><li>Add bibliographical metadata to your ARC</li><li>ARC version control and sharing via DataPLANT's DataHUB</li><li>Automated metadata referencing and version control as your ARC grows</li></ul>
**[DataHUB][kb-DataHub]** | Service | **Share:** <ul><li>Federated system to share ARCs</li><li>Manage who can view or access your ARC</li></ul>
<!-- ~~Converter~~ | Tool under construction | **Curate:** <ul><li>Harmonize and migrate between metadata schema</li><li>Manage who can view or access your ARC</li></ul>
**Metadata registry** | Service | **Share:** <ul><li>Find ARC (meta)data</li></ul> -->

<!-- TODOs

- Replace SWATE link with KB link (once available)
- Replace arcCommander link with KB link (once available)
- Add KB-converter link (once available)
- Add KB-metadata_registry link (once available)
- reference KB-DataFormats and link to it 
-->


<!-- Knowledge base cross-references -->

[kb-DataPublications]: ../fundamentals/DataPublications.html "Data Publication"
[kb-FairDataPrinciples]: ../fundamentals/FairDataPrinciples.html "FAIR Data principles"
[kb-Metadata]: ../fundamentals/Metadata.html "Metadata"
[kb-PersistentIdentifiers]: ../fundamentals/PersistentIdentifiers.html "Persistent Identifiers"
[kb-AnnotatedResearchContext]: ../implementation/AnnotatedResearchContext.html "Annotated Research Context"
[kb-DataHub]: ../implementation/DataHub.html "DataPLANT DataHUB"

<!-- DataPLANT web links -->

[hp-Registration]: <https://register.nfdi4plants.org/> "DataPLANT Registration"
[hp-DataHUB]: <https://git.nfdi4plants.org> "DataHUB"
[kb-ArcSpecs]: ./../implementation/ARC-specification.html "ARC specification"
[gh-Swate]: <https://github.com/nfdi4plants/Swate/> "GitHub Swate"
[kb-ArcCommander-Manual]: ../ArcCommanderManual/index.html "ARC Commander Manual"


<!-- Reference web links -->

<!-- EBI-EMPIAR |   | imaging, microscopy | https://www.ebi.ac.uk/pdbe/emdb/empiar/
EBI-BioModels |   | models | https://www.ebi.ac.uk/biomodels/
EBI-BioSamples |   | meta - samples | https://www.ebi.ac.uk/biosamples/
EBI-BioStudies |   | meta - projects | https://www.ebi.ac.uk/biostudies/
Metabolomics Workbench |   | metabolome | https://www.metabolomicsworkbench.org/
NCBI-BioProject |   | meta - projects | https://www.ncbi.nlm.nih.gov/bioproject/
NCBI-BioSample |   | meta - samples | https://www.ncbi.nlm.nih.gov/biosample -->
