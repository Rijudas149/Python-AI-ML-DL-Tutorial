import type { Topic } from '../../types';

export const module21Topics: Topic[] = [
{
      id: `py-testing`,
      title: `Testing with pytest & unittest`,
      description: `Write reliable unit tests, use fixtures and mocking, and integrate tests into CI pipelines.`,
      level: `intermediate`,
      track: `python`,
      sections: [
        {
          id: `pytest-basics`,
          title: `pytest Fundamentals`,
          content: `**pytest** discovers tests named \`test_*\` or methods on \`Test*\` classes. Assertions use plain \`assert\`—no special assertion methods. Run with \`pytest -v\` for verbose output.

Test functions should be **isolated**: no shared mutable global state, no dependence on run order. Each test arranges inputs, acts on the system under test, and asserts outcomes (AAA pattern).

pytest collects tests from files matching \`test_*.py\` or \`*_test.py\`. Use \`-k\` to filter by substring and \`-x\` to stop on first failure during debugging.

**Why this matters:**

- Python fluency underpins every data pipeline, notebook, and production service in modern ML.
- Mastering **pytest Fundamentals** directly affects how confidently you can build, debug, and ship python projects.
- This concept appears repeatedly in later modules — time invested here pays off across the entire track.

**Hands-on practice:**

- Run the code example below in Python or Jupyter.
- Predict the output before executing, then compare line-by-line.
- Modify one parameter at a time to see how results change — this builds intuition faster than re-reading.

**Professional habits:**

- Write small scripts first, then refactor into reusable functions with type hints and docstrings.
- Document your assumptions because they become invariants for tests, APIs, and team handoffs.
- Revisit this section after the exercises to confirm each habit feels automatic.

**Common mistakes:**

- Mutable defaults, silent exceptions, and mixing tabs with spaces cause most beginner bugs.
- When debugging, reduce to the smallest input that reproduces the issue.
- Log intermediate values with their types before guessing at the fix.`,
          example: `def add(a, b):
    return a + b

def test_add():
    assert add(2, 3) == 5
    assert add(-1, 1) == 0

# Run: pytest test_math.py -v`,
          output: `test_add PASSED`,
          keyPoints: [
            `Use plain assert — pytest rewrites failures richly`,
            `One logical behavior per test function`,
            `Tests must be deterministic and independent`,
            `Naming test_* enables automatic discovery`,
            `pytest Fundamentals is a foundational piece of Testing with pytest & unittest`,
            `Connect this section to the python track and intermediate expectations`
          ],
          pseudoCode: `CONCEPT: pytest Fundamentals

Study checklist:
  1. Use plain assert — pytest rewrites failures richly
  2. One logical behavior per test function
  3. Tests must be deterministic and independent
  4. Naming test_* enables automatic discovery
  5. pytest Fundamentals is a foundational piece of Testing with pytest & unittest
  6. Connect this section to the python track and intermediate expectations

Topic: Testing with pytest & unittest
Track: python | Level: intermediate`
        },
        {
          id: `fixtures`,
          title: `Fixtures & Parametrize`,
          content: `**Fixtures** inject setup/teardown via dependency injection. Decorate with \`@pytest.fixture\`; request by parameter name. Scope controls lifetime: \`function\` (default), \`class\`, \`module\`, \`session\`.

\`@pytest.mark.parametrize("x,y,expected", [(1,2,3), (0,0,0)])\` runs the same test with multiple inputs—ideal for edge cases.

Use \`yield\` in fixtures for teardown after tests complete. \`conftest.py\` shares fixtures across a directory tree.

**Why this matters:**

- Python fluency underpins every data pipeline, notebook, and production service in modern ML.
- Mastering **Fixtures & Parametrize** directly affects how confidently you can build, debug, and ship python projects.
- This concept appears repeatedly in later modules — time invested here pays off across the entire track.

**Hands-on practice:**

- Run the code example below in Python or Jupyter.
- Predict the output before executing, then compare line-by-line.
- Modify one parameter at a time to see how results change — this builds intuition faster than re-reading.

**Professional habits:**

- Write small scripts first, then refactor into reusable functions with type hints and docstrings.
- Document your assumptions because they become invariants for tests, APIs, and team handoffs.
- Revisit this section after the exercises to confirm each habit feels automatic.

**Common mistakes:**

- Mutable defaults, silent exceptions, and mixing tabs with spaces cause most beginner bugs.
- When debugging, reduce to the smallest input that reproduces the issue.
- Log intermediate values with their types before guessing at the fix.`,
          example: `import pytest

@pytest.fixture
def sample_list():
    return [1, 2, 3]

@pytest.mark.parametrize("idx,val", [(0,1), (2,3)])
def test_index(sample_list, idx, val):
    assert sample_list[idx] == val`,
          keyPoints: [
            `Fixtures replace repetitive setup code`,
            `parametrize documents input/output cases explicitly`,
            `conftest.py centralizes shared fixtures`,
            `Choose fixture scope to balance speed vs isolation`,
            `Fixtures & Parametrize is a foundational piece of Testing with pytest & unittest`,
            `Connect this section to the python track and intermediate expectations`
          ],
          pseudoCode: `CONCEPT: Fixtures & Parametrize

Study checklist:
  1. Fixtures replace repetitive setup code
  2. parametrize documents input/output cases explicitly
  3. conftest.py centralizes shared fixtures
  4. Choose fixture scope to balance speed vs isolation
  5. Fixtures & Parametrize is a foundational piece of Testing with pytest & unittest
  6. Connect this section to the python track and intermediate expectations

Topic: Testing with pytest & unittest
Track: python | Level: intermediate`
        },
        {
          id: `unittest-mock`,
          title: `unittest & Mocking`,
          content: `The **unittest** module in the standard library uses class-based tests inheriting \`unittest.TestCase\` with methods like \`self.assertEqual\`. pytest can run unittest tests too.

**Mocking** isolates units from I/O: \`unittest.mock.patch\` replaces objects during a test. \`MagicMock\` records calls and return values. Patch where the name is **looked up**, not where it is defined.

Verify interactions with \`mock.assert_called_once_with(...)\`. Avoid over-mocking—it hides integration defects.

**Why this matters:**

- Python fluency underpins every data pipeline, notebook, and production service in modern ML.
- Mastering **unittest & Mocking** directly affects how confidently you can build, debug, and ship python projects.
- This concept appears repeatedly in later modules — time invested here pays off across the entire track.

**Hands-on practice:**

- Run the code example below in Python or Jupyter.
- Predict the output before executing, then compare line-by-line.
- Modify one parameter at a time to see how results change — this builds intuition faster than re-reading.

**Professional habits:**

- Write small scripts first, then refactor into reusable functions with type hints and docstrings.
- Document your assumptions because they become invariants for tests, APIs, and team handoffs.
- Revisit this section after the exercises to confirm each habit feels automatic.

**Common mistakes:**

- Mutable defaults, silent exceptions, and mixing tabs with spaces cause most beginner bugs.
- When debugging, reduce to the smallest input that reproduces the issue.
- Log intermediate values with their types before guessing at the fix.`,
          example: `from unittest.mock import patch

def fetch_url(url):
    import requests
    return requests.get(url).status_code

@patch("requests.get")
def test_fetch(mock_get):
    mock_get.return_value.status_code = 200
    assert fetch_url("http://example.com") == 200
    mock_get.assert_called_once()`,
          keyPoints: [
            `Patch at the import site used by code under test`,
            `Mocks verify both return values and call patterns`,
            `unittest.TestCase still valid; pytest is often preferred`,
            `Do not mock the function you are testing`,
            `unittest & Mocking is a foundational piece of Testing with pytest & unittest`,
            `Connect this section to the python track and intermediate expectations`
          ],
          pseudoCode: `CONCEPT: unittest & Mocking

Study checklist:
  1. Patch at the import site used by code under test
  2. Mocks verify both return values and call patterns
  3. unittest.TestCase still valid; pytest is often preferred
  4. Do not mock the function you are testing
  5. unittest & Mocking is a foundational piece of Testing with pytest & unittest
  6. Connect this section to the python track and intermediate expectations

Topic: Testing with pytest & unittest
Track: python | Level: intermediate`
        },
        {
          id: `coverage-ci`,
          title: `Coverage & CI Integration`,
          content: `**Coverage** measures which lines executed during tests: \`pytest --cov=mypackage --cov-report=term-missing\`. Aim for high coverage on critical paths, not vanity 100% on trivial getters.

CI (GitHub Actions, GitLab) runs \`pytest\` on every push. Fail builds on test failure or coverage regression. Cache dependencies for speed.

Structure tests mirroring package layout: \`src/foo/bar.py\` → \`tests/test_bar.py\`. Keep tests fast—mark slow integration tests with \`@pytest.mark.slow\`.

**Why this matters:**

- Python fluency underpins every data pipeline, notebook, and production service in modern ML.
- Mastering **Coverage & CI Integration** directly affects how confidently you can build, debug, and ship python projects.
- This concept appears repeatedly in later modules — time invested here pays off across the entire track.

**Hands-on practice:**

- Run the code example below in Python or Jupyter.
- Predict the output before executing, then compare line-by-line.
- Modify one parameter at a time to see how results change — this builds intuition faster than re-reading.

**Professional habits:**

- Write small scripts first, then refactor into reusable functions with type hints and docstrings.
- Document your assumptions because they become invariants for tests, APIs, and team handoffs.
- Revisit this section after the exercises to confirm each habit feels automatic.

**Common mistakes:**

- Mutable defaults, silent exceptions, and mixing tabs with spaces cause most beginner bugs.
- When debugging, reduce to the smallest input that reproduces the issue.
- Log intermediate values with their types before guessing at the fix.`,
          example: `# .github/workflows/test.yml snippet
# - run: pip install pytest pytest-cov
# - run: pytest --cov=app --cov-fail-under=80`,
          keyPoints: [
            `Coverage highlights untested branches`,
            `CI gates prevent merging broken code`,
            `Separate fast unit from slow integration tests`,
            `Mirror source layout in tests/ directory`,
            `Coverage & CI Integration is a foundational piece of Testing with pytest & unittest`,
            `Connect this section to the python track and intermediate expectations`
          ],
          pseudoCode: `CONCEPT: Coverage & CI Integration

Study checklist:
  1. Coverage highlights untested branches
  2. CI gates prevent merging broken code
  3. Separate fast unit from slow integration tests
  4. Mirror source layout in tests/ directory
  5. Coverage & CI Integration is a foundational piece of Testing with pytest & unittest
  6. Connect this section to the python track and intermediate expectations

Topic: Testing with pytest & unittest
Track: python | Level: intermediate`
        },
        {
          id: `py-testing-deep-theory`,
          title: `Deep Theory & Concepts`,
          content: `**Testing with pytest & unittest** sits in the **python** track of the Data Science Master curriculum. Write reliable unit tests, use fixtures and mocking, and integrate tests into CI pipelines.

**Theoretical foundation:**

- Python's execution model combines bytecode interpretation with C extensions for hot paths.
- Understanding reference semantics, the import system, and standard-library conventions helps you write code that scales from scripts to services.

pytest fixtures provide dependency injection for tests; unittest.mock.patch isolates units from I/O. Test pyramid: many fast unit tests, fewer integration tests, minimal brittle E2E.

**At the intermediate level**, connect prerequisites to new material — sketch mental models on paper before coding. Formal notation and code should mutually reinforce each other; if they diverge, your understanding has a gap to close.

**Study approach:**

- Read this section once for overview, once for detail, then teach it aloud in two minutes without notes.
- That gap reveals what to revisit.`,
          example: `# Concept check for Testing with pytest & unittest
meta = {"topic_id": "py-testing", "track": "python", "level": "intermediate"}
print(meta["topic_id"], meta["track"], meta["level"])`,
          output: `py-testing python intermediate`,
          keyPoints: [
            `Core theory of Testing with pytest & unittest ties to the python track`,
            `Connect definitions to inputs, outputs, and evaluation criteria`,
            `Identify assumptions that break in production or at scale`,
            `Relate this topic to prerequisites and follow-on modules`,
            `Use paper/documentation cross-checks to validate intuition`,
            `Sketch diagrams before implementing from memory`
          ],
          pseudoCode: `CONCEPT: Deep Theory & Concepts

Study checklist:
  1. Core theory of Testing with pytest & unittest ties to the python track
  2. Connect definitions to inputs, outputs, and evaluation criteria
  3. Identify assumptions that break in production or at scale
  4. Relate this topic to prerequisites and follow-on modules
  5. Use paper/documentation cross-checks to validate intuition
  6. Sketch diagrams before implementing from memory

Topic: Testing with pytest & unittest
Track: python | Level: intermediate`
        },
        {
          id: `py-testing-patterns`,
          title: `Practical Patterns & Idioms`,
          content: `Professionals reuse patterns that encode lessons from **Testing with pytest & unittest**. Idiomatic Python favors explicit over implicit: context managers for resources, comprehensions for transforms, dataclasses for structured data, and pathlib over string paths. Follow PEP 8 naming and keep functions small with clear type hints at boundaries.

Parametrize tests with @pytest.mark.parametrize; use tmp_path for filesystem tests; freeze time with freezegun for temporal logic.

**Recommended workflow:**

- 1. Reproduce the canonical example from earlier sections exactly.
2. Vary one parameter at a time and log what changes.
3. Capture results in a notebook cell or short markdown log.
4. Promote stable patterns into shared utilities only after the second reuse.

**Pattern mindset:**

- Good patterns are boring — they reduce cognitive load so you can focus on the hard problem, not boilerplate.`,
          example: `# Idiomatic pattern snapshot for py-testing
from dataclasses import dataclass

@dataclass(frozen=True)
class LessonRef:
    topic_id: str
    title: str

ref = LessonRef("py-testing", "Testing with pytest & unittest")
print(ref.topic_id, ref.title.split()[0])`,
          output: `py-testing Testing`,
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

Topic: Testing with pytest & unittest
Track: python | Level: intermediate`
        },
        {
          id: `py-testing-pitfalls`,
          title: `Common Pitfalls & Debugging`,
          content: `Learners working on **Testing with pytest & unittest** often hit predictable walls. Common mistakes include mutable default arguments, shadowing built-ins, ignoring exceptions silently, and mixing tabs/spaces. Use pdb or breakpoint(), structured logging, and repr()-rich error messages when debugging.

Flaky tests from shared global state, testing implementation details instead of behavior, and over-mocking that hides integration bugs.

**Debugging checklist:**

- Verify assumptions listed in earlier sections.
- Compare actual vs expected intermediate values.
- Check for off-by-one errors and unit mismatches.
- Confirm library versions match the tutorial environment.
- Build a minimal reproducible example before asking for help.

**Expert habit:**

- The best debuggers narrow the search space in minutes by changing one variable at a time.`,
          example: `# Minimal repro template
def debug_step(label, value):
    print(f"[{label}] {value!r} ({type(value).__name__})")

debug_step("py-testing", "Testing with pytest & unittest")
debug_step("section_count", 4)`,
          output: `[py-testing] 'Testing with pytest & unittest' (str)
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

Topic: Testing with pytest & unittest
Track: python | Level: intermediate`
        },
        {
          id: `py-testing-real-world`,
          title: `Real-World Applications`,
          content: `**Testing with pytest & unittest** shows up wherever **python** skills meet business constraints. Production Python appears in FastAPI microservices, Airflow DAGs, Jupyter research workflows, and pytest CI gates. Teams standardize on virtual environments, ruff/black formatters, and pinned dependency lockfiles.

CI pipelines run pytest with coverage gates; teams enforce 80%+ coverage on core libraries and mutation testing on critical paths.

**Career narrative:**

- Interviewers expect you to describe a project where this topic mattered: the problem, your approach, metric movement, tradeoffs, and what you would do differently.

**Portfolio tip:**

- Link this lesson to README entries and capstone modules later in the curriculum.
- One concrete project beats ten theoretical certificates.`,
          example: `# Portfolio bullet generator for Testing with pytest & unittest
skills = ["python", "intermediate", "py-testing"]
print("Built project applying:", ", ".join(skills))`,
          output: `Built project applying: python, intermediate, py-testing`,
          keyPoints: [
            ` Tie lessons to portfolio projects with measurable outcomes`,
            `Explain tradeoffs to technical and non-technical audiences`,
            `Plan deployment, monitoring, and maintenance early`,
            `Document ethical and privacy implications where relevant`,
            `Iterate with user feedback—not only offline metrics`,
            `Connect Testing with pytest & unittest to adjacent topics in the same track`
          ],
          pseudoCode: `CONCEPT: Real-World Applications

Study checklist:
  1.  Tie lessons to portfolio projects with measurable outcomes
  2. Explain tradeoffs to technical and non-technical audiences
  3. Plan deployment, monitoring, and maintenance early
  4. Document ethical and privacy implications where relevant
  5. Iterate with user feedback—not only offline metrics
  6. Connect Testing with pytest & unittest to adjacent topics in the same track

Topic: Testing with pytest & unittest
Track: python | Level: intermediate`
        }
      ],
      exercises: [
        {
          id: `ex-pytest-1`,
          question: `Write a pytest test asserting len([1,2,3]) == 3.`,
          solution: `def test_len():
    assert len([1, 2, 3]) == 3`,
          difficulty: `easy`
        },
        {
          id: `ex-pytest-2`,
          question: `Parametrize a test for double(2)==4 and double(0)==0.`,
          solution: `import pytest

def double(x):
    return x * 2

@pytest.mark.parametrize("inp,exp", [(2,4), (0,0)])
def test_double(inp, exp):
    assert double(inp) == exp`,
          difficulty: `medium`
        }
      ],
      estimatedMinutes: 124,
      module: `module-21`,
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
      id: `py-debugging`,
      title: `Debugging, Logging & Tracebacks`,
      description: `Use pdb, logging, and traceback analysis to diagnose failures systematically in Python programs.`,
      level: `intermediate`,
      track: `python`,
      sections: [
        {
          id: `pdb`,
          title: `Interactive Debugging with pdb`,
          content: `**Interactive Debugging with pdb** — what you need to know:

- **Core idea:** Use pdb, logging, and traceback analysis to diagnose failures systematically in Python programs.
- **Level (intermediate):** Explain this to a colleague and implement it without copying blindly.
- **Goal:** Connect every definition to a concrete input, output, or evaluation metric.

Insert \`breakpoint()\` (Python 3.7+) or \`import pdb; pdb.set_trace()\` to pause execution. Commands: \`n\` (next line), \`s\` (step into), \`c\` (continue), \`p expr\` (print), \`l\` (list source), \`q\` (quit).

Run scripts as \`python -m pdb script.py\` to start from the top. In pytest, use \`--pdb\` to drop into debugger on failure.

Combine with conditional breakpoints by guarding \`breakpoint()\` with \`if suspicious_condition\`.

**Why this matters:**

- Python fluency underpins every data pipeline, notebook, and production service in modern ML.
- Mastering **Interactive Debugging with pdb** directly affects how confidently you can build, debug, and ship python projects.
- This concept appears repeatedly in later modules — time invested here pays off across the entire track.

**Hands-on practice:**

- Run the code example below in Python or Jupyter.
- Predict the output before executing, then compare line-by-line.
- Modify one parameter at a time to see how results change — this builds intuition faster than re-reading.

**Professional habits:**

- Write small scripts first, then refactor into reusable functions with type hints and docstrings.
- Document your assumptions because they become invariants for tests, APIs, and team handoffs.
- Revisit this section after the exercises to confirm each habit feels automatic.

**Common mistakes:**

- Mutable defaults, silent exceptions, and mixing tabs with spaces cause most beginner bugs.
- When debugging, reduce to the smallest input that reproduces the issue.
- Log intermediate values with their types before guessing at the fix.`,
          example: `def divide(a, b):
    breakpoint()  # inspect a, b before division
    return a / b

# divide(10, 2) → inspect in pdb, then continue`,
          keyPoints: [
            `breakpoint() is the modern pdb entry point`,
            `Step vs next controls function entry`,
            `pytest --pdb stops at assertion failures`,
            `Remove breakpoints before committing`,
            `Interactive Debugging with pdb is a foundational piece of Debugging, Logging & Tracebacks`,
            `Connect this section to the python track and intermediate expectations`
          ],
          pseudoCode: `CONCEPT: Interactive Debugging with pdb

Study checklist:
  1. breakpoint() is the modern pdb entry point
  2. Step vs next controls function entry
  3. pytest --pdb stops at assertion failures
  4. Remove breakpoints before committing
  5. Interactive Debugging with pdb is a foundational piece of Debugging, Logging & Tracebacks
  6. Connect this section to the python track and intermediate expectations

Topic: Debugging, Logging & Tracebacks
Track: python | Level: intermediate`
        },
        {
          id: `logging`,
          title: `Structured Logging`,
          content: `Replace \`print\` debugging with the **logging** module. Levels: DEBUG, INFO, WARNING, ERROR, CRITICAL. Configure once at app entry:

\`logging.basicConfig(level=logging.INFO, format="%(asctime)s %(levelname)s %(message)s")\`

Use module loggers: \`logger = logging.getLogger(__name__)\`. Libraries log to loggers; applications configure handlers (console, file, JSON for observability stacks).

**Applying Debugging, Logging & Tracebacks:** Use pdb, logging, and traceback analysis to diagnose failures systematically in Python programs. Python skills here transfer directly to notebooks, automation scripts, API services, and ML pipelines. When studying "Structured Logging", connect theory to practice by predicting outputs before running examples, then explaining discrepancies. Note failure modes—missing data, wrong hyperparameters, API timeouts, shape mismatches—and how you would detect them in logs or tests. Strong practitioners capture these lessons in runbooks and reusable templates rather than re-learning them on every project.`,
          example: `import logging
logging.basicConfig(level=logging.INFO)
log = logging.getLogger(__name__)

def process(n):
    log.debug("processing %s", n)
    if n < 0:
        log.error("negative input: %s", n)
        raise ValueError(n)
    return n * 2

print(process(5))`,
          output: `5
10`,
          keyPoints: [
            `Log levels filter noise in production`,
            `Use __name__ for hierarchical logger names`,
            `Lazy % formatting avoids string work when disabled`,
            `Never log secrets or PII at INFO level`,
            `Structured Logging is a foundational piece of Debugging, Logging & Tracebacks`,
            `Connect this section to the python track and intermediate expectations`
          ],
          pseudoCode: `CONCEPT: Structured Logging

Study checklist:
  1. Log levels filter noise in production
  2. Use __name__ for hierarchical logger names
  3. Lazy % formatting avoids string work when disabled
  4. Never log secrets or PII at INFO level
  5. Structured Logging is a foundational piece of Debugging, Logging & Tracebacks
  6. Connect this section to the python track and intermediate expectations

Topic: Debugging, Logging & Tracebacks
Track: python | Level: intermediate`
        },
        {
          id: `tracebacks`,
          title: `Reading Tracebacks`,
          content: `Tracebacks read **bottom-up**: the last line is the exception type and message. Each frame shows file, line, and calling context. The **root cause** is often in your code, not the deepest library frame.

\`traceback.format_exc()\` captures stack as string for logs. \`raise ... from e\` chains exceptions preserving context.

For \`KeyError\`, print available keys. For \`TypeError\`, print \`type()\` of operands.

**Why this matters:**

- Python fluency underpins every data pipeline, notebook, and production service in modern ML.
- Mastering **Reading Tracebacks** directly affects how confidently you can build, debug, and ship python projects.
- This concept appears repeatedly in later modules — time invested here pays off across the entire track.

**Hands-on practice:**

- Run the code example below in Python or Jupyter.
- Predict the output before executing, then compare line-by-line.
- Modify one parameter at a time to see how results change — this builds intuition faster than re-reading.

**Professional habits:**

- Write small scripts first, then refactor into reusable functions with type hints and docstrings.
- Document your assumptions because they become invariants for tests, APIs, and team handoffs.
- Revisit this section after the exercises to confirm each habit feels automatic.

**Common mistakes:**

- Mutable defaults, silent exceptions, and mixing tabs with spaces cause most beginner bugs.
- When debugging, reduce to the smallest input that reproduces the issue.
- Log intermediate values with their types before guessing at the fix.`,
          example: `try:
    d = {"a": 1}
    print(d["b"])
except KeyError as e:
    import traceback
    print(type(e).__name__, e)
    print("keys:", list(d.keys()))`,
          output: `KeyError 'b'
keys: ['a']`,
          keyPoints: [
            `Read traceback from bottom exception upward`,
            `Exception chaining preserves original cause`,
            `Inspect locals at failure line in pdb`,
            `Reproduce with minimal input before fixing`,
            `Reading Tracebacks is a foundational piece of Debugging, Logging & Tracebacks`,
            `Connect this section to the python track and intermediate expectations`
          ],
          pseudoCode: `CONCEPT: Reading Tracebacks

Study checklist:
  1. Read traceback from bottom exception upward
  2. Exception chaining preserves original cause
  3. Inspect locals at failure line in pdb
  4. Reproduce with minimal input before fixing
  5. Reading Tracebacks is a foundational piece of Debugging, Logging & Tracebacks
  6. Connect this section to the python track and intermediate expectations

Topic: Debugging, Logging & Tracebacks
Track: python | Level: intermediate`
        },
        {
          id: `debug-tools`,
          title: `Debug Tools & Practices`,
          content: `IDEs (VS Code, PyCharm) offer visual breakpoints and variable watches. **ipdb** improves pdb with IPython syntax. **sentry** captures production exceptions with context.

Maintain a debugging checklist: reproduce reliably, bisect git history (\`git bisect\`), add a failing test, fix, verify test passes. Rubber-duck explaining expected vs actual behavior.

**Applying Debugging, Logging & Tracebacks:** Use pdb, logging, and traceback analysis to diagnose failures systematically in Python programs. Python skills here transfer directly to notebooks, automation scripts, API services, and ML pipelines. When studying "Debug Tools & Practices", connect theory to practice by predicting outputs before running examples, then explaining discrepancies. Note failure modes—missing data, wrong hyperparameters, API timeouts, shape mismatches—and how you would detect them in logs or tests. Strong practitioners capture these lessons in runbooks and reusable templates rather than re-learning them on every project.`,
          keyPoints: [
            `Always reproduce before attempting fixes`,
            `Add regression test for every bug fixed`,
            `git bisect finds introducing commit`,
            `Production errors need structured logs + traces`,
            `Debug Tools & Practices is a foundational piece of Debugging, Logging & Tracebacks`,
            `Connect this section to the python track and intermediate expectations`
          ],
          example: `# Concept check: Debug Tools & Practices
meta = {
    "topic": "py-debugging",
    "section": "debug-tools",
    "track": "python",
    "level": "intermediate",
}
for key, value in meta.items():
    print(f"{key}: {value}")`,
          output: `topic: py-debugging
section: debug-tools
track: python
level: intermediate`,
          pseudoCode: `CONCEPT: Debug Tools & Practices

Study checklist:
  1. Always reproduce before attempting fixes
  2. Add regression test for every bug fixed
  3. git bisect finds introducing commit
  4. Production errors need structured logs + traces
  5. Debug Tools & Practices is a foundational piece of Debugging, Logging & Tracebacks
  6. Connect this section to the python track and intermediate expectations

Topic: Debugging, Logging & Tracebacks
Track: python | Level: intermediate`
        },
        {
          id: `py-debugging-deep-theory`,
          title: `Deep Theory & Concepts`,
          content: `**Debugging, Logging & Tracebacks** sits in the **python** track of the Data Science Master curriculum. Use pdb, logging, and traceback analysis to diagnose failures systematically in Python programs.

**Theoretical foundation:**

- Python's execution model combines bytecode interpretation with C extensions for hot paths.
- Understanding reference semantics, the import system, and standard-library conventions helps you write code that scales from scripts to services.

For **py-debugging**, relate abstract definitions to measurable quantities: inputs, outputs, loss or cost, and constraints. When reading papers or documentation, identify which assumptions in this lesson appear as lemmas or implementation defaults.

**At the intermediate level**, connect prerequisites to new material — sketch mental models on paper before coding. Formal notation and code should mutually reinforce each other; if they diverge, your understanding has a gap to close.

**Study approach:**

- Read this section once for overview, once for detail, then teach it aloud in two minutes without notes.
- That gap reveals what to revisit.`,
          example: `# Concept check for Debugging, Logging & Tracebacks
meta = {"topic_id": "py-debugging", "track": "python", "level": "intermediate"}
print(meta["topic_id"], meta["track"], meta["level"])`,
          output: `py-debugging python intermediate`,
          keyPoints: [
            `Core theory of Debugging, Logging & Tracebacks ties to the python track`,
            `Connect definitions to inputs, outputs, and evaluation criteria`,
            `Identify assumptions that break in production or at scale`,
            `Relate this topic to prerequisites and follow-on modules`,
            `Use paper/documentation cross-checks to validate intuition`,
            `Sketch diagrams before implementing from memory`
          ],
          pseudoCode: `CONCEPT: Deep Theory & Concepts

Study checklist:
  1. Core theory of Debugging, Logging & Tracebacks ties to the python track
  2. Connect definitions to inputs, outputs, and evaluation criteria
  3. Identify assumptions that break in production or at scale
  4. Relate this topic to prerequisites and follow-on modules
  5. Use paper/documentation cross-checks to validate intuition
  6. Sketch diagrams before implementing from memory

Topic: Debugging, Logging & Tracebacks
Track: python | Level: intermediate`
        },
        {
          id: `py-debugging-patterns`,
          title: `Practical Patterns & Idioms`,
          content: `Professionals reuse patterns that encode lessons from **Debugging, Logging & Tracebacks**. Idiomatic Python favors explicit over implicit: context managers for resources, comprehensions for transforms, dataclasses for structured data, and pathlib over string paths. Follow PEP 8 naming and keep functions small with clear type hints at boundaries.

Apply a consistent project layout: separate configuration, core logic, and CLI/API entry points. Name functions after verbs, types after nouns, and tests after behavior ("test_returns_empty_when_input_missing"). For **py-debugging**, extract a minimal working example you can paste into interviews or design docs.

**Recommended workflow:**

- 1. Reproduce the canonical example from earlier sections exactly.
2. Vary one parameter at a time and log what changes.
3. Capture results in a notebook cell or short markdown log.
4. Promote stable patterns into shared utilities only after the second reuse.

**Pattern mindset:**

- Good patterns are boring — they reduce cognitive load so you can focus on the hard problem, not boilerplate.`,
          example: `# Idiomatic pattern snapshot for py-debugging
from dataclasses import dataclass

@dataclass(frozen=True)
class LessonRef:
    topic_id: str
    title: str

ref = LessonRef("py-debugging", "Debugging, Logging & Tracebacks")
print(ref.topic_id, ref.title.split()[0])`,
          output: `py-debugging Debugging,`,
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

Topic: Debugging, Logging & Tracebacks
Track: python | Level: intermediate`
        },
        {
          id: `py-debugging-pitfalls`,
          title: `Common Pitfalls & Debugging`,
          content: `Learners working on **Debugging, Logging & Tracebacks** often hit predictable walls. Common mistakes include mutable default arguments, shadowing built-ins, ignoring exceptions silently, and mixing tabs/spaces. Use pdb or breakpoint(), structured logging, and repr()-rich error messages when debugging.

When stuck on **py-debugging**, reproduce with the smallest input, enable verbose logging, and bisect recent changes. Capture stack traces, shapes, dtypes, and random seeds in bug reports. Ask whether the failure is data, code, or environment — and test each hypothesis independently.

**Debugging checklist:**

- Verify assumptions listed in earlier sections.
- Compare actual vs expected intermediate values.
- Check for off-by-one errors and unit mismatches.
- Confirm library versions match the tutorial environment.
- Build a minimal reproducible example before asking for help.

**Expert habit:**

- The best debuggers narrow the search space in minutes by changing one variable at a time.`,
          example: `# Minimal repro template
def debug_step(label, value):
    print(f"[{label}] {value!r} ({type(value).__name__})")

debug_step("py-debugging", "Debugging, Logging & Tracebacks")
debug_step("section_count", 4)`,
          output: `[py-debugging] 'Debugging, Logging & Tracebacks' (str)
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

Topic: Debugging, Logging & Tracebacks
Track: python | Level: intermediate`
        },
        {
          id: `py-debugging-real-world`,
          title: `Real-World Applications`,
          content: `**Debugging, Logging & Tracebacks** shows up wherever **python** skills meet business constraints. Production Python appears in FastAPI microservices, Airflow DAGs, Jupyter research workflows, and pytest CI gates. Teams standardize on virtual environments, ruff/black formatters, and pinned dependency lockfiles.

Teams shipping features around **py-debugging** align research notebooks with staged rollouts: offline metrics, shadow mode, canary releases, and rollback plans. Stakeholders care about latency, cost, maintainability, and compliance — not only accuracy.

**Career narrative:**

- Interviewers expect you to describe a project where this topic mattered: the problem, your approach, metric movement, tradeoffs, and what you would do differently.

**Portfolio tip:**

- Link this lesson to README entries and capstone modules later in the curriculum.
- One concrete project beats ten theoretical certificates.`,
          example: `# Portfolio bullet generator for Debugging, Logging & Tracebacks
skills = ["python", "intermediate", "py-debugging"]
print("Built project applying:", ", ".join(skills))`,
          output: `Built project applying: python, intermediate, py-debugging`,
          keyPoints: [
            ` Tie lessons to portfolio projects with measurable outcomes`,
            `Explain tradeoffs to technical and non-technical audiences`,
            `Plan deployment, monitoring, and maintenance early`,
            `Document ethical and privacy implications where relevant`,
            `Iterate with user feedback—not only offline metrics`,
            `Connect Debugging, Logging & Tracebacks to adjacent topics in the same track`
          ],
          pseudoCode: `CONCEPT: Real-World Applications

Study checklist:
  1.  Tie lessons to portfolio projects with measurable outcomes
  2. Explain tradeoffs to technical and non-technical audiences
  3. Plan deployment, monitoring, and maintenance early
  4. Document ethical and privacy implications where relevant
  5. Iterate with user feedback—not only offline metrics
  6. Connect Debugging, Logging & Tracebacks to adjacent topics in the same track

Topic: Debugging, Logging & Tracebacks
Track: python | Level: intermediate`
        }
      ],
      exercises: [
        {
          id: `ex-debug-1`,
          question: `Log an INFO message "started" using getLogger(__name__).`,
          solution: `import logging
logging.basicConfig(level=logging.INFO)
logging.getLogger(__name__).info("started")`,
          difficulty: `easy`
        },
        {
          id: `ex-debug-2`,
          question: `Catch ZeroDivisionError and print exception type name.`,
          solution: `try:
    1/0
except ZeroDivisionError as e:
    print(type(e).__name__)`,
          difficulty: `easy`,
          hint: `Use except ZeroDivisionError`
        }
      ],
      estimatedMinutes: 124,
      module: `module-21`,
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
      id: `py-async`,
      title: `Asyncio & Async/Await`,
      description: `Write concurrent I/O-bound programs with asyncio, coroutines, and introductory aiohttp patterns.`,
      level: `intermediate`,
      track: `python`,
      sections: [
        {
          id: `coroutines`,
          title: `Coroutines & Event Loop`,
          content: `**async def** defines a coroutine function; calling it returns a coroutine object—it does not run until awaited. **await** suspends the coroutine until the awaited operation completes, yielding control to the event loop.

\`asyncio.run(main())\` creates a loop, runs \`main\`, and closes cleanly (Python 3.7+). The loop schedules ready coroutines and I/O callbacks cooperatively—no preemptive threads.

**Applying Asyncio & Async/Await:** Write concurrent I/O-bound programs with asyncio, coroutines, and introductory aiohttp patterns. Python skills here transfer directly to notebooks, automation scripts, API services, and ML pipelines. When studying "Coroutines & Event Loop", connect theory to practice by predicting outputs before running examples, then explaining discrepancies. Note failure modes—missing data, wrong hyperparameters, API timeouts, shape mismatches—and how you would detect them in logs or tests. Strong practitioners capture these lessons in runbooks and reusable templates rather than re-learning them on every project.`,
          example: `import asyncio

async def greet(name):
    await asyncio.sleep(0.1)
    return f"Hello, {name}"

async def main():
    msg = await greet("Ada")
    print(msg)

asyncio.run(main())`,
          output: `Hello, Ada`,
          keyPoints: [
            `async def creates coroutines; await drives them`,
            `asyncio.run is the standard entry point`,
            `sleep(0) yields to other tasks`,
            `CPU-bound code blocks the entire loop`,
            `Coroutines & Event Loop is a foundational piece of Asyncio & Async/Await`,
            `Connect this section to the python track and intermediate expectations`
          ],
          pseudoCode: `CONCEPT: Coroutines & Event Loop

Study checklist:
  1. async def creates coroutines; await drives them
  2. asyncio.run is the standard entry point
  3. sleep(0) yields to other tasks
  4. CPU-bound code blocks the entire loop
  5. Coroutines & Event Loop is a foundational piece of Asyncio & Async/Await
  6. Connect this section to the python track and intermediate expectations

Topic: Asyncio & Async/Await
Track: python | Level: intermediate`
        },
        {
          id: `gather-tasks`,
          title: `Tasks, gather & Timeouts`,
          content: `\`asyncio.create_task(coro)\` schedules concurrent work. \`asyncio.gather(a, b)\` awaits multiple coroutines—results match input order. Exceptions propagate unless \`return_exceptions=True\`.

\`asyncio.wait_for(coro, timeout=5)\` raises \`TimeoutError\` on overrun. Use \`asyncio.Semaphore(n)\` to cap concurrent connections.

**Applying Asyncio & Async/Await:** Write concurrent I/O-bound programs with asyncio, coroutines, and introductory aiohttp patterns. Python skills here transfer directly to notebooks, automation scripts, API services, and ML pipelines. When studying "Tasks, gather & Timeouts", connect theory to practice by predicting outputs before running examples, then explaining discrepancies. Note failure modes—missing data, wrong hyperparameters, API timeouts, shape mismatches—and how you would detect them in logs or tests. Strong practitioners capture these lessons in runbooks and reusable templates rather than re-learning them on every project.`,
          example: `import asyncio

async def work(n):
    await asyncio.sleep(0.05 * n)
    return n

async def main():
    results = await asyncio.gather(work(3), work(1), work(2))
    print(sorted(results))

asyncio.run(main())`,
          output: `[1, 2, 3]`,
          keyPoints: [
            `gather runs coroutines concurrently on one thread`,
            `Tasks enable background work while awaiting others`,
            `Always set timeouts on external I/O`,
            `Semaphore prevents resource exhaustion`,
            `Tasks, gather & Timeouts is a foundational piece of Asyncio & Async/Await`,
            `Connect this section to the python track and intermediate expectations`
          ],
          pseudoCode: `CONCEPT: Tasks, gather & Timeouts

Study checklist:
  1. gather runs coroutines concurrently on one thread
  2. Tasks enable background work while awaiting others
  3. Always set timeouts on external I/O
  4. Semaphore prevents resource exhaustion
  5. Tasks, gather & Timeouts is a foundational piece of Asyncio & Async/Await
  6. Connect this section to the python track and intermediate expectations

Topic: Asyncio & Async/Await
Track: python | Level: intermediate`
        },
        {
          id: `aiohttp`,
          title: `aiohttp HTTP Basics`,
          content: `**aiohttp** provides async HTTP client/server. Reuse \`ClientSession\`—creating a session per request is slow. \`async with session.get(url) as resp:\` reads response; \`await resp.text()\` or \`.json()\`.

Respect rate limits and robots.txt when scraping. Handle \`aiohttp.ClientError\` and status codes explicitly.

**Applying Asyncio & Async/Await:** Write concurrent I/O-bound programs with asyncio, coroutines, and introductory aiohttp patterns. Python skills here transfer directly to notebooks, automation scripts, API services, and ML pipelines. When studying "aiohttp HTTP Basics", connect theory to practice by predicting outputs before running examples, then explaining discrepancies. Note failure modes—missing data, wrong hyperparameters, API timeouts, shape mismatches—and how you would detect them in logs or tests. Strong practitioners capture these lessons in runbooks and reusable templates rather than re-learning them on every project.`,
          example: `import asyncio
import aiohttp

async def fetch_title():
    async with aiohttp.ClientSession() as session:
        async with session.get("https://httpbin.org/get") as resp:
            data = await resp.json()
            return data["url"]

# asyncio.run(fetch_title())  # requires network`,
          keyPoints: [
            `One ClientSession per application lifecycle`,
            `async with ensures connection cleanup`,
            `Check resp.status before parsing body`,
            `Combine with Semaphore for polite concurrency`,
            `aiohttp HTTP Basics is a foundational piece of Asyncio & Async/Await`,
            `Connect this section to the python track and intermediate expectations`
          ],
          pseudoCode: `CONCEPT: aiohttp HTTP Basics

Study checklist:
  1. One ClientSession per application lifecycle
  2. async with ensures connection cleanup
  3. Check resp.status before parsing body
  4. Combine with Semaphore for polite concurrency
  5. aiohttp HTTP Basics is a foundational piece of Asyncio & Async/Await
  6. Connect this section to the python track and intermediate expectations

Topic: Asyncio & Async/Await
Track: python | Level: intermediate`
        },
        {
          id: `async-pitfalls`,
          title: `Async Anti-Patterns`,
          content: `Never call **blocking** APIs (\`time.sleep\`, sync \`requests.get\`) inside async functions without \`asyncio.to_thread()\`. Forgetting \`await\` silently creates un-awaited coroutine warnings.

Mixing threads and asyncio requires \`loop.run_in_executor\`. For CPU work use **multiprocessing**, not more coroutines.

**Applying Asyncio & Async/Await:** Write concurrent I/O-bound programs with asyncio, coroutines, and introductory aiohttp patterns. Python skills here transfer directly to notebooks, automation scripts, API services, and ML pipelines. When studying "Async Anti-Patterns", connect theory to practice by predicting outputs before running examples, then explaining discrepancies. Note failure modes—missing data, wrong hyperparameters, API timeouts, shape mismatches—and how you would detect them in logs or tests. Strong practitioners capture these lessons in runbooks and reusable templates rather than re-learning them on every project.`,
          example: `import asyncio

async def bad():
    # time.sleep(1)  # would block loop — use await asyncio.sleep(1)
    await asyncio.sleep(0.01)
    return "ok"

print(asyncio.run(bad()))`,
          output: `ok`,
          keyPoints: [
            `Blocking calls freeze all coroutines on the loop`,
            `Un-awaited coroutines do not run`,
            `asyncio is for I/O concurrency not CPU parallelism`,
            `Use to_thread or ProcessPool for blocking/CPU work`,
            `Async Anti-Patterns is a foundational piece of Asyncio & Async/Await`,
            `Connect this section to the python track and intermediate expectations`
          ],
          pseudoCode: `CONCEPT: Async Anti-Patterns

Study checklist:
  1. Blocking calls freeze all coroutines on the loop
  2. Un-awaited coroutines do not run
  3. asyncio is for I/O concurrency not CPU parallelism
  4. Use to_thread or ProcessPool for blocking/CPU work
  5. Async Anti-Patterns is a foundational piece of Asyncio & Async/Await
  6. Connect this section to the python track and intermediate expectations

Topic: Asyncio & Async/Await
Track: python | Level: intermediate`
        },
        {
          id: `py-async-deep-theory`,
          title: `Deep Theory & Concepts`,
          content: `**Asyncio & Async/Await** sits in the **python** track of the Data Science Master curriculum. Write concurrent I/O-bound programs with asyncio, coroutines, and introductory aiohttp patterns.

**Theoretical foundation:**

- Python's execution model combines bytecode interpretation with C extensions for hot paths.
- Understanding reference semantics, the import system, and standard-library conventions helps you write code that scales from scripts to services.

asyncio event loop schedules coroutines cooperatively; await yields control at I/O boundaries. CPU-bound work belongs in ProcessPoolExecutor, not the event loop.

**At the intermediate level**, connect prerequisites to new material — sketch mental models on paper before coding. Formal notation and code should mutually reinforce each other; if they diverge, your understanding has a gap to close.

**Study approach:**

- Read this section once for overview, once for detail, then teach it aloud in two minutes without notes.
- That gap reveals what to revisit.`,
          example: `# Concept check for Asyncio & Async/Await
meta = {"topic_id": "py-async", "track": "python", "level": "intermediate"}
print(meta["topic_id"], meta["track"], meta["level"])`,
          output: `py-async python intermediate`,
          keyPoints: [
            `Core theory of Asyncio & Async/Await ties to the python track`,
            `Connect definitions to inputs, outputs, and evaluation criteria`,
            `Identify assumptions that break in production or at scale`,
            `Relate this topic to prerequisites and follow-on modules`,
            `Use paper/documentation cross-checks to validate intuition`,
            `Sketch diagrams before implementing from memory`
          ],
          pseudoCode: `CONCEPT: Deep Theory & Concepts

Study checklist:
  1. Core theory of Asyncio & Async/Await ties to the python track
  2. Connect definitions to inputs, outputs, and evaluation criteria
  3. Identify assumptions that break in production or at scale
  4. Relate this topic to prerequisites and follow-on modules
  5. Use paper/documentation cross-checks to validate intuition
  6. Sketch diagrams before implementing from memory

Topic: Asyncio & Async/Await
Track: python | Level: intermediate`
        },
        {
          id: `py-async-patterns`,
          title: `Practical Patterns & Idioms`,
          content: `Professionals reuse patterns that encode lessons from **Asyncio & Async/Await**. Idiomatic Python favors explicit over implicit: context managers for resources, comprehensions for transforms, dataclasses for structured data, and pathlib over string paths. Follow PEP 8 naming and keep functions small with clear type hints at boundaries.

Use asyncio.gather for concurrent I/O; aiohttp ClientSession as context manager; asyncio.Semaphore to limit concurrency.

**Recommended workflow:**

- 1. Reproduce the canonical example from earlier sections exactly.
2. Vary one parameter at a time and log what changes.
3. Capture results in a notebook cell or short markdown log.
4. Promote stable patterns into shared utilities only after the second reuse.

**Pattern mindset:**

- Good patterns are boring — they reduce cognitive load so you can focus on the hard problem, not boilerplate.`,
          example: `# Idiomatic pattern snapshot for py-async
from dataclasses import dataclass

@dataclass(frozen=True)
class LessonRef:
    topic_id: str
    title: str

ref = LessonRef("py-async", "Asyncio & Async/Await")
print(ref.topic_id, ref.title.split()[0])`,
          output: `py-async Asyncio`,
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

Topic: Asyncio & Async/Await
Track: python | Level: intermediate`
        },
        {
          id: `py-async-pitfalls`,
          title: `Common Pitfalls & Debugging`,
          content: `Learners working on **Asyncio & Async/Await** often hit predictable walls. Common mistakes include mutable default arguments, shadowing built-ins, ignoring exceptions silently, and mixing tabs/spaces. Use pdb or breakpoint(), structured logging, and repr()-rich error messages when debugging.

Blocking calls inside async def freeze the loop; forgetting await creates coroutine objects that never run; mixing threads without asyncio.to_thread().

**Debugging checklist:**

- Verify assumptions listed in earlier sections.
- Compare actual vs expected intermediate values.
- Check for off-by-one errors and unit mismatches.
- Confirm library versions match the tutorial environment.
- Build a minimal reproducible example before asking for help.

**Expert habit:**

- The best debuggers narrow the search space in minutes by changing one variable at a time.`,
          example: `# Minimal repro template
def debug_step(label, value):
    print(f"[{label}] {value!r} ({type(value).__name__})")

debug_step("py-async", "Asyncio & Async/Await")
debug_step("section_count", 4)`,
          output: `[py-async] 'Asyncio & Async/Await' (str)
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

Topic: Asyncio & Async/Await
Track: python | Level: intermediate`
        },
        {
          id: `py-async-real-world`,
          title: `Real-World Applications`,
          content: `**Asyncio & Async/Await** shows up wherever **python** skills meet business constraints. Production Python appears in FastAPI microservices, Airflow DAGs, Jupyter research workflows, and pytest CI gates. Teams standardize on virtual environments, ruff/black formatters, and pinned dependency lockfiles.

High-throughput API gateways and websocket servers use async Python; ML inference often stays sync or uses separate worker pools.

**Career narrative:**

- Interviewers expect you to describe a project where this topic mattered: the problem, your approach, metric movement, tradeoffs, and what you would do differently.

**Portfolio tip:**

- Link this lesson to README entries and capstone modules later in the curriculum.
- One concrete project beats ten theoretical certificates.`,
          example: `# Portfolio bullet generator for Asyncio & Async/Await
skills = ["python", "intermediate", "py-async"]
print("Built project applying:", ", ".join(skills))`,
          output: `Built project applying: python, intermediate, py-async`,
          keyPoints: [
            ` Tie lessons to portfolio projects with measurable outcomes`,
            `Explain tradeoffs to technical and non-technical audiences`,
            `Plan deployment, monitoring, and maintenance early`,
            `Document ethical and privacy implications where relevant`,
            `Iterate with user feedback—not only offline metrics`,
            `Connect Asyncio & Async/Await to adjacent topics in the same track`
          ],
          pseudoCode: `CONCEPT: Real-World Applications

Study checklist:
  1.  Tie lessons to portfolio projects with measurable outcomes
  2. Explain tradeoffs to technical and non-technical audiences
  3. Plan deployment, monitoring, and maintenance early
  4. Document ethical and privacy implications where relevant
  5. Iterate with user feedback—not only offline metrics
  6. Connect Asyncio & Async/Await to adjacent topics in the same track

Topic: Asyncio & Async/Await
Track: python | Level: intermediate`
        }
      ],
      exercises: [
        {
          id: `ex-async-1`,
          question: `Await asyncio.sleep(0) and print "done".`,
          solution: `import asyncio
async def main():
    await asyncio.sleep(0)
    print("done")
asyncio.run(main())`,
          difficulty: `easy`
        },
        {
          id: `ex-async-2`,
          question: `Use gather to run two coroutines returning 1 and 2; print sum.`,
          solution: `import asyncio
async def a(): return 1
async def b(): return 2
async def main():
    x, y = await asyncio.gather(a(), b())
    print(x + y)
asyncio.run(main())`,
          difficulty: `medium`
        }
      ],
      estimatedMinutes: 124,
      module: `module-21`,
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
      id: `py-regex`,
      title: `Regular Expressions with re`,
      description: `Match, search, and transform text using Python's re module and common regex patterns.`,
      level: `intermediate`,
      track: `python`,
      sections: [
        {
          id: `re-basics`,
          title: `re Module Basics`,
          content: `Import \`re\`. **\`re.search(pattern, string)\`** finds first match; **\`re.match\`** only at start; **\`re.findall\`** returns all non-overlapping matches; **\`re.sub\`** replaces.

Raw strings \`r"\\d+"\` avoid escaping backslashes. Match objects expose \`.group()\`, \`.start()\`, \`.end()\`. Compile repeated patterns: \`pat = re.compile(r"...")\`.

**Applying Regular Expressions with re:** Match, search, and transform text using Python's re module and common regex patterns. Python skills here transfer directly to notebooks, automation scripts, API services, and ML pipelines. When studying "re Module Basics", connect theory to practice by predicting outputs before running examples, then explaining discrepancies. Note failure modes—missing data, wrong hyperparameters, API timeouts, shape mismatches—and how you would detect them in logs or tests. Strong practitioners capture these lessons in runbooks and reusable templates rather than re-learning them on every project.`,
          example: `import re
text = "Order ID: 12345, total $67.89"
id_match = re.search(r"ID: (\\d+)", text)
print(id_match.group(1) if id_match else None)`,
          output: `12345`,
          keyPoints: [
            `Prefer raw strings for regex patterns`,
            `search scans entire string; match anchors at start`,
            `compile() amortizes parsing cost in loops`,
            `group(1) returns first capturing parenthesis`,
            `re Module Basics is a foundational piece of Regular Expressions with re`,
            `Connect this section to the python track and intermediate expectations`
          ],
          pseudoCode: `CONCEPT: re Module Basics

Study checklist:
  1. Prefer raw strings for regex patterns
  2. search scans entire string; match anchors at start
  3. compile() amortizes parsing cost in loops
  4. group(1) returns first capturing parenthesis
  5. re Module Basics is a foundational piece of Regular Expressions with re
  6. Connect this section to the python track and intermediate expectations

Topic: Regular Expressions with re
Track: python | Level: intermediate`
        },
        {
          id: `patterns`,
          title: `Common Pattern Building Blocks`,
          content: `\`.**\` any char (use \`re.DOTALL\` for newlines); \`.+\` one or more; \`.?\` optional; \`\\d\` digit; \`\\w\` word char; \`\\s\` whitespace; \`[A-Za-z]+\` letter runs; \`{n,m}\` repetition bounds.

**Anchors:** \`^\` start, \`$\` end, \`\\b\` word boundary. **Groups:** \`( ... )\` capture, \`(?: ... )\` non-capture, \`(?<name> ... )\` named.

**Applying Regular Expressions with re:** Match, search, and transform text using Python's re module and common regex patterns. Python skills here transfer directly to notebooks, automation scripts, API services, and ML pipelines. When studying "Common Pattern Building Blocks", connect theory to practice by predicting outputs before running examples, then explaining discrepancies. Note failure modes—missing data, wrong hyperparameters, API timeouts, shape mismatches—and how you would detect them in logs or tests. Strong practitioners capture these lessons in runbooks and reusable templates rather than re-learning them on every project.`,
          example: `import re
emails = ["a@b.co", "bad@", "c@d.org"]
pat = re.compile(r"^[\\w.+-]+@[\\w.-]+\\.[a-zA-Z]{2,}$")
valid = [e for e in emails if pat.match(e)]
print(valid)`,
          output: `['a@b.co', 'c@d.org']`,
          keyPoints: [
            `Validate patterns against edge cases`,
            `Non-capturing groups improve performance`,
            `Word boundaries prevent partial matches`,
            `Email regex is illustrative—not RFC-complete`,
            `Common Pattern Building Blocks is a foundational piece of Regular Expressions with re`,
            `Connect this section to the python track and intermediate expectations`
          ],
          pseudoCode: `CONCEPT: Common Pattern Building Blocks

Study checklist:
  1. Validate patterns against edge cases
  2. Non-capturing groups improve performance
  3. Word boundaries prevent partial matches
  4. Email regex is illustrative—not RFC-complete
  5. Common Pattern Building Blocks is a foundational piece of Regular Expressions with re
  6. Connect this section to the python track and intermediate expectations

Topic: Regular Expressions with re
Track: python | Level: intermediate`
        },
        {
          id: `flags-groups`,
          title: `Flags & Extraction`,
          content: `Flags: \`re.IGNORECASE\`, \`re.MULTILINE\` (^/$ per line), \`re.VERBOSE\` (readable patterns). Pass to compile or as \`re.search(pat, s, flags)\`.

\`re.split\` splits on pattern. Named groups via \`(?P<name>...)\`. **\`re.finditer\`** yields match objects memory-efficiently over large texts.

**Applying Regular Expressions with re:** Match, search, and transform text using Python's re module and common regex patterns. Python skills here transfer directly to notebooks, automation scripts, API services, and ML pipelines. When studying "Flags & Extraction", connect theory to practice by predicting outputs before running examples, then explaining discrepancies. Note failure modes—missing data, wrong hyperparameters, API timeouts, shape mismatches—and how you would detect them in logs or tests. Strong practitioners capture these lessons in runbooks and reusable templates rather than re-learning them on every project.`,
          example: `import re
log = "2024-01-15 ERROR disk full\\n2024-01-16 INFO ok"
for m in re.finditer(r"(?P<date>\\d{4}-\\d{2}-\\d{2}) (?P<level>\\w+)", log):
    print(m.group("date"), m.group("level"))`,
          output: `2024-01-15 ERROR
2024-01-16 INFO`,
          keyPoints: [
            `MULTILINE changes anchor behavior`,
            `Named groups clarify extraction code`,
            `finditer scales better than findall on huge files`,
            `VERBOSE allows comments in complex patterns`,
            `Flags & Extraction is a foundational piece of Regular Expressions with re`,
            `Connect this section to the python track and intermediate expectations`
          ],
          pseudoCode: `CONCEPT: Flags & Extraction

Study checklist:
  1. MULTILINE changes anchor behavior
  2. Named groups clarify extraction code
  3. finditer scales better than findall on huge files
  4. VERBOSE allows comments in complex patterns
  5. Flags & Extraction is a foundational piece of Regular Expressions with re
  6. Connect this section to the python track and intermediate expectations

Topic: Regular Expressions with re
Track: python | Level: intermediate`
        },
        {
          id: `regex-caveats`,
          title: `When Not to Use Regex`,
          content: `Regex poorly parses nested HTML, JSON, or arbitrary code. Use **\`html.parser\`**, **\`json\`**, **\`ast\`**, or dedicated parsers.

Catastrophic backtracking happens with nested quantifiers like \`(a+)+$\` on long strings—test performance. Prefer explicit string methods when sufficient.

**Applying Regular Expressions with re:** Match, search, and transform text using Python's re module and common regex patterns. Python skills here transfer directly to notebooks, automation scripts, API services, and ML pipelines. When studying "When Not to Use Regex", connect theory to practice by predicting outputs before running examples, then explaining discrepancies. Note failure modes—missing data, wrong hyperparameters, API timeouts, shape mismatches—and how you would detect them in logs or tests. Strong practitioners capture these lessons in runbooks and reusable templates rather than re-learning them on every project.`,
          keyPoints: [
            `Do not parse HTML/XML with regex alone`,
            `Watch catastrophic backtracking on evil input`,
            `str.split/strip often beats regex for simple tasks`,
            `Unit test regex with representative samples`,
            `When Not to Use Regex is a foundational piece of Regular Expressions with re`,
            `Connect this section to the python track and intermediate expectations`
          ],
          example: `# Concept check: When Not to Use Regex
meta = {
    "topic": "py-regex",
    "section": "regex-caveats",
    "track": "python",
    "level": "intermediate",
}
for key, value in meta.items():
    print(f"{key}: {value}")`,
          output: `topic: py-regex
section: regex-caveats
track: python
level: intermediate`,
          pseudoCode: `CONCEPT: When Not to Use Regex

Study checklist:
  1. Do not parse HTML/XML with regex alone
  2. Watch catastrophic backtracking on evil input
  3. str.split/strip often beats regex for simple tasks
  4. Unit test regex with representative samples
  5. When Not to Use Regex is a foundational piece of Regular Expressions with re
  6. Connect this section to the python track and intermediate expectations

Topic: Regular Expressions with re
Track: python | Level: intermediate`
        },
        {
          id: `py-regex-deep-theory`,
          title: `Deep Theory & Concepts`,
          content: `**Regular Expressions with re** sits in the **python** track of the Data Science Master curriculum. Match, search, and transform text using Python's re module and common regex patterns.

**Theoretical foundation:**

- Python's execution model combines bytecode interpretation with C extensions for hot paths.
- Understanding reference semantics, the import system, and standard-library conventions helps you write code that scales from scripts to services.

For **py-regex**, relate abstract definitions to measurable quantities: inputs, outputs, loss or cost, and constraints. When reading papers or documentation, identify which assumptions in this lesson appear as lemmas or implementation defaults.

**At the intermediate level**, connect prerequisites to new material — sketch mental models on paper before coding. Formal notation and code should mutually reinforce each other; if they diverge, your understanding has a gap to close.

**Study approach:**

- Read this section once for overview, once for detail, then teach it aloud in two minutes without notes.
- That gap reveals what to revisit.`,
          example: `# Concept check for Regular Expressions with re
meta = {"topic_id": "py-regex", "track": "python", "level": "intermediate"}
print(meta["topic_id"], meta["track"], meta["level"])`,
          output: `py-regex python intermediate`,
          keyPoints: [
            `Core theory of Regular Expressions with re ties to the python track`,
            `Connect definitions to inputs, outputs, and evaluation criteria`,
            `Identify assumptions that break in production or at scale`,
            `Relate this topic to prerequisites and follow-on modules`,
            `Use paper/documentation cross-checks to validate intuition`,
            `Sketch diagrams before implementing from memory`
          ],
          pseudoCode: `CONCEPT: Deep Theory & Concepts

Study checklist:
  1. Core theory of Regular Expressions with re ties to the python track
  2. Connect definitions to inputs, outputs, and evaluation criteria
  3. Identify assumptions that break in production or at scale
  4. Relate this topic to prerequisites and follow-on modules
  5. Use paper/documentation cross-checks to validate intuition
  6. Sketch diagrams before implementing from memory

Topic: Regular Expressions with re
Track: python | Level: intermediate`
        },
        {
          id: `py-regex-patterns`,
          title: `Practical Patterns & Idioms`,
          content: `Professionals reuse patterns that encode lessons from **Regular Expressions with re**. Idiomatic Python favors explicit over implicit: context managers for resources, comprehensions for transforms, dataclasses for structured data, and pathlib over string paths. Follow PEP 8 naming and keep functions small with clear type hints at boundaries.

Apply a consistent project layout: separate configuration, core logic, and CLI/API entry points. Name functions after verbs, types after nouns, and tests after behavior ("test_returns_empty_when_input_missing"). For **py-regex**, extract a minimal working example you can paste into interviews or design docs.

**Recommended workflow:**

- 1. Reproduce the canonical example from earlier sections exactly.
2. Vary one parameter at a time and log what changes.
3. Capture results in a notebook cell or short markdown log.
4. Promote stable patterns into shared utilities only after the second reuse.

**Pattern mindset:**

- Good patterns are boring — they reduce cognitive load so you can focus on the hard problem, not boilerplate.`,
          example: `# Idiomatic pattern snapshot for py-regex
from dataclasses import dataclass

@dataclass(frozen=True)
class LessonRef:
    topic_id: str
    title: str

ref = LessonRef("py-regex", "Regular Expressions with re")
print(ref.topic_id, ref.title.split()[0])`,
          output: `py-regex Regular`,
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

Topic: Regular Expressions with re
Track: python | Level: intermediate`
        },
        {
          id: `py-regex-pitfalls`,
          title: `Common Pitfalls & Debugging`,
          content: `Learners working on **Regular Expressions with re** often hit predictable walls. Common mistakes include mutable default arguments, shadowing built-ins, ignoring exceptions silently, and mixing tabs/spaces. Use pdb or breakpoint(), structured logging, and repr()-rich error messages when debugging.

When stuck on **py-regex**, reproduce with the smallest input, enable verbose logging, and bisect recent changes. Capture stack traces, shapes, dtypes, and random seeds in bug reports. Ask whether the failure is data, code, or environment — and test each hypothesis independently.

**Debugging checklist:**

- Verify assumptions listed in earlier sections.
- Compare actual vs expected intermediate values.
- Check for off-by-one errors and unit mismatches.
- Confirm library versions match the tutorial environment.
- Build a minimal reproducible example before asking for help.

**Expert habit:**

- The best debuggers narrow the search space in minutes by changing one variable at a time.`,
          example: `# Minimal repro template
def debug_step(label, value):
    print(f"[{label}] {value!r} ({type(value).__name__})")

debug_step("py-regex", "Regular Expressions with re")
debug_step("section_count", 4)`,
          output: `[py-regex] 'Regular Expressions with re' (str)
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

Topic: Regular Expressions with re
Track: python | Level: intermediate`
        },
        {
          id: `py-regex-real-world`,
          title: `Real-World Applications`,
          content: `**Regular Expressions with re** shows up wherever **python** skills meet business constraints. Production Python appears in FastAPI microservices, Airflow DAGs, Jupyter research workflows, and pytest CI gates. Teams standardize on virtual environments, ruff/black formatters, and pinned dependency lockfiles.

Teams shipping features around **py-regex** align research notebooks with staged rollouts: offline metrics, shadow mode, canary releases, and rollback plans. Stakeholders care about latency, cost, maintainability, and compliance — not only accuracy.

**Career narrative:**

- Interviewers expect you to describe a project where this topic mattered: the problem, your approach, metric movement, tradeoffs, and what you would do differently.

**Portfolio tip:**

- Link this lesson to README entries and capstone modules later in the curriculum.
- One concrete project beats ten theoretical certificates.`,
          example: `# Portfolio bullet generator for Regular Expressions with re
skills = ["python", "intermediate", "py-regex"]
print("Built project applying:", ", ".join(skills))`,
          output: `Built project applying: python, intermediate, py-regex`,
          keyPoints: [
            ` Tie lessons to portfolio projects with measurable outcomes`,
            `Explain tradeoffs to technical and non-technical audiences`,
            `Plan deployment, monitoring, and maintenance early`,
            `Document ethical and privacy implications where relevant`,
            `Iterate with user feedback—not only offline metrics`,
            `Connect Regular Expressions with re to adjacent topics in the same track`
          ],
          pseudoCode: `CONCEPT: Real-World Applications

Study checklist:
  1.  Tie lessons to portfolio projects with measurable outcomes
  2. Explain tradeoffs to technical and non-technical audiences
  3. Plan deployment, monitoring, and maintenance early
  4. Document ethical and privacy implications where relevant
  5. Iterate with user feedback—not only offline metrics
  6. Connect Regular Expressions with re to adjacent topics in the same track

Topic: Regular Expressions with re
Track: python | Level: intermediate`
        }
      ],
      exercises: [
        {
          id: `ex-regex-1`,
          question: `Use re.findall to extract digits from "a1b22c333".`,
          solution: `import re
print(re.findall(r"\\d+", "a1b22c333"))`,
          difficulty: `easy`
        },
        {
          id: `ex-regex-2`,
          question: `Replace spaces with underscores in "hello world" using re.sub.`,
          solution: `import re
print(re.sub(r" ", "_", "hello world"))`,
          difficulty: `easy`
        }
      ],
      estimatedMinutes: 124,
      module: `module-21`,
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
      id: `py-concurrency`,
      title: `Threading, Multiprocessing & the GIL`,
      description: `Choose threading, multiprocessing, or asyncio for parallelism; understand the Global Interpreter Lock.`,
      level: `advanced`,
      track: `python`,
      sections: [
        {
          id: `gil`,
          title: `The Global Interpreter Lock`,
          content: `CPython's **GIL** allows only one thread to execute Python bytecode at a time per process. Threads help **I/O-bound** work (waiting on network/disk) because threads release the GIL during I/O. **CPU-bound** Python loops do not parallelize across threads.

Multiprocessing spawns separate interpreters—each with its own GIL—enabling true CPU parallelism at the cost of memory and IPC overhead.

**Applying Threading, Multiprocessing & the GIL:** Choose threading, multiprocessing, or asyncio for parallelism; understand the Global Interpreter Lock. Python skills here transfer directly to notebooks, automation scripts, API services, and ML pipelines. When studying "The Global Interpreter Lock", connect theory to practice by predicting outputs before running examples, then explaining discrepancies. Note failure modes—missing data, wrong hyperparameters, API timeouts, shape mismatches—and how you would detect them in logs or tests. Strong practitioners capture these lessons in runbooks and reusable templates rather than re-learning them on every project.`,
          keyPoints: [
            `GIL limits parallel CPU-bound threads in CPython`,
            `I/O-bound tasks still benefit from threads`,
            `multiprocessing bypasses GIL with separate processes`,
            `NumPy/C extensions may release GIL in C code`,
            `The Global Interpreter Lock is a foundational piece of Threading, Multiprocessing & the GIL`,
            `Connect this section to the python track and advanced expectations`
          ],
          example: `# Concept check: The Global Interpreter Lock
meta = {
    "topic": "py-concurrency",
    "section": "gil",
    "track": "python",
    "level": "advanced",
}
for key, value in meta.items():
    print(f"{key}: {value}")`,
          output: `topic: py-concurrency
section: gil
track: python
level: advanced`,
          pseudoCode: `CONCEPT: The Global Interpreter Lock

Study checklist:
  1. GIL limits parallel CPU-bound threads in CPython
  2. I/O-bound tasks still benefit from threads
  3. multiprocessing bypasses GIL with separate processes
  4. NumPy/C extensions may release GIL in C code
  5. The Global Interpreter Lock is a foundational piece of Threading, Multiprocessing & the GIL
  6. Connect this section to the python track and advanced expectations

Topic: Threading, Multiprocessing & the GIL
Track: python | Level: advanced`
        },
        {
          id: `threading`,
          title: `threading Module`,
          content: `\`threading.Thread(target=func, args=(...))\` starts OS threads. **\`threading.Lock\`** protects shared mutable state. Prefer **\`concurrent.futures.ThreadPoolExecutor\`** for pool-based submission: \`executor.submit(fn, arg)\` and \`future.result()\`.

Avoid data races—use queues (\`queue.Queue\`) for producer-consumer patterns instead of manual locking when possible.

**Applying Threading, Multiprocessing & the GIL:** Choose threading, multiprocessing, or asyncio for parallelism; understand the Global Interpreter Lock. Python skills here transfer directly to notebooks, automation scripts, API services, and ML pipelines. When studying "threading Module", connect theory to practice by predicting outputs before running examples, then explaining discrepancies. Note failure modes—missing data, wrong hyperparameters, API timeouts, shape mismatches—and how you would detect them in logs or tests. Strong practitioners capture these lessons in runbooks and reusable templates rather than re-learning them on every project.`,
          example: `from concurrent.futures import ThreadPoolExecutor

def fetch(n):
    return n * n

with ThreadPoolExecutor(max_workers=4) as ex:
    results = list(ex.map(fetch, range(5)))
print(results)`,
          output: `[0, 1, 4, 9, 16]`,
          keyPoints: [
            `ThreadPoolExecutor simplifies thread pools`,
            `Protect shared mutable state with locks`,
            `queue.Queue is thread-safe for handoff`,
            `Daemon threads exit when main exits`,
            `threading Module is a foundational piece of Threading, Multiprocessing & the GIL`,
            `Connect this section to the python track and advanced expectations`
          ],
          pseudoCode: `CONCEPT: threading Module

Study checklist:
  1. ThreadPoolExecutor simplifies thread pools
  2. Protect shared mutable state with locks
  3. queue.Queue is thread-safe for handoff
  4. Daemon threads exit when main exits
  5. threading Module is a foundational piece of Threading, Multiprocessing & the GIL
  6. Connect this section to the python track and advanced expectations

Topic: Threading, Multiprocessing & the GIL
Track: python | Level: advanced`
        },
        {
          id: `multiprocessing`,
          title: `multiprocessing Module`,
          content: `\`multiprocessing.Process\` and **\`Pool\`** distribute work across processes. Arguments must be picklable. **\`ProcessPoolExecutor\`** mirrors thread API.

On Windows, guard entry with \`if __name__ == "__main__":\` to prevent spawn recursion. Shared state via \`multiprocessing.Value\`, \`Array\`, or **\`Manager\`**—prefer immutable message passing.

**Applying Threading, Multiprocessing & the GIL:** Choose threading, multiprocessing, or asyncio for parallelism; understand the Global Interpreter Lock. Python skills here transfer directly to notebooks, automation scripts, API services, and ML pipelines. When studying "multiprocessing Module", connect theory to practice by predicting outputs before running examples, then explaining discrepancies. Note failure modes—missing data, wrong hyperparameters, API timeouts, shape mismatches—and how you would detect them in logs or tests. Strong practitioners capture these lessons in runbooks and reusable templates rather than re-learning them on every project.`,
          example: `from multiprocessing import Pool

def square(x):
    return x * x

if __name__ == "__main__":
    with Pool(2) as p:
        print(p.map(square, [1, 2, 3]))`,
          output: `[1, 4, 9]`,
          keyPoints: [
            `Processes have higher startup cost than threads`,
            `Pickle requirement limits shared objects`,
            `Pool.map is simple for embarrassingly parallel maps`,
            `Prefer executors over raw Process for clarity`,
            `multiprocessing Module is a foundational piece of Threading, Multiprocessing & the GIL`,
            `Connect this section to the python track and advanced expectations`
          ],
          pseudoCode: `CONCEPT: multiprocessing Module

Study checklist:
  1. Processes have higher startup cost than threads
  2. Pickle requirement limits shared objects
  3. Pool.map is simple for embarrassingly parallel maps
  4. Prefer executors over raw Process for clarity
  5. multiprocessing Module is a foundational piece of Threading, Multiprocessing & the GIL
  6. Connect this section to the python track and advanced expectations

Topic: Threading, Multiprocessing & the GIL
Track: python | Level: advanced`
        },
        {
          id: `choosing`,
          title: `Choosing a Concurrency Model`,
          content: `**asyncio**: many concurrent I/O connections, single-thread clarity. **threading**: blocking I/O libraries without async support. **multiprocessing**: CPU-heavy pure Python computation. **C extensions / NumPy**: may parallelize internally.

Profile before optimizing. \`asyncio\` + \`ProcessPoolExecutor\` combines I/O concurrency with CPU offload via \`loop.run_in_executor\`.

**Applying Threading, Multiprocessing & the GIL:** Choose threading, multiprocessing, or asyncio for parallelism; understand the Global Interpreter Lock. Python skills here transfer directly to notebooks, automation scripts, API services, and ML pipelines. When studying "Choosing a Concurrency Model", connect theory to practice by predicting outputs before running examples, then explaining discrepancies. Note failure modes—missing data, wrong hyperparameters, API timeouts, shape mismatches—and how you would detect them in logs or tests. Strong practitioners capture these lessons in runbooks and reusable templates rather than re-learning them on every project.`,
          keyPoints: [
            `Match model to bottleneck: I/O vs CPU`,
            `Do not mix models without clear boundaries`,
            `Measure speedup—overhead can dominate small tasks`,
            `Document thread/process safety of shared resources`,
            `Choosing a Concurrency Model is a foundational piece of Threading, Multiprocessing & the GIL`,
            `Connect this section to the python track and advanced expectations`
          ],
          example: `# Concept check: Choosing a Concurrency Model
meta = {
    "topic": "py-concurrency",
    "section": "choosing",
    "track": "python",
    "level": "advanced",
}
for key, value in meta.items():
    print(f"{key}: {value}")`,
          output: `topic: py-concurrency
section: choosing
track: python
level: advanced`,
          pseudoCode: `CONCEPT: Choosing a Concurrency Model

Study checklist:
  1. Match model to bottleneck: I/O vs CPU
  2. Do not mix models without clear boundaries
  3. Measure speedup—overhead can dominate small tasks
  4. Document thread/process safety of shared resources
  5. Choosing a Concurrency Model is a foundational piece of Threading, Multiprocessing & the GIL
  6. Connect this section to the python track and advanced expectations

Topic: Threading, Multiprocessing & the GIL
Track: python | Level: advanced`
        },
        {
          id: `py-concurrency-deep-theory`,
          title: `Deep Theory & Concepts`,
          content: `**Threading, Multiprocessing & the GIL** sits in the **python** track of the Data Science Master curriculum. Choose threading, multiprocessing, or asyncio for parallelism; understand the Global Interpreter Lock.

**Theoretical foundation:**

- Python's execution model combines bytecode interpretation with C extensions for hot paths.
- Understanding reference semantics, the import system, and standard-library conventions helps you write code that scales from scripts to services.

For **py-concurrency**, relate abstract definitions to measurable quantities: inputs, outputs, loss or cost, and constraints. When reading papers or documentation, identify which assumptions in this lesson appear as lemmas or implementation defaults.

**At the advanced level**, connect prerequisites to new material — sketch mental models on paper before coding. Formal notation and code should mutually reinforce each other; if they diverge, your understanding has a gap to close.

**Study approach:**

- Read this section once for overview, once for detail, then teach it aloud in two minutes without notes.
- That gap reveals what to revisit.`,
          example: `# Concept check for Threading, Multiprocessing & the GIL
meta = {"topic_id": "py-concurrency", "track": "python", "level": "advanced"}
print(meta["topic_id"], meta["track"], meta["level"])`,
          output: `py-concurrency python advanced`,
          keyPoints: [
            `Core theory of Threading, Multiprocessing & the GIL ties to the python track`,
            `Connect definitions to inputs, outputs, and evaluation criteria`,
            `Identify assumptions that break in production or at scale`,
            `Relate this topic to prerequisites and follow-on modules`,
            `Use paper/documentation cross-checks to validate intuition`,
            `Sketch diagrams before implementing from memory`
          ],
          pseudoCode: `CONCEPT: Deep Theory & Concepts

Study checklist:
  1. Core theory of Threading, Multiprocessing & the GIL ties to the python track
  2. Connect definitions to inputs, outputs, and evaluation criteria
  3. Identify assumptions that break in production or at scale
  4. Relate this topic to prerequisites and follow-on modules
  5. Use paper/documentation cross-checks to validate intuition
  6. Sketch diagrams before implementing from memory

Topic: Threading, Multiprocessing & the GIL
Track: python | Level: advanced`
        },
        {
          id: `py-concurrency-patterns`,
          title: `Practical Patterns & Idioms`,
          content: `Professionals reuse patterns that encode lessons from **Threading, Multiprocessing & the GIL**. Idiomatic Python favors explicit over implicit: context managers for resources, comprehensions for transforms, dataclasses for structured data, and pathlib over string paths. Follow PEP 8 naming and keep functions small with clear type hints at boundaries.

Apply a consistent project layout: separate configuration, core logic, and CLI/API entry points. Name functions after verbs, types after nouns, and tests after behavior ("test_returns_empty_when_input_missing"). For **py-concurrency**, extract a minimal working example you can paste into interviews or design docs.

**Recommended workflow:**

- 1. Reproduce the canonical example from earlier sections exactly.
2. Vary one parameter at a time and log what changes.
3. Capture results in a notebook cell or short markdown log.
4. Promote stable patterns into shared utilities only after the second reuse.

**Pattern mindset:**

- Good patterns are boring — they reduce cognitive load so you can focus on the hard problem, not boilerplate.`,
          example: `# Idiomatic pattern snapshot for py-concurrency
from dataclasses import dataclass

@dataclass(frozen=True)
class LessonRef:
    topic_id: str
    title: str

ref = LessonRef("py-concurrency", "Threading, Multiprocessing & the GIL")
print(ref.topic_id, ref.title.split()[0])`,
          output: `py-concurrency Threading,`,
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

Topic: Threading, Multiprocessing & the GIL
Track: python | Level: advanced`
        },
        {
          id: `py-concurrency-pitfalls`,
          title: `Common Pitfalls & Debugging`,
          content: `Learners working on **Threading, Multiprocessing & the GIL** often hit predictable walls. Common mistakes include mutable default arguments, shadowing built-ins, ignoring exceptions silently, and mixing tabs/spaces. Use pdb or breakpoint(), structured logging, and repr()-rich error messages when debugging.

When stuck on **py-concurrency**, reproduce with the smallest input, enable verbose logging, and bisect recent changes. Capture stack traces, shapes, dtypes, and random seeds in bug reports. Ask whether the failure is data, code, or environment — and test each hypothesis independently.

**Debugging checklist:**

- Verify assumptions listed in earlier sections.
- Compare actual vs expected intermediate values.
- Check for off-by-one errors and unit mismatches.
- Confirm library versions match the tutorial environment.
- Build a minimal reproducible example before asking for help.

**Expert habit:**

- The best debuggers narrow the search space in minutes by changing one variable at a time.`,
          example: `# Minimal repro template
def debug_step(label, value):
    print(f"[{label}] {value!r} ({type(value).__name__})")

debug_step("py-concurrency", "Threading, Multiprocessing & the GIL")
debug_step("section_count", 4)`,
          output: `[py-concurrency] 'Threading, Multiprocessing & the GIL' (str)
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

Topic: Threading, Multiprocessing & the GIL
Track: python | Level: advanced`
        },
        {
          id: `py-concurrency-real-world`,
          title: `Real-World Applications`,
          content: `**Threading, Multiprocessing & the GIL** shows up wherever **python** skills meet business constraints. Production Python appears in FastAPI microservices, Airflow DAGs, Jupyter research workflows, and pytest CI gates. Teams standardize on virtual environments, ruff/black formatters, and pinned dependency lockfiles.

Teams shipping features around **py-concurrency** align research notebooks with staged rollouts: offline metrics, shadow mode, canary releases, and rollback plans. Stakeholders care about latency, cost, maintainability, and compliance — not only accuracy.

**Career narrative:**

- Interviewers expect you to describe a project where this topic mattered: the problem, your approach, metric movement, tradeoffs, and what you would do differently.

**Portfolio tip:**

- Link this lesson to README entries and capstone modules later in the curriculum.
- One concrete project beats ten theoretical certificates.`,
          example: `# Portfolio bullet generator for Threading, Multiprocessing & the GIL
skills = ["python", "advanced", "py-concurrency"]
print("Built project applying:", ", ".join(skills))`,
          output: `Built project applying: python, advanced, py-concurrency`,
          keyPoints: [
            ` Tie lessons to portfolio projects with measurable outcomes`,
            `Explain tradeoffs to technical and non-technical audiences`,
            `Plan deployment, monitoring, and maintenance early`,
            `Document ethical and privacy implications where relevant`,
            `Iterate with user feedback—not only offline metrics`,
            `Connect Threading, Multiprocessing & the GIL to adjacent topics in the same track`
          ],
          pseudoCode: `CONCEPT: Real-World Applications

Study checklist:
  1.  Tie lessons to portfolio projects with measurable outcomes
  2. Explain tradeoffs to technical and non-technical audiences
  3. Plan deployment, monitoring, and maintenance early
  4. Document ethical and privacy implications where relevant
  5. Iterate with user feedback—not only offline metrics
  6. Connect Threading, Multiprocessing & the GIL to adjacent topics in the same track

Topic: Threading, Multiprocessing & the GIL
Track: python | Level: advanced`
        }
      ],
      exercises: [
        {
          id: `ex-conc-1`,
          question: `Print whether threading module defines Lock.`,
          solution: `import threading
print(hasattr(threading, "Lock"))`,
          difficulty: `easy`
        },
        {
          id: `ex-conc-2`,
          question: `Use ThreadPoolExecutor map to square [1,2,3].`,
          solution: `from concurrent.futures import ThreadPoolExecutor
with ThreadPoolExecutor() as ex:
    print(list(ex.map(lambda x: x*x, [1,2,3])))`,
          difficulty: `medium`
        }
      ],
      estimatedMinutes: 124,
      module: `module-21`,
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
