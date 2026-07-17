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
            `resolve() removes .. and symlinks`,
            `pathlib for Paths is a foundational piece of Files & Serialization`,
            `Connect this section to the python track and intermediate expectations`
          ],
          pseudoCode: `CONCEPT: pathlib for Paths

Study checklist:
  1. Path objects are immutable and expressive
  2. Always specify encoding for text files
  3. glob/rglob for pattern file discovery
  4. resolve() removes .. and symlinks
  5. pathlib for Paths is a foundational piece of Files & Serialization
  6. Connect this section to the python track and intermediate expectations

Topic: Files & Serialization
Track: python | Level: intermediate`
        },
        {
          id: `json-csv`,
          title: `JSON & CSV`,
          content: `\`json.load/dump\` for structured data—mind that JSON has no date type. **\`csv.DictReader/DictWriter\`** maps rows to dicts with column headers.

For large CSVs, iterate rows instead of loading all into memory. Handle malformed rows with error policies or validation layers.

**Applying Files & Serialization:** Read and write files safely with pathlib, json, csv, and pickle. Python skills here transfer directly to notebooks, automation scripts, API services, and ML pipelines. When studying "JSON & CSV", connect theory to practice by predicting outputs before running examples, then explaining discrepancies. Note failure modes—missing data, wrong hyperparameters, API timeouts, shape mismatches—and how you would detect them in logs or tests. Strong practitioners capture these lessons in runbooks and reusable templates rather than re-learning them on every project.

**Why this matters:** Python fluency underpins every data pipeline, notebook, and production service in modern ML. Mastering "JSON & CSV" here directly affects how confidently you can build, debug, and ship python projects.

**Hands-on practice:** Run the code example below in Python or Jupyter. Predict the output before executing, then compare line-by-line. Modify one parameter at a time to see how results change — this builds intuition faster than re-reading.

**Professional habits:** Write small scripts first, then refactor into reusable functions with type hints and docstrings. Document your assumptions because they become invariants for tests, APIs, and team handoffs.

**Common mistakes:** Mutable defaults, silent exceptions, and mixing tabs with spaces cause most beginner bugs. When debugging, reduce to the smallest input that reproduces the issue and log intermediate values with their types.`,
          example: `import json, csv, io
buf = io.StringIO("name,score\\nAda,99\\n")
rows = list(csv.DictReader(buf))
print(json.dumps(rows))`,
          output: `[{"name": "Ada", "score": "99"}]`,
          keyPoints: [
            `json serializes dict/list primitives only`,
            `DictReader uses first row as field names`,
            `Stream large files line by line`,
            `Validate types after reading CSV strings`,
            `JSON & CSV is a foundational piece of Files & Serialization`,
            `Connect this section to the python track and intermediate expectations`
          ],
          pseudoCode: `CONCEPT: JSON & CSV

Study checklist:
  1. json serializes dict/list primitives only
  2. DictReader uses first row as field names
  3. Stream large files line by line
  4. Validate types after reading CSV strings
  5. JSON & CSV is a foundational piece of Files & Serialization
  6. Connect this section to the python track and intermediate expectations

Topic: Files & Serialization
Track: python | Level: intermediate`
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
            `Prefer open formats for long-term storage`,
            `Pickle & Security is a foundational piece of Files & Serialization`,
            `Connect this section to the python track and intermediate expectations`
          ],
          example: `# Concept check: Pickle & Security
meta = {
    "topic": "py-files",
    "section": "pickle",
    "track": "python",
    "level": "intermediate",
}
for key, value in meta.items():
    print(f"{key}: {value}")`,
          output: `topic: py-files
section: pickle
track: python
level: intermediate`,
          pseudoCode: `CONCEPT: Pickle & Security

Study checklist:
  1. Never unpickle untrusted data
  2. pickle is Python-specific not portable
  3. joblib better for large numpy arrays
  4. Prefer open formats for long-term storage
  5. Pickle & Security is a foundational piece of Files & Serialization
  6. Connect this section to the python track and intermediate expectations

Topic: Files & Serialization
Track: python | Level: intermediate`
        },
        {
          id: `io-patterns`,
          title: `I/O Patterns & Error Handling`,
          content: `**I/O Patterns & Error Handling** is essential to **Files & Serialization**. Read and write files safely with pathlib, json, csv, and pickle. At the **intermediate** level, you should be able to explain this concept to a colleague and implement it without copying blindly.

Use \`with open(...) as f:\` for automatic close. Catch \`FileNotFoundError\`, \`PermissionError\`. Atomic writes: write to temp file then \`replace()\`.

Log paths on failure. On Windows mind path separators—pathlib abstracts this.

**Applying Files & Serialization:** Read and write files safely with pathlib, json, csv, and pickle. Python skills here transfer directly to notebooks, automation scripts, API services, and ML pipelines. When studying "I/O Patterns & Error Handling", connect theory to practice by predicting outputs before running examples, then explaining discrepancies. Note failure modes—missing data, wrong hyperparameters, API timeouts, shape mismatches—and how you would detect them in logs or tests. Strong practitioners capture these lessons in runbooks and reusable templates rather than re-learning them on every project.

**Why this matters:** Python fluency underpins every data pipeline, notebook, and production service in modern ML. Mastering "I/O Patterns & Error Handling" here directly affects how confidently you can build, debug, and ship python projects.

**Hands-on practice:** Run the code example below in Python or Jupyter. Predict the output before executing, then compare line-by-line. Modify one parameter at a time to see how results change — this builds intuition faster than re-reading.

**Professional habits:** Write small scripts first, then refactor into reusable functions with type hints and docstrings. Document your assumptions because they become invariants for tests, APIs, and team handoffs.

**Common mistakes:** Mutable defaults, silent exceptions, and mixing tabs with spaces cause most beginner bugs. When debugging, reduce to the smallest input that reproduces the issue and log intermediate values with their types.`,
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
            `pathlib works cross-platform`,
            `I/O Patterns & Error Handling is a foundational piece of Files & Serialization`,
            `Connect this section to the python track and intermediate expectations`
          ],
          pseudoCode: `CONCEPT: I/O Patterns & Error Handling

Study checklist:
  1. Context managers guarantee file closure
  2. Atomic replace prevents partial writes
  3. Handle missing files explicitly
  4. pathlib works cross-platform
  5. I/O Patterns & Error Handling is a foundational piece of Files & Serialization
  6. Connect this section to the python track and intermediate expectations

Topic: Files & Serialization
Track: python | Level: intermediate`
        },
        {
          id: `py-files-deep-theory`,
          title: `Deep Theory & Concepts`,
          content: `**Files & Serialization** sits in the **python** track of the Data Science Master curriculum. Read and write files safely with pathlib, json, csv, and pickle.

**Theoretical foundation:** Python's execution model combines bytecode interpretation with C extensions for hot paths. Understanding reference semantics, the import system, and standard-library conventions helps you write code that scales from scripts to services.

For **py-files**, relate abstract definitions to measurable quantities: inputs, outputs, loss or cost, and constraints. When reading papers or documentation, identify which assumptions in this lesson appear as lemmas or implementation defaults.

**At the intermediate level**, connect prerequisites to new material — sketch mental models on paper before coding. Formal notation and code should mutually reinforce each other; if they diverge, your understanding has a gap to close.

**Study approach:** Read this section once for overview, once for detail, then teach it aloud in two minutes without notes. That gap reveals what to revisit.`,
          example: `# Concept check for Files & Serialization
meta = {"topic_id": "py-files", "track": "python", "level": "intermediate"}
print(meta["topic_id"], meta["track"], meta["level"])`,
          output: `py-files python intermediate`,
          keyPoints: [
            `Core theory of Files & Serialization ties to the python track`,
            `Connect definitions to inputs, outputs, and evaluation criteria`,
            `Identify assumptions that break in production or at scale`,
            `Relate this topic to prerequisites and follow-on modules`,
            `Use paper/documentation cross-checks to validate intuition`,
            `Sketch diagrams before implementing from memory`
          ],
          pseudoCode: `CONCEPT: Deep Theory & Concepts

Study checklist:
  1. Core theory of Files & Serialization ties to the python track
  2. Connect definitions to inputs, outputs, and evaluation criteria
  3. Identify assumptions that break in production or at scale
  4. Relate this topic to prerequisites and follow-on modules
  5. Use paper/documentation cross-checks to validate intuition
  6. Sketch diagrams before implementing from memory

Topic: Files & Serialization
Track: python | Level: intermediate`
        },
        {
          id: `py-files-patterns`,
          title: `Practical Patterns & Idioms`,
          content: `Professionals reuse patterns that encode lessons from **Files & Serialization**. Idiomatic Python favors explicit over implicit: context managers for resources, comprehensions for transforms, dataclasses for structured data, and pathlib over string paths. Follow PEP 8 naming and keep functions small with clear type hints at boundaries.

Apply a consistent project layout: separate configuration, core logic, and CLI/API entry points. Name functions after verbs, types after nouns, and tests after behavior ("test_returns_empty_when_input_missing"). For **py-files**, extract a minimal working example you can paste into interviews or design docs.

**Recommended workflow:**

1. Reproduce the canonical example from earlier sections exactly.
2. Vary one parameter at a time and log what changes.
3. Capture results in a notebook cell or short markdown log.
4. Promote stable patterns into shared utilities only after the second reuse.

**Pattern mindset:** Good patterns are boring — they reduce cognitive load so you can focus on the hard problem, not boilerplate.`,
          example: `# Idiomatic pattern snapshot for py-files
from dataclasses import dataclass

@dataclass(frozen=True)
class LessonRef:
    topic_id: str
    title: str

ref = LessonRef("py-files", "Files & Serialization")
print(ref.topic_id, ref.title.split()[0])`,
          output: `py-files Files`,
          keyPoints: [
            `Start from canonical examples before abstracting helpers`,
            `One change at a time when experimenting`,
            `Prefer readable names over clever one-liners`,
            `Promote patterns to shared code only after reuse`,
            `Document invariants your pattern relies on`,
            `Align style with python ecosystem conventions`
          ],
          pseudoCode: `CONCEPT: Practical Patterns & Idioms

Study checklist:
  1. Start from canonical examples before abstracting helpers
  2. One change at a time when experimenting
  3. Prefer readable names over clever one-liners
  4. Promote patterns to shared code only after reuse
  5. Document invariants your pattern relies on
  6. Align style with python ecosystem conventions

Topic: Files & Serialization
Track: python | Level: intermediate`
        },
        {
          id: `py-files-pitfalls`,
          title: `Common Pitfalls & Debugging`,
          content: `Learners working on **Files & Serialization** often hit predictable walls. Common mistakes include mutable default arguments, shadowing built-ins, ignoring exceptions silently, and mixing tabs/spaces. Use pdb or breakpoint(), structured logging, and repr()-rich error messages when debugging.

When stuck on **py-files**, reproduce with the smallest input, enable verbose logging, and bisect recent changes. Capture stack traces, shapes, dtypes, and random seeds in bug reports. Ask whether the failure is data, code, or environment — and test each hypothesis independently.

**Debugging checklist:**

- Verify assumptions listed in earlier sections.
- Compare actual vs expected intermediate values.
- Check for off-by-one errors and unit mismatches.
- Confirm library versions match the tutorial environment.
- Build a minimal reproducible example before asking for help.

**Expert habit:** The best debuggers narrow the search space in minutes by changing one variable at a time.`,
          example: `# Minimal repro template
def debug_step(label, value):
    print(f"[{label}] {value!r} ({type(value).__name__})")

debug_step("py-files", "Files & Serialization")
debug_step("section_count", 4)`,
          output: `[py-files] 'Files & Serialization' (str)
[section_count] 4`,
          keyPoints: [
            `Reduce to the smallest failing example`,
            `Log intermediate values with types`,
            `Bisect changes with git or notebook history`,
            `Separate data bugs from logic bugs`,
            `Record seeds, versions, and hardware context`,
            `Fix root cause—not symptoms with silent catches`
          ],
          pseudoCode: `CONCEPT: Common Pitfalls & Debugging

Study checklist:
  1. Reduce to the smallest failing example
  2. Log intermediate values with types
  3. Bisect changes with git or notebook history
  4. Separate data bugs from logic bugs
  5. Record seeds, versions, and hardware context
  6. Fix root cause—not symptoms with silent catches

Topic: Files & Serialization
Track: python | Level: intermediate`
        },
        {
          id: `py-files-real-world`,
          title: `Real-World Applications`,
          content: `**Files & Serialization** shows up wherever **python** skills meet business constraints. Production Python appears in FastAPI microservices, Airflow DAGs, Jupyter research workflows, and pytest CI gates. Teams standardize on virtual environments, ruff/black formatters, and pinned dependency lockfiles.

Teams shipping features around **py-files** align research notebooks with staged rollouts: offline metrics, shadow mode, canary releases, and rollback plans. Stakeholders care about latency, cost, maintainability, and compliance — not only accuracy.

**Career narrative:** Interviewers expect you to describe a project where this topic mattered: the problem, your approach, metric movement, tradeoffs, and what you would do differently.

**Portfolio tip:** Link this lesson to README entries and capstone modules later in the curriculum. One concrete project beats ten theoretical certificates.`,
          example: `# Portfolio bullet generator for Files & Serialization
skills = ["python", "intermediate", "py-files"]
print("Built project applying:", ", ".join(skills))`,
          output: `Built project applying: python, intermediate, py-files`,
          keyPoints: [
            ` Tie lessons to portfolio projects with measurable outcomes`,
            `Explain tradeoffs to technical and non-technical audiences`,
            `Plan deployment, monitoring, and maintenance early`,
            `Document ethical and privacy implications where relevant`,
            `Iterate with user feedback—not only offline metrics`,
            `Connect Files & Serialization to adjacent topics in the same track`
          ],
          pseudoCode: `CONCEPT: Real-World Applications

Study checklist:
  1.  Tie lessons to portfolio projects with measurable outcomes
  2. Explain tradeoffs to technical and non-technical audiences
  3. Plan deployment, monitoring, and maintenance early
  4. Document ethical and privacy implications where relevant
  5. Iterate with user feedback—not only offline metrics
  6. Connect Files & Serialization to adjacent topics in the same track

Topic: Files & Serialization
Track: python | Level: intermediate`
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
      estimatedMinutes: 124,
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

**Applying HTTP & REST APIs:** Consume REST APIs with requests: methods, headers, auth, and error handling. Python skills here transfer directly to notebooks, automation scripts, API services, and ML pipelines. When studying "requests Fundamentals", connect theory to practice by predicting outputs before running examples, then explaining discrepancies. Note failure modes—missing data, wrong hyperparameters, API timeouts, shape mismatches—and how you would detect them in logs or tests. Strong practitioners capture these lessons in runbooks and reusable templates rather than re-learning them on every project.

**Why this matters:** Python fluency underpins every data pipeline, notebook, and production service in modern ML. Mastering "requests Fundamentals" here directly affects how confidently you can build, debug, and ship python projects.

**Hands-on practice:** Run the code example below in Python or Jupyter. Predict the output before executing, then compare line-by-line. Modify one parameter at a time to see how results change — this builds intuition faster than re-reading.

**Professional habits:** Write small scripts first, then refactor into reusable functions with type hints and docstrings. Document your assumptions because they become invariants for tests, APIs, and team handoffs.

**Common mistakes:** Mutable defaults, silent exceptions, and mixing tabs with spaces cause most beginner bugs. When debugging, reduce to the smallest input that reproduces the issue and log intermediate values with their types.`,
          example: `import requests
resp = requests.get("https://httpbin.org/get", params={"q": "ml"}, timeout=10)
resp.raise_for_status()
print(resp.json()["args"])  # requires network`,
          keyPoints: [
            `Always set timeouts on external calls`,
            `raise_for_status converts HTTP errors to exceptions`,
            `json= parameter sets Content-Type automatically`,
            `Session objects reuse TCP connections`,
            `requests Fundamentals is a foundational piece of HTTP & REST APIs`,
            `Connect this section to the python track and intermediate expectations`
          ],
          pseudoCode: `CONCEPT: requests Fundamentals

Study checklist:
  1. Always set timeouts on external calls
  2. raise_for_status converts HTTP errors to exceptions
  3. json= parameter sets Content-Type automatically
  4. Session objects reuse TCP connections
  5. requests Fundamentals is a foundational piece of HTTP & REST APIs
  6. Connect this section to the python track and intermediate expectations

Topic: HTTP & REST APIs
Track: python | Level: intermediate`
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
            `Document required headers and rate limits`,
            `REST Conventions is a foundational piece of HTTP & REST APIs`,
            `Connect this section to the python track and intermediate expectations`
          ],
          example: `# Concept check: REST Conventions
meta = {
    "topic": "py-apis",
    "section": "rest",
    "track": "python",
    "level": "intermediate",
}
for key, value in meta.items():
    print(f"{key}: {value}")`,
          output: `topic: py-apis
section: rest
track: python
level: intermediate`,
          pseudoCode: `CONCEPT: REST Conventions

Study checklist:
  1. Respect HTTP semantics in client design
  2. Handle 429 with exponential backoff
  3. Version APIs in path or header
  4. Document required headers and rate limits
  5. REST Conventions is a foundational piece of HTTP & REST APIs
  6. Connect this section to the python track and intermediate expectations

Topic: HTTP & REST APIs
Track: python | Level: intermediate`
        },
        {
          id: `auth-errors`,
          title: `Authentication & Retries`,
          content: `API keys in headers (never commit to git). OAuth flows for user-delegated access. Retry transient 5xx/429 with **\`urllib3.util.retry\`** or \`tenacity\`.

Validate response schema before use. Log correlation IDs from \`X-Request-ID\` headers for support tickets.

**Applying HTTP & REST APIs:** Consume REST APIs with requests: methods, headers, auth, and error handling. Python skills here transfer directly to notebooks, automation scripts, API services, and ML pipelines. When studying "Authentication & Retries", connect theory to practice by predicting outputs before running examples, then explaining discrepancies. Note failure modes—missing data, wrong hyperparameters, API timeouts, shape mismatches—and how you would detect them in logs or tests. Strong practitioners capture these lessons in runbooks and reusable templates rather than re-learning them on every project.

**Why this matters:** Python fluency underpins every data pipeline, notebook, and production service in modern ML. Mastering "Authentication & Retries" here directly affects how confidently you can build, debug, and ship python projects.

**Hands-on practice:** Run the code example below in Python or Jupyter. Predict the output before executing, then compare line-by-line. Modify one parameter at a time to see how results change — this builds intuition faster than re-reading.

**Professional habits:** Write small scripts first, then refactor into reusable functions with type hints and docstrings. Document your assumptions because they become invariants for tests, APIs, and team handoffs.

**Common mistakes:** Mutable defaults, silent exceptions, and mixing tabs with spaces cause most beginner bugs. When debugging, reduce to the smallest input that reproduces the issue and log intermediate values with their types.`,
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
            `Validate JSON shape before accessing keys`,
            `Authentication & Retries is a foundational piece of HTTP & REST APIs`,
            `Connect this section to the python track and intermediate expectations`
          ],
          pseudoCode: `CONCEPT: Authentication & Retries

Study checklist:
  1. Store secrets in environment variables
  2. Retry only idempotent requests safely
  3. Backoff reduces thundering herd
  4. Validate JSON shape before accessing keys
  5. Authentication & Retries is a foundational piece of HTTP & REST APIs
  6. Connect this section to the python track and intermediate expectations

Topic: HTTP & REST APIs
Track: python | Level: intermediate`
        },
        {
          id: `testing-apis`,
          title: `Testing API Clients`,
          content: `Mock HTTP with **\`responses\`** library or \`unittest.mock.patch("requests.get")\`. Record fixtures with **VCR.py** for integration tests.

Separate HTTP layer from business logic—pure functions parse JSON dicts; thin wrapper performs requests.

**Applying HTTP & REST APIs:** Consume REST APIs with requests: methods, headers, auth, and error handling. Python skills here transfer directly to notebooks, automation scripts, API services, and ML pipelines. When studying "Testing API Clients", connect theory to practice by predicting outputs before running examples, then explaining discrepancies. Note failure modes—missing data, wrong hyperparameters, API timeouts, shape mismatches—and how you would detect them in logs or tests. Strong practitioners capture these lessons in runbooks and reusable templates rather than re-learning them on every project.

**Why this matters:** Python fluency underpins every data pipeline, notebook, and production service in modern ML. Mastering "Testing API Clients" here directly affects how confidently you can build, debug, and ship python projects.

**Professional habits:** Write small scripts first, then refactor into reusable functions with type hints and docstrings. Document your assumptions because they become invariants for tests, APIs, and team handoffs.

**Common mistakes:** Mutable defaults, silent exceptions, and mixing tabs with spaces cause most beginner bugs. When debugging, reduce to the smallest input that reproduces the issue and log intermediate values with their types.`,
          keyPoints: [
            `Mock at HTTP boundary for unit tests`,
            `Integration tests hit sandboxes sparingly`,
            `Separate transport from parsing logic`,
            `Contract tests catch API drift early`,
            `Testing API Clients is a foundational piece of HTTP & REST APIs`,
            `Connect this section to the python track and intermediate expectations`
          ],
          example: `# Concept check: Testing API Clients
meta = {
    "topic": "py-apis",
    "section": "testing-apis",
    "track": "python",
    "level": "intermediate",
}
for key, value in meta.items():
    print(f"{key}: {value}")`,
          output: `topic: py-apis
section: testing-apis
track: python
level: intermediate`,
          pseudoCode: `CONCEPT: Testing API Clients

Study checklist:
  1. Mock at HTTP boundary for unit tests
  2. Integration tests hit sandboxes sparingly
  3. Separate transport from parsing logic
  4. Contract tests catch API drift early
  5. Testing API Clients is a foundational piece of HTTP & REST APIs
  6. Connect this section to the python track and intermediate expectations

Topic: HTTP & REST APIs
Track: python | Level: intermediate`
        },
        {
          id: `py-apis-deep-theory`,
          title: `Deep Theory & Concepts`,
          content: `**HTTP & REST APIs** sits in the **python** track of the Data Science Master curriculum. Consume REST APIs with requests: methods, headers, auth, and error handling.

**Theoretical foundation:** Python's execution model combines bytecode interpretation with C extensions for hot paths. Understanding reference semantics, the import system, and standard-library conventions helps you write code that scales from scripts to services.

For **py-apis**, relate abstract definitions to measurable quantities: inputs, outputs, loss or cost, and constraints. When reading papers or documentation, identify which assumptions in this lesson appear as lemmas or implementation defaults.

**At the intermediate level**, connect prerequisites to new material — sketch mental models on paper before coding. Formal notation and code should mutually reinforce each other; if they diverge, your understanding has a gap to close.

**Study approach:** Read this section once for overview, once for detail, then teach it aloud in two minutes without notes. That gap reveals what to revisit.`,
          example: `# Concept check for HTTP & REST APIs
meta = {"topic_id": "py-apis", "track": "python", "level": "intermediate"}
print(meta["topic_id"], meta["track"], meta["level"])`,
          output: `py-apis python intermediate`,
          keyPoints: [
            `Core theory of HTTP & REST APIs ties to the python track`,
            `Connect definitions to inputs, outputs, and evaluation criteria`,
            `Identify assumptions that break in production or at scale`,
            `Relate this topic to prerequisites and follow-on modules`,
            `Use paper/documentation cross-checks to validate intuition`,
            `Sketch diagrams before implementing from memory`
          ],
          pseudoCode: `CONCEPT: Deep Theory & Concepts

Study checklist:
  1. Core theory of HTTP & REST APIs ties to the python track
  2. Connect definitions to inputs, outputs, and evaluation criteria
  3. Identify assumptions that break in production or at scale
  4. Relate this topic to prerequisites and follow-on modules
  5. Use paper/documentation cross-checks to validate intuition
  6. Sketch diagrams before implementing from memory

Topic: HTTP & REST APIs
Track: python | Level: intermediate`
        },
        {
          id: `py-apis-patterns`,
          title: `Practical Patterns & Idioms`,
          content: `Professionals reuse patterns that encode lessons from **HTTP & REST APIs**. Idiomatic Python favors explicit over implicit: context managers for resources, comprehensions for transforms, dataclasses for structured data, and pathlib over string paths. Follow PEP 8 naming and keep functions small with clear type hints at boundaries.

Apply a consistent project layout: separate configuration, core logic, and CLI/API entry points. Name functions after verbs, types after nouns, and tests after behavior ("test_returns_empty_when_input_missing"). For **py-apis**, extract a minimal working example you can paste into interviews or design docs.

**Recommended workflow:**

1. Reproduce the canonical example from earlier sections exactly.
2. Vary one parameter at a time and log what changes.
3. Capture results in a notebook cell or short markdown log.
4. Promote stable patterns into shared utilities only after the second reuse.

**Pattern mindset:** Good patterns are boring — they reduce cognitive load so you can focus on the hard problem, not boilerplate.`,
          example: `# Idiomatic pattern snapshot for py-apis
from dataclasses import dataclass

@dataclass(frozen=True)
class LessonRef:
    topic_id: str
    title: str

ref = LessonRef("py-apis", "HTTP & REST APIs")
print(ref.topic_id, ref.title.split()[0])`,
          output: `py-apis HTTP`,
          keyPoints: [
            `Start from canonical examples before abstracting helpers`,
            `One change at a time when experimenting`,
            `Prefer readable names over clever one-liners`,
            `Promote patterns to shared code only after reuse`,
            `Document invariants your pattern relies on`,
            `Align style with python ecosystem conventions`
          ],
          pseudoCode: `CONCEPT: Practical Patterns & Idioms

Study checklist:
  1. Start from canonical examples before abstracting helpers
  2. One change at a time when experimenting
  3. Prefer readable names over clever one-liners
  4. Promote patterns to shared code only after reuse
  5. Document invariants your pattern relies on
  6. Align style with python ecosystem conventions

Topic: HTTP & REST APIs
Track: python | Level: intermediate`
        },
        {
          id: `py-apis-pitfalls`,
          title: `Common Pitfalls & Debugging`,
          content: `Learners working on **HTTP & REST APIs** often hit predictable walls. Common mistakes include mutable default arguments, shadowing built-ins, ignoring exceptions silently, and mixing tabs/spaces. Use pdb or breakpoint(), structured logging, and repr()-rich error messages when debugging.

When stuck on **py-apis**, reproduce with the smallest input, enable verbose logging, and bisect recent changes. Capture stack traces, shapes, dtypes, and random seeds in bug reports. Ask whether the failure is data, code, or environment — and test each hypothesis independently.

**Debugging checklist:**

- Verify assumptions listed in earlier sections.
- Compare actual vs expected intermediate values.
- Check for off-by-one errors and unit mismatches.
- Confirm library versions match the tutorial environment.
- Build a minimal reproducible example before asking for help.

**Expert habit:** The best debuggers narrow the search space in minutes by changing one variable at a time.`,
          example: `# Minimal repro template
def debug_step(label, value):
    print(f"[{label}] {value!r} ({type(value).__name__})")

debug_step("py-apis", "HTTP & REST APIs")
debug_step("section_count", 4)`,
          output: `[py-apis] 'HTTP & REST APIs' (str)
[section_count] 4`,
          keyPoints: [
            `Reduce to the smallest failing example`,
            `Log intermediate values with types`,
            `Bisect changes with git or notebook history`,
            `Separate data bugs from logic bugs`,
            `Record seeds, versions, and hardware context`,
            `Fix root cause—not symptoms with silent catches`
          ],
          pseudoCode: `CONCEPT: Common Pitfalls & Debugging

Study checklist:
  1. Reduce to the smallest failing example
  2. Log intermediate values with types
  3. Bisect changes with git or notebook history
  4. Separate data bugs from logic bugs
  5. Record seeds, versions, and hardware context
  6. Fix root cause—not symptoms with silent catches

Topic: HTTP & REST APIs
Track: python | Level: intermediate`
        },
        {
          id: `py-apis-real-world`,
          title: `Real-World Applications`,
          content: `**HTTP & REST APIs** shows up wherever **python** skills meet business constraints. Production Python appears in FastAPI microservices, Airflow DAGs, Jupyter research workflows, and pytest CI gates. Teams standardize on virtual environments, ruff/black formatters, and pinned dependency lockfiles.

Teams shipping features around **py-apis** align research notebooks with staged rollouts: offline metrics, shadow mode, canary releases, and rollback plans. Stakeholders care about latency, cost, maintainability, and compliance — not only accuracy.

**Career narrative:** Interviewers expect you to describe a project where this topic mattered: the problem, your approach, metric movement, tradeoffs, and what you would do differently.

**Portfolio tip:** Link this lesson to README entries and capstone modules later in the curriculum. One concrete project beats ten theoretical certificates.`,
          example: `# Portfolio bullet generator for HTTP & REST APIs
skills = ["python", "intermediate", "py-apis"]
print("Built project applying:", ", ".join(skills))`,
          output: `Built project applying: python, intermediate, py-apis`,
          keyPoints: [
            ` Tie lessons to portfolio projects with measurable outcomes`,
            `Explain tradeoffs to technical and non-technical audiences`,
            `Plan deployment, monitoring, and maintenance early`,
            `Document ethical and privacy implications where relevant`,
            `Iterate with user feedback—not only offline metrics`,
            `Connect HTTP & REST APIs to adjacent topics in the same track`
          ],
          pseudoCode: `CONCEPT: Real-World Applications

Study checklist:
  1.  Tie lessons to portfolio projects with measurable outcomes
  2. Explain tradeoffs to technical and non-technical audiences
  3. Plan deployment, monitoring, and maintenance early
  4. Document ethical and privacy implications where relevant
  5. Iterate with user feedback—not only offline metrics
  6. Connect HTTP & REST APIs to adjacent topics in the same track

Topic: HTTP & REST APIs
Track: python | Level: intermediate`
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
      estimatedMinutes: 124,
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
            `Handle missing elements with if/defaults`,
            `BeautifulSoup Parsing is a foundational piece of Web Scraping Basics`,
            `Connect this section to the python track and intermediate expectations`
          ],
          pseudoCode: `CONCEPT: BeautifulSoup Parsing

Study checklist:
  1. CSS selectors scale better than manual loops
  2. strip=True cleans whitespace in text extraction
  3. Static HTML only—JS rendering needs browser automation
  4. Handle missing elements with if/defaults
  5. BeautifulSoup Parsing is a foundational piece of Web Scraping Basics
  6. Connect this section to the python track and intermediate expectations

Topic: Web Scraping Basics
Track: python | Level: intermediate`
        },
        {
          id: `fetch`,
          title: `Fetching Pages Responsibly`,
          content: `Set **\`User-Agent\`** identifying your bot and contact. Honor **robots.txt** (\`urllib.robotparser\`). Rate limit: \`time.sleep\` or token bucket between requests.

Cache responses during development. Do not scrape personal data without legal basis (GDPR).

**Applying Web Scraping Basics:** Extract data with BeautifulSoup while respecting ethics, robots.txt, and rate limits. Python skills here transfer directly to notebooks, automation scripts, API services, and ML pipelines. When studying "Fetching Pages Responsibly", connect theory to practice by predicting outputs before running examples, then explaining discrepancies. Note failure modes—missing data, wrong hyperparameters, API timeouts, shape mismatches—and how you would detect them in logs or tests. Strong practitioners capture these lessons in runbooks and reusable templates rather than re-learning them on every project.

**Why this matters:** Python fluency underpins every data pipeline, notebook, and production service in modern ML. Mastering "Fetching Pages Responsibly" here directly affects how confidently you can build, debug, and ship python projects.

**Professional habits:** Write small scripts first, then refactor into reusable functions with type hints and docstrings. Document your assumptions because they become invariants for tests, APIs, and team handoffs.

**Common mistakes:** Mutable defaults, silent exceptions, and mixing tabs with spaces cause most beginner bugs. When debugging, reduce to the smallest input that reproduces the issue and log intermediate values with their types.`,
          keyPoints: [
            `Read Terms of Service before scraping`,
            `Throttle requests to avoid overloading servers`,
            `Identify your scraper in User-Agent string`,
            `Prefer official APIs when available`,
            `Fetching Pages Responsibly is a foundational piece of Web Scraping Basics`,
            `Connect this section to the python track and intermediate expectations`
          ],
          example: `# Concept check: Fetching Pages Responsibly
meta = {
    "topic": "py-web-scrape",
    "section": "fetch",
    "track": "python",
    "level": "intermediate",
}
for key, value in meta.items():
    print(f"{key}: {value}")`,
          output: `topic: py-web-scrape
section: fetch
track: python
level: intermediate`,
          pseudoCode: `CONCEPT: Fetching Pages Responsibly

Study checklist:
  1. Read Terms of Service before scraping
  2. Throttle requests to avoid overloading servers
  3. Identify your scraper in User-Agent string
  4. Prefer official APIs when available
  5. Fetching Pages Responsibly is a foundational piece of Web Scraping Basics
  6. Connect this section to the python track and intermediate expectations

Topic: Web Scraping Basics
Track: python | Level: intermediate`
        },
        {
          id: `extract`,
          title: `Structured Extraction`,
          content: `**Structured Extraction** is essential to **Web Scraping Basics**. Extract data with BeautifulSoup while respecting ethics, robots.txt, and rate limits. At the **intermediate** level, you should be able to explain this concept to a colleague and implement it without copying blindly.

Normalize URLs with \`urllib.parse.urljoin\`. Extract tables with \`pandas.read_html\` when suitable. Store raw HTML snapshots for reproducibility before parsing logic changes.

Pipeline: fetch → parse → validate → persist. Log HTTP status and parse failures separately.

**Applying Web Scraping Basics:** Extract data with BeautifulSoup while respecting ethics, robots.txt, and rate limits. Python skills here transfer directly to notebooks, automation scripts, API services, and ML pipelines. When studying "Structured Extraction", connect theory to practice by predicting outputs before running examples, then explaining discrepancies. Note failure modes—missing data, wrong hyperparameters, API timeouts, shape mismatches—and how you would detect them in logs or tests. Strong practitioners capture these lessons in runbooks and reusable templates rather than re-learning them on every project.

**Why this matters:** Python fluency underpins every data pipeline, notebook, and production service in modern ML. Mastering "Structured Extraction" here directly affects how confidently you can build, debug, and ship python projects.

**Hands-on practice:** Run the code example below in Python or Jupyter. Predict the output before executing, then compare line-by-line. Modify one parameter at a time to see how results change — this builds intuition faster than re-reading.

**Professional habits:** Write small scripts first, then refactor into reusable functions with type hints and docstrings. Document your assumptions because they become invariants for tests, APIs, and team handoffs.

**Common mistakes:** Mutable defaults, silent exceptions, and mixing tabs with spaces cause most beginner bugs. When debugging, reduce to the smallest input that reproduces the issue and log intermediate values with their types.`,
          example: `from urllib.parse import urljoin
base = "https://example.com/courses/"
print(urljoin(base, "../blog/post"))`,
          keyPoints: [
            `urljoin resolves relative links correctly`,
            `Validate extracted fields against schema`,
            `Keep raw snapshots for debugging parser changes`,
            `pandas.read_html quick for simple tables`,
            `Structured Extraction is a foundational piece of Web Scraping Basics`,
            `Connect this section to the python track and intermediate expectations`
          ],
          pseudoCode: `CONCEPT: Structured Extraction

Study checklist:
  1. urljoin resolves relative links correctly
  2. Validate extracted fields against schema
  3. Keep raw snapshots for debugging parser changes
  4. pandas.read_html quick for simple tables
  5. Structured Extraction is a foundational piece of Web Scraping Basics
  6. Connect this section to the python track and intermediate expectations

Topic: Web Scraping Basics
Track: python | Level: intermediate`
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
            `Document purpose and retention policy`,
            `Ethical & Legal Considerations is a foundational piece of Web Scraping Basics`,
            `Connect this section to the python track and intermediate expectations`
          ],
          example: `# Concept check: Ethical & Legal Considerations
meta = {
    "topic": "py-web-scrape",
    "section": "ethics",
    "track": "python",
    "level": "intermediate",
}
for key, value in meta.items():
    print(f"{key}: {value}")`,
          output: `topic: py-web-scrape
section: ethics
track: python
level: intermediate`,
          pseudoCode: `CONCEPT: Ethical & Legal Considerations

Study checklist:
  1. Legal risk varies by jurisdiction and site ToS
  2. Do not circumvent authentication or DRM
  3. Anonymize and minimize collected personal data
  4. Document purpose and retention policy
  5. Ethical & Legal Considerations is a foundational piece of Web Scraping Basics
  6. Connect this section to the python track and intermediate expectations

Topic: Web Scraping Basics
Track: python | Level: intermediate`
        },
        {
          id: `py-web-scrape-deep-theory`,
          title: `Deep Theory & Concepts`,
          content: `**Web Scraping Basics** sits in the **python** track of the Data Science Master curriculum. Extract data with BeautifulSoup while respecting ethics, robots.txt, and rate limits.

**Theoretical foundation:** Python's execution model combines bytecode interpretation with C extensions for hot paths. Understanding reference semantics, the import system, and standard-library conventions helps you write code that scales from scripts to services.

For **py-web-scrape**, relate abstract definitions to measurable quantities: inputs, outputs, loss or cost, and constraints. When reading papers or documentation, identify which assumptions in this lesson appear as lemmas or implementation defaults.

**At the intermediate level**, connect prerequisites to new material — sketch mental models on paper before coding. Formal notation and code should mutually reinforce each other; if they diverge, your understanding has a gap to close.

**Study approach:** Read this section once for overview, once for detail, then teach it aloud in two minutes without notes. That gap reveals what to revisit.`,
          example: `# Concept check for Web Scraping Basics
meta = {"topic_id": "py-web-scrape", "track": "python", "level": "intermediate"}
print(meta["topic_id"], meta["track"], meta["level"])`,
          output: `py-web-scrape python intermediate`,
          keyPoints: [
            `Core theory of Web Scraping Basics ties to the python track`,
            `Connect definitions to inputs, outputs, and evaluation criteria`,
            `Identify assumptions that break in production or at scale`,
            `Relate this topic to prerequisites and follow-on modules`,
            `Use paper/documentation cross-checks to validate intuition`,
            `Sketch diagrams before implementing from memory`
          ],
          pseudoCode: `CONCEPT: Deep Theory & Concepts

Study checklist:
  1. Core theory of Web Scraping Basics ties to the python track
  2. Connect definitions to inputs, outputs, and evaluation criteria
  3. Identify assumptions that break in production or at scale
  4. Relate this topic to prerequisites and follow-on modules
  5. Use paper/documentation cross-checks to validate intuition
  6. Sketch diagrams before implementing from memory

Topic: Web Scraping Basics
Track: python | Level: intermediate`
        },
        {
          id: `py-web-scrape-patterns`,
          title: `Practical Patterns & Idioms`,
          content: `Professionals reuse patterns that encode lessons from **Web Scraping Basics**. Idiomatic Python favors explicit over implicit: context managers for resources, comprehensions for transforms, dataclasses for structured data, and pathlib over string paths. Follow PEP 8 naming and keep functions small with clear type hints at boundaries.

Apply a consistent project layout: separate configuration, core logic, and CLI/API entry points. Name functions after verbs, types after nouns, and tests after behavior ("test_returns_empty_when_input_missing"). For **py-web-scrape**, extract a minimal working example you can paste into interviews or design docs.

**Recommended workflow:**

1. Reproduce the canonical example from earlier sections exactly.
2. Vary one parameter at a time and log what changes.
3. Capture results in a notebook cell or short markdown log.
4. Promote stable patterns into shared utilities only after the second reuse.

**Pattern mindset:** Good patterns are boring — they reduce cognitive load so you can focus on the hard problem, not boilerplate.`,
          example: `# Idiomatic pattern snapshot for py-web-scrape
from dataclasses import dataclass

@dataclass(frozen=True)
class LessonRef:
    topic_id: str
    title: str

ref = LessonRef("py-web-scrape", "Web Scraping Basics")
print(ref.topic_id, ref.title.split()[0])`,
          output: `py-web-scrape Web`,
          keyPoints: [
            `Start from canonical examples before abstracting helpers`,
            `One change at a time when experimenting`,
            `Prefer readable names over clever one-liners`,
            `Promote patterns to shared code only after reuse`,
            `Document invariants your pattern relies on`,
            `Align style with python ecosystem conventions`
          ],
          pseudoCode: `CONCEPT: Practical Patterns & Idioms

Study checklist:
  1. Start from canonical examples before abstracting helpers
  2. One change at a time when experimenting
  3. Prefer readable names over clever one-liners
  4. Promote patterns to shared code only after reuse
  5. Document invariants your pattern relies on
  6. Align style with python ecosystem conventions

Topic: Web Scraping Basics
Track: python | Level: intermediate`
        },
        {
          id: `py-web-scrape-pitfalls`,
          title: `Common Pitfalls & Debugging`,
          content: `Learners working on **Web Scraping Basics** often hit predictable walls. Common mistakes include mutable default arguments, shadowing built-ins, ignoring exceptions silently, and mixing tabs/spaces. Use pdb or breakpoint(), structured logging, and repr()-rich error messages when debugging.

When stuck on **py-web-scrape**, reproduce with the smallest input, enable verbose logging, and bisect recent changes. Capture stack traces, shapes, dtypes, and random seeds in bug reports. Ask whether the failure is data, code, or environment — and test each hypothesis independently.

**Debugging checklist:**

- Verify assumptions listed in earlier sections.
- Compare actual vs expected intermediate values.
- Check for off-by-one errors and unit mismatches.
- Confirm library versions match the tutorial environment.
- Build a minimal reproducible example before asking for help.

**Expert habit:** The best debuggers narrow the search space in minutes by changing one variable at a time.`,
          example: `# Minimal repro template
def debug_step(label, value):
    print(f"[{label}] {value!r} ({type(value).__name__})")

debug_step("py-web-scrape", "Web Scraping Basics")
debug_step("section_count", 4)`,
          output: `[py-web-scrape] 'Web Scraping Basics' (str)
[section_count] 4`,
          keyPoints: [
            `Reduce to the smallest failing example`,
            `Log intermediate values with types`,
            `Bisect changes with git or notebook history`,
            `Separate data bugs from logic bugs`,
            `Record seeds, versions, and hardware context`,
            `Fix root cause—not symptoms with silent catches`
          ],
          pseudoCode: `CONCEPT: Common Pitfalls & Debugging

Study checklist:
  1. Reduce to the smallest failing example
  2. Log intermediate values with types
  3. Bisect changes with git or notebook history
  4. Separate data bugs from logic bugs
  5. Record seeds, versions, and hardware context
  6. Fix root cause—not symptoms with silent catches

Topic: Web Scraping Basics
Track: python | Level: intermediate`
        },
        {
          id: `py-web-scrape-real-world`,
          title: `Real-World Applications`,
          content: `**Web Scraping Basics** shows up wherever **python** skills meet business constraints. Production Python appears in FastAPI microservices, Airflow DAGs, Jupyter research workflows, and pytest CI gates. Teams standardize on virtual environments, ruff/black formatters, and pinned dependency lockfiles.

Teams shipping features around **py-web-scrape** align research notebooks with staged rollouts: offline metrics, shadow mode, canary releases, and rollback plans. Stakeholders care about latency, cost, maintainability, and compliance — not only accuracy.

**Career narrative:** Interviewers expect you to describe a project where this topic mattered: the problem, your approach, metric movement, tradeoffs, and what you would do differently.

**Portfolio tip:** Link this lesson to README entries and capstone modules later in the curriculum. One concrete project beats ten theoretical certificates.`,
          example: `# Portfolio bullet generator for Web Scraping Basics
skills = ["python", "intermediate", "py-web-scrape"]
print("Built project applying:", ", ".join(skills))`,
          output: `Built project applying: python, intermediate, py-web-scrape`,
          keyPoints: [
            ` Tie lessons to portfolio projects with measurable outcomes`,
            `Explain tradeoffs to technical and non-technical audiences`,
            `Plan deployment, monitoring, and maintenance early`,
            `Document ethical and privacy implications where relevant`,
            `Iterate with user feedback—not only offline metrics`,
            `Connect Web Scraping Basics to adjacent topics in the same track`
          ],
          pseudoCode: `CONCEPT: Real-World Applications

Study checklist:
  1.  Tie lessons to portfolio projects with measurable outcomes
  2. Explain tradeoffs to technical and non-technical audiences
  3. Plan deployment, monitoring, and maintenance early
  4. Document ethical and privacy implications where relevant
  5. Iterate with user feedback—not only offline metrics
  6. Connect Web Scraping Basics to adjacent topics in the same track

Topic: Web Scraping Basics
Track: python | Level: intermediate`
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
      estimatedMinutes: 124,
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

**Applying SQLite with Python:** Use sqlite3 for embedded relational storage, parameterized queries, and transactions. Python skills here transfer directly to notebooks, automation scripts, API services, and ML pipelines. When studying "Connecting & Cursors", connect theory to practice by predicting outputs before running examples, then explaining discrepancies. Note failure modes—missing data, wrong hyperparameters, API timeouts, shape mismatches—and how you would detect them in logs or tests. Strong practitioners capture these lessons in runbooks and reusable templates rather than re-learning them on every project.

**Why this matters:** Python fluency underpins every data pipeline, notebook, and production service in modern ML. Mastering "Connecting & Cursors" here directly affects how confidently you can build, debug, and ship python projects.

**Hands-on practice:** Run the code example below in Python or Jupyter. Predict the output before executing, then compare line-by-line. Modify one parameter at a time to see how results change — this builds intuition faster than re-reading.

**Professional habits:** Write small scripts first, then refactor into reusable functions with type hints and docstrings. Document your assumptions because they become invariants for tests, APIs, and team handoffs.

**Common mistakes:** Mutable defaults, silent exceptions, and mixing tabs with spaces cause most beginner bugs. When debugging, reduce to the smallest input that reproduces the issue and log intermediate values with their types.`,
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
            `Row factory improves readability`,
            `Connecting & Cursors is a foundational piece of SQLite with Python`,
            `Connect this section to the python track and intermediate expectations`
          ],
          pseudoCode: `CONCEPT: Connecting & Cursors

Study checklist:
  1. :memory: database for tests
  2. Context managers handle commit/rollback
  3. Parameterized ? placeholders prevent SQL injection
  4. Row factory improves readability
  5. Connecting & Cursors is a foundational piece of SQLite with Python
  6. Connect this section to the python track and intermediate expectations

Topic: SQLite with Python
Track: python | Level: intermediate`
        },
        {
          id: `sql`,
          title: `SQL Essentials in Python`,
          content: `DDL: CREATE TABLE, INDEX. DML: SELECT, INSERT, UPDATE, DELETE. **JOIN** combines tables on keys. **GROUP BY** aggregates; **HAVING** filters groups.

Use transactions for multi-step consistency: \`BEGIN\` … \`COMMIT\`. SQLite supports limited ALTER—plan schemas upfront.

**Applying SQLite with Python:** Use sqlite3 for embedded relational storage, parameterized queries, and transactions. Python skills here transfer directly to notebooks, automation scripts, API services, and ML pipelines. When studying "SQL Essentials in Python", connect theory to practice by predicting outputs before running examples, then explaining discrepancies. Note failure modes—missing data, wrong hyperparameters, API timeouts, shape mismatches—and how you would detect them in logs or tests. Strong practitioners capture these lessons in runbooks and reusable templates rather than re-learning them on every project.

**Why this matters:** Python fluency underpins every data pipeline, notebook, and production service in modern ML. Mastering "SQL Essentials in Python" here directly affects how confidently you can build, debug, and ship python projects.

**Hands-on practice:** Run the code example below in Python or Jupyter. Predict the output before executing, then compare line-by-line. Modify one parameter at a time to see how results change — this builds intuition faster than re-reading.

**Professional habits:** Write small scripts first, then refactor into reusable functions with type hints and docstrings. Document your assumptions because they become invariants for tests, APIs, and team handoffs.

**Common mistakes:** Mutable defaults, silent exceptions, and mixing tabs with spaces cause most beginner bugs. When debugging, reduce to the smallest input that reproduces the issue and log intermediate values with their types.`,
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
            `executescript for migrations/bootstrap`,
            `SQL Essentials in Python is a foundational piece of SQLite with Python`,
            `Connect this section to the python track and intermediate expectations`
          ],
          pseudoCode: `CONCEPT: SQL Essentials in Python

Study checklist:
  1. Foreign keys require PRAGMA foreign_keys=ON
  2. Indexes speed lookups on large tables
  3. Avoid SELECT * in production queries
  4. executescript for migrations/bootstrap
  5. SQL Essentials in Python is a foundational piece of SQLite with Python
  6. Connect this section to the python track and intermediate expectations

Topic: SQLite with Python
Track: python | Level: intermediate`
        },
        {
          id: `orm-alt`,
          title: `When to Upgrade from SQLite`,
          content: `**When to Upgrade from SQLite** is essential to **SQLite with Python**. Use sqlite3 for embedded relational storage, parameterized queries, and transactions. At the **intermediate** level, you should be able to explain this concept to a colleague and implement it without copying blindly.

SQLite suits local apps, prototypes, and tests. Concurrent writers serialize—use PostgreSQL/MySQL for multi-user web backends.

**SQLAlchemy** abstracts dialects; **Dataset** simplifies ad hoc exploration. Export with \`.dump\` or pandas \`read_sql\`.

**Applying SQLite with Python:** Use sqlite3 for embedded relational storage, parameterized queries, and transactions. Python skills here transfer directly to notebooks, automation scripts, API services, and ML pipelines. When studying "When to Upgrade from SQLite", connect theory to practice by predicting outputs before running examples, then explaining discrepancies. Note failure modes—missing data, wrong hyperparameters, API timeouts, shape mismatches—and how you would detect them in logs or tests. Strong practitioners capture these lessons in runbooks and reusable templates rather than re-learning them on every project.

**Why this matters:** Python fluency underpins every data pipeline, notebook, and production service in modern ML. Mastering "When to Upgrade from SQLite" here directly affects how confidently you can build, debug, and ship python projects.

**Professional habits:** Write small scripts first, then refactor into reusable functions with type hints and docstrings. Document your assumptions because they become invariants for tests, APIs, and team handoffs.

**Common mistakes:** Mutable defaults, silent exceptions, and mixing tabs with spaces cause most beginner bugs. When debugging, reduce to the smallest input that reproduces the issue and log intermediate values with their types.`,
          keyPoints: [
            `SQLite single-writer limitation at scale`,
            `PostgreSQL for production web apps`,
            `SQLAlchemy eases migration between engines`,
            `Backup via sqlite3 .backup API or file copy`,
            `When to Upgrade from SQLite is a foundational piece of SQLite with Python`,
            `Connect this section to the python track and intermediate expectations`
          ],
          example: `# Concept check: When to Upgrade from SQLite
meta = {
    "topic": "py-sqlite",
    "section": "orm-alt",
    "track": "python",
    "level": "intermediate",
}
for key, value in meta.items():
    print(f"{key}: {value}")`,
          output: `topic: py-sqlite
section: orm-alt
track: python
level: intermediate`,
          pseudoCode: `CONCEPT: When to Upgrade from SQLite

Study checklist:
  1. SQLite single-writer limitation at scale
  2. PostgreSQL for production web apps
  3. SQLAlchemy eases migration between engines
  4. Backup via sqlite3 .backup API or file copy
  5. When to Upgrade from SQLite is a foundational piece of SQLite with Python
  6. Connect this section to the python track and intermediate expectations

Topic: SQLite with Python
Track: python | Level: intermediate`
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
            `Do not store plaintext passwords—hash them`,
            `SQL Safety is a foundational piece of SQLite with Python`,
            `Connect this section to the python track and intermediate expectations`
          ],
          example: `# Concept check: SQL Safety
meta = {
    "topic": "py-sqlite",
    "section": "security",
    "track": "python",
    "level": "intermediate",
}
for key, value in meta.items():
    print(f"{key}: {value}")`,
          output: `topic: py-sqlite
section: security
track: python
level: intermediate`,
          pseudoCode: `CONCEPT: SQL Safety

Study checklist:
  1. Parameter binding stops SQL injection
  2. Validate integers and enums before queries
  3. Separate read replicas conceptually even locally
  4. Do not store plaintext passwords—hash them
  5. SQL Safety is a foundational piece of SQLite with Python
  6. Connect this section to the python track and intermediate expectations

Topic: SQLite with Python
Track: python | Level: intermediate`
        },
        {
          id: `py-sqlite-deep-theory`,
          title: `Deep Theory & Concepts`,
          content: `**SQLite with Python** sits in the **python** track of the Data Science Master curriculum. Use sqlite3 for embedded relational storage, parameterized queries, and transactions.

**Theoretical foundation:** Python's execution model combines bytecode interpretation with C extensions for hot paths. Understanding reference semantics, the import system, and standard-library conventions helps you write code that scales from scripts to services.

For **py-sqlite**, relate abstract definitions to measurable quantities: inputs, outputs, loss or cost, and constraints. When reading papers or documentation, identify which assumptions in this lesson appear as lemmas or implementation defaults.

**At the intermediate level**, connect prerequisites to new material — sketch mental models on paper before coding. Formal notation and code should mutually reinforce each other; if they diverge, your understanding has a gap to close.

**Study approach:** Read this section once for overview, once for detail, then teach it aloud in two minutes without notes. That gap reveals what to revisit.`,
          example: `# Concept check for SQLite with Python
meta = {"topic_id": "py-sqlite", "track": "python", "level": "intermediate"}
print(meta["topic_id"], meta["track"], meta["level"])`,
          output: `py-sqlite python intermediate`,
          keyPoints: [
            `Core theory of SQLite with Python ties to the python track`,
            `Connect definitions to inputs, outputs, and evaluation criteria`,
            `Identify assumptions that break in production or at scale`,
            `Relate this topic to prerequisites and follow-on modules`,
            `Use paper/documentation cross-checks to validate intuition`,
            `Sketch diagrams before implementing from memory`
          ],
          pseudoCode: `CONCEPT: Deep Theory & Concepts

Study checklist:
  1. Core theory of SQLite with Python ties to the python track
  2. Connect definitions to inputs, outputs, and evaluation criteria
  3. Identify assumptions that break in production or at scale
  4. Relate this topic to prerequisites and follow-on modules
  5. Use paper/documentation cross-checks to validate intuition
  6. Sketch diagrams before implementing from memory

Topic: SQLite with Python
Track: python | Level: intermediate`
        },
        {
          id: `py-sqlite-patterns`,
          title: `Practical Patterns & Idioms`,
          content: `Professionals reuse patterns that encode lessons from **SQLite with Python**. Idiomatic Python favors explicit over implicit: context managers for resources, comprehensions for transforms, dataclasses for structured data, and pathlib over string paths. Follow PEP 8 naming and keep functions small with clear type hints at boundaries.

Apply a consistent project layout: separate configuration, core logic, and CLI/API entry points. Name functions after verbs, types after nouns, and tests after behavior ("test_returns_empty_when_input_missing"). For **py-sqlite**, extract a minimal working example you can paste into interviews or design docs.

**Recommended workflow:**

1. Reproduce the canonical example from earlier sections exactly.
2. Vary one parameter at a time and log what changes.
3. Capture results in a notebook cell or short markdown log.
4. Promote stable patterns into shared utilities only after the second reuse.

**Pattern mindset:** Good patterns are boring — they reduce cognitive load so you can focus on the hard problem, not boilerplate.`,
          example: `# Idiomatic pattern snapshot for py-sqlite
from dataclasses import dataclass

@dataclass(frozen=True)
class LessonRef:
    topic_id: str
    title: str

ref = LessonRef("py-sqlite", "SQLite with Python")
print(ref.topic_id, ref.title.split()[0])`,
          output: `py-sqlite SQLite`,
          keyPoints: [
            `Start from canonical examples before abstracting helpers`,
            `One change at a time when experimenting`,
            `Prefer readable names over clever one-liners`,
            `Promote patterns to shared code only after reuse`,
            `Document invariants your pattern relies on`,
            `Align style with python ecosystem conventions`
          ],
          pseudoCode: `CONCEPT: Practical Patterns & Idioms

Study checklist:
  1. Start from canonical examples before abstracting helpers
  2. One change at a time when experimenting
  3. Prefer readable names over clever one-liners
  4. Promote patterns to shared code only after reuse
  5. Document invariants your pattern relies on
  6. Align style with python ecosystem conventions

Topic: SQLite with Python
Track: python | Level: intermediate`
        },
        {
          id: `py-sqlite-pitfalls`,
          title: `Common Pitfalls & Debugging`,
          content: `Learners working on **SQLite with Python** often hit predictable walls. Common mistakes include mutable default arguments, shadowing built-ins, ignoring exceptions silently, and mixing tabs/spaces. Use pdb or breakpoint(), structured logging, and repr()-rich error messages when debugging.

When stuck on **py-sqlite**, reproduce with the smallest input, enable verbose logging, and bisect recent changes. Capture stack traces, shapes, dtypes, and random seeds in bug reports. Ask whether the failure is data, code, or environment — and test each hypothesis independently.

**Debugging checklist:**

- Verify assumptions listed in earlier sections.
- Compare actual vs expected intermediate values.
- Check for off-by-one errors and unit mismatches.
- Confirm library versions match the tutorial environment.
- Build a minimal reproducible example before asking for help.

**Expert habit:** The best debuggers narrow the search space in minutes by changing one variable at a time.`,
          example: `# Minimal repro template
def debug_step(label, value):
    print(f"[{label}] {value!r} ({type(value).__name__})")

debug_step("py-sqlite", "SQLite with Python")
debug_step("section_count", 4)`,
          output: `[py-sqlite] 'SQLite with Python' (str)
[section_count] 4`,
          keyPoints: [
            `Reduce to the smallest failing example`,
            `Log intermediate values with types`,
            `Bisect changes with git or notebook history`,
            `Separate data bugs from logic bugs`,
            `Record seeds, versions, and hardware context`,
            `Fix root cause—not symptoms with silent catches`
          ],
          pseudoCode: `CONCEPT: Common Pitfalls & Debugging

Study checklist:
  1. Reduce to the smallest failing example
  2. Log intermediate values with types
  3. Bisect changes with git or notebook history
  4. Separate data bugs from logic bugs
  5. Record seeds, versions, and hardware context
  6. Fix root cause—not symptoms with silent catches

Topic: SQLite with Python
Track: python | Level: intermediate`
        },
        {
          id: `py-sqlite-real-world`,
          title: `Real-World Applications`,
          content: `**SQLite with Python** shows up wherever **python** skills meet business constraints. Production Python appears in FastAPI microservices, Airflow DAGs, Jupyter research workflows, and pytest CI gates. Teams standardize on virtual environments, ruff/black formatters, and pinned dependency lockfiles.

Teams shipping features around **py-sqlite** align research notebooks with staged rollouts: offline metrics, shadow mode, canary releases, and rollback plans. Stakeholders care about latency, cost, maintainability, and compliance — not only accuracy.

**Career narrative:** Interviewers expect you to describe a project where this topic mattered: the problem, your approach, metric movement, tradeoffs, and what you would do differently.

**Portfolio tip:** Link this lesson to README entries and capstone modules later in the curriculum. One concrete project beats ten theoretical certificates.`,
          example: `# Portfolio bullet generator for SQLite with Python
skills = ["python", "intermediate", "py-sqlite"]
print("Built project applying:", ", ".join(skills))`,
          output: `Built project applying: python, intermediate, py-sqlite`,
          keyPoints: [
            ` Tie lessons to portfolio projects with measurable outcomes`,
            `Explain tradeoffs to technical and non-technical audiences`,
            `Plan deployment, monitoring, and maintenance early`,
            `Document ethical and privacy implications where relevant`,
            `Iterate with user feedback—not only offline metrics`,
            `Connect SQLite with Python to adjacent topics in the same track`
          ],
          pseudoCode: `CONCEPT: Real-World Applications

Study checklist:
  1.  Tie lessons to portfolio projects with measurable outcomes
  2. Explain tradeoffs to technical and non-technical audiences
  3. Plan deployment, monitoring, and maintenance early
  4. Document ethical and privacy implications where relevant
  5. Iterate with user feedback—not only offline metrics
  6. Connect SQLite with Python to adjacent topics in the same track

Topic: SQLite with Python
Track: python | Level: intermediate`
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
      estimatedMinutes: 124,
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

**Applying Advanced Serialization:** JSON Schema validation, YAML config, and columnar Parquet introduction. Python skills here transfer directly to notebooks, automation scripts, API services, and ML pipelines. When studying "JSON Schema Validation", connect theory to practice by predicting outputs before running examples, then explaining discrepancies. Note failure modes—missing data, wrong hyperparameters, API timeouts, shape mismatches—and how you would detect them in logs or tests. Strong practitioners capture these lessons in runbooks and reusable templates rather than re-learning them on every project.

**Why this matters:** Python fluency underpins every data pipeline, notebook, and production service in modern ML. Mastering "JSON Schema Validation" here directly affects how confidently you can build, debug, and ship python projects.

**Hands-on practice:** Run the code example below in Python or Jupyter. Predict the output before executing, then compare line-by-line. Modify one parameter at a time to see how results change — this builds intuition faster than re-reading.

**Professional habits:** Write small scripts first, then refactor into reusable functions with type hints and docstrings. Document your assumptions because they become invariants for tests, APIs, and team handoffs.

**Common mistakes:** Mutable defaults, silent exceptions, and mixing tabs with spaces cause most beginner bugs. When debugging, reduce to the smallest input that reproduces the issue and log intermediate values with their types.`,
          example: `from jsonschema import validate
schema = {"type": "object", "required": ["id"], "properties": {"id": {"type": "integer"}}}
validate({"id": 1}, schema)
print("valid")`,
          output: `valid`,
          keyPoints: [
            `Validate at system boundaries`,
            `Schemas document API contracts`,
            `Combine with pydantic for Python models`,
            `Fail fast on malformed input`,
            `JSON Schema Validation is a foundational piece of Advanced Serialization`,
            `Connect this section to the python track and intermediate expectations`
          ],
          pseudoCode: `CONCEPT: JSON Schema Validation

Study checklist:
  1. Validate at system boundaries
  2. Schemas document API contracts
  3. Combine with pydantic for Python models
  4. Fail fast on malformed input
  5. JSON Schema Validation is a foundational piece of Advanced Serialization
  6. Connect this section to the python track and intermediate expectations

Topic: Advanced Serialization
Track: python | Level: intermediate`
        },
        {
          id: `yaml`,
          title: `YAML Configuration`,
          content: `**PyYAML** loads human-readable config: \`yaml.safe_load\` only—never \`load\` with default Loader on untrusted input. YAML supports nesting, lists, anchors (use sparingly).

Separate config from code; override with environment variables in twelve-factor apps.

**Applying Advanced Serialization:** JSON Schema validation, YAML config, and columnar Parquet introduction. Python skills here transfer directly to notebooks, automation scripts, API services, and ML pipelines. When studying "YAML Configuration", connect theory to practice by predicting outputs before running examples, then explaining discrepancies. Note failure modes—missing data, wrong hyperparameters, API timeouts, shape mismatches—and how you would detect them in logs or tests. Strong practitioners capture these lessons in runbooks and reusable templates rather than re-learning them on every project.

**Why this matters:** Python fluency underpins every data pipeline, notebook, and production service in modern ML. Mastering "YAML Configuration" here directly affects how confidently you can build, debug, and ship python projects.

**Hands-on practice:** Run the code example below in Python or Jupyter. Predict the output before executing, then compare line-by-line. Modify one parameter at a time to see how results change — this builds intuition faster than re-reading.

**Professional habits:** Write small scripts first, then refactor into reusable functions with type hints and docstrings. Document your assumptions because they become invariants for tests, APIs, and team handoffs.

**Common mistakes:** Mutable defaults, silent exceptions, and mixing tabs with spaces cause most beginner bugs. When debugging, reduce to the smallest input that reproduces the issue and log intermediate values with their types.`,
          example: `import yaml
cfg = yaml.safe_load("model:\\n  name: rf\\n  trees: 100\\n")
print(cfg["model"]["trees"])`,
          output: `100`,
          keyPoints: [
            `safe_load prevents arbitrary object construction`,
            `Keep secrets out of YAML in repos`,
            `Env var overrides for deployment-specific values`,
            `Lint config files in CI`,
            `YAML Configuration is a foundational piece of Advanced Serialization`,
            `Connect this section to the python track and intermediate expectations`
          ],
          pseudoCode: `CONCEPT: YAML Configuration

Study checklist:
  1. safe_load prevents arbitrary object construction
  2. Keep secrets out of YAML in repos
  3. Env var overrides for deployment-specific values
  4. Lint config files in CI
  5. YAML Configuration is a foundational piece of Advanced Serialization
  6. Connect this section to the python track and intermediate expectations

Topic: Advanced Serialization
Track: python | Level: intermediate`
        },
        {
          id: `parquet`,
          title: `Parquet Introduction`,
          content: `**Parquet** columnar format efficient for analytics—compression and predicate pushdown in Spark/DuckDB/pandas (\`read_parquet\`). Schema embedded; types preserved better than CSV.

Partition directories by date/key for large datasets. Not ideal for row-by-row OLTP.

**Applying Advanced Serialization:** JSON Schema validation, YAML config, and columnar Parquet introduction. Python skills here transfer directly to notebooks, automation scripts, API services, and ML pipelines. When studying "Parquet Introduction", connect theory to practice by predicting outputs before running examples, then explaining discrepancies. Note failure modes—missing data, wrong hyperparameters, API timeouts, shape mismatches—and how you would detect them in logs or tests. Strong practitioners capture these lessons in runbooks and reusable templates rather than re-learning them on every project.

**Why this matters:** Python fluency underpins every data pipeline, notebook, and production service in modern ML. Mastering "Parquet Introduction" here directly affects how confidently you can build, debug, and ship python projects.

**Hands-on practice:** Run the code example below in Python or Jupyter. Predict the output before executing, then compare line-by-line. Modify one parameter at a time to see how results change — this builds intuition faster than re-reading.

**Professional habits:** Write small scripts first, then refactor into reusable functions with type hints and docstrings. Document your assumptions because they become invariants for tests, APIs, and team handoffs.

**Common mistakes:** Mutable defaults, silent exceptions, and mixing tabs with spaces cause most beginner bugs. When debugging, reduce to the smallest input that reproduces the issue and log intermediate values with their types.`,
          example: `import pandas as pd
df = pd.DataFrame({"a": [1, 2], "b": ["x", "y"]})
# df.to_parquet("out.parquet"); df2 = pd.read_parquet("out.parquet")
print(list(df.columns))`,
          output: `['a', 'b']`,
          keyPoints: [
            `Columnar storage reduces I/O for analytics`,
            `Schema evolution requires careful migration`,
            `Combine with Snappy/Zstd compression`,
            `pandas/pyarrow common Python stack`,
            `Parquet Introduction is a foundational piece of Advanced Serialization`,
            `Connect this section to the python track and intermediate expectations`
          ],
          pseudoCode: `CONCEPT: Parquet Introduction

Study checklist:
  1. Columnar storage reduces I/O for analytics
  2. Schema evolution requires careful migration
  3. Combine with Snappy/Zstd compression
  4. pandas/pyarrow common Python stack
  5. Parquet Introduction is a foundational piece of Advanced Serialization
  6. Connect this section to the python track and intermediate expectations

Topic: Advanced Serialization
Track: python | Level: intermediate`
        },
        {
          id: `formats-choose`,
          title: `Choosing a Format`,
          content: `**Choosing a Format** is essential to **Advanced Serialization**. JSON Schema validation, YAML config, and columnar Parquet introduction. At the **intermediate** level, you should be able to explain this concept to a colleague and implement it without copying blindly.

JSON for APIs and configs. CSV for human spreadsheet interchange. Parquet for ML datasets and warehouses. Avro/Protobuf for streaming schemas. Pick based on readers, schema needs, and size.

Document encoding, timezone, and null conventions in data catalogs.

**Applying Advanced Serialization:** JSON Schema validation, YAML config, and columnar Parquet introduction. Python skills here transfer directly to notebooks, automation scripts, API services, and ML pipelines. When studying "Choosing a Format", connect theory to practice by predicting outputs before running examples, then explaining discrepancies. Note failure modes—missing data, wrong hyperparameters, API timeouts, shape mismatches—and how you would detect them in logs or tests. Strong practitioners capture these lessons in runbooks and reusable templates rather than re-learning them on every project.

**Why this matters:** Python fluency underpins every data pipeline, notebook, and production service in modern ML. Mastering "Choosing a Format" here directly affects how confidently you can build, debug, and ship python projects.

**Professional habits:** Write small scripts first, then refactor into reusable functions with type hints and docstrings. Document your assumptions because they become invariants for tests, APIs, and team handoffs.

**Common mistakes:** Mutable defaults, silent exceptions, and mixing tabs with spaces cause most beginner bugs. When debugging, reduce to the smallest input that reproduces the issue and log intermediate values with their types.`,
          keyPoints: [
            `Match format to consumer tooling`,
            `Columnar for read-heavy analytics`,
            `Row formats for transactional updates`,
            `Version datasets with DVC or similar`,
            `Choosing a Format is a foundational piece of Advanced Serialization`,
            `Connect this section to the python track and intermediate expectations`
          ],
          example: `# Concept check: Choosing a Format
meta = {
    "topic": "py-serialization",
    "section": "formats-choose",
    "track": "python",
    "level": "intermediate",
}
for key, value in meta.items():
    print(f"{key}: {value}")`,
          output: `topic: py-serialization
section: formats-choose
track: python
level: intermediate`,
          pseudoCode: `CONCEPT: Choosing a Format

Study checklist:
  1. Match format to consumer tooling
  2. Columnar for read-heavy analytics
  3. Row formats for transactional updates
  4. Version datasets with DVC or similar
  5. Choosing a Format is a foundational piece of Advanced Serialization
  6. Connect this section to the python track and intermediate expectations

Topic: Advanced Serialization
Track: python | Level: intermediate`
        },
        {
          id: `py-serialization-deep-theory`,
          title: `Deep Theory & Concepts`,
          content: `**Advanced Serialization** sits in the **python** track of the Data Science Master curriculum. JSON Schema validation, YAML config, and columnar Parquet introduction.

**Theoretical foundation:** Python's execution model combines bytecode interpretation with C extensions for hot paths. Understanding reference semantics, the import system, and standard-library conventions helps you write code that scales from scripts to services.

For **py-serialization**, relate abstract definitions to measurable quantities: inputs, outputs, loss or cost, and constraints. When reading papers or documentation, identify which assumptions in this lesson appear as lemmas or implementation defaults.

**At the intermediate level**, connect prerequisites to new material — sketch mental models on paper before coding. Formal notation and code should mutually reinforce each other; if they diverge, your understanding has a gap to close.

**Study approach:** Read this section once for overview, once for detail, then teach it aloud in two minutes without notes. That gap reveals what to revisit.`,
          example: `# Concept check for Advanced Serialization
meta = {"topic_id": "py-serialization", "track": "python", "level": "intermediate"}
print(meta["topic_id"], meta["track"], meta["level"])`,
          output: `py-serialization python intermediate`,
          keyPoints: [
            `Core theory of Advanced Serialization ties to the python track`,
            `Connect definitions to inputs, outputs, and evaluation criteria`,
            `Identify assumptions that break in production or at scale`,
            `Relate this topic to prerequisites and follow-on modules`,
            `Use paper/documentation cross-checks to validate intuition`,
            `Sketch diagrams before implementing from memory`
          ],
          pseudoCode: `CONCEPT: Deep Theory & Concepts

Study checklist:
  1. Core theory of Advanced Serialization ties to the python track
  2. Connect definitions to inputs, outputs, and evaluation criteria
  3. Identify assumptions that break in production or at scale
  4. Relate this topic to prerequisites and follow-on modules
  5. Use paper/documentation cross-checks to validate intuition
  6. Sketch diagrams before implementing from memory

Topic: Advanced Serialization
Track: python | Level: intermediate`
        },
        {
          id: `py-serialization-patterns`,
          title: `Practical Patterns & Idioms`,
          content: `Professionals reuse patterns that encode lessons from **Advanced Serialization**. Idiomatic Python favors explicit over implicit: context managers for resources, comprehensions for transforms, dataclasses for structured data, and pathlib over string paths. Follow PEP 8 naming and keep functions small with clear type hints at boundaries.

Apply a consistent project layout: separate configuration, core logic, and CLI/API entry points. Name functions after verbs, types after nouns, and tests after behavior ("test_returns_empty_when_input_missing"). For **py-serialization**, extract a minimal working example you can paste into interviews or design docs.

**Recommended workflow:**

1. Reproduce the canonical example from earlier sections exactly.
2. Vary one parameter at a time and log what changes.
3. Capture results in a notebook cell or short markdown log.
4. Promote stable patterns into shared utilities only after the second reuse.

**Pattern mindset:** Good patterns are boring — they reduce cognitive load so you can focus on the hard problem, not boilerplate.`,
          example: `# Idiomatic pattern snapshot for py-serialization
from dataclasses import dataclass

@dataclass(frozen=True)
class LessonRef:
    topic_id: str
    title: str

ref = LessonRef("py-serialization", "Advanced Serialization")
print(ref.topic_id, ref.title.split()[0])`,
          output: `py-serialization Advanced`,
          keyPoints: [
            `Start from canonical examples before abstracting helpers`,
            `One change at a time when experimenting`,
            `Prefer readable names over clever one-liners`,
            `Promote patterns to shared code only after reuse`,
            `Document invariants your pattern relies on`,
            `Align style with python ecosystem conventions`
          ],
          pseudoCode: `CONCEPT: Practical Patterns & Idioms

Study checklist:
  1. Start from canonical examples before abstracting helpers
  2. One change at a time when experimenting
  3. Prefer readable names over clever one-liners
  4. Promote patterns to shared code only after reuse
  5. Document invariants your pattern relies on
  6. Align style with python ecosystem conventions

Topic: Advanced Serialization
Track: python | Level: intermediate`
        },
        {
          id: `py-serialization-pitfalls`,
          title: `Common Pitfalls & Debugging`,
          content: `Learners working on **Advanced Serialization** often hit predictable walls. Common mistakes include mutable default arguments, shadowing built-ins, ignoring exceptions silently, and mixing tabs/spaces. Use pdb or breakpoint(), structured logging, and repr()-rich error messages when debugging.

When stuck on **py-serialization**, reproduce with the smallest input, enable verbose logging, and bisect recent changes. Capture stack traces, shapes, dtypes, and random seeds in bug reports. Ask whether the failure is data, code, or environment — and test each hypothesis independently.

**Debugging checklist:**

- Verify assumptions listed in earlier sections.
- Compare actual vs expected intermediate values.
- Check for off-by-one errors and unit mismatches.
- Confirm library versions match the tutorial environment.
- Build a minimal reproducible example before asking for help.

**Expert habit:** The best debuggers narrow the search space in minutes by changing one variable at a time.`,
          example: `# Minimal repro template
def debug_step(label, value):
    print(f"[{label}] {value!r} ({type(value).__name__})")

debug_step("py-serialization", "Advanced Serialization")
debug_step("section_count", 4)`,
          output: `[py-serialization] 'Advanced Serialization' (str)
[section_count] 4`,
          keyPoints: [
            `Reduce to the smallest failing example`,
            `Log intermediate values with types`,
            `Bisect changes with git or notebook history`,
            `Separate data bugs from logic bugs`,
            `Record seeds, versions, and hardware context`,
            `Fix root cause—not symptoms with silent catches`
          ],
          pseudoCode: `CONCEPT: Common Pitfalls & Debugging

Study checklist:
  1. Reduce to the smallest failing example
  2. Log intermediate values with types
  3. Bisect changes with git or notebook history
  4. Separate data bugs from logic bugs
  5. Record seeds, versions, and hardware context
  6. Fix root cause—not symptoms with silent catches

Topic: Advanced Serialization
Track: python | Level: intermediate`
        },
        {
          id: `py-serialization-real-world`,
          title: `Real-World Applications`,
          content: `**Advanced Serialization** shows up wherever **python** skills meet business constraints. Production Python appears in FastAPI microservices, Airflow DAGs, Jupyter research workflows, and pytest CI gates. Teams standardize on virtual environments, ruff/black formatters, and pinned dependency lockfiles.

Teams shipping features around **py-serialization** align research notebooks with staged rollouts: offline metrics, shadow mode, canary releases, and rollback plans. Stakeholders care about latency, cost, maintainability, and compliance — not only accuracy.

**Career narrative:** Interviewers expect you to describe a project where this topic mattered: the problem, your approach, metric movement, tradeoffs, and what you would do differently.

**Portfolio tip:** Link this lesson to README entries and capstone modules later in the curriculum. One concrete project beats ten theoretical certificates.`,
          example: `# Portfolio bullet generator for Advanced Serialization
skills = ["python", "intermediate", "py-serialization"]
print("Built project applying:", ", ".join(skills))`,
          output: `Built project applying: python, intermediate, py-serialization`,
          keyPoints: [
            ` Tie lessons to portfolio projects with measurable outcomes`,
            `Explain tradeoffs to technical and non-technical audiences`,
            `Plan deployment, monitoring, and maintenance early`,
            `Document ethical and privacy implications where relevant`,
            `Iterate with user feedback—not only offline metrics`,
            `Connect Advanced Serialization to adjacent topics in the same track`
          ],
          pseudoCode: `CONCEPT: Real-World Applications

Study checklist:
  1.  Tie lessons to portfolio projects with measurable outcomes
  2. Explain tradeoffs to technical and non-technical audiences
  3. Plan deployment, monitoring, and maintenance early
  4. Document ethical and privacy implications where relevant
  5. Iterate with user feedback—not only offline metrics
  6. Connect Advanced Serialization to adjacent topics in the same track

Topic: Advanced Serialization
Track: python | Level: intermediate`
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
      estimatedMinutes: 124,
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
