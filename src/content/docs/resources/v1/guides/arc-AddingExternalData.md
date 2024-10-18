---
title: Adding external data to the ARC
lastUpdated: 2023-07-07
authors:
  - dominik-brilhaus
---

## About this guide

In this guide we recommend routines to properly add data from external sources to your ARC. 

<div style="padding-bottom: 20px">
    <a href="./index.html">
        <span class="badge-category">User</span><span class="badge-selected" id="badge-advanced">Advanced</span>
        <span class="badge-category">Mode</span><span class="badge-selected" id="badge-tutorial">Tutorial</span>    
    </a>
</div>

## Before we can start

☑️ You are familiar with the [ARC](./../implementation/AnnotatedResearchContext.html) concept and [ISA file types](./isa_FileTypes.html)

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


💡 The easiest way to [add a new study](./../ArcCommanderManual/arc_isa_study.html) is by using the ARC Commander's function:
```
arc study add --identifier <StudyName>
``` 

💡 As with any other routine used by researchers to share scientific results and data, the responsibility to acknowledge scientific integrity, follow guidelines of good scientific practice, institutional guidelines for data handling, and respective laws for licensing, and &ndash; if applicable  &ndash; to properly reference or cite the data source lies with the individual researcher.

💡 You can add datasets to the [.gitignore](./arc_gitignore.html) file, if you are unsure about the conditions to reuse data from an external source. 