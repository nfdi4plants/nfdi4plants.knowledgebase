---
layout: docs
title: Annotation Table
published: 2022-09-19
Author: Kevin Frey
add toc: false
add sidebar: _sidebars\mainSidebar.md
---

1. [Usage](#Creating-an-Annotation-Table)
2. [Definition](#Definition)

## Creating an Annotation Table

- Use the *create annotation table* button in the yellow pop-up box.
    - This only appears if you start Swate on a Excel worksheet without an existing annotation table.
- Click on the <a href="/images/UserDocs/Swate-Overlay-Exp.jpg" target="_blank">quick access button</a> *Add Annotation Table*.
    - 👀 You can hold <kbd>Ctrl</kbd> and click on *Add Annotation Table* to automatically transfer all **output** values from any existing annotation table in the worksheet **before the active one** into the to-be-created-annotation table.

<p style="display: flex; justify-content: center">
<img src="./../../images/UserDocs/Swate-CreateAnnotationTable-Exp.jpg?v28.01.202" style="height: 300px">
</p>

## Definition

Swate handles any Excel table, with a name starting with `annotationTable`, as an Swate annotation table. Currently, we use a small random name generator to extend that name to keep it unique. So you might find some funny names such as `annotationTableSpicyWalrus61` or `annotationTableQuickMoth47`.

