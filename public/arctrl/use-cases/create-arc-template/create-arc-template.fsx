#r "nuget: ARCtrl"

open ARCtrl
open ARCtrl.Json
open ARCtrl.Helper

// Path where the ARC should be created
let arcPath = "template-arc"

// Contacts
let persons = ResizeArray[
  Person(firstName = "Viola", lastName = "Canina");
  Person(firstName = "Jasmine", lastName = "Beetroot", midInitials = "L");
  ]

// Investigation
let inv = ArcInvestigation(
    identifier = "AthalianaColdStressSugar",
    title = "Arabidopsis thaliana cold acclimation",
    contacts = persons
    )

// Paths to study SOP(s) of type ARCtrl.json
let studyJsonPaths = 
  [
    @"PlantGrowth.arctrl.json"
  ]

// Paths to assay SOP(s) of type ARCtrl.json
let assayJsonPaths = 
  [
    @"ProtDigest-Trypsin.arctrl.json"
  ]

// Add study

let addStudyFromJson (studyJsonPath : string) = 

  let studyJsonString = System.IO.File.ReadAllText(studyJsonPath)
  let studyFromJson = ArcStudy.fromJsonString(studyJsonString)

  inv.AddStudy studyFromJson

studyJsonPaths
|> Seq.iter addStudyFromJson

// Add assay

let addAssayFromJson (assayJsonPath : string) = 

  let assayJsonString = System.IO.File.ReadAllText(assayJsonPath)
  let assayFromJson = ArcAssay.fromJsonString(assayJsonString)

  inv.AddAssay assayFromJson

assayJsonPaths
|> Seq.iter addAssayFromJson

// Create ARC

let arc = ARC( isa = inv )

// Write ARC to path

arc.Write arcPath
