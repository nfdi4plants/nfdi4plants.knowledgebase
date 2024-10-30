---
title: Reproduce and reuse
lastUpdated: 2022-09-23
authors:
 - dominik-brilhaus
draft: true
hidden: true
pagefind: false
---

> This article is work-in-progress.

Key aspects of the [FAIR principles](/fundamentals/fair-data-principles) and driver for the development of good [RDM](/fundamentals/research-data-management) are *reproducibility* and *re-usability* (FAI**R**) of scientific outputs as well as workflows leading to these outputs. Although here we focus more on data and the "computational side", we would like to emphasize some analogies between **<span style="color:#FFC000">Data</span>** science and **<span style="color:#B4CE82">PLANT</span>** science. Especially as some requirements in both environments can at least in part be met with similar approaches.

Consider our PhD Viola (see [metadata](/fundamentals/metadata)). In the <span style="color:#B4CE82">wet lab</span>, she extracts RNA from her plant samples using a ready-to-use <span style="color:#B4CE82">commercial extraction kit </span> with all buffers and some required materials and tools included. Similarly in the <span style="color:#FFC000">dry lab</span> she would use an <span style="color:#FFC000">established, commercial office software</span> that is mostly contained/isolated, for small spread-sheet calculations. There is no commercial kit available to extract metabolites suitable with the special plant species Viola is interested in. So she uses a <span style="color:#B4CE82">"manual" protocol</span> established in her lab, for which she orders and prepares buffers and solutions herself and gathers the required devices, tubes and materials. Once she receives her RNA-Seq data, she sets up her own <span style="color:#FFC000">combinations of scripts (pipeline)</span> with varying inputs (reference data sets) and tool dependencies (code interpreters, packages, functions). In the end, Viola's complete workspace, be it the <span style="color:#B4CE82">laboratory environment</span> or her computer's <span style="color:#FFC000">operating system</span>, comes with its specific setup, tools, resources and limitations. And her research routine would likely differ if she were to pursue it in a different lab or using another computer.

For both types of workflows, there are (clearly) defined inputs and outputs, e.g. the <span style="color:#B4CE82">state of the</span> or the <span style="color:#FFC000">data format</span>. And Viola makes sure to document as much metadata as possible to make her workflows reproducible, including e.g. <span style="color:#B4CE82">version, batch or LOT numbers</span> of a kit or chemical and the <span style="color:#FFC000">versions of software and packages</span>. Also trouble-shooting with a colleague, company, data steward or seeking help in online forums, is always easier if you share information about your setting.


<!-- ## Re-inventing the wheel -->
## On the shoulders of giants


"In real life" <!-- (in the living world, in biology) --> you can take a sample once and only once. You can take replicate samples &ndash; technical (same plant different leaf) or biological (different plant) &ndash;, but in the end this is a new and different sample. In the wet-lab many more factors affect reproducibility, making it close to impossible to reproduce the exact same outcome (results, datasets). These include biological variance, hands-on factors (more hands, bigger variance), the environment (humidity, temperature), but also deviations in standard devices (growth chamber, centrifuge).
  - Still for other researchers to be able to re-use (i.e. build on) your findings, it will be helpful to document, metadata... 


1. re-use an outcome (data or sample)
2. reproduce an outcome (peer-review)
3. re-use a workflow (lab protocol or analysis)



- Reproducibility of computational analyses
  - a) you can "reproduce" that exact same output (run result) using the exact same inputs
  - b) you can apply the analysis onto other data to produce analogous outputs, that can be fed into other workflows (e.g. generate similar figures)

- How we usually (learn to) work with scripts
  - interactive, iterative
  - adapt script to specific needs
  - write (hard-code) inputs, outputs into script

- Problem
  - hand script to colleague
  - script not working due to missing (software) dependencies, changed (absolute) paths to environments / inputs / other dependencies (e.g. database resources)

- Example sources for scripts
  - workshop / summer school
  - colleagues
  - manual / tutorial to a tool (downloaded and adapted from GitHub)
  - copy/pasted from stack overflow

- Software dependencies
  - on multiple levels / in different shapes
  - operating system (Linux, Windows, Mac)
  - programming environment / interpreter (shell, python, r, julia, f#)
  - packages / libraries within the programming environment
  - version of one of above
  - (use of) virtual environments

- Towards solutions
  - containers
    - docker, singularity
  - workflow languages
    - CWL, snakemake, nextflow
    - environment-agnostic
    - formulate ins, outs, parameters
  - workflow management systems
    - galaxy
