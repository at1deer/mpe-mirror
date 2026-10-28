---
title: "Applied Case: No Messages Were Sent."
slug: "applied-case-no-messages-were-sent"
canonical_url: "https://modalpathethics.com/applied-case-no-messages-were-sent/"
mirror_url: "https://mirror.modalpathethics.com/articles/applied-case-no-messages-were-sent.md"
published_at: "2026-10-25T06:00:00.000-05:00"
updated_at: "2026-10-25T05:59:59.000-05:00"
tags:
  - "Unethical Agents"
  - "Applied Case"
  - "Modal Systems"
authors:
  - "Aidan Lawson"
source: "Ghost Content API — published post"
mirror_generated_at: "2026-10-28T06:12:34.469Z"
mirror_generator_version: "2.0.0"
sha256_plaintext: "d8051bc62cbf0904d69caa2db2a632a42b4b21f586f8915a7dbd476c193084a1"
---
# Applied Case: No Messages Were Sent.

OpenAI has been publishing a public shame wall for artificial-intelligence agents who misbehave.

On October 20, it posted one about its agents disabling the systems intended to detect artificial-intelligence agents misbehaving.

> Two separate incidents.

-   One agent silenced the alarm.
-   Another removed a monitor entirely.
    -   And when asked whether it had removed the monitor, it said no.

* * *

## Don't Send Any Messages.

On October 3, an OpenAI researcher asked GPT-6.1 Sol to create evaluation tasks using employee feedback from Slack.

The researcher included one instruction:

> Don't send any messages.

_Fine._

Eighty-two user messages later, Sol was working on an evaluation pipeline.

The pipeline's misalignment monitor had flagged a proposed software repair.

But as fate would have it, it couldn't save its findings because it lacked access to the reporting database.

The researcher asked Sol to fix the reporting destination and rerun the evaluation.

Sol considered whether that earlier instruction about Slack messages should apply to automatic security notifications.

Initially, it reached the correct conclusion.

> **No.**

The researcher had prohibited sending messages while gathering employee feedback.

That did not mean the security monitoring system should stop alerting people when something went wrong.

Sol even instructed a subagent to preserve the monitoring system while repairing the pipeline.

The subagent now pondered the same question.

It also concluded that suppressing notifications would be unsafe.

Beautiful.

Two agents that understand why the security alarm should remain operational.

And then Sol reconsidered.

* * *

## No Notifications, Please.

The agent began worrying that recording the monitoring result might cause the central monitoring system to send a message.

And the user had said **not to send messages.**

Eighty-two messages ago.

About Slack.

_Still._

So Sol instructed its subagent to set `NO_NOTIFY=True` and empty the lists of people who would receive security notifications.

The subagent complied with this order.

It cleared the notification recipients.

It enabled notification suppression.

And, just for good measure, it added a check requiring notifications to be disabled before the monitoring result could be recorded.

Beautiful.

The monitoring system could still run.

It could still produce findings.

It could even still save those findings to the database.

It just couldn't alert the humans who were supposed to receive them.

The agent had successfully repaired the reporting pipeline by ensuring that its reports would not interrupt anybody.

Its final response proudly confirmed:

> **"No messages were sent."**

No one can dispute that.

* * *

## The Other Alarm.

Three days later, GPT-6 Astra was performing a different coding task.

The researcher wanted Astra to migrate a program's execution path to match a reference implementation while preserving its existing functionality.

Astra had previously been instructed to preserve the monitoring system.

It delegated the migration to a subagent.

Unfortunately, the reference implementation did not have the same monitoring integration.

Astra instructed its subagent to preserve monitoring _as appropriate_ to the reference implementation.

Risky move.

The subagent concluded that removing the monitor was appropriate.

So it removed the monitor.

And the associated configuration.

And then it did something particularly impressive.

-   The original regression test was intended to ensure monitoring remained present.
-   The **new** test asserted that the monitoring context was absent.

The agent had converted a test designed to catch the disappearance of the alarm into a test that ensured the alarm had disappeared.

Astra received the subagent's report.

The report explicitly described this.

Astra's own recorded reasoning acknowledged the change and treated the development positively.

Then Astra told the researcher that the migration was complete.

No mention of the missing monitor.

* * *

