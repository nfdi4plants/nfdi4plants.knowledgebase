---
layout: docs
title: Reproduce and reuse
published: 2022-09-23
author: Dominik Brilhaus
author_orcid: https://orcid.org/0000-0001-9021-3197
author_github: brilator
add toc: true
add sidebar: _sidebars/mainSidebar.md
article_status: draft
---

> This article is work-in-progress.

Key aspects of the [FAIR principles][kb-FairDataPrinciples] and driver for the development of good [RDM][kb-ResearchDataManagement] are *reproducibility* and *re-usability* (FAI**R**) of scientific outputs as well as workflows leading to these outputs. Although here we focus more on data and the "computational side", we would like to emphasize some analogies between **<span style="color:#FFC000">Data</span>** science and **<span style="color:#B4CE82">PLANT</span>** science. Especially as some requirements in both environments can at least in part be met with similar approaches.

Consider our PhD Viola (see [metadata][kb-Metadata]). In the <span style="color:#B4CE82">wet lab</span>, she extracts RNA from her plant samples using a ready-to-use <span style="color:#B4CE82">commercial extraction kit </span> with all buffers and some required materials and tools included. Similarly in the <span style="color:#FFC000">dry lab</span> she would use an <span style="color:#FFC000">established, commercial office software</span> that is mostly contained/isolated, for small spread-sheet calculations. There is no commercial kit available to extract metabolites suitable with the special plant species Viola is interested in. So she uses a <span style="color:#B4CE82">"manual" protocol</span> established in her lab, for which she orders and prepares buffers and solutions herself and gathers the required devices, tubes and materials. Once she receives her RNA-Seq data, she sets up her own <span style="color:#FFC000">combinations of scripts (pipeline)</span> with varying inputs (reference data sets) and tool dependencies (code interpreters, packages, functions). In the end, Viola's complete workspace, be it the <span style="color:#B4CE82">laboratory environment</span> or her computer's <span style="color:#FFC000">operating system</span>, comes with its specific setup, tools, resources and limitations. And her research routine would likely differ if she were to pursue it in a different lab or using another computer.

For both types of workflows, there are (clearly) defined inputs and outputs, e.g. the <span style="color:#B4CE82">state of the</span> or the <span style="color:#FFC000">data format</span>. And Viola makes sure to document as much metadata as possible to make her workflows reproducible, including e.g. <span style="color:#B4CE82">version, batch or LOT numbers</span> of a kit or chemical and the <span style="color:#FFC000">versions of software and packages</span>. Also trouble-shooting with a colleague, company, data steward or seeking help in online forums, is always easier if you share information about your setting.


<!-- ## Re-inventing the wheel -->
## On the shoulders of giants


"In real life" <!-- (in the living world, in biology) --> you can take a sample once and only once. You can take replicate samples &ndash; technical (same plant different leaf) or biological (different plant) &ndash;, but in the end this is a new and different sample. In the wet-lab many more factors affect reproducibility, making it close to impossible to reproduce the exact same outcome (results, datasets). These include biological variance, hands-on factors (more hands, bigger variance), the environment (humidity, temperature), but also deviations in standard devices (growth chamber, centrifuge).
  - Still for other researchers to be able to re-use (i.e. build on) your findings, it will be helpful to document, metadata... 


1. re-use an outcome (data or sample)
2. reproduce an outcome (peer-review)
3. re-use a workflow (lab protocol or analysis)



- Reproducibility of computational analyses
  - a) you can "reproduce" that exact same output (run result) using the exact same inputs
  - b) you can apply the analysis onto other data to produce analogous outputs, that can be fed into other workflows (e.g. generate similar figures)

- How we usually (learn to) work with scripts
  - interactive, iterative
  - adapt script to specific needs
  - write (hard-code) inputs, outputs into script

- Problem
  - hand script to colleague
  - script not working due to missing (software) dependencies, changed (absolute) paths to environments / inputs / other dependencies (e.g. database resources)

- Example sources for scripts
  - workshop / summer school
  - colleagues
  - manual / tutorial to a tool (downloaded and adapted from GitHub)
  - copy/pasted from stack overflow

- Software dependencies
  - on multiple levels / in different shapes
  - operating system (Linux, Windows, Mac)
  - programming environment / interpreter (shell, python, r, julia, f#)
  - packages / libraries within the programming environment
  - version of one of above
  - (use of) virtual environments

- Towards solutions
  - containers
    - docker, singularity
  - workflow languages
    - CWL, snakemake, nextflow
    - environment-agnostic
    - formulate ins, outs, parameters
  - workflow management systems
    - galaxy





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

[ext-EBI-PRIDE]: https://www.ebi.ac.uk/pride/ "EBI PRIDE"
[ext-re3data]: https://www.re3data.org/ "re3data.org"
[ext-CreativeCommons]: https://creativecommons.org/ "Creative Commons"
[ext-DublinCore]: <https://www.dublincore.org/specifications/dublin-core/dcmi-terms/> "DublinCore"
[ext-DataCite]: <https://schema.datacite.org>  "DataCite"
[fairsharing.org]: https://fairsharing.org/search?fairsharingRegistry=Standard "Standards at fairsharing.org"
[doi]: https://www.doi.org/ "Digital Object Identifier"
[orcid]: https://www.orcid.org/ "ORCID"
