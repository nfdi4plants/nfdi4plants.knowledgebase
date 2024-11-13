---
title: Reproduce and reuse
lastUpdated: 2022-09-23
authors:
 - dominik-brilhaus
draft: true
pagefind: false
---

This guide outlines key principles and practical steps for achieving reproducibility in both wet-lab and computational (dry-lab) environments. It aims to help researchers in biological sciences understand and implement reproducibility in their work, ensuring that experimental outcomes, data, and analyses can be reliably repeated by others.

## Reproducibility in Science: Wet-Lab vs Dry-Lab

| Wet Lab | Dry Lab |
| ------- | ------- |
| Company RNA extraction kit with all buffers and most materials and tools | Established/commercial software; somewhat contained, isolated, self-sustained |
| "Manual" protocol where you mix buffers together yourself | Scripts or combinations of scripts (pipelines) with varying inputs (reference datasets) and tool dependencies (code interpreters, packages, functions) |
| Version, batch, or lot number of materials | Software/package version |
| Laboratory environment (humidity, temperature, equipment) | Operating system (Linux, Windows, Mac) |

## Challenges in Wet-Lab Reproducibility

In the wet-lab, many factors influence reproducibility, making it difficult to recreate the exact same results. These factors include:

- **Biological variance**: Even with the same protocols and conditions, biological systems often exhibit inherent variability.
- **Hands-on factors**: More individuals handling the experiment can introduce variability.
- **Environmental factors**: Humidity, temperature, and even the specific equipment used (e.g., centrifuges, growth chambers) can affect results.

## Reproducibility in Computational Analyses

Reproducibility in computational analyses generally focuses on two key aspects:

1. **Exact output reproduction**: Ensuring that the same input data will consistently yield the same result when the analysis is rerun.
2. **Flexible workflow application**: Ensuring that workflows and analysis pipelines can be applied to different datasets, producing analogous results that can be fed into other analyses or workflows (e.g., generating similar figures).

## How We Typically Work with Scripts in Computational Workflows

In computational biology, scripts are often:

- **Interactive and iterative**: Researchers frequently modify and rerun scripts in response to their data or research questions.
- **Adapted for specific needs**: Researchers often adapt generic scripts to their specific datasets, tweaking them as they go.
- **Hard-coded**: Inputs, outputs, and parameters are sometimes hard-coded directly into the script, which can lead to issues when sharing or transferring the script to others.

## Common Problems with Reproducibility in Computational Workflows

One of the main challenges in reproducibility is sharing scripts with others:

- **Missing dependencies**: When passing a script to a colleague, it might not work because of missing software dependencies, different versions of libraries, or changed file paths.
- **Environmental differences**: Different operating systems, system configurations, or setups may lead to issues in running the script as intended.

## Common Sources for Scripts

Researchers typically source scripts from:

- **Workshops or summer schools**: Scripts often come from educational events and are adapted for specific use.
- **Colleagues**: Researchers share their scripts with peers, who then modify them for their own needs.
- **Manuals or tutorials**: Many scripts are adapted from tutorials available online (e.g., from GitHub repositories).
- **Community forums**: Script snippets often come from community-driven sites like Stack Overflow.

## Software Dependencies and Environment Management

Reproducibility can break down due to the numerous dependencies and system requirements involved in computational workflows. These include:

- **Operating systems**: Different platforms (Linux, Windows, Mac) can affect how software runs.
- **Programming environments**: Variations in the programming language (e.g., Python, R, Julia) or the environment (e.g., Shell, Jupyter notebooks) can cause inconsistencies.
- **Package versions**: Even the same software package can behave differently between versions, leading to unexpected results.
- **Virtual environments**: Without using tools like virtual environments or containers, different users might have conflicting software setups.

## Solutions for Reproducibility

Several tools and approaches can help address these issues and improve reproducibility:

- **Containers**: Using Docker or Singularity allows you to package software, dependencies, and environments into a portable container that can be executed consistently across different systems.
- **Workflow languages**: Tools like **CWL** (Common Workflow Language), **Snakemake**, and **Nextflow** help create standardized workflows that are environment-agnostic, specifying input/output parameters and dependencies in a way that’s easy to share and reproduce.

## Towards a Reproducible Research Environment

Reproducibility is a critical principle in both biological and computational research. By carefully structuring your workflows, using version control, managing dependencies with tools like containers and CWL, and applying FAIR principles to your data, you can ensure that your research can be reliably reproduced and shared.

By adopting these practices, you’ll not only improve the robustness and transparency of your own work, but also make it easier for others to build upon your research in the future.
