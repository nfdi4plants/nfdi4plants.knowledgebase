---
layout: docs
title: Building Block Types
date: 2023-02-15
Author: Kevin Frey
add toc: true
add sidebar: _sidebars\mainSidebar.md
---


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
<img src="./../img/Swate-FreeTextInput-Exp.jpg?v31.01.202" style="height: 200px">
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

| Characteristics [Organism part] 	| Term Source REF (DPBO:0000032) 	| Term Accession Number (DPBO:0000032)  	| Characteristics [age]       	| Term Source REF (DPBO:0000033) 	| Term Accession Number (DPBO:0000033) 	| Characteristics [Developmental Stage] 	| Term Source REF (DPBO:0000070) 	| Term Accession Number (DPBO:0000070) 	|
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

| Protocol Type	| Term Source REF (DPBO:1000161) 	| Term Accession Number (DPBO:1000161)        	|
|------------------------------	| ------------------------------	|-------------------------------------------	|
| growth protocol   | DPBO | http://purl.obolibrary.org/obo/DPBO_1000162	|

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