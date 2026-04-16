---
title: From format-driven to clean wide table(s)
sidebar:
  order: 5.2
authors:
  - timo-muehlhaus
---


## Let’s start from conceptual measurements

Before looking at tables, we begin with a small set of **measurements**.

> We measure the **height of two plants (P1, P2)** on **two days (Day 1, Day 2)**.

```text id="m3py3e"
Plant:P1 → Day:1 → Height:10  
Plant:P1 → Day:2 → Height:12  
Plant:P2 → Day:1 → Height:8  
Plant:P2 → Day:2 → Height:9  
```

Each line represents **one measurement**. All components are explicit, and there is no ambiguity in how the data should be interpreted. This representation serves as our **ground truth**. Every table we will encounter is simply a different way of encoding these same measurements, sometimes clearly, sometimes in a way that obscures their structure.

## From measurements to spreadsheets

In practice, data is rarely recorded in such an explicit form. Instead, it is typically entered into spreadsheets designed for **human readability**. These spreadsheets aim to be easy to understand visually, but they often hide important structural information.

Before we even encounter encoded column names, many datasets already contain **implicit structure** that depends on layout, formatting, and context.

## The hidden structure problem

Consider the following example of a typical spreadsheet:

|   | A                        | B               | C               | D               |
| - | ------------------------ | --------------- | --------------- | --------------- |
| 1 | Experiment: Growth Study |                 |                 |                 |
| 2 |                          |                 |                 |                 |
| 3 | Plant                    | Day 1           | Day 2           | Notes           |
| 4 | P1                       | 10              | 12              | healthy         |
| 5 | P2                       | 8               | 9               | slightly wilted |
| 6 | **Mean**                 | =AVERAGE(B4:B5) | =AVERAGE(C4:C5) |                 |

All of the original measurements are still present in this table, but their components are now **distributed across different parts of the layout**.

The entity is represented in the first column, the day is encoded in the column headers, and the measured values are stored in individual cells. The variable itself (Height) is not written anywhere and must be inferred from context. In addition, derived values such as the mean are mixed into the same table, and non-data elements such as titles and empty rows are included.

In real-world spreadsheets, this situation is often even more complex. Colors may indicate treatment groups, bold text may distinguish headers from data, empty rows may be used for visual separation, and units may appear in arbitrary places. It is also common to find multiple small tables on a single sheet or data that does not start in cell A1.

The result is a structure that is easy for humans to interpret, but difficult to process computationally.

> The spreadsheet does not explicitly store measurements. It stores a **visual arrangement** from which measurements must be reconstructed.

## Extracting the data region

The first step towards a more structured representation is to **separate data from presentation**. This means identifying the actual region of the table that contains observations and removing everything that is not part of the measurements.

In practice, this involves determining:

* where the data begins and ends
* which rows contain actual observations
* which rows contain annotations, summaries, or formatting

After removing titles, empty rows, formatting, and computed summary rows, we obtain a cleaned table:

| PlantID | Day1 | Day2 | Notes           |
| ------- | ---- | ---- | --------------- |
| P1      | 10   | 12   | healthy         |
| P2      | 8    | 9    | slightly wilted |

At this point, the table has a clear rectangular structure. The raw measurement values are now **isolated**, and the data can be interpreted without relying on formatting or layout.

## Interpreting the cleaned table

Even though the table is now clean, it still does not fully match the measurement model.

We can partially reconstruct the measurements:

* the **entity** is represented by `PlantID`
* the **values** are explicitly stored in the cells

However, important parts of the measurement are still implicit:

* the **day** is encoded in the column names (`Day1`, `Day2`)
* the **variable** (Height) is not explicitly represented at all

This means that the table is easier to work with than the original spreadsheet, but still contains hidden structure.

## Separating raw data and derived data

A critical step in this process is the separation of **raw measurements** from **derived results**.

In the original spreadsheet, computed values such as means were included directly in the table. While this may be convenient for inspection, it introduces ambiguity and makes it difficult to reproduce results.

For example, the following table mixes observations and results:

| PlantID | Day1 | Day2 |
| ------- | ---- | ---- |
| P1      | 10   | 12   |
| Mean    | 9    | 10.5 |

Here, it is unclear how the mean was calculated, and the table no longer represents a consistent set of observations.

A more robust approach is to store raw data and derived values separately. The measurement data remains unchanged:

| PlantID | Day1 | Day2 |
| ------- | ---- | ---- |
| P1      | 10   | 12   |

and computed results are stored in a separate table:

| Statistic | Day | Value |
| --------- | --- | ----- |
| Mean      | 1   | 9     |
| Mean      | 2   | 10.5  |

This separation ensures that raw data remains stable and that results can be recomputed transparently.

Within the context of an **Annotated Research Context (ARC)**, this distinction is reflected in the folder structure. Raw measurement tables are typically stored under `assays/<assay>/datasets/`, while derived results and analyses are stored under `runs/<run>/`. This mirrors the conceptual difference between observations and results and supports reproducible workflows.

## Where we are now

At this stage, we have removed presentation and formatting, identified the data region, and isolated the raw measurements in a clean table. The structure is now explicit enough to be stored, versioned, and processed, but it still contains encoded information.

In particular, parts of the measurement are still hidden in column names or implied by the table structure.

This leads directly to the next step:

> making encoded structure, such as time, explicit in the data itself

## Self-check questions

* Where are measurements hidden in the original spreadsheet?
* Which parts of the table are not actual data?
* Why should summary statistics not be stored together with raw data?
* How would you identify the data region in a messy Excel sheet?
