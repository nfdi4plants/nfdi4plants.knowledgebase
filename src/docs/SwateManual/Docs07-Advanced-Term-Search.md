---
layout: docs
title: Advanced Term Search
date: 2024-04-26
author: 
- name: Kevin Frey
  github: https://github.com/Freymaurer
  orcid: https://orcid.org/0000-0002-8510-6810
add toc: false
add sidebar: _sidebars\mainSidebar.md
---

<br>

Advanced term search is accessible on multiple occasions, but is functionally the same.

## How to use

When using the advanced term search there are four options to further define what you are looking for.

- **Term name keywords:** Uses Apache Lucene query parser syntax on the term names.
- **Term definition keywords:** Uses Apache Lucene query parser syntax on the term definitions.
- **Keep obsolete terms:** To show obsolete terms in search results or not.

## Apache Lucene query parser syntax

You can find in depth information on this topic on the source documentation from [Apache Lucene](https://lucene.apache.org/core/2_9_4/queryparsersyntax.html).

Common use cases might include:
- Simple Search. Example `instrument model` specifies that the result MUST contain `instrument` OR `model`.
- `+` operator. Example `+instrument model` specifies that the result MUST contain `instrument` and MAY contain `model`
- `-`/`NOT` operator. Example `instrument model NOT SCIEX`/`instrument model -SCIEX` specifies that the result MUST contain `instrument` OR `model` and MUST NOT contain `SCIEX`.
- `""` grouping. Example `"instrument model"` specifies that the result MUST contain `instrument model`.