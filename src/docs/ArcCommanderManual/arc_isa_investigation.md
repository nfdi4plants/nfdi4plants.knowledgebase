---
layout: docs
title: "Investigation"
date: 2022-12-13
add toc: true
add support: false
add sidebar: _sidebars/mainSidebar.md
---

## Addition of an isa.investigation.xlsx

> :warning: Make sure to close all isa.*.xlsx files before submitting a new command to the command line, as otherwise the information cannot be saved by the ARC Commander.

- Each ARC includes an isa.investigation file that serves as central information registry. The ARC’s content as well as global and detailed metadata are listed here. Any study or assay addition performed throughout the ARC’s working life must be registered in the isa.investigation.xlsx.
- `arc i create` will open an editor that asks for basic investigation information to create an ISA-TAB conform Excel file. If arguments are applied with the given command, no editor will open.

> :warning: Avoid using spaces in the identifier. Use underscores and capital letters instead.

> :bulb: Suggestion: Use your ARC name (without spaces) as your temporary identifier. 

| Field                   | Description                                                          | Input                                                                                                                 |
|-------------------------|----------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------|
| Identifier (Mandatory)  | A identifier or an accession number provided by a repository.        | 2021_TestARC05                                                                                                        |
| Title                   | A concise name given to the investigation.                           | Redox behaviour of yeast mutant M21                                                                                   |
| Description             | A textual description of the investigation.                          | M21 lacks in protein P09 and is susceptible to H2O2 Treatment. The molecular and phenotypical responses are studied.  |
| SubmissionDate          | The date on which the investigation was reported to the repository. Formatted as ISO8601 date <br>YYYY-MM-DD  |   2022-12-13                                                                                                                    |
| PublicReleaseDate       | The date on which the investigation was released publicly. Formatted as ISO8601 date <br>YYYY-MM-DD           |   2022-12-13                                                                                                                    |

- Instead of using the editor, the following command can be used.  
`arc investigation create --identifier "2021_TestARC05" --title "Redox behaviour of yeast mutant M21" --description "M21 lacks in protein P09 and is susceptible to H2O2 Treatment. The molecular and phenotypical responses are studied."`
- The isa.investigation.xlsx is added to root directory.

> :bulb: You don't need to fill every row from the beginning, as ARCs are intended as an evolving object that shapes over time.

## Registering persons to investigation

- Every person that is involved in the investigation can be registered with personal information using `arc i person register`.  

> :bulb: If an investigation covers several studies with various groups and persons, it may be beneficial to register corresponding contacts to the investigation and register all study-related persons in each study.

| Field                     | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Input                                                                           |
|---------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------|
| LastName (Mandatory)      | The last name of a person associated with the investigation.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Doe                                                                             |
| FirstName (Mandatory)     | The first name of a person associated with the investigation.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | John                                                                            |
| MidInitials               | The middle initials of a person associated with the investigation.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | P                                                                               |
| Email                     | The email address of a person associated with the investigation.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | jpdoe@mail.com                                                                  |
| Phone                     | The telephone number of a person associated with the investigation.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | +49(0)631 205 3045                                                              |
| Fax                       | The fax number of a person associated with the investigation.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |                                                                                 |
| Address                   | The address of a person associated with the investigation.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Paul Ehrlich Straße 23, 67663 Kaiserslautern, Germany                           |
| Affiliation               | The organization affiliation for a person associated with the investigation.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Department of M21 Measurements, Technische Universität Kaiserslautern, Germany  |
| ORCID <br> *(not ISA-Tab format, will be added as a comment)*                     | The ORCID iD of the person   | XXXX-XXXX-XXXX-XXXX  |
| Roles                     | Term to classify the role(s) performed by this person in the context of the investigation, which means that the roles reported here need not correspond to roles held withing their affiliated organization. Multiple annotations or values attached to one person can be provided by using a semicolon (“;”) Unicode (U0003+B) as a separator (e.g.: submitter;funder;sponsor). The term can be free text or from, for example, a controlled vocabulary or an ontology. If the latter source is used the Term Accession Number and Term Source REF fields below are required.  | supervisor                                                                      |
| RolesTermAccessionNumber  | The accession number from the Term Source associated with the selected term.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |                                                                                 |
| RolesTermSourceREF        | Identifies the controlled vocabulary or ontology that this term comes from. The Source REF has to match one of the Term Source Names declared in the Ontology Source Reference section.  RolesTermSourceREF: e.g. <https://sparontologies.github.io/scoro/current/scoro.html>                                                                                                                                                                                                                                                                                                                                                                |  SCORO                                                                               |

