---
marp: true
theme: dataplant_marp-theme
layout: slides
author:
- name: Dominik Brilhaus
  github: https://github.com/brilator
  orcid: https://orcid.org/0000-0001-9021-3197
title: Schema-jsonld
---

## JSON-LD

<style scoped>
code {
    display: inline-block;
    width: 700px;
}
</style>

JSON-LD = JavaScript Object Notation for Linked Data

```json
<script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "SportsTeam",
    "name": "San Francisco 49ers",
    "member": {
      "@type": "OrganizationRole",
      "member": {
        "@type": "Person",
        "name": "Joe Montana"
      },
      "startDate": "1979",
      "endDate": "1992",
      "roleName": "Quarterback"
    }
  }
</script>
```
