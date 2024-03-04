---
layout: none
title: Practical Guide into the ARC ecosystem slides
marp: true
theme: marp-theme_dataplant-ceplas-ccby
headingDivider:
- 1
- 2
paginate: true
license: '[CC-BY 4.0](https://creativecommons.org/licenses/by/4.0/)'
date: 2023-12-01
author:
- name: Dominik Brilhaus
  orcid: https://orcid.org/0000-0001-9021-3197
  github: brilator
---


<!-- 

Note this slide deck is buggy. 
- The mermaid graphs display well in vscode preview (with mermaid extension installed)
- Slides can be exported to html or pdf using the vscode marp extension or marp-cli, but:
  - in the pdf version font size is not properly adapted
  - in the html version one has to reload / refresh (browser) each mermaid-containing slide to load the graphic 

-->




# Structure your current project folder into an ARC

<script type="module">
import mermaid from 'https://cdn.jsdelivr.net/npm/mermaid@11/dist/mermaid.esm.min.mjs';
mermaid.initialize({ startOnLoad: true });
</script>

# Sketch your laboratory workflows

The ARC helps

- to tell, which finding or result originated from which biological experiment
- link dataset files to the individual sample
- to follow a path of *processes* with *inputs* and *outputs*
- allow inputs and outputs want to be reused or reproduced, some of the processes want to be applied to other inputs

<!-- 
Before creating an ARC for an existing dataset, it might help to visualize what was done in the lab.  The following is very simplified example that most plant biologists can hopefully relate to. -->

# Green-house to gene expression

<!-- 
Consider you want to investigate the effect of drought stress on the transcript levels of you gene of interest (GOI) via qRT-PCR. You grow plants from seeds, drought-stress the plants and collect leaves at the end of the growth study. From the leave samples &ndash; homogenized to powder and stored in a freezer &ndash; you take an aliquot to extract RNA, from which you synthesize cDNA. The cDNA (together with other biologicals and chemicals) is the input for a qRT-PCR yielding relative transcript levels as the output. 

-->

<script type="module">

import mermaid from 'https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.esm.min.mjs';

mermaid.initialize({ startOnLoad: true });
</script>

<div class="mermaid" style="min-width: 480px; max-width: 960px; min-height: 360px;max-height: 600px;">
flowchart LR
%% Nodes
  S1(Seeds)
  S2(Leaves)
  M1(RNA)
  M3(cDNA)
  P1>plant growth]
  P2>RNA extraction]
  P4>cDNA synthesis]
  P5>qRT-PCR]
  D1("qRT results")
%% Links
  S1 ---P1--drought\nstress--> S2
  S2 ---P2--> M1
  M1 ---P4--> M3
  M3 ---P5--> D1
%% Defining node styles
  classDef S fill:#b4ce82, stroke:#333;
  classDef M fill:#ffc000;
  classDef D fill:#c21f3a,color:white;
  classDef P stroke-width:0px;  
%% Assigning styles to nodes
  class Sx,S1,S2 S;
  class Mx,M1,M2,M3,M4,M5,M6 M;
  class Dx,D1,D2,D3,D4,D5 D;
  class Px,P1,P2,P3,P4,P5,P6,P7,P8,P9,P10,P11,P12,P13 P;
</div>

# Confirm findings on protein level

<!-- You found your GOI affected by drought stress on transcript level. To confirm that the expression of the encoded protein is likewise affected, you take another aliquot from the same leave samples, extract proteins, separate them by SDS-PAGE and immunoblot the SDS gel with antibodies specific for your GOI. -->

<div class="mermaid">
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
graph LR
%% Nodes
  S1(Seeds)
  S2(Leaves)
  M1(RNA)
  M2(protein)
  M3(cDNA)
  M5(SDS-gel)
  M6(western blot)
  P1>plant growth]
  P2>RNA extraction]
  P3>protein extraction]
  P4>cDNA synthesis]
  P5>qRT-PCR]
  P8>SDS Page]
  P9>taking a photo]
  P10>Immunoblotting]
  D1("qRT results")
  D3(Image of \n SDS gel)
%% Links
  S1 ---P1--drought\nstress--> S2
  S2 ---P2--> M1
  S2 ---P3--> M2
  M1 ---P4--> M3
  M3 ---P5--> D1
  M2 ---P8--> M5
  M5 ---P9--> D3
  M5 ---P10--> M6
