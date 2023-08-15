---
marp: true
theme: marp-theme_dataplant-ceplas-mibinet-ccby
paginate: true
license: '[CC-BY 4.0](https://creativecommons.org/licenses/by/4.0/)'
title: 
author:
- name: Dominik Brilhaus
  github: https://github.com/brilator
  orcid: https://orcid.org/0000-0001-9021-3197
- name: Sabrina Zander
  orcid: https://orcid.org/0009-0000-4569-6126
---

# Persistent Identifiers (PIDs)

---

# Spot the Persistent Identifiers (PIDs)

![](./../../../img/exercise_PIDs_img1.png)

---

# Spot the PIDs

![](./../../../img/exercise_PIDs_solution_img1.png)

---

# Globally unique, stable, persistent identifiers (PIDs)

* Long-term findability
* Make data, digital objects, people, … uniquely identifiable
* Diminish “dead links”
* Cope with name changes

![bg right width:500](./../../../img/pid_collage.drawio.svg)

E.g. CEPLAS:
- https://ror.org/034waa237
- https://grid.ac/institutes/grid.503026.2

---

# Properties of a PID

- Ideally it is permanent
- Location-independent
- Globally valid
- Addressable (citable)
- Clickable (resolvable)

---

# Good URIs (Uniform Resource Identifiers)

- Globally unique
  - One URI should never refer to two different concepts at the same time
- Persistent
  - A URI should continue to resolve for the foreseeable future
- Stable
  - A URI should never be re-used [...] even if the original is deleted
- Resolvable
  - A URI should redirect to a suitable document

Adapted from https://www.ebi.ac.uk/rdf/documentation/good_practice_uri/

---

# Repositories
---

# Domain-specific data repositories

<style scoped>
.columns {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 2rem;
}
ul {
    margin: 5; padding: 0;
}
</style>

<div class="columns">
<div class="columns-left">

**Good**

- Assign PIDs / DOIs
- Long-term accessible
- Data-type specific
- Apply metadata standards
- Usually recommended / required by journals
- Mostly accepted by the community

</div>

<div class="columns-right">

**Intermediate**

- User-friendliness
- Different metadata schema
- Complex and versatile submission routines
</div>

---

# Choosing a data repository

Domain-specific >> Generic >> Institutional

*Find repositories at:*
<https://www.re3data.org>
<https://fairsharing.org>


# Domain-specific data repositories

Repository | Description | Biological data domain
-- | -- | --
[EBI-ENA](<https://www.ebi.ac.uk/ena/>) | European Nucleotide Archive | genome / transcriptome sequences
[NCBI-SRA](<https://www.ncbi.nlm.nih.gov/sra/>) | Sequence Read Archive | genome / transcriptome sequences
[NCBI-GenBank](<https://www.ncbi.nlm.nih.gov/genbank/>) | Genetic Sequence Database | genome
[EBI-ArrayExpress](<https://www.ebi.ac.uk/arrayexpress/>) | Archive of Functional Genomics Data | transcriptome  
[NCBI-GEO](<https://www.ncbi.nlm.nih.gov/geo/>) | Gene Expression Omnibus | transcriptome
[e!DAL-PGP](<https://edal.ipk-gatersleben.de/index.html>) | Plant Genomics & Phenomics Research Data Repository | phenome
[EBI-MetaboLights](<https://www.ebi.ac.uk/metabolights/>) | Database of Metabolomics | metabolome
[EBI-PRIDE](<https://www.ebi.ac.uk/pride/>) | PRoteomics IDEntifications Database | proteome
[EBI-BioImage Archive](<https://www.ebi.ac.uk/bioimage-archive/>) | Stores & distributes biological images | imaging, microscopy

---

# Generic data repositories

![bg right width:500](./../../../img/repositories_genericRepos_collage.drawio.svg)

**Good**

- Allow publication of any kind of data Assign PIDs / DOIs
- Long-term accessible
- Very simple to use

**Intermediate**

- Only generic / high-level metadata schema
- Limited reusability
