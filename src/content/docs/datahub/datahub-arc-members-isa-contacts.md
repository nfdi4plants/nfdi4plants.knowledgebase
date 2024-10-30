---
title: ARC members and Investigation contacts
lastUpdated: 2024-03-06
authors:
  - dominik-brilhaus
sidebar:
  order: 10
---

:::tip
Members, groups, and roles set via the DataHUB can easily be confused with contributors added as ISA metadata to an ARC, e.g. collaborators added to investigation, study or assay. These are not the same and they are not automatically synced.
:::

### ARC members in the DataHUB are not the same as ARC contacts in ISA metadata

Data in the ARC can be annotated with metadata. Metadata annotation in the ARC is based on the [ISA metadata model](/core-concepts/isa-file-types) and includes several points to add the the contributors to the overall investigation (&rarr; "Investigation Contacts"), one linked study (&rarr; "Study Contacts" of that study), or one linked assay (&rarr; "Assay Performers" of that assay). For all three types of contributors, contact information (e.g. first and last name, affiliation, ORCID, email) can be added.

Although the contacts added to the ARC's metadata may be the same persons as those added as members to the ARC in the DataHUB, there is currently no automation involved:

- Contributors added to an ARC's metadata are not automatically invited to or notified about the ARC in the DataHUB.
- And *vice versa*, members invited to an ARC in the DataHUB are not automatically added to any ISA metadata in the ARC.

Creating an ARC with contributors and uploading it to the DataHUB is conceptually, the same as creating a manuscript with authors for publication and sharing it via any cloud service. You can invite members to your DataHUB-shared ARC just as you can invite collaborators to your cloud-shared manuscript and these may not be the same legal people as added to your investigation contacts (ARC) or author list (manuscript).
