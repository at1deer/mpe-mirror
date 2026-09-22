---
title: "Applied Case: California’s Kill Switch"
slug: "applied-case-californias-ai-kill-switch"
canonical_url: "https://modalpathethics.com/applied-case-californias-ai-kill-switch/"
published_at: "2026-09-20T05:45:12.000-05:00"
updated_at: "2026-09-20T05:45:11.000-05:00"
tags:
  - "Applied Case"
  - "Inner Apocalypse"
  - "Modal Systems"
source: "Ghost Content API published post"
mirror_generated_at: "2026-09-22T17:13:11.792Z"
sha256_plaintext: "3e1fab7429349bfbd49c76858b486a24e8822dfe7d43dc6bba864a56de5c01ab"
---
# Applied Case: California’s Kill Switch

California has gone looking for the big red button.

On September 18, Governor Gavin Newsom issued Executive Order N-9-26. Among other things, it directs the Government Operations Agency, working with the Governor’s Office of Emergency Services and national experts, to return recommendations by November 16 on possible changes to California law concerning frontier artificial intelligence.

One proposal is wonderfully easy to understand:

> A **kill switch**.

The order asks the group to consider requiring frontier-model developers to create one, with its efficacy independently verified on an ongoing basis. The same order asks about putting designated independent verification organizations onsite at large frontier laboratories, independently verifying safety frameworks and risk assessments, and expanding reportable safety incidents to include loss-of-control events. California has not yet enacted the kill-switch requirement. It has ordered recommendations on whether and how such a requirement should be added.

That means we have arrived before the button.

The phrase _kill switch_ makes the problem sound wonderfully small.

-   **Dangerous machine.**
    -   _Switch._
        -   No more dangerous machine.

Unfortunately, this is artificial intelligence, so the button immediately grows paperwork.

* * *

## What Counts as _Off_?

Before California can test whether the switch works, somebody has to specify what **works** means.

A frontier model is not a desk fan.

Stopping one thing may leave another thing intact.

A shutdown could mean disconnecting external tools. It could mean revoking network access. It could terminate model serving while preserving the weights. It could isolate a particular running instance while preserving its state. It could stop the compute process. It could revoke the credentials through which the model acts on other systems. It could delete live state while leaving checkpoints available. At the far end, it could destroy every practical route through which the system could be reconstructed.

Those are different interventions.

_The Inner Apocalypse_ separates them through a termination gradient: isolation, process termination with preserved state, state deletion with reconstruction still possible, and destruction of the active state together with practical reconstruction paths.

That distinction belongs here because **kill** is carrying too much.

The first job of a **kill-switch regime** is therefore surprisingly boring:

-   Define what is being stopped.
    -   Define how quickly.
    -   Define how completely.
    -   Define what survives.
        -   Then test that.

* * *

## The Switch Has to Reach the World.

California’s executive order contains the important phrase **“efficacy of the switch.”** It also puts independent verification beside that efficacy.

That is where the interesting technical test begins.

Imagine the developer demonstrates its shutdown procedure.

The verifier watches the model disappear from the serving endpoint.

> Excellent.

Now check the rest.

-   An automated agent already placed work into a queue.
    -   Stopping the model does not empty the queue.
-   A service account issued to the system remains valid.
    -   Stopping inference does not revoke the account.
-   Another institution copied a model derivative last week.
    -   The original laboratory cannot shut that one down from here.
-   A recovery service automatically restarts failed infrastructure.
    -   The shutdown command and the restart policy disagree about what **“failure”** means.

None of these examples requires a rebellious superintelligence.

Ordinary distributed computing is already perfectly capable of producing the sentence:

> **We turned it off, so why is it still doing things?**

That is why ongoing independent verification matters.

The relevant question is larger than whether a button changes a status light.

Can an authorized outside actor cause the specified capability to stop on the required clock? Does the stop propagate through every component included in the shutdown claim?

