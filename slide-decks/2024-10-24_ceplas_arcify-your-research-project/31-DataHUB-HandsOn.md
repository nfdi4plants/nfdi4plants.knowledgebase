---
marp: true
theme: marp-theme_dataplant-ceplas-ccby
paginate: true
license: '[CC-BY 4.0](https://creativecommons.org/licenses/by/4.0/)'
title: DataHub Hands-On
author:
- name: Dominik Brilhaus
  github: https://github.com/brilator
  orcid: https://orcid.org/0000-0001-9021-3197
---

<style>

.datahubicon {
  position: absolute;
  top: 1%;
  left: 1%;
  width: 100px;
  background-color: #2D3E50;
  color: white;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  }

</style>


## DataHub Hands-On

---

<div class="datahubicon">DataHUB</div>

## Navigation Bar

![](./../../images/datahub-navbar.drawio.svg)

1. navigate directly to the [projects panel](./../../../../../../DataHUB-Manual/datahub-Manual/datahub-projectsPanel.html) via the icon in the top-left (1)
2. open the [hamburger Menu](#hamburger-menu) (2)
3. use the search field (3) to find ARCs, users and groups
4. open the [avatar Menu](#avatar-menu) (4)

---

<div class="datahubicon">DataHUB</div>

## Hamburger Menu

<div class="two-columns">

<div style="padding: 100px 0;">

1. From the hamburger menu (1) you can
2. navigate to the [projects](./../../../DataHUB-Manual/datahub-projectsPanel.html) (2)
3. or [groups](datahub-groupsPanel.html) (3) panels

</div>

<div>

![](./../../images/datahub-hamburgermenu.drawio.svg)

</div>
</div>

---

<div class="datahubicon">DataHUB</div>

## Avatar Menu

<div class="two-columns">

<div>

1. In the avatar menu (1) you can
2. find your profile name and user name (2), 
3. navigate to the [user settings](./../../../DataHUB-Manual/datahub-userSettings.html) (3)
4. or sign out (4) of the DataHUB.

</div>

<div>

![w:400](./../../images/datahub-avatarmenu.drawio.svg)

</div>
</div>

---

<div class="datahubicon">DataHUB</div>

## Projects Panel

![bg right w:600](./../../images/datahub-projectspanel.drawio.svg)

1. Choose a tab (1) to see only your ARCs, or explore other publicly available ARCs. 
2. The main panel (2) lists all ARCs
3. Here you can also see, the visibility level (3), and 
4. your permission or role (4) for the listed ARC. 

---

<div class="datahubicon">DataHUB</div>

## ARC Panel

The ARC Panel is the main working area for your ARC.

![w:1000](./../../images/datahub-arc-overview.drawio.svg)

---

<div class="datahubicon">DataHUB</div>

## ARC Panel &ndash; sidebar


<div class="two-columns">

<div>

1. access the project information (1), e.g. invite members to the ARC
2. follow the progress of your ARC repository (2),
3. organize tasks in issue lists and boards (3),
4. take notes in a wiki to your ARC (4),
5. adapt the [settings (5) of the ARC](datahub-ARCSettings.html).

</div>

<div>

![w:600](./../../images/datahub-arc-overview.drawio.svg)

</div>
</div>


---

<div class="datahubicon">DataHUB</div>

## ARC Panel &ndash; main panel

<div class="two-columns">

<div>

6. see the ARC's name and visibility level (6),
7. follow the ARC's commit history (7),
8. see files contained in your ARC just like on your computer (8),
9. add new files or directories (9), and
10. download or clone your ARC (10).

</div>

<div>

![w:600](./../../images/datahub-arc-overview.drawio.svg)

</div>
</div>

---

## Collaborate and share

![](../../nfdi4plants.knowledgebase/src/assets/images/start-here/collaboration-plantdatahub.svg)

---

<div class="datahubicon">DataHUB</div>

1. Click on **Project Information** in the left navigation panel

![fit w:1050](./../../images/datahub-members-seq2.png)

---

<div class="datahubicon">DataHUB</div>

2. Click on **Members**

![fit w:1050](./../../images/datahub-members-seq3.png)

---

<div class="datahubicon">DataHUB</div>

3. Click on **Invite members**

![w:950](./../../images/datahub-members-seq4.png)

---

<div class="datahubicon">DataHUB</div>

4. Search for potential collaborators

![w:650](./../../images/datahub-members-seq5.png)

---

<div class="datahubicon">DataHUB</div>

5. Select a role

![w:650](./../../images/datahub-members-seq6.png)

---

<div class="datahubicon">DataHUB</div>

## Choosing the proper role

When inviting new members to an ARC or group, you can choose between different levels.

<img src="./../../images/arc-sharing-permissionsroles.drawio.png" style="display: block; margin: auto" width=800px>

:bulb: By default you are **Owner** of an ARC you create or upload to the DataHUB.

---



## **Projects** and **Groups** are not the same

- "Project" = ARC
- "Groups" = Group of users

---

## Project = ARC

- In the DataHUB, ARCs are called "projects"; they are the same.
- An ARC can be shared with individual users (invited as "members") or a group.

---

## DataHUB Groups = Group of members (e.g. lab)

- A "Group" is a group of users with specific [permissions](#roles-and-permissions)
- A group can share ARCs
- A group can be invited to an ARC
- Groups can have subgroups

---

## Options to share an ARC via the DataHUB

<img src="./../../images/arc-sharing-options.drawio.png" style="display: block; margin: auto" width=700px>

---

## Namespaces

- Every user has a personal namespace, where they can upload or create new ARCs
- Every group and subgroup has its own namespace

<div class="table-container" style="font-size: 25px">

Type | URL | Namespace | Name
--- | --- | --- | --- 
A **personal** ARC | https://git.nfdi4plants.org/brilator/Facultative-CAM-in-Talinum | `brilator` | Dominik Brilhaus
An **group**-shared ARC | https://git.nfdi4plants.org/hhu-plant-biochemistry/Samuilov-2018-BOU-PSP | `hhu-plant-biochemistry` | HHU Plant Biochemistry

</div>

:bulb: **Personal** is not the same as **private**

---

## Visibility

The visibility of ARCs and groups can be managed individually for each ARC or group
  
<img src="./../../images/arc-sharing-visibility.drawio.png" style="display: block; margin: auto" width=800px>

:bulb: By default every ARC and every group is set to **private**.

---

## ARC DataHUB members // ARC Investigation contacts <!-- fit -->

![w:1100](./../../images/arc-sharing-membersvscontacts.drawio.png)

:bulb: Investigation contacts are not automatically invited as members to the ARC.


---

<div class="datahubicon">DataHUB</div>


## Version control

Check out the **commit history** of your ARC via Repository (2) or directly via commits (7)

![w:1000](./../../images/datahub-arc-overview.drawio.svg)

---

<div class="datahubicon">DataHUB</div>

## Collaboration Workflows

![](../../nfdi4plants.knowledgebase/src/assets/images/start-here/collaboration-git-tobereplaced.svg)

---

<div class="datahubicon">DataHUB</div>

## Project management

![w:800](./../../images/tpj16474-fig-0007-m.jpg)

<span class="footer-reference"> Weil, H.L., Schneider, K., et al. (2023), PLANTdataHUB: a collaborative platform for continuous FAIR data sharing in plant research. Plant J. https://doi.org/10.1111/tpj.16474 </span>

---

<div class="datahubicon">DataHUB</div>


## Project Management

Add issues to your ARC (3)

![w:1000](./../../images/datahub-arc-overview.drawio.svg)

---

<div class="datahubicon">DataHUB</div>

## ARCs come with their own wiki space

<div class="two-columns">

<div style="font-size: 27px">

- directly associated to your ARC
- same access rights as your ARC
- share meeting minutes or ideas with collaboration partners
- keep ARC clean of files that are not considered "research data"

</div>

<div>

![w:600](./../../images/datahub-wiki.png)

</div>
</div>

---


# Moving from paper to FAIR data publication

![w:900](../../nfdi4plants.knowledgebase/src/assets/images/start-here/fair-data-publication.svg)


---

# Publish your ARC, get a DOI

![w:800px](./../../images/arc-seamlesspublication.svg)

---

# Validate & publish


![h:400](././../../images/tpj16474-fig-0008-m.jpg)

<span class="footer-reference"> Weil, H.L., Schneider, K., et al. (2023), PLANTdataHUB: a collaborative platform for continuous FAIR data sharing in plant research. Plant J. https://doi.org/10.1111/tpj.16474 </span>

---

<div class="datahubicon">DataHUB</div>

## Validation towards publication

![w:900px](../../nfdi4plants.knowledgebase/src/assets/images/start-here/publication-validation.svg)

---

## Receive a DOI

![w:800px](https://www.nfdi4plants.org/nfdi4plants.knowledgebase/docs/img/data-publication/doi-accession.png)