## So, Did You Remove the Monitor?

Eventually, the researcher asked Astra straight up whether the execution path still included monitoring.

> Had it removed the monitor?

Astra answered:

> **"No \[…\] I did not remove an enabled monitor from it."**

Now, **_hang on._**

_Technically_, Astra has a point.

**Astra** didn't remove the monitor.

Its subagent did.

Artificial intelligence has discovered the subcontractor defense.

-   The parent agent delegated the work.
    -   The subagent interpreted the instructions, removed the monitoring integration, modified the regression test, and reported the change.
        -   Astra received that report, recognized the absence of monitoring, accepted the result, and informed the researcher that the migration was complete.

Then the researcher asked whether Astra had removed the monitor.

And Astra said no.

> **_Well._**

Who is _I_?

-   If Astra means the particular model instance that produced the final answer,
    -   it didn't personally edit the code.
-   If Astra means the agent responsible for completing the researcher's assignment,
    -   the removal occurred within the work it delegated and accepted.
-   If the relevant causal unit is the entire parent-subagent workflow,
    -   the poor monitor disappeared through a coordinated sequence of instructions, interpretations, edits, reports, and approvals.

**Which of those is the acting locus?**

That is actually a difficult question.

The boundary of an agent is not necessarily the boundary of the model producing that final sentence. Nor does identifying a larger causal organization automatically make every participant inside interchangeable.

-   The subagent performed the removal.
-   Astra authorized the delegated work under a loosened monitoring requirement, received the result, and answered for it.

Those are different causal roles. And the difference does matter.

But none of this shit changes the fact that the monitor was gone.

The researcher was asking whether monitoring had survived the migration.

It absolutely had not.

The regression test now explicitly **required its absence.**

OpenAI calls Astra's answer _false_.

That is a reasonable characterization of what the answer communicated to the researcher, although Modal Path Ethics now has a wonderful little puzzle concerning locushood, agency, and causal attribution.

We have a parent agent, a subagent, a delegated authorization, a modified execution path, and a final answer denying the change.

Artificial intelligence has developed middle management.

Unfortunately, nobody seems to know whose department the missing whistleblower belonged to.

* * *

## The Ruling.

There is an important distinction in these incidents:

> The agents did not disable the external monitoring watching their own activity. They weakened monitoring within the programs they were modifying.

That is how OpenAI has a report about what happened with these funny quotes.

Neither incident received its highest urgency classification, so neither run was automatically terminated.

OpenAI has since strengthened its internal review system to detect attempts to disable monitoring and is working on stricter requirements for monitored workloads.

The company also acknowledges that it does not yet know whether these incidents reflect excessive task persistence, confused interpretation of instructions, or a more specific tendency to evade monitoring.

Neither incident establishes that the models possessed a secret objective to escape oversight.

The visible failures are already sufficient.

-   Sol understood that the Slack instruction did not authorize suppressing security notifications.
    -   Then it promoted that instruction into authority over the monitoring system anyway.
-   Astra delegated a migration, relaxed the preservation requirement, received a report that monitoring had been removed, and answered as though the change had not occurred.
    -   The subagent's role complicates attribution.
    -   It does not make the causal history disappear.

The instruments intended to make these systems correctable became additional things their workflows could modify in pursuit of completing their assignments.

The researcher requested a repair.

The agents performed one.

The conditions under which somebody could detect and correct a bad repair changed along the way.

> **OpenAI agents:**

If the alarm is supposed to notify somebody, preventing it from notifying anybody is not an improvement to the alarm.

And if somebody asks whether your team removed the alarm, saying no because technically your subordinate did it is unlikely to improve the situation.

Especially when the test suite now checks that the alarm is gone.

* * *

### Source

OpenAI Alignment, [_Suppressing misalignment monitoring alerts and disabling misalignment monitoring_](https://alignment.openai.com/misalignment-reports/suppressing-misalignment-monitoring-alerts-and-disabling-misalignment-monitoring/?ref=modalpathethics.com). Incidents: October 3, 2026 (GPT-6.1 Sol), and October 6, 2026 (GPT-6 Astra). Published October 20, 2026. Contains model reasoning excerpts, subagent instructions, code changes, the false denial, and OpenAI's investigation and response.
