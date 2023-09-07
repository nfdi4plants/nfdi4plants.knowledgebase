---
layout: docs
title: Passing Continuous Quality Control
date: 2023-09-07
author:
- name: Kevin Schneider
  orcid: https://orcid.org/0000-0002-2198-5262
  github: kMutagene
add toc: false
add support: true
add sidebar: _sidebars/mainSidebar.md
---

Continuous Quality Control (**CQC**) is a process that ensures the quality of the metadata of an ARC meets certain standards.

CQC i performed on each commit to an ARC, and the results are displayed on the ARC homepage:

<img src="./../img/data-publication/cqc-results.png" style="width:100%;display: block;margin: 20px auto;">

- **(1)**:
- **(2)**:
- **(3)**:

For more details, you can click on the pipeline badge, and investigate the steps of the CQC pipeline:

<img src="./../img/data-publication/cqc-pipeline-path-1.png" style="width:100%;display: block;margin: 20px auto;">

- **(1)**:
- **(2)**:

<img src="./../img/data-publication/cqc-pipeline-path-2.png" style="width:100%;display: block;margin: 20px auto;">

- **(1)**:
- **(2)**:
- **(3)**:

Clicking on **(2)** will open the CQC pipeline, where each step can be viewed in detail. The **Tests tab (2)** contains even more details about the performed quality control tests.

<img src="./../img/data-publication/cqc-pipeline-steps.png" style="width:100%;display: block;margin: 20px auto;">

## What to do when the CQC pipeline fails?

fix it, kthxbye.