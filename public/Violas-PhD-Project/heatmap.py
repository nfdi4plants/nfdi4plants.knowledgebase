import pandas as pd
import plotly.express as px

# Read the CSV file
data = pd.read_csv('result.csv')

# If the CSV doesn't have a clear index or row/column names, you may need to manually set them
# For example, if the first column should be the index, you can use:
# data = pd.read_csv('result.csv', index_col=0)

# Create a heatmap using Plotly
fig = px.imshow(data, 
                labels=dict(x="Columns", y="Rows", color="Value"),
                x=data.columns, 
                y=data.index)

# Show the heatmap
fig.show()
