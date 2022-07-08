# How-to "knowledge base"

Your contribution to the DataPLANT knowledge base is highly appreciated.
This *How-To* is intended to guide you on contributing via on of three general ways:

1. Raising an issue via Helpdesk or GitHub
    - Recommend missing topics
    - Minor inconsistencies
    - Errors in training materials or tutorials
2. Suggesting changes via GitHub fork and pull request
    - Review and adapt parts of existing articles or tutorials
3. Authoring new content
    - Add new content to the knowledge base

- [Introduction](#introduction)
  - [Authoring content](#authoring-content)
  - [Sidebar](#sidebar)
- [Do not!](#do-not)
- [(Live) Testing](#live-testing)
- [References](#references)
- [Structure and format](#structure-and-format)
- [Images](#images)
- [File naming](#file-naming)
- [Content](#content)
  - [Addressing readers](#addressing-readers)
  - [Language](#language)
- [Link collection](#link-collection)


## Introduction

The DataPLANT knowledge base is built on [nfdi-web-components](https://nfdi4plants.github.io/web-components-docs/) and will fit all **markdown** content into this "framework".
For a general introduction to writing markdown, see: [Markdown tutorial](tutorials/markdown.md) and references therein.


### Authoring content

To add more documentation, add a markdown file to `/src/docs`. The file MUST start with a metadata block:

<!--used yml here as code language for nice color syntax-->
```yml
---
layout: docs
title: Metadata
published: 2022-05-09
author: Dominik Brilhaus
author_orcid: https://orcid.org/0000-0001-9021-3197
author_github: brilator
add toc: true
add sidebar: sidebars\mainSidebar.md
article_status: published
todo:
    - update to include changes in latest tool version
---
```

- All keys (`layout`, `author`, etc.) are **not** case sensitive.
- All fields can be at ANY position.
- MUST start and end with `---` .
- MUST contain `layout: docs`.
  - This triggers fornax parsing to html.
- MUST contain `title: xxxx`.
  - Will be added as "# xxxx" to the html.
  - Will be used to name the generated webpage.
- MUST contain `published: yyyy-MM-dd`.
- MAY contain `author: xxxx`.
- MAY contain `author_github: xxxx`.
  - This helps authoring and reviewing content. 
- MAY contain `add toc: true`.
  - Will add automated table of contents from all found headers in content.
- MAY contain `add sidebar: realtive\path\to\sidebar.md` to add the sidebar element to the page.
- MAY contain **any** other metadata. The information will be read but will not affect the generated html.

### Sidebar

Sidebar files MAY be in ANY **subdirectory** of `/src/docs`. Sidebar markdown files must start with a metadata block:

```yml
---
published: 2022-05-09
article_status: published
---
```

- MAY contain **any** other metadata. The information will be read but will not affect the generated html.

To add a sidebar element to the page, use the codeblock syntax:

<pre><code>```Data Management Plan
# Data Management Plan:/docs/DataManagementPlan.html
# DataPLANT's Data Management Plan Generator:/docs/DataManagementPlan.html#dataplants-data-management-plan-generator
```</code></pre>

- All text after the opening "```" will be parsed to the element title.
- Inner text MUST only contain heading lines.
  - Only headers up to `###` are parsed. All header with more depth are parsed to `###`.
- Tries to match active browser url to referenced ``href`` of any element to set active page.


## Do not!

- Store a markdown (.md, .markdown) file in the /docs folder, that is not supposed to be parsed. Fornax will look for the yaml header and break if it does not exist.


## (Live) Testing

- see 

> Note: 



## References

- Literature / information references: additional bibliography block below
- External links (tools, sites, platforms): as hyper-link
- Knowledge base cross-references: relative path to *.md document, **BUT** replace the `.md` file extension with `.html`, as the markdown files are parsed to html.

## Structure and format

- Max. 3 headline levels (## & ###)

## Images

- simple markdown logic (not HTML): `![name_of_image](path_to_image.png)`

## File naming

- no special characters
- preferably all lowercase to ease cross-references


## Content

### Addressing readers

- direct address ("you can", not "user can" or "one can...")

### Language

British English (?)


## Link collection

> Note: This is just a link collection for recurrent use in KB articles
> Nothing automatised. Just copy/paste.

<!-- Links to DataPLANT knowledge base (kb-) -->

[kb-AnnotatedResearchContext]: ./AnnotatedResearchContext.html "Annotated Research Context"
[kb-DataHub]: ./DataHub.html "DataPLANT DataHUB"
[kb-DataManagementPlan]: ./DataManagementPlan.html "Data Management Plan"
[kb-DataPublications]: ./DataPublications.html "Data Publication"
[kb-DataSharing]: ./DataSharing.html "Data Sharing"
[kb-FairDataPrinciples]: ./FairDataPrinciples.html "FAIR Data principles"
[kb-Metadata]: ./Metadata.html "Metadata"
[kb-PersistentIdentifiers]: ./PersistentIdentifiers.html "Persistent Identifiers"
[kb-PublicDataRepositories]: ./PublicDataRepositories.html "Repositories"
[kb-QuickStart_arc]: ./QuickStart_arc.html "Quickstart ARC"
[kb-ResearchDataManagement]: ./ResearchDataManagement.html "Research Data Management"
[kb-VersionControlGit]: ./VersionControlGit.html "Git"

<!-- Links to DataPLANT Homepage (hp-) -->

[hp-Registration]: <https://register.nfdi4plants.org/registration> "DataPLANT Registration"
[hp-DataHUB]: <https://git.nfdi4plants.org> "DataPLANT DataHUB"
[hp-HelpDesk]: <https://helpdesk.nfdi4plants.org> "DataPLANT Help Desk"

<!-- Links to DataPLANT GitHub (gh-) -->

[gh-ArcSpecs]: <https://github.com/nfdi4plants/ARC-specification/> "ARC specifications"
[gh-ArcCommander]: <https://github.com/nfdi4plants/arcCommander/wiki> "ArcCommander Wiki"
[gh-Swate]: <https://github.com/nfdi4plants/Swate/wiki> "Swate Wiki"

<!-- Links to external (ext-) sources -->

[ext-galaxy]: <https://plants.usegalaxy.eu/> "Galaxy Plants"
[ext-omero]: <https://www.openmicroscopy.org/omero/> "Omero"
[ext-zenodo]: <https://zenodo.org/> "Zenodo"
[ext-invenio]: <https://inveniosoftware.org/products/rdm/> "Invenio"
[ext-DataJournals]: https://www.researchdata.uni-jena.de/en/information/data-publication "RDM Jena Data Journals"

[ext-EBI-PRIDE]: https://www.ebi.ac.uk/pride/ "EBI PRIDE"
[ext-re3data]: https://www.re3data.org/ "re3data.org"
[ext-CreativeCommons]: https://creativecommons.org/ "Creative Commons"
[ext-DublinCore]: <https://www.dublincore.org/specifications/dublin-core/dcmi-terms/> "DublinCore"
[ext-DataCite]: <https://schema.datacite.org>  "DataCite"
[fairsharing.org]: https://fairsharing.org/search?fairsharingRegistry=Standard "Standards at fairsharing.org"
[doi]: https://www.doi.org/ "Digital Object Identifier"
[orcid]: https://www.orcid.org/ "ORCID"