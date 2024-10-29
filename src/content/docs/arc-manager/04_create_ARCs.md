---
title: Create new ARCs
authors:
 - hamed-jalali
 - ursula-eberhardt
lastUpdated: 2024-08-27
---

To create a new ARC in ARCmanager, follow the steps below:

1. On the left side of the homepage, click on the `New ARC` button:


![](@images/arc-manager/arc-manager-createarcs-new-arc.png)

2. In the new page, there are some fields that should be filled out:

![](@images/arc-manager/arc-manager-createarcs-arc-create.png)

- `Name of the ARC`: A name for your project in the DataHUB
- `Description of the ARC`: A short description about the project you are creating  
- `Name of the ARC`: An identifier for your ARC (without space between the characters)

---

:bulb: Note:

By default ARCs are created under your user name, i.e. in your namespace. If you wish to create an ARC in a group (or subgroup) tick the box `Group?` and select the group name from the drop down menu that is shown after ticking the box. 

Be aware that you need at least the [maintainer role](https://docs.gitlab.com/ee/user/permissions.html#roles) in a (sub)group to be able to create new ARCs with all necessary files in the groups namespace. 

---


3. After submitting the form, you can see the new ARC when selecting `Your ARCs` in the List ARCs window.

![](@images/arc-manager/arc-manager-createarcs-created-arc.png)


    Click on the created project to explore it.

4. The created ARC contains four folders: *studies*, *assays* , *workflows*, and *runs*.  To get familiar with these folders, visit the [Annotated Research Context knowledge base article](./../implementation/AnnotatedResearchContext.html).


![](@images/arc-manager/arc-manager-createarcs-arc-explore.png)

5.  To add/remove/edit members in the project, use the `MEMBERS` tab: 

![](@images/arc-manager/arc-manager-createarcs-members.png)


    For instance, new users and their roles can be added in `Add User` option:

![](@images/arc-manager/arc-manager-createarcs-add-user.png)

6. By clicking on the `OPEN` button at the top of the page, you can open the new ARC directly in the respective DataHUB:

![](@images/arc-manager/arc-manager-createarcs-gitlab.png)
