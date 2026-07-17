import type { Topic } from '../../types';

export const module22Topics: Topic[] = [
{
      id: `py-files`,
      title: `Files & Serialization`,
      description: `Read and write files safely with pathlib, json, csv, and pickle.`,
      level: `intermediate`,
      track: `python`,
      sections: [
        {
          id: `pathlib`,
          title: `pathlib for Paths`,
          content: `\`pathlib.Path\` replaces os.path string juggling. \`/\` operator joins: \`Path("data") / "file.csv"\`. Methods: \`.read_text()\`, \`.write_text()\`, \`.exists()\`, \`.mkdir(parents=True)\`, \`.glob("*.json")\`.

Use context managers or explicit encoding (\`encoding="utf-8"\`) for text. \`Path.home()\`, \`.resolve()\` for absolute normalized paths.

**Applying Files & Serialization:** Read and write files safely with pathlib, json, csv, and pickle. Python skills here transfer directly to notebooks, automation scripts, API services, and ML pipelines. When studying "pathlib for Paths", connect theory to practice by predicting outputs before running examples, then explaining discrepancies. Note failure modes—missing data, wrong hyperparameters, API timeouts, shape mismatches—and how you would detect them in logs or tests. Strong practitioners capture these lessons in runbooks and reusable templates rather than re-learning them on every project.`,
          example: `from pathlib import Path
p = Path("sample.txt")
p.write_text("hello", encoding="utf-8")
print(p.read_text(encoding="utf-8"))`,
          output: `hello`,
          keyPoints: [
            `Path objects are immutable and expressive`,
            `Always specify encoding for text files`,
            `glob/rglob for pattern file discovery`,
            `resolve() removes .. and symlinks`
          ]
        },
        {
          id: `json-csv`,
          title: `JSON & CSV`,
          content: `\`json.load/dump\` for structured data—mind that JSON has no date type. **\`csv.DictReader/DictWriter\`** maps rows to dicts with column headers.

For large CSVs, iterate rows instead of loading all into memory. Handle malformed rows with error policies or validation layers.

**Applying Files & Serialization:** Read and write files safely with pathlib, json, csv, and pickle. Python skills here transfer directly to notebooks, automation scripts, API services, and ML pipelines. When studying "JSON & CSV", connect theory to practice by predicting outputs before running examples, then explaining discrepancies. Note failure modes—missing data, wrong hyperparameters, API timeouts, shape mismatches—and how you would detect them in logs or tests. Strong practitioners capture these lessons in runbooks and reusable templates rather than re-learning them on every project.`,
          example: `import json, csv, io
buf = io.StringIO("name,score\\nAda,99\\n")
rows = list(csv.DictReader(buf))
print(json.dumps(rows))`,
          output: `[{"name": "Ada", "score": "99"}]`,
          keyPoints: [
            `json serializes dict/list primitives only`,
            `DictReader uses first row as field names`,
            `Stream large files line by line`,
            `Validate types after reading CSV strings`
          ]
        },
        {
          id: `pickle`,
          title: `Pickle & Security`,
          content: `\`pickle\` serializes arbitrary Python objects quickly but **only load trusted files**—unpickling executes code paths. Prefer JSON or Parquet for interoperability.

Use pickle for ephemeral caches or sklearn joblib models in controlled environments. Version your objects or use schema migrations when formats change.

**Applying Files & Serialization:** Read and write files safely with pathlib, json, csv, and pickle. Python skills here transfer directly to notebooks, automation scripts, API services, and ML pipelines. When studying "Pickle & Security", connect theory to practice by predicting outputs before running examples, then explaining discrepancies. Note failure modes—missing data, wrong hyperparameters, API timeouts, shape mismatches—and how you would detect them in logs or tests. Strong practitioners capture these lessons in runbooks and reusable templates rather than re-learning them on every project.`,
          keyPoints: [
            `Never unpickle untrusted data`,
            `pickle is Python-specific not portable`,
            `joblib better for large numpy arrays`,
            `Prefer open formats for long-term storage`
          ]
        },
        {
          id: `io-patterns`,
          title: `I/O Patterns & Error Handling`,
          content: `Use \`with open(...) as f:\` for automatic close. Catch \`FileNotFoundError\`, \`PermissionError\`. Atomic writes: write to temp file then \`replace()\`.

Log paths on failure. On Windows mind path separators—pathlib abstracts this.

**Applying Files & Serialization:** Read and write files safely with pathlib, json, csv, and pickle. Python skills here transfer directly to notebooks, automation scripts, API services, and ML pipelines. When studying "I/O Patterns & Error Handling", connect theory to practice by predicting outputs before running examples, then explaining discrepancies. Note failure modes—missing data, wrong hyperparameters, API timeouts, shape mismatches—and how you would detect them in logs or tests. Strong practitioners capture these lessons in runbooks and reusable templates rather than re-learning them on every project.`,
          example: `from pathlib import Path
def safe_read(path):
    p = Path(path)
    try:
        return p.read_text(encoding="utf-8")
    except FileNotFoundError:
        return ""
print(safe_read("missing.txt") == "")`,
          output: `True`,
          keyPoints: [
            `Context managers guarantee file closure`,
            `Atomic replace prevents partial writes`,
            `Handle missing files explicitly`,
            `pathlib works cross-platform`
          ]
        }
      ],
      exercises: [
        {
          id: `ex-files-1`,
          question: `Create Path("a") / "b" and print name.`,
          solution: `from pathlib import Path
print((Path("a") / "b").name)`,
          difficulty: `easy`
        },
        {
          id: `ex-files-2`,
          question: `json.dumps a dict {"x": 1}.`,
          solution: `import json
print(json.dumps({"x": 1}))`,
          difficulty: `easy`
        }
      ],
      estimatedMinutes: 30,
      module: `module-22`,
      references: [
        {
          id: `python-tutorial-intro`,
          title: `Python Tutorial — An Informal Introduction`,
          source: `Python.org`,
          type: `documentation`,
          url: `https://docs.python.org/3/tutorial/introduction.html`,
          description: `Official introduction to Python variables, numbers, and strings.`
        },
        {
          id: `python-datamodel`,
          title: `Python Data Model`,
          source: `Python.org`,
          type: `documentation`,
          url: `https://docs.python.org/3/reference/datamodel.html`,
          description: `Deep dive into objects, types, and the semantics behind Python values.`
        },
        {
          id: `cs106a-python`,
          title: `Stanford CS106A — Programming Methodology`,
          source: `Stanford`,
          type: `course`,
          url: `https://cs106a.stanford.edu/`,
          description: `Foundational Stanford course covering Python programming from first principles.`
        },
        {
          id: `real-python-variables`,
          title: `Variables in Python`,
          source: `Real Python`,
          type: `documentation`,
          url: `https://realpython.com/python-variables/`,
          description: `Practical guide to naming, assignment, and dynamic typing in Python.`
        },
        {
          id: `python-packaging-guide`,
          title: `Python Packaging User Guide`,
          source: `PyPA`,
          type: `documentation`,
          url: `https://packaging.python.org/en/latest/tutorials/installing-packages/`,
          description: `Best practices for project setup, virtual environments, and distribution.`
        }
      ]
    },
{
      id: `py-apis`,
      title: `HTTP & REST APIs`,
      description: `Consume REST APIs with requests: methods, headers, auth, and error handling.`,
      level: `intermediate`,
      track: `python`,
      sections: [
        {
          id: `requests-basics`,
          title: `requests Fundamentals`,
          content: `\`requests.get(url, params={...}, timeout=10)\` returns **Response**. Check \`resp.status_code\` or \`resp.raise_for_status()\`. Body: \`.text\`, \`.json()\`, \`.content\` bytes.

Set headers: \`headers={"Authorization": "Bearer TOKEN"}\`. POST JSON: \`requests.post(url, json={"key": "val"})\`.

**Applying HTTP & REST APIs:** Consume REST APIs with requests: methods, headers, auth, and error handling. Python skills here transfer directly to notebooks, automation scripts, API services, and ML pipelines. When studying "requests Fundamentals", connect theory to practice by predicting outputs before running examples, then explaining discrepancies. Note failure modes—missing data, wrong hyperparameters, API timeouts, shape mismatches—and how you would detect them in logs or tests. Strong practitioners capture these lessons in runbooks and reusable templates rather than re-learning them on every project.`,
          example: `import requests
resp = requests.get("https://httpbin.org/get", params={"q": "ml"}, timeout=10)
resp.raise_for_status()
print(resp.json()["args"])  # requires network`,
          keyPoints: [
            `Always set timeouts on external calls`,
            `raise_for_status converts HTTP errors to exceptions`,
            `json= parameter sets Content-Type automatically`,
            `Session objects reuse TCP connections`
          ]
        },
        {
          id: `rest`,
          title: `REST Conventions`,
          content: `REST maps resources to URLs. **GET** read, **POST** create, **PUT/PATCH** update, **DELETE** remove. Status codes: 200 OK, 201 Created, 400 Bad Request, 401 Unauthorized, 404 Not Found, 429 Rate Limited, 500 Server Error.

Design idempotent GET; use pagination query params (\`page\`, \`cursor\`).

**Applying HTTP & REST APIs:** Consume REST APIs with requests: methods, headers, auth, and error handling. Python skills here transfer directly to notebooks, automation scripts, API services, and ML pipelines. When studying "REST Conventions", connect theory to practice by predicting outputs before running examples, then explaining discrepancies. Note failure modes—missing data, wrong hyperparameters, API timeouts, shape mismatches—and how you would detect them in logs or tests. Strong practitioners capture these lessons in runbooks and reusable templates rather than re-learning them on every project.`,
          keyPoints: [
            `Respect HTTP semantics in client design`,
            `Handle 429 with exponential backoff`,
            `Version APIs in path or header`,
            `Document required headers and rate limits`
          ]
        },
        {
          id: `auth-errors`,
          title: `Authentication & Retries`,
          content: `API keys in headers (never commit to git). OAuth flows for user-delegated access. Retry transient 5xx/429 with **\`urllib3.util.retry\`** or \`tenacity\`.

Validate response schema before use. Log correlation IDs from \`X-Request-ID\` headers for support tickets.

**Applying HTTP & REST APIs:** Consume REST APIs with requests: methods, headers, auth, and error handling. Python skills here transfer directly to notebooks, automation scripts, API services, and ML pipelines. When studying "Authentication & Retries", connect theory to practice by predicting outputs before running examples, then explaining discrepancies. Note failure modes—missing data, wrong hyperparameters, API timeouts, shape mismatches—and how you would detect them in logs or tests. Strong practitioners capture these lessons in runbooks and reusable templates rather than re-learning them on every project.`,
          example: `from requests.adapters import HTTPAdapter
from urllib3.util.retry import Retry
import requests
retry = Retry(total=3, backoff_factor=0.5, status_forcelist=[500, 502, 503])
s = requests.Session()
s.mount("https://", HTTPAdapter(max_retries=retry))
print(retry.total)`,
          output: `3`,
          keyPoints: [
            `Store secrets in environment variables`,
            `Retry only idempotent requests safely`,
            `Backoff reduces thundering herd`,
            `Validate JSON shape before accessing keys`
          ]
        },
        {
          id: `testing-apis`,
          title: `Testing API Clients`,
          content: `Mock HTTP with **\`responses\`** library or \`unittest.mock.patch("requests.get")\`. Record fixtures with **VCR.py** for integration tests.

Separate HTTP layer from business logic—pure functions parse JSON dicts; thin wrapper performs requests.

**Applying HTTP & REST APIs:** Consume REST APIs with requests: methods, headers, auth, and error handling. Python skills here transfer directly to notebooks, automation scripts, API services, and ML pipelines. When studying "Testing API Clients", connect theory to practice by predicting outputs before running examples, then explaining discrepancies. Note failure modes—missing data, wrong hyperparameters, API timeouts, shape mismatches—and how you would detect them in logs or tests. Strong practitioners capture these lessons in runbooks and reusable templates rather than re-learning them on every project.`,
          keyPoints: [
            `Mock at HTTP boundary for unit tests`,
            `Integration tests hit sandboxes sparingly`,
            `Separate transport from parsing logic`,
            `Contract tests catch API drift early`
          ]
        }
      ],
      exercises: [
        {
          id: `ex-api-1`,
          question: `Print requests status code attribute name.`,
          solution: `import requests
print("status_code" in dir(requests.Response()))`,
          difficulty: `easy`
        },
        {
          id: `ex-api-2`,
          question: `Build URL with params q=ai using httpbin (conceptual dict).`,
          solution: `params = {"q": "ai"}
print(params["q"])`,
          difficulty: `easy`
        }
      ],
      estimatedMinutes: 35,
      module: `module-22`,
      references: [
        {
          id: `python-tutorial-intro`,
          title: `Python Tutorial — An Informal Introduction`,
          source: `Python.org`,
          type: `documentation`,
          url: `https://docs.python.org/3/tutorial/introduction.html`,
          description: `Official introduction to Python variables, numbers, and strings.`
        },
        {
          id: `python-datamodel`,
          title: `Python Data Model`,
          source: `Python.org`,
          type: `documentation`,
          url: `https://docs.python.org/3/reference/datamodel.html`,
          description: `Deep dive into objects, types, and the semantics behind Python values.`
        },
        {
          id: `cs106a-python`,
          title: `Stanford CS106A — Programming Methodology`,
          source: `Stanford`,
          type: `course`,
          url: `https://cs106a.stanford.edu/`,
          description: `Foundational Stanford course covering Python programming from first principles.`
        },
        {
          id: `real-python-variables`,
          title: `Variables in Python`,
          source: `Real Python`,
          type: `documentation`,
          url: `https://realpython.com/python-variables/`,
          description: `Practical guide to naming, assignment, and dynamic typing in Python.`
        },
        {
          id: `python-packaging-guide`,
          title: `Python Packaging User Guide`,
          source: `PyPA`,
          type: `documentation`,
          url: `https://packaging.python.org/en/latest/tutorials/installing-packages/`,
          description: `Best practices for project setup, virtual environments, and distribution.`
        }
      ]
    },
{
      id: `py-web-scrape`,
      title: `Web Scraping Basics`,
      description: `Extract data with BeautifulSoup while respecting ethics, robots.txt, and rate limits.`,
      level: `intermediate`,
      track: `python`,
      sections: [
        {
          id: `bs4`,
          title: `BeautifulSoup Parsing`,
          content: `Parse HTML with \`BeautifulSoup(html, "html.parser")\` (or **lxml** for speed). Navigate: \`soup.find("tag", class_="x")\`, \`.select("css.selector")\`, \`.get_text(strip=True)\`.

BeautifulSoup tolerates malformed markup—still not a browser; dynamic JS sites need Playwright/Selenium.

**Applying Web Scraping Basics:** Extract data with BeautifulSoup while respecting ethics, robots.txt, and rate limits. Python skills here transfer directly to notebooks, automation scripts, API services, and ML pipelines. When studying "BeautifulSoup Parsing", connect theory to practice by predicting outputs before running examples, then explaining discrepancies. Note failure modes—missing data, wrong hyperparameters, API timeouts, shape mismatches—and how you would detect them in logs or tests. Strong practitioners capture these lessons in runbooks and reusable templates rather than re-learning them on every project.`,
          example: `from bs4 import BeautifulSoup
html = "<html><body><p class=\\"item\\">A</p><p class=\\"item\\">B</p></body></html>"
soup = BeautifulSoup(html, "html.parser")
print([p.get_text() for p in soup.select("p.item")])`,
          output: `['A', 'B']`,
          keyPoints: [
            `CSS selectors scale better than manual loops`,
            `strip=True cleans whitespace in text extraction`,
            `Static HTML only—JS rendering needs browser automation`,
            `Handle missing elements with if/defaults`
          ]
        },
        {
          id: `fetch`,
          title: `Fetching Pages Responsibly`,
          content: `Set **\`User-Agent\`** identifying your bot and contact. Honor **robots.txt** (\`urllib.robotparser\`). Rate limit: \`time.sleep\` or token bucket between requests.

Cache responses during development. Do not scrape personal data without legal basis (GDPR).

**Applying Web Scraping Basics:** Extract data with BeautifulSoup while respecting ethics, robots.txt, and rate limits. Python skills here transfer directly to notebooks, automation scripts, API services, and ML pipelines. When studying "Fetching Pages Responsibly", connect theory to practice by predicting outputs before running examples, then explaining discrepancies. Note failure modes—missing data, wrong hyperparameters, API timeouts, shape mismatches—and how you would detect them in logs or tests. Strong practitioners capture these lessons in runbooks and reusable templates rather than re-learning them on every project.`,
          keyPoints: [
            `Read Terms of Service before scraping`,
            `Throttle requests to avoid overloading servers`,
            `Identify your scraper in User-Agent string`,
            `Prefer official APIs when available`
          ]
        },
        {
          id: `extract`,
          title: `Structured Extraction`,
          content: `Normalize URLs with \`urllib.parse.urljoin\`. Extract tables with \`pandas.read_html\` when suitable. Store raw HTML snapshots for reproducibility before parsing logic changes.

Pipeline: fetch → parse → validate → persist. Log HTTP status and parse failures separately.

**Applying Web Scraping Basics:** Extract data with BeautifulSoup while respecting ethics, robots.txt, and rate limits. Python skills here transfer directly to notebooks, automation scripts, API services, and ML pipelines. When studying "Structured Extraction", connect theory to practice by predicting outputs before running examples, then explaining discrepancies. Note failure modes—missing data, wrong hyperparameters, API timeouts, shape mismatches—and how you would detect them in logs or tests. Strong practitioners capture these lessons in runbooks and reusable templates rather than re-learning them on every project.`,
          example: `from urllib.parse import urljoin
base = "https://example.com/courses/"
print(urljoin(base, "../blog/post"))`,
          keyPoints: [
            `urljoin resolves relative links correctly`,
            `Validate extracted fields against schema`,
            `Keep raw snapshots for debugging parser changes`,
            `pandas.read_html quick for simple tables`
          ]
        },
        {
          id: `ethics`,
          title: `Ethical & Legal Considerations`,
          content: `Scraping public facts differs from bypassing paywalls or CAPTCHAs. Copyright may protect compiled databases. **Computer Fraud and Abuse Act** (US) and similar laws penalize unauthorized access.

When in doubt, request permission or purchase data from licensed providers.

**Applying Web Scraping Basics:** Extract data with BeautifulSoup while respecting ethics, robots.txt, and rate limits. Python skills here transfer directly to notebooks, automation scripts, API services, and ML pipelines. When studying "Ethical & Legal Considerations", connect theory to practice by predicting outputs before running examples, then explaining discrepancies. Note failure modes—missing data, wrong hyperparameters, API timeouts, shape mismatches—and how you would detect them in logs or tests. Strong practitioners capture these lessons in runbooks and reusable templates rather than re-learning them on every project.`,
          keyPoints: [
            `Legal risk varies by jurisdiction and site ToS`,
            `Do not circumvent authentication or DRM`,
            `Anonymize and minimize collected personal data`,
            `Document purpose and retention policy`
          ]
        }
      ],
      exercises: [
        {
          id: `ex-scrape-1`,
          question: `Parse "<a href=\\"x\\">link</a>" and print tag name.`,
          solution: `from bs4 import BeautifulSoup
print(BeautifulSoup("<a href=\\"x\\">link</a>", "html.parser").a.name)`,
          difficulty: `easy`
        },
        {
          id: `ex-scrape-2`,
          question: `Select all li elements from ul with two items.`,
          solution: `from bs4 import BeautifulSoup
s=BeautifulSoup("<ul><li>1</li><li>2</li></ul>","html.parser")
print(len(s.select("li")))`,
          difficulty: `easy`
        }
      ],
      estimatedMinutes: 35,
      module: `module-22`,
      references: [
        {
          id: `python-tutorial-intro`,
          title: `Python Tutorial — An Informal Introduction`,
          source: `Python.org`,
          type: `documentation`,
          url: `https://docs.python.org/3/tutorial/introduction.html`,
          description: `Official introduction to Python variables, numbers, and strings.`
        },
        {
          id: `python-datamodel`,
          title: `Python Data Model`,
          source: `Python.org`,
          type: `documentation`,
          url: `https://docs.python.org/3/reference/datamodel.html`,
          description: `Deep dive into objects, types, and the semantics behind Python values.`
        },
        {
          id: `cs106a-python`,
          title: `Stanford CS106A — Programming Methodology`,
          source: `Stanford`,
          type: `course`,
          url: `https://cs106a.stanford.edu/`,
          description: `Foundational Stanford course covering Python programming from first principles.`
        },
        {
          id: `real-python-variables`,
          title: `Variables in Python`,
          source: `Real Python`,
          type: `documentation`,
          url: `https://realpython.com/python-variables/`,
          description: `Practical guide to naming, assignment, and dynamic typing in Python.`
        },
        {
          id: `python-packaging-guide`,
          title: `Python Packaging User Guide`,
          source: `PyPA`,
          type: `documentation`,
          url: `https://packaging.python.org/en/latest/tutorials/installing-packages/`,
          description: `Best practices for project setup, virtual environments, and distribution.`
        }
      ]
    },
{
      id: `py-sqlite`,
      title: `SQLite with Python`,
      description: `Use sqlite3 for embedded relational storage, parameterized queries, and transactions.`,
      level: `intermediate`,
      track: `python`,
      sections: [
        {
          id: `connect`,
          title: `Connecting & Cursors`,
          content: `\`sqlite3.connect("app.db")\` creates file if missing. **Context manager** commits on success, rolls back on exception. Cursor executes SQL: \`cur.execute(...)\`, \`cur.fetchall()\`.

Row factory \`sqlite3.Row\` enables dict-like access: \`conn.row_factory = sqlite3.Row\`.

**Applying SQLite with Python:** Use sqlite3 for embedded relational storage, parameterized queries, and transactions. Python skills here transfer directly to notebooks, automation scripts, API services, and ML pipelines. When studying "Connecting & Cursors", connect theory to practice by predicting outputs before running examples, then explaining discrepancies. Note failure modes—missing data, wrong hyperparameters, API timeouts, shape mismatches—and how you would detect them in logs or tests. Strong practitioners capture these lessons in runbooks and reusable templates rather than re-learning them on every project.`,
          example: `import sqlite3
conn = sqlite3.connect(":memory:")
conn.execute("CREATE TABLE t (id INTEGER PRIMARY KEY, name TEXT)")
conn.execute("INSERT INTO t (name) VALUES (?)", ("Ada",))
print(conn.execute("SELECT name FROM t").fetchone()[0])`,
          output: `Ada`,
          keyPoints: [
            `:memory: database for tests`,
            `Context managers handle commit/rollback`,
            `Parameterized ? placeholders prevent SQL injection`,
            `Row factory improves readability`
          ]
        },
        {
          id: `sql`,
          title: `SQL Essentials in Python`,
          content: `DDL: CREATE TABLE, INDEX. DML: SELECT, INSERT, UPDATE, DELETE. **JOIN** combines tables on keys. **GROUP BY** aggregates; **HAVING** filters groups.

Use transactions for multi-step consistency: \`BEGIN\` … \`COMMIT\`. SQLite supports limited ALTER—plan schemas upfront.

**Applying SQLite with Python:** Use sqlite3 for embedded relational storage, parameterized queries, and transactions. Python skills here transfer directly to notebooks, automation scripts, API services, and ML pipelines. When studying "SQL Essentials in Python", connect theory to practice by predicting outputs before running examples, then explaining discrepancies. Note failure modes—missing data, wrong hyperparameters, API timeouts, shape mismatches—and how you would detect them in logs or tests. Strong practitioners capture these lessons in runbooks and reusable templates rather than re-learning them on every project.`,
          example: `import sqlite3
conn = sqlite3.connect(":memory:")
conn.executescript("""
CREATE TABLE users(id INTEGER PRIMARY KEY, name TEXT);
CREATE TABLE scores(user_id INTEGER, val INTEGER);
INSERT INTO users VALUES (1,\\"Ada\\");
INSERT INTO scores VALUES (1,99);
""")
row = conn.execute("SELECT u.name, s.val FROM users u JOIN scores s ON u.id=s.user_id").fetchone()
print(row)`,
          output: `('Ada', 99)`,
          keyPoints: [
            `Foreign keys require PRAGMA foreign_keys=ON`,
            `Indexes speed lookups on large tables`,
            `Avoid SELECT * in production queries`,
            `executescript for migrations/bootstrap`
          ]
        },
        {
          id: `orm-alt`,
          title: `When to Upgrade from SQLite`,
          content: `SQLite suits local apps, prototypes, and tests. Concurrent writers serialize—use PostgreSQL/MySQL for multi-user web backends.

**SQLAlchemy** abstracts dialects; **Dataset** simplifies ad hoc exploration. Export with \`.dump\` or pandas \`read_sql\`.

**Applying SQLite with Python:** Use sqlite3 for embedded relational storage, parameterized queries, and transactions. Python skills here transfer directly to notebooks, automation scripts, API services, and ML pipelines. When studying "When to Upgrade from SQLite", connect theory to practice by predicting outputs before running examples, then explaining discrepancies. Note failure modes—missing data, wrong hyperparameters, API timeouts, shape mismatches—and how you would detect them in logs or tests. Strong practitioners capture these lessons in runbooks and reusable templates rather than re-learning them on every project.`,
          keyPoints: [
            `SQLite single-writer limitation at scale`,
            `PostgreSQL for production web apps`,
            `SQLAlchemy eases migration between engines`,
            `Backup via sqlite3 .backup API or file copy`
          ]
        },
        {
          id: `security`,
          title: `SQL Safety`,
          content: `Never interpolate user input into SQL strings. Always bind parameters. Validate types before insert. Principle of least privilege—read-only connections for analytics.

Encrypt sensitive columns at application level if needed—SQLite file encryption extensions exist but are not default.

**Applying SQLite with Python:** Use sqlite3 for embedded relational storage, parameterized queries, and transactions. Python skills here transfer directly to notebooks, automation scripts, API services, and ML pipelines. When studying "SQL Safety", connect theory to practice by predicting outputs before running examples, then explaining discrepancies. Note failure modes—missing data, wrong hyperparameters, API timeouts, shape mismatches—and how you would detect them in logs or tests. Strong practitioners capture these lessons in runbooks and reusable templates rather than re-learning them on every project.`,
          keyPoints: [
            `Parameter binding stops SQL injection`,
            `Validate integers and enums before queries`,
            `Separate read replicas conceptually even locally`,
            `Do not store plaintext passwords—hash them`
          ]
        }
      ],
      exercises: [
        {
          id: `ex-sql-1`,
          question: `Create in-memory DB and fetch sqlite_version().`,
          solution: `import sqlite3
c=sqlite3.connect(":memory:")
print(c.execute("SELECT sqlite_version()").fetchone()[0][:1].isdigit())`,
          difficulty: `easy`
        },
        {
          id: `ex-sql-2`,
          question: `Insert two rows with executemany placeholder pattern.`,
          solution: `import sqlite3
c=sqlite3.connect(":memory:")
c.execute("CREATE TABLE t(v INT)")
c.executemany("INSERT INTO t VALUES (?)", [(1,),(2,)])
print(c.execute("SELECT COUNT(*) FROM t").fetchone()[0])`,
          difficulty: `medium`
        }
      ],
      estimatedMinutes: 35,
      module: `module-22`,
      references: [
        {
          id: `python-tutorial-intro`,
          title: `Python Tutorial — An Informal Introduction`,
          source: `Python.org`,
          type: `documentation`,
          url: `https://docs.python.org/3/tutorial/introduction.html`,
          description: `Official introduction to Python variables, numbers, and strings.`
        },
        {
          id: `python-datamodel`,
          title: `Python Data Model`,
          source: `Python.org`,
          type: `documentation`,
          url: `https://docs.python.org/3/reference/datamodel.html`,
          description: `Deep dive into objects, types, and the semantics behind Python values.`
        },
        {
          id: `cs106a-python`,
          title: `Stanford CS106A — Programming Methodology`,
          source: `Stanford`,
          type: `course`,
          url: `https://cs106a.stanford.edu/`,
          description: `Foundational Stanford course covering Python programming from first principles.`
        },
        {
          id: `real-python-variables`,
          title: `Variables in Python`,
          source: `Real Python`,
          type: `documentation`,
          url: `https://realpython.com/python-variables/`,
          description: `Practical guide to naming, assignment, and dynamic typing in Python.`
        },
        {
          id: `python-packaging-guide`,
          title: `Python Packaging User Guide`,
          source: `PyPA`,
          type: `documentation`,
          url: `https://packaging.python.org/en/latest/tutorials/installing-packages/`,
          description: `Best practices for project setup, virtual environments, and distribution.`
        }
      ]
    },
{
      id: `py-serialization`,
      title: `Advanced Serialization`,
      description: `JSON Schema validation, YAML config, and columnar Parquet introduction.`,
      level: `intermediate`,
      track: `python`,
      sections: [
        {
          id: `json-schema`,
          title: `JSON Schema Validation`,
          content: `**JSON Schema** describes allowed JSON structure: types, required fields, enums, nested objects. Validate with **\`jsonschema\`** library before processing external payloads.

Schemas serve as contracts between services—version them alongside APIs.

**Applying Advanced Serialization:** JSON Schema validation, YAML config, and columnar Parquet introduction. Python skills here transfer directly to notebooks, automation scripts, API services, and ML pipelines. When studying "JSON Schema Validation", connect theory to practice by predicting outputs before running examples, then explaining discrepancies. Note failure modes—missing data, wrong hyperparameters, API timeouts, shape mismatches—and how you would detect them in logs or tests. Strong practitioners capture these lessons in runbooks and reusable templates rather than re-learning them on every project.`,
          example: `from jsonschema import validate
schema = {"type": "object", "required": ["id"], "properties": {"id": {"type": "integer"}}}
validate({"id": 1}, schema)
print("valid")`,
          output: `valid`,
          keyPoints: [
            `Validate at system boundaries`,
            `Schemas document API contracts`,
            `Combine with pydantic for Python models`,
            `Fail fast on malformed input`
          ]
        },
        {
          id: `yaml`,
          title: `YAML Configuration`,
          content: `**PyYAML** loads human-readable config: \`yaml.safe_load\` only—never \`load\` with default Loader on untrusted input. YAML supports nesting, lists, anchors (use sparingly).

Separate config from code; override with environment variables in twelve-factor apps.

**Applying Advanced Serialization:** JSON Schema validation, YAML config, and columnar Parquet introduction. Python skills here transfer directly to notebooks, automation scripts, API services, and ML pipelines. When studying "YAML Configuration", connect theory to practice by predicting outputs before running examples, then explaining discrepancies. Note failure modes—missing data, wrong hyperparameters, API timeouts, shape mismatches—and how you would detect them in logs or tests. Strong practitioners capture these lessons in runbooks and reusable templates rather than re-learning them on every project.`,
          example: `import yaml
cfg = yaml.safe_load("model:\\n  name: rf\\n  trees: 100\\n")
print(cfg["model"]["trees"])`,
          output: `100`,
          keyPoints: [
            `safe_load prevents arbitrary object construction`,
            `Keep secrets out of YAML in repos`,
            `Env var overrides for deployment-specific values`,
            `Lint config files in CI`
          ]
        },
        {
          id: `parquet`,
          title: `Parquet Introduction`,
          content: `**Parquet** columnar format efficient for analytics—compression and predicate pushdown in Spark/DuckDB/pandas (\`read_parquet\`). Schema embedded; types preserved better than CSV.

Partition directories by date/key for large datasets. Not ideal for row-by-row OLTP.

**Applying Advanced Serialization:** JSON Schema validation, YAML config, and columnar Parquet introduction. Python skills here transfer directly to notebooks, automation scripts, API services, and ML pipelines. When studying "Parquet Introduction", connect theory to practice by predicting outputs before running examples, then explaining discrepancies. Note failure modes—missing data, wrong hyperparameters, API timeouts, shape mismatches—and how you would detect them in logs or tests. Strong practitioners capture these lessons in runbooks and reusable templates rather than re-learning them on every project.`,
          example: `import pandas as pd
df = pd.DataFrame({"a": [1, 2], "b": ["x", "y"]})
# df.to_parquet("out.parquet"); df2 = pd.read_parquet("out.parquet")
print(list(df.columns))`,
          output: `['a', 'b']`,
          keyPoints: [
            `Columnar storage reduces I/O for analytics`,
            `Schema evolution requires careful migration`,
            `Combine with Snappy/Zstd compression`,
            `pandas/pyarrow common Python stack`
          ]
        },
        {
          id: `formats-choose`,
          title: `Choosing a Format`,
          content: `JSON for APIs and configs. CSV for human spreadsheet interchange. Parquet for ML datasets and warehouses. Avro/Protobuf for streaming schemas. Pick based on readers, schema needs, and size.

Document encoding, timezone, and null conventions in data catalogs.

**Applying Advanced Serialization:** JSON Schema validation, YAML config, and columnar Parquet introduction. Python skills here transfer directly to notebooks, automation scripts, API services, and ML pipelines. When studying "Choosing a Format", connect theory to practice by predicting outputs before running examples, then explaining discrepancies. Note failure modes—missing data, wrong hyperparameters, API timeouts, shape mismatches—and how you would detect them in logs or tests. Strong practitioners capture these lessons in runbooks and reusable templates rather than re-learning them on every project.`,
          keyPoints: [
            `Match format to consumer tooling`,
            `Columnar for read-heavy analytics`,
            `Row formats for transactional updates`,
            `Version datasets with DVC or similar`
          ]
        }
      ],
      exercises: [
        {
          id: `ex-ser-1`,
          question: `Validate {"name":"a"} against required name string schema conceptually.`,
          solution: `data={"name":"a"}
assert "name" in data and isinstance(data["name"], str)
print("ok")`,
          difficulty: `easy`
        },
        {
          id: `ex-ser-2`,
          question: `yaml.safe_load "x: 1" and print x.`,
          solution: `import yaml
print(yaml.safe_load("x: 1")["x"])`,
          difficulty: `easy`
        }
      ],
      estimatedMinutes: 30,
      module: `module-22`,
      references: [
        {
          id: `python-tutorial-intro`,
          title: `Python Tutorial — An Informal Introduction`,
          source: `Python.org`,
          type: `documentation`,
          url: `https://docs.python.org/3/tutorial/introduction.html`,
          description: `Official introduction to Python variables, numbers, and strings.`
        },
        {
          id: `python-datamodel`,
          title: `Python Data Model`,
          source: `Python.org`,
          type: `documentation`,
          url: `https://docs.python.org/3/reference/datamodel.html`,
          description: `Deep dive into objects, types, and the semantics behind Python values.`
        },
        {
          id: `cs106a-python`,
          title: `Stanford CS106A — Programming Methodology`,
          source: `Stanford`,
          type: `course`,
          url: `https://cs106a.stanford.edu/`,
          description: `Foundational Stanford course covering Python programming from first principles.`
        },
        {
          id: `real-python-variables`,
          title: `Variables in Python`,
          source: `Real Python`,
          type: `documentation`,
          url: `https://realpython.com/python-variables/`,
          description: `Practical guide to naming, assignment, and dynamic typing in Python.`
        },
        {
          id: `python-packaging-guide`,
          title: `Python Packaging User Guide`,
          source: `PyPA`,
          type: `documentation`,
          url: `https://packaging.python.org/en/latest/tutorials/installing-packages/`,
          description: `Best practices for project setup, virtual environments, and distribution.`
        }
      ]
    }
];
