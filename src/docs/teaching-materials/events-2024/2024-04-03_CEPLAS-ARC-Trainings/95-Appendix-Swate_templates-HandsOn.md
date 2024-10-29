---
layout: slides
marp: true
title: Swate Templates Hands On
theme: marp-theme_dataplant-ceplas-ccby
date: 2024-03-25
author: 
- name: Dominik Brilhaus
  github: https://github.com/brilator
  orcid: https://orcid.org/0000-0001-9021-3197
- name: Kevin Frey
  github: https://github.com/Freymaurer
  orcid: https://orcid.org/0000-0002-8510-6810
- name: Stella Eggels
add toc: true
add sidebar: _sidebars\mainSidebar.md
---

# Creating Swate Templates

---

# Create or open a Swate template

Open [Swate-alpha](https://swate-alpha.nfdi4plants.org/). To create a new template click "New File" and select "Template". If you want to edit an existing template, click "Import" and select the respective file.

![w:700px](./../../../img/Swate-alpha-newtemplate.png)

---

# Add Template Metadata

- Once you open a new template, you will see a "Metadata" sheet.
- Enter a name for the template
- Add a description about the template

:warning: Do not change the **Identifier**

---

# Template Metadata

<style scoped>
table {
  width: 100%;  
  height: 400;
}
</style>

Key | Definition | Tip :bulb:
------- | ------- | -------
**Identifier** |   | Do not change this field. It maps your template to a database entry :warning:
**Name** |  This is the first info Swate users see about your template  |  Try using a short, descriptive and human readable name. Capitalize the first letter of the first word.
**Description** |  Here you can describe your template. |  Users interested in your template can read this in Swate, but not search by it.
**Organisation** |  The name of an organisation or community you create this template for. This facilitates searching for relevant templates in a specific organisation or community. |  Templates with the organisation "DataPLANT" are listed as `curated` in the Swate template database. All other templates are listed as `community`.
**Version** |  The version of the template following the [SemVer](https://semver.org/) convention.  |  For a new template use `1.0.0`. Raise the version number when updating an existing template.
**Tags** |  You can add any number of tags here. These tags are the basis to search for your template. | If possible add them as ontology terms with source ontology (TSR) and unique identifier (TAN). If similar tags already exist, consider reusing the existing ones.
**Endpoint Repositories** |  If your template complies with the requirements of an endpoint repository, you can add the respective repository here. | You may want to add them as ontology terms with source (TSR) and identifier (TAN).
**Authors** |  Add your name/alias here with as much information as you like.

---

# Template Metadata Example

Example template metadata and how it helps in Swate's template search

![](./../../../img/Swate-alpha-metadata.png)

---

# Add building blocks

- To add building blocks to the actual template, switch from the "Metadata" sheet to the "New Table" sheet on the bottom left.
- Using the "Add Building Block" button, you can add your desired building blocks with or without a unit.

![w:600](./../../../img/Swate-alpha-buildingblock.png)

---

# Recommendations for template design

- Keep the template as concise as possible
- If you miss a term or ontology, please follow the [DPBO contribution guide](https://github.com/nfdi4plants/nfdi4plants_ontology) to let us know
- If you add a template to address a missing method, try to add building blocks that cover experimental procedures (as Parameters) and features of the sample (as Characteristics) that the experimenter would use when working on an experiment of that type
- The typical order of the columns is: **Input** -> (all the Parameters and Characteristics in between in chronological order) -> **Output** -or- **Raw Data File** -or- **Derived Data File**. Try to think about in which order the experimenter in the lab will do their work. Try to match this chronological order from left to right. This step is optional and only meant to increase readability.

---

# Recommendations for template design (continued)

- Avoid using the building block type `Factor` in templates. Any given characteristic or parameter in one study or assay can become a factor in another study or assay depending on the experimental context or scientific question.
- Background info on your template can be shared alongsides the template via the [Swate-templates GitHub repository](https://github.com/nfdi4plants/Swate-templates/tree/main/background%20information)

---

# Recommendations for endpoint repository templates

- Please follow the following naming pattern: "Repository" - "Assay", e.g. MetaboLights - MS measurement
- The endpoint repository tag should be added ONLY in the "Endpoint repository" category in the metadata sheet
- By default repository templates should contain **only mandatory** information. In this case, please add "mandatory" as a tag.
- Optional or recommended information can be added with an extension template that contains only the optional/recommended information. In this case, please add "-extension" to the template name.
- If applicable, templates should be split into different assays.
- Templates should be checked for validity of requirements every ~ 6 months.

---

# Save your template

- You can download and save your template as xlsx-file by clicking on the disc symbol in the top right corner.
- Please adjust the name of the file to correspond to the name of the template, but use underscores instead of spaces.
- Save the file in a suitable folder within your local clone of the Swate templates repository.

---

# Your template is ready for upload :tada:

- Well done! You created a new template.
- You can now submit your template via GitHub
- Once your pull request is merged, you will receive an Email from "Swobup Commit Report"

---

# GitHub Workflow to add or edit templates

1. (Recommended) [Create an issue](https://github.com/nfdi4plants/Swate-templates/issues/new/choose) with background information about the template you want to add. This also serves as a place for discussion.
2. [Fork](https://docs.github.com/en/get-started/quickstart/fork-a-repo) the [Swate-templates repository](https://github.com/nfdi4plants/Swate-templates).
3. (Recommended) Create a feature branch (e.g. "template-xy") on your fork.
4. [Clone](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository) your fork-branch
5. Add/update **ONE** template ([see steps below](#creating-a-new-swate-template))
6. Commit, push and [sync your branch](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/syncing-a-fork).
7. Open a [pull request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests)
   > 👀 You can **reference your issue** typing `#` in the pull request's commenting dialog

---

## Known pitfalls with Swate Templates

- Opening and saving a Swate template .xlsx file with a program other than Microsoft Excel (e.g. LibreOffice, python script, R script) often destroys the template (backend). Please, avoid to upload this file into the GitHub repository.
