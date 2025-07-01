#r "nuget: ARCtrl"

open ARCtrl
open ARCtrl.Json
open ARCtrl.Helper

// Path where the ARC should be created
let arcPath = @"template-arc"

// Investigation
let inv = ArcInvestigation(
    identifier = "test",
    title = "test"
    )


// Add assay

let assay = ArcAssay.create "MyAssay"

let addAssayFromTable (tableJsonPath : string) (assay : ArcAssay) = 
    let jsonString = System.IO.File.ReadAllText tableJsonPath
    let tableFromJson = ArcTable.fromJsonString jsonString
    assay.AddTable tableFromJson

addAssayFromTable @"./rna_extraction.json" assay


inv.AddAssay assay

// Create ARC

let arc = ARC( isa = inv )

// Write ARC to path

arc.Write arcPath
