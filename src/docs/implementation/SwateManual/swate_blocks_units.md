---
layout: docs
title: Using Units with Building Blocks
published: 2023-02-15
Author: Kevin Frey
add toc: true
add sidebar: _sidebars\swateManualSidebar.md
---

<p style="display: flex; justify-content: center">
<img src="./../../img/Swate-UpdateUnit-Exp.jpg?v01.02.22" style="height: 200px">
</p>

1. Choose the building block for which you want to change the unit.
2. Select any number of rows of that building block's main column.
3. Use the search field to search for the wanted unit and click on the unit in the dropdown to select it.
4. Click *Update unit for cells* to update the unit **only** for the selected rows.
5. Update your tables unit references by clicking the *Update Ontology Terms* <a href="./../../img/Swate-Overlay-Exp.jpg" target="_blank">quick access button</a>. 

## Update Unit Example

1. Start by creating a building block `vegetative growth time (TO:0000369)` with the unit `hour (UO:0000032)`.
    - <details><summary>Expanded Table</summary>
        <p>

        | Parameter [vegetative growth   time] 	| Unit 	| Term Source REF (TO:0000369) 	| Term Accession Number (TO:0000369) 	|
        |--------------------------------------	|------	|------------------------------	|------------------------------------	|
        |                                      	|      	|                              	|                                    	|


        </p>
        </details>
    - 👀 You can hold <kbd>Ctrl</kbd> and click the *Autoformat Table* <a href="./../../img/Swate-Overlay-Exp.jpg" target="_blank">quick access button</a> to adjust column widths and unhide all hidden columns.  
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
    - 👀 The unit information for the main column cells can be seen in Excel. Select main column cells → `Home` → `Number` → small expand symbol on the bottom right (<a href="./../../img/Swate-numberFormat-Exp.jpg?v01.02.22" target="_blank">image</a>).
3. Click the *Update Ontology Terms* <a href="./../../img/Swate-Overlay-Exp.jpg" target="_blank">quick access button</a>, to update the reference columns.
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
    - ⚠️ Notize how this only changed the values in the main column **and** the [number format](./../../img/Swate-numberFormat-Exp.jpg?v01.02.22).
        - 👀 Swate bases it's unit reference only on the [number format](./../../img/Swate-numberFormat-Exp.jpg?v01.02.22) of the related cells. You can change this by hand in the following format: `0,00 "unit term name"`. 
6. Click the *Update Ontology Terms* <a href="./../../img/Swate-Overlay-Exp.jpg" target="_blank">quick access button</a>, to update the reference columns.
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

## Add Unit Example

This workflow is especially important when working with [templates](./Docs05-Templates.html), as these will often have columns which are intended to have a unit which is not set for you by the creators. For example a building block `Characteristics [Plant age]` without a unit. Let's assume you want to use such a template.

| Characteristics [Plant age] 	| Term Source REF (DPBO:0000033) 	| Term Accession Number (DPBO:0000033) 	|
|-----------------------------	|------------------------------------	|------------------------------------------	|
|                             	|                                    	|                                          	|

1. Select any number of rows of the `Characteristics [Plant age]` building block to mark it for the next steps.
2. Search for the unit, which fits your experiment, in this case i will use: `day (UO:0000033)`. Select the unit term and click *Update unit for cells*.
    - <details><summary>Expanded Table</summary>
        <p>

        | Characteristics [Plant age] 	| Unit 	| Term Source REF (DPBO:0000033) 	| Term Accession Number (DPBO:0000033) 	|
        |-----------------------------	|------	|------------------------------------	|------------------------------------------	|
        |                             	|      	|                                    	|                                          	|

        </p>
        </details>

    - If you already had values in the main column they will be updated automatically.
        - <details><summary>Expanded Table | Before</summary>
            <p>

            | Characteristics [Plant age] 	| Term Source REF (DPBO:0000033) 	| Term Accession Number (DPBO:0000033) 	|
            |-----------------------------	|------------------------------------	|------------------------------------------	|
            | 10                          	|                                    	|                                          	|
            | 10                          	|                                    	|                                          	|
            | 10                          	|                                    	|                                          	|
            | 10                          	|                                    	|                                          	|

            </p>
            </details>
        - <details><summary>Expanded Table | After</summary>
            <p>

            | Characteristics [Plant age] 	| Unit 	| Term Source REF (DPBO:0000033) 	| Term Accession Number (DPBO:0000033) 	|
            |-----------------------------	|------	|------------------------------------	|------------------------------------------	|
            | 10,00 day                   	|      	|                                    	|                                          	|
            | 10,00 day                 	|      	|                                    	|                                          	|
            | 10,00 day                   	|      	|                                    	|                                          	|
            | 10,00 day                 	|      	|                                    	|                                          	|

            </p>
            </details>
    - ⚠️ Notize how this only changed the values in the main column **and** the [number format](./../../img/Swate-numberFormat-Exp.jpg?v01.02.22).

3. Click the *Update Ontology Terms* <a href="./../../img/Swate-Overlay-Exp.jpg" target="_blank">quick access button</a>, to update the reference columns.
    - <details><summary>Expanded Table </summary>
        <p>

        | Characteristics [Plant age] 	| Unit 	| Term Source REF (DPBO:0000033) 	| Term Accession Number (DPBO:0000033)  	|
        |-----------------------------	|------	|------------------------------------	|-------------------------------------------	|
        | 10,00 day                   	| day  	| UO                                 	| http://purl.obolibrary.org/obo/UO_0000033 	|
        | 10,00   day                 	| day  	| UO                                 	| http://purl.obolibrary.org/obo/UO_0000033 	|
        | 10,00 day                   	| day  	| UO                                 	| http://purl.obolibrary.org/obo/UO_0000033 	|
        | 10,00   day                 	| day  	| UO                                 	| http://purl.obolibrary.org/obo/UO_0000033 	|

        </p>
        </details>

    - Done! 🎉

<br>