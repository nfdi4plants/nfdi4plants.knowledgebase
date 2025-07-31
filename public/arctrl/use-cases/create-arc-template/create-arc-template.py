from arctrl.arc import ARC
from arctrl.arctrl import ArcInvestigation, Person
from arctrl.arctrl import JsonController

import json

# Path where the ARC should be created
arcPath = "template-arc"

# Contacts
persons = [
  Person(first_name = "Viola", last_name = "Canina"),
  Person(first_name = "Jasmine", last_name = "Beetroot", mid_initials = "L")
]

# Investigation
inv = ArcInvestigation(
    identifier = "AthalianaColdStressSugar",
    title = "Arabidopsis thaliana cold acclimation",
    contacts = persons
    )

# Paths to study SOP(s) of type ARCtrl.json
studyJsonPaths = [
    "PlantGrowth.arctrl.json"
  ]

# Paths to assay SOP(s) of type ARCtrl.json
assayJsonPaths = [
    "ProtDigest-Trypsin.arctrl.json"
  ]

# Add study
def addStudyFromJson(studyJsonPath): 
    with open(studyJsonPath, encoding="utf-8") as f:
        studyJsonString = json.dumps(json.load(f))

    studyFromJson = JsonController.Study().from_json_string(studyJsonString)
    
    inv.AddStudy(studyFromJson)

for s in studyJsonPaths:
  print(s)
  addStudyFromJson(s)

# Add assay
def addAssayFromJson (assayJsonPath):
  
  with open(assayJsonPath) as f:
    assayJsonString = json.dumps(json.load(f))

  assayFromJson = JsonController.Assay().from_json_string(assayJsonString)

  inv.AddAssay(assayFromJson)

for a in assayJsonPaths:
  addAssayFromJson(a)

# Create ARC
arc = ARC( isa = inv )

# Write ARC to path
arc.Write(arcPath)
