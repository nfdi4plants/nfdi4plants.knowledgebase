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

## Moving from FileShare to DataHUB &ndash; *via* ARCs

![w:900](./../../../img/InsituteFileShare03toDataHUBviaARC.drawio.svg)

---

## Assign projects


---

## Rough routine for each project

1. Identify the available data and resources
2. Create the ARC
3. Add metadata and data
4. Share via DataHUB group https://git.nfdi4plants.org/hhu-plant-biochemistry/

---

## Low(er) hanging fruits: published projects

1. Add the authors
2. Add the publication(s)
   1. Add citation and DOI
   2. Add supplemental
   3. Convert M&M to *protocols*
3. Reference data in public repositories
4. Add large data (e.g. from file share)
5. Set ARC to **public!**

---

## More challenging ARCs

- (unpublished) left-overs of colleagues who have since moved
- unclear

---

## Collect / derive as much info about the **investigation** as possible

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

## Create and share the ARC

```bash
arc init
arc sync -f -r https://git.nfdi4plants.org/hhu-plant-biochemistry/<InvestigationID>
```

---

## Copy data

1. **Copy** data to the ARC, do not **move** data from original source  
(we'll take care of that later)
2. Ideally use `rsync` rather than copying manually
3. Ideally use `md5` or `md5sum` to check for correct file transfer

:bulb: Ask the coders for help!

---

## Perspective and administration in the future

---

## Administration / Backup

![Alt text](./../../../img/InsituteFileShare04-backupClones.drawio.svg)
