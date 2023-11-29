---
layout: docs
title: Practical Guide into the ARC ecosystem
date: 2023-11-29
author:
- name: Dominik Brilhaus
  orcid: https://orcid.org/0000-0001-9021-3197
  github: brilator
add toc: true
add support: true
add sidebar: _sidebars/mainSidebar.md
---

<!-- http://127.0.0.1:8080/docs/guides/ARC-practical-entry.html -->

## About this guide

In this guide we collect recommendations and considerations on creating an ARC based on your current project and datasets

<a href="./index.html">
  <span class="badge-category">User</span><span class="badge-selected" id="badge-advanced">Advanced</span>
  <span class="badge-category">Mode</span><span class="badge-selected" id="badge-tutorial">Tutorial</span>
</a>

<br>
<br>

## Before we can start

<div id="before-start">

This guide assumes you know

- :ballot_box_with_check: the concept of the [ARC](./../implementation/AnnotatedResearchContext.html)
- :ballot_box_with_check: the different [ISA file types](./isa_FileTypes.html)
- :ballot_box_with_check: which tools to use (e.g. [ARC Commander](./../ArcCommanderManual/index.html), [ARCitect](./../ARCitect-Manual/index.html), [DataHUB](./../DataHUB-Manual/index.html)) and how.

<br>

</div>

## Goal: structure your current project folder into an ARC

Sketch / screenshots unstructured - ARCed


## Sketch your laboratory workflows




```mermaid

graph TD

%% Nodes
  S1[Seeds]
  S2[Leaves]
  
  M1[RNA]
  M2[Protein]
  M3[cDNA]
  M4[RNASeq Libraries]
  M5[SDS-gel]
  M6[Western blot]
  
  P1>plant growth]
  P2>RNA Extraction]
  P3>Protein Extraction]
  P4>cDNA synthesis]
  P5>qRT-PCR]
  P6>Library preparation]
  P7>Next Generation Sequencing]
  P8>SDS Page]
  P9>Photo]
  P10>Immunoblotting]
  P11>Mapping]
  
  D1["qRT results (xlsx)"]
  D2[fastq files]
  D3[Image of \n SDS gel]
  D4[reference \n genome]
  D5[count table]
  

%% Links

subgraph Studies
  subgraph Drought
    S1 ---P1--> S2
  end
  
  subgraph Time Series
    S3 -----> S4
  end

  subgraph External Study
    P12>Download]
    x[Paper supplement] ---P12--> D4
  end

end


subgraph Assays
  S2 ---P2--> M1
  S2 ---P3--> M2
  M1 ---P4--> M3
  M3 ---P5--> D1
  M1 ---P6--> M4
  M4 ---P7--> D2
  D2 --- P11
  D4 --- P11
  P11 --> D5
  M2 ---P8--> M5
  M5 ---P9--> D3
  M5 ---P10--> M6
end


%% Add legend
subgraph Legend
    Sx[Sample]    
    Px>Process]
    Mx[Material]    
    Dx[Data]
end

%% Defining node styles
  classDef default color:#2d3e50;
  classDef S fill:#b4ce82, stroke:#333;
  classDef M fill:#ffc000;
  classDef D fill:#c21f3a,color:white;
  classDef P stroke-width:0px;  

%% Assigning styles to nodes
  class Sx,S1,S2 S;
  class Mx,M1,M2,M3,M4,M5,M6 M;
  class Dx,D1,D2,D3,D4,D5 D;
  class Px,P1,P2,P3,P4,P5,P6,P7,P8,P9,P10 P;


```


:bulb: Conceptually, the same applies to computational workflows.


## Work with identifiers

The ARC and the ISA metadata model offer determined places to 

- `Input` and `Output` fields such as Source Name, Sample Name, Data File Names
- `Protocol REF`


### Every file (name) is an identifier