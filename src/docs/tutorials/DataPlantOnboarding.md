---
layout: docs
title: DataPLANT Onboarding
published: 2022-07-12
author: Dominik Brilhaus
author_orcid: https://orcid.org/0000-0001-9021-3197
author_github: brilator
add toc: true
add sidebar: _sidebars/mainSidebar.md
article_status: draft
---

We are very happy that you would like to employ or contribute to the DataPLANT tools and services.
The following is supposed to give you an overview of required or recommended software to install and accounts to sign up to get you started quickly.
For more details, please explore the DataPLANT Knowledge Base and linked resources below.

## General Setup (all users)

### Non-DataPLANT tools

- Find the **command-line interface (CLI)** on your system.
  - Note: We mostly avoid asking you to use the **CLI**. However, this is required for some of the installation steps below.
  - Note: Most modern operating systems come with a pre-installed **CLI**. If none of the below works, please get in touch.  
  - On Windows: Enter `powershell` into the explorer path.
  - On MacOS: Search `terminal` via spotlight or navigate to `Applications` -> `Utilities` -> `Terminal`
  <!-- - On Linux:  -->
- Please install [git][ext-git] and [git-lfs][ext-git-lfs] on your system.
  - Note: for some operating systems *git-lfs* may already be available as part of the *git* installation
  - Note: On MacOS we recommend git installation via homebrew following the [git website's][ext-git] instruction.
- In order to use Swate you need to have a local Microsoft Excel installation or access to [Microsoft Excel online][ext-excel-online].

### DataPLANT tools and services

- Please install [arcCommander][gh-ArcCommander] on your system.
- Please install [Swate][gh-Swate] on your system.
- In order to use the [DataHUB][hp-DataHUB], please [sign up][hp-Registration] with DataPLANT.

<!-- ### Galaxy access
- Your DataPLANT account grants you access to a plant science-designated are of [Galaxy][ext-galaxy].  -->

## Other recommended software

- [GitHub Desktop][ext-github-desktop] is a convenient software to avoid using git via the CLI.
- [Visual Studio Code][ext-VSCode] is an integrated development environment (IDE) with git integration and convenient extensions.

## Behind the scenes (data stewards and contributors)

### GitHub: Tool & Service Development

Most DataPLANT tools and services are collaboratively and transparently developed at [GitHub][gh-DataPlant]. If you would like to contribute, [please sign up with GitHub][ext-github-join] and use common git routines, such as opening issues or fork-edit-pull-request a repository.

### Microsoft Teams: Communication & Project Management

Within DataPLANT we communicate via Microsoft Teams. If you would like to join DataPLANT as a data steward, please contact us via <a href="javascript:location='mailto:\u0069\u006e\u0066\u006f\u0040\u006e\u0066\u0064\u0069\u0034\u0070\u006c\u0061\u006e\u0074\u0073\u002e\u006f\u0072\u0067';void 0">email</a>.

<!-- Links to DataPLANT knowledge base (kb-) -->

[kb-AnnotatedResearchContext]: ../implementation/AnnotatedResearchContext.html "Annotated Research Context"
[kb-DataHub]: ../implementation/DataHub.html "DataPLANT DataHUB"
[kb-DataManagementPlan]: ../fundamentals/DataManagementPlan.html "Data Management Plan"
[kb-DataPublications]: ../fundamentals/DataPublications.html "Data Publication"
[kb-DataSharing]: ../fundamentals/DataSharing.html "Data Sharing"
[kb-FairDataPrinciples]: ../fundamentals/FairDataPrinciples.html "FAIR Data principles"
[kb-Metadata]: ../fundamentals/Metadata.html "Metadata"
[kb-PersistentIdentifiers]: ../fundamentals/PersistentIdentifiers.html "Persistent Identifiers"
[kb-PublicDataRepositories]: ../fundamentals/PublicDataRepositories.html "Repositories"
[kb-QuickStart_arc]: ../tutorials/QuickStart_arc.html "Quickstart ARC"
[kb-ResearchDataManagement]: ../fundamentals/ResearchDataManagement.html "Research Data Management"
[kb-VersionControlGit]: ../fundamentals/VersionControlGit.html "Version Control and Git"

<!-- Links to DataPLANT Homepage (hp-) -->

[hp-Registration]: <https://register.nfdi4plants.org/registration> "DataPLANT Registration"
[hp-DataHUB]: <https://git.nfdi4plants.org> "DataPLANT DataHUB"
[hp-HelpDesk]: <https://helpdesk.nfdi4plants.org> "DataPLANT Help Desk"

<!-- Links to DataPLANT GitHub (gh-) -->

[gh-DataPlant]: <https://github.com/nfdi4plants/> "GitHub DataPLANT"
[gh-ArcSpecs]: <https://github.com/nfdi4plants/ARC-specification/> "ARC specifications"
[gh-ArcCommander]: <https://github.com/nfdi4plants/arcCommander/wiki> "ArcCommander Wiki"
[gh-Swate]: <https://github.com/nfdi4plants/Swate/wiki> "Swate Wiki"

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