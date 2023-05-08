---
marp: true
theme: dataplant_marp-theme
layout: slides
author: Martin Kuhl
author_orcid: https://orcid.org/0000-0002-8493-1077
author_github: Martin-Kuhl
license: '[CC-BY 4.0](https://creativecommons.org/licenses/by/4.0/)'
date: 2023-03-16
title: tutorial_arc_add-Add_an_assay
---

# Add an assay

Add an isa.assay.xlsx workbook including an identifier to your ARC with

```bash
arc a add -s QuickStartStudy -a QuickStartAssay
```

> Note: An assay must be linked to a study. If a study does not exist, it will be created automatically in this step.
