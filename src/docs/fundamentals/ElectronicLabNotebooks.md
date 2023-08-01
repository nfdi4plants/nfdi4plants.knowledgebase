---
layout: docs
title: Electronic Lab Notebooks (ELNs)
author:
- name: Dominik Brilhaus
  github: https://github.com/brilator
  orcid: https://orcid.org/0000-0001-9021-3197
- name: Lucas Beuter
  github: https://github.com/Lu98Be
add toc: false
add sidebar: _sidebars/mainSidebar.md
date: 2023-08-01
status: draft
---

Experiments and studies are still broadly documented with paper-based notebooks.
While these are easy to use, they come with many problems.

Findability and reproducibility are often difficult tasks to achieve, either through bad documentation and handwriting or difficult to find notebooks. Also, a lot of data in research is gathered in a digital form, which is not very suitable for an analog notebook.
Furthermore, there is no backup for the notebook or any other option to access the entries if the notebook goes missing.
All of this can be solved by an Electronic Lab Notebook (ELN).
<!--One of the most crucial is the problem of findability and reproducibility. If you want to look up or reproduce an experiment done years ago, you will have to look through old, maybe even difficult to find notebooks. And even then, there might be the possibility to have missing information or bad handwriting. Overall, this approach is not fitting with the FAIR-Principles. -->
 You can write down all necessary Information in combination with all kind of files like images, tables, documents and so on.
 You can easily link between all kind of data and notebook entries. With an ELN, you can create and track any research process way better and faster.
Together with good metadata annotation makes this kind of documentation of experiments [FAIR][knowledge-fair].
- **F**indable, every entry and piece of data is findable through a search function and linkage
- **A**ccessible, access the notebook from everywhere, manage access rights and share data for good collaboration
- **I**nteroperable, an ELN uses common formats usable on any computer, making it easy interchangeable; you can also create interfaces between your ELN and your instruments or repository's to have a better workflow in your research
- **R**eusable, with good, described data and metadata you can easily reproduce any experiment or change little aspects for further research

With an ELN, you can track your research from different places at any time, as long as you have a stable internet connection. 


## How do you find the right ELN?

There are many different solutions out there, which makes finding the best fitting ELN for your lab very difficult. You should be aware of the following topics to find the right ELN:

Topic | Detail
---|-----------------
**Price** | Many solutions are paid and therefore may be unusable for labs with limited budget
**Data storage** | you can either store your data on a local server or you can buy a cloud solution to host your data
**Privacy** | a lot of ELN's are cloud hosted and could therefore have problems with regulations like the GDPR 
**Specialization** | some ELNs are more aligned to a specific research field like chemistry, while some are more general with less special tools
**Usability** | the ELN should be at least as easy to use as a plain sheet of paper with a user-friendly interface; you can test this through demos
**Collaboration** | with role management you can protect your data by limiting the access while you also can share the research and results to collaborate with others
**Metadata** | document metadata in a human and machine-readable way; read here to learn more about [Metadata][knowledge-mets]
**Templates** | templates allow you to have standardized documentation, making it easier and faster to write down measurements and results
**Search** | a search function allows you to find any of your data fast and easy
**Compliance** | some labs need to fulfil requirements like GLP (good laboratory practices); the ELN should therefore be compatible with the required compliance
**Evidence security** | the ELN should have an option to timestamp the individual entries, so you can trace the history of the changes made and verify the integrity of your data
**API** | with an API, you can create interfaces for external applications like storage systems or instruments
**Exit strategy** | you should be able to export your whole ELN at any time in usable formats like PDF, zip or .eln
**Reliability** | it is preferable to use an ELN from a reliable source with long term support and development of the product

<!-- 
        Listed in an unlisted list, instead of a table

