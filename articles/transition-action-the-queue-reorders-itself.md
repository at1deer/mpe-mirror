---
title: "Transition Action: The Queue Reorders Itself"
slug: "transition-action-the-queue-reorders-itself"
canonical_url: "https://modalpathethics.com/transition-action-the-queue-reorders-itself/"
published_at: "2026-08-27T06:15:47.000-05:00"
updated_at: "2026-08-27T06:15:46.000-05:00"
tags:
  []
source: "Ghost Content API published post"
mirror_generated_at: "2026-09-02T04:59:13.780Z"
sha256_plaintext: "325dc63bed9d0a49d51bacf582788a550ae497781157942b69ff3062544c7750"
---
# Transition Action: The Queue Reorders Itself

> Transition Action is the technical wing of Modal Path Ethics: a series about technologies crossing from research, prototype, or theory into reachable action. Each entry begins with a live technical event and asks what has changed in the field. This is not a futurist roundup.

-   What can now be built, tested, measured, preserved, reconstructed, or shared that was not reachable before?
-   What physical process carries the new action?
-   Which old access bottlenecks have become unnecessary?
-   What new failure conditions enter with the new representation?

> Transition Action is a field inspection at the moment a capability starts to move.

* * *

This week in _Transition Action_, Microsoft has taught the security queue to reconsider.

-   An incident is **sitting there**.
    -   Another alert arrives.

Five seconds later, the incident may have a different priority.

Nobody dragged it upward.

Nobody changed a dropdown from **Medium** to **High**.

> The queue looked again.

