---
layout: docs
license: '[CC-BY 4.0](https://creativecommons.org/licenses/by/4.0/)'
title: 
date: 2024-03-25
author:
- name: Dominik Brilhaus
  github: https://github.com/brilator
  orcid: https://orcid.org/0000-0001-9021-3197
---

<!-- 
Demo this only, if asked for - e.g. if coders around 
 -->

# ARC Commander demo

---

# Create and navigate to your ARC folder

```bash
mkdir <path/to/YourARCFolder>
cd <path/to/YourARCFolder>
```

---

# Setup the ARC structure with one study and one assay

```bash
arc init
arc investigation create -i <YourInvestigationID>
arc study add -s <YourStudyID>
arc assay add -s <YourStudyID> -a <YourAssayID>

arc sync -f -r https://git.nfdi4plants.org/<YourUserName>/<YourARC> -m "initialize ARC structure"
```
