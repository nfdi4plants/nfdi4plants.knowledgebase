# The ARC Club


## Swate Alpha Standalone

https://swate-alpha.nfdi4plants.org/


## arc access token


https://nfdi4plants.org/nfdi4plants.knowledgebase/docs/ArcCommanderManual/arc_access.html


## arc sync to hub

```bash
arc sync -f -r https://git.nfdi4plants.org/brilator/arcCommander-demo
```



## Add isa.investigation metadata

```bash
arc i person register --lastname Brilhaus --firstname Dominik --email brilhaus@hhu.de --affiliation CEPLAS
```


## git config 

```bash
git config --global user.name "Dominik Brilhaus"
```

```bash
git config --global user.email brilhaus@nfdi4plants.org
```



## git config check 

```bash
git config --global --get-regexp user
```


## Download demo data

https://nfdi4plant.sharepoint.com/:f:/s/Teaching/Eik7k-oJiMREgZ24kto7sIYBGxHmmZlS_Kzf7psk-5w-xg?e=u0sADd


## Screen Share


## Materials

https://nfdi4plants.org/nfdi4plants.knowledgebase/docs/teaching-materials/disseminations/2023-11-15_CEPLAS-ARC-Clubs/

## DataHUB Group



## Fav assays 

- phenotyping
- RNAseq
- gas exchange
- DNASeq

## Questions

- How to add two organisms to my characteristic in the isa.study file?
- Can I change in the encoded units in the isa.study file?
- Difference between importing protocols/data with arcitect and copying it into folder manually?
- What about workflows for code / runs?
- What happens if I use ARCitect but my cooperation partner uses ARCommander - will this create problems?
- Can i add additionnal files in the ARC structure?

- What are LSF files?

## Issues

- ARCitect now supports folders only... (not single files) on Windows
-