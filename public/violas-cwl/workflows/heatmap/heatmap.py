import pandas as pd
import plotly.express as px
import sys

# Read command line arguments
MeasurementTableCSV=sys.argv[1]
FigureFileName=sys.argv[2]

# Read the CSV file
data = pd.read_csv(MeasurementTableCSV, index_col=0, on_bad_lines='skip')

# Create a heatmap
fig = px.imshow(data, 
                labels=dict(x="Columns", y="Rows", color="Value"),
                x=data.columns, 
                y=data.index)

# Save heatmap to file
fig.write_image(FigureFileName + ".svg")
