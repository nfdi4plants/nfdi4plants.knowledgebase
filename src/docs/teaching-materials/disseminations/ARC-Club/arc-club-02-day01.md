---
marp: true
theme: marp-theme_dataplant-ceplas-ccby
headingDivider:
- 1
- 2
paginate: true
license: '[CC-BY 4.0](https://creativecommons.org/licenses/by/4.0/)'
layout: slides
author: Dominik Brilhaus
author_orcid: https://orcid.org/0000-0001-9021-3197
author_github: brilator
date: 2023-06-28
status: ready
title: ARC Club
---

# The ARC Club

Day 1 &ndash; Into the ARC

# Part 0: Check-in

## Part 0: Check-in

- Registration
  - Sign-in
  - Member in group [HHU Plant Biochemistry](https://git.nfdi4plants.org/hhu-plant-biochemistry)
- Installation
  - Git
  - Git config
  - ARC Commander
  - Swate
- Chat / channel
  - Notes
  - Project List


# Part 2: ARCing


## Step 0: Assign yourself to the project

## Step 1: Collect / derive as much info about the investigation as possible. <!-- fit -->


**MUST** haves

```yaml
Investigation Identifier
Investigation Title
...
Investigation Publication Status
...
Investigation Person Last Name
Investigation Person First Name


```

:bulb: This and more investigation-level info can be collected in the ARC's `isa.investigation.xlsx`


## Step 2: Create and share the ARC

```bash
arc init
arc sync -f -r https://git.nfdi4plants.org/hhu-plant-biochemistry/<InvestigationID>
```

:warning: 


## Step 3: Copy data

:warning: Do not **move** data from original source

```
scp 
```

