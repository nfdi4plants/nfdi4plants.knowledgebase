---
marp: true
theme: dataplant_marp-theme
paginate: true
footer: <a href="https://nfdi4plants.org"> <img id="footer-img1" src="../../images/_logos/DataPLANT/DataPLANT_logo_square_bg_transparent.svg"></a>
  <a href="https://creativecommons.org/licenses/by/4.0/"><img id="footer-img2" src="../../images/_logos/CreativeCommons/by.svg">
  </a>
style: 'footer {height: 30px; padding: 10px; bottom: 00px;} #footer-img1 {height:
  30px; padding-left: 0px;} #footer-img2 {height: 20px; padding-left: 20px; opacity:
  0.5;}'
layout: slides
author: Dominik Brilhaus
author_orcid: https://orcid.org/0000-0001-9021-3197
author_github: brilator
license: '[CC-BY 4.0](https://creativecommons.org/licenses/by/4.0/)'
date: 2023-03-16
description:
- Exercise to let participants appreciate FAIR principles on own data
- Experience the need for FAIR / structured data
- Compares to project handover on a flash drive or via email
title: exercise_FAIRProject
---

# Understand your colleague’s project

<style scoped>
h1{
  color: white;
}
section {
  text-align: center;
  background-color: #c21f3a;
}
section::after {
  display: none;
}
footer {
  display: none;
}
</style>

<!-- Source to slide(s) -->
<!-- ../../bricks/exercise_FAIRProject-Title.md -->


---

# Preparation (Tutor)

1. Assign arbitrary participant IDs for participants  
2. Prepare folder shared for this class
3. Invite people (see point below) and share their ArbitraryParticipantIDs via Email
4. Make sure to add copyright / sharing disclaimer and share in a folder only for that class

<!-- Source to slide(s) -->
<!-- ../../bricks/exercise_FAIRProject-Preparation_Tutor.md -->


---

# Prerequisites (Participants)
1. Share the data required to reproduce **your BA / MA / PhD thesis**  
2. In the [folder shared for this class](<link to folder>), we have prepared a folder <name of folder> with one subfolder per participant (named Participant01, Participant02, …). We separately send a list of assigned participant IDs via email.
3. Dump everything into your folder that led to the results presented in your bachelor thesis - in the status you left it after finishing your thesis. No worries, you will not be judged. This is just for training purposes.
4. For example: lab methods, materials, sample lists, protocols, measurement data from experiments, analyses, scripts…
5. Do not share the bachelor thesis itself (i.e. the text document).  
6. For data files larger than 50MB (e.g. sequencing or imaging data) please prepare simple placeholders. To do so, just open a text editor (not Word) and store blank files - e.g. store a “sample01.fastq” as a placeholder for a 5 GB sequencing file called sample01.fastq. If you have very many files, do this only for a subset.
7. Try to keep the overall folder size below 300 MB.  
 -->

<!-- Source to slide(s) -->
<!-- ../../bricks/exercise_FAIRProject-Prerequisites_Participants.md -->


---

# Understand your colleague’s project

1. Go to the shared folder prepared before class
1. Try to identify one experiment that led to results (e.g. a figure in the thesis)
1. What are the samples (e.g. plants, bacteria)?
1. How were the samples prepared (~ materials)?  
1. How was the experiment performed (~ methods)?
1. What is the raw data (~ results)?
1. How was the data analyzed (~ computational methods, statistics)?  
1. Collect all of the above in a `README_<YourArbitraryParticipantID>.txt` in the same folder.

<!-- Source to slide(s) -->
<!-- ../../bricks/exercise_FAIRProject-Understand_project.md -->


---

# Assignment

Participant | looks at project of
--- | ---
Participant01 | Participant02
Participant02 | Participant03
… | …
Participant n | Participant n+1

<!-- Source to slide(s) -->
<!-- ../../bricks/exercise_FAIRProject-Assignment.md -->


---
