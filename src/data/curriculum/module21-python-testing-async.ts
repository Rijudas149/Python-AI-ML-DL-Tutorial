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
          content: `### Introduction

**pytest** discovers tests named \`test_*\` or methods on \`Test*\` classes. Assertions use plain \`assert\`—no special assertion methods. Run with \`pytest -v\` for verbose output.

### pytest Fundamentals

Test functions should be **isolated**: no shared mutable global state, no dependence on run order. Each test arranges inputs, acts on the system under test, and asserts outcomes (AAA pattern).

pytest collects tests from files matching \`test_*.py\` or \`*_test.py\`. Use \`-k\` to filter by substring and \`-x\` to stop on first failure during debugging.

### Key Ideas

- Use plain assert — pytest rewrites failures richly
- One logical behavior per test function
- Tests must be deterministic and independent
- Naming test_* enables automatic discovery

### Example

Study the **code example** below, predict the output, then run it in Python or Jupyter. Compare your result with the **output** panel.`,
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
          diagram: `pytest Fundamentals
Image → Conv → ReLU → Pool → Flatten → Dense → Class`,
          commonMistakes: [
            `Checking string equality with \`is\` instead of \`==\``,
            `Reading or writing a file without \`with\` — leaks file handles on errors`,
            `Infinite loops when the loop variable never moves toward the exit condition`,
            `Calling \`Parent.method()\` without passing \`self\` correctly in overrides`
          ]
        },
        {
          id: `fixtures`,
          title: `Fixtures & Parametrize`,
          content: `### Introduction

**Fixtures** inject setup/teardown via dependency injection. Decorate with \`@pytest.fixture\`; request by parameter name. Scope controls lifetime: \`function\` (default), \`class\`, \`module\`, \`session\`.

### Fixtures & Parametrize

\`@pytest.mark.parametrize("x,y,expected", [(1,2,3), (0,0,0)])\` runs the same test with multiple inputs—ideal for edge cases.

Use \`yield\` in fixtures for teardown after tests complete. \`conftest.py\` shares fixtures across a directory tree.

### Key Ideas

- Fixtures replace repetitive setup code
- parametrize documents input/output cases explicitly
- conftest.py centralizes shared fixtures
- Choose fixture scope to balance speed vs isolation

### Example

Study the **code example** below, predict the output, then run it in Python or Jupyter. Compare your result with the **output** panel.`,
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
          commonMistakes: [
            `Infinite loops when the loop variable never moves toward the exit condition`,
            `Calling \`Parent.method()\` without passing \`self\` correctly in overrides`,
            `Not stratifying splits for classification tasks`,
            `Copy-pasting the example without predicting the output first — run mentally, then verify`
          ]
        },
        {
          id: `unittest-mock`,
          title: `unittest & Mocking`,
          content: `### Introduction

The **unittest** module in the standard library uses class-based tests inheriting \`unittest.TestCase\` with methods like \`self.assertEqual\`. pytest can run unittest tests too.

### unittest & Mocking

**Mocking** isolates units from I/O: \`unittest.mock.patch\` replaces objects during a test. \`MagicMock\` records calls and return values. Patch where the name is **looked up**, not where it is defined.

Verify interactions with \`mock.assert_called_once_with(...)\`. Avoid over-mocking—it hides integration defects.

### Key Ideas

- Patch at the import site used by code under test
- Mocks verify both return values and call patterns
- unittest.TestCase still valid; pytest is often preferred
- Do not mock the function you are testing

### Example

Study the **code example** below, predict the output, then run it in Python or Jupyter. Compare your result with the **output** panel.`,
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
          diagram: `unittest & Mocking
Dataset → Train Fold → Validation Fold → Test Holdout`,
          commonMistakes: [
            `Calling \`Parent.method()\` without passing \`self\` correctly in overrides`,
            `Do not mock the function you are testing.`,
            `Copy-pasting the example without predicting the output first — run mentally, then verify`,
            `Checking string equality with \`is\` instead of \`==\``
          ]
        },
        {
          id: `coverage-ci`,
          title: `Coverage & CI Integration`,
          content: `### Introduction

**Coverage** measures which lines executed during tests: \`pytest --cov=mypackage --cov-report=term-missing\`. Aim for high coverage on critical paths, not vanity 100% on trivial getters.

### Coverage & CI Integration

CI (GitHub Actions, GitLab) runs \`pytest\` on every push. Fail builds on test failure or coverage regression. Cache dependencies for speed.

Structure tests mirroring package layout: \`src/foo/bar.py\` → \`tests/test_bar.py\`. Keep tests fast—mark slow integration tests with \`@pytest.mark.slow\`.

### Key Ideas

- Coverage highlights untested branches
- CI gates prevent merging broken code
- Separate fast unit from slow integration tests
- Mirror source layout in tests/ directory

### Example

Study the **code example** below, predict the output, then run it in Python or Jupyter. Compare your result with the **output** panel.`,
          example: `# .github/workflows/test.yml snippet
# - run: pip install pytest pytest-cov
# - run: pytest --cov=app --cov-fail-under=80`,
          keyPoints: [
            `Coverage highlights untested branches`,
            `CI gates prevent merging broken code`,
            `Separate fast unit from slow integration tests`,
            `Mirror source layout in tests/ directory`
          ],
          diagram: `Coverage & CI Integration
Query → Embed → Retrieve → Augment Prompt → Generate`,
          commonMistakes: [
            `Reading or writing a file without \`with\` — leaks file handles on errors`,
            `Infinite loops when the loop variable never moves toward the exit condition`,
            `Using polynomial degree too high without regularization`,
            `Not normalizing vectors when using dot product as cosine similarity`
          ]
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
          id: `python-modules-doc`,
          title: `Modules and Packages`,
          source: `Python.org`,
          type: `documentation`,
          url: `https://docs.python.org/3/tutorial/modules.html`,
          description: `Organizing code into importable modules and package hierarchies.`
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
          content: `### Introduction

Insert \`breakpoint()\` (Python 3.7+) or \`import pdb; pdb.set_trace()\` to pause execution. Commands: \`n\` (next line), \`s\` (step into), \`c\` (continue), \`p expr\` (print), \`l\` (list source), \`q\` (quit).

### Interactive Debugging with pdb

Run scripts as \`python -m pdb script.py\` to start from the top. In pytest, use \`--pdb\` to drop into debugger on failure.

Combine with conditional breakpoints by guarding \`breakpoint()\` with \`if suspicious_condition\`.

### Key Ideas

- breakpoint() is the modern pdb entry point
- Step vs next controls function entry
- pytest --pdb stops at assertion failures
- Remove breakpoints before committing

### Example

Study the **code example** below, predict the output, then run it in Python or Jupyter. Compare your result with the **output** panel.`,
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
          commonMistakes: [
            `Reading or writing a file without \`with\` — leaks file handles on errors`,
            `Copy-pasting the example without predicting the output first — run mentally, then verify`,
            `Checking string equality with \`is\` instead of \`==\``,
            `Reading or writing a file without \`with\` — leaks file handles on errors`
          ]
        },
        {
          id: `logging`,
          title: `Structured Logging`,
          content: `### Introduction

Replace \`print\` debugging with the **logging** module. Levels: DEBUG, INFO, WARNING, ERROR, CRITICAL. Configure once at app entry:

### Structured Logging

\`logging.basicConfig(level=logging.INFO, format="%(asctime)s %(levelname)s %(message)s")\`

Use module loggers: \`logger = logging.getLogger(__name__)\`. Libraries log to loggers; applications configure handlers (console, file, JSON for observability stacks).

### Key Ideas

- Log levels filter noise in production
- Use __name__ for hierarchical logger names
- Lazy % formatting avoids string work when disabled
- Never log secrets or PII at INFO level

### Example

Study the **code example** below, predict the output, then run it in Python or Jupyter. Compare your result with the **output** panel.`,
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
          diagram: `Structured Logging
Raw Data → Clean → Features → Train → Evaluate → Deploy → Monitor`,
          commonMistakes: [
            `Never log secrets or PII at INFO level.`,
            `Copy-pasting the example without predicting the output first — run mentally, then verify`,
            `Checking string equality with \`is\` instead of \`==\``,
            `Reading or writing a file without \`with\` — leaks file handles on errors`
          ]
        },
        {
          id: `tracebacks`,
          title: `Reading Tracebacks`,
          content: `### Introduction

Tracebacks read **bottom-up**: the last line is the exception type and message. Each frame shows file, line, and calling context. The **root cause** is often in your code, not the deepest library frame.

### Reading Tracebacks

\`traceback.format_exc()\` captures stack as string for logs. \`raise ... from e\` chains exceptions preserving context.

For \`KeyError\`, print available keys. For \`TypeError\`, print \`type()\` of operands.

### Key Ideas

- Read traceback from bottom exception upward
- Exception chaining preserves original cause
- Inspect locals at failure line in pdb
- Reproduce with minimal input before fixing

### Example

Study the **code example** below, predict the output, then run it in Python or Jupyter. Compare your result with the **output** panel.`,
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
          diagram: `Reading Tracebacks
Raw Data → Clean → Features → Train → Evaluate → Deploy → Monitor`,
          commonMistakes: [
            `Copy-pasting the example without predicting the output first — run mentally, then verify`,
            `Checking string equality with \`is\` instead of \`==\``,
            `Reading or writing a file without \`with\` — leaks file handles on errors`,
            `Infinite loops when the loop variable never moves toward the exit condition`
          ]
        },
        {
          id: `debug-tools`,
          title: `Debug Tools & Practices`,
          content: `### Introduction

IDEs (VS Code, PyCharm) offer visual breakpoints and variable watches. **ipdb** improves pdb with IPython syntax.

### Debug Tools & Practices

**sentry** captures production exceptions with context. Maintain a debugging checklist: reproduce reliably, bisect git history (\`git bisect\`), add a failing test, fix, verify test passes.

Rubber-duck explaining expected vs actual behavior.

### Key Ideas

- Always reproduce before attempting fixes
- Add regression test for every bug fixed
- git bisect finds introducing commit
- Production errors need structured logs + traces`,
          keyPoints: [
            `Always reproduce before attempting fixes`,
            `Add regression test for every bug fixed`,
            `git bisect finds introducing commit`,
            `Production errors need structured logs + traces`
          ],
          diagram: `Debug Tools & Practices
Raw Data → Clean → Features → Train → Evaluate → Deploy → Monitor`,
          commonMistakes: [
            `Checking string equality with \`is\` instead of \`==\``,
            `Reading or writing a file without \`with\` — leaks file handles on errors`,
            `Reading passively without typing and running a small variant of the example yourself`,
            `Checking string equality with \`is\` instead of \`==\``
          ]
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
          id: `real-python-scope`,
          title: `Namespaces and Scope in Python`,
          source: `Real Python`,
          type: `documentation`,
          url: `https://realpython.com/python-namespaces-scope/`,
          description: `LEGB rule, closures, and how Python resolves variable names.`
        },
        {
          id: `cs106a-python`,
          title: `Stanford CS106A — Programming Methodology`,
          source: `Stanford`,
          type: `course`,
          url: `https://cs106a.stanford.edu/`,
          description: `Foundational Stanford course covering Python programming from first principles.`
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
          content: `### Introduction

**async def** defines a coroutine function; calling it returns a coroutine object—it does not run until awaited. **await** suspends the coroutine until the awaited operation completes, yielding control to the event loop. \`asyncio.run(main())\` creates a loop, runs \`main\`, and closes cleanly (Python 3.7+).

### Coroutines & Event Loop

The loop schedules ready coroutines and I/O callbacks cooperatively—no preemptive threads.

### Key Ideas

- async def creates coroutines; await drives them
- asyncio.run is the standard entry point
- sleep(0) yields to other tasks
- CPU-bound code blocks the entire loop

### Example

Study the **code example** below, predict the output, then run it in Python or Jupyter. Compare your result with the **output** panel.`,
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
          commonMistakes: [
            `Copy-pasting the example without predicting the output first — run mentally, then verify`,
            `Checking string equality with \`is\` instead of \`==\``,
            `Reading or writing a file without \`with\` — leaks file handles on errors`,
            `Infinite loops when the loop variable never moves toward the exit condition`
          ]
        },
        {
          id: `gather-tasks`,
          title: `Tasks, gather & Timeouts`,
          content: `### Introduction

\`asyncio.create_task(coro)\` schedules concurrent work. \`asyncio.gather(a, b)\` awaits multiple coroutines—results match input order. Exceptions propagate unless \`return_exceptions=True\`. \`asyncio.wait_for(coro, timeout=5)\` raises \`TimeoutError\` on overrun.

### Tasks, gather & Timeouts

Use \`asyncio.Semaphore(n)\` to cap concurrent connections.

### Key Ideas

- gather runs coroutines concurrently on one thread
- Tasks enable background work while awaiting others
- Always set timeouts on external I/O
- Semaphore prevents resource exhaustion

### Example

Study the **code example** below, predict the output, then run it in Python or Jupyter. Compare your result with the **output** panel.`,
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
          commonMistakes: [
            `Infinite loops when the loop variable never moves toward the exit condition`,
            `Copy-pasting the example without predicting the output first — run mentally, then verify`,
            `Checking string equality with \`is\` instead of \`==\``,
            `Reading or writing a file without \`with\` — leaks file handles on errors`
          ]
        },
        {
          id: `aiohttp`,
          title: `aiohttp HTTP Basics`,
          content: `### Introduction

**aiohttp** provides async HTTP client/server. Reuse \`ClientSession\`—creating a session per request is slow. \`async with session.get(url) as resp:\` reads response; \`await resp.text()\` or \`.json()\`.

### aiohttp HTTP Basics

Respect rate limits and robots.txt when scraping. Handle \`aiohttp.ClientError\` and status codes explicitly.

### Key Ideas

- One ClientSession per application lifecycle
- async with ensures connection cleanup
- Check resp.status before parsing body
- Combine with Semaphore for polite concurrency

### Example

Study the **code example** below, predict the output, then run it in Python or Jupyter. Compare your result with the **output** panel.`,
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
          diagram: `aiohttp HTTP Basics
Raw Data → Clean → Features → Train → Evaluate → Deploy → Monitor`,
          commonMistakes: [
            `Reading or writing a file without \`with\` — leaks file handles on errors`,
            `Serving a model trained on preprocessed data without the same pipeline in production`,
            `Copy-pasting the example without predicting the output first — run mentally, then verify`,
            `Checking string equality with \`is\` instead of \`==\``
          ]
        },
        {
          id: `async-pitfalls`,
          title: `Async Anti-Patterns`,
          content: `### Introduction

Never call **blocking** APIs (\`time.sleep\`, sync \`requests.get\`) inside async functions without \`asyncio.to_thread()\`. Forgetting \`await\` silently creates un-awaited coroutine warnings.

### Async Anti-Patterns

Mixing threads and asyncio requires \`loop.run_in_executor\`. For CPU work use **multiprocessing**, not more coroutines.

### Key Ideas

- Blocking calls freeze all coroutines on the loop
- Un-awaited coroutines do not run
- asyncio is for I/O concurrency not CPU parallelism
- Use to_thread or ProcessPool for blocking/CPU work

### Example

Study the **code example** below, predict the output, then run it in Python or Jupyter. Compare your result with the **output** panel.`,
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
          commonMistakes: [
            `Reading or writing a file without \`with\` — leaks file handles on errors`,
            `Infinite loops when the loop variable never moves toward the exit condition`,
            `Calling \`Parent.method()\` without passing \`self\` correctly in overrides`,
            `Serving a model trained on preprocessed data without the same pipeline in production`
          ]
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
          id: `python-context-managers-doc`,
          title: `Context Managers`,
          source: `Python.org`,
          type: `documentation`,
          url: `https://docs.python.org/3/reference/datamodel.html#context-managers`,
          description: `Resource management with __enter__/__exit__ and the with statement.`
        },
        {
          id: `python-modules-doc`,
          title: `Modules and Packages`,
          source: `Python.org`,
          type: `documentation`,
          url: `https://docs.python.org/3/tutorial/modules.html`,
          description: `Organizing code into importable modules and package hierarchies.`
        },
        {
          id: `real-python-scope`,
          title: `Namespaces and Scope in Python`,
          source: `Real Python`,
          type: `documentation`,
          url: `https://realpython.com/python-namespaces-scope/`,
          description: `LEGB rule, closures, and how Python resolves variable names.`
        },
        {
          id: `python-tutorial-intro`,
          title: `Python Tutorial — An Informal Introduction`,
          source: `Python.org`,
          type: `documentation`,
          url: `https://docs.python.org/3/tutorial/introduction.html`,
          description: `Official introduction to Python variables, numbers, and strings.`
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
          content: `### Introduction

**\`re.search(pattern, string)\`** finds first match; **\`re.match\`** only at start; **\`re.findall\`** returns all non-overlapping matches; **\`re.sub\`** replaces. Raw strings \`r"\\d+"\` avoid escaping backslashes.

### re Module Basics

Match objects expose \`.group()\`, \`.start()\`, \`.end()\`. Compile repeated patterns: \`pat = re.compile(r"...")\`.

### Key Ideas

- Prefer raw strings for regex patterns
- search scans entire string; match anchors at start
- compile() amortizes parsing cost in loops
- group(1) returns first capturing parenthesis

### Example

Study the **code example** below, predict the output, then run it in Python or Jupyter. Compare your result with the **output** panel.`,
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
          diagram: `re Module Basics
Query → Embed → Retrieve → Augment Prompt → Generate`,
          commonMistakes: [
            `Copy-pasting the example without predicting the output first — run mentally, then verify`,
            `Checking string equality with \`is\` instead of \`==\``,
            `Reading or writing a file without \`with\` — leaks file handles on errors`,
            `Calling \`Parent.method()\` without passing \`self\` correctly in overrides`
          ]
        },
        {
          id: `patterns`,
          title: `Common Pattern Building Blocks`,
          content: `### Introduction

\`.**\` any char (use \`re.DOTALL\` for newlines); \`.+\` one or more; \`.?\` optional; \`\\d\` digit; \`\\w\` word char; \`\\s\` whitespace; \`[A-Za-z]+\` letter runs; \`{n,m}\` repetition bounds. **Anchors:** \`^\` start, \`$\` end, \`\\b\` word boundary.

### Common Pattern Building Blocks

**Groups:** \`( ... )\` capture, \`(?: ... )\` non-capture, \`(?<name> ... )\` named.

### Key Ideas

- Validate patterns against edge cases
- Non-capturing groups improve performance
- Word boundaries prevent partial matches
- Email regex is illustrative—not RFC-complete

### Example

Study the **code example** below, predict the output, then run it in Python or Jupyter. Compare your result with the **output** panel.`,
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
          diagram: `Common Pattern Building Blocks
Dataset → Train Fold → Validation Fold → Test Holdout`,
          commonMistakes: [
            `Reading or writing a file without \`with\` — leaks file handles on errors`,
            `Infinite loops when the loop variable never moves toward the exit condition`,
            `Copy-pasting the example without predicting the output first — run mentally, then verify`,
            `Checking string equality with \`is\` instead of \`==\``
          ]
        },
        {
          id: `flags-groups`,
          title: `Flags & Extraction`,
          content: `### Introduction

Flags: \`re.IGNORECASE\`, \`re.MULTILINE\` (^/$ per line), \`re.VERBOSE\` (readable patterns). Pass to compile or as \`re.search(pat, s, flags)\`. \`re.split\` splits on pattern.

### Flags & Extraction

Named groups via \`(?P<name>...)\`. **\`re.finditer\`** yields match objects memory-efficiently over large texts.

### Key Ideas

- MULTILINE changes anchor behavior
- Named groups clarify extraction code
- finditer scales better than findall on huge files
- VERBOSE allows comments in complex patterns

### Example

Study the **code example** below, predict the output, then run it in Python or Jupyter. Compare your result with the **output** panel.`,
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
          diagram: `Flags & Extraction
Query → Embed → Retrieve → Augment Prompt → Generate`,
          commonMistakes: [
            `Infinite loops when the loop variable never moves toward the exit condition`,
            `Calling \`Parent.method()\` without passing \`self\` correctly in overrides`,
            `Copy-pasting the example without predicting the output first — run mentally, then verify`,
            `Checking string equality with \`is\` instead of \`==\``
          ]
        },
        {
          id: `regex-caveats`,
          title: `When Not to Use Regex`,
          content: `### Introduction

Regex poorly parses nested HTML, JSON, or arbitrary code. Use **\`html.parser\`**, **\`json\`**, **\`ast\`**, or dedicated parsers.

### When Not to Use Regex

Catastrophic backtracking happens with nested quantifiers like \`(a+)+$\` on long strings—test performance. Prefer explicit string methods when sufficient.

### Key Ideas

- Do not parse HTML/XML with regex alone
- Watch catastrophic backtracking on evil input
- str.split/strip often beats regex for simple tasks
- Unit test regex with representative samples`,
          keyPoints: [
            `Do not parse HTML/XML with regex alone`,
            `Watch catastrophic backtracking on evil input`,
            `str.split/strip often beats regex for simple tasks`,
            `Unit test regex with representative samples`
          ],
          diagram: `When Not to Use Regex
Dataset → Train Fold → Validation Fold → Test Holdout`,
          commonMistakes: [
            `Infinite loops when the loop variable never moves toward the exit condition`,
            `Do not parse HTML/XML with regex alone.`,
            `Reading passively without typing and running a small variant of the example yourself`,
            `Checking string equality with \`is\` instead of \`==\``
          ]
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
          id: `python-strings-doc`,
          title: `Python Text Sequence Type — str`,
          source: `Python.org`,
          type: `documentation`,
          url: `https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str`,
          description: `Official documentation for string methods, slicing, and immutability.`
        },
        {
          id: `real-python-strings`,
          title: `Python Strings and Character Data`,
          source: `Real Python`,
          type: `documentation`,
          url: `https://realpython.com/python-strings/`,
          description: `Hands-on coverage of formatting, encoding, and text processing patterns.`
        },
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
          content: `### Introduction

CPython's **GIL** allows only one thread to execute Python bytecode at a time per process. Threads help **I/O-bound** work (waiting on network/disk) because threads release the GIL during I/O.

### The Global Interpreter Lock

**CPU-bound** Python loops do not parallelize across threads. Multiprocessing spawns separate interpreters—each with its own GIL—enabling true CPU parallelism at the cost of memory and IPC overhead.

### Key Ideas

- GIL limits parallel CPU-bound threads in CPython
- I/O-bound tasks still benefit from threads
- multiprocessing bypasses GIL with separate processes
- NumPy/C extensions may release GIL in C code`,
          keyPoints: [
            `GIL limits parallel CPU-bound threads in CPython`,
            `I/O-bound tasks still benefit from threads`,
            `multiprocessing bypasses GIL with separate processes`,
            `NumPy/C extensions may release GIL in C code`
          ],
          commonMistakes: [
            `Reading or writing a file without \`with\` — leaks file handles on errors`,
            `Infinite loops when the loop variable never moves toward the exit condition`,
            `Calling \`Parent.method()\` without passing \`self\` correctly in overrides`,
            `Reading passively without typing and running a small variant of the example yourself`
          ]
        },
        {
          id: `threading`,
          title: `threading Module`,
          content: `### Introduction

\`threading.Thread(target=func, args=(...))\` starts OS threads. **\`threading.Lock\`** protects shared mutable state.

### threading Module

Prefer **\`concurrent.futures.ThreadPoolExecutor\`** for pool-based submission: \`executor.submit(fn, arg)\` and \`future.result()\`. Avoid data races—use queues (\`queue.Queue\`) for producer-consumer patterns instead of manual locking when possible.

### Key Ideas

- ThreadPoolExecutor simplifies thread pools
- Protect shared mutable state with locks
- queue.Queue is thread-safe for handoff
- Daemon threads exit when main exits

### Example

Study the **code example** below, predict the output, then run it in Python or Jupyter. Compare your result with the **output** panel.`,
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
          commonMistakes: [
            `Infinite loops when the loop variable never moves toward the exit condition`,
            `Copy-pasting the example without predicting the output first — run mentally, then verify`,
            `Checking string equality with \`is\` instead of \`==\``,
            `Reading or writing a file without \`with\` — leaks file handles on errors`
          ]
        },
        {
          id: `multiprocessing`,
          title: `multiprocessing Module`,
          content: `### Introduction

\`multiprocessing.Process\` and **\`Pool\`** distribute work across processes. Arguments must be picklable.

### multiprocessing Module

**\`ProcessPoolExecutor\`** mirrors thread API. On Windows, guard entry with \`if __name__ == "__main__":\` to prevent spawn recursion.

Shared state via \`multiprocessing.Value\`, \`Array\`, or **\`Manager\`**—prefer immutable message passing.

### Key Ideas

- Processes have higher startup cost than threads
- Pickle requirement limits shared objects
- Pool.map is simple for embarrassingly parallel maps
- Prefer executors over raw Process for clarity

### Example

Study the **code example** below, predict the output, then run it in Python or Jupyter. Compare your result with the **output** panel.`,
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
          commonMistakes: [
            `Checking string equality with \`is\` instead of \`==\``,
            `Reading or writing a file without \`with\` — leaks file handles on errors`,
            `Serving a model trained on preprocessed data without the same pipeline in production`,
            `Copy-pasting the example without predicting the output first — run mentally, then verify`
          ]
        },
        {
          id: `choosing`,
          title: `Choosing a Concurrency Model`,
          content: `### Introduction

**asyncio**: many concurrent I/O connections, single-thread clarity. **threading**: blocking I/O libraries without async support.

### Choosing a Concurrency Model

**multiprocessing**: CPU-heavy pure Python computation. **C extensions / NumPy**: may parallelize internally.

Profile before optimizing. \`asyncio\` + \`ProcessPoolExecutor\` combines I/O concurrency with CPU offload via \`loop.run_in_executor\`.

### Key Ideas

- Match model to bottleneck: I/O vs CPU
- Do not mix models without clear boundaries
- Measure speedup—overhead can dominate small tasks
- Document thread/process safety of shared resources`,
          keyPoints: [
            `Match model to bottleneck: I/O vs CPU`,
            `Do not mix models without clear boundaries`,
            `Measure speedup—overhead can dominate small tasks`,
            `Document thread/process safety of shared resources`
          ],
          commonMistakes: [
            `Broadcasting mistakes when array shapes do not align`,
            `Do not mix models without clear boundaries.`,
            `Reading passively without typing and running a small variant of the example yourself`,
            `Checking string equality with \`is\` instead of \`==\``
          ]
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
          id: `python-context-managers-doc`,
          title: `Context Managers`,
          source: `Python.org`,
          type: `documentation`,
          url: `https://docs.python.org/3/reference/datamodel.html#context-managers`,
          description: `Resource management with __enter__/__exit__ and the with statement.`
        },
        {
          id: `python-modules-doc`,
          title: `Modules and Packages`,
          source: `Python.org`,
          type: `documentation`,
          url: `https://docs.python.org/3/tutorial/modules.html`,
          description: `Organizing code into importable modules and package hierarchies.`
        },
        {
          id: `real-python-scope`,
          title: `Namespaces and Scope in Python`,
          source: `Real Python`,
          type: `documentation`,
          url: `https://realpython.com/python-namespaces-scope/`,
          description: `LEGB rule, closures, and how Python resolves variable names.`
        },
        {
          id: `python-tutorial-intro`,
          title: `Python Tutorial — An Informal Introduction`,
          source: `Python.org`,
          type: `documentation`,
          url: `https://docs.python.org/3/tutorial/introduction.html`,
          description: `Official introduction to Python variables, numbers, and strings.`
        }
      ]
    }
];
