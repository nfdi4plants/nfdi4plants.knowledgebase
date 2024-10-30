---
marp: true
theme: dataplant_marp-theme
paginate: true
footer: ' <a href="https://nfdi4plants.org"> <img id="footer-img1" src="./../../../img/logos/DataPLANT/DataPLANT_logo_square_bg_transparent.svg"></a>
  <a href="https://ceplas.eu"> <img id="footer-img2" src="./../../../img/logos/CEPLAS/CEPLAS_Icon.jpeg"></a><a
  href="https://creativecommons.org/licenses/by/4.0/"><img id="footer-img3" src="./../../../img/logos/CreativeCommons/by.svg"></a> '
style: 'footer {height: 30px;padding: 10px;bottom: 00px;} #footer-img1 {height: 30px;padding-left:
  0px;} #footer-img2 {height: 30px;padding-left: 20px;opacity: 0.5;} #footer-img3
  {height: 20px;padding-left: 20px;opacity: 0.5;}'
layout: slides
title: lesson_SchemataStandards
author:
- name: Dominik Brilhaus
  github: https://github.com/brilator
  orcid: https://orcid.org/0000-0001-9021-3197
learning outcomes:
- distinguish schematized from non-schematized metadata
keywords:
- null
teaching mode: inhale/listen
duration_minutes: 7
date: 2022-11-10
---

# Schemas, standards and machine-readability

<!-- Source to slide(s) -->
<!-- ../../bricks/SchemaStandards-title.md -->


---

# Structured data and the internet

Schema.org
- create, maintain, and promote schemas for structured data on the Internet, on web pages, in email messages, ...
- Structured data can be used to ***mark up*** all kinds of items from products to events to recipes
- Communicate with search engines (-> SEO, search engine optimization)
- Enhance findability from search engine results
- Provide context to an ambigous webpage
- Metadata interoperability and standardization across all website using schema.org

<!-- 
TODO: 
Source: bioschemas.org
 -->

<!-- Source to slide(s) -->
<!-- ../../bricks/Schema-org01.md -->


---

# Structured data and the internet: Schema.org

<style scoped>
code {
    display: inline-block;
    width: 700px;
    font-size: 18px;
}
</style>

https://schema.org/Person

```json
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "VisualArtwork",
      "name": "La trahison des images",
      "alternateName": "The Treachery of Images",
      "image": "http://upload.wikimedia.org/wikipedia/en/b/b9/MagrittePipe.jpg",
      "description": "The painting shows a pipe. Below it, Magritte...",
      "creator": [
        {
          "@type": "Person",
          "name": "René Magritte",
          "sameAs": "https://www.freebase.com/m/06h88"
        }
      ],
      "width": [
        {
          "@type": "Distance",
          "name": "940 mm"
        }
      ],
      "height": [
        {
          "@type": "Distance",
          "name": "635 mm"
        }
      ],
      "artMedium": "oil",
      "artworkSurface": "canvas"
    }
    </script>
```

<!-- Source to slide(s) -->
<!-- ../../bricks/Schema-org02.md -->


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

<!-- Source to slide(s) -->
<!-- ../../bricks/Schema-jsonld.md -->


---

## RDFa

RDFa = Resource Description Framework in Attributes

```
<div vocab="http://schema.org/" typeof="SportsTeam">
  <span property="name">San Francisco 49ers</span>
  <div property="member" typeof="OrganizationRole">
    <div property="member" typeof="http://schema.org/Person">
      <span property="name">Joe Montana</span>
    </div>
    <span property="startDate">1979</span>
    <span property="endDate">1992</span>
    <span property="roleName">Quarterback</span>
  </div>
</div>
```

<!-- Source to slide(s) -->
<!-- ../../bricks/Schema-RDFa.md -->


---

# Standards

### Dublin Core

https://www.dublincore.org/schemas/

### DataCite Schema

- Schema: http://schema.datacite.org/meta/kernel-4.3/metadata.xsd
- Full Example: https://schema.datacite.org/meta/kernel-4.3/example/datacite-example-full-v4.xml

<!-- Source to slide(s) -->
<!-- ../../bricks/Standards.md -->


---

## DataCite Schema: Simple Example

<style scoped>
code {
    /* display: inline-block; */
    font-size: 12px;
}
</style>

```xml
...
  <identifier identifierType="DOI">10.5072/D3P26Q35R-Test</identifier>
  <creators>
    <creator>
      <creatorName nameType="Personal">Fosmire, Michael</creatorName>
      <givenName>Michael</givenName>
      <familyName>Fosmire</familyName>
    </creator>
    <creator>
      <creatorName nameType="Personal">Wertz, Ruth</creatorName>
      <givenName>Ruth</givenName>
      <familyName>Wertz</familyName>
    </creator>
    <creator>
      <creatorName nameType="Personal">Purzer, Senay</creatorName>
      <givenName>Senay</givenName>
      <familyName>Purzer</familyName>
    </creator>
  </creators>
  <titles>
    <title xml:lang="en">Critical Engineering Literacy Test (CELT)</title>
  </titles>
  <publisher xml:lang="en">Purdue University Research Repository (PURR)</publisher>
  <publicationYear>2013</publicationYear>
  <subjects>
    <subject xml:lang="en">Assessment</subject>
    <subject xml:lang="en">Information Literacy</subject>
    <subject xml:lang="en">Engineering</subject>
    <subject xml:lang="en">Undergraduate Students</subject>
    <subject xml:lang="en">CELT</subject>
    <subject xml:lang="en">Purdue University</subject>
  </subjects>
  <language>en</language>
  <resourceType resourceTypeGeneral="Dataset">Dataset</resourceType>
...
```

https://schema.datacite.org/meta/kernel-4.3/example/datacite-example-dataset-v4.xml

<!-- Source to slide(s) -->
<!-- ../../bricks/Standards-DataCite.md -->
