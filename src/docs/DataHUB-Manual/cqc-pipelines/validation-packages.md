---
layout: docs
title: Find and use ARC Validation Packages
date: 2024-07-10
author:
- name: Kevin Schneider
  orcid: https://orcid.org/0000-0002-2198-5262
  github: kMutagene
add toc: true
add support: true
add sidebar: _sidebars/mainSidebar.md
---

Users can choose to validate against any validation package available on the [ARC Validation Package Registry (AVPR)](https://avpr.nfdi4plants.org). AVPR provides an overview containing all metadata about an validation packages, such as authors, summary, and even a full package code preview. Additionally, each package page prominently displays the necessary information to use it in CQC pipelines.

To include a validation package in a PLANTDataHUB CQC pipeline, it has to be referenced in the `validation_packages.yml` file located in the `.arc` directory in the ARC's root directory. The file can be created manually or by DataPLANT tooling such as the ARCitect.

Let's for example have a look at the **[invenio validation package](https://avpr.nfdi4plants.org/package/invenio)**, which an ARC must pass to be eligible for [data publication](../datahub-data-publications.html). The AVPR page states that (at the time of writing this guide) the latest version is `2.0.1` and that to include this package in the CQC pipeline, the following content has to be added to the `validation_packages.yml` file:

```yaml
validation_packages:
  - name: invenio
    version: 2.0.1
```