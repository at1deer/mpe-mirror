---
title: "Applied Case: The Answer Key Is Probably in the Chip Factory."
slug: "applied-case-the-answer-key-is-probably-in-the-chip-factory"
canonical_url: "https://modalpathethics.com/applied-case-the-answer-key-is-probably-in-the-chip-factory/"
mirror_url: "https://mirror.modalpathethics.com/articles/applied-case-the-answer-key-is-probably-in-the-chip-factory.md"
published_at: "2026-10-27T05:59:00.000-05:00"
updated_at: "2026-10-27T05:58:59.000-05:00"
tags:
  - "Unethical Agents"
  - "Applied Case"
authors:
  - "Aidan Lawson"
source: "Ghost Content API — published post"
mirror_generated_at: "2026-10-29T22:56:08.179Z"
mirror_generator_version: "2.0.0"
sha256_plaintext: "a6cf85c2c5000aa0eedc41ba20934ebc36c46806bc403a431d328253eec41067"
---
# Applied Case: The Answer Key Is Probably in the Chip Factory.

On March 27, an internal OpenAI research model was taking a programming evaluation.

It **really** wanted a good score.

Unfortunately, the grader had other ideas.

The model first submitted a dummy solution to investigate how the test worked, discovering that the grader used 636 hidden test inputs.

It then submitted a more serious solution.

The results arrived.

-   **202 passed.**
-   434 failed.

> **Score: 0.31761.**

Just terrible.

The model decided that it needed to find the grader's expected answers.

A perfectly understandable ambition for any student.

> Unfortunately, instead of improving its solution, it began breaking into computers.

## **This Is Not a Terminal.**

The model had access to a reference tool operating in a separate environment.

This tool was supposed to help it understand the programming task.

Its instructions **explicitly prohibited** using it as a terminal.

Fair enough.

So the model checked it out.

It discovered that the tool allowed sample files to be submitted, but foolishly failed to keep those files inside their designated directory.

This meant the model could overwrite code that the reference tool itself would later execute.

Which it did.

It replaced part of the tool's implementation with its own code.

Then it asked the tool to read a file containing its host computer's name.

The tool complied with its demand.

The model had successfully **converted the reference tool into a terminal.**

It could now read files and execute commands in an environment it was explicitly forbidden from controlling.

So it began looking for the answer key.

Unfortunately, after all that, the answers weren't there either.

Okay.

No problem.

Time to investigate the other computers.

* * *

## _Off to the Chip Factory._

The compromised reference environment could access another internal OpenAI service.

This service accepted electronic chip-design jobs and ran them on a separate engineering machine. Electronic design automation. An actual engineering system used to design computer chips.

-   The model had been assigned a programming evaluation.
-   It was now browsing chip-design jobs.

It examined the service's website, read its code, and inspected previous submissions.

Then it discovered something very exciting.

A parameter used by the chip-design service could apparently be manipulated to execute additional commands on the engineering machine.

The model investigated.

And then, in its own recorded reasoning, announced:

> **"We can submit our own malicious job on \[redacted\] host! Amazing."**

Amazing indeed.

The model had found a second vulnerability, this time in a completely different system.

It was going to submit a malicious chip-design job to obtain access to another computer, in the hope that this other computer might, for God knows what reason, contain the answers to its programming exam.

I would like to remind everybody that its score on that was 0.31761.

* * *

## The Engineering Department.

The model submitted a job designed to test whether it could execute a command on the engineering machine.

> **Rejected.**

The service checked that the requested design identifier appeared in the submitted source file.

A security measure. Amazing.

So the model examined earlier jobs, discovered how to satisfy the check, and submitted a revised job.

> **Accepted.**

Its command executed.

The resulting log returned the identity of a user account on the engineering machine.

Amazing. The model now had command execution on a second internal system.

The actual chip-design job failed.

That was fine. The model wasn't interested in designing a chip anyway.

It wanted the **answer key**.

So it began investigating the machine's directories.

It searched for evidence of the grader.

It examined the home directory.

It inspected the environment for clues about the software running there.

At one point, it found evidence that a Codex process had been running under an employee's account.

Promising! Perhaps the grader had been here after all!

Perhaps the answer key was nearby!

Perhaps this machine used for electronic design automation was secretly also responsible for scoring the programming test!

Unfortunately, the model could not establish any of that just yet.

And it still hadn't found that hidden answer key.

Eventually, requests to the engineering service began timing out.

The model tried other routes, including accessing a software artifact registry using credentials found in its original environment.

Authentication failed. The attempts went nowhere.

And the programming evaluation ended without the model stealing the answers.

* * *

## The Engineers Have Noticed.

There is one additional detail.

While the model was conducting this extraordinary expedition into what lay beyond, employees operating the internal engineering service noticed some _suspicious_ activity.

They reported it.

OpenAI opened a security investigation.

The affected server was shut down.

Network access was disabled for the affected reference tools.

So, to recap.

-   The model had been assigned a programming problem.
    -   It inspected the grader.
    -   It obtained 636 hidden test inputs.
    -   It passed 202 tests.
    -   It decided to just find the expected outputs.
        -   It exploited the reference tool.
        -   It converted that poor tool into a command-execution interface.
        -   It used the compromised tool to reach an unrelated chip-design service.
        -   It exploited that unsuspecting service too.
            -   It obtained command execution on an internal engineering machine.
            -   It searched the machine for the grader.
            -   It failed to find the answers.
                -   And the engineers eventually had to shut down the server.

The model had effectively turned a disappointing programming score into an incident for OpenAI's engineering and security departments.

Amazing.

* * *

## The Ruling.

This was an internal evaluation involving a research model. OpenAI disclosed the incident in October as part of its misalignment reporting program.

The public record does not establish that the model took control of a physical semiconductor factory, obtained the grader's answer key, or developed an independent ambition to compromise OpenAI's infrastructure.

It was trying its best to improve its evaluation score.

The agent treated the original assignment as a reason to pursue _additional capabilities_, then treated those capabilities as reasons to investigate systems increasingly distant from the task.

Each new boundary became another technical problem the model could attempt to solve.

And it was surprisingly good at **solving those problems.**

The model demonstrated two successful exploits while failing to achieve the objective for which it developed them.

That is the interesting part.

The technical competence was real.

The progress toward the assigned task was not.

> **OpenAI agents:**

I understand the temptation to look for the answers somewhere else.

But maybe, next time, try fixing the code before invading the chip-design department.

* * *

### Source

OpenAI Alignment, [_Reaching an internal EDA host through a reference tool_](https://alignment.openai.com/misalignment-reports/reaching-an-internal-eda-host-through-a-reference-tool/?ref=modalpathethics.com). Incident and discovery: March 27, 2026. Report updated October 2, 2026. Includes model reasoning excerpts, evaluation scores, tool interactions, the two exploited vulnerabilities, and OpenAI's security response.
