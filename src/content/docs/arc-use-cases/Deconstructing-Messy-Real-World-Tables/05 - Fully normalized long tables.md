---
title: From format-driven to clean wide table(s)
sidebar:
  order: 5.5
authors:
  - timo-muehlhaus
---

# Fully normalized long tables: representing measurements explicitly

## Returning to the measurement concept

Throughout this tutorial, we started from a simple idea:

> A dataset is a collection of **measurements**.

A measurement answers a small set of fundamental questions: what was measured, on what entity, under which conditions, and what was the result. In the earlier sections, we gradually recovered these components from messy spreadsheets and made them explicit through improved table structure, assay context, and semantic annotation.

At this point, we have a clean and partially normalized dataset, embedded in an assay and described through a DataMap. The data is already interpretable and usable. However, one final piece of the measurement is still not fully represented in the table itself.

## What is still implicit?

Recall our current dataset:

| PlantID | Day | Height |
| ------- | --- | ------ |
| P1      | 1   | 10     |
| P1      | 2   | 12     |
| P2      | 1   | 8      |
| P2      | 2   | 9      |

This table already captures the entity (`PlantID`), the context (`Day`), and the measured values. But the variable itself, in this case *Height*, is still encoded in the structure of the table.

As long as we only work with a single variable, this may not seem problematic. But as soon as we extend the dataset, the limitation becomes visible.

## Extending the example

Let us assume that, in addition to height, we also measure **weight** for the same plants and time points.

In the current representation, we would add a new column:

| PlantID | Day | Height | Weight |
| ------- | --- | ------ | ------ |
| P1      | 1   | 10     | 5      |
| P1      | 2   | 12     | 5.5    |
| P2      | 1   | 8      | 4      |
| P2      | 2   | 9      | 4.2    |

This works, but it introduces a structural dependency: every new variable requires a new column, and different types of measurements are treated differently by the table.

## Making the variable explicit

To fully align the table with the measurement concept, we now take the final step and make the variable itself explicit. Instead of representing different measurements as different columns, we represent them as values in a common column.

This leads to the fully normalized long format:

| Entity | Day | Variable | Value |
| ------ | --- | -------- | ----- |
| P1     | 1   | Height   | 10    |
| P1     | 1   | Weight   | 5     |
| P1     | 2   | Height   | 12    |
| P1     | 2   | Weight   | 5.5   |
| P2     | 1   | Height   | 8     |
| P2     | 1   | Weight   | 4     |
| P2     | 2   | Height   | 9     |
| P2     | 2   | Weight   | 4.2   |

Each row now represents one complete measurement. The structure of the table no longer depends on which variables are present.

## What changes when the variable becomes explicit

Making the variable explicit fundamentally changes how the table behaves.

In the partially normalized table, *Height* was a column, and adding *Weight* required modifying the structure. In the fully normalized representation, both are simply values of the same column. New variables can be added without changing the schema, and existing datasets can be extended by adding rows rather than columns.

In our LiDAR example, this means that measurements derived from the same assay, or even from different assays, can be combined more easily. The table no longer encodes the experiment in its layout, but instead provides a uniform representation of all measurements.

This uniformity makes it easier to:

* combine datasets from different sources
* process data in analysis pipelines
* connect measurements to semantic annotation through the DataMap

At the same time, the table becomes less compact and may feel less intuitive when inspected manually. For small datasets or exploratory work, the partially normalized representation may therefore remain more convenient.

This highlights an important principle that applies throughout this tutorial:

> Full normalization is powerful, but it is not always necessary.

## Relation to assay and DataMap

The fully normalized table does not replace the assay or the DataMap. Instead, it complements them.

* the **assay** still provides the experimental context, describing how the measurements were generated
* the **DataMap** still provides semantic annotation, describing what each variable represents

In the long format, the `Variable` column itself can now be directly linked to semantic concepts. This creates a very natural connection between the table structure and the semantic layer.

## Completing the picture

We can now revisit the full progression of this tutorial:

1. a formatting-driven spreadsheet, where structure is encoded visually
2. a clean wide table, where raw data is isolated
3. a partially normalized table, where context becomes explicit
4. an annotated dataset, where meaning is described through assay and DataMap
5. a fully normalized table, where each row represents one measurement

Each step made a different aspect of the data more explicit. Structure, context, meaning, and finally the measurement itself are now clearly represented.

## Final perspective

The central idea can now be stated more precisely:

> A well-structured dataset is one in which measurements are explicit, and their meaning can be understood without relying on hidden assumptions.

This does not require a single “correct” format. Instead, it requires understanding when structure is sufficient, when annotation is needed, and when a fully normalized representation provides additional value.

By combining structured tables, assay context, and DataMap annotation, we can work with real-world data in a way that is both flexible and robust.

## Self-check questions

* Which component of the measurement becomes explicit in the fully normalized table?
* How does the long format change the way new variables are added to a dataset?
* Why might the partially normalized format still be preferable in some situations?
* How do assay context and DataMap annotation complement the fully normalized representation?

