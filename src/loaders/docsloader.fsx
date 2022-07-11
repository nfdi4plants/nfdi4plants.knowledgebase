#r "../_lib/Fornax.Core.dll"
#r "../_lib/Markdig.dll"
#load "../../.paket/load/net5.0/main.group.fsx"

open System.IO
open Fornax

let contentDir = "docs"

type DocsConfig = {
    disableLiveRefresh: bool
}

let loader (projectRoot: string) (siteContent: SiteContents) =
    let docsPath = Path.Combine(projectRoot, contentDir)
    let options = EnumerationOptions(RecurseSubdirectories = true)
    let files = 
        Directory.GetFiles(docsPath, "*", options)
        |> Array.filter (fun n -> n.Contains @"\_sidebars\" |> not && n.Contains "/_sidebars/" |> not)
        |> Array.filter (fun n -> n.Contains @"\_ignored\" |> not && n.Contains "/_ignored/" |> not)
        |> Array.filter (fun n -> n.Contains "README.md" |> not)
        |> Array.filter (fun n -> n.EndsWith ".md")

    printfn "%A" files

    let docs = 
        let loadDocs (filePath:string) = 
            #if WATCH
            Nfdi4Plants.Docs.loadFile(projectRoot, contentDir, filePath)
            #else
            Nfdi4Plants.Docs.loadFile(projectRoot, contentDir, filePath, productionBasePath = "nfdi4plants.knowledgebase")
            #endif
        files 
        |> Array.map loadDocs

    // let docs0 = siteContent.TryGetValues<DocsData> () |> Option.defaultValue Seq.empty

    // printfn "LOADER: %A" <| Seq.length docs0

    docs
    |> Array.iter siteContent.Add

    printfn "[DOCS-LOADER] Done!"

    siteContent.Add({disableLiveRefresh = false})
    siteContent
