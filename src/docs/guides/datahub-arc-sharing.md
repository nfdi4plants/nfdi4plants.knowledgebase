---
layout: docs
title: Sharing ARCs via the DataHUB
date: 2024-03-06
author:
- name: Dominik Brilhaus
  orcid: https://orcid.org/0000-0001-9021-3197
  github: brilator
add toc: true
add support: true
add sidebar: _sidebars/mainSidebar.md
---

<!-- Check site locally at http://127.0.0.1:8080/docs/guides/datahub-arc-sharing.html -->

## About this guide

In this guide we explain the different ways offered by the DataHUB to share an ARC with collaborators.

<div style="padding-bottom: 20px">
    <a href="./index.html">
        <span class="badge-category">User</span><span class="badge-selected" id="badge-newbie">Newbie</span>
        <span class="badge-category">Mode</span><span class="badge-selected" id="badge-read">Read</span>
    </a>
</div>

## Before we can start

:ballot_box_with_check: You have a [DataPLANT](https://register.nfdi4plants.org) account  
:bulb: See the [DataHUB manual](./../DataHUB-Manual/index.html) for tutorials

## Multiple ways to share an ARC via the DataHUB

To suit a wide range of collaborative scenarios, the DataHUB offers multiple, flexible ways of sharing an ARC.
This flexibility can be confusing at first. Generally, ARCs can be uploaded to the DataHUB and (a) associated to a user account (the default) or (b) associated with a group of users.

<!-- namespace / URL -->

The figure below is supposed to give a quick overview. Once an ARC exists in the DataHUB, you can choose between these options to share the ARC with collaborators. 

You can invite individual users (1). This is helpful to share an ARC with selected colleagues. To share an ARC with a group of users (e.g. a lab or consortium), you can invite a group (2). In both cases (1 and 2), the ARC "stays" associated with  the original owner only (visible by the namespace and URL address). Furthermore the [roles and permissions](#roles-and-permissions) can be set for individual users and groups.

Alternatively, you can create a *fork* of your ARC (3). This generates a copy linked to the original ARC, but now associated with the group. This can be used to share an ARC at a certain stage, without sharing the full progress after that stage. However, since the two ARCs (the original and the fork) can now be developed independently, this can easily lead to divergence and requires a bit more technical expertise to keep both ARCs in sync (if desired).

Finally, you can transfer your ARC to a group (4). This moves the ARC to a new namespace (that of the group). 
In both cases 3 and 4, you must have at least [maintainer access](#roles-and-permissions) to the group.

:bulb: You can also directly 

<img src="./../img/arc-sharing.drawio.png" style="width:70%; display: block; margin: auto">

## The difference between "projects" and "groups"

- In the DataHUB, ARCs are called "projects"; they are the same.
- "Groups" are a group of users (members) with specific permissions.
- A DataHUB group (e.g. your lab or consortium) can share ARCs. Depending on their assigned role, members of the group can view, edit, delete, maintain the ARC.
- An ARC can be shared with individual users (members) or a group.

## Location and namespace

## Visibility levels

The visibility of ARCs and groups is managed for each ARC (see [ARC settings](./../DataHUB-Manual/datahub-ARCSettings.html)) or group see ([Creating a Group](./../DataHUB-Manual/datahub-CreateGroup.html)) individually.

- Private – Access must be granted explicitly to each user or a group.
- Internal – Can be accessed by any logged in user.
- Public – Can be accessed without authentication.  

:bulb: By default every ARC and every group is set to **private**.

## Roles and permissions

If you create or upload an ARC to the DataHUB, you are the *Owner* by default.

:bulb: Transferring an ARC to a group can make




## Privately work on a group-shared ARC


![alt text](./../img/arc-sharing-forkSelective.drawio.png)


## DataHUB people ~ ARC contributors

:bulb: Members, groups, and roles set via the DataHUB can easily be confused with contributors added as ISA metadata to an ARC, e.g. collaborators in an investiagtion or study or assay performers.



<!-- 

## Concepts

1. Visibility levels
2. Namespaces
   1. Users vs. groups
3. Permissions
   1. Invite a member
   2. Invite a group
4. Forks
5. Branches
6. gitignore

## Step-by-step for demo video

1. Create a new ARC
2. Upload the ARC to "own user" or own group
3. Invite "other-user" to shared-group
4. Fork ARC shared-group
5. Work on original ARC (main branch)
   1. add README
   2. add metadata
6. Merge request original/main to shared-group/main
7. Show from "other-user" perspective
   1. Can see merged data
8. "own user": work on ARC (branch "not sharing")
   1. add secrets
9. Show from "other-user" perspective
   1.  cannot see secret
 -->
