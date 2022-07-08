#r "../_lib/Fornax.Core.dll"
#load "layout.fsx"

open Html
open Fornax.Nfdi4Plants
open Layout

let generate' (ctx : SiteContents) (page: string) =
    printfn "%A" page
    let doc =
        ctx.TryGetValues<DocsData> ()
        |> Option.defaultValue Seq.empty
        |> Seq.tryFindBack (fun n -> n.file = page)

    match doc with
    | Some page ->
        Layout.layout ctx page.title [
            Components.docsLayout baseUrl page
        ]
    | None -> 
        div [] []

let generate (ctx : SiteContents) (projectRoot: string) (page: string) =
    generate' ctx page
    |> Layout.render ctx