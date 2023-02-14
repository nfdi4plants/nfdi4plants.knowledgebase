---
layout: docs
title: Building Blocks
published: 2022-09-19
Author: Kevin Frey
add toc: true
add sidebar: _sidebars\mainSidebar.md
---

Building Blocks are necessary to sustain ontology information in an [annotation table](https://github.com/nfdi4plants/Swate/wiki/Docs02-Annotation-Table) and are designed to follow the core idea behind the [ISA-Tab](https://isa-specs.readthedocs.io/en/latest/isatab.html) format, altough simplified. Any Swate annotation table can be converted to ISA-Json.

# Usage

1. Navigate to the *Building Blocks* tab in the <a href="./../../images/UserDocs/Swate-Overlay-Exp.jpg" target="_blank">navbar</a>.
2. This page shows two functions, one to add new building blocks and one to update existing building blocks with a unit.

## Adding a Building Block

<p style="display: flex; justify-content: center">
<img src="./../../images/UserDocs/Swate-AddBuildingBlock-Exp.jpg?v31.01.22" style="height: 300px">
</p>

1. Choose the type of building block you want to add (A). For more information on building block types, click [here](#building-block-types).
2. If you chose a [descriptive building block](#descriptive-building-blocks) type, use searchfield (B) to [search for a Ontology Term](/docs/UserDocs/docs04-Ontology-Term-Search.html). This term together with your building block type describes your workflow.
    - Example 1: `Component [instrument model]` will describe any mass spectrometry instrument model used in your workflow ([source](http://www.ontobee.org/ontology/MS?iri=http://purl.obolibrary.org/obo/MS_1000031)).
    - <details><summary>Example 1 | Table</summary>
        <p>

        | Component [instrument model] 	| Term Source REF (MS:1000031) 	| Term Accession Number (MS:1000031) 	|
        |------------------------------	|------------------------------	|------------------------------------	|

        </p>
        </details>
    - Example 2 with unit: If you want to add a building block with a unit, check box (C) and use searchfield (D) to look for a fitting unit term. `Factor [temperature]` and `degree Celsius` as unit.
    - <details><summary>Example 2 with unit | Table</summary>
        <p>

        | Factor [temperature] 	| Unit 	| Term Source REF (PATO:0000146) 	| Term Accession Number (PATO:0000146) 	|
        |----------------------	|------	|--------------------------------	|--------------------------------------	|

        </p>
        </details>
    - If you cannot find a fitting term, you can use the [Advanced Term Search](/docs/UserDocs/Docs07-Advanced-Term-Search.html) for both searchfield (B) and (D) with the blue links above the *Add building block*-button.
    - If you still cannot find a fitting term, you can write an issue to request a Term [here](https://github.com/nfdi4plants/nfdi4plants_ontology/issues/new/choose) **OR** use free text input.
3. Click *Add building block* to insert the building block in an existing [Annotation Table](docs/UserDocs/docs02-Annotation-Table.html). The new building block will be added to the right of any currently selected column of the table. 
    - 👀 Swate will automatically skip any reference columns.
4. Any input or output building block will only add a <u>single</u> column, any descriptive building block will add <u>three</u> columns or <u>four</u> column if it is created with a unit. Only the main column column will be visible by default, all other reference columns will be hidden.
    - 👀 You can hold <kbd>Ctrl</kbd> and click the *Autoformat Table* <a href="./../../images/UserDocs/Swate-Overlay-Exp.jpg" target="_blank">quick access button</a> to adjust column widths and unhide all hidden columns.   

<br>

## Adding/Changing Unit of existing Building Block

<p style="display: flex; justify-content: center">
<img src="./../../images/UserDocs/Swate-UpdateUnit-Exp.jpg?v01.02.22" style="height: 200px">
</p>

1. Choose the building block for which you want to change the unit.
2. Select any number of rows of that building block's main column.
3. Use the searchfield to search for the wanted unit and click on the unit in the dropdown to select it.
4. Click *Update unit for cells* to update the unit **only** for the selected rows.
5. Update your tables unit references by clicking the *Update Ontology Terms* <a href="./../../images/UserDocs/Swate-Overlay-Exp.jpg" target="_blank">quick access button</a>. 

### Update Unit Example

1. Start by creating a building block `vegetative growth time (TO:0000369)` with the unit `hour (UO:0000032)`.
    - <details><summary>Expanded Table</summary>
        <p>

        | Parameter [vegetative growth   time] 	| Unit 	| Term Source REF (TO:0000369) 	| Term Accession Number (TO:0000369) 	|
        |--------------------------------------	|------	|------------------------------	|------------------------------------	|
        |                                      	|      	|                              	|                                    	|


        </p>
        </details>
    - 👀 You can hold <kbd>Ctrl</kbd> and click the *Autoformat Table* <a href="./../../images/UserDocs/Swate-Overlay-Exp.jpg" target="_blank">quick access button</a> to adjust column widths and unhide all hidden columns.  
2. Create more rows for the table and fill the main column (`Parameter [vegetative growth time]`) with some data.
    - <details><summary>Expanded Table</summary>
        <p>

        | Parameter [vegetative growth   time] 	| Unit 	| Term Source REF (TO:0000369) 	| Term Accession Number (TO:0000369) 	|
        |--------------------------------------	|------	|------------------------------	|------------------------------------	|
        | 10,00 hour                           	|      	|                              	|                                    	|
        | 10,00   hour                         	|      	|                              	|                                    	|
        | 10,00 hour                           	|      	|                              	|                                    	|
        | 10,00   hour                         	|      	|                              	|                                    	|
        | 10,00 hour                           	|      	|                              	|                                    	|
        | 10,00   hour                         	|      	|                              	|                                    	|
        | 10,00 hour                           	|      	|                              	|                                    	|
        | 10,00   hour                         	|      	|                              	|                                    	|

        </p>
        </details>
    - When typing numbers into these cells, Excel will add the unit to the number values.
    - 👀 The unit information for the main column cells can be seen in Excel. Select main column cells → `Home` → `Number` → small expand symbol on the bottom right (<a href="./../../images/UserDocs/Swate-numberFormat-Exp.jpg?v01.02.22" target="_blank">image</a>).
3. Click the *Update Ontology Terms* <a href="./../../images/UserDocs/Swate-Overlay-Exp.jpg" target="_blank">quick access button</a>, to update the reference columns.
    - <details><summary>Expanded Table</summary>
        <p>

        | Parameter [vegetative growth   time] 	| Unit 	| Term Source REF (TO:0000369) 	| Term Accession Number (TO:0000369)        	|
        |--------------------------------------	|------	|------------------------------	|-------------------------------------------	|
        | 10,00 hour                           	| hour 	| UO                           	| http://purl.obolibrary.org/obo/UO_0000032 	|
        | 10,00   hour                         	| hour 	| UO                           	| http://purl.obolibrary.org/obo/UO_0000032 	|
        | 10,00 hour                           	| hour 	| UO                           	| http://purl.obolibrary.org/obo/UO_0000032 	|
        | 10,00   hour                         	| hour 	| UO                           	| http://purl.obolibrary.org/obo/UO_0000032 	|
        | 10,00 hour                           	| hour 	| UO                           	| http://purl.obolibrary.org/obo/UO_0000032 	|
        | 10,00   hour                         	| hour 	| UO                           	| http://purl.obolibrary.org/obo/UO_0000032 	|
        | 10,00 hour                           	| hour 	| UO                           	| http://purl.obolibrary.org/obo/UO_0000032 	|
        | 10,00   hour                         	| hour 	| UO                           	| http://purl.obolibrary.org/obo/UO_0000032 	|

        </p>
        </details>
4. Select some or all rows of the main column `Parameter [vegetative growth time]` to mark them for the upcoming unit update. In this case i will select all but the first row.
5. Search for a new unit, in this case `day (UO:0000033)`, select it and click *Update unit for cells*.
    - <details><summary>Expanded Table</summary>
        <p>

        | Parameter [vegetative growth   time] 	| Unit 	| Term Source REF (TO:0000369) 	| Term Accession Number (TO:0000369)        	|
        |--------------------------------------	|------	|------------------------------	|-------------------------------------------	|
        | 10,00 hour                           	| hour 	| UO                           	| http://purl.obolibrary.org/obo/UO_0000032 	|
        | 10,00   day                          	| hour 	| UO                           	| http://purl.obolibrary.org/obo/UO_0000032 	|
        | 10,00 day                            	| hour 	| UO                           	| http://purl.obolibrary.org/obo/UO_0000032 	|
        | 10,00   day                          	| hour 	| UO                           	| http://purl.obolibrary.org/obo/UO_0000032 	|
        | 10,00 day                            	| hour 	| UO                           	| http://purl.obolibrary.org/obo/UO_0000032 	|
        | 10,00   day                          	| hour 	| UO                           	| http://purl.obolibrary.org/obo/UO_0000032 	|
        | 10,00 day                            	| hour 	| UO                           	| http://purl.obolibrary.org/obo/UO_0000032 	|
        | 10,00   day                          	| hour 	| UO                           	| http://purl.obolibrary.org/obo/UO_0000032 	|

        </p>
        </details>
    - ⚠️ Notize how this only changed the values in the main column **and** the [number format](/images/UserDocs/Swate-numberFormat-Exp.jpg?v01.02.22).
        - 👀 Swate bases it's unit reference only on the [number format](/images/UserDocs/Swate-numberFormat-Exp.jpg?v01.02.22) of the related cells. You can change this by hand in the following format: `0,00 "unit term name"`. 
6. Click the *Update Ontology Terms* <a href="./../../images/UserDocs/Swate-Overlay-Exp.jpg" target="_blank">quick access button</a>, to update the reference columns.
    - <details><summary>Expanded Table</summary>
        <p>

        | Parameter [vegetative growth   time] 	| Unit 	| Term Source REF (TO:0000369) 	| Term Accession Number (TO:0000369)        	|
        |--------------------------------------	|------	|------------------------------	|-------------------------------------------	|
        | 10,00 hour                           	| hour 	| UO                           	| http://purl.obolibrary.org/obo/UO_0000032 	|
        | 10,00   day                          	| day  	| UO                           	| http://purl.obolibrary.org/obo/UO_0000033 	|
        | 10,00 day                            	| day  	| UO                           	| http://purl.obolibrary.org/obo/UO_0000033 	|
        | 10,00   day                          	| day  	| UO                           	| http://purl.obolibrary.org/obo/UO_0000033 	|
        | 10,00 day                            	| day  	| UO                           	| http://purl.obolibrary.org/obo/UO_0000033 	|
        | 10,00   day                          	| day  	| UO                           	| http://purl.obolibrary.org/obo/UO_0000033 	|
        | 10,00 day                            	| day  	| UO                           	| http://purl.obolibrary.org/obo/UO_0000033 	|
        | 10,00   day                          	| day  	| UO                           	| http://purl.obolibrary.org/obo/UO_0000033 	|

        </p>
        </details>
    - Thats it! 🎉 The units in this abstract example are updated!

### Add Unit Example

This workflow is especially important when working with [templates](/docs/UserDocs/Docs05-Templates.html), as these will often have columns which are intended to have a unit which is not set for you by the creators. For example a building block `Characteristics [Plant age]` without a unit. Let's assume you want to use such a template.

| Characteristics [Plant age] 	| Term Source REF (NFDI4PSO:0000033) 	| Term Accession Number (NFDI4PSO:0000033) 	|
|-----------------------------	|------------------------------------	|------------------------------------------	|
|                             	|                                    	|                                          	|

1. Select any number of rows of the `Characteristics [Plant age]` building block to mark it for the next steps.
2. Search for the unit, which fits your experiment, in this case i will use: `day (UO:0000033)`. Select the unit term and click *Update unit for cells*.
    - <details><summary>Expanded Table</summary>
        <p>

        | Characteristics [Plant age] 	| Unit 	| Term Source REF (NFDI4PSO:0000033) 	| Term Accession Number (NFDI4PSO:0000033) 	|
        |-----------------------------	|------	|------------------------------------	|------------------------------------------	|
        |                             	|      	|                                    	|                                          	|

        </p>
        </details>

    - If you already had values in the main column they will be updated automatically.
        - <details><summary>Expanded Table | Before</summary>
            <p>

            | Characteristics [Plant age] 	| Term Source REF (NFDI4PSO:0000033) 	| Term Accession Number (NFDI4PSO:0000033) 	|
            |-----------------------------	|------------------------------------	|------------------------------------------	|
            | 10                          	|                                    	|                                          	|
            | 10                          	|                                    	|                                          	|
            | 10                          	|                                    	|                                          	|
            | 10                          	|                                    	|                                          	|

            </p>
            </details>
        - <details><summary>Expanded Table | After</summary>
            <p>

            | Characteristics [Plant age] 	| Unit 	| Term Source REF (NFDI4PSO:0000033) 	| Term Accession Number (NFDI4PSO:0000033) 	|
            |-----------------------------	|------	|------------------------------------	|------------------------------------------	|
            | 10,00 day                   	|      	|                                    	|                                          	|
            | 10,00 day                 	|      	|                                    	|                                          	|
            | 10,00 day                   	|      	|                                    	|                                          	|
            | 10,00 day                 	|      	|                                    	|                                          	|

            </p>
            </details>
    - ⚠️ Notize how this only changed the values in the main column **and** the [number format](/images/UserDocs/Swate-numberFormat-Exp.jpg?v01.02.22).

3. Click the *Update Ontology Terms* <a href="./../../images/UserDocs/Swate-Overlay-Exp.jpg" target="_blank">quick access button</a>, to update the reference columns.
    - <details><summary>Expanded Table </summary>
        <p>

        | Characteristics [Plant age] 	| Unit 	| Term Source REF (NFDI4PSO:0000033) 	| Term Accession Number (NFDI4PSO:0000033)  	|
        |-----------------------------	|------	|------------------------------------	|-------------------------------------------	|
        | 10,00 day                   	| day  	| UO                                 	| http://purl.obolibrary.org/obo/UO_0000033 	|
        | 10,00   day                 	| day  	| UO                                 	| http://purl.obolibrary.org/obo/UO_0000033 	|
        | 10,00 day                   	| day  	| UO                                 	| http://purl.obolibrary.org/obo/UO_0000033 	|
        | 10,00   day                 	| day  	| UO                                 	| http://purl.obolibrary.org/obo/UO_0000033 	|

        </p>
        </details>

    - Done! 🎉

<br>

# Building Block Types

Swate and the ARC feature a set of six defined Building Block types. They can be split into input, descriptive and output Building Blocks and you can find additional information on the [nfdi4plant](https://nfdi4plants.github.io/AnnotationPrinciples/) website.

## Input Building Block/Source Name

**Definition:** This is the only input column type and each *Annotation Table* **MUST** contain this column once. 

**Expected Values:** Unique identifier for input.
- **MUST** be unique in the overlaying ARC.
- **MAY** be sample name (think what you would write on the sample in the lab) or file name.
- If the same sample/extract/file is referenced anywhere else in the ARC it **MUST** always be referenced by this identifier.

**Examples:**

<details><summary>Example | Sample pooling.</summary>
<p>

| Source Name  	| Parameter [...]  	| Sample Name  	|
|---	|---	|---	|
| MinimalChlamy1  	| ...  	|  MinimalChlamyHarvested1 	|
| MinimalChlamy2  	| ...  	|  MinimalChlamyHarvested1 	|
| MinimalChlamy3  	| ...  	|  MinimalChlamyHarvested2 	|
| MinimalChlamy4  	| ...  	|  MinimalChlamyHarvested2 	|

- 👀 This example shows a sample pooling, in which two source samples are pooled into one output sample. This can also be done in reverse, where one source can be split into multiple output samples.

</p>
</details>

<details><summary>Example | From physical sample to data file.</summary>
<p>

| Source Name  	| Parameter [...]  	| Data File Name  	|
|---	|---	|---	|
| MinimalChlamyProteins1  	| ...  	|  minimal1.mzLite 	|
| MinimalChlamyProteins2  	| ...  	|  minimal2.mzLite 	|
| MinimalChlamyProteins3  	| ...  	|  minimal3.mzLite 	|
| MinimalChlamyProteins4  	| ...  	|  minimal4.mzLite 	|

</p>
</details>

<details><summary>Example | From data file to data file.</summary>
<p>

| Source Name  	| Parameter [...]  	| Data File Name  	|
|---	|---	|---	|
|  minimal1.mzLite  	| ...  	|  minimal1.prot 	|
|  minimal2.mzLite  	| ...  	|  minimal2.prot 	|
|  minimal3.mzLite  	| ...  	|  minimal3.prot 	|
|  minimal4.mzLite  	| ...  	|  minimal4.prot 	|

</p>
</details>

<br>

## Descriptive Building Blocks

**General Definition:** 
- These Building Blocks **MAY** be added multiple times, but each Building Block combination **MUST** be unique.
- These Building Blocks **MUST** concist of either <u>three</u> columns, or <u>four</u> columns in case they are created with the unit option. 
    - Of which one column, the <u>main column</u> is visible, while the othere <u>reference columns</u> are hidden by default. 
<details><summary>Additional in-depth information.</summary>
<p>

#### About Table Headers

- The main column **MUST** start with `Parameter `, `Characteristic `, `Component ` or `Factor `. This **MUST** be followed by squared brackets containing a Term name (`[term name]`). 
An exception to this rule are so called *featured building blocks* which are handled just like descriptive building blocks. They have 3 or 4 columns and can be used for relationship-directed term search. An example would be `Protocol Type`.
    - In the abstract case we have for example `Parameter` and `Factor` with the same Term, only the reference columns would not be unique, in this case we add a id to the reference columns, as excel does not allow non-unique column headers: Add the `#number` to all reference column headers, such as: `Component [instrument model]`, `Term Source REF (MS:1000031#2)`, `Term Accession Number (MS:1000031#2)`. `#number` must be an positive integer.
- The columns of a building block **MUST** always be in the following order: main column, unit column (optional), Term Source REF, Term Accession Number.
- Unit column headers **MUST** start with `Unit ` and be made unique with a `(#number)`, such as `Unit`, `Unit (#1)`, `Unit (#2)`, `Unit (#42)`. They **MAY** use ascending numbers. `#number` must be an positive integer.
- The Term Source REF column header **MUST** start with `Term Source REF `, followed by a bracket which **MUST** contain the short Term identifier for the main column, if existing.
    - Example: `Parameter [instrument model]` is the main column, then `Term Source REF (MS:1000031)` must be the Term Source REF.
    - Example free text input. If the main column was created with free text input, such as `Characteristics [free text input]`, the Term Source REF **MUST** be created with an empty bracket `Term Source REF ()`. In this case, headers **MUST** be made unique, by adding `#number` in the empty brackets. For example `Parameter [free text input]`, `Term Source REF ()`, .. and `Parameter [another one]`, `Term Source REF (#2)`, .. .
- The Term Accession Number column header **MUST** follow the same rules as Term Source REF column headers, with the only difference to replace `Term Source REF ` with `Term Accession Number `.

#### About Table Body

- The table body for a main column with unit **MUST** have the unit as custom number format. This has to be done in the following format `0,00 "unit term name"`.
- Any building block **MAY** contain a Term as value or free text input.
- If a building block has an unit, the unit term name **MUST** be written in the unit column. In this case unit term source ontology and `purl.obolibrary.org` link must be written in Term Source REF and Term Accession Number.

| Parameter [temperature] 	| Unit           	| Term Source REF (PATO:0000146) 	| Term Accession Number (PATO:0000146)      	|
|-------------------------	|----------------	|--------------------------------	|-------------------------------------------	|
| 12,00 degree Celsius    	| degree Celsius 	| UO                             	| http://purl.obolibrary.org/obo/UO_0000027 	|

- If a building block contains an existing Term it **MUST** contain the source ontology name under Term Source REF and a `purl.obolibrary.org` link under Term Accession Number. The link must be created, such as `http://purl.obolibrary.org/obo/{ontology identifier}`, where `{ontology identifier}` **MUST** be replaced with the term unique identifier, with an underscore instead of a colon.
    - Example: `SCIEX instrument model (MS:1000121)` would result in `http://purl.obolibrary.org/obo/MS_1000121`
    - Full example:

| Parameter [instrument model] 	| Term Source REF (MS:1000031) 	| Term Accession Number (MS:1000031)        	|
|------------------------------	|------------------------------	|-------------------------------------------	|
| SCIEX instrument model       	| MS                           	| http://purl.obolibrary.org/obo/MS_1000121 	|

- In the case of any free text input all missing information **MUST** be filled with `user-specific`. Example: 

| Parameter [instrument model] 	| Term Source REF (MS:1000031) 	| Term Accession Number (MS:1000031) 	|
|------------------------------	|------------------------------	|------------------------------------	|
| free text input              	| user-specific                	| user-specific                      	|

- Example with unit free text input:

| Parameter [day light exposure] 	| Unit    	| Term Source REF (PECO:0007163) 	| Term Accession Number (PECO:0007163) 	|
|--------------------------------	|---------	|--------------------------------	|--------------------------------------	|
| 12,00 bananas                  	| bananas 	| user-specific                  	| user-specific                        	|


</p>
</details>

<br>

### Parameter

**Definition:** Any workflow parameters defining the exact workflow.  

**Expected Values:** **MAY** be any from text, integer or float numbers with or without unit.

**Examples**

Centrifugation Time

<details><summary>Example | Centrifugation Time.</summary>
<p>

| Parameter [Centrifugation Time] 	| Unit | Term Source REF (NCIT:C178881) 	| Term Accession Number (NCIT:C178881)        	|
|------------------------------	| --- | ------------------------------	|-------------------------------------------	|
| 1,00 minute       	| minute |  UO                           	| http://purl.obolibrary.org/obo/UO_0000031	|

</p>
</details>

<details><summary>Example | Free text input.</summary>
<p>

| Parameter [Very important unknown parameter] 	| Term Source REF () 	| Term Accession Number () 	|
|------------------------------------------------	|--------------------	|--------------------------	|
| very important unknown value                   	| user-specific      	| user-specific            	|

- 👀 This example shows free text input. If you cannot find any fitting Ontology Term for either/both Building Block or value you can simply insert free text input. The above table shows how such input would be inserted into an annotation table.
- If you use *Add Building Block* or/and *Term search* to insert your free text input, Swate will handle all formatting for you.

<p style="display: flex; justify-content: center">
<img src="./../../images/UserDocs/Swate-FreeTextInput-Exp.jpg?v31.01.202" style="height: 200px">
</p>

</p>
</details>

<br>

### Component

**Definition:** Aynthing physical, which can also be used up during the experiment, e.g. instrument names, software names, and reagents names.

**Expected Values:** **MAY** be any from text, integer or float numbers with or without unit.

**Examples**

<details><summary>Example | Instrument Model.</summary>
<p>

| Component [instrument model] 	| Term Source REF (MS:1000031) 	| Term Accession Number (MS:1000031)        	|
|------------------------------	|------------------------------	|-------------------------------------------	|
| SCIEX instrument model       	| MS                           	| http://purl.obolibrary.org/obo/MS_1000121 	|

</p>
</details>

<br>

### Factor

**Definition:** While *Parameter* and *Characteristic* will be used to describe so called <u>controlled variables</u>, *Factor* **MUST** be used to describe <u>independent variable</u> of your experiment

> **Example: Effect of fertilizer on plant growths.**
In a study measuring the influence of different quantities of fertilizer on plant growth, the <u>independent</u> variable would be the amount of fertilizer used. The <u>dependent variable</u> would be the growth in height or mass of the plant. The <u>controlled variables</u> would be the type of plant, the type of fertilizer, the amount of sunlight the plant gets, the size of the pots, etc. [(source)](https://en.wikipedia.org/wiki/Dependent_and_independent_variables#Examples)

**Expected Values:** **MAY** be any from text, integer or float numbers with or without unit.

**Examples**

<details><summary>Example | Temperature.</summary>
<p>

| Source Name 	| Factor [temperature] 	| Parameter [biological replicate] 	| Sample Name 	|
|-------------	|----------------------	|----------------------------------	|-------------	|
| plant1      	| 10.00 degree Celsius 	| 1                                	| extract1    	|
| plant2      	| 10.00 degree Celsius 	| 1                                	| extract2    	|
| plant3      	| 10.00 degree Celsius 	| 1                                	| extract3    	|
| plant4      	| 28.00 degree Celsius 	| 2                                	| extract4    	|
| plant5      	| 28.00 degree Celsius 	| 2                                	| extract5    	|
| plant6      	| 28.00 degree Celsius 	| 2                                	| extract6    	|

<details><summary>Extended table.</summary>
<p>

| Source Name 	| Factor [temperature] 	| Unit           	| Term Source REF (PATO:0000146) 	| Term Accession Number (PATO:0000146)      	| Parameter [biological replicate] 	| Term Source REF (MS:1001809) 	| Term Accession Number (MS:1001809) 	| Sample Name 	|
|-------------	|----------------------	|----------------	|--------------------------------	|-------------------------------------------	|----------------------------------	|------------------------------	|------------------------------------	|-------------	|
| plant1      	| 10,00 degree Celsius 	| degree Celsius 	| UO                             	| http://purl.obolibrary.org/obo/UO_0000027 	| 1                                	| user-specific                	| user-specific                      	| extract1    	|
| plant2      	| 10,00 degree Celsius 	| degree Celsius 	| UO                             	| http://purl.obolibrary.org/obo/UO_0000027 	| 1                                	| user-specific                	| user-specific                      	| extract2    	|
| plant3      	| 10,00 degree Celsius 	| degree Celsius 	| UO                             	| http://purl.obolibrary.org/obo/UO_0000027 	| 1                                	| user-specific                	| user-specific                      	| extract3    	|
| plant4      	| 28,00 degree Celsius 	| degree Celsius 	| UO                             	| http://purl.obolibrary.org/obo/UO_0000027 	| 2                                	| user-specific                	| user-specific                      	| extract4    	|
| plant5      	| 28,00 degree Celsius 	| degree Celsius 	| UO                             	| http://purl.obolibrary.org/obo/UO_0000027 	| 2                                	| user-specific                	| user-specific                      	| extract5    	|
| plant6      	| 28,00 degree Celsius 	| degree Celsius 	| UO                             	| http://purl.obolibrary.org/obo/UO_0000027 	| 2                                	| user-specific                	| user-specific                      	| extract6    	|

</p>
</details>

</p>
</details>

<br>

### Characteristic

**Definition:** Any workflow parameters describing the source sample.  

**Expected Values:** **MAY** be any from text, integer or float numbers with or without unit.

**Examples**

<details><summary>Example | Plant Growth template.</summary>
<p>

| Characteristics [Organism part] 	| Characteristics [age]       	| Characteristics [Developmental Stage] 	|
|---------------------------------	|-----------------------------	|---------------------------------------	|
| Leaf                            	| 28 days after germination   	| Mature                                	|
| Leaf                            	| 28 days after   germination 	| Mature                                	|
| Leaf                            	| 28 days after germination   	| Mature                                	|
| Leaf                            	| 28 days after   germination 	| Mature                                	|
| Leaf                            	| 28 days after germination   	| Mature                                	|
| Leaf                            	| 28 days after   germination 	| Mature                                	|

<details><summary>Extended table.</summary>
<p>

| Characteristics [Organism part] 	| Term Source REF (NFDI4PSO:0000032) 	| Term Accession Number (NFDI4PSO:0000032)  	| Characteristics [age]       	| Term Source REF (NFDI4PSO:0000033) 	| Term Accession Number (NFDI4PSO:0000033) 	| Characteristics [Developmental Stage] 	| Term Source REF (NFDI4PSO:0000070) 	| Term Accession Number (NFDI4PSO:0000070) 	|
|---------------------------------	|------------------------------------	|-------------------------------------------	|-----------------------------	|------------------------------------	|------------------------------------------	|---------------------------------------	|------------------------------------	|------------------------------------------	|
| Leaf                            	| PO                                 	| http://purl.obolibrary.org/obo/PO_0025034 	| 28 days after germination   	| user-specific                      	| user-specific                            	| Mature                                	| user-specific                      	| user-specific                            	|
| Leaf                            	| PO                                 	| http://purl.obolibrary.org/obo/PO_0025034 	| 28 days after   germination 	| user-specific                      	| user-specific                            	| Mature                                	| user-specific                      	| user-specific                            	|
| Leaf                            	| PO                                 	| http://purl.obolibrary.org/obo/PO_0025034 	| 28 days after germination   	| user-specific                      	| user-specific                            	| Mature                                	| user-specific                      	| user-specific                            	|
| Leaf                            	| PO                                 	| http://purl.obolibrary.org/obo/PO_0025034 	| 28 days after   germination 	| user-specific                      	| user-specific                            	| Mature                                	| user-specific                      	| user-specific                            	|
| Leaf                            	| PO                                 	| http://purl.obolibrary.org/obo/PO_0025034 	| 28 days after germination   	| user-specific                      	| user-specific                            	| Mature                                	| user-specific                      	| user-specific                            	|
| Leaf                            	| PO                                 	| http://purl.obolibrary.org/obo/PO_0025034 	| 28 days after   germination 	| user-specific                      	| user-specific                            	| Mature                                	| user-specific                      	| user-specific                            	|

</p>
</details>

</p>
</details>

<br>

## Protocol Columns

These columns have been added to better support conversion to endpoint repositories.

### Protocol Type

**Definition:** The type of protocol described with the assay. This building block is handled by Swate as a [descriptive building block](#descriptive-building-blocks).

**Expected Values:** **MUST** be a *Protocol Type* child term.

**Examples**

<details><summary>Example | Growth Protocol.</summary>
<p>

| Protocol Type	| Term Source REF (NFDI4PSO:1000161) 	| Term Accession Number (NFDI4PSO:1000161)        	|
|------------------------------	| ------------------------------	|-------------------------------------------	|
| growth protocol   | NFDI4PSO | http://purl.obolibrary.org/obo/NFDI4PSO_1000162	|

</p>
</details>
<br>

### Protocol REF

**Definition:** The name of the protocol. By default the name is inferred by the name of the Excel worksheet. To circumvent some limitations (lenght, etc.) we also offer this column as alternative. This building block comprises only one column.

**Expected Values:** **MUST** be string.

## Output Building Blocks

**General Definition:** Each *Annotation Table* **MUST** contain exactly one output column.

**Expected Values:** as in [Source Name](#input-building-blocksource-name).

**Examples:** as in [Source Name](#input-building-blocksource-name).

### Sample Name

**Definition:** Use this building block type to reference any samples your experimental workflow produced.

### Raw Data File

**Definition:** Use this building block type to reference any untransformed and unprocessed samples you have produced.

### Derived Data File

**Definition:** Use this building block type to reference any samples your computational workflow produced.