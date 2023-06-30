---
marp: true
theme: dataplant_marp-theme
layout: slides
author:
- name: Dominik Brilhaus
  github: https://github.com/brilator
  orcid: https://orcid.org/0000-0001-9021-3197
title: Schema-org02
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