Microsoft calls the production system **Adaptive Incident Prioritization**. It runs behind Defender Queue Assistant and is already operating across tens of thousands of customer organizations. When an incident is created or updated, the system can rescore it with a median latency of [about five seconds](https://arxiv.org/abs/2607.16963?ref=modalpathethics.com).

A security queue has become responsive to its field.

This is useful, and also going to create several completely new ways to annoy the security queue.

* * *

## The Old Queue.

Security operations centers already have ranking systems because somebody has to go first.

There may be hundreds of active incidents.

The analysts do not acquire hundreds of simultaneous mornings.

So incidents get sorted.

-   Recency is easy.
-   Severity is better.
-   Alert count can help.
    -   All three are blunt.
-   The newest incident may be routine.
-   A severe incident may have received its severity from a noisy upstream detector.
-   The incident containing twenty alerts may just contain twenty versions of the same thing.

Microsoft's new system replaces some of that coarse ordering with a score assembled from the incident itself and from the wider security environment around it.

The important change is where priority lives.

It does not have to stay attached to an incident as one permanent label.

It can be rebuilt.

* * *

## Microsoft Has Just Removed the Search From a Search Engine.

Adaptive Incident Prioritization borrows from **BM25**, a family of ranking methods associated with information retrieval.

Normally there is a **query**.

There are _documents_.

The system asks _which documents_ best answer the **query**.

Microsoft has taken this general structure and created a security version where the query is basically:

> **What should the analyst look at first?**

Each incident becomes a collection of components.

-   Detector identities.
-   MITRE ATT&CK techniques.
-   Severity.
-   Products.
-   Threat intelligence.
-   Critical assets.
-   Threat scenarios.
-   Other security signals.

The model looks at how strongly those components appear inside the incident and how common or unusual they have been across a rolling thirty-day regional incident corpus. A common component contributes less distinguishing information. A rarer one can contribute more.

The corpus refreshes daily.

The incident can be rescored whenever new evidence arrives.

So the same signal does not have to carry the same importance forever.

-   Its surrounding field changed.
-   The queue can change with it.

That is the move.

* * *

## Stop Tagging the Alert.

There is an obvious problem.

-   If unusual things receive more weight,
    -   an extremely enthusiastic security product can become very interesting by describing its alert in extraordinary detail.

Microsoft has seen alerts carrying as many as **94 MITRE ATT&CK tags**.

At ninety-four MITRE tags, the attacker may still be inside the network.

It no longer matters.

The metadata has already captured the Pentagon.

Adaptive Incident Prioritization therefore limits how much one alert can gain from this behavior.

Within each component family, only the three rarest components are retained for scoring. That choice came from production data: across more than twenty-three million observed alerts, 95 percent carried no more than three MITRE tags.

This lets an incident contain several genuinely useful signals without allowing one heavily decorated alert to rise through administrative mass.

Microsoft also applies bounded expert priors.

Security researchers can raise or lower the contribution of known component types, generally within a range of 0.1× to 2×. The priors are especially useful for suppressing known test, sample, low-value, or noisy components.

So:

-   Rare can matter.
    -   Rare does not automatically mean dangerous.
-   Lots of labels can matter.
    -   Lots of labels do not automatically mean important.

This machine has already had to learn distrust of its own paperwork.

* * *

## The Number Is Lying a Little.

Defender presents analysts with a friendly priority score from 0 to 100.

The real ranking does not stop at 100.

Adaptive Incident Prioritization produces an uncapped raw score.

Microsoft caps and rounds the number shown to the analyst because **143.8217** is just not necessarily improving anyone's morning.

The queue still uses the uncapped score underneath.

So two incidents may both display:

> **100**

while one remains above the other.

This is intentional. The visible number is the dashboard.

The raw number is still driving.

Only a small fraction of sampled customer queues contain an incident that reaches the cap, so this is not happening everywhere. It is still a neat reminder that interfaces compress machines. Sometimes **100** means:

> please stop asking the screen for more digits it's not gonna change anything.

* * *

## The Reason Can Travel With It.

The scoring system has another nice property.

Because the score is assembled from additive component contributions, Defender can show analysts the actual factors that raised or lowered the incident's priority.

That is stronger than asking another model to generate a plausible explanation from the ranking after the ranking has already happened.

The displayed factors are part of the score's own path.

The queue moves and can carry some account of why it moved.

Microsoft reports strong agreement between the system's top-ten rankings and expert security judgments across one thousand customer organizations, substantially outperforming simple severity ordering in that evaluation. It also reports higher analyst interaction with incidents surfaced by the new ranking after deployment.

That second result needs a small leash.

-   The incidents were ranked higher.
    -   Higher incidents are easier to see.

So the telemetry shows that analyst attention changed.

It does not prove that every extra click was better security work.

Still:

-   the queue moved;
-   the humans followed.

The ranking is [active](https://modalpathethics.com/field-instruments-active-information/).

* * *

## New Capability, New Attack Surface.

Now for the fun part.

-   The system reads the background.
-   So an attacker may eventually try to influence the background.

Microsoft explicitly discusses the possibility.

> An adversary could avoid components known to carry strong ranking weight.

More strangely, an attacker might try to flood some component across enough activity that it becomes less rare in the rolling corpus and therefore less informative to the prioritizer.

The attacker used to evade the detector. Now the attacker may also want to evade the **attention allocator**. Or poison its sense of normal.

That is a new failure condition created by the new capability.

Microsoft counters this with multiple component families, contribution caps, continuous rescoring, monitoring for frequency shifts, versioned model artifacts, and rollback support.

The queue learned to look around.

The world immediately became another place to hide things.

* * *

## What This Makes Reachable.

-   A security incident can now change priority as new evidence enters instead of waiting for somebody to reconsider its category manually.
-   Priority can reflect changing rarity across the wider incident field.
-   Known noisy components can be suppressed without rebuilding the whole system.
-   One absurdly over-tagged alert cannot win by paperwork alone.
-   Analysts can see factors that actually contributed to the score.
-   The ranking can be versioned, monitored, and rolled back.
-   Microsoft has also released expert priority labels covering 499 organization queues and 9,980 incidents through an extension of the public GUIDE dataset, giving outside researchers a real queue-ranking problem to work on.
    -   The exact production prior table remains private.
        -   This is security software.

The interesting thing happened before that boundary.

The queue stopped treating priority as a fixed sticker.

An incident changes.

The surrounding security field changes.

The priority changes with them.

> **Priority can now be reconstructed continuously from the field instead of stored once as a label.**

That makes the queue more responsive. It also creates new things to defend: the rarity estimates, the component weights, the rolling corpus, and the path through which a changed score becomes changed human attention.

Microsoft has given the queue a better way to reconsider.

Now somebody has to watch what it learns to consider normal.

That is the official _Transition Action_.
