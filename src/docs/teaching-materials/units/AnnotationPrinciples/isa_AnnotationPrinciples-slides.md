---
marp: true
title: Annotation Principles
author: 
- name: Kevin Schneider
  github: https://github.com/kMutagene
date: 2023-06-14
add toc: true
add sidebar: _sidebars/mainSidebar.md
---

<style>

img {
    width: 68%;
    display: block;
    margin-left: auto;
    margin-right: auto;
}

section, p, h1{
    display: block;
    font-size: 25px;
    text-align: center;
}

h1 {
    display: block;
    font-size: 42px;
    margin-top: 0px;
    padding-top: 0px;
}

</style>


# Source Name

<style scoped>

section, img, p, h1 {
    background-color: #0BB5DD;
    color: white
}

</style>

Every annotation table must start with the Source Name column, which defines the input of your table. This input value must be a unique identifier for an organism or a sample.  
The number of Source Name columns per table is limited to one.

<img src="./../../../img/AnnotationPrinciples/Source.svg">

---


# Characteristics

<style scoped>

section, img, p, h1 {
    background-color: white;
    color: #1FC2A7;
}

</style>

Characteristic columns describe inherent properties of the source material, e.g., a certain strain or ecotype, but also the temperature an organism was exposed to.  
You can use any number of Characteristic columns.

<img src="./../../../img/AnnotationPrinciples/Characteristics.svg">

---


# Factor

<style scoped>

section, img, p, h1 {
    background-color: #1FC2A7;
    color: white;
}

</style>

Use Factor columns to describe independent variables that determine the specific output of your experiment when process and analysis were identical.  
Most of the time, Factors are the most important building blocks for downstream computational analysis.

<img src="./../../../img/AnnotationPrinciples/Factor.svg">

---


# Parameter

<style scoped>

section, img, p, h1 {
    background-color: white;
    color: #0BB5DD;
}

</style>


Parameter columns describe steps in your experimental workflow, e.g., the temperature or extraction buffer used for your assay. Multiple Parameter columns form a protocol.  
You can use any number of Parameter columns.


<img src="./../../../img/AnnotationPrinciples/Parameter.svg">

---

# Component

<style scoped>

section, img, p, h1 {
    background-color: #0BB5DD;
    color: white;
}

</style>

Use these columns to list anything physical of a protocol that can be consumed, e.g. instrument names, software names, or reagents names.  
You can use any number of Component columns.

<img src="./../../../img/AnnotationPrinciples/Component.svg">

---

# Protocol Columns

<style scoped>

section, img, p, h1 {
    background-color: white;
    color: #2D3E50;
}

</style>

Use Protocol REF columns to reference the protocol used in this table, i.e., the name of the protocol. Protocol Type columns define the type according to your preferred public repository, e.g., a growth protocol.  
The number of columns for each subtype is limited to one per table.

<img src="./../../../img/AnnotationPrinciples/Protocol.svg">

---


# Output Columns

<style scoped>

section, img, p, h1 {
    background-color: #2D3E50;
color: white;
}

</style>


Per table only one output column is allowed, which can either be a Sample Name, a Raw Data File or a Derived Data File. Data files can be sources for computational workflows.  
The value of this column must be a unique identifier.


<img src="./../../../img/AnnotationPrinciples/Output.svg">
 