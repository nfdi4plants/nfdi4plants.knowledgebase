---
title: The ARC validation concept
lastUpdated: 2025-12-09
authors:
  - kevin-schneider
sidebar:
  order: 1
---

The ARC is a generic and flexible RDM framework that does not, by itself, enforce specific quality criteria for the data and metadata it contains. Many research communities have developed their own standards and best practices, which can vary significantly between disciplines. While these standards can be implemented using ARCs, compliance with them is out of scope for the ARC framework itself.

## A pull model for domain-specific validation

Validation of ARCs is realized as a pull model: for a given ARC, the required criteria must be explicitly stated and then verified. This is achieved using ARC Validation Packages, which are self-contained sets of rules and checks that can be applied to an ARC to assess its quality.

In addition to enabling the implementation of abstract quality measures, practical RDM applications include:

- checking whether an ARC meets community-specific or general (meta)data standards

- ensuring that an ARC contains the information required for downstream processes, e.g., when submitting it for analysis in a facility

- verifying that the data and metadata contained in an ARC can be exported into another format for deposition into a research repository

## Common use cases

Validation of ARCs can be realized in multiple ways, depending on the use case. Common approaches include:

- ad-hoc validation using custom, ephemeral local scripts (best for one-off checks or exploratory purposes)
- local validation using a validation package (best if the ARC is only managed locally and not submitted to a remote repository such as the DataHUB)
- **automated validation using [Continuous Quality Control (CQC) pipelines](/nfdi4plants.knowledgebase/arc-validation/cqc-pipelines) on the DataHUB** (best support with our tooling)
