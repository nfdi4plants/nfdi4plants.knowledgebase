---
layout: docs
title: DataPLANT Setup
published: 2022-09-23
author: Dominik Brilhaus
author_orcid: https://orcid.org/0000-0001-9021-3197
author_github: brilator
add toc: true
add sidebar: _sidebars/mainSidebar.md
add support: false
titlepage: true
titlepage-color: "2D3E50"
titlepage-text-color: "4FB3D9"
titlepage-rule-color: "4FB3D9"
titlepage-rule-height: 2
titlepage-background: ../_ignored/pandoc_tests/sources/dpbackground.pdf
---

We are very happy that you would like to employ or contribute to the DataPLANT tools and services.
The following is supposed to give you an overview of required or recommended software to install and accounts to sign up to get you started quickly. For more details, please explore the DataPLANT Knowledge Base and linked resources below.

## All users

- In order to use [Swate][kb-Swate] you need to have Microsoft Excel locally installed or access to [Microsoft Excel online][ext-excel-online].

- Find the **command-line interface (CLI)** on your system.
  - On Windows: Enter `powershell` into the explorer path.
  - On MacOS: Search `terminal` via spotlight or navigate to `Applications` -> `Utilities` -> `Terminal`
  <!-- - On Linux:  -->

  > Note:
  >
  > - We mostly avoid asking you to use the CLI. However, this is required for some of the installation steps below. Most modern operating systems come with a pre-installed CLI. If none of the above works, please get in touch.

- Please install [git][ext-git] and [git-lfs][ext-git-lfs] on your system.

  > Note:
  >
  > - For some operating systems *git-lfs* may already be available as part of the *git* installation  
  > - On MacOS we recommend git installation via `homebrew` following the [git website's][ext-git] instruction. This may require installation of `homebrew` as instructed there.

- Please install [ARC Commander][gh-ArcCommander] on your system.
- Please install [Swate][gh-Swate] on your system.
- Please [sign up][hp-Registration] with DataPLANT to use the [DataHUB][hp-DataHUB].

<!-- ### Galaxy access
- Your DataPLANT account grants you access to a plant science-designated area of [Galaxy][ext-galaxy].  -->

## Data stewards and contributors

### GitHub

Most DataPLANT tools and services are collaboratively and transparently developed at [GitHub][gh-DataPlant]. If you would like to contribute, [please sign up with GitHub][ext-github-join] and use common git routines, such as opening issues or fork-edit-pull-request a repository.

### Microsoft Teams

Within DataPLANT we communicate via Microsoft Teams. If you would like to join DataPLANT as a data steward for your community, please contact us via <a href="javascript:location='mailto:\u0069\u006e\u0066\u006f\u0040\u006e\u0066\u0064\u0069\u0034\u0070\u006c\u0061\u006e\u0074\u0073\u002e\u006f\u0072\u0067';void 0">email</a>.

### Other recommended software

- [GitHub Desktop][ext-github-desktop] is a convenient software to avoid using git via the CLI.
- [Visual Studio Code][ext-VSCode] is an integrated development environment (IDE) with git integration and convenient extensions.

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
[kb-ArcCommander]: ../implementation/ArcCommander.html "DataPLANT ARC Commander"
[kb-Swate]: ../implementation/Swate.html "DataPLANT Swate"

<!-- kb-Tutorials -->
[kb-QuickStart_arc]: ../tutorials/QuickStart_arc.html "Quickstart ARC"
[kb-QuickStart_swate]: ../tutorials/QuickStart_swate.html "Quickstart Swate"
[kb-QuickStart_arcCommander]: ../tutorials/QuickStart_arcCommander.html "QuickStart ARC Commander"

<!-- Links to DataPLANT Homepage (hp-) -->

[hp-Registration]: <https://register.nfdi4plants.org/registration> "DataPLANT Registration"
[hp-DataHUB]: <https://git.nfdi4plants.org> "DataPLANT DataHUB"
[hp-HelpDesk]: <https://helpdesk.nfdi4plants.org> "DataPLANT Help Desk"

<!-- Links to DataPLANT GitHub (gh-) -->

[gh-DataPlant]: <https://github.com/nfdi4plants/> "GitHub DataPLANT"
[gh-ArcSpecs]: <https://github.com/nfdi4plants/ARC-specification/> "ARC specifications"
[gh-ArcCommander]: <https://github.com/nfdi4plants/arcCommander/> "ArcCommander"
[gh-ArcCommander-Wiki]: <https://github.com/nfdi4plants/arcCommander/wiki> "ArcCommander Wiki"
[gh-Swate]: <https://github.com/nfdi4plants/Swate/> "GitHub Swate"

<!-- Links to external (ext-) sources -->

[ext-github-join]: <https://github.com/join/> "Join GitHub"
[ext-github-desktop]: <https://desktop.github.com/> "GitHub Desktop"
[ext-git]: <https://git-scm.com/download/> "Git"
[ext-git-lfs]: <https://git-lfs.github.com/> "Git-LFS"
[ext-excel-online]: <https://www.microsoft.com/en-us/microsoft-365/excel> "Excel online"
[ext-VSCode]: https://code.visualstudio.com/ "Visual Studio Code"

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
