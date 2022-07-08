#r "../_lib/Fornax.Core.dll"
#r "../_lib/Markdig.dll"
#load "../../.paket/load/net5.0/main.group.fsx"

open System.IO
open Fornax.Nfdi4Plants

let contentDir = "docs"

type DocsConfig = {
    disableLiveRefresh: bool
}

let loader (projectRoot: string) (siteContent: SiteContents) =
    let docsPath = Path.Combine(projectRoot, contentDir)
    let options = EnumerationOptions(RecurseSubdirectories = true)
    let files = 
        Directory.GetFiles(docsPath, "*", options)
        |> Array.filter (fun n -> n.Contains @"\_sidebars\" |> not)
        |> Array.filter (fun n -> n.Contains @"\_ignored\" |> not)
        |> Array.filter (fun n -> n.EndsWith ".md")
        |> Array.filter (fun n -> n.Contains "README.md" |> not)

    printfn "%A" files
    // let files = 
    //     Directory.GetFiles(docsPath, "*")
    //     |> Array.filter (fun n -> n.EndsWith ".md")
    //     |> Array.filter (fun n -> n.Contains "README.md" |> not)
    let docs = 
        files 
        |> Array.map (Docs.loadFile projectRoot contentDir)

    // let docs0 = siteContent.TryGetValues<DocsData> () |> Option.defaultValue Seq.empty

    // printfn "LOADER: %A" <| Seq.length docs0

    docs
    |> Array.iter siteContent.Add

    siteContent.Add({disableLiveRefresh = false})
    siteContent