- **Price**: Many solutions are paid and therefore may be unusable for labs with limited budget
- **Data storage**: you can either store your data on a local server or you can buy a cloud solution to host your data
- **Specialization**: some ELNs are more aligned to a specific research field like chemistry, while some are more general with less special tools
- **Usability**: the ELN should be at least as easy to use as a plain sheet of paper with a user-friendly interface; you can test this through demos
- **Collaboration**: with role management you can protect your data by limiting the access while you also can share the research and results to collaborate with others
- **Metadata**: document metadata in a human and machine-readable way; read here to learn more about [Metadata][knowledge-mets]
- **Templates**: templates allow you to have standardized documentation, making it easier and faster to write down measurements and results
- **Search**: a search function allows you to find any of your data fast and easy
- **Compliance**: some labs need to fulfil requirements like GLP (good laboratory practices); the ELN should therefore be compatible with the required compliance
- **Evidence security**: the ELN should have an option to timestamp the individual entries, so you can trace the history of the changes made and verify the integrity of your data
- **API**: with an API, you can create interfaces for external applications like storage systems or instruments
- **Exit strategy**: you should be able to export your whole ELN at any time in usable formats like PDF, zip or .eln
- **Reliability**: it is preferable to use an ELN from a reliable source with long term support and development of the product
-->

For more help to find the right ELN, there is the [ELN Finder][web-elnfinder]. With it you can filter out a wide list of ELN's by different attributes.



## Example - eLabFTW <!--with LISTER-->

DataPLANT is currently planning to introduce eLabFTW as an ELN solution for the community with compatibility to ISA and your ARC.

[eLabFTW][web-elabftw] is a free and open source ELN which can be used in a broad field of research.
It has every common feature and is fully customizable due to its open source nature.
You can install it either on your own local server or buy a hosted cloud solution.
It is able to manage different research teams on one central instance.

The user interface is simply and responsive designed, you can access the ELN from any device with internet.
It has two sections, one for experiments and one for database.
In the experiment section, you can easily add and edit your current studies. 
You can tag your entry with metadata for better findability and determine view and writing rights.
In the text field you can freely write text, add templates or insert images and tables.

Down below are different fields, where you can either add steps for you experiment, link to other experiments or objects from the database or add your own custom field.
Also you can comment the experiment, timestamp it either through a trusted source or through a blockchain. 
You can duplicate you experiment, lock it or export it.

The database is a collection of different objects like instruments, plants, chemicals and so on.
Every object has a default template which makes creating and editing any object more easy and faster.
You can link in your experiment to any database object or other experiment.

All data is secured by state of the art encryption and web security practices.
It also has extra features like latex support, drawing and molecule tool, a scheduler for your team, support of several languages and many more to come developed by an active community. 

You can test the ELN online in a free [demo][web-elabdemo].

<!--
### LISTER
LISTER is a tool made with python to make eLabFTW compatible with the ISA model.
The tool takes the entries of an experiment plus the attached database entries to create an Excel file containing all the necessary metadata as defined in the ISA standard.
It also comes with its own markup language to annotate metadata.

With eLabFTW and LISTER you can use all the features of a good ELN, and you can afterwards store your data on your ARC with the help of LISTER.

There is also a [demo][web-listerdemo] for eLabFTW available, with experiments documented in the LISTER markup language. <!-- NOTE: the demo currently has a certificate problem and could therefore create problems accessing it 
-->
## Example - eLabJournal

[eLabJournal][web-elabjournal] is a paid closed-source ELN from eLabNext. It provides a full ELN with many features and add-on's.
It supports all common file and document formats, including online integration of MS Office formats.
Furthermore, it can either be hosted on a cloud or installed on a server infrastructure of your institute.
Like many other paid ELN, it has a full support and user training service provided by the company.
It supports many different compliances and options for evidence security.

<!-- TODO -->




<!-- This guide was inspired by the [guide][web-nfdi4chem] made by the nfdi4chem consortia. -->



<!-- References -->
[knowledge-fair]: ../fundamentals/FairDataPrinciples.html "Article about FAIR Principles"
[knowledge-mets]: ../fundamentals/Metadata.html "Article about Metadata"
[web-elabftw]: https://www.elabftw.net/ "Homepage of eLabFTW"
[web-elabdemo]: https://demo.elabftw.net/ "Demo of eLabFTW"
[web-listerdemo]: https://elabftw.pharm.hhu.de/ "Demo of eLabFTW with LISTER"
[web-elnfinder]: https://eln-finder.ulb.tu-darmstadt.de/home "ELN Finder"
[web-elabjournal]: https://www.elabnext.com/products/elabjournal/ "Homepage of eLabJournal"
[web-nfdi4chem]: https://knowledgebase.nfdi4chem.de/knowledge_base/docs/eln/ "ELN Guide made by nfdi4chem"