---
layout: docs
title: Advanced Term Search
published: 2022-09-21
Author: Kevin Frey
add toc: false
add sidebar: _sidebars\mainSidebar.md
---

<br>

Advanced term search is accessible on multiple occations but is functionally the same. 

## How to use

When using the advanced term search there are four options to further define what you are looking for.

- **Term name keywords:** Uses Apache Lucene query parser syntax on the term names.
- **Term definition keywords:** Uses Apache Lucene query parser syntax on the term definitions.
- **Ontology** dropdown: Search for the above keywords in only one specific ontology.
- **Keep obsolete terms:** To show obsolete terms in search results or not.

## Apache Lucene query parser syntax

You can find in depth information on this topic on the source documentation from [Apache Lucene](https://lucene.apache.org/core/2_9_4/queryparsersyntax.html).

Common use cases might include:
- Simple Search. Example `instrument model` specifies that the result MUST contain `instrument` OR `model`.
- `+` operator. Example `+instrument model` specifies that the result MUST contain `instrument` and MAY contain `model`
- `-`/`NOT` operator. Example `instrument model NOT SCIEX`/`instrument model -SCIEX` specifies that the result MUST contain `instrument` OR `model` and MUST NOT contain `SCIEX`.
- `""` grouping. Example `"instrument model"` specifies that the result MUST contain `instrument model`.