---
# Slide-related yaml
marp: true
theme: dataplant_marp-theme
paginate: true
headingDivider: 
  - 1
  - 2
footer: '<a href="https://nfdi4plants.org"> <img id="footer-img1" src="../../images/_logos/DataPLANT/DataPLANT_logo_square_bg_transparent.svg"></a> <a href="https://creativecommons.org/licenses/by/4.0/"><img id="footer-img2" src="../../images/_logos/CreativeCommons/by.svg"> </a>'
style: 'footer {height: 30px; padding: 10px; bottom: 00px;} #footer-img1 {height: 30px; padding-left: 0px;} #footer-img2 {height: 20px; padding-left: 20px; opacity: 0.5;}'
# Training yaml
layout: slides
author: Dominik Brilhaus
author_orcid: https://orcid.org/0000-0001-9021-3197
author_github: brilator
license: "[CC-BY 4.0](https://creativecommons.org/licenses/by/4.0/)"
date: 2023-03-16
description:
  - Learn examples for data structures
  - Directories
  - File naming (convention)
  - FAIR digital object (FDO)
learning outcomes:
  - evaluate an appropriate structure for research data
  - give examples for systematic file names
---

# Directory structures and file naming

![bg right w:500](../../images/collage_scream_img1.png)


<!-- ################# -->
<!-- Source to slide(s) -->
<!-- ../../bricks/lesson_OrderStructure-Directory_structures_and_file_naming.md -->
<!-- ################# -->


# Directory structures - Why bother?

<style scoped>
figure {
  position: relative;
}
figcaption {
  position: absolute;
  font-size: 15px;
}
</style>

<figure>
  <img src="../../images/grocery-store-comparison.jpg" width=80%>
    <figcaption>https://www.ezcomputersolutions.com/wp-content/uploads/2017/07/grocery-store-comparison-1024x600.jpg</figcaption>
</figure>


<!-- ################# -->
<!-- Source to slide(s) -->
<!-- ../../bricks/lesson_OrderStructure-Directory_structures_Why.md -->
<!-- ################# -->


# Logical aspects

<style scoped>
.columns {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1rem;
}
.cropped1 {
    width: 800px; /* width of container */
    height: 300px; /* height of container */
    object-fit: cover;
    display: block;
    margin: 0px auto 0px auto;
    object-position: 0% 150%;
}
</style>

<div class="columns">
<div class="columns-left">

- Categorize and group files
  - Research projects
  - Time
  - Location
  - Methods

</div>
<div class="columns-right">

- Generic to specific
- Understandable
- Unambiguous
- Easy to follow

</div>
</div>


<img class="cropped1" src="../../images/structure_directories_fileNaming_seq1.png">


<!-- ################# -->
<!-- Source to slide(s) -->
<!-- ../../bricks/lesson_OrderStructure-Logical_aspects.md -->
<!-- ################# -->


# Technical aspects

<style scoped>
.cropped1 {
    width: 900px; /* width of container */
    height: 310px; /* height of container */
    object-fit: cover;
    display: block;
    margin: 0px auto 0px auto;
    object-position: 0% 140%;
}
</style>

- Hierarchy (path) = high level descriptors for files
- Path + file name = unique file ID
- Different folder structures are usually suited to different data / needs / projects
- Avoid unnecessarily deep structures
- Think: New folder vs. sub-folder?

<img class="cropped1" src="../../images/structure_directories_fileNaming_seq2.png">


<!-- ################# -->
<!-- Source to slide(s) -->
<!-- ../../bricks/lesson_OrderStructure-Technical_aspects.md -->
<!-- ################# -->


# File Naming

<style scoped>
.columns {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1rem;
}
figure {
  position: relative;
  width: 250px;
}
figcaption {
  position: absolute;
  right: 0;
  padding-left: 50px;
  font-size: 15px;
  writing-mode: vertical-rl;
}
</style>

<div class="columns">
<div class="columns-left">

- Primary identifier of a file
- Good and meaningful names
  - Hint towards contents of file
  - Help in discovery, classification, sorting, versioning
- Consider (in future)
  - Searching
  - Sorting
  - Uniqueness

</div>
<div class="columns-right">

<figure>
  <img src="../../images/comic_XKCD_untitled_doc.png">
  <figcaption> <a href="https://xkcd.com/1459/">https://xkcd.com/1459/</a></figcaption>
