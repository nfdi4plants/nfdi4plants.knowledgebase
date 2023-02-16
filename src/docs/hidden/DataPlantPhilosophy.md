---
layout: docs
title: The DataPLANT Philosophy
published: 2022-08-10
author: Dominik Brilhaus
author_orcid: https://orcid.org/0000-0001-9021-3197
author_github: brilator
add toc: true
add sidebar: _sidebars/hiddenMenuSidebar.md
article_status: draft
---


## *MUST or MAY?* - A plea against brute force (the no-brute-force approach)

- no "right" or "wrong"
  - metadata annotation
    - use of synonyms
    - always better to have something than missing metadata (as it would not fit the requirements)
  - reproducibility
    - desrciption of non-reproducible workflows
    - always better to have something than miss that part of the analyses just because it is not perfectly reproducible / CWL-decorated

- recommended not required
  - (raw) data file types -> keep original file type, convert to recommended file types for readability, sustainability
  - following recommendations can make life easier


## Teacher to class or class to teacher?

## Data-centric not tool-bound

## Avoiding walled gardens

## (Im)mutability

### Immutable

- inputs
- "don't touch / change" (~> version control)
- studies/*/resources
- assays/*/dataset
- incl. workflows that can not be CWLed (e.g. ImageJ analysis of a gel picture, Excel data cleaning before import into script)
- => particularly benefit from isa.datapackage.xlsx (to foster reusability)

### Mutable

- reproducible solely by use of inputs and workflows within the ARC
- runs/

