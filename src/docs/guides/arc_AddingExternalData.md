---
layout: docs
title: Adding external data to the ARC
date: 2023-07-07
author:
- name: Dominik Brilhaus
  orcid: https://orcid.org/0000-0001-9021-3197
  github: brilator
add toc: true
add support: true
add sidebar: _sidebars/mainSidebar.md
---

## About this guide

In this guide we recommend routines to properly add data from external sources to your ARC. 

<a href="./index.html">
    <span class="badge-category">User</span><span class="badge-selected" id="badge-advanced">Advanced</span>
    <span class="badge-category">Mode</span><span class="badge-selected" id="badge-tutorial">Tutorial</span>    
</a>

<br>
<br>

:warning:
This guide presents an interim solution. We are working on a more user-friendly implementation.

## Before we can start

:ballot_box_with_check: You are familiar with the [ARC](./../implementation/AnnotatedResearchContext.html) concept and [ISA file types](./isa_FileTypes.html)

Research projects rarely start out of the blue. Rather every project builds on previous findings and published or unpublished datasets.

## Add a study to store and describe the external data

To properly re-use and reference such a dataset, we recommend to add a `study` to your ARC. Every study by default comes with four parts: 

```markdown
└── <StudyName>
    ├── README.md
    ├── isa.study.xlsx
    ├── protocols
    └── resources
```

- In the `resources` directory you can add the data (e.g. supplemental data files)
- In the `protocols` directory you can add notes on how you retrieved the data and from where.
- The study is registered in your ARC's `isa.investigation.xlsx`, which includes a section "STUDY PUBLICATIONS" for every study. In this section, you can add publication details (author, DOI, etc.) about the external data source.
- Finally, the `README.md` is a good option to let other viewers of your ARC know the source and details to the external study. This file is also prominently displayed in the respective folder in the [DataHUB](./../implementation/DataHub.html). 


:bulb: The easiest way to [add a new study](./../ArcCommanderManual/arc_isa_study.html) is by using the ARC Commander's function:
```
arc study add --identifier <StudyName>
``` 

:bulb: As with any other routine used by researchers to share scientific results and data, the responsibility to acknowledge scientific integrity, follow guidelines of good scientific practice, institutional guidelines for data handling, and respective laws for licensing, and &ndash; if applicable  &ndash; to properly reference or cite the data source lies with the individual researcher.

:bulb: You can add datasets to the [.gitignore](./arc_gitignore.html) file, if you are unsure about the conditions to reuse data from an external source. 