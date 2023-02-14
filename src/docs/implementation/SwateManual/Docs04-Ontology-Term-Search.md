---
layout: docs
title: Ontology Term Search
published: 2022-09-19
Author: Kevin Frey
add toc: false
add sidebar: _sidebars\mainSidebar.md
---

<br>

Altough i will mostly talk about the Ontology term search on this page, it will also feature useful information about term search related to the *Building Blocks* page. Such general applicable information will be listed under [General](#General).

Ontologies are controlled vocabularies of Terms. Most of these Terms feature a name, a unique identifier and a description. We use these Ontology Terms for workflow description to utilize the benefits of a unified language in terms of machine-readability and reproducibility, following [FAIR principles](https://www.go-fair.org/fair-principles/).

1. [General](#General)
2. [Term Insert](#Term-Insert)
3. [Relationship-Directed Search](#relationship-directed-search)
    1. [Theory](#Relationship-Directed-Search-Theory)
    2. [Usage](#Relationship-Directed-Search-Usage)

# General

You can find ontology term search fields on the *Building Blocks* and on the *Terms* tab in the <a href="./../../images/UserDocs/Swate-Overlay-Exp.jpg" target="_blank">navbar</a>.

**Features:**
- Access to the SwateDB with a list of established, [external ontologies](https://github.com/nfdi4plants/nfdi4plants_ontology/blob/main/ext_ontologies.include) deemed fit for use in plant science. In addition we feature our very own ontology [nfdi4pso](https://github.com/nfdi4plants/nfdi4plants_ontology/blob/main/nfdi4plants_ontology.obo), which we extend with missing but necessary terms.
    - External ontologies are taken from the [obofoundry](https://obofoundry.org) and updated regularly.
    - 👀 You can always ask us to add existing terms/ontologies or even new terms to our database. If you wish to do so, you can fill out an issue [here](https://github.com/nfdi4plants/nfdi4plants_ontology/issues/new/choose).
- Search through database with autocomplete search on term names.
- If you already know what you are searching for, you can also type in the term unique identifier (example: `MS:1000031`). 
    - To trigger this search the input must match the [Swate Regex pattern](http://regexstorm.net/tester?p=%5b%5cw%5d%2b%3f%3a%5b%5cd%5d%2b&i=MS%3a1000031%0d%0aNFDI4PSO%3a1000161%0d%0a) for term accessions.
- To execute the search query on any search text again after closing the dropdown with the search results <kbd>double click</kbd> into the search field.
- You can also use the advanced term search for a more refined search approach. Just click on the blue link close to the related search field.

<br>

# Term Insert

<br>

<p style="display: flex; justify-content: center">
<img src="./../../images/UserDocs/Swate-TermInsert-Exp.jpg?v01.02.22" style="height: 300px">
</p>

You can find this function on the *Terms* tab in the <a href="./../../images/UserDocs/Swate-Overlay-Exp.jpg" target="_blank">navbar</a>. Use this function to insert terms in an [ISA-Tab conform way](https://isa-specs.readthedocs.io/en/latest/isatab.html#ontology-annotations), for example for Swate building blocks.

- Type in the search field to trigger the auto-complete function and find terms. Select the term you want or follow the information under [General](#General) for more information.
- You can now insert the chosen term anywhere in Excel, not only inside of a Swate [annotation table](/docs/UserDocs/Docs02-Annotation-Table.html).
    - Terms will be added to all selected rows in the format:

        `| term name | term source ontology | purl.obolibrary.org link for term |`
        
        This always done for the next <u>three</u> Excel columns including the selected column.

<p style="display: flex; justify-content: center">
<img src="./../../images/UserDocs/Swate-TermInsert2-Exp.jpg?v01.02.22" style="height: 100px">
</p>

- You can also click on the *Copy to Clipboard*-button next to the insert term-button. This will copy the term information (name, source ontology, purl link) to your clipboard and you can paste it into Excel with <kbd>Ctrl</kbd> + <kbd>V</kbd>. This will enable you to paste the information spread over <u>three</u> rows instead of columns. This works only for a single column.

<br>

# Relationship-Directed Search

## Relationship-Directed Search Theory

Ontology terms contain different types of relationships between each other. For example `is_a`, `part_of`, `xref` relationships. Swate and the SwateDB utilize these relationships to provide the user with a predefined set of terms as most likely search requests. 

Let's look at this with an example:

| Source Name | Component [instrument model] | Term Source REF (MS:1000031) | Term Accession Number (MS:1000031) | Sample Name |
|-------------|------------------------------|------------------------------|------------------------------------|-------------|
|             |                              |                              |                                    |             |

If a user wants to fill in `Component [instrument model]` then they are most likely looking for the instrument model used in their experimental workflow. Here for example the instrument model series and the exact instrument models are connected to `instrument model (MS:1000031)` via [`is_a` relationships](/images/UserDocs/Swate-RelationshipGraph-Exp.jpg). 

<br>

## Relationship-Directed Search Usage

1. Choose any [descriptive building block](/docs/UserDocs/Docs03-Building-Blocks#descriptive-building-blocks.html) (all building blocks with 3 or more columns work, e.g. `Protocol Type`) and select any number of rows in the main column.
2. Click in the ontology term search field under the *Terms* tab in the <a href="./../../images/UserDocs/Swate-Overlay-Exp.jpg" target="_blank">navbar</a>.
    - This will create an additional field in front of the search field with the column header term inside.
    - For the example table under [theory](#Relationship-Directed-Search-Theory) one would click in any row below `Parameter [instrument model]` and then after clicking into the searchfield, one should see `instrument model`. In this case we call `instrument model` the **<u>parent term</u>** and all related terms **<u>child terms</u>**.
3. While the slider next to *Use related term directed search* is turned on, you will now **ONLY** search through related terms.
    - 👀 You can also explore all available child terms, by <kbd>double clicking</kbd> into the empty search field. 
4. You can turn this feature off with the slider next to *Use related term directed search*.