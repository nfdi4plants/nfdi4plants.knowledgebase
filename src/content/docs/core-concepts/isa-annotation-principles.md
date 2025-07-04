---
title: Annotation Principles
authors: 
  - kevin-schneider
  - dominik-brilhaus
lastUpdated: 2025-07-04
---

Annotation of data and workflows within the ARC builds on the ISA model. In this guide we introduce the different building blocks available to annotate your workflows in a study (isa.study.xlsx) or assay (isa.assay.xlsx).

## Input

Every annotation table must start with the `Input` column, which defines the input of your table and can be of type "Source Name", "Sample Name", "Material", or "Data". This input value must be a unique identifier for an organism or a sample. The number of `Input` columns per table is limited to **one**.

<div style="background-color: #0BB5DD; color: white;">

![](@images/core-concepts/annotation-principles/input.svg)

</div>

## Characteristics

Characteristic columns describe inherent properties of the source material, e.g., a certain strain or ecotype, but also the temperature an organism was exposed to. You can add **any number** of `Characteristic` columns.

<div style="background-color: white; color: #1FC2A7;">

![](@images/core-concepts/annotation-principles/characteristics.svg)

</div>

## Factor

Use `Factor` columns to describe independent variables that determine the specific output of your experiment when processes and analysis were identical. Most of the time, `Factor`s are the most important building blocks for downstream computational analysis. You can add **any number** of `Characteristic` columns.

<div style="background-color: #1FC2A7; color: white;">

![](@images/core-concepts/annotation-principles/factor.svg)

</div>

## Parameter

`Parameter` columns describe steps in your experimental workflow, e.g., the temperature or extraction buffer used for your assay. Multiple Parameter columns form a protocol. You can add any number of `Parameter` columns.

<div style="background-color: white; color: #0BB5DD;">

![](@images/core-concepts/annotation-principles/parameter.svg)

</div>

## Component

Use `Component` columns to list anything physical of a protocol that can be consumed, e.g. instrument names, software names, or reagents names. You can add any number of `Component` columns.

<div style="background-color: #0BB5DD; color: white;">

![](@images/core-concepts/annotation-principles/component.svg)

</div>

## Protocol Columns

Use `Protocol REF` columns to reference the protocol used in the table, i.e., the name of the protocol. `Protocol Type` columns define the type, e.g. a growth protocol. The number of columns for each subtype is limited to **one per table**.

<div style="background-color: white; color: #2D3E50;">

![](@images/core-concepts/annotation-principles/protocol.svg)

</div>

## Output

**Per table only one** `Output` column is allowed, which can either be a "Sample Name", "Material", or "Data". Data files can be sources or outputs of computational workflows. The value of this column must be a unique identifier.

<div style="background-color: #0BB5DD; color: white;">

![](@images/core-concepts/annotation-principles/output.svg)

</div>
