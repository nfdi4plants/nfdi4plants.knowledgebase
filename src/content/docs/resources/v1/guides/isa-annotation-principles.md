---
title: Annotation Principles
authors: 
  - kevin-schneider
lastUpdated: 2023-06-22
---

:::note[About this guide]

Annotation of data and workflows within the ARC builds on the ISA model. In this guide we introduce the different building blocks available to annotate your workflows in isa.study.xlsx and isa.assay.xlsx workbooks. 
:::

<style>

img {
    width: 60%;
    display: block;
    margin-left: auto;
    margin-right: auto;
}

div {
    display: block;
    font-size: 16px;
    text-align: center;
    margin-top: 10px;
    padding-top: 10px;
}

#sourcename {background-color: #0BB5DD; color: white;}

#characteristics {background-color: white; color: #1FC2A7;}

#factor {background-color: #1FC2A7; color: white;}

#parameter {background-color: white; color: #0BB5DD;}

#component {background-color: #0BB5DD; color: white;}

#output {background-color: #0BB5DD; color: white; }

#protocol {background-color: white; color: #2D3E50;}

</style>

<div id="sourcename">

# Source Name

Every annotation table must start with the Source Name column, which defines the input of your table. This input value must be a unique identifier for an organism or a sample.  
The number of Source Name columns per table is limited to one.

![](./images/AnnotationPrinciples/Source.svg">

</div>

<div id="characteristics">

# Characteristics

Characteristic columns describe inherent properties of the source material, e.g., a certain strain or ecotype, but also the temperature an organism was exposed to.  
You can use any number of Characteristic columns.

![](./images/AnnotationPrinciples/Characteristics.svg">

</div>

<div id="factor">

# Factor

Use Factor columns to describe independent variables that determine the specific output of your experiment when process and analysis were identical.  
Most of the time, Factors are the most important building blocks for downstream computational analysis.

![](./images/AnnotationPrinciples/Factor.svg">

</div>

<div id="parameter">

# Parameter

Parameter columns describe steps in your experimental workflow, e.g., the temperature or extraction buffer used for your assay. Multiple Parameter columns form a protocol.  
You can use any number of Parameter columns.


![](./images/AnnotationPrinciples/Parameter.svg">

</div>

<div id="component">

# Component

Use these columns to list anything physical of a protocol that can be consumed, e.g. instrument names, software names, or reagents names.  
You can use any number of Component columns.

![](./images/AnnotationPrinciples/Component.svg">

</div>

<div id="protocol">

# Protocol Columns

Use Protocol REF columns to reference the protocol used in this table, i.e., the name of the protocol. Protocol Type columns define the type according to your preferred public repository, e.g., a growth protocol.  
The number of columns for each subtype is limited to one per table.

![](./images/AnnotationPrinciples/Protocol.svg">

</div>

<div id="output">

# Output Columns

Per table only one output column is allowed, which can either be a Sample Name, a Raw Data File or a Derived Data File. Data files can be sources for computational workflows.  
The value of this column must be a unique identifier.

![](./images/AnnotationPrinciples/Output.svg">

</div>
 