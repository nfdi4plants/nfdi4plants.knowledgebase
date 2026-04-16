---
title: Introduction to tabular data
sidebar:
  order: 5.1
authors:
  - timo-muehlhaus
---


## What does normalization mean?

In the context of tabular data, **normalization** describes the process of transforming data into a structure where each piece of information is stored **explicitly and exactly once**, each row represents **one observation (one measurement)**, and each column represents **one variable**. In such a structure, no information is hidden in formatting, column names, or table layout.

In other words, normalization turns **implicit structure into explicit data**.

It is important to emphasize that normalization is not an all-or-nothing concept. Rather, it describes a **spectrum of representations**, ranging from informal spreadsheets designed for human readability to fully structured, machine-readable datasets. Different stages along this spectrum can be appropriate depending on the task, and this tutorial will explore that progression step by step.

## Measurements as a first-class concept

At the core of this transformation is a shift in perspective. Instead of thinking in terms of tables, we think in terms of **measurements**.

A **measurement** is the fundamental unit of scientific data. It answers a simple question: *What was measured, on what entity, under which conditions, and what was the result?*

A simple example illustrates this idea:

```text id="z8q7dn"
Plant:P1 → Day:1 → Height:10  
Plant:P1 → Day:2 → Height:12  
Plant:P2 → Day:1 → Height:8  
Plant:P2 → Day:2 → Height:9  
```

Each line represents **one measurement**. All components are explicitly stated, and no information depends on formatting or interpretation. This representation is minimal, but it captures everything that is needed to understand the data.

From this perspective, a dataset is not primarily a table, but a **collection of measurements**. Tables are simply different ways of organizing and encoding these measurements, sometimes clearly, sometimes in ways that obscure their structure.

## Why does this matter?

Many common data problems arise because measurements are not treated explicitly. Instead, different components of a measurement are often merged or hidden within the structure of a table.

For example, multiple measurements may be encoded in a single column name such as `Height_Day1`. Contextual information such as time or treatment may be implied by layout or formatting. Derived values such as means or sums are often mixed directly with raw observations. As a result, the meaning of individual values depends on human interpretation rather than being encoded in the data itself.

These issues become particularly problematic as soon as data needs to be processed computationally, shared with collaborators, or integrated into structured environments such as an **Annotated Research Context (ARC)**. In such settings, implicit assumptions break down, and ambiguity quickly leads to errors or additional manual work.

By treating measurements as first-class objects, we ensure that every value has a **clear and unambiguous meaning**. Data can be processed without prior knowledge of the table layout, new variables or conditions can be added without restructuring the dataset, and the data becomes compatible with metadata standards and ontologies.

## What is our goal?

The goal of this tutorial is not simply to “clean” a table, but to **transform it into a representation of measurements**.

We aim to move from informal, visually structured spreadsheets to datasets in which each row corresponds to exactly one measurement and all components of that measurement are explicitly represented. In such a structure, no information is encoded in formatting or naming conventions.

This results in data that is **machine-readable**, **scalable**, **interoperable**, and **reusable** in the sense of FAIR data principles.

## Guiding principle

A useful way to evaluate a dataset is the following:

> A dataset is well-structured if every measurement can be interpreted without relying on formatting, naming conventions, or external knowledge.

This principle will guide all transformations in the following sections.

## How this tutorial is structured

The tutorial follows a progression that mirrors how data typically evolves in practice. Starting from a visually structured spreadsheet, we will gradually recover the underlying measurements, make their components explicit, and complement the structure with experimental context and semantic annotation.

We will move through the following stages:

* **Formatting-driven spreadsheet**, where structure is encoded visually through layout, colors, and formulas

* **Clean wide table**, where raw data is extracted but some structure remains encoded in columns

* **Partially normalized table**, where key components such as context (e.g. time) become explicit

* **Annotated dataset (assay + DataMap)**, where experimental context and semantic meaning are described independently of the table structure

* **Fully normalized long table**, where each row represents one complete measurement and all components are explicit

At each step, we will examine what improves, what limitations remain, and in which situations a given representation may still be appropriate.

By the end of this process, the connection between messy real-world tables and a clean, measurement-centered representation should become clear, including how **structure, context, and semantic annotation** work together to make data interpretable and reusable.
