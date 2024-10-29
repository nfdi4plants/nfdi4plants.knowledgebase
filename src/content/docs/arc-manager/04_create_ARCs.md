---
layout: docs
title: Create new ARCs
author:
 - name: Hamed Jalali
   github: https://github.com/hamedjalali1982
   orcid: https://orcid.org/0000-0002-1190-5652
 - name: Ursula Eberhardt
   github: https://github.com/UrsulaE
   orcid: https://orcid.org/0000-0003-1221-7074
add toc: false
add sidebar: _sidebars/mainSidebar.md
status: published
date: 2024-08-27
---

To create a new ARC in ARCmanager, follow the steps below:

1. On the left side of the homepage, click on the `New ARC` button:

    <p float="center">
        <img src="../img/ARCmanager_createARCs_New_ARC.png" width="300" align="center" style="border: 1px solid  black;"/>
    </p>

2. In the new page, there are some fields that should be filled out:

     <p float="center">
        <img src="../img/ARCmanager_createARCs_ARC_Create.png" width="400" align="center" style="border: 1px solid  black;" />
    </p>

- `Name of the ARC`: A name for your project in the DataHUB
- `Description of the ARC`: A short description about the project you are creating  
- `Name of the ARC`: An identifier for your ARC (without space between the characters)

---

:bulb: Note:

By default ARCs are created under your user name, i.e. in your namespace. If you wish to create an ARC in a group (or subgroup) tick the box `Group?` and select the group name from the drop down menu that is shown after ticking the box. 

Be aware that you need at least the [maintainer role](https://docs.gitlab.com/ee/user/permissions.html#roles) in a (sub)group to be able to create new ARCs with all necessary files in the groups namespace. 

---


3. After submitting the form, you can see the new ARC when selecting `Your ARCs` in the List ARCs window.

    <p float="center">
        <img src="../img/ARCmanager_createARCs_Created_ARC.png" width="400" align="center" style="border: 1px solid  black;" />
    </p>

    Click on the created project to explore it.

4. The created ARC contains four folders: *studies*, *assays* , *workflows*, and *runs*.  To get familiar with these folders, visit the [Annotated Research Context knowledge base article](./../implementation/AnnotatedResearchContext.html).

    <p float="center">
        <img src="../img/ARCmanager_createARCs_ARC_explore.png" width="500" align="center"  style="border: 1px solid  black;"/>
    </p>

5.  To add/remove/edit members in the project, use the `MEMBERS` tab: 

    <p float="center">
        <img src="../img/ARCmanager_createARCs_members.png" width="400" align="center" style="border: 1px solid  black;"/>
    </p>

    For instance, new users and their roles can be added in `Add User` option:

    <p float="center">
        <img src="../img/ARCmanager_createARCs_add_user.png" width="300" align="center" style="border: 1px solid  black;"/>
    </p>

6. By clicking on the `OPEN` button at the top of the page, you can open the new ARC directly in the respective DataHUB:

    <p float="center">
        <img src="../img/ARCmanager_createARCs_gitlab.png" width="600" align="center" style="border: 1px solid  black;"/>
    </p>