- Instead of using the editor, the following command can be used:  
`arc i person register -l Doe -f John -m P --email jpdoe@mail.com --phone "+49(0)631 205 3045" --address "Paul-Ehrlich-Straße 23, 67663 Kaiserslautern" --affiliation "Department of M21 Measurements, Technische Universität Kaiserslautern, Germany" --roles "supervisor"`

- optional: You can add with `--orcid XXXX-XXXX-XXXX-XXXX` the respective ORCID iD of the person to be registered as a comment (only possible via command line).

### Listing and inspecting registered persons

- Registered persons can be listed by `arc i person list`.
- To get detailed information about a specific entry use `arc i person get`. If no arguments are specified, an editor will request first and last name (mandatory) and optionally mid name initials to print all registered information into the shell.  

### Editing person information

- A person can be edited using `arc i person edit`.
  - If no further arguments are specified an editor opens, that asks for the person that should be edited.
  - If the person exists, another editor opens with information already known for the respective person. The required values can be edited.
- To circumvent editor pop ups, not `arc i person edit`, but `arc i person update` must be used:  
`arc i person update -l Kunze -f Heinz-Rudolf --email hrkunze@mail.com --address "Herzstraße 5, 12345 Musterstadt"`

### Removing a person

- A person can be removed from an investigation using `arc i person unregister`. An editor will request first and last name (mandatory) and optionally mid name initials to unregister the person from the isa.investigation.xlsx.
- Instead of using the editor, the following command can be used:
`arc i person unregister -l Doe -f John -m P`

## Registering publications to investigation

- Investigation publications may be a collection of all study publications or publications that emerge from study publications (reviews/integrating publications).
- Investigation publications can be registered by `arc i publication register`.

| Field                      | Description                                                                                                                                                                                 | Input                   |
|----------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------|
| DOI (Mandatory)            | A Digital Object Identifier (DOI) for that publication (where available).                                                                                                                   | 2021_ARC05_Pub01tmp     |
| PubMedID                   | The PubMed IDs of the described publication(s) associated with this investigation.                                                                                                          |                         |
| AuthorList                 | The list of authors associated with that publication.                                                                                                                                       | John P Doe; Eva Muller  |
| Title                      | The title of publication associated with the investigation.                                                                                                                                 |                         |
| Status                     | A term describing the status of that publication (i.e. submitted, in preparation, published).                                                                                               | in preparation          |
| StatusTermAccessionNumber  | The accession number from the Term Source associated with the selected term.                                                                                                                |   http://www.ebi.ac.uk/efo/EFO_0001795                      |
| StatusTermSourceREF        | Identifies the controlled vocabulary or ontology that this term comes from. The Source REF has to match one of the Term Source Names declared in the Ontology Source Reference section. The [Experimental Factor Ontology](https://www.ebi.ac.uk/ols/ontologies/efo) (EFO) is an example for describing the status.  | EFO                        |

### Listing and inspecting registered publications

- Registered publications can be listed by `arc i publication list`.
- To get detailed information about a specific entry use `arc i publication get`. If no arguments are specified an editor will request the doi to print all registered information into the shell.

### Editing publication information

- A publication can be edited using `arc i publication edit`.
  - If no further arguments are specified an editor opens, that asks for the publication doi that should be edited.
  - If the publication exists, another editor opens with information already known for the respective publication. The required values can be edited.
- Instead of using the editor, the following command can be used. To circumvent editor pop ups, not arc i publication edit, but arc i publication update must be used:  
`arc i publication update -d 2021_ARC05_Pub01tmp --title "Review on yeast P09 protein and its involvement in redox susceptibility".`

### Removing a publication

- A publication can be removed from an investigation using `arc i publication unregister`. A editor will request the doi to unregister the publication from the isa.investigation.xlsx.
- Instead of using the editor, the following command can be used:  
`arc i publication unregister -d 2021_ARC05_Pub01tmp`
