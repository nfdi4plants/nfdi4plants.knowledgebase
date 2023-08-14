---
marp: true
theme: marp-theme_dataplant-ceplas-ccby
paginate: true
license: '[CC-BY 4.0](https://creativecommons.org/licenses/by/4.0/)'
layout: slides
author:
- name: Dominik Brilhaus
  github: https://github.com/brilator
  orcid: https://orcid.org/0000-0001-9021-3197
date: 2023-08-14
title: ARC Club - Happy ARCing
---

# The ARC Club

Happy ARCing

Dominik Brilhaus &ndash; CEPLAS Data Science
August 16th, 2023

---

## Step 0: Assign yourself to the project

---

## Step 1: Collect / derive as much info about the **investigation** as possible. <!-- fit -->

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

---

## Step 2: Create and share the ARC

```bash
arc init
arc sync -f -r https://git.nfdi4plants.org/hhu-plant-biochemistry/<InvestigationID>
```

:warning:

---

## Step 3: Copy data

:warning: Do not **move** data from original source


<!-- 
---

## "easy" catches

- published data
- why even ARC them?

---

## more challenging ARCs

- (unpublished) left-overs of colleagues who have since moved


---

## perspective

- This is just a start
- Appreciate change

 -->