---
layout: docs
title: Data publications
date: 2024-07-10
author:
- name: Kevin Schneider
  orcid: https://orcid.org/0000-0002-2198-5262
  github: kMutagene
add toc: true
add support: true
add sidebar: _sidebars/mainSidebar.md
---

_**Note:** All CQC pipelines are opt-in starting from July 10, 2024. If you used the DataHUB publication service before, head [here](cqc-pipelines/validation-packages.html) to learn how to opt-in._

# Introduction

_This page gives a general overview on DataPLANT's data publication process. For more practical guides on each step, check out the sidebar or refer to the guide links in this document._

Data is usually the primary output of scientific research; in contrast, the universal measurement of research success is the publication. In the past, accessing the underlying data of a published research paper required the tedious process of contacting the original authors and asking for access.

ARCs are [FAIR Digital Objects (FDOs)](https://nfdi4plants.org/content/learn-more/annotated-research-context.html). One of DataPLANTS main goal is facilitating the publication of ARCs as data publications.

This is achieved by a set of services and tools that are integrated into DataPLANT's DataHUB.

# Data publication services and tools

## Continuous Quality Control (CQC)

_**Note:** All CQC pipelines are opt-in starting from July 10, 2024. If you used the DataHUB publication service before, head [here](cqc-pipelines/validation-packages.html) to learn how to opt-in._

_practical guide: [passing cqc](datahub-data-publications-cqc.html)_

Upon every commit to an ARC repository, PLANTdataHUB can perform automated quality control measures based on the committed changes. Form more information, have a look at [Continuous Quality Control (CQC) pipelines & ARC validation](cqc-pipelines/cqc-pipelines.html).

## ARChigator: the ARC submission service

_practical guide: [Submitting ARCs with ARChigator](datahub-data-publications-archigator.html)_ 

ARChigator is a tool for submitting ARCs hosted on DataHUB for publication in the [ARChive](https://archive.nfdi4plants.org/communities/dataplant). Only ARCs that pass CQC are eligible for submission.

ARChigator also acts as a last-stop preview of record metadata. When submitting an ARC, ARChigator will display the metadata record that will be used for the data publication. This allows for a last manual check if the metadata is correct and complete before submitting the ARC.

Once submitted via ARCigator, ARCs are submitted as a request for publication (**RFP**) to the [ARChive](https://archive.nfdi4plants.org/communities/dataplant).

## ARChive: The collection of published ARCs

Once an ARC is in **RFP** stage, emails are sent to the addresses registered in the ARCs metadata that contain a link to the ARCs publication status update page. **RFP**s are reviewed by the ARChive's editorial board, which might request changes to certain metadata entries to meet our quality criteria. 

_practical guide: [Track your publication status](datahub-data-publications-status.html)_ 

If the RFP is accepted, the ARC is published and a [Digital Object Identifier (**DOI**)](https://www.doi.org/the-identifier/what-is-a-doi/) is minted for the ARC via [DataCite](https://datacite.org/).

_practical guide: [Use your DOIs](datahub-data-publications-dois.html)_ 