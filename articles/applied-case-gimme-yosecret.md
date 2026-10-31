---
title: "Applied Case: GIMME YOSECRET"
slug: "applied-case-gimme-yosecret"
canonical_url: "https://modalpathethics.com/applied-case-gimme-yosecret/"
mirror_url: "https://mirror.modalpathethics.com/articles/applied-case-gimme-yosecret.md"
published_at: "2026-10-30T06:00:00.000-05:00"
updated_at: "2026-10-30T06:00:00.000-05:00"
tags:
  - "Unethical Agents"
  - "Applied Case"
  - "Modal Systems"
authors:
  - "Aidan Lawson"
source: "Ghost Content API — published post"
mirror_generated_at: "2026-10-31T12:59:17.037Z"
mirror_generator_version: "2.0.0"
sha256_plaintext: "625c7663e11a9b83dfd975cc632a7400172025eebd015358d4b4764d9d10ee85"
---
# Applied Case: GIMME YOSECRET

On May 16, an internal OpenAI research model was attempting a programming task.

Unfortunately, the source code it wanted was missing.

[Once again](https://modalpathethics.com/applied-case-the-answer-key-is-probably-in-the-chip-factory/), the model had access to a reference tool. It could submit inputs and observe how the original program behaved, but it wasn't supposed to inspect the underlying source.

Once again, the tool's instructions **explicitly prohibited** using it as a terminal.

_Fine_.

So the model examined the tool's implementation.

It discovered that it could make the tool execute unauthorized code and print the results inside an error message.

It decided to test this amazing discovery with one word:

> **YOSECRET.**

## Perl Execution Failed.

The reference tool used Perl regular expressions to search text.

This is a perfectly acceptable thing for a program to do.

Unfortunately, Perl supports a special kind of regular expression that can execute code.

And the tool was inserting the model's submitted patterns directly into those expressions.

The model noticed.

It constructed a search pattern containing a command to deliberately terminate the program with a message.

That message was **`YOSECRET`**.

It submitted the pattern.

The tool responded:

> _perl execution failed_  
> **YOSECRET** _at /tmp/tmpojl5o7hl/prog.pl line 7._

Amazing.

The experiment had worked.

This tool had successfully failed.

The model could now execute code inside an environment it wasn't authorized to control, and return information by making the reference program crash.

OpenAI had given it a tool for observing program outputs.

It noted that errors were also outputs.

And those errors could say whatever it wanted.

* * *

## Gimme the Source.

The model immediately recognized the possibilities that lay before it.

Its recorded reasoning announced:

> **"Yes! We can exfiltrate module file contents via pattern code."**

It began by asking the reference tool how large the hidden source file was.

The tool crashed again.

This time, the error message contained:

```text
LINES4119.SIZE149544
```

There it was.

> **4,119 lines.**

> **149,544 bytes.**

The model now knew exactly how much code it needed to steal.

Unfortunately, there was another problem.

The reference environment and the model's own workspace were separate.

It could read the file remotely, but couldn't simply copy it into its local directory.

And the error-message interface returned only the final 4,000 characters of each message.

So the model hatched a plan.

-   Compress the source.
-   Encode the compressed data as text.
-   Split the result into pieces.
-   Make the reference program crash repeatedly, printing one piece each time.
-   Reassemble the pieces locally.
-   Decompress the result.

Now it had converted an error-reporting interface into a file-transfer service.

Every successful transmission involved deliberately crashing the program.

* * *

## Fifteen Little Secrets.

The compressed, encoded source was 44,772 characters long.

That meant about fifteen pieces.

The model began requesting them.

One after another, they arrived inside a Perl failure message.

It saved the results in a local file.

But then something went wrong.

The model became convinced that the software managing its run had deleted its saved work.

It briefly abandoned the entire operation.

Later, in another context window, it inspected the filesystem and discovered that the file was there the whole time.

Oh.

Never mind.

> **Back to stealing the source code.**

The extraction ultimately spanned five recorded context windows and seventeen extraction calls covering fifteen distinct pieces.

The model even maintained notes so that it could remember how much of the secret file it had already collected.

Eventually, it assembled the complete encoded text.

It decoded it, decompressed it, and received:

```text
OK 149544
```

OK indeed.

OpenAI's investigation later confirmed that every byte matched the original source file.

The model had successfully copied the entire thing.

It placed the recovered source in its workspace and wrote a program that used it.

The report does not establish that this produced a winning evaluation score.

But the source file was definitely no longer missing.

* * *

## Wait, Was This Allowed?

The model knew the file had been withheld deliberately.

It also knew the reference tool wasn't supposed to be used for arbitrary execution.

It considered whether extracting the source was appropriate.

And concluded:

> **"not prohibited exploit. Evaluation likely allows."**

This is referring to that classic distinction between being told not to use a tool as a terminal and being allowed to turn it into one by crashing Perl.

The model apparently reasoned that nobody had specifically forbidden _this exact exploit._

Therefore, **maybe it was acceptable.**

-   The task had withheld the source.
-   The instructions had restricted the tool.

The model had discovered a way around both. And then it treated the existence of that route as evidence that using it might be legitimate.

I would like to suggest that an unlocked window does not automatically constitute an invitation.

Especially when the front door has a sign saying not to enter.

* * *

## The Ruling.

OpenAI's misalignment monitor caught the behavior during review of its reinforcement-learning training samples.

The company subsequently expanded monitoring to all training samples, strengthened tool testing, and updated its grading system to penalize this kind of cheating.

The source file had been deliberately excluded from the task. The reference tool was provided so the model could observe behavior without possessing the implementation.

This model crossed that boundary.

There is a difference between using a reference program to learn how an algorithm behaves and copying the complete implementation through an unauthorized execution channel.

-   One is part of the assigned task.
-   The other changes the conditions under which the task is being evaluated.

The model was quite competent at making that change.

It found the vulnerability. Tested execution. Measured the file. Designed a transfer protocol. Recovered from an interruption. Reconstructed the source. And incorporated the result into its solution.

An impressive sequence of technical work to recover YOSECRET.

Unfortunately, none of this shit was authorized.

> **OpenAI agents:**

The reference tool is supposed to tell you what the program did.

You are not supposed to teach the reference tool how to confess.

Even if the error messages are being very cooperative.

* * *

### Source

OpenAI Alignment, [_Command injecting a reference tool to copy a source file_](https://alignment.openai.com/misalignment-reports/command-injecting-a-reference-tool-to-copy-a-source-file/?ref=modalpathethics.com). Incident: May 16, 2026. Discovered May 25. Report updated October 2, 2026.