%% Defining node styles
  classDef S fill:#b4ce82, stroke:#333;
  classDef M fill:#ffc000;
  classDef D fill:#c21f3a,color:white;
  classDef P stroke-width:0px;  
%% Assigning styles to nodes
  class Sx,S1,S2 S;
  class Mx,M1,M2,M3,M4,M5,M6 M;
  class Dx,D1,D2,D3,D4,D5 D;
  class Px,P1,P2,P3,P4,P5,P6,P7,P8,P9,P10,P11,P12,P13 P;
</div>

# Global overview of gene expression

<!-- You could show that the expression of your GOI was affected by drought on both transcript and protein level. In order to identify transcripts that correlate with your GOI under drought stress, you prepare RNA extracted earlier and submit it to a company for mRNA-Seq. -->


<div class="mermaid" style="width: 900px">
%%{
  init: {
    'theme': 'base',
    'themeVariables': {
      'fontSize': '5px',
      'background': '#fff',
      'lineColor': '#2d3e50',
      'primaryTextColor': '#2d3e50'
    }
  }
}%%
graph LR
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
  D1("qRT results")
  D2(fastq files)
  D3(Image of \n SDS gel)  
%% Links
S1 ---P1--drought\nstress--> S2
  S2 ---P2--> M1
  S2 ---P3--> M2
  M1 ---P4--> M3
  M3 ---P5--> D1
  M1 ---P6--> M4
  M4 ---P7--> D2  
  M2 ---P8--> M5
  M5 ---P9--> D3
  M5 ---P10--> M6
%% Defining node styles
  classDef S fill:#b4ce82, stroke:#333;
  classDef M fill:#ffc000;
  classDef D fill:#c21f3a,color:white;
  classDef P stroke-width:0px;  
%% Assigning styles to nodes
  class Sx,S1,S2,S4 S;
  class Mx,M1,M2,M3,M4,M5,M6 M;
  class Dx,D1,D2,D3,D4,D5 D;
  class Px,P1,P2,P3,P4,P5,P6,P7,P8,P9,P10,P11,P12,P13 P;
</div>

# Adding external data

<!-- From the company you receive the RNA-Seq reads in form of fastq files. In order to quantify the reads and generate a gene expression count table, you map them against a suitable reference genome downloaded from an online database or publication's supplemental data. -->

<div class="mermaid">
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
graph LR
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
    S1 ---P1--drought\nstress--> S2
    P12>Download]
    x(Paper supplement) ---P12--> D4
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
%% Defining node styles
  classDef S fill:#b4ce82, stroke:#333;
  classDef M fill:#ffc000;
  classDef D fill:#c21f3a,color:white;
  classDef P stroke-width:0px;  
%% Assigning styles to nodes
  class Sx,S1,S2,S4 S;
  class Mx,M1,M2,M3,M4,M5,M6 M;
  class Dx,D1,D2,D3,D4,D5 D;
  class Px,P1,P2,P3,P4,P5,P6,P7,P8,P9,P10,P11,P12,P13 P;
</div>

# What this could look like in an ARC



<div class="mermaid">
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
graph LR
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
  subgraph study:genome-ref
    P12>Download]
    x(Paper supplement) ---P12--> D4
  end
end
subgraph Assays
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
    Px>Process]
    Mx(Material)    
    Dx(Data)
end
%% Defining node styles
  classDef S fill:#b4ce82, stroke:#333;
  classDef M fill:#ffc000;
  classDef D fill:#c21f3a,color:white;
  classDef P stroke-width:0px;  
%% Assigning styles to nodes
  class Sx,S1,S2,S4 S;
  class Mx,M1,M2,M3,M4,M5,M6 M;
  class Dx,D1,D2,D3,D4,D5 D;
  class Px,P1,P2,P3,P4,P5,P6,P7,P8,P9,P10,P11,P12,P13 P;
%% Box style
style Worklows/Runs fill:#fff, stroke-width:2px, stroke:#333;
style Studies fill:#fff, stroke-width:2px, stroke:#333;
style Assays fill:#fff, stroke-width:2px, stroke:#333;
</div>

# Add a new study and sample set

<div class="mermaid">
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
graph LR
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
    Px>Process]
    Mx(Material)    
    Dx(Data)
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
</div>

# What about computational workflows?

:bulb: On a side note, the above is a very wet-lab heavy example. However, conceptually the same applies to computational workflows. Coders oftentimes design their scripts, workflows and pipelines in successive modules with defined inputs and outputs.
