import pandas as pd
import plotly.express as px

# Read the CSV file
data = pd.read_csv('sugar_result.csv', index_col=0)

# Create a heatmap using Plotly
fig = px.imshow(data, 
                labels=dict(x="Columns", y="Rows", color="Value"),
                x=data.columns, 
                y=data.index)

# Save heatmap to file
fig.write_image("heatmap.svg")