</figure>

</div>
</div>



<!-- ################# -->
<!-- Source to slide(s) -->
<!-- ../../bricks/lesson_OrderStructure-File_Naming.md -->
<!-- ################# -->


# File Naming Checklist - Technical

- Avoid full-stops
- Avoid spaces
- Avoid special characters
  `~ !@ # $ % ^ & * + ( ) ;:< > ? ., []{ } ' " | ä ö ü ß`
- Use short, precise, relevant names  
  - Less than 25 characters
  - Distinguishable (name+directory path)
  - Unique (search for filename should better not result in multiple results)


<!-- ################# -->
<!-- Source to slide(s) -->
<!-- ../../bricks/lesson_OrderStructure-File_Naming_Checklist_Technical.md -->
<!-- ################# -->


# File Naming Checklist - Cases

- Kebab-case: The-quick-brown-fox-jumps-over-the-lazy-dog.txt
- CamelCase: TheQuickBrownFoxJumpsOverTheLazyDog.txt
- Snake_case: The_quick_brown_fox_jumps_over_the_lazy_dog.txt


<!-- ################# -->
<!-- Source to slide(s) -->
<!-- ../../bricks/lesson_OrderStructure-File_Naming_Checklist_Cases.md -->
<!-- ################# -->


# File Naming Checklist

- Use descriptive names
- Abbreviations
  - project name - project number - dept name - team - location - version - date - sampletype - etc.)
- Reverse dates for recurring events (Timestamp : <span style="color:#4FB3D9">YYYY-MM-DD</span>)
- For names (lastnamef)
- Numbering (<span style="color:#4FB3D9">001, 002, ... 010</span> - <span style="color:#c21f3a">NOT 1, 2, ... 10</span>)


<!-- ################# -->
<!-- Source to slide(s) -->
<!-- ../../bricks/lesson_OrderStructure-File_Naming_Checklist.md -->
<!-- ################# -->


# Adding dates to file names

<style scoped>
.columns {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    grid-gap: 100px;
}
figure {
  position: relative;
  width: 400px;
}
figcaption {
  position: absolute;
  right: 0;
  height: 400px;
  padding-left: 50px;
  font-size: 15px;
  writing-mode: vertical-rl;
}
</style>

<div class="columns">
<div class="columns-left">

- Dates in the [ISO8601](https://en.wikipedia.org/wiki/ISO_8601) format (YYYY-MM-DD) are recommended as prefix to file names of time-stamped files
- Automatically sorted (independent of the operating system)
- Intuitively human-readable
  - `20221111_presentation` vs.  
    `2022-11-11_presentation`
- Easy to parse by scripts
  - 2022 // 11 // 11  
  - 2022 // Nov // 11
</div>
<div class="columns-right">

<figure>
  <img src="../../images/comic_datingProgrammer.png" width=400px>
    <figcaption>https://www.reddit.com/r/ProgrammerHumor/comments/uptfy9/dating_a_programmer/</figcaption>
</figure>

</div>
</div>


<!-- ################# -->
<!-- Source to slide(s) -->
<!-- ../../bricks/lesson_OrderStructure-Adding_dates_to_file_names.md -->
<!-- ################# -->


# Directory structure or file name?

![h:500](../../images/structure_directories_fileNaming_seq7.png)

# Directory structure or file name?

![w:900](../../images/structure_directories_fileNaming_seq3.png)



<!-- ################# -->
<!-- Source to slide(s) -->
<!-- ../../bricks/lesson_OrderStructure-Directory_structure_or_file_name.md -->
<!-- ################# -->


<!-- ################# -->
<!-- Source to slide(s) -->
<!-- ../../bricks/lesson_OrderStructure-To_rename_or_not_to_rename?.md -->
<!-- ################# -->


<!-- ################# -->
<!-- Source to slide(s) -->
<!-- ../../bricks/lesson_OrderStructure-"Agree_on_a_system".md -->
<!-- ################# -->


# Simple solution

![h:500](../../images/structure_directories_fileNaming_seq6.png)

<!-- ################# -->
<!-- Source to slide(s) -->
<!-- ../../bricks/lesson_OrderStructure-Simple_solution.md -->
<!-- ################# -->

