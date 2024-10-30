---
layout: slides
title: tutorial_019_datahub_collaboration
author: 
- name: Cristina Martins Rodrigues
  orcid: https://orcid.org/0000-0002-4849-1537
  github: CMR248
images_used:
- datahub_members_seq2.png
- datahub_members_seq3.png
- datahub_members_seq4.png
- datahub_members_seq5.png
- datahub_members_seq6.png
- ARC_Sharing_img1.png
license: '[CC-BY 4.0](https://creativecommons.org/licenses/by/4.0/)'
description: Step-by-step instructions for inviting additional collaborators to an
  ARC within the DataHUB.
keywords:
- Sharing
- Collaboration
- DataHUBs
- Access Management
date: 2023-02-16
status: ready
learning outcomes:
- is able to independently add further members to an ARC
requirements:
- tutorial_009_datahub_registration.md
- tutorial_020_datahub_PAT.md
- lesson_026_DataHUB_DataPLANT.md
- lesson_030_BigPicture_ARC_DataPLANT.md
required resources:
- computer
- internet connection
teaching mode: hands-on
duration_minutes: 3
links and references:
- https://nfdi4plants.org/nfdi4plants.knowledgebase/docs/guides/arcCommander_QuickStart.html#invite-collaborators
- https://auth.nfdi4plants.org/realms/dataplant/login-actions/registration?client_id=account&tab_id=4bQkU161waI
---

## Invite collaborators

* Unless changed, your ARC is set to private by default. 
* To collaborate, you can invite lab colleagues or project partners to your ARC by following the steps on the subsequent slides. 
* To get started [sign in](https://auth.nfdi4plants.org/realms/dataplant/login-actions/registration?client_id=account&tab_id=4bQkU161waI) to the DataHUB and open the ARC you want to share.

---

1. Click on **Project Information** in the left navigation panel

![fit w:1050](./../../../img/datahub_members_seq2.png)

---

2. Click on **Members**

![fit w:1050](./../../../img/datahub_members_seq3.png)

---

3. Click on **Invite members**

![fit w:1050](./../../../img/datahub_members_seq4.png)

---

4. Search for potential collaborators

![fit w:1050](./../../../img/datahub_members_seq5.png)

---

5. Select a role 

![fit w:1050](./../../../img/datahub_members_seq6.png)

<!-- Source to slide(s) -->
<!-- ../../bricks/datahub_invite-collaborators.md -->


---

## Choosing the proper role

<style scoped> section{font-size: 22px;}</style>

<u>Guests</u>
Have the least rights. They will not be able to see the content of your ARC (only the wiki page).

<u>Reporters</u>
Have **read access** to your ARC. This is recommended for people you ask for consultancy.

<u>Developers</u>
The choice for most people you want to invite to your ARC. Developers have **read and write access**, but cannot maintain the project on the DataHUB, e.g. inviting others.

<u>Maintainers</u> 
Gives the person the same rights as you have (except of removing you from your own project). This is recommended for inviting PIs or group leaders allowing them to add their group members for data upload or analysis to the project as well.

*A detailed list of all permissions for the individual roles can be found [here](https://docs.gitlab.com/ee/user/permissions.html)*

<!-- Source to slide(s) -->
<!-- ../../bricks/datahub_choose-collaborator-role.md -->


---

## <div align="center">Congratulations!</div>
<div align="center">You have just shared your ARC with a collaborator.</div>

<style scoped>

section p img {
width: 1000px;
height: 300px;
object-fit: cover;
object-position: 100% 45%;
/* display: block; */;
}
</style>

![](./../../../img/ARC_Sharing_img1.png)

<!-- Source to slide(s) -->
<!-- ../../bricks/datahub_congrats-for-sharing.md -->