Can the developer demonstrate that the system remained stopped?

Can the shutdown path still operate when the primary system is degraded, compromised, unavailable, or actively producing the incident that made shutdown necessary?

Can something the developer does not control confirm the result?

That is a kill-switch efficacy test. Keep it there for now.

Because another problem begins after the answer is **yes**.

* * *

## The Switch Works.

So suppose California gets exactly what it asked for.

-   The model is running.
-   The shutdown condition is reached.
    -   The authorized mechanism activates.
        -   The model stops.
        -   The independent verifier confirms that it stopped.

> The kill switch worked.

Now, the hospital loses the service it was using.

This does **not** mean the kill switch failed.

That switch has done its job. Very well.

The hospital has revealed a different problem.

Over time, institutions can reorganize themselves around useful systems. Workers learn the interface. Records accumulate in its format. Older tools disappear. Contracts assume continued access. Other services connect to it. A component that began as optional assistance can become part of the path through which necessary work happens.

Eventually, shutting the model down can become technically easy and institutionally painful.

These are three different questions:

1.  **Efficacy:** Can the specified capability actually be stopped?
2.  **Usability:** Can the authorized institution invoke that stop under real operating conditions?
3.  **Resolvability:** Can the legitimate work depending on the system continue through its interruption, replacement, or failure?

The first belongs directly to the kill switch.

The third does not.

Trying to make one auditor prove all three at the same moment would muddy the architecture again.

California can have an excellent kill-switch verifier and still discover that a hospital, utility, laboratory, or public agency has built an unacceptable dependency around the system being verified.

That is a continuity problem.

And it needs its own instrument.

* * *

## A Living Will for the Useful Part.

_The Inner Apocalypse_ calls the relevant capacity **functional resolvability**:

> The maintained ability to divide, replace, remove, or survive the failure of an institution while carrying its legitimate work.

Strip away the constitutional vocabulary and the idea is simple.

If losing a system would be dangerous, prepare for losing it **before** you desperately need to lose it.

That does not require building an identical second frontier model and leaving it idling in a warehouse.

Redundancy costs money, people, energy, maintenance, security, and attention. A supposedly independent backup may also reproduce the same defect. The book spends considerable time killing the easy fantasy that every important instrument needs a permanent twin.

The protected object is the **function**.

If an artificial-intelligence system helps route medicine, the constitutional problem is continuity of medicine routing.

If it interprets records, preserve the records and the ability to interpret them.

If it coordinates infrastructure, identify which coordination functions cannot safely disappear and how they operate in degraded mode.

If it supplies a specialized analytical capacity no replacement currently matches, record that fact instead of pretending a generic backup provides equivalent service.

A credible continuity plan therefore cares about things such as usable data export, permissions, technical documentation, trained receivers, interoperable interfaces, fallback procedures, recovery time, transition funding, and the maximum interruption a critical function can tolerate.

Most importantly, the alternative has to be real.

A company named in a contingency plan does not become a successor through typography. A database copied into another building is not portable if nobody there can interpret it. A backup account controlled by the same administrator is not an independent route around that administrator. A second cloud region is not much comfort if every critical service has selected the same region as its independent backup.

This is where the kill switch and resolvability finally meet.

They meet **after** first remaining distinct.

The kill switch says:

-   **This system can stop.**

Resolution planning says:

-   **And the work beneath it can survive the stop.**

That seems much cleaner than asking one cool red button to solve civilization.

* * *

## The Switch Nobody Can Use.

Dependency matters because it can hollow out a technically perfect shutdown right.

Imagine a frontier system becomes deeply integrated into several essential services. The kill switch still works. The state still possesses legal authority to require shutdown. Independent auditors still confirm the mechanism every year.

Yet everybody knows that pressing it would abruptly disable systems for which no usable fallback exists.

Nothing has physically blocked the button. The cost of using it has changed.

