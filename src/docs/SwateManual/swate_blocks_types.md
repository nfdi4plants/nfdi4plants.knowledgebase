---
layout: docs
title: Building Block Types
date: 2024-04-25
author: 
- name: Kevin Frey
  github: https://github.com/Freymaurer
  orcid: https://orcid.org/0000-0002-8510-6810
- name: Stella Eggels
add toc: true
add sidebar: _sidebars\mainSidebar.md
---


Swate and the ARC feature a set of defined building block types. They can be split into input, descriptive and output building blocks and you can find additional information on the [DataPLANT](https://nfdi4plants.github.io/AnnotationPrinciples/) website and the [ISA-XLSX specification](https://github.com/nfdi4plants/ARC-specification/blob/main/ISA-XLSX.md). Additionally, different protocol columns are available to facilitate submission to endpoint repositories.

## Input Building Block

**Definition:** Each *Annotation Table* **MUST** contain ONE *Input* column, which defines the input of your annotation table. Different input types can be selected, which include *Source name, Sample name, Material, Raw Data File, Derived Data File* and *Image File*.

**Expected Values:** Unique identifier for input.
- **MUST** be unique in the overlaying ARC.
- **MAY** be sample name (think what you would write on the sample in the lab) or file name.
- If the same sample/extract/file is referenced anywhere else in the ARC it **MUST** always be referenced by this identifier.

**Examples:**

<details><summary>Example | Sample pooling.</summary>
<p>

| Input [Sample Name]  	| Parameter [...]  	| Output [Sample Name]  	|
|---	|---	|---	|
| MinimalChlamy1  	| ...  	|  MinimalChlamyHarvested1 	|
| MinimalChlamy2  	| ...  	|  MinimalChlamyHarvested1 	|
| MinimalChlamy3  	| ...  	|  MinimalChlamyHarvested2 	|
| MinimalChlamy4  	| ...  	|  MinimalChlamyHarvested2 	|

- 👀 This example shows a sample pooling, in which two input samples are pooled into one output sample. This can also be done in reverse, where one input can be split into multiple output samples.

</p>
</details>

<details><summary>Example | From physical sample to data file.</summary>
<p>

| Input [Sample Name]  	| Parameter [...]  	| Output [Raw Data File]  	|
|---	|---	|---	|
| MinimalChlamyProteins1  	| ...  	|  minimal1.mzLite 	|
| MinimalChlamyProteins2  	| ...  	|  minimal2.mzLite 	|
| MinimalChlamyProteins3  	| ...  	|  minimal3.mzLite 	|
| MinimalChlamyProteins4  	| ...  	|  minimal4.mzLite 	|

</p>
</details>

<details><summary>Example | From data file to data file.</summary>
<p>

| Input [Raw Data File]  	| Parameter [...]  	| Output [Derived Data File]  	|
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
- These building blocks **MAY** be added multiple times, but each building block combination **MUST** be unique.
- These building blocks **MUST** consist of either <u>three</u> columns, or <u>four</u> columns in case they are created with the unit option. Out of these, one column, the <u>main column</u>, is visible, while the other <u>reference columns</u> are hidden by default. 
<details><summary>Additional in-depth information.</summary>
<p>

#### About Table Headers

- The main column **MUST** start with `Parameter`, `Characteristic`, `Component` or `Factor`. This **MUST** be followed by squared brackets containing a Term name (`[term name]`). 
An exception to this rule are so called *featured building blocks* which are handled just like descriptive building blocks. They have 3 or 4 columns and can be used for relationship-directed term search. An example would be `Protocol Type`.
- The columns of a building block **MUST** always be in the following order: main column, unit column (optional), Term Source REF (TSR), Term Accession Number (TAN).
- Unit column headers **MUST** start with `Unit `.
- The Term Source REF column header **MUST** start with `TSR `, followed by a bracket which **MUST** contain the short term identifier for the main column, if existing.
    - Example: `Parameter [instrument model]` is the main column, then `TSR (MS:1000031)` must be the Term Source REF.
    - Example free text input: If the main column was created with free text input, such as `Characteristic [free text input]`, the Term Source REF **MUST** be created with an empty bracket `TSR ()`.
- The Term Accession Number column header **MUST** follow the same rules as Term Source REF column headers, with the only difference to replace `TSR ` with `TAN `.

#### About Table Body

- The table body for a main column with unit **MUST** have the unit as custom number format. This has to be done in the following format `0,00 "unit term name"`.
- Any building block **MAY** contain an ontology term as value or free text input.
- If a building block has a unit, the unit term name **MUST** be written in the unit column. In this case, unit term source ontology and the unit term identifier must be written in the TSR and TAN column.

| Parameter [temperature] 	| Unit           	| TSR (PATO:0000146) 	| TAN (PATO:0000146)      	|
|-------------------------	|----------------	|--------------------------------	|-------------------------------------------	|
| 12,00 degree Celsius    	| degree Celsius 	| UO                             	| UO:0000027 	|

- If a building block contains an existing ontology term, it **MUST** contain the source ontology name under TSR and the term identifier under TAN. 

| Component [instrument model] 	| TSR (MS:1000031) 	| TAN (MS:1000031)        	|
|------------------------------	|------------------------------	|-------------------------------------------	|
| SCIEX instrument model       	| MS                           	| MS:1000121 	|

- In the case of any free text input the TSR and TAN columns will stay empty.

| Component [instrument model] 	| TSR (MS:1000031) 	| TAN (MS:1000031) 	|
|------------------------------	|------------------------------	|------------------------------------	|
| free text input              	|                	|                      	|


</p>
</details>

<br>

### Parameter

**Definition:** Any workflow parameters defining the exact workflow.  

**Expected Values:** **MAY** be any from text, integer or float numbers with or without unit.

**Examples**

<details><summary>Example | Centrifugation Time.</summary>
<p>

| Parameter [Centrifugation Time] 	| Unit | TSR (NCIT:C178881) 	| TAN (NCIT:C178881)        	|
|------------------------------	| --- | ------------------------------	|-------------------------------------------	|
| 1,00 minute       	| minute |  UO                           	| UO:0000031	|

</p>
</details>

<details><summary>Example | Free text input.</summary>
<p>

| Parameter [Very important unknown parameter] 	| TSR () 	| TAN () 	|
|------------------------------------------------	|--------------------	|--------------------------	|
| very important unknown value                   	|     	|         	|

- 👀 This example shows free text input. If you cannot find any fitting ontology term for either/both building block or value you can simply insert free text input. The above table shows how such input would be inserted into an annotation table.


</p>
</details>

<br>

### Component

**Definition:** Anything physical, which can also be used up during the experiment, e.g. instrument names, software names, and reagents names.

**Expected Values:** **MAY** be any from text, integer or float numbers with or without unit.

**Examples**

<details><summary>Example | Instrument Model.</summary>
<p>

| Component [instrument model] 	| TSR (MS:1000031) 	| TAN (MS:1000031)        	|
|------------------------------	|------------------------------	|-------------------------------------------	|
| SCIEX instrument model       	| MS                           	| MS:1000121 	|

</p>
</details>

<br>

### Factor

**Definition:** While *Parameter* and *Characteristic* will be used to describe so called <u>controlled variables</u>, *Factor* **MUST** be used to describe <u>independent variable</u> of your experiment

> **Example: Effect of fertilizer on plant growth.**
In a study measuring the influence of different quantities of fertilizer on plant growth, the <u>independent</u> variable would be the amount of fertilizer used. The <u>dependent variable</u> would be the growth in height or mass of the plant. The <u>controlled variables</u> would be the type of plant, the type of fertilizer, the amount of sunlight the plant gets, the size of the pots, etc. [(source)](https://en.wikipedia.org/wiki/Dependent_and_independent_variables#Examples)

**Expected Values:** **MAY** be any from text, integer or float numbers with or without unit.

**Examples**

<details><summary>Example | Temperature.</summary>
<p>

| Input [Source Name] 	| Factor [temperature] 	| Parameter [biological replicate] 	| Output [Sample Name] 	|
|-------------	|----------------------	|----------------------------------	|-------------	|
| plant1      	| 10.00 degree Celsius 	| 1                                	| extract1    	|
| plant2      	| 10.00 degree Celsius 	| 1                                	| extract2    	|
| plant3      	| 10.00 degree Celsius 	| 1                                	| extract3    	|
| plant4      	| 28.00 degree Celsius 	| 2                                	| extract4    	|
| plant5      	| 28.00 degree Celsius 	| 2                                	| extract5    	|
| plant6      	| 28.00 degree Celsius 	| 2                                	| extract6    	|

<details><summary>Extended table.</summary>
<p>

| Input [Source Name] 	| Factor [temperature] 	| Unit           	| TSR (PATO:0000146) 	| TAN (PATO:0000146)      	| Parameter [biological replicate] 	| TSR (MS:1001809) 	| TAN (MS:1001809) 	| Output [Sample Name] 	|
|-------------	|----------------------	|----------------	|--------------------------------	|-------------------------------------------	|----------------------------------	|------------------------------	|------------------------------------	|-------------	|
| plant1      	| 10,00 degree Celsius 	| degree Celsius 	| UO                             	| UO:0000027 	| 1                                	|                 	|                       	| extract1    	|
| plant2      	| 10,00 degree Celsius 	| degree Celsius 	| UO                             	| UO:0000027 	| 1                                	|                	|                       	| extract2    	|
| plant3      	| 10,00 degree Celsius 	| degree Celsius 	| UO                             	| UO:0000027 	| 1                                	|                 	|                      	| extract3    	|
| plant4      	| 28,00 degree Celsius 	| degree Celsius 	| UO                             	| UO:0000027 	| 2                                	|                 	|                       	| extract4    	|
| plant5      	| 28,00 degree Celsius 	| degree Celsius 	| UO                             	| UO:0000027 	| 2                                	|                 	|                       	| extract5    	|
| plant6      	| 28,00 degree Celsius 	| degree Celsius 	| UO                             	| UO:0000027 	| 2                                	|                 	|                       	| extract6    	|

</p>
</details>

</p>
</details>

<br>

### Characteristic

**Definition:** Any characteristics describing the source sample.  

**Expected Values:** **MAY** be any from text, integer or float numbers with or without unit.

**Examples**

<details><summary>Example | Plant Growth template.</summary>
<p>

| Characteristic [Organism part] 	| Characteristic [age]       	| Characteristic [plant structure development stage] 	|
|---------------------------------	|-----------------------------	|---------------------------------------	|
| Leaf                            	| 28 days after germination   	| Mature                                	|
| Leaf                            	| 28 days after   germination 	| Mature                                	|
| Leaf                            	| 28 days after germination   	| Mature                                	|
| Leaf                            	| 28 days after   germination 	| Mature                                	|
| Leaf                            	| 28 days after germination   	| Mature                                	|
| Leaf                            	| 28 days after   germination 	| Mature                                	|

<details><summary>Extended table.</summary>
<p>

| Characteristic [Organism part] 	| TSR (DPBO:0000032) 	| TAN (DPBO:0000032)  	| Characteristic [age]       	| TSR (DPBO:0000033) 	| TAN (DPBO:0000033) 	| Characteristic [plant structure development stage] 	| TSR (PO:0009012) 	| TAN (PO:0009012) 	|
|---------------------------------	|------------------------------------	|-------------------------------------------	|-----------------------------	|------------------------------------	|------------------------------------------	|---------------------------------------	|------------------------------------	|------------------------------------------	|
| Leaf                            	| PO                                 	| PO:0025034 	| 28 days after germination   	|                       	|                             	| Mature                                	|                       	|                             	|
| Leaf                            	| PO                                 	| PO:0025034 	| 28 days after   germination 	|                       	|                             	| Mature                                	|                       	|                             	|
| Leaf                            	| PO                                 	| PO:0025034 	| 28 days after germination   	|                      	|                             	| Mature                                	|                       	|                             	|
| Leaf                            	| PO                                 	| PO:0025034 	| 28 days after   germination 	|                       	|                             	| Mature                                	|                       	|                             	|
| Leaf                            	| PO                                 	| PO:0025034 	| 28 days after germination   	|                       	|                             	| Mature                                	|                       	|                             	|
| Leaf                            	| PO                                 	| PO:0025034	| 28 days after   germination 	|                       	|                             	| Mature                                	|                       	|                            	|

</p>
</details>

</p>
</details>

<br>

## Protocol Columns

These columns have been added to better support conversion to endpoint repositories.

### Protocol Type

**Definition:** The type of protocol described with the assay. This building block is handled by Swate as a [descriptive building block](#descriptive-building-blocks).

**Expected Values:** **MUST** be string, in the form of free text or an ontology term.

**Examples**

<details><summary>Example | Growth Protocol.</summary>
<p>

| Protocol Type	| TSR () 	| TAN ()        	|
|------------------------------	| ------------------------------	|-------------------------------------------	|
| growth protocol   | DPBO | DPBO:1000162	|

</p>
</details>
<br>

### Protocol REF

**Definition:** The name of the protocol. This building block comprises only one column.

**Expected Values:** **MUST** be string.
<br>

## Output Building Block

**General Definition:** Each annotation table **MUST** contain exactly one *Output* column.

**Expected Values:** as in [Input](#input-building-block).

**Examples:** as in [Input](#input-building-block).

### Sample Name

**Definition:** Use this building block type to reference any samples your experimental workflow produced.

### Raw Data File

**Definition:** Use this building block type to reference any untransformed and unprocessed data files you have produced.

### Derived Data File

**Definition:** Use this building block type to reference any data files your computational workflow produced.