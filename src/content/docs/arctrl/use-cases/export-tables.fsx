#r "nuget: ARCtrl"
#r "nuget: ARCtrl.QueryModel"

open ARCtrl
open ARCtrl.QueryModel
open ARCtrl.Json
open System.IO

// Path to local ARC

let arcPath = @"Facultative-CAM-in-Talinum"

// Load local ARC from scaffold

let arc = ARC.load arcPath

let allArcTables = arc.ISA.Value.ArcTables

// Print all Table Names

allArcTables.TableNames

// val it: string list =
// ["TalinumGenomeDraft"; "plant_material"; "mh-quant-results";
//  "mh-quant-report"; "rna_extraction"; "illumina"; "metabolite_extraction";
//  "gas_chromatography"; "mass_spec"]

// Create a function to export a selected Table to a .json file

let exportArcTableToJson (at: ArcTables) (tableName : string) (jsonPath : string) =
  at.GetTable tableName
  |> ArcTable.toJsonString 2
  |> fun c -> File.WriteAllText(jsonPath, c)

// Export table to json

exportArcTableToJson allArcTables "rna_extraction" "rna_extraction.json"

exportArcTableToJson allArcTables "illumina" "illumina.json"
