---
layout: docs
title: "Investigation"
published: 2022-12-13
add toc: true
add sidebar: _sidebars/arcCommanderManualSidebar.md
---

## 3.1. Addition of an isa.investigation.xlsx

- Each ARC includes an isa.investigation file that serves as central information registry. The ARC’s content as well as global and detailed meta data are listed here. Any study or assay addition performed throughout the ARC’s working life must be registered in investigation.isa.xlsx.
- arc i create will open an editor that asks for basic investigation information to create an ISA-TAB conform Excel file. If arguments are applied with the given command, no editor will open.

| Field                   | Description                                                          | Input                                                                                                                 |
|-------------------------|----------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------|
| Identifier (Mandatory)  | A identifier or an accession number provided by a repository.        | 2021_TestARC05                                                                                                        |
| Title                   | A concise name given to the investigation.                           | Redox behaviour of yeast mutant M21                                                                                   |
| Description             | A textual description of the investigation.                          | M21 lacks in protein P09 and is susceptible to H2O2 Treatment. The molecular and phenotypical responses are studied.  |
| SubmissionDate          | The date on which the investigation was reported to the repository.  |                                                                                                                       |
| PublicReleaseDate       | The date on which the investigation was released publicly.           |                                                                                                                       |

- Instead of using the editor, the following command can be used.  
`arc i create --identifier "2021_TestARC05" --title "Redox behaviour of yeast mutant M21" --description "M21 lacks in protein P09 and is susceptible to H2O2 Treatment. The molecular and phenotypical responses are studied."`
- The isa.investigation.xlsx is added to root directory.

## 3.2. Registering persons to investigation

- Every person, that is involved in the investigation can be registered with personal information using `arc i person register`.  
_Note: If an investigation covers several studies with various groups and persons, it may be beneficial to register corresponding contacts to investigation and register all study-related persons in each study (see X.X).__

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
| Roles                     | Term to classify the role(s) performed by this person in the context of the investigation, which means that the roles reported here need not correspond to roles held withing their affiliated organization. Multiple annotations or values attached to one person can be provided by using a semicolon (“;”) Unicode (U0003+B) as a separator (e.g.: submitter;funder;sponsor). The term can be free text or from, for example, a controlled vocabulary or an ontology. If the latter source is used the Term Accession Number and Term Source REF fields below are required.  | supervisor                                                                      |
| RolesTermAccessionNumber  | The accession number from the Term Source associated with the selected term.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |                                                                                 |
| RolesTermSourceREF        | dentifies the controlled vocabulary or ontology that this term comes from. The Source REF has to match one of the Term Source Names declared in the Ontology Source Reference section.  RolesTermSourceREF: https://sparontologies.github.io/scoro/current/scoro.xml                                                                                                                                                                                                                                                                                                                                                                |                                                                                 |

 

- Instead of using the editor, the following command can be used:  
`arc i person register -l Doe -f John -m P --email jpdoe@mail.com --phone "+49(0)631 205 3045" --address "Paul-Ehrlich-Straße 23, 67663 Kaiserslautern" --affiliation "Department of M21 Measurements, Technische Universität Kaiserslautern, Germany" --roles "supervisor"`

### 3.2.1 Listing and inspecting registered persons 

- Registered persons can be listed by `arc i person list`. 
- To get detailed information about a specific entry use `arc i person get`. If no arguments are specified an editor will request first and last name (mandatory) and optionally mid name initials to print all registered information into the shell.  

### 3.2.2. Editing person information

- A person can be edited using `arc i person edit`.
  - If no further arguments are specified an editor opens, that asks for the person that should be edited.
  - If the person exists, another editor opens with information already known for the respective person. The required values can be edited.
- Instead of using the editor, the following command can be used. To circumvent editor pop ups, not `arc i person edit`, but `arc i person update` must be used:  
`arc i person update -l Kunze -f Heinz-Rudolf --email hrkunze@mail.com --address "Herzstraße 5, 12345 Musterstadt"`

### 3.2.3 Removing a person

- A person can be removed from an investigation using `arc i person unregister`. An editor will request first and last name (mandatory) and optionally mid name initials to unregister the person from the isa.investigation.xlsx.
- Instead of using the editor, the following command can be used:
`arc i person unregister -l Doe -f John -m P`

## 3.3. Registering publications to investigation

- Investigation publications may be a collection of all study publications or publications that emerge from study publications (reviews/integrating publications).
- Investigation publications can be registered by `arc i publication register`.

| Field                      | Description                                                                                                                                                                                 | Input                   |
|----------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------|
| DOI (Mandatory)            | A Digital Object Identifier (DOI) for that publication (where available).                                                                                                                   | 2021_ARC05_Pub01tmp     |
| PubMedID                   | The PubMed IDs of the described publication(s) associated with this investigation.                                                                                                          |                         |
| AuthorList                 | The list of authors associated with that publication.                                                                                                                                       | John P Doe; Eva Muller  |
| Title                      | The title of publication associated with the investigation.                                                                                                                                 |                         |
| Status                     | A term describing the status of that publication (i.e. submitted, in preparation, published).                                                                                               | in preparation          |
| StatusTermAccessionNumber  | The accession number from the Term Source associated with the selected term.                                                                                                                |                         |
| StatusTermSourceREF        | Identifies the controlled vocabulary or ontology that this term comes from. The Source REF has to match one the Term Source Name declared in the in the Ontology Source Reference section.  |                         |

### 3.3.1 Listing and inspecting registered publications
- Registered publications can be listed by `arc i publication list`.
- To get detailed information about a specific entry use `arc i publication get`. If no arguments are specified an editor will request the doi to print all registered information into the shell.

### 3.3.2 Editing publication information
- A publication can be edited using `arc i publication edit`.
  - If no further arguments are specified an editor opens, that asks for the publication doi that should be edited.
  - If the publication exists, another editor opens with information already known for the respective publication. The required values can be edited.
- Instead of using the editor, the following command can be used. To circumvent editor pop ups, not arc i publication edit, but arc i publication update must be used:  
`arc i publication update -d 2021_ARC05_Pub01tmp --title "Review on yeast P09 protein and its involvement in redox susceptibility".`

### 3.3.3 Removing a publication
- A publication can be removed from an investigation using `arc i publication unregister`. A editor will request the doi to unregister the publication from the isa.investigation.xlsx.
- Instead of using the editor, the following command can be used:  
`arc i publication unregister -d 2021_ARC05_Pub01tmp`