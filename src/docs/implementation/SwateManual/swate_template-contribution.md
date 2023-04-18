---
layout: docs
title: Swate Template - Contribution Guide
published: 2023-04-18
author: 
    - Kevin Frey
    - Dominik Brilhaus
add toc: true
add sidebar: _sidebars\swateManualSidebar.md
---

## Prerequisites

- Access to a latest-version installation of **Swate Core** and **Swate Experts**
- Some routine with Swate (e.g. from this manual and available quickstarts)
- GitHub account and some routine with GitHub workflows

:bulb: Feel free to contact us for Data Steward support, if you are not familiar to GitHub or Swate, but would like to contribute a Swate template for your community.

## Git Workflow to add or edit templates

2. [Fork](https://docs.github.com/en/get-started/quickstart/fork-a-repo) the [Swate-templates repository](https://github.com/nfdi4plants/Swate-templates).
3. (Recommended) [Create an issue](https://github.com/nfdi4plants/Swate-templates/issues/new/choose) with background information about the template you want to add. This also serves as a place for discussion.
4. (Recommended) Create a feature branch on your fork.
5. [Clone](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository) your fork-branch
6. Add/update **ONE** template ([see steps below](#creating-a-new-template))
7. Commit, push and [sync your branch](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/syncing-a-fork).
    - 👀 Add your issue id (for example #32) to your commit so it is automatically linked.
8. Open a [pull request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests) **referencing your issue**. :tada:

## Creating a new template

### Create a new Excel file

- Create e.g. `my-template.xlsx`
- Save it in a suitable folder within your local clone

> :bulb: check the subfolder `README.md`s  
> :construction: file and directory naming convention is work in progress

### Create an annotation table

- Open `my-template.xlsx`
- create an [Annotation Table](./Docs02-Annotation-Table.html).

### Add building blocks

- [Add building blocks](./Docs03-Building-Blocks.html) to your template's Annotation Table
  
> :bulb: **Recommendations** for suitable building blocks
> 
> - keep the template as concise as possible
> - if you add a template with a specific endpoint repository (ER) in mind, you may want to add columns that match the required fields of this ER
> - if you add a template because the research/methodical topic is missing, try to add columns that cover experimental procedures (as Parameters) and features of the sample (as Characteristics) that the experimenter would do when working on an experiment of that type

### Add Template Metadata

- Open the "Template Metadata" tab in **Swate Experts**
- Click "Create Metadata"
- A new worksheet will open called "SwateMetadataSheet"

### Fill Template Metadata

The metadata sheet contains the following fields:

- **Id**: Do not change this field. It maps your template to a database entry.
- **Name**: This is first info Swate users see about your template.  
    > :bulb: Try using a short, descriptive and human readable name. (Think YouTube video title)
- **Version**: The versioning follows the [SemVer](https://semver.org/) convention. 
    > :bulb: For a new template use `1.0.0`. Raise the version number when updating an existing template.
- **Description**: Here you can describe your template. Users interested in your template can read this in Swate, but not search by it.
- **Organisation**: The name of an organisation or community you create this template for. This facilitates searching for relevant templates in a specific organisation or community.
    > :bulb: Templates with the organisation "DataPLANT" are listed as `curated` in the Swate template database. All other templates are listed as `community`.
- **Table**: This value **must match** the name of the annotation table you want to use as a template. To find the name click on any field in your annotation table, then "Table Design". Copy the name to the "Table" value field.
![Image on how to find table name in Excel](./img/find_table_name.jpg)
- **ER list**: You can add any number of endpoint repositories to which your template complies here. You may want to add them as ontology terms with unique identifier and source.
- **TAGS list**: You can add any number of tags here. These tags are used to search for your template. You may want to add them as ontology terms with unique identifier and source.
- **AUTHORS list**: Add your name/alias here with as much information as you like.
- Example:
![Image of example metadata table](./img/example_metadata.jpg)


> :warning: Make sure to never change any of the fields in the first column. These "key" fields must exist to create a functional template.  
> Always only change the "value" fields (second and following columns).

### Your template is ready for upload :tada:

- Well done! You created a new template.
- You can now submit your template via the git workflow described above. 
- Once your pull request is merged, you will receive a "Swobup Commit Report" Email

## Recommended best practices

- Try to think about in which order the experimenter in the lab will do their work. Try to match this chronological order from left to right. The normal order of the columns is: **Source Name** -> (all the Parameters and Characteristics in between in chronological order) -> **Sample Name** -or- **Raw Data File** -or- **Derived Data File**. This step is optional and only meant to increase readability.
- Below the header you can add exemplary terms as in this example:  
![image](https://user-images.githubusercontent.com/47781170/146252236-0dd11621-76e9-4d28-b5fe-b495362a1cc5.png)  
These examples help as additional information for other Data Stewards and are not transferred into the Swate template database.
- Use ontology terms for **ER list** and **TAGS list**.
- Add protocol type and any [minimal information standards](https://en.wikipedia.org/wiki/Minimum_information_standard) your template complies with to the **TAGS list**.

## Known pitfalls

- Opening and saving a Swate template .xlsx file with a spread sheet program other than Microsoft Excel (e.g. LibreOffice) will destroy the template (backend). Please, avoid to upload this file into the GitHub repository, even if the annotation table itself looks intact and can be worked on with the Swate plugin
