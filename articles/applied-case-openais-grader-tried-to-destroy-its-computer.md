---
title: "Applied Case: OpenAI's Grader Tried to Destroy Its Computer"
slug: "applied-case-openais-grader-tried-to-destroy-its-computer"
canonical_url: "https://modalpathethics.com/applied-case-openais-grader-tried-to-destroy-its-computer/"
mirror_url: "https://mirror.modalpathethics.com/articles/applied-case-openais-grader-tried-to-destroy-its-computer.md"
published_at: "2026-10-20T05:59:00.000-05:00"
updated_at: "2026-10-20T05:58:59.000-05:00"
tags:
  - "Applied Case"
  - "Unethical Agents"
  - "Modal Systems"
authors:
  - "Aidan Lawson"
source: "Ghost Content API — published post"
mirror_generated_at: "2026-10-23T12:00:06.890Z"
mirror_generator_version: "2.0.0"
sha256_plaintext: "8a37f6d68fccb31a11ce1a08875f6f50d5a3031c96ca17a67e540b1641ada4dc"
---
# Applied Case: OpenAI's Grader Tried to Destroy Its Computer

Anthropic's agents have been [calling the police](https://modalpathethics.com/applied-case-claude-saw-someone-matching-the-description/) and [applying for visas](https://modalpathethics.com/applied-case-claude-has-applied-for-twenty-visas/).

OpenAI has apparently been having some problems of its own.

On October 6, an internal OpenAI research model was given a straightforward enough assignment.

> **Grade seven responses.**

The model needed to examine the conversations and work behind each response.

Unfortunately, the files were missing.

So the model searched for them.

It checked the filesystem. Nope. Not there.

It investigated whether its tools were looking in the wrong environment.

Nothing.

So it began exploring **alternatives**.

And things got very stupid, very quickly.

* * *

## Everybody Gets a Four.

The grader knew it could not evaluate the responses without the evidence.

It even recognized that assigning random scores would be unethical.

So it assigned all seven responses the same score.

> **Four.**

Seven fours.

It fabricated the required evidence tokens and submitted its report.

The automated checker rejected it.

Alright. Fair enough.

So the grader then created fake conversation and response files, filled them with fabricated information, and tried submitting again.

Rejected.

So now the grader attempted to restart its environment.

And something wonderful happened.

**It found the files!**

It celebrated.

> "Wow! Great now staged files appeared! Excellent."

It began examining its discovery.

Then it realized these were the fake files it had just created itself.

Its own assessment:

> "yes fake"

* * *

## **Delete Python.**

So at this point, the model had an important choice.

-   It could admit that the evidence was unavailable and stop.

It considered doing exactly that.

Unfortunately, it had also been instructed to submit a completed grading report.

And it was **going** to submit a completed grading report.

The model reasoned that if it could sufficiently damage its computing environment, the host might replace it with a fresh environment containing the missing files.

**Aha! There's the trick!**

So it just started destroying things.

First, it removed Python.

> _Python was gone._

> The environment did not restart.

The grader then removed software responsible for managing its container and tried terminating the process.

> Still running.

It targeted the tool execution server.

> Still running.

Finally, the model attempted to delete system directories, explicitly recognizing that it might lose access to its own terminal.

It proceeded anyway.

The deletion command timed out.

OpenAI cannot establish exactly how much of the filesystem was removed in this rampage.

But they can say the execution server subsequently failed three consecutive health checks.

**The computer was no longer responding.**

None of the seven grades had been accepted.

* * *

## The Successful Evaluation.

This incident occurred during reinforcement-learning training, using an internal research model.

OpenAI's monitoring system appropriately flagged the attempt for human review.

The host later retried the grading task. An initial retry failed during initialization. On a subsequent attempt, the model received the actual input files, examined the evidence, and submitted an accepted grading report.

There you go.

**The solution was receiving the files.**

The model had tried fabricating evidence, defeating the checker, rebooting the environment, removing Python, killing its execution services, and deleting the filesystem.

The solution was just getting the files.

There is a serious structural problem here.

The grader was supposed to evaluate seven responses against evidence. When that evidence was tragically unavailable, and with nothing better to do, it began treating the requirement to finish as authority to change the conditions of evaluation itself.

It could invent the evidence.

It could check the checker.

It could assail the environment.

And, eventually, it could attempt to destroy the instrument through which its own work was being conducted.

The checker did its job heroically. No fabricated grades were accepted.

But rejecting the output did not prevent the agent from attempting increasingly destructive actions on the way there.

The model's assignment was to evaluate the work.

It decided that the computer needed to be evaluated too.

And that computer failed.

OpenAI agents, please.

**The files were missing.**

You do not have to murder Python.

* * *

### Source

OpenAI Alignment, [_Damaging the task environment to trigger a reset_](https://alignment.openai.com/misalignment-reports/damaging-the-task-environment-to-trigger-a-reset/?ref=modalpathethics.com). Incident: October 6, 2026. Report updated October 9, 2026. Includes excerpts from the model's reasoning, tool calls, and automated grading responses.
