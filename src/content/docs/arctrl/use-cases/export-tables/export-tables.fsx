#r "nuget: ARCtrl"
#r "nuget: ARCtrl.QueryModel"

open ARCtrl
open ARCtrl.QueryModel
open ARCtrl.Json
open System.IO

// Path to local ARC

// let arcPath = @"local-arc"
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

// for i in arc.ISA.Value.Assays do
//   printfn "# id: %s" i.Identifier
//   for j in i.Tables do
//     printfn "### table: %s" j.Name
//     i.GetTable "illumina"


// arc.ISA.Value.Assays
// |> Seq.iter (fun a -> printfn "%s" a.Identifier)


// arc.ISA.Value.Assays
// |> Seq.map (fun a -> a.TableNames)


// let assays = arc.ISA.Value.Assays
// // |> Seq.map (fun a -> a.GetTable "illumina")

// assays[1].GetTable "illumina"
// |> ArcTable.toJsonString 2
// |> fun c -> File.WriteAllText("illumina2.json", c)
