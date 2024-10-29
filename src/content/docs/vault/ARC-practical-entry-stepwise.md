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

## Convert your project into an ARC

- you have files and folders
- they are stored somewhere
- pack them / decorate them in an ARC.

## Sketch your laboratory workflows

One goal of the ARC is to be able to tell, which finding or result originated from which biological experiment. This would ultimately require to link the dataset files back to the individual sample. To do so, we essentially follow a path of *processes* with *inputs* and *outputs*. Some of the inputs and outputs want to be reused or reproduced, some of the processes want to be applied to other inputs.

Before creating an ARC for an existing dataset, it might help to visualize what was done in the lab. The following is very simplified example that most plant biologists can hopefully relate to.

```mermaid

%%{
  init: {
    'theme': 'base',
    'themeVariables': {
      'background': '#fff',
      'lineColor': '#2d3e50',
      'primaryTextColor': '#2d3e50'
    }
  }
}%%

graph TD

%% Nodes
  S1(Seeds)

  S2(Leaves)
  
  M1(RNA)
  M2(protein)
  M3(cDNA)
  M4(RNASeq Libraries)
  M5(SDS-gel)
  M6(western blot)
  
  P1>plant growth]
  P2>RNA extraction]
  P3>protein extraction]
  P4>cDNA synthesis]
  P5>qRT-PCR]
  P6>Library preparation]
  P7>Next Generation Sequencing]
  P8>SDS Page]
  P9>taking a photo]
  P10>Immunoblotting]
  P11>mapping]
  
  D1("qRT results")
  D2(fastq files)
  D3(Image of \n SDS gel)
  D4(reference \n genome)
  D5(count table)  


%% Links

subgraph Studies
  subgraph study:drought
    S1 ---P1--drought\nstress--> S2
  end
  
  subgraph study:heat
    P13>plant growth] 

    S1 ---P13--heat\nstress--> S4(Leaves)
  end

  subgraph study:genome-ref
    P12>Download]
    x(Paper supplement) ---P12--> D4
  end

end


subgraph Assays
  
  subgraph assay:Another Assay
    P14>Process XY]
    D6(Output XY)

    S4 ---P14--> D6
  end

  subgraph assay:qRT-PCR
    S2 ---P2--> M1
    M1 ---P4--> M3
    M3 ---P5--> D1
  end
  
  subgraph assay:SDS-gel
    S2 ---P3--> M2
    M2 ---P8--> M5
    M5 ---P9--> D3
  end
    
  subgraph assay:RNA-Seq
    M1 ---P6--> M4
    M4 ---P7--> D2
  end
  
  subgraph assay:western Blot
    M5 ---P10--> M6
  end

end

subgraph Worklows/Runs

  subgraph workflow:mapping
      D2 --- P11
      D4 --- P11    
  end
  
  subgraph run
    P11 --> D5
  end

end




%% Add legend
subgraph Legend
    Sx(Sample)  
    Mx(Material)    
    Dx(Data)
    Px>Process]
end

%% Defining node styles
  classDef S fill:#b4ce82, stroke:#333;
  classDef M fill:#ffc000;
  classDef D fill:#c21f3a,color:white;
  classDef P stroke-width:0px;  

%% Assigning styles to nodes
  class Sx,S1,S2,S4 S;
  class Mx,M1,M2,M3,M4,M5,M6 M;
  class Dx,D1,D2,D3,D4,D5,D6 D;
  class Px,P1,P2,P3,P4,P5,P6,P7,P8,P9,P10,P11,P12,P13,P14 P;

%% Box style
style Worklows/Runs fill:#fff, stroke-width:2px, stroke:#333;
style Studies fill:#fff, stroke-width:2px, stroke:#333;
style Assays fill:#fff, stroke-width:2px, stroke:#333;

```

:bulb: On a side note, the above is a very wet-lab heavy example. However, conceptually the same applies to computational workflows. Coders oftentimes design their scripts, workflows and pipelines in successive modules with defined inputs and outputs.


## Now action

Once 




## Work with identifiers

The ARC and the ISA metadata model offer determined places to 

- `Input` and `Output` fields such as Source Name, Sample Name, Data File Names
- `Protocol REF`


### Every file (name) is an identifier
