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

pytest collects tests from files matching \`test_*.py\` or \`*_test.py\`. Use \`-k\` to filter by substring and \`-x\` to stop on first failure during debugging.`,
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
            `Naming test_* enables automatic discovery`
          ],
          pseudoCode: `CONCEPT: pytest Fundamentals

Checklist:
  1. Use plain assert — pytest rewrites failures richly
  2. One logical behavior per test function
  3. Tests must be deterministic and independent
  4. Naming test_* enables automatic discovery`
        },
        {
          id: `fixtures`,
          title: `Fixtures & Parametrize`,
          content: `**Fixtures** inject setup/teardown via dependency injection. Decorate with \`@pytest.fixture\`; request by parameter name. Scope controls lifetime: \`function\` (default), \`class\`, \`module\`, \`session\`.

\`@pytest.mark.parametrize("x,y,expected", [(1,2,3), (0,0,0)])\` runs the same test with multiple inputs—ideal for edge cases.

Use \`yield\` in fixtures for teardown after tests complete. \`conftest.py\` shares fixtures across a directory tree.`,
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
            `Choose fixture scope to balance speed vs isolation`
          ],
          pseudoCode: `CONCEPT: Fixtures & Parametrize

Checklist:
  1. Fixtures replace repetitive setup code
  2. parametrize documents input/output cases explicitly
  3. conftest.py centralizes shared fixtures
  4. Choose fixture scope to balance speed vs isolation`
        },
        {
          id: `unittest-mock`,
          title: `unittest & Mocking`,
          content: `The **unittest** module in the standard library uses class-based tests inheriting \`unittest.TestCase\` with methods like \`self.assertEqual\`. pytest can run unittest tests too.

**Mocking** isolates units from I/O: \`unittest.mock.patch\` replaces objects during a test. \`MagicMock\` records calls and return values. Patch where the name is **looked up**, not where it is defined.

Verify interactions with \`mock.assert_called_once_with(...)\`. Avoid over-mocking—it hides integration defects.`,
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
            `Do not mock the function you are testing`
          ],
          pseudoCode: `CONCEPT: unittest & Mocking

Checklist:
  1. Patch at the import site used by code under test
  2. Mocks verify both return values and call patterns
  3. unittest.TestCase still valid; pytest is often preferred
  4. Do not mock the function you are testing`
        },
        {
          id: `coverage-ci`,
          title: `Coverage & CI Integration`,
          content: `**Coverage** measures which lines executed during tests: \`pytest --cov=mypackage --cov-report=term-missing\`. Aim for high coverage on critical paths, not vanity 100% on trivial getters.

CI (GitHub Actions, GitLab) runs \`pytest\` on every push. Fail builds on test failure or coverage regression. Cache dependencies for speed.

Structure tests mirroring package layout: \`src/foo/bar.py\` → \`tests/test_bar.py\`. Keep tests fast—mark slow integration tests with \`@pytest.mark.slow\`.`,
          example: `# .github/workflows/test.yml snippet
# - run: pip install pytest pytest-cov
# - run: pytest --cov=app --cov-fail-under=80`,
          keyPoints: [
            `Coverage highlights untested branches`,
            `CI gates prevent merging broken code`,
            `Separate fast unit from slow integration tests`,
            `Mirror source layout in tests/ directory`
          ],
          pseudoCode: `CONCEPT: Coverage & CI Integration

Checklist:
  1. Coverage highlights untested branches
  2. CI gates prevent merging broken code
  3. Separate fast unit from slow integration tests
  4. Mirror source layout in tests/ directory`
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
      estimatedMinutes: 35,
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
          content: `Insert \`breakpoint()\` (Python 3.7+) or \`import pdb; pdb.set_trace()\` to pause execution. Commands: \`n\` (next line), \`s\` (step into), \`c\` (continue), \`p expr\` (print), \`l\` (list source), \`q\` (quit).

Run scripts as \`python -m pdb script.py\` to start from the top. In pytest, use \`--pdb\` to drop into debugger on failure.

Combine with conditional breakpoints by guarding \`breakpoint()\` with \`if suspicious_condition\`.`,
          example: `def divide(a, b):
    breakpoint()  # inspect a, b before division
    return a / b

# divide(10, 2) → inspect in pdb, then continue`,
          keyPoints: [
            `breakpoint() is the modern pdb entry point`,
            `Step vs next controls function entry`,
            `pytest --pdb stops at assertion failures`,
            `Remove breakpoints before committing`
          ],
          pseudoCode: `CONCEPT: Interactive Debugging with pdb

Checklist:
  1. breakpoint() is the modern pdb entry point
  2. Step vs next controls function entry
  3. pytest --pdb stops at assertion failures
  4. Remove breakpoints before committing`
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
            `Never log secrets or PII at INFO level`
          ],
          pseudoCode: `CONCEPT: Structured Logging

Checklist:
  1. Log levels filter noise in production
  2. Use __name__ for hierarchical logger names
  3. Lazy % formatting avoids string work when disabled
  4. Never log secrets or PII at INFO level`
        },
        {
          id: `tracebacks`,
          title: `Reading Tracebacks`,
          content: `Tracebacks read **bottom-up**: the last line is the exception type and message. Each frame shows file, line, and calling context. The **root cause** is often in your code, not the deepest library frame.

\`traceback.format_exc()\` captures stack as string for logs. \`raise ... from e\` chains exceptions preserving context.

For \`KeyError\`, print available keys. For \`TypeError\`, print \`type()\` of operands.`,
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
            `Reproduce with minimal input before fixing`
          ],
          pseudoCode: `CONCEPT: Reading Tracebacks

Checklist:
  1. Read traceback from bottom exception upward
  2. Exception chaining preserves original cause
  3. Inspect locals at failure line in pdb
  4. Reproduce with minimal input before fixing`
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
            `Production errors need structured logs + traces`
          ],
          pseudoCode: `CONCEPT: Debug Tools & Practices

Checklist:
  1. Always reproduce before attempting fixes
  2. Add regression test for every bug fixed
  3. git bisect finds introducing commit
  4. Production errors need structured logs + traces`
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
      estimatedMinutes: 30,
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
            `CPU-bound code blocks the entire loop`
          ],
          pseudoCode: `CONCEPT: Coroutines & Event Loop

Checklist:
  1. async def creates coroutines; await drives them
  2. asyncio.run is the standard entry point
  3. sleep(0) yields to other tasks
  4. CPU-bound code blocks the entire loop`
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
            `Semaphore prevents resource exhaustion`
          ],
          pseudoCode: `CONCEPT: Tasks, gather & Timeouts

Checklist:
  1. gather runs coroutines concurrently on one thread
  2. Tasks enable background work while awaiting others
  3. Always set timeouts on external I/O
  4. Semaphore prevents resource exhaustion`
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
            `Combine with Semaphore for polite concurrency`
          ],
          pseudoCode: `CONCEPT: aiohttp HTTP Basics

Checklist:
  1. One ClientSession per application lifecycle
  2. async with ensures connection cleanup
  3. Check resp.status before parsing body
  4. Combine with Semaphore for polite concurrency`
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
            `Use to_thread or ProcessPool for blocking/CPU work`
          ],
          pseudoCode: `CONCEPT: Async Anti-Patterns

Checklist:
  1. Blocking calls freeze all coroutines on the loop
  2. Un-awaited coroutines do not run
  3. asyncio is for I/O concurrency not CPU parallelism
  4. Use to_thread or ProcessPool for blocking/CPU work`
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
      estimatedMinutes: 40,
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
            `group(1) returns first capturing parenthesis`
          ],
          pseudoCode: `CONCEPT: re Module Basics

Checklist:
  1. Prefer raw strings for regex patterns
  2. search scans entire string; match anchors at start
  3. compile() amortizes parsing cost in loops
  4. group(1) returns first capturing parenthesis`
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
            `Email regex is illustrative—not RFC-complete`
          ],
          pseudoCode: `CONCEPT: Common Pattern Building Blocks

Checklist:
  1. Validate patterns against edge cases
  2. Non-capturing groups improve performance
  3. Word boundaries prevent partial matches
  4. Email regex is illustrative—not RFC-complete`
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
            `VERBOSE allows comments in complex patterns`
          ],
          pseudoCode: `CONCEPT: Flags & Extraction

Checklist:
  1. MULTILINE changes anchor behavior
  2. Named groups clarify extraction code
  3. finditer scales better than findall on huge files
  4. VERBOSE allows comments in complex patterns`
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
            `Unit test regex with representative samples`
          ],
          pseudoCode: `CONCEPT: When Not to Use Regex

Checklist:
  1. Do not parse HTML/XML with regex alone
  2. Watch catastrophic backtracking on evil input
  3. str.split/strip often beats regex for simple tasks
  4. Unit test regex with representative samples`
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
      estimatedMinutes: 30,
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
            `NumPy/C extensions may release GIL in C code`
          ],
          pseudoCode: `CONCEPT: The Global Interpreter Lock

Checklist:
  1. GIL limits parallel CPU-bound threads in CPython
  2. I/O-bound tasks still benefit from threads
  3. multiprocessing bypasses GIL with separate processes
  4. NumPy/C extensions may release GIL in C code`
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
            `Daemon threads exit when main exits`
          ],
          pseudoCode: `CONCEPT: threading Module

Checklist:
  1. ThreadPoolExecutor simplifies thread pools
  2. Protect shared mutable state with locks
  3. queue.Queue is thread-safe for handoff
  4. Daemon threads exit when main exits`
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
            `Prefer executors over raw Process for clarity`
          ],
          pseudoCode: `CONCEPT: multiprocessing Module

Checklist:
  1. Processes have higher startup cost than threads
  2. Pickle requirement limits shared objects
  3. Pool.map is simple for embarrassingly parallel maps
  4. Prefer executors over raw Process for clarity`
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
            `Document thread/process safety of shared resources`
          ],
          pseudoCode: `CONCEPT: Choosing a Concurrency Model

Checklist:
  1. Match model to bottleneck: I/O vs CPU
  2. Do not mix models without clear boundaries
  3. Measure speedup—overhead can dominate small tasks
  4. Document thread/process safety of shared resources`
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
      estimatedMinutes: 35,
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
