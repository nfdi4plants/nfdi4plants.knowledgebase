---
layout: docs
title: TL;DR
published: 2022-09-19
Author: Kevin Frey
add toc: false
add sidebar: _sidebars\mainSidebar.md
---

Swate is a FAIR workflow annotation Microsoft Excel add-in. 

## Requirements

1. Existing Microsoft Account with Excel 2019 or newer **OR** a free Microsoft account to use Excel online.

## Installation

Follow the [Quickstart](/docs/UserDocs/docs01-installing-Swate#quickstart) guide (~2min).

## Usage (~10min)

Swate uses an Excel table as main tool to annotate workflows. Each table represent one process from input to output.

Examples:
- Plant -Sampling-> Extract
- Measured data files -statistical analysis-> result files

### Annotation Workflow

<img src="./../../images/UserDocs/Swate-Overlay-Exp.jpg?v27.01.202" style="height: 300px">

*This image displays major areas of the Swate user interface, which will be referenced below.*

1. Start by creating a Swate annotation table.
    - Use the yellow box pop-up button *OR* click the *Add Annotation Table* quick access button.
    - Only one table per Excel sheet.
    - Each table is by default created with an input (`Source Name`) and an output (`Sample Name`) column.
2. If not active use the navbar to go to *Building Blocks*. Here you can add *Building Blocks* to the table. 
3. Use the first function block to search for `instrument model`. This search looks for fitting *Terms* in our *Ontology* database.
4. Select the Term with the id `MS:1000031` and, select *Component* instead of *Parameter* and click *Add building block*.
    - This adds three columns to your table, one visible and two hidden.
5. Reselect *Parameter*, search for `sample volume` and select the term with id `MS:1000005`, then check the button for *This Parameter has a unit* and search for `microliter` in the just enabled searchbar and select `UO:0000101`. Add the building block.
    - This adds four columns to your table, one visible and three hidden.
6. Select any field below `Parameter [sample volume]` and add any numbers as volume.
    - You can see that the numbers are complemented with the chosen unit. for example `10.00 microliter`.
7. Navigate to *Terms* in the Navbar and select any number of fields below `Component [instrument model]`. Then click into the searchfild in Swate. 
    - You should see, that `instrument model` will be transferred in a field in front of the search field. Any search will now be done on terms related to `instrument model`. 
8. You can search or <kbd>double click</kbd> into the search field to show all related terms. Select any instrument model and click *Fill selected cells with this term*.
9. Hold <kbd>Ctrl</kbd> and click the *Autoformat Table* quick access button to adjust column widths and unhide all hidden columns.
    - You can see that your instrument model of choice was added with id and source Ontology in the reference (hidden) columns.
10. Click the *Update Ontology Terms* quick access buttons.
    - This updates all reference columns according to the main column. In this case the reference columns for `Parameter [sample volume]` are updated with the id and source ontology of the `microliter` unit.
    - At this point. Your table should look similiar to this:

| Source Name 	| Parameter [instrument model] 	| Term Source REF (MS:1000031) 	| Term Accession Number (MS:1000031)        	| Parameter [sample volume] 	| Unit       	| Term Source REF (MS:1000005) 	| Term Accession Number (MS:1000005)        	| Sample Name 	|
|-------------	|------------------------------	|------------------------------	|-------------------------------------------	|---------------------------	|------------	|------------------------------	|-------------------------------------------	|-------------	|
|             	| SCIEX instrument model       	| MS                           	| http://purl.obolibrary.org/obo/MS_1000121 	| 10.00 microliter          	| microliter 	| UO                           	| http://purl.obolibrary.org/obo/UO_0000101 	|             	|
|             	| SCIEX instrument model       	| MS                           	| http://purl.obolibrary.org/obo/MS_1000121 	| 5.00 microliter           	| microliter 	| UO                           	| http://purl.obolibrary.org/obo/UO_0000101 	|             	|
|             	| SCIEX instrument model       	| MS                           	| http://purl.obolibrary.org/obo/MS_1000121 	| 5.00 microliter           	| microliter 	| UO                           	| http://purl.obolibrary.org/obo/UO_0000101 	|             	|
|             	| SCIEX instrument model       	| MS                           	| http://purl.obolibrary.org/obo/MS_1000121 	| 5.00 microliter           	| microliter 	| UO                           	| http://purl.obolibrary.org/obo/UO_0000101 	|             	|

11. Click the *Autoformat Table* quick access button without holding <kbd>Ctrl</kbd> to hide all reference columns.
12. Nearly done! 🎉 Navigate to *Templates* in the Navbar and click *Browse database* in the first function block.
    - Here you can find community created workflow annotation templates.
13. Search for and select `Proteomics MassSpec Assay` (name may be issue to change in future updates, pls let us know if there are problems). 
    - You will see a preview of all building blocks which are part of this template.
14. Click *Add template* to add all Building Blocks from the template to your table, which <u>do not exist yet</u>.
15. If there are any Building Blocks which do not fit your experiment you can use the *Remove Building Block* quick access button to remove said Building Block with all related reference (hidden) columns.
16. Adjust the Building Blocks you want to use to describe your experiment as you see fit. Insert values using Swate Term search and add input and output.
17. Thats it for now! If you are interested in more in-depth documentation click [here](/index.html).