---
layout: docs
title: Publication to ARC
date: 2023-10-24
author:
- name: Dominik Brilhaus
  orcid: https://orcid.org/0000-0001-9021-3197
  github: brilator
add toc: true
add support: true
add sidebar: _sidebars/mainSidebar.md
---

<!-- http://127.0.0.1:8080/docs/guides/publicationToARC.html -->

## About this guide

In this guide we collect recommendations and thoughts on creating an ARC based on a publication and associated published datasets.
This is not the typical entry into an ARC, but rather retrospective. It might however help to build community-tailored showcases; i.e. showing what a project could look like as an ARC.

<a href="./index.html">
  <span class="badge-category">User</span><span class="badge-selected" id="badge-datasteward">Data Steward</span>
  <span class="badge-category">Mode</span><span class="badge-selected" id="badge-tutorial">Tutorial</span>
</a>

<br>
<br>

## Before we can start

<div id="before-start">

This guide assumes you know

- :ballot_box_with_check: the concept of the [ARC](./../implementation/AnnotatedResearchContext.html)
- :ballot_box_with_check: the different [ISA file types](./isa_FileTypes.html)
- :ballot_box_with_check: which tools to use (e.g. [ARC Commander](./../ArcCommanderManual/index.html), [ARCitect](./../ARCitect-Manual/index.html), [DataHUB](./../DataHUB-Manual/index.html)) and how.

<br>

</div>

## ARC setup

- Create new ARC "FirstAuthorLastName-PublicationYear"

- Upload ARC to [DataHUB](https://git.nfdi4plants.org/)

- Add README.md 
    <details><summary>README template (click &#x25B6; to display)</summary>

    ```markdown
    # Title of Publication

    ## Original Publication

    <citation as provided by publisher or exported from bibliography manager; ideally in a standard format including the DOI>

    ## Abstract

    <paper abstract>

    ## License

    <license / copyright as provided by publisher>
    ```
    </details>

- Add original publication files into a folder `_publication` inside the ARC
  
  1. publication pdf
  2. supplemental files (as offered on publication page)
  3. add a `_publication/README.md` with a table of links (file | url)

:bulb: the underscore "_" could help to distinguish additional folders (["additional payload"](https://github.com/nfdi4plants/ARC-specification/blob/main/ARC%20specification.md#additional-payload)) from default ARC folders

## Legal

- Add a `LICENSE` file to the ARC
  
  1. this must be according to the publisher's license usually found on the publisher / journal website of the publication
  2. See e.g. https://git.nfdi4plants.org/brilator/Facultative-CAM-in-Talinum/-/blob/main/LICENSE for a CC-BY 4.0 license

:bulb: We recommend to focus on open access / CC-BY publications and datasets, unless you explicitly know, whether and how to re-use the data published elsewhere.

## ISA - investigation / isa.investigation.xlsx

- Add Title: publication title
- Add Description: publication abstract
- Add Public Release Data: publication online date
- Add People: authors in same order as on publication
  1. Add First Name, Last Name, Affiliation
  2. If possible, add Email
  3. Try to find and add ORCID
- Add Publication
  1. DOI, Title, Authors, Status = Published

:bulb: Can be done via ARCitect, ARC Commander or Excel (manually editing the isa.investigation.xlsx file)

## ISA - studies and assays

- Identify the "data", i.e. results of experiments.
  1. In the ARC data is produced by "assays"
- Try to categorize and structure the paper into studies and assays
  1. studies are typically sample sets that are used as inputs to multiple assays
  2. Unfortunately samples are not always concisely named in publications. Try to deduce this from supplemental files, tables and figures...
- Cut the materials and methods (MM) section into protocols
  1. These may be studies/.../protocols or assays/.../protocols
  2. Store them as markdown files with the MM section as title
- Try to reach a point where one dataset = one assay
- The struggle is, that “datasets” are oftentimes not individually published as such, but rather somehow hidden or integrated in figures and tables (both in the original manuscript and the supplemental files). One needs to find a creative way to extract them from there and store them in the assays' dataset folders.

## File names

- Avoid spaces in file names. We recommend to use camelCase or PascalCase for file names 
- However, in order to keep track of links and data origin, it is recommended to keep the original name of data files (i.e. if a publisher or repository stores files with spaces).

## Original Data

The publication may contain a section "data availability" or "data accession" or similar that references external links (typically a large data repository).

- Try to find and transfer info (sample accessions, IDs, metadata, links, etc.) into the ARC. This would typically be an assay.

:bulb: There is no clear rule, whether data already published in a public repository should be imported (i.e. copied) into the ARC. Discussion ongoing.
  
- For showcasing, it makes sense to build a "complete" ARC.
- To minimize data duplication and save storage space, this should be avoided.
