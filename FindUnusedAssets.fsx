open System
open System.IO

let WhiteList: string list = [ ]

let ImagesPath = "./src/assets/images"
let ContentPath = "./src/content"
let ComponentsPath = "./src/components"
let PagesPath = "./src/pages"

let getAllFilesInPath = fun path -> Directory.GetFiles(path, "*", SearchOption.AllDirectories)

let assets = getAllFilesInPath ImagesPath

let imageMap = assets |> Array.map (fun x -> Path.GetFileName x, x) |> Map.ofArray 

let getAllContent() = 
  let contentArr = ResizeArray()
  let content = getAllFilesInPath ContentPath
  let components = getAllFilesInPath ComponentsPath
  let pages = getAllFilesInPath PagesPath
  let readLinesAsync (file: string) =
    task {
      let! file = File.ReadAllLinesAsync(file)
      contentArr.AddRange file
    }
  for file in content do 
    (readLinesAsync file).Wait()
  for file in components do
    (readLinesAsync file).Wait()
  for file in pages do
    (readLinesAsync file).Wait()
  contentArr
  |> String.concat "\n"

let displayUnusedImages() = 
  let content: string = getAllContent()
  let imagesNames = imageMap.Keys
  let unusedImages = 
    imagesNames 
    |> Seq.filter (fun x -> not (content.Contains x))
    |> Seq.filter (fun x -> not (WhiteList |> List.contains x))
  printfn "--------- Unused images: %i ---------" (unusedImages |> Seq.length)
  unusedImages 
  |> Seq.iter (fun x -> printfn "Unused image: %s" imageMap.[x])


displayUnusedImages()