---
layout: docs
title: Swate Walk-through
published: 2023-02-15
Author: Kevin Frey, Dominik Brilhaus
add toc: false
add sidebar: _sidebars/mainSidebar.md
---

<br>

<a href="./index.html">
    <span style="color: #2D3E50; padding: 4px 8px;text-align: center; border-radius: 10px 0px 0px 10px; border: solid 1px;">User</span><span style="background-color: #B4CE82;color:white; padding: 4px 8px;text-align: center; border-radius: 0px 10px 10px 0px; border: solid 1px #2D3E50">Newbie</span>
    <span style="color: #2D3E50; padding: 4px 8px;text-align: center; border-radius: 10px 0px 0px 10px; border: solid 1px;">Mode</span><span style="background-color: #1FC2A7;color:white; padding: 4px 8px;text-align: center; border-radius: 0px 10px 10px 0px; border: solid 1px #2D3E50">Walk-through</span>
</a>

## About

DataPLANT provides the Excel Add-In [Swate](./../implementation/Swate.html) to support you in data annotation.
In this walk-through, we guide you on annotating data using [Swate](./../implementation/Swate.html) with a show-case example.

## Before we can start

:ballot_box_with_check: Please [install Swate](./../SwateManual/Docs01-Installing-Swate.html)  
:bulb: Consider reading about [Swate](./../implementation/Swate.html)

## Annotation Workflow

<img src="./../img/Swate-Overlay-Exp.jpg?v27.01.202" style="height: 300px">

*This image displays major areas of the Swate user interface, which will be referenced below.*

## A small detour on "Excel Tables"

Swate uses an Excel table as main tool to annotate workflows. Each table represents one process from input to output.

For example:

- Plants &rarr; sampling &rarr; extract
- Measured data files  &rarr; statistical analysis  &rarr; result files

> :bulb: The Excel table feature allows to group data that belongs together inside one sheet. This is not to be confused with a (work)sheet or workbook.
> ```bash
> workbook (e.g. isa.assay.xlsx)
>  └── worksheet (e.g. plant_growth)
>       └── table (e.g. annotationTable)
> ```



### Create an annotation table

Create a Swate annotation table via the <kbd>create annotation table</kbd> in the yellow pop-up box *OR* click the <kbd>Create Annotation Table</kbd> quick access button.
  
> :bulb: Each table is by default created with one input (`Source Name`) and one output (`Sample Name`) column  
> :bulb: Only one annotation table can be added per Excel sheet

### Add a building block

1. Navigate to the *Building Blocks* tab via the navbar. Here you can add *Building Blocks* to the table.
2. Search for `instrument model` in the top panel of the *Building Blocks* tab. This search looks for suitable *Terms* in our *Ontology* database.
3. Select the Term with the id `MS:1000031` and, instead of *Parameter* select *Component* from the drop-down menu. 
4. Click <kbd>Add building block</kbd>.

> :bulb: This adds three columns to your table, one visible and **two** hidden.

### Insert values to annotate your data

1. Navigate to the *Terms* tab in the Navbar
2. In the annotation table, select any number of cells below `Component [instrument model]`
3. Click into the search field in Swate.

> :bulb: You should see `instrument model` showing in a field in front of the search field  
> :bulb: The search will now yield results related to `instrument model`

4. You can search or <kbd>double click</kbd> into the search field to show all related terms. Select any instrument model and click <kbd>Fill selected cells with this term*</kbd>

### Add a building block with a unit

1. In the *Building Blocks* tab, re-select *Parameter*, search for `sample volume` and select the term with id `MS:1000005`.
2. Check the box for *This Parameter has a unit* and search for `microliter` in the adjacent search bar.
3. Select `UO:0000101`.
4. Click <kbd>Add building block</kbd>.

> :bulb: This adds four columns to your table, one visible and **three** hidden.

### Insert unit-values to annotate your data

In the annotation table, select any cell below `Parameter [sample volume]` and add any numbers as volume.

> :bulb: You can see the numbers being complemented with the chosen unit, e.g. `10.00 microliter`

### Showing ontology reference columns

Hold <kbd>Ctrl</kbd> and click the *Autoformat Table* quick access button to adjust column widths and un-hide all hidden columns.

> :bulb: You can see that your instrument model of choice was added with id and source Ontology in the reference (hidden) columns.  
> :warning: This feature is currently not supported on MacOS

### Update ontology reference columns

Click the <kbd>Update Ontology Terms</kbd> quick access buttons.

> :bulb: This updates all reference columns according to the main column. In this case the reference columns for `Parameter [sample volume]` are updated with the id and source ontology of the `microliter` unit.

### Your ISA table is growing

At this point. Your table should look similar to this

<div class="table-container">

| Source Name 	| Parameter [instrument model] 	| Term Source REF (MS:1000031) 	| Term Accession Number (MS:1000031)        	| Parameter [sample volume] 	| Unit       	| Term Source REF (MS:1000005) 	| Term Accession Number (MS:1000005)        	| Sample Name 	|
|-------------	|------------------------------	|------------------------------	|-------------------------------------------	|---------------------------	|------------	|------------------------------	|-------------------------------------------	|-------------	|
|             	| SCIEX instrument model       	| MS                           	| http://purl.obolibrary.org/obo/MS_1000121 	| 10.00 microliter          	| microliter 	| UO                           	| http://purl.obolibrary.org/obo/UO_0000101 	|             	|
|             	| SCIEX instrument model       	| MS                           	| http://purl.obolibrary.org/obo/MS_1000121 	| 5.00 microliter           	| microliter 	| UO                           	| http://purl.obolibrary.org/obo/UO_0000101 	|             	|
|             	| SCIEX instrument model       	| MS                           	| http://purl.obolibrary.org/obo/MS_1000121 	| 5.00 microliter           	| microliter 	| UO                           	| http://purl.obolibrary.org/obo/UO_0000101 	|             	|
|             	| SCIEX instrument model       	| MS                           	| http://purl.obolibrary.org/obo/MS_1000121 	| 5.00 microliter           	| microliter 	| UO                           	| http://purl.obolibrary.org/obo/UO_0000101 	|             	|

</div>

### Hiding ontology reference columns

Click the <kbd>Autoformat Table</kbd> quick access button without holding <kbd>Ctrl</kbd> to hide all reference columns.

### Use a template

1. Navigate to *Templates* in the Navbar and click *Browse database* in the first function block.

> :bulb: Here you can find community created workflow annotation templates

2. Search for and select `Proteomics MassSpec Assay` (name may be issue to change in future updates, pls let us know if there are problems).
    - You will see a preview of all building blocks which are part of this template.
3. Click <kbd>Add template</kbd> to add all Building Blocks from the template to your table, which <u>do not exist yet</u>.

### Remove building blocks

If there are any Building Blocks which do not fit your experiment you can use the <kbd>Remove Building Block</kbd> quick access button to remove it including all related (hidden) reference columns.

:warning: Due to the hidden reference columns, we recommend not to delete table columns via the Excel menu. 

### Your ISA table is ready 🎉

Go ahead, adjust the Building Blocks you want to use to describe your experiment as you see fit.
Insert values using Swate Term search and add input and output.
