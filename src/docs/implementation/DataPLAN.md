---
layout: docs
title: DataPLAN
published: 2022-12-06
author: Xiaoran Zhou
author_orcid: https://orcid.org/0000-0002-5622-3348
author_github: xiaoranzhou
add toc: true
add sidebar: _sidebars/mainSidebar.md
article_status: published
todo:
---

[DataPLAN][hp-DataPLAN] is a [Data Management Plan][kb-DataManagementPlan] generator which can help you create a plan for the [research data management][kb-ResearchDataManagement]. By using DataPLAN, standardized DMPs for Horizon Europ and Deutsche Forschungsgemeinschaft (DFG) can be generated in five minutes. The fast generation speed on account of the answers-integrated template design and single-page web application technology. 


## Why another DMP tool is needed?

From funding agencies to research institutes, DMPs are required more and more often. The generation, following up and update of a DMP has increase the cost and workload of researchers. Although many tools have been developed to help creating DMPs, most of the tools does not reduce a significant amount workload. As DataPLANT use standardized tool, protocols and formats to manage data, the planing of the data management can also be standardized. Therefore, the tool DataPLAN does not only help people answer the DMPs, but also prepared standardized answers for the users. So that the user can just select the answers, instead of write the answers. As the user only need to "select from prepared answers" instead of "writing from scratch", a lot of workload was saved. In addition, the DataPLAN offers a practical guide, which is a detailed and comprehensive document for the project team and data stewards to follow.   

## Simple layout

<figure><img src="../img/dataplan_layout.png" alt="The layout of DataPLAN" style="width:100%"><figcaption style="margin: auto;">Figure 1: Layout of DataPLAN. Red box is the live preview of the generated document; blue box is the single-page questionnaire</figcaption></figure>

The DataPLAN has a two-column layout (Fig. 1). In the left-hand-side column (the red box), there is a live preview of the generated document; in the right-hand-side column (the blue box), there is a questionnaire. While answering all the questions in the right-hand-side column, the DMP in the left-hand-side column will update lively based on the answers given in the questionnaire. This live update gives users a unique What You See Is What You Get (WYSIWYG) experience.

## The answers-integrated templates

The standardized answers of the DMP questions are integrated in the templates. The final exported DMP document will only include the answers that is selected by the users. For example, in Fig. 2, all checkbox options in Question 2 are selected, therefore all the integrated answers are showed up in the final DMP document (in green text). In Fig. 3, some checkbox options in Question 2 are deselected, therefore the unselected answers are not showed up in the final DMP document. The answers prepared in the DataPLAN tool is deeply coordinated with other DataPLANT tools such as  [ArcCommander][kb-ArcCommander] and [Swate][kb-Swate].  


<figure><img src="../img/dataplan_before_deselect.png" alt="Before deselect checkboxes" style="width:100%"><figcaption style="margin: auto;">Figure 2: If all the checkboxes are selected in quesiton 2, all counterparts in the DMP text will be kept.</figcaption></figure>  


<figure><img src="../img/dataplan_after_deselect.png" alt="After deselect checkboxes" style="width:100%"><figcaption style="margin: auto;">Figure 3: If some of the checkboxes are deselected in quesiton 2, the respective counterparts in the DMP text will be removed.</figcaption></figure>  

For specific information which is unique between different project, such as "project name" and "project aim". The users can can type text in the respective input fields, then the counter parts in the DMP will also be updated lively.   

## The templates can be customized
All the templates prepared and provided by the DataPLAN are customizable. DataPLAN has a user-defined template section (Fig. 4) where the template are editable and can be directly loaded into the DataPLAN.   

<figure><img src="../img/dataplan_user_defined.png" alt="User-defined template can also be directly used" style="width:100%"><figcaption style="margin: auto;">Figure 4: All the templates prepared and provided by the DataPLAN are Customizable. The templates can be reused to create user-defined templates.</figcaption></figure>

## Offline usable and absolute secure
DataPLAN can be used offline conveniently. Unlike other DMP tools, which is complicated to run in offline situations, the DataPLAN can be saved as html file (by "ctrl + s" as showed in Fig. 5) and then be further used. The user can also disconnect the internet after fully loaded the DataPLAN website. The server-less design of DataPLAN make it absolute secure, because it prevent the loss and exposure of data during either internet data transfer or online storage.  

<figure><img src="../img/dataplan_save.png" alt=" press Ctrl + S to save the file in html and then use it later on" style="width:100%"><figcaption style="margin: auto;">Figure 5: press Ctrl + S to save the file in html and then use it later on.</figcaption></figure>

## No registration and free to share
No registration is needed to use all the functions of DataPLAN. The user input is saved automatically in the local storage. To share the answers or synchronize between different computers, the answers can be first exported and then imported in the DataPLAN tools. 

Just try the [DataPLAN][hp-DataPLAN] and share your feedback or feature request, the developers of DataPLAN will be happy to know your need and further improve the DataPLAN tool. 

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
[kb-ArcCommander]: ../implementation/ArcCommander.html "ARC Commander"

[kb-Swate]: ../implementation/Swate.html "DataPLANT Swate"
<!-- kb-Tutorials -->
[kb-QuickStart_arc]: ../tutorials/QuickStart_arc.html "Quickstart ARC"


<!-- Links to DataPLANT Homepage (hp-) -->

[hp-Registration]: <https://register.nfdi4plants.org/registration> "DataPLANT Registration"
[hp-DataHUB]: <https://git.nfdi4plants.org> "DataPLANT DataHUB"
[hp-HelpDesk]: <https://helpdesk.nfdi4plants.org> "DataPLANT Help Desk"
[hp-DataPLAN]: <https://plan.nfdi4plants.org> "DataPLANT data management plan tool"
<!-- Links to DataPLANT GitHub (gh-) -->

[gh-DataPlant]: <https://github.com/nfdi4plants/ARC-specification/> "GitHub DataPLANT"
[gh-ArcSpecs]: <https://github.com/nfdi4plants/ARC-specification/> "ARC specifications"
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
