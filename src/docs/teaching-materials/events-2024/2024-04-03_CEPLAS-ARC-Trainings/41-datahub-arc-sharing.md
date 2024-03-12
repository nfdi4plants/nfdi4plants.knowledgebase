---
layout: docs
title: Sharing ARCs via the DataHUB
marp: true
date: 2024-03-12
author:
- name: Dominik Brilhaus
  orcid: https://orcid.org/0000-0001-9021-3197
  github: brilator
add toc: true
add support: true
add sidebar: _sidebars/mainSidebar.md
---

# Sharing ARCs via the DataHUB

---

# DataHUB concepts and terminology

---

# **Projects** and **Groups** are not the same

- Project = ARC
- Groups = Group of users

---

## Project = ARC

- In the DataHUB, ARCs are called "projects"; they are the same.
- An ARC can be shared with individual users (invited as "members") or a group.

---

### DataHUB Groups

- A "Group" is a group of users (then "members" of that group) with specific [permissions](#roles-and-permissions).
- A group (e.g. your lab or consortium) can share ARCs.

- Groups help you communicate with all group members and manage permissions for the ARCs shared in that group.
- Depending on their assigned roles, members of the group can view, edit, delete, and / or maintain the ARCs of that group.
- If someone has access to a group, they get access to all the ARC in the group.
- The group Owner(s) can adjust group settings and manage group memberships.
- Groups can have subgroups (with a subset of members). Subgroups have the same features as groups.  

---

## Namespaces

- In the DataHUB, namespaces help organize related projects.
- Every user has a personal namespace, where they can upload or create new ARCs.
- Every [group and subgroup](#datahub-groups) has an own namespace, respectively.

You can check the namespace by looking at the URL. For example:

<div class="table-container">

Type | URL | Namespace
--- | --- | ---
A **personal** ARC | https://git.nfdi4plants.org/brilator/Facultative-CAM-in-Talinum | `brilator` 
An **group**-shared ARC | https://git.nfdi4plants.org/hhu-plant-biochemistry/Samuilov-2018-BOU-PSP | `hhu-plant-biochemistry`

</div>

:bulb: "Personal" is not the same as "private", see [visibility](#visibility).

---

## Visibility

The visibility of ARCs and groups can be managed individually for each ARC (see [ARC settings](./../DataHUB-Manual/datahub-ARCSettings.html)) or group see ([Creating a Group](./../DataHUB-Manual/datahub-CreateGroup.html)).

- **Private** &ndash; Access must be granted explicitly to each user or a group.
- **Internal** &ndash; Can be accessed by any logged in user.
- **Public** &ndash; Can be accessed without authentication.  

:bulb: By default every ARC and every group is set to **private**.

---

## Roles and permissions

If you create or upload an ARC to the DataHUB, you are the *Owner* by default.
When inviting new members to an ARC or group, you can choose between different levels.

- **Guest** &ndash; Has the least rights. They will not be able to see the content of an ARC (only the wiki page).
- **Reporter** &ndash; Has read access to your ARC. This is recommended for people you ask for consultancy.
- **Developer** &ndash; The choice for most people you want to invite to your ARC. Developers have read and write access, but cannot maintain the project on the DataHUB, e.g. invite new members.
- **Maintainer** &ndash; Has read and write access and can add or remove members, except for yourself. This is the minimum role recommended for inviting group leaders as it allows them to add their group members for data upload or analysis to the project.
- **Owner** &ndash; An owner has basically all rights to the ARC. They can delete or transfer the ARC and manage user memberships.

:bulb: A detailed list of all permissions for the individual roles can be found [here](https://docs.gitlab.com/ee/user/permissions.html)

---

## ARC members in the DataHUB are not the same as ARC contacts in ISA metadata


:bulb: Members, groups, and roles set via the DataHUB can easily be confused with contributors added as ISA metadata to an ARC, e.g. collaborators added to investigation, study or assay. These are not the same and they are not automatically synced.

---

## Options to share an ARC via the DataHUB

<img src="./../../../img/arc-sharing.drawio.png" style="display: block; margin: auto; object-fit: cover; object-position: 100% 0%; width: 600px; height: 450px;">
