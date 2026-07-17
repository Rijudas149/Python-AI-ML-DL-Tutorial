import type { Topic } from '../../types';

export const module08Topics: Topic[] = [
{
      id: `viz-matplotlib`,
      title: `Matplotlib Basics`,
      description: `Create line, scatter, bar, and histogram plots with pyplot and OO API.`,
      level: `beginner`,
      track: `data`,
      sections: [
        {
          id: `pyplot`,
          title: `pyplot Interface`,
          content: `import matplotlib.pyplot as plt. plt.plot(), scatter(), bar(), hist(). plt.xlabel, title, legend, show/savefig.

**pyplot Interface** in the context of **Matplotlib Basics**: Apply this section on a small sample dataset before scaling up. Run the example, inspect the output, and use the takeaways as a checklist for your own analysis workflows.`,
          example: `import matplotlib.pyplot as plt

x = [1, 2, 3, 4, 5]
y = [2, 4, 6, 8, 10]
plt.plot(x, y, marker="o", label="y=2x")
plt.xlabel("x")
plt.ylabel("y")
plt.title("Linear Relationship")
plt.legend()
plt.savefig("plot.png")
print("Plot saved")`,
          output: `Plot saved`,
          keyPoints: [
            `plt.figure(figsize=(w,h)) sets size`,
            `Always label axes and add title`,
            `savefig before show in scripts`,
            `Use dpi=300 for publication quality`
          ],
          pseudoCode: `CONCEPT: pyplot Interface

Checklist:
  1. plt.figure(figsize=(w,h)) sets size
  2. Always label axes and add title
  3. savefig before show in scripts
  4. Use dpi=300 for publication quality`
        },
        {
          id: `oo-api`,
          title: `Object-Oriented API`,
          content: `fig, ax = plt.subplots() — preferred for multiple plots. ax.plot(), ax.set_xlabel().

More control than pyplot.

**Object-Oriented API** in the context of **Matplotlib Basics**: Apply this section on a small sample dataset before scaling up. Run the example, inspect the output, and use the takeaways as a checklist for your own analysis workflows.`,
          example: `import matplotlib.pyplot as plt

fig, axes = plt.subplots(1, 2, figsize=(10, 4))
axes[0].bar(["A", "B", "C"], [3, 7, 5])
axes[1].hist([1,2,2,3,3,3,4], bins=4)
plt.tight_layout()
print("Subplots created")`,
          output: `Subplots created`,
          keyPoints: [
            `OO API preferred for complex figures`,
            `subplots creates grid of axes`,
            `tight_layout prevents overlap`,
            `ax object methods vs plt functions`
          ],
          pseudoCode: `CONCEPT: Object-Oriented API

Checklist:
  1. OO API preferred for complex figures
  2. subplots creates grid of axes
  3. tight_layout prevents overlap
  4. ax object methods vs plt functions`
        },
        {
          id: `styles`,
          title: `Styles & Customization`,
          content: `plt.style.use("seaborn-v0_8").

Colors, markers, linewidth, alpha transparency.

Colorblind-friendly palettes.

**Styles & Customization** in the context of **Matplotlib Basics**: Apply this section on a small sample dataset before scaling up. Run the example, inspect the output, and use the takeaways as a checklist for your own analysis workflows.`,
          keyPoints: [
            `Use colorblind-safe palettes`,
            `Consistent style across project`,
            `alpha for overlapping points`,
            `Avoid chartjunk — maximize data-ink ratio`
          ],
          pseudoCode: `CONCEPT: Styles & Customization

Checklist:
  1. Use colorblind-safe palettes
  2. Consistent style across project
  3. alpha for overlapping points
  4. Avoid chartjunk — maximize data-ink ratio`
        },
        {
          id: `anatomy`,
          title: `Figure Anatomy`,
          content: `Figure contains Axes contains Lines/Patches/Text. fig.add_subplot, GridSpec for complex layouts.

**Figure Anatomy** in the context of **Matplotlib Basics**: Apply this section on a small sample dataset before scaling up. Run the example, inspect the output, and use the takeaways as a checklist for your own analysis workflows.`,
          keyPoints: [
            `Figure is top-level container`,
            `Axes is single plot area`,
            `Multiple Axes per Figure`,
            `GridSpec for irregular layouts`
          ],
          pseudoCode: `CONCEPT: Figure Anatomy

Checklist:
  1. Figure is top-level container
  2. Axes is single plot area
  3. Multiple Axes per Figure
  4. GridSpec for irregular layouts`
        }
      ],
      exercises: [
        {
          id: `ex-mpl-1`,
          question: `Create a bar chart of categories A=5, B=3, C=7.`,
          solution: `import matplotlib.pyplot as plt
plt.bar(["A","B","C"], [5,3,7])
plt.title("Categories")
print("Bar chart created")`,
          difficulty: `easy`
        },
        {
          id: `ex-mpl-2`,
          question: `Create figure with 2 subplots side by side.`,
          solution: `import matplotlib.pyplot as plt
fig, (ax1, ax2) = plt.subplots(1, 2)
ax1.plot([1,2,3])
ax2.plot([3,2,1])
print("2 subplots created")`,
          difficulty: `medium`
        }
      ],
      estimatedMinutes: 25,
      module: `module-08`,
      references: [
        {
          id: `matplotlib-pyplot`,
          title: `Matplotlib Pyplot Tutorial`,
          source: `Matplotlib`,
          type: `documentation`,
          url: `https://matplotlib.org/stable/tutorials/pyplot.html`,
          description: `Creating line, scatter, bar, and histogram plots with pyplot.`
        },
        {
          id: `matplotlib-oo`,
          title: `Matplotlib Object-Oriented Interface`,
          source: `Matplotlib`,
          type: `documentation`,
          url: `https://matplotlib.org/stable/users/explain/figure/api_interfaces.html`,
          description: `Figure and Axes API for fine-grained control over visualizations.`
        },
        {
          id: `kaggle-data-viz`,
          title: `Kaggle Learn — Data Visualization`,
          source: `Kaggle`,
          type: `course`,
          url: `https://www.kaggle.com/learn/data-visualization`,
          description: `Practical chart selection and storytelling with seaborn.`
        },
        {
          id: `pandas-getting-started`,
          title: `Getting Started with pandas`,
          source: `Pandas`,
          type: `documentation`,
          url: `https://pandas.pydata.org/docs/getting_started/index.html`,
          description: `Introductory guide to Series, DataFrames, and basic operations.`
        }
      ]
    },
{
      id: `viz-seaborn`,
      title: `Seaborn Statistical Plots`,
      description: `High-level statistical visualizations built on matplotlib.`,
      level: `beginner`,
      track: `data`,
      sections: [
        {
          id: `distplot`,
          title: `Distribution Plots`,
          content: `sns.histplot, kdeplot, displot for distributions. rugplot for individual observations.

**Distribution Plots** in the context of **Seaborn Statistical Plots**: Apply this section on a small sample dataset before scaling up. Run the example, inspect the output, and use the takeaways as a checklist for your own analysis workflows.`,
          example: `import seaborn as sns
import matplotlib.pyplot as plt
import numpy as np

data = np.random.normal(0, 1, 200)
sns.histplot(data, kde=True)
print("Distribution plotted")`,
          output: `Distribution plotted`,
          keyPoints: [
            `kde overlays smooth density estimate`,
            `binwidth controls histogram granularity`,
            `displot is figure-level interface`,
            `Check distribution shape before modeling`
          ],
          pseudoCode: `CONCEPT: Distribution Plots

Checklist:
  1. kde overlays smooth density estimate
  2. binwidth controls histogram granularity
  3. displot is figure-level interface
  4. Check distribution shape before modeling`
        },
        {
          id: `relplot`,
          title: `Relational Plots`,
          content: `scatterplot, lineplot, relplot. hue for color grouping, size for third dimension.

**Relational Plots** in the context of **Seaborn Statistical Plots**: Apply this section on a small sample dataset before scaling up. Run the example, inspect the output, and use the takeaways as a checklist for your own analysis workflows.`,
          example: `import seaborn as sns
import pandas as pd

df = pd.DataFrame({"x": [1,2,3,4], "y": [2,4,5,8], "group": ["A","A","B","B"]})
sns.scatterplot(data=df, x="x", y="y", hue="group")
print("Scatter with hue")`,
          output: `Scatter with hue`,
          keyPoints: [
            `hue encodes categorical variable`,
            `size/style add more dimensions`,
            `relplot for faceted relational plots`,
            `Avoid overplotting with alpha/jitter`
          ],
          pseudoCode: `CONCEPT: Relational Plots

Checklist:
  1. hue encodes categorical variable
  2. size/style add more dimensions
  3. relplot for faceted relational plots
  4. Avoid overplotting with alpha/jitter`
        },
        {
          id: `catplot`,
          title: `Categorical Plots`,
          content: `boxplot, violinplot, barplot, countplot.

Compare distributions across categories.

**Categorical Plots** in the context of **Seaborn Statistical Plots**: Apply this section on a small sample dataset before scaling up. Run the example, inspect the output, and use the takeaways as a checklist for your own analysis workflows.`,
          example: `import seaborn as sns
import pandas as pd

df = pd.DataFrame({"category": ["A","A","B","B"], "value": [1,3,2,5]})
sns.boxplot(data=df, x="category", y="value")
print("Boxplot created")`,
          keyPoints: [
            `boxplot shows quartiles and outliers`,
            `violinplot shows full distribution shape`,
            `barplot shows mean with confidence interval`,
            `order parameter controls x-axis order`
          ],
          pseudoCode: `CONCEPT: Categorical Plots

Checklist:
  1. boxplot shows quartiles and outliers
  2. violinplot shows full distribution shape
  3. barplot shows mean with confidence interval
  4. order parameter controls x-axis order`
        },
        {
          id: `heatmap`,
          title: `Heatmaps & Correlation`,
          content: `sns.heatmap for correlation matrices. annot=True shows values.

Essential for EDA in ML.

**Heatmaps & Correlation** in the context of **Seaborn Statistical Plots**: Apply this section on a small sample dataset before scaling up. Run the example, inspect the output, and use the takeaways as a checklist for your own analysis workflows.`,
          example: `import seaborn as sns
import pandas as pd

df = pd.DataFrame({"A": [1,2,3], "B": [2,4,6], "C": [5,3,1]})
sns.heatmap(df.corr(), annot=True)
print("Correlation heatmap")`,
          output: `Correlation heatmap`,
          keyPoints: [
            `corr() computes pairwise correlation`,
            `heatmap reveals multicollinearity`,
            `coolwarm diverging palette for correlations`,
            `Cluster related features visually`
          ],
          pseudoCode: `CONCEPT: Heatmaps & Correlation

Checklist:
  1. corr() computes pairwise correlation
  2. heatmap reveals multicollinearity
  3. coolwarm diverging palette for correlations
  4. Cluster related features visually`
        }
      ],
      exercises: [
        {
          id: `ex-sns-1`,
          question: `Plot histogram of 100 random normal values.`,
          solution: `import seaborn as sns
import numpy as np
sns.histplot(np.random.normal(0, 1, 100))
print("done")`,
          difficulty: `easy`
        },
        {
          id: `ex-sns-2`,
          question: `Create heatmap of 3x3 correlation matrix.`,
          solution: `import seaborn as sns
import pandas as pd
df = pd.DataFrame(np_data := [[1,0.5,0.2],[0.5,1,0.3],[0.2,0.3,1]], columns=["A","B","C"])
sns.heatmap(df, annot=True)
print("done")`,
          difficulty: `medium`
        }
      ],
      estimatedMinutes: 25,
      module: `module-08`,
      references: [
        {
          id: `seaborn-tutorial`,
          title: `Seaborn Tutorial`,
          source: `Seaborn`,
          type: `documentation`,
          url: `https://seaborn.pydata.org/tutorial.html`,
          description: `Statistical visualizations built on matplotlib with elegant defaults.`
        },
        {
          id: `matplotlib-pyplot`,
          title: `Matplotlib Pyplot Tutorial`,
          source: `Matplotlib`,
          type: `documentation`,
          url: `https://matplotlib.org/stable/tutorials/pyplot.html`,
          description: `Creating line, scatter, bar, and histogram plots with pyplot.`
        },
        {
          id: `kaggle-data-viz`,
          title: `Kaggle Learn — Data Visualization`,
          source: `Kaggle`,
          type: `course`,
          url: `https://www.kaggle.com/learn/data-visualization`,
          description: `Practical chart selection and storytelling with seaborn.`
        },
        {
          id: `pandas-getting-started`,
          title: `Getting Started with pandas`,
          source: `Pandas`,
          type: `documentation`,
          url: `https://pandas.pydata.org/docs/getting_started/index.html`,
          description: `Introductory guide to Series, DataFrames, and basic operations.`
        }
      ]
    },
{
      id: `viz-plotly`,
      title: `Plotly Interactive Viz`,
      description: `Interactive charts for exploration and dashboards.`,
      level: `beginner`,
      track: `data`,
      sections: [
        {
          id: `plotly-express`,
          title: `Plotly Express`,
          content: `px.scatter, px.line, px.bar — high-level API.

Automatic interactivity: hover, zoom, pan.

**Plotly Express** in the context of **Plotly Interactive Viz**: Apply this section on a small sample dataset before scaling up. Run the example, inspect the output, and use the takeaways as a checklist for your own analysis workflows.`,
          example: `import plotly.express as px
import pandas as pd

df = pd.DataFrame({"x": [1,2,3], "y": [4,5,6], "cat": ["A","B","C"]})
fig = px.scatter(df, x="x", y="y", color="cat", title="Interactive Scatter")
print(fig.data[0].type)`,
          output: `scatter`,
          keyPoints: [
            `Plotly Express for quick interactive plots`,
            `Hover tooltips automatic`,
            `Export to HTML for sharing`,
            `color/discrete_map for custom colors`
          ],
          pseudoCode: `CONCEPT: Plotly Express

Checklist:
  1. Plotly Express for quick interactive plots
  2. Hover tooltips automatic
  3. Export to HTML for sharing
  4. color/discrete_map for custom colors`
        },
        {
          id: `plotly-graph`,
          title: `Graph Objects`,
          content: `go.Figure, go.Scatter for fine control.

Subplots with make_subplots.

Animations with frames.

**Graph Objects** in the context of **Plotly Interactive Viz**: Apply this section on a small sample dataset before scaling up. Run the example, inspect the output, and use the takeaways as a checklist for your own analysis workflows.`,
          keyPoints: [
            `Graph Objects for custom charts`,
            `make_subplots for complex dashboards`,
            `Animation frames for time series`,
            `3D scatter and surface plots available`
          ],
          pseudoCode: `CONCEPT: Graph Objects

Checklist:
  1. Graph Objects for custom charts
  2. make_subplots for complex dashboards
  3. Animation frames for time series
  4. 3D scatter and surface plots available`
        },
        {
          id: `dash`,
          title: `Dash Preview`,
          content: `Plotly Dash builds web dashboards in pure Python.

Callbacks for interactivity.

**Dash Preview** in the context of **Plotly Interactive Viz**: Apply this section on a small sample dataset before scaling up. Run the example, inspect the output, and use the takeaways as a checklist for your own analysis workflows.`,
          keyPoints: [
            `Dash for production dashboards`,
            `dcc components for inputs`,
            `Callback decorators link inputs to outputs`,
            `Alternative: Streamlit for simpler apps`
          ],
          pseudoCode: `CONCEPT: Dash Preview

Checklist:
  1. Dash for production dashboards
  2. dcc components for inputs
  3. Callback decorators link inputs to outputs
  4. Alternative: Streamlit for simpler apps`
        },
        {
          id: `when`,
          title: `When to Use Plotly`,
          content: `Exploration and dashboards: Plotly.

Publications: Matplotlib/Seaborn.

Large data: datashader.

**When to Use Plotly** in the context of **Plotly Interactive Viz**: Apply this section on a small sample dataset before scaling up. Run the example, inspect the output, and use the takeaways as a checklist for your own analysis workflows.`,
          keyPoints: [
            `Plotly for interactive exploration`,
            `Matplotlib for static publication figures`,
            `Consider audience and medium`,
            `Performance degrades with millions of points`
          ],
          pseudoCode: `CONCEPT: When to Use Plotly

Checklist:
  1. Plotly for interactive exploration
  2. Matplotlib for static publication figures
  3. Consider audience and medium
  4. Performance degrades with millions of points`
        }
      ],
      exercises: [
        {
          id: `ex-plotly-1`,
          question: `Create interactive bar chart with plotly express.`,
          solution: `import plotly.express as px
df = {"cat": ["A","B"], "val": [10, 20]}
fig = px.bar(df, x="cat", y="val")
print(len(fig.data))`,
          difficulty: `easy`
        },
        {
          id: `ex-plotly-2`,
          question: `Create line plot with x=[1,2,3], y=[1,4,9].`,
          solution: `import plotly.express as px
fig = px.line(x=[1,2,3], y=[1,4,9])
print(fig.layout.title.text)`,
          difficulty: `easy`
        }
      ],
      estimatedMinutes: 25,
      module: `module-08`,
      references: [
        {
          id: `plotly-python`,
          title: `Plotly Python Graphing Library`,
          source: `Plotly`,
          type: `documentation`,
          url: `https://plotly.com/python/`,
          description: `Interactive charts for exploration, dashboards, and web deployment.`
        },
        {
          id: `matplotlib-pyplot`,
          title: `Matplotlib Pyplot Tutorial`,
          source: `Matplotlib`,
          type: `documentation`,
          url: `https://matplotlib.org/stable/tutorials/pyplot.html`,
          description: `Creating line, scatter, bar, and histogram plots with pyplot.`
        },
        {
          id: `kaggle-data-viz`,
          title: `Kaggle Learn — Data Visualization`,
          source: `Kaggle`,
          type: `course`,
          url: `https://www.kaggle.com/learn/data-visualization`,
          description: `Practical chart selection and storytelling with seaborn.`
        },
        {
          id: `pandas-getting-started`,
          title: `Getting Started with pandas`,
          source: `Pandas`,
          type: `documentation`,
          url: `https://pandas.pydata.org/docs/getting_started/index.html`,
          description: `Introductory guide to Series, DataFrames, and basic operations.`
        }
      ]
    },
{
      id: `viz-design`,
      title: `Dashboard Design Principles`,
      description: `Visual encoding, chart selection, and storytelling with data.`,
      level: `beginner`,
      track: `data`,
      sections: [
        {
          id: `chart-selection`,
          title: `Choosing the Right Chart`,
          content: `Distribution: histogram/violin.

Relationship: scatter.

Composition: stacked bar/pie (sparingly).

**Choosing the Right Chart** in the context of **Dashboard Design Principles**: Apply this section on a small sample dataset before scaling up. Run the example, inspect the output, and use the takeaways as a checklist for your own analysis workflows.`,
          keyPoints: [
            `Match chart type to analytical question`,
            `Bar charts start at zero`,
            `Avoid pie charts for many categories`,
            `Small multiples for comparison across groups`
          ],
          pseudoCode: `CONCEPT: Choosing the Right Chart

Checklist:
  1. Match chart type to analytical question
  2. Bar charts start at zero
  3. Avoid pie charts for many categories
  4. Small multiples for comparison across groups`
        },
        {
          id: `color`,
          title: `Color Theory`,
          content: `Sequential for magnitude. Diverging for deviation from midpoint.

Categorical for distinct groups. Max 6-8 categorical colors.

**Color Theory** in the context of **Dashboard Design Principles**: Apply this section on a small sample dataset before scaling up. Run the example, inspect the output, and use the takeaways as a checklist for your own analysis workflows.`,
          keyPoints: [
            `Colorblind-safe: viridis, ColorBrewer`,
            `Never use color as only differentiator`,
            `Consistent color mapping across charts`,
            `Highlight key data with accent color`
          ],
          pseudoCode: `CONCEPT: Color Theory

Checklist:
  1. Colorblind-safe: viridis, ColorBrewer
  2. Never use color as only differentiator
  3. Consistent color mapping across charts
  4. Highlight key data with accent color`
        },
        {
          id: `storytelling`,
          title: `Data Storytelling`,
          content: `Lead with insight, not chart.

One message per visualization.

**Data Storytelling** in the context of **Dashboard Design Principles**: Apply this section on a small sample dataset before scaling up. Run the example, inspect the output, and use the takeaways as a checklist for your own analysis workflows.`,
          keyPoints: [
            `Title states the insight not the data`,
            `Remove gridlines and borders if not needed`,
            `Direct labeling beats legends`,
            `Guide viewer eye with annotations`
          ],
          pseudoCode: `CONCEPT: Data Storytelling

Checklist:
  1. Title states the insight not the data
  2. Remove gridlines and borders if not needed
  3. Direct labeling beats legends
  4. Guide viewer eye with annotations`
        },
        {
          id: `eda-workflow`,
          title: `EDA Visualization Workflow`,
          content: `Univariate → bivariate → multivariate.

Check distributions, correlations, outliers, missing patterns before modeling.

**EDA Visualization Workflow** in the context of **Dashboard Design Principles**: Apply this section on a small sample dataset before scaling up. Run the example, inspect the output, and use the takeaways as a checklist for your own analysis workflows.`,
          keyPoints: [
            `pairplot for multivariate overview`,
            `Check class balance in classification`,
            `Visualize residuals after modeling`,
            `Document findings for reproducibility`
          ],
          pseudoCode: `CONCEPT: EDA Visualization Workflow

Checklist:
  1. pairplot for multivariate overview
  2. Check class balance in classification
  3. Visualize residuals after modeling
  4. Document findings for reproducibility`
        }
      ],
      exercises: [
        {
          id: `ex-design-1`,
          question: `List 3 chart types for showing distribution, trend, and comparison.`,
          solution: `charts = {"distribution": "histogram", "trend": "line", "comparison": "bar"}
print(charts)`,
          difficulty: `easy`
        },
        {
          id: `ex-design-2`,
          question: `Write EDA checklist as a Python list of 5 items.`,
          solution: `eda_checklist = ["missing values", "distributions", "correlations", "outliers", "class balance"]
print(len(eda_checklist))`,
          difficulty: `easy`
        }
      ],
      estimatedMinutes: 25,
      module: `module-08`,
      references: [
        {
          id: `tufte-visual-display`,
          title: `The Visual Display of Quantitative Information`,
          source: `Edward Tufte`,
          type: `book`,
          url: `https://www.edwardtufte.com/books/vdqi/`,
          description: `Classic principles of honest, effective data visualization design.`
        },
        {
          id: `kaggle-data-viz`,
          title: `Kaggle Learn — Data Visualization`,
          source: `Kaggle`,
          type: `course`,
          url: `https://www.kaggle.com/learn/data-visualization`,
          description: `Practical chart selection and storytelling with seaborn.`
        },
        {
          id: `seaborn-tutorial`,
          title: `Seaborn Tutorial`,
          source: `Seaborn`,
          type: `documentation`,
          url: `https://seaborn.pydata.org/tutorial.html`,
          description: `Statistical visualizations built on matplotlib with elegant defaults.`
        },
        {
          id: `matplotlib-pyplot`,
          title: `Matplotlib Pyplot Tutorial`,
          source: `Matplotlib`,
          type: `documentation`,
          url: `https://matplotlib.org/stable/tutorials/pyplot.html`,
          description: `Creating line, scatter, bar, and histogram plots with pyplot.`
        }
      ]
    },
{
      id: `viz-specialized`,
      title: `Geospatial & Specialized Charts`,
      description: `Maps, network graphs, and domain-specific visualizations.`,
      level: `beginner`,
      track: `data`,
      sections: [
        {
          id: `geopandas`,
          title: `Geospatial Visualization`,
          content: `GeoPandas extends pandas with geometry. choropleth maps, point maps. folium for interactive maps.

**Geospatial Visualization** in the context of **Geospatial & Specialized Charts**: Apply this section on a small sample dataset before scaling up. Run the example, inspect the output, and use the takeaways as a checklist for your own analysis workflows.`,
          keyPoints: [
            `GeoPandas for shapefile/GeoJSON data`,
            `folium for interactive Leaflet maps`,
            `Projections matter for accurate area comparison`,
            `Geopy for geocoding addresses`
          ],
          pseudoCode: `CONCEPT: Geospatial Visualization

Checklist:
  1. GeoPandas for shapefile/GeoJSON data
  2. folium for interactive Leaflet maps
  3. Projections matter for accurate area comparison
  4. Geopy for geocoding addresses`
        },
        {
          id: `network`,
          title: `Network Graphs`,
          content: `networkx + matplotlib/plotly for graph visualization.

Nodes and edges for relationship data.

**Network Graphs** in the context of **Geospatial & Specialized Charts**: Apply this section on a small sample dataset before scaling up. Run the example, inspect the output, and use the takeaways as a checklist for your own analysis workflows.`,
          keyPoints: [
            `networkx for graph algorithms`,
            `Layout algorithms affect readability`,
            `Node size/color encode attributes`,
            `Useful for social and knowledge graphs`
          ],
          pseudoCode: `CONCEPT: Network Graphs

Checklist:
  1. networkx for graph algorithms
  2. Layout algorithms affect readability
  3. Node size/color encode attributes
  4. Useful for social and knowledge graphs`
        },
        {
          id: `ml-viz`,
          title: `ML-Specific Visualizations`,
          content: `Confusion matrix heatmap, ROC curves, learning curves, feature importance bar charts, decision boundaries.

**ML-Specific Visualizations** in the context of **Geospatial & Specialized Charts**: Apply this section on a small sample dataset before scaling up. Run the example, inspect the output, and use the takeaways as a checklist for your own analysis workflows.`,
          example: `from sklearn.metrics import confusion_matrix
import numpy as np

y_true = [0, 1, 0, 1, 0]
y_pred = [0, 1, 1, 1, 0]
print(confusion_matrix(y_true, y_pred))`,
          output: `[[2 0]
 [1 2]]`,
          keyPoints: [
            `Confusion matrix for classification errors`,
            `ROC-AUC visualizes threshold tradeoffs`,
            `Learning curves diagnose bias/variance`,
            `SHAP summary plots for feature importance`
          ],
          pseudoCode: `CONCEPT: ML-Specific Visualizations

Checklist:
  1. Confusion matrix for classification errors
  2. ROC-AUC visualizes threshold tradeoffs
  3. Learning curves diagnose bias/variance
  4. SHAP summary plots for feature importance`
        },
        {
          id: `tools`,
          title: `Specialized Tools`,
          content: `datashader for big data viz. plotnine (ggplot2 port). altair for declarative viz.

Choose tool for scale and audience.

**Specialized Tools** in the context of **Geospatial & Specialized Charts**: Apply this section on a small sample dataset before scaling up. Run the example, inspect the output, and use the takeaways as a checklist for your own analysis workflows.`,
          keyPoints: [
            `datashader aggregates millions of points`,
            `Altair declarative grammar of graphics`,
            `plotnine familiar to R users`,
            `Tool choice depends on data scale and output medium`
          ],
          pseudoCode: `CONCEPT: Specialized Tools

Checklist:
  1. datashader aggregates millions of points
  2. Altair declarative grammar of graphics
  3. plotnine familiar to R users
  4. Tool choice depends on data scale and output medium`
        }
      ],
      exercises: [
        {
          id: `ex-spec-1`,
          question: `Compute confusion matrix for y_true=[1,0,1,1], y_pred=[1,0,0,1].`,
          solution: `from sklearn.metrics import confusion_matrix
print(confusion_matrix([1,0,1,1], [1,0,0,1]))`,
          difficulty: `easy`
        },
        {
          id: `ex-spec-2`,
          question: `List 3 ML-specific visualization types.`,
          solution: `print(["confusion matrix", "ROC curve", "learning curve"])`,
          difficulty: `easy`
        }
      ],
      estimatedMinutes: 25,
      module: `module-08`,
      references: [
        {
          id: `plotly-python`,
          title: `Plotly Python Graphing Library`,
          source: `Plotly`,
          type: `documentation`,
          url: `https://plotly.com/python/`,
          description: `Interactive charts for exploration, dashboards, and web deployment.`
        },
        {
          id: `seaborn-tutorial`,
          title: `Seaborn Tutorial`,
          source: `Seaborn`,
          type: `documentation`,
          url: `https://seaborn.pydata.org/tutorial.html`,
          description: `Statistical visualizations built on matplotlib with elegant defaults.`
        },
        {
          id: `tufte-visual-display`,
          title: `The Visual Display of Quantitative Information`,
          source: `Edward Tufte`,
          type: `book`,
          url: `https://www.edwardtufte.com/books/vdqi/`,
          description: `Classic principles of honest, effective data visualization design.`
        },
        {
          id: `matplotlib-oo`,
          title: `Matplotlib Object-Oriented Interface`,
          source: `Matplotlib`,
          type: `documentation`,
          url: `https://matplotlib.org/stable/users/explain/figure/api_interfaces.html`,
          description: `Figure and Axes API for fine-grained control over visualizations.`
        }
      ]
    }
];
