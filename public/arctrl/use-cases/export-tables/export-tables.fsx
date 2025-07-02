#r "nuget: ARCtrl"
#r "nuget: ARCtrl.QueryModel"

open ARCtrl
open ARCtrl.QueryModel
open ARCtrl.Json
open System.IO

// Path to a local ARC

let arcPath = @"Facultative-CAM-in-Talinum"

// Load local ARC from scaffold

let arc = ARC.load arcPath

// Store the ArcInvestigation object for easier access
let investigation = arc.ISA.Value

////////////////////////////////////////////////
// Function to export a selected study to a .json file

let exportStudyToJson (a: ArcInvestigation) (studyName : string) =
  a.GetStudy studyName
  |> ArcStudy.toJsonString 2
  |> fun c -> File.WriteAllText(studyName + ".arctrl.json", c)

// Print all study identifiers

investigation.StudyIdentifiers
|> Seq.iter (printfn "%s")

exportStudyToJson investigation "TalinumSamples-STRI"

////////////////////////////////////////////////
// Function to export a selected assay to a .json file

let exportAssayToJson (a: ArcInvestigation) (assayName : string) =
  a.GetAssay assayName
  |> ArcAssay.toJsonString 2
  |> fun c -> File.WriteAllText(assayName + ".arctrl.json", c)

// Print all assay identifiers

investigation.AssayIdentifiers
|> Seq.iter (printfn "%s")

exportAssayToJson investigation "RNASeq"

////////////////////////////////////////////////
// Function to export a selected table to a .json file

let exportArcTableToJson (a: ArcInvestigation) (tableName : string) =
  let at = investigation.ArcTables
  at.GetTable tableName
  |> ArcTable.toJsonString 2
  |> fun c -> File.WriteAllText(tableName + ".arctrl.json", c)

// Print all Table Names

investigation.ArcTables.TableNames |> Seq.iter (printfn "%s")

// val it: string list =
// ["TalinumGenomeDraft"; "plant_material"; "mh-quant-results";
//  "mh-quant-report"; "rna_extraction"; "illumina"; "metabolite_extraction";
//  "gas_chromatography"; "mass_spec"]

exportArcTableToJson investigation "rna_extraction"