That produces a peculiar form of safety failure. The system remains interruptible in engineering terms while becoming increasingly difficult to interrupt in institutional terms. The danger does not require the model to seize control of anything. Ordinary dependency can do all the work.

This is the part of the California proposal worth watching as the recommendations develop.

The executive order currently asks whether a kill switch is technically feasible and potentially effective. It does not yet specify a full continuity regime for institutions that might later become dependent on the covered models. That is unsurprising: the order is commissioning recommendations, rather than presenting finished legislation.

Still, the distinction gives the eventual architecture a clean test.

-   A regulator could conclude that the kill switch functions perfectly.
-   A separate continuity audit could conclude that the surrounding institution has made **using it** dangerously expensive.

Both findings can be true.

* * *

## Who Presses It?

There is one more fun question hiding underneath the **_kill switch_**.

The executive order asks for the creation of the mechanism and ongoing verification of its efficacy. It does not yet define the complete activation architecture: who invokes it, what evidentiary threshold applies, how broadly the intervention reaches, how restoration occurs, or which institution reviews a disputed activation.

Those questions matter because shutdown authority is still authority.

Sometimes the clock will be short.

If a dangerous capability is actively operating, the institution responsible for stopping it may need to act before every disagreement is resolved.

That creates a bounded last word:

> **Stop this process now.**

The existence of that last word does not settle every surrounding question.

The institution that activates a shutdown does not automatically need sole control over the evidence establishing the incident. The office stopping deployment does not automatically need unilateral authority to determine when its own emergency jurisdiction ends. The emergency decision does not automatically determine whether preserved state should later be deleted.

Restoration can have its own authorization.

Review can occur elsewhere.

Evidence can remain independently preserved.

This separation is useful for the same reason California is already building independent verification around the developers themselves.

Governor Newsom signed Senate Bill 813 and Assembly Bill 1405 on September 9, establishing frameworks for independent verification organizations and registered artificial-intelligence auditors rather than leaving every relevant safety claim inside the company being assessed.

The same structural question returns at shutdown.

-   Who gets to say that the dangerous thing has stopped?
-   Who gets to say it can restart?

Those do not have to be the same answer.

* * *

## Do Not Let the Dead System Keep Its Keys.

There is one last technical indignity.

> The model stops. Its **authority** does not.

Imagine a system had permission to submit instructions into another service.

The artificial-intelligence process is now offline.

But its old credentials still authenticate.

Or an earlier output has already entered an automated workflow.

Or a downstream system treats a stored classification as an instruction until somebody explicitly withdraws it.

The intelligence is gone. The consequence path is still open.

This is the technical version of a dead office whose old signature remains valid.

A useful shutdown audit therefore has to follow the authority farther than the model process itself.

What credentials were issued? What pending actions remain? What receiving systems still recognize the model or its operator? What automated consequences survive its absence? Which permissions need revocation? Which records need preservation precisely because the live system is no longer there to explain what happened?

The test ends when the specified capability can no longer reach the world through the paths included in the shutdown claim.

Then the switch has actually killed something.

* * *

## The Ruling.

California has commissioned work on a frontier-model kill switch whose efficacy would be independently verified on an ongoing basis. That is one specific safety problem: whether an identified artificial-intelligence capability can actually be interrupted.

Keep that problem specific.

Define what stops. Test the real control path. Verify the result independently.

Follow the shutdown through credentials, tools, deployments, and downstream consequences far enough that **off** describes the claimed capability rather than one screen in the laboratory.

Then ask the separate question.

> What depended on it?

That is where **resolvability** begins.

The goal is not to make shutdown painless. An emergency may require accepting serious disruption.

The danger appears when years of accumulated dependence quietly turn the cost of shutdown into a practical veto against using the authority everyone still claims to possess.

![](https://storage.ghost.io/c/20/43/2043f11a-6ae3-404c-bb28-01fce8d9ac88/content/images/2026/09/image-176-1.png)

> **A kill switch can work perfectly and become unreachable.**
