---
layout: docs
title: Data publications
date: 2023-09-07
author:
- name: Kevin Schneider
  orcid: https://orcid.org/0000-0002-2198-5262
  github: kMutagene
add toc: true
add support: true
add sidebar: _sidebars/mainSidebar.md
---

# Introduction

_This page gives a general overview on DataPLANT's data publication process. For more practical guides on each step, check out the sidebar or refer to the guide links in this document._

Data is usually the primary output of scientific research; in contrast, the universal measurement of research success is the publication. In the past, accessing the underlying data of a published research paper required the tedious process of contacting the original authors and asking for access.

ARCs are [FAIR Digital Objects (FDOs)](https://nfdi4plants.org/content/learn-more/annotated-research-context.html). One of DataPLANTS main goal is facilitating the publication of ARCs as data publications.

This is achieved by a set of services and tools that are integrated into DataPLANT's DataHUB.

# Data publication services and tools

## Continuous Quality Control (CQC)

_practical guide: [passing cqc](datahub-data-publications-cqc.html)_

Upon every commit to an ARC repository, PLANTdataHUB can perform automated quality control measures based on the committed changes. 

ARCs that pass a CQC pipeline with the following steps are eligible for a data publication: 
- **(1)** a machine-readable representation (JSON) of the ARC metadata is created and linked with the commit, which makes it discoverable for search tools. 
- **(2)** ARC metadata is subjected to a set of quality checks, e.g., if ORCIDs associated with persons are valid or if each author has a contact email. 
- **(3)** The ARC metadata is converted to a metadata record, which is used by subsequent tools to trigger the data publication and associated creation of a DOI via DataCite for that record.

There are many use cases and scenarios for quality control of research data. Beyond allowing implementation of an abstract measure of quality, an immediate practical application in plant biology is to ensure that it is always possible to export project data and metadata into another format to deposition into a research repository.

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