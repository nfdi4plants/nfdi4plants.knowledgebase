#!/usr/bin/env cwl-runner
cwlVersion: v1.2
class: Workflow

inputs:
  MeasurementTableCSV: File
  FigureFileName: string

steps:
  heatmap:
    run: ../../workflows/heatmap/workflow.cwl
    in:
      MeasurementTableCSV: MeasurementTableCSV
      FigureFileName: FigureFileName
    out: [ heatmapfile ]

outputs:
  output:
    type: File
    outputSource: heatmap/heatmapfile

