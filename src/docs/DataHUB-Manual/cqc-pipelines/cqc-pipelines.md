---
layout: docs
title: Continuous Quality Control (CQC) pipelines & ARC validation
date: 2024-07-10
author:
- name: Kevin Schneider
  orcid: https://orcid.org/0000-0002-2198-5262
  github: kMutagene
add toc: true
add support: true
add sidebar: _sidebars/mainSidebar.md
---

There are many use cases and scenarios for quality control of research data. Beyond allowing implementation of an abstract measure of quality, an immediate practical application in plant biology is to ensure that it is always possible to export project data and metadata into another format to deposition into a research repository.

Continuous Quality Control (CQC) pipelines are a set of opt-in automated processes that run on every commit to an ARC on the DataHUB. They are designed to be customizable and granular by allowing users to select the validation packages they want to validate their ARC against. The results of the CQC pipelines are displayed as a badge on the ARC homepage for each selected validation package.

CQC on the DataHUB consist of 3 steps:

- **(1)** a machine-readable representation (JSON) of the ARC metadata is created and linked with the commit, which makes it discoverable for search tools.
- **(2)** the ARC is queried for wether the user has opted in to validate against any validation package
- **(3) - optional:** if **(2)** is the case, a pipeline step is created for each validation package. These pipelines perform validation of the ARC and commit the results to the ARCs `cqc` branch.

# Validation packages

## ARC Validation Package Registry (AVPR)

The [ARC Validation Package Registry (AVPR)](https://avpr.nfdi4plants.org) is the central DataPLANT service for browsing, submitting, and installing ARC validation packages. The AVPR is a community-driven platform that allows users to share and discover validation packages for their ARCs.

## Use Validation packages in your CQC pipeline

_practical guide: [find and use ARC Validation Packages](validation-packages.html)_

Users can choose to validate against any validation package available on the AVPR. To do so, they need to add the package and desired version to their ARC's `validation_packages.yml` file. The CQC pipeline will then automatically validate the ARC against the selected packages on every commit. The file can be created manually or by DataPLANT tooling such as the ARCitect. For more information, visit the [practical guide](validation-packages.html).
