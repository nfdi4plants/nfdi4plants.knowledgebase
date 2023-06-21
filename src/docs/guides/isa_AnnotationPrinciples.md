---
marp: true
title: Annotation Principles
author: 
- name: Kevin Schneider
  github: 
date: 2023-06-14
add toc: true
add sidebar: _sidebars/mainSidebar.md
---

{
    "Name": "Source Name",
    "Description": "Every annotation table must start with the Source Name column, which defines the input of your table. This input value must be a unique identifier for an organism or a sample.",
    "DescriptionSub": "The number of Source Name columns per table is limited to one.",
    "BackgroudColor": "#0BB5DD",
    "Color": "white",
    "Image": "images/Source.png"
}

{
    "Name": "Characteristics",
    "Description": "Characteristic columns describe inherent properties of the source material, e.g., a certain strain or ecotype, but also the temperature an organism was exposed to.",
    "DescriptionSub": "You can use any number of Characteristic columns.",
    "BackgroudColor": "white",
    "Color": "#1FC2A7",
    "Image": "images/Characteristics.png"
}

{
    "Name": "Factor",
    "Description": "Use Factor columns to describe independent variables that determine the specific output of your experiment when process and analysis were identical.",
    "DescriptionSub": "Most of the time, Factors are the most important building blocks for downstream computational analysis.",
    "BackgroudColor": "#1FC2A7",
    "Color": "white",
    "Image": "images/Factor.png"
}

{
  "Name": "Parameter",
  "Description": "Parameter columns describe steps in your experimental workflow, e.g., the temperature or extraction buffer used for your assay. Multiple Parameter columns form a protocol.",
  "DescriptionSub": "You can use any number of Parameter columns.",
  "BackgroudColor": "white",
  "Color": "#0BB5DD",
  "Image": "images/Parameter.png"
}

{
  "Name": "Component",
  "Description": "Use these columns to list anything physical of a protocol that can be consumed, e.g. instrument names, software names, or reagents names.",
  "DescriptionSub": "You can use any number of Component columns.",
  "BackgroudColor": "#0BB5DD",
  "Color": "white",
  "Image": "images/Component.png"
}

{
    "Name": "Protocol Columns",
    "Description": "Use Protocol REF columns to reference the protocol used in this table, i.e., the name of the protocol. Protocol Type columns define the type according to your preferred public repository, e.g., a growth protocol.",
    "DescriptionSub": "The number of columns for each subtype is limited to one per table.",
    "BackgroudColor": "white",
    "Color": "#2D3E50",
    "Image": "images/Protocol.png"
}

{
    "Name": "Output Columns",
    "Description": "Per table only one output column is allowed, which can either be a Sample Name, a Raw Data File or a Derived Data File. Data files can be sources for computational workflows.",
    "DescriptionSub": "The value of this column must be a unique identifier.",
    "BackgroudColor": "#2D3E50",
    "Color": "white",
    "Image": "images/Output.png"
}