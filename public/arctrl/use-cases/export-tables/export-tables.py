from arctrl.arc import ARC
from arctrl.arctrl import  JsonController

import json

# Path to a local ARC

arcPath = "Facultative-CAM-in-Talinum"

# Load local ARC from scaffold

arc = ARC.load(arcPath)

# Store the ArcInvestigation object for easier access
investigation = arc.ISA

######################################################
# Function to export a selected study to a .json file

def exportStudyToJson (arcInvestigation, studyIdentifier):
    study = arcInvestigation.GetStudy (studyIdentifier)
    studyJson = JsonController.Study().to_json_string(study, spaces = 2)
    
    with open(studyIdentifier + ".arctrl.json", 'w') as f:
        f.write(studyJson)


# Print all study identifiers

print (*investigation.StudyIdentifiers, sep='\n')

  # TalinumGenomeDraft
  # TalinumSamples-STRI

exportStudyToJson (investigation, "TalinumSamples-STRI")

######################################################
# Function to export a selected assay to a .json file

def exportAssayToJson (arcInvestigation, assayIdentifier):
    assay = arcInvestigation.GetAssay (assayIdentifier)
    assayJson = JsonController.Assay().to_json_string(assay, spaces = 2)
    
    with open(assayIdentifier + ".arctrl.json", 'w') as f:
        f.write(assayJson)

# Print all assay identifiers

print(*investigation.AssayIdentifiers, sep='\n')

  # MassHunter_targets
  # RNASeq
  # GCqTOF_targets

exportAssayToJson (investigation, "RNASeq")
