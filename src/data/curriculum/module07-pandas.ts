import type { Topic } from '../../types';

export const module07Topics: Topic[] = [
{
      id: `pd-dataframes`,
      title: `Series & DataFrames`,
      description: `Pandas one-dimensional Series and two-dimensional DataFrames.`,
      level: `beginner`,
      track: `data`,
      sections: [
        {
          id: `series`,
          title: `Series`,
          content: `Series is labeled 1D array. Create from dict or list with index. .loc[] label-based, .iloc[] integer-based access.

**Why this matters for Series & DataFrames:** Data manipulation skills directly determine the quality of downstream models. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.`,
          example: `import pandas as pd

s = pd.Series([10, 20, 30], index=["a", "b", "c"])
print(s["b"])
print(s.loc["a":"b"])`,
          output: `20
a    10
b    20
dtype: int64`,
          keyPoints: [
            `Series has data and index`,
            `Index enables label-based access`,
            `Automatic alignment on operations`,
            `Series is column of DataFrame`
          ]
        },
        {
          id: `dataframe`,
          title: `DataFrame Creation`,
          content: `From dict of lists, CSV, JSON, SQL. Columns are Series. .head(), .info(), .describe() for exploration.

**Why this matters for Series & DataFrames:** Data manipulation skills directly determine the quality of downstream models. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.`,
          example: `import pandas as pd

df = pd.DataFrame({
    "name": ["Alice", "Bob", "Charlie"],
    "age": [25, 30, 35],
    "score": [95, 87, 92]
})
print(df.describe())`,
          output: `             age      score
count   3.000000   3.000000
mean   30.000000  91.333333
std     5.000000   4.041452
min    25.000000  87.000000
25%    27.500000  89.500000
50%    30.000000  92.000000
75%    32.500000  93.500000
max    35.000000  95.000000`,
          keyPoints: [
            `DataFrame is primary pandas structure`,
            `describe() gives numeric summary`,
            `info() shows dtypes and non-null counts`,
            `read_csv most common ingestion method`
          ]
        },
        {
          id: `selection`,
          title: `Column & Row Selection`,
          content: `df["col"], df[["col1","col2"]], df.loc[rows, cols], df.iloc[i,j]. Avoid chained indexing.

**Why this matters for Series & DataFrames:** Data manipulation skills directly determine the quality of downstream models. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.`,
          example: `import pandas as pd

df = pd.DataFrame({"A": [1,2,3], "B": [4,5,6], "C": [7,8,9]})
print(df.loc[0:1, ["A", "C"]])`,
          output: `   A  C
0  1  7
1  2  8`,
          keyPoints: [
            `Single brackets for column, double for multiple`,
            `loc is label-based inclusive`,
            `iloc is integer-based exclusive on stop`,
            `Avoid df[df.A > 0]["B"] chained indexing`
          ]
        },
        {
          id: `dtypes`,
          title: `Data Types`,
          content: `object (strings), int64, float64, bool, datetime64, category. astype() for conversion. pd.to_numeric, pd.to_datetime.

**Why this matters for Series & DataFrames:** Data manipulation skills directly determine the quality of downstream models. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.`,
          keyPoints: [
            `category dtype saves memory for repeated strings`,
            `Parse dates early with to_datetime`,
            `Downcast numeric types to save memory`,
            `String dtype (StringDtype) in modern pandas`
          ]
        }
      ],
      exercises: [
        {
          id: `ex-pd-1`,
          question: `Create DataFrame with columns name and score, 3 rows.`,
          solution: `import pandas as pd
df = pd.DataFrame({"name": ["A","B","C"], "score": [90, 85, 88]})
print(df)`,
          difficulty: `easy`
        },
        {
          id: `ex-pd-2`,
          question: `Select rows where score > 86.`,
          solution: `import pandas as pd
df = pd.DataFrame({"name": ["A","B","C"], "score": [90, 85, 88]})
print(df[df["score"] > 86])`,
          difficulty: `easy`
        }
      ],
      estimatedMinutes: 25,
      module: `module-07`,
      references: [
        {
          id: `pandas-getting-started`,
          title: `Getting Started with pandas`,
          source: `Pandas`,
          type: `documentation`,
          url: `https://pandas.pydata.org/docs/getting_started/index.html`,
          description: `Introductory guide to Series, DataFrames, and basic operations.`
        },
        {
          id: `kaggle-pandas`,
          title: `Kaggle Learn — Pandas`,
          source: `Kaggle`,
          type: `course`,
          url: `https://www.kaggle.com/learn/pandas`,
          description: `Hands-on pandas exercises for real-world data manipulation.`
        },
        {
          id: `numpy-quickstart`,
          title: `NumPy Quickstart Tutorial`,
          source: `NumPy`,
          type: `documentation`,
          url: `https://numpy.org/doc/stable/user/quickstart.html`,
          description: `Creating arrays, indexing, and basic operations with ndarrays.`
        },
        {
          id: `kaggle-python`,
          title: `Kaggle Learn — Python`,
          source: `Kaggle`,
          type: `course`,
          url: `https://www.kaggle.com/learn/python`,
          description: `Interactive micro-course covering Python essentials for data science.`
        }
      ]
    },
{
      id: `pd-indexing`,
      title: `Indexing, Filtering & Selection`,
      description: `Advanced indexing with query, isin, and boolean masks.`,
      level: `beginner`,
      track: `data`,
      sections: [
        {
          id: `boolean`,
          title: `Boolean Filtering`,
          content: `df[df["col"] > value], combine with & | ~. Parentheses required: \`(df.A > 0) & (df.B < 10)\`.

**Why this matters for Indexing, Filtering & Selection:** Data manipulation skills directly determine the quality of downstream models. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.`,
          example: `import pandas as pd

df = pd.DataFrame({"age": [22, 35, 45, 28], "salary": [50000, 80000, 95000, 60000]})
print(df[(df["age"] > 25) & (df["salary"] > 55000)])`,
          output: `   age  salary
1   35   80000
2   45   95000`,
          keyPoints: [
            `Use & not and for element-wise logic`,
            `Wrap each condition in parentheses`,
            `isin() for membership tests`,
            `query() method for readable filters`
          ]
        },
        {
          id: `query`,
          title: `query() Method`,
          content: `df.query("age > 25 and salary > 55000") — cleaner for complex filters. Use @ for external variables.

**Why this matters for Indexing, Filtering & Selection:** Data manipulation skills directly determine the quality of downstream models. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.`,
          example: `import pandas as pd

df = pd.DataFrame({"x": [1, 5, 3, 8], "y": [2, 4, 6, 10]})
print(df.query("x > 2 and y < 10"))`,
          output: `   x   y
1  5   4
2  3   6`,
          keyPoints: [
            `query uses expression strings`,
            `@var references Python variable`,
            `Often faster for large DataFrames`,
            `Column names with spaces need backticks`
          ]
        },
        {
          id: `assign`,
          title: `assign() & apply()`,
          content: `assign() adds columns functionally. apply() row/column-wise — prefer vectorized ops when possible.

**Why this matters for Indexing, Filtering & Selection:** Data manipulation skills directly determine the quality of downstream models. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.`,
          example: `import pandas as pd

df = pd.DataFrame({"a": [1, 2, 3], "b": [4, 5, 6]})
df = df.assign(total=lambda x: x["a"] + x["b"])
print(df)`,
          output: `   a  b  total
0  1  4      5
1  2  5      7
2  3  6      9`,
          keyPoints: [
            `assign returns new DataFrame — chainable`,
            `Lambda x refers to DataFrame`,
            `Vectorized ops beat apply() for speed`,
            `map() for element-wise dict/Series lookup`
          ]
        },
        {
          id: `sort`,
          title: `Sorting & Ranking`,
          content: `sort_values(by, ascending), sort_index(). rank() for ordinal ranking. nlargest, nsmallest shortcuts.

**Why this matters for Indexing, Filtering & Selection:** Data manipulation skills directly determine the quality of downstream models. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.`,
          example: `import pandas as pd

df = pd.DataFrame({"name": ["Bob", "Alice", "Charlie"], "score": [87, 95, 92]})
print(df.sort_values("score", ascending=False))`,
          keyPoints: [
            `sort_values for column sorting`,
            `rank handles ties with method parameter`,
            `nlargest efficient for top-k`,
            `Stable sort preserves equal element order`
          ]
        }
      ],
      exercises: [
        {
          id: `ex-pd-idx-1`,
          question: `Filter rows where city is "NYC" or "LA".`,
          solution: `import pandas as pd
df = pd.DataFrame({"city": ["NYC", "LA", "Chicago", "NYC"]})
print(df[df["city"].isin(["NYC", "LA"])])`,
          difficulty: `easy`
        },
        {
          id: `ex-pd-idx-2`,
          question: `Add column double = value * 2 using assign.`,
          solution: `import pandas as pd
df = pd.DataFrame({"value": [1, 2, 3]})
print(df.assign(double=lambda x: x["value"] * 2))`,
          difficulty: `easy`
        }
      ],
      estimatedMinutes: 25,
      module: `module-07`,
      references: [
        {
          id: `pandas-indexing`,
          title: `Indexing and Selecting Data`,
          source: `Pandas`,
          type: `documentation`,
          url: `https://pandas.pydata.org/docs/user_guide/indexing.html`,
          description: `loc, iloc, boolean masks, query(), and multi-index selection.`
        },
        {
          id: `pandas-getting-started`,
          title: `Getting Started with pandas`,
          source: `Pandas`,
          type: `documentation`,
          url: `https://pandas.pydata.org/docs/getting_started/index.html`,
          description: `Introductory guide to Series, DataFrames, and basic operations.`
        },
        {
          id: `kaggle-pandas`,
          title: `Kaggle Learn — Pandas`,
          source: `Kaggle`,
          type: `course`,
          url: `https://www.kaggle.com/learn/pandas`,
          description: `Hands-on pandas exercises for real-world data manipulation.`
        },
        {
          id: `numpy-indexing`,
          title: `Indexing and Slicing Arrays`,
          source: `NumPy`,
          type: `documentation`,
          url: `https://numpy.org/doc/stable/user/basics.indexing.html`,
          description: `Basic, advanced, and boolean indexing for multidimensional arrays.`
        }
      ]
    },
{
      id: `pd-groupby`,
      title: `GroupBy & Aggregations`,
      description: `Split-apply-combine pattern for grouped analysis.`,
      level: `beginner`,
      track: `data`,
      sections: [
        {
          id: `groupby`,
          title: `groupby Basics`,
          content: `df.groupby("col") splits into groups. .agg(), .mean(), .sum(), .count() aggregate. Multiple columns: groupby(["a","b"]).

**Why this matters for GroupBy & Aggregations:** Data manipulation skills directly determine the quality of downstream models. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.`,
          example: `import pandas as pd

df = pd.DataFrame({
    "dept": ["Sales", "Sales", "Eng", "Eng"],
    "salary": [50000, 60000, 80000, 90000]
})
print(df.groupby("dept")["salary"].mean())`,
          output: `dept
Eng      85000.0
Sales    55000.0
Name: salary, dtype: float64`,
          keyPoints: [
            `groupby is split-apply-combine`,
            `as_index=False keeps group columns`,
            `agg accepts dict or list of functions`,
            `size() counts rows per group`
          ]
        },
        {
          id: `agg`,
          title: `Multiple Aggregations`,
          content: `.agg({"col": ["mean", "std", "count"]}) or named aggregations: .agg(avg_salary=("salary", "mean")).

**Why this matters for GroupBy & Aggregations:** Data manipulation skills directly determine the quality of downstream models. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.`,
          example: `import pandas as pd

df = pd.DataFrame({"group": ["A","A","B","B"], "val": [10, 20, 30, 40]})
print(df.groupby("group").agg(min_val=("val", "min"), max_val=("val", "max"), avg=("val", "mean")))`,
          output: `       min_val  max_val   avg
group                         
A           10       20  15.0
B           30       40  35.0`,
          keyPoints: [
            `Named aggregations produce clean column names`,
            `Multiple functions per column`,
            `transform() returns same shape as input`,
            `filter() filters groups by condition`
          ]
        },
        {
          id: `pivot`,
          title: `pivot_table & crosstab`,
          content: `pivot_table for multidimensional summaries. pd.crosstab for frequency tables.

**Why this matters for GroupBy & Aggregations:** Data manipulation skills directly determine the quality of downstream models. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.`,
          example: `import pandas as pd

df = pd.DataFrame({
    "date": ["2024-01", "2024-01", "2024-02", "2024-02"],
    "product": ["A", "B", "A", "B"],
    "sales": [100, 150, 120, 180]
})
print(pd.pivot_table(df, values="sales", index="date", columns="product", aggfunc="sum"))`,
          keyPoints: [
            `pivot_table handles duplicates via aggfunc`,
            `crosstab for categorical frequency analysis`,
            `margins=True adds row/column totals`,
            `melt() is inverse of pivot`
          ]
        },
        {
          id: `window`,
          title: `Rolling & Expanding Windows`,
          content: `rolling(window).mean() for moving averages. expanding() for cumulative stats. Essential for time series.

**Why this matters for GroupBy & Aggregations:** Data manipulation skills directly determine the quality of downstream models. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.`,
          keyPoints: [
            `rolling for sliding window statistics`,
            `expanding for cumulative metrics`,
            `ewm for exponential weighted`,
            `shift() for lag features in ML`
          ]
        }
      ],
      exercises: [
        {
          id: `ex-gb-1`,
          question: `Group by category and compute sum of values.`,
          solution: `import pandas as pd
df = pd.DataFrame({"cat": ["X","X","Y","Y"], "val": [1, 2, 3, 4]})
print(df.groupby("cat")["val"].sum())`,
          difficulty: `easy`
        },
        {
          id: `ex-gb-2`,
          question: `Get average score per department using named aggregation.`,
          solution: `import pandas as pd
df = pd.DataFrame({"dept": ["A","A","B"], "score": [80, 90, 85]})
print(df.groupby("dept").agg(avg_score=("score", "mean")))`,
          difficulty: `medium`
        }
      ],
      estimatedMinutes: 25,
      module: `module-07`,
      references: [
        {
          id: `pandas-groupby`,
          title: `Group By: Split-Apply-Combine`,
          source: `Pandas`,
          type: `documentation`,
          url: `https://pandas.pydata.org/docs/user_guide/groupby.html`,
          description: `Grouped aggregations, transformations, and filtering patterns.`
        },
        {
          id: `pandas-getting-started`,
          title: `Getting Started with pandas`,
          source: `Pandas`,
          type: `documentation`,
          url: `https://pandas.pydata.org/docs/getting_started/index.html`,
          description: `Introductory guide to Series, DataFrames, and basic operations.`
        },
        {
          id: `kaggle-pandas`,
          title: `Kaggle Learn — Pandas`,
          source: `Kaggle`,
          type: `course`,
          url: `https://www.kaggle.com/learn/pandas`,
          description: `Hands-on pandas exercises for real-world data manipulation.`
        },
        {
          id: `pandas-indexing`,
          title: `Indexing and Selecting Data`,
          source: `Pandas`,
          type: `documentation`,
          url: `https://pandas.pydata.org/docs/user_guide/indexing.html`,
          description: `loc, iloc, boolean masks, query(), and multi-index selection.`
        }
      ]
    },
{
      id: `pd-merge`,
      title: `Merging, Joining & Reshaping`,
      description: `Combine DataFrames with merge, concat, join. Reshape with melt and pivot.`,
      level: `beginner`,
      track: `data`,
      sections: [
        {
          id: `merge`,
          title: `merge Operations`,
          content: `pd.merge(left, right, on="key", how="inner|outer|left|right"). SQL-like joins on column values.

**Why this matters for Merging, Joining & Reshaping:** Data manipulation skills directly determine the quality of downstream models. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.`,
          example: `import pandas as pd

orders = pd.DataFrame({"id": [1, 2], "product_id": [101, 102]})
products = pd.DataFrame({"product_id": [101, 102], "name": ["Widget", "Gadget"]})
print(pd.merge(orders, products, on="product_id"))`,
          output: `   id  product_id     name
0   1         101   Widget
1   2         102   Gadget`,
          keyPoints: [
            `inner join keeps matching rows only`,
            `left join keeps all left rows`,
            `validate="one_to_many" catches bad joins`,
            `indicator=True shows join source`
          ]
        },
        {
          id: `concat`,
          title: `concat & append`,
          content: `pd.concat([df1, df2], axis=0) stacks vertically. axis=1 concatenates horizontally. ignore_index resets index.

**Why this matters for Merging, Joining & Reshaping:** Data manipulation skills directly determine the quality of downstream models. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.`,
          example: `import pandas as pd

df1 = pd.DataFrame({"A": [1, 2]})
df2 = pd.DataFrame({"A": [3, 4]})
print(pd.concat([df1, df2], ignore_index=True))`,
          output: `   A
0  1
1  2
2  3
3  4`,
          keyPoints: [
            `concat for same-structure DataFrames`,
            `join="outer" handles different columns`,
            `keys parameter creates hierarchical index`,
            `Prefer concat over deprecated append`
          ]
        },
        {
          id: `reshape`,
          title: `melt & pivot`,
          content: `melt() wide-to-long. pivot() long-to-wide. stack/unstack for MultiIndex.

**Why this matters for Merging, Joining & Reshaping:** Data manipulation skills directly determine the quality of downstream models. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.`,
          keyPoints: [
            `melt essential for tidy data format`,
            `Tidy data: one row per observation`,
            `stack/unstack for MultiIndex manipulation`,
            `get_dummies for one-hot encoding`
          ]
        },
        {
          id: `join-index`,
          title: `Index-based Joins`,
          content: `df1.join(df2, on="key") or join on index. set_index before join for index alignment.

**Why this matters for Merging, Joining & Reshaping:** Data manipulation skills directly determine the quality of downstream models. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.`,
          keyPoints: [
            `Set index for repeated join operations`,
            `join method on DataFrame uses indexes`,
            `align indices before arithmetic operations`,
            `reindex for explicit index alignment`
          ]
        }
      ],
      exercises: [
        {
          id: `ex-merge-1`,
          question: `Inner merge two DataFrames on id column.`,
          solution: `import pandas as pd
a = pd.DataFrame({"id": [1,2], "val": [10, 20]})
b = pd.DataFrame({"id": [1,2], "name": ["X","Y"]})
print(pd.merge(a, b, on="id"))`,
          difficulty: `easy`
        },
        {
          id: `ex-merge-2`,
          question: `Concatenate two DataFrames vertically.`,
          solution: `import pandas as pd
df1 = pd.DataFrame({"x": [1]})
df2 = pd.DataFrame({"x": [2]})
print(pd.concat([df1, df2]))`,
          difficulty: `easy`
        }
      ],
      estimatedMinutes: 25,
      module: `module-07`,
      references: [
        {
          id: `pandas-merge`,
          title: `Merge, Join, Concatenate and Compare`,
          source: `Pandas`,
          type: `documentation`,
          url: `https://pandas.pydata.org/docs/user_guide/merging.html`,
          description: `Combining DataFrames with SQL-like join operations.`
        },
        {
          id: `pandas-getting-started`,
          title: `Getting Started with pandas`,
          source: `Pandas`,
          type: `documentation`,
          url: `https://pandas.pydata.org/docs/getting_started/index.html`,
          description: `Introductory guide to Series, DataFrames, and basic operations.`
        },
        {
          id: `kaggle-pandas`,
          title: `Kaggle Learn — Pandas`,
          source: `Kaggle`,
          type: `course`,
          url: `https://www.kaggle.com/learn/pandas`,
          description: `Hands-on pandas exercises for real-world data manipulation.`
        },
        {
          id: `pandas-indexing`,
          title: `Indexing and Selecting Data`,
          source: `Pandas`,
          type: `documentation`,
          url: `https://pandas.pydata.org/docs/user_guide/indexing.html`,
          description: `loc, iloc, boolean masks, query(), and multi-index selection.`
        }
      ]
    },
{
      id: `pd-missing`,
      title: `Missing Data & Time Series`,
      description: `Handle NaN values and work with datetime indices.`,
      level: `beginner`,
      track: `data`,
      sections: [
        {
          id: `missing`,
          title: `Handling Missing Data`,
          content: `isna(), notna(), dropna(), fillna(). interpolate() for gap filling. Missingness patterns matter for ML.

**Why this matters for Missing Data & Time Series:** Data manipulation skills directly determine the quality of downstream models. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.`,
          example: `import pandas as pd
import numpy as np

df = pd.DataFrame({"A": [1, np.nan, 3], "B": [4, 5, np.nan]})
print(df.fillna({"A": df["A"].mean(), "B": 0}))`,
          output: `     A    B
0  1.0  4.0
1  2.0  5.0
2  3.0  0.0`,
          keyPoints: [
            `Never drop all missing blindly in ML`,
            `Understand MCAR, MAR, MNAR missingness`,
            `fillna with mean/median/mode or model-based`,
            `isna().sum() counts missing per column`
          ]
        },
        {
          id: `datetime`,
          title: `Datetime Operations`,
          content: `pd.to_datetime(), DatetimeIndex, .dt accessor for year/month/day. resample() for time aggregation.

**Why this matters for Missing Data & Time Series:** Data manipulation skills directly determine the quality of downstream models. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.`,
          example: `import pandas as pd

df = pd.DataFrame({
    "date": pd.to_datetime(["2024-01-01", "2024-01-15", "2024-02-01"]),
    "value": [100, 150, 200]
})
df = df.set_index("date")
print(df.resample("MS").mean())`,
          keyPoints: [
            `to_datetime parses various formats`,
            `dt accessor extracts date components`,
            `resample for time-based aggregation`,
            `shift/lag for time series features`
          ]
        },
        {
          id: `tz`,
          title: `Timezones`,
          content: `tz_localize and tz_convert for timezone-aware datetimes. Critical for global data pipelines.

**Why this matters for Missing Data & Time Series:** Data manipulation skills directly determine the quality of downstream models. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.`,
          keyPoints: [
            `Store UTC, convert for display`,
            `tz_localize assigns timezone`,
            `tz_convert changes timezone`,
            `Ambiguous times during DST transitions`
          ]
        },
        {
          id: `ts-features`,
          title: `Time Series Features for ML`,
          content: `Lag features, rolling stats, seasonal decomposition. pandas + statsmodels for analysis.

**Why this matters for Missing Data & Time Series:** Data manipulation skills directly determine the quality of downstream models. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.`,
          keyPoints: [
            `Lag features capture temporal dependencies`,
            `Rolling windows for local trends`,
            `Seasonal patterns need explicit encoding`,
            `Train/test split must respect time order`
          ]
        }
      ],
      exercises: [
        {
          id: `ex-miss-1`,
          question: `Count missing values per column.`,
          solution: `import pandas as pd
import numpy as np
df = pd.DataFrame({"A": [1, np.nan, 3], "B": [4, 5, np.nan]})
print(df.isna().sum())`,
          difficulty: `easy`
        },
        {
          id: `ex-miss-2`,
          question: `Extract year from datetime column.`,
          solution: `import pandas as pd
df = pd.DataFrame({"date": pd.to_datetime(["2024-03-15", "2023-06-01"])})
print(df["date"].dt.year.tolist())`,
          difficulty: `easy`
        }
      ],
      estimatedMinutes: 25,
      module: `module-07`,
      references: [
        {
          id: `pandas-missing`,
          title: `Working with Missing Data`,
          source: `Pandas`,
          type: `documentation`,
          url: `https://pandas.pydata.org/docs/user_guide/missing_data.html`,
          description: `Detecting, filling, and dropping NaN values in tabular data.`
        },
        {
          id: `pandas-timeseries`,
          title: `Time Series / Date Functionality`,
          source: `Pandas`,
          type: `documentation`,
          url: `https://pandas.pydata.org/docs/user_guide/timeseries.html`,
          description: `DatetimeIndex, resampling, and time-based aggregations.`
        },
        {
          id: `kaggle-intermediate-ml`,
          title: `Kaggle Learn — Intermediate Machine Learning`,
          source: `Kaggle`,
          type: `course`,
          url: `https://www.kaggle.com/learn/intermediate-machine-learning`,
          description: `Missing values, categorical variables, and pipeline best practices.`
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
    }
];
