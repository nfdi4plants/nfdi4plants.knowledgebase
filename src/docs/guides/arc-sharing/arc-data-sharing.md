---
layout: docs
title: ARC data sharing
date: 2024-03-04
author:
- name: Dominik Brilhaus
  orcid: https://orcid.org/0000-0001-9021-3197
  github: brilator
add toc: true
add support: true
add sidebar: _sidebars/mainSidebar.md
---


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



## 5 shades of sharing



```mermaid
graph TD

subgraph user

    subgraph git.nfdi4plants.org/user/ARC
       u1[members]
       u2[repository]
    end

end



subgraph group    
    g1[members]

    subgraph g2[git.nfdi4plants.org/group/ARC]
       g3[members]
       g4[repository]

    end

end

g1 ---> g3

c1 --- g1
u2 --fork repository--> g2
c1 --invite user--> u1
g1 --invite group--> u1

c1[individual-collaborator]


```