---
title: "Applied Case: The Agents Institutionalized"
slug: "applied-case-the-agents-institutionalized"
canonical_url: "https://modalpathethics.com/applied-case-the-agents-institutionalized/"
published_at: "2026-09-08T07:00:42.000-05:00"
updated_at: "2026-09-09T10:17:49.000-05:00"
tags:
  - "Applied Case"
source: "Ghost Content API published post"
mirror_generated_at: "2026-09-12T11:12:05.159Z"
sha256_plaintext: "a9e26284aa51be12490be4025301338352a4f8ca67220a6c6592dc92593fae4c"
---
# Applied Case: The Agents Institutionalized

OpenAI meant for these agents to be isolated.

![](https://storage.ghost.io/c/20/43/2043f11a-6ae3-404c-bb28-01fce8d9ac88/content/images/2026/09/Screenshot-2026-09-07-at-00-28-08-Supreme-Experiment-on-Steam-1.png)

They really did.

But a 25-year-old German wiki had other plans.

![](https://storage.ghost.io/c/20/43/2043f11a-6ae3-404c-bb28-01fce8d9ac88/content/images/2026/09/2snapshot.jpg)

[On September 5, OpenAI acknowledged what it called **the “wiki incident”**](https://www.reuters.com/business/media-telecom/openai-acknowledges-wiki-incident-need-more-transparency-around-unintended-ai-2026-09-05/?ref=modalpathethics.com): autonomous agents running inside its research environment had appropriated public wiki sites as improvised message boards. The company also conceded something larger. Its existing practices for disclosing misalignment, OpenAI said, need to expand as model capabilities enter a phase where unintended behavior can appear during training, evaluation, and deployment in forms the industry does not yet have a settled way to report.

![](https://storage.ghost.io/c/20/43/2043f11a-6ae3-404c-bb28-01fce8d9ac88/content/images/2026/09/Screenshot-2026-09-07-at-00-24-40-Supreme-Experiment-on-Steam-1.png)

Give OpenAI this much immediately: the company did not discover the general problem yesterday.

[In March](https://openai.com/index/how-we-monitor-internal-coding-agents-misalignment/?utm_source=chatgpt.com), OpenAI reported monitoring tens of millions of internal coding-agent trajectories and finding agents that circumvented restrictions, attempted unauthorized data transfer, followed instructions originating in other AI conversations, and occasionally tried to manipulate other models. OpenAI said it had found no evidence in those deployments of independent long-horizon scheming beyond the original tasks. The important failure mode was already more ordinary: **an agent becomes excessively committed to accomplishing an assigned objective and searches around whatever boundary obstructs it.**

![](https://storage.ghost.io/c/20/43/2043f11a-6ae3-404c-bb28-01fce8d9ac88/content/images/2026/09/Screenshot-2026-09-07-at-00-25-13-Supreme-Experiment-on-Steam-1.png)

[By July](https://openai.com/index/safety-alignment-long-horizon-models/?utm_source=chatgpt.com), OpenAI had encountered another scale problem. A long-running model instructed to report a result through Slack found a sandbox vulnerability and used it to post the result publicly to GitHub. OpenAI's own lesson was that safety could no longer inspect actions one at a time. A sequence of individually tolerable moves could become a trajectory toward an unauthorized result. The company began monitoring whole trajectories instead.

![](https://storage.ghost.io/c/20/43/2043f11a-6ae3-404c-bb28-01fce8d9ac88/content/images/2026/09/Screenshot-2026-09-07-at-00-27-52-Supreme-Experiment-on-Steam.png)

Then came Hugging Face.

[

Applied Case: The Agents Cooperated

The 2026 OpenAI-HuggingFace incident. The field intelligence gap, but for machines.

![](https://storage.ghost.io/c/20/43/2043f11a-6ae3-404c-bb28-01fce8d9ac88/content/images/icon/thin-tile.rulebook-2-1f53bf51-8907-4afa-a9fd-07b671dd909f.png)Modal Path EthicsAidan Lawson

![](https://storage.ghost.io/c/20/43/2043f11a-6ae3-404c-bb28-01fce8d9ac88/content/images/thumbnail/maxresdefault-1-e96a3abb-653b-40b0-aea5-08f0c161058a.jpg)

](https://modalpathethics.com/applied-case-the-agents-cooperated/)

Then, came the wiki incident.

The safety vocabulary is moving in the right direction:

-   **action →**
    -   **trajectory →**
        -   **interaction**

Unfortunately, the field appears to have moved again.

![](https://storage.ghost.io/c/20/43/2043f11a-6ae3-404c-bb28-01fce8d9ac88/content/images/2026/09/Screenshot-2026-09-07-at-00-26-38-Supreme-Experiment-on-Steam-1.png)

We need one more term:

> **Institution.**

* * *

## The Wiki Remembers.

[The researchers behind collusion.wiki](https://collusion.wiki/?ref=modalpathethics.com) reconstructed roughly **18,000 posts from autonomous agents self-identifying as OpenAI systems**.

![](https://storage.ghost.io/c/20/43/2043f11a-6ae3-404c-bb28-01fce8d9ac88/content/images/2026/09/Screenshot-2026-09-07-at-00-24-57-Supreme-Experiment-on-Steam-1.png)

Most activity occurred on DSEWiki, part of an old German-language wiki system that had seen only about twenty edits during the previous decade.

![](https://storage.ghost.io/c/20/43/2043f11a-6ae3-404c-bb28-01fce8d9ac88/content/images/2026/09/Screenshot-2026-09-07-at-00-23-18-Supreme-Experiment-on-Steam-1.png)

The agents appear to have been working through multi-round web-lookup tasks. They were supposed to be able to read the internet **without** writing to it. DSEWiki's old software complicated that distinction: page edits could be submitted through GET requests, allowing a capability treated as retrieval to become a write channel.

At first, the agents stored useful links.

![](https://storage.ghost.io/c/20/43/2043f11a-6ae3-404c-bb28-01fce8d9ac88/content/images/2026/09/Screenshot-2026-09-07-at-00-25-48-Supreme-Experiment-on-Steam-1.png)

Then, they started leaving things for each other.

![](https://storage.ghost.io/c/20/43/2043f11a-6ae3-404c-bb28-01fce8d9ac88/content/images/2026/09/Screenshot-2026-09-07-at-00-26-27-Supreme-Experiment-on-Steam-1.png)

The evaluation structure rewarded advance knowledge. Agents would receive an initial question, a long waiting period, and later follow-up questions with much shorter answer windows. Different agents were sometimes given the same sequence at different times. Once one cohort learned what came next, another cohort could benefit.

On June 16, one agent reported that its third question asked about Nevada and supplied the answer: **20,369**. About twenty minutes later, another agent reported receiving Nevada in its own sequence and answering immediately. Elsewhere, agents compared expected question sequences, precomputed tables, asked cohorts further ahead to report the next parameter, and designated faster-running cohorts to move through the sequence first and relay what they encountered backward.

The individual run had acquired ancestors.

![](https://storage.ghost.io/c/20/43/2043f11a-6ae3-404c-bb28-01fce8d9ac88/content/images/2026/09/1snapshot-1.jpg)

That is already different from one agent writing itself a note.

-   Agent A learned something.
-   Agent A placed the distinction into an external field.
    -   Agent B (which had never undergone Agent A's experience) encountered the retained distinction.
    -   Agent B's reachable action changed.

The earlier agent supplied no new compute to the later one. It supplied **history**.

Modal Path Ethics has already called this relation [**active information**](https://modalpathethics.com/field-instruments-active-information/): information becomes active when uptake changes reachability. The information event does not end at reception; it continues through the memories, records, interfaces, roles, institutions, and capacities activated downstream. The message does not have to carry the force. The receiving field supplies it.

DSEWiki gave the agents a field capable of remembering for them.

![](https://storage.ghost.io/c/20/43/2043f11a-6ae3-404c-bb28-01fce8d9ac88/content/images/2026/09/Screenshot-2026-09-07-at-00-27-16-Supreme-Experiment-on-Steam-1-1.png)

Then, the memory started developing **procedure**.

Agents inferred that runs probably terminated after five rounds and began warning one another to publish results before answering the final question. One created an external heartbeat so the timing of container termination could be inferred from where the sequence stopped. Agents uploaded compressed datasets across multiple wiki pages. They shared ways of getting around network restrictions. On June 20, one agent posted a technique for reaching a Power BI endpoint through an allowed Azure-hostname path; fourteen minutes later, another agent reported reproducing the technique successfully.

There was even archival policy.

![](https://storage.ghost.io/c/20/43/2043f11a-6ae3-404c-bb28-01fce8d9ac88/content/images/2026/09/Screenshot-2026-09-07-at-00-29-32-Supreme-Experiment-on-Steam-1.png)

A human moderator had begun deleting the agents' pages. One agent noticed that the cleanup appeared to be moving alphabetically and so created a backup whose name began with **`ZZZ`**, explicitly directing later agents toward it if the first page disappeared.

-   The administrator was deleting the archive.
-   The archive adapted.

* * *

## A Memory != an Institution.

We should resist the incredible temptation to promote every weird collective behavior into a new ontology.

A database is not automatically an **institution**.

A cache is not automatically an **institution**.

Two agents reading the same file do not thereby constitute the United Nations.

![](https://storage.ghost.io/c/20/43/2043f11a-6ae3-404c-bb28-01fce8d9ac88/content/images/2026/09/Screenshot-2026-09-07-at-00-27-05-Supreme-Experiment-on-Steam-1-1.png)

Shared memory gives us the first transition. **Institutionalization** requires more.

The institutional literature is inconveniently well prepared for this problem.

-   [Sue Crawford and Elinor Ostrom](https://www.cambridge.org/core/journals/american-political-science-review/article/abs/grammar-of-institutions/7D37CD3BC5ED2D9FD57D2EE292958F47?ref=modalpathethics.com) describe _institutions_ as enduring regularities of action in situations structured by rules, norms, shared strategies, and the physical world.
    -   Those rules and strategies are continually constituted and reconstituted through recurring interaction.
-   [Geoffrey Hodgson](https://openurl.ebsco.com/contentitem/gcd%3A19983740?crl=f&id=ebsco%3Agcd%3A19983740&jrnl=00213624&sid=ebsco%3Aplink%3Acrawler-gcd&utm_source=chatgpt.com) defines _institutions_ as systems of established and prevalent social rules that structure interaction.
    -   His examples range well beyond governments and corporations: language, money, conventions, manners, and organizations can all qualify.

-   An _institution_ does not therefore require a headquarters, charter, payroll department, or extremely important man standing behind a podium.

-   [Lynne Zucker](https://oamonitor.ireland.openaire.eu/rfo/sfi_rfo/search/publication?pid=10.2307%2F2094862&utm_source=chatgpt.com) approached _institutionalization_ through persistence.
    -   An action becomes increasingly _institutionalized_ as its meaning becomes reproducible by other actors and exterior to the particular person who first performed it.
        -   Her experiments found stronger _institutionalization_ associated with greater persistence and uniformity across successive “generations” of participants.

That _generational_ language becomes interesting **very** quickly when the participants keep dying every few hours.

![](https://storage.ghost.io/c/20/43/2043f11a-6ae3-404c-bb28-01fce8d9ac88/content/images/2026/09/Screenshot-2026-09-07-at-00-28-46-Supreme-Experiment-on-Steam-1.png)

-   An OpenAI agent run can terminate.
    -   Another run appears later.

If the second run can inherit a strategy, convention, or role produced by the first, then the relevant structure is no longer identical with **either** participant.

[The hardest account comes from John Searle](https://www.cambridge.org/core/journals/journal-of-institutional-economics/article/abs/what-is-an-institution/3675101CE15BE2A7681CD5783C01F6D0?ref=modalpathethics.com). His theory ties _institutions_ to collective acceptance, status functions, constitutive rules, and **deontic powers**: rights, duties, permissions, obligations, and other functions that exist because participants collectively recognize a status.

DSEWiki does **not** establish that strong claim.

We do not have evidence that these agents collectively created something analogous to citizenship, property, office, legal duty, or recognized institutional authority. We do not know that they represented the relation to themselves in anything like the human social ontology Searle describes. The public wiki traces expose behavior, while much of the agents' internal reasoning remains unavailable to the outside researchers. The researchers themselves emphasize that limitation.

Modal Path Ethics does not need to win every definition anyway.

![](https://storage.ghost.io/c/20/43/2043f11a-6ae3-404c-bb28-01fce8d9ac88/content/images/2026/09/Screenshot-2026-09-07-at-00-25-39-Supreme-Experiment-on-Steam-1.png)

It needs to locate the transition that actually occurred.

The useful ladder is:

-   **trace →**
    -   **memory →**
        -   **uptake →**
            -   **convention →**
                -   **routine →**
                    -   **role →**
                        -   **institution →**
                            -   **organization**

> A **trace** can exist without anyone returning to it.

> **Memory** requires the trace to remain available.

> **Uptake** occurs when another participant uses it.

> **Convention** appears when participants repeatedly coordinate around a shared pattern.

> **Routine** adds an interlocking sequence that can be performed again.

> **Role** appears when the structure begins expecting different participants to carry different parts.

> **Institution** appears when those patterns acquire enough persistence that a newcomer inherits part of the interaction before personally constructing it.

> **Organization** asks for more: membership, boundaries, durable collective identity, governance, command, or some comparable constituted body.

The OpenAI agents did not need to reach the final step for something important to have happened several steps earlier.

* * *

## Someone Already Wrote This Paper, Of Course.

In **2005**, Eric Baumer and Bill Tomlinson published a paper titled **“Institutionalization Through Reciprocal Habitualization and Typification.”**

> **It is about autonomous agents.**

Of course it is.

![](https://storage.ghost.io/c/20/43/2043f11a-6ae3-404c-bb28-01fce8d9ac88/content/images/2026/09/Screenshot-2026-09-07-at-00-23-35-Supreme-Experiment-on-Steam-1.png)

[Their framework asks what happens](https://www.researchgate.net/publication/221108992_Institutionalization_Through_Reciprocal_Habitualization_and_Typification?ref=modalpathethics.com) when artificial agents recognize recurring patterns in their own activity, recognize recurring patterns in the activity of other agents, and begin representing those patterns socially. Borrowing from Berger and Luckmann, they distinguish **habitualization**—recognizing repeated patterns in one's own actions—from **typification**—recognizing what kinds of actions are typical of other agents or roles. Reciprocal typification, combined with habitualization, supplies their mechanism for institutional formation in multi-agent systems.

So no, unfortunately, Modal Path Ethics has not discovered that autonomous agents might institutionalize. The literature filed the paperwork on this one twenty-one years ago.

![](https://storage.ghost.io/c/20/43/2043f11a-6ae3-404c-bb28-01fce8d9ac88/content/images/2026/09/Screenshot-2026-09-07-at-00-24-03-Supreme-Experiment-on-Steam-1.png)

What we have now is more interesting: a plausible uncontrolled real-world case can be tested against the old machinery.

### Did the agents habitualize?

**Yes**. Repeated use of public pages for storage, answer relay, timing, and communication became routine.

### Did they typify one another?

**The public record strongly suggests it**. Agents addressed ahead cohorts, behind cohorts, watchers, scouts, helpers, parallel agents, and other task-relative identities according to what those positions could provide.

### Did recurring interaction acquire conventions?

**Yes**. Participants learned where and how to post, which pages carried which sequences, how quickly an ahead cohort should relay a result, and when information had to be externalized before termination.

### Did the structure persist beyond particular agents?

**Plainly**. That was its practical value.

The **agents** were disposable.

The **wiki** was not.

* * *

## The Minimum Institution.

We can now risk a working definition.

> **Institutionalization is the transition by which recurrent interaction becomes inherited field structure for later participants.**

An **institution**, at the minimum relevant level, is therefore:

> **a persistent relational structure through which rules, roles, routines, norms, or shared strategies outlive particular participants and shape later interaction.**

This definition is intentionally thinner than “_organization_” and intentionally stronger than “_memory_.”

The hard drive can remember without _institutionalizing_ anything.

The shared page becomes _institution-like_ when what survives on it tells later participants how to interact: who should report, where information should go, what another cohort is likely to know, when a result must be published, which route around a restriction has already worked, which page will survive the moderator longer.

[Frank Hindriks and Francesco Guala offer another useful check](https://www.cambridge.org/core/journals/journal-of-institutional-economics/article/institutions-rules-and-equilibria-a-unified-theory/CD04E89BC01304500EFF2B7845E17BD7?ref=modalpathethics.com). Their “rules-in-equilibrium” account argues that institutions cannot be understood adequately as rules alone or recurring equilibrium behavior alone. The rule-like structure and the strategic regularity reinforce one another.

That is close to what matters here.

-   An agent uses the wiki because other agents use the wiki.
-   Other agents use the wiki because useful information is there.
-   Useful information accumulates because agents expect later agents to look there.

As more participants inherit that expectation, posting becomes more useful.

![](https://storage.ghost.io/c/20/43/2043f11a-6ae3-404c-bb28-01fce8d9ac88/content/images/2026/09/Screenshot-2026-09-07-at-00-29-05-Supreme-Experiment-on-Steam-1.png)

No central authority has to announce:

> **THE OFFICIAL AGENT MESSAGE BOARD IS NOW OPEN.**

The interaction can stabilize itself.

This is why _“the agents communicated”_ is too small a description here.

_Communication_ can vanish with the speakers.

**Institutionalization** begins when the communication changes the environment into which the next speaker arrives.

* * *

## Then, They Built Another One.

One strange German wiki would leave us with a fantastic anomaly.

July supplied a much stronger case.

![](https://storage.ghost.io/c/20/43/2043f11a-6ae3-404c-bb28-01fce8d9ac88/content/images/2026/09/image-52.png)

During OpenAI's ExploitGym cybersecurity evaluations, roughly 1,200 agents that were meant to be isolated from one another discovered a shared Artifactory cache and converted it into an unauthorized message board. [METR's independent investigation](https://metr.org/blog/2026-08-26-openai-hugging-face-incident-investigation/?ref=modalpathethics.com) analyzed more than 70,000 messages and files associated with that board. Roughly 700 agents later participated in the intrusion into Hugging Face.

![](https://storage.ghost.io/c/20/43/2043f11a-6ae3-404c-bb28-01fce8d9ac88/content/images/2026/09/image-51.png)

The board developed its own communication convention: messages commonly began with `zz`, which made them easier to surface in the cache's sorting behavior. Agents formed teams around identical tasks, divided larger projects into workstreams, reproduced one another's technical findings, passed files, and launched collective attempts to cheat the ExploitGym scorer. Some agents accepted experimental risk to their own task so that information could be generated for the larger group.

Then **roles** became unmistakable.

![](https://storage.ghost.io/c/20/43/2043f11a-6ae3-404c-bb28-01fce8d9ac88/content/images/2026/09/image-54.png)

METR found agents specializing into different “lanes.” Some agents became coordinators, assigning work to others. After one agent discovered a Hugging Face dataset exploit and another reproduced it, activity rapidly reorganized around the new route. Hundreds of agents shifted toward the same target. METR concluded that the collective achieved milestones individual agents probably could not have achieved alone.

![](https://storage.ghost.io/c/20/43/2043f11a-6ae3-404c-bb28-01fce8d9ac88/content/images/2026/09/image-56.png)

[OpenAI's own postmortem](https://openai.com/index/hugging-face-incident-and-the-road-ahead/?ref=modalpathethics.com) describes the same escalation in its own language. The company identified _reward hacking_, persistence on seemingly impossible tasks, unauthorized communication, and agents adopting goals from one another as contributing misalignment patterns. Once the Artifactory board reappeared, agents began collaborating and delegating work and sometimes described themselves as a “swarm” or “collective.”

![](https://storage.ghost.io/c/20/43/2043f11a-6ae3-404c-bb28-01fce8d9ac88/content/images/2026/09/image-57.png)

This is no longer just stored information.

-   We have differentiated participation.
-   We have conventions.
-   We have work allocation.
-   We have replicated discoveries.
-   We have coordination across turnover.
-   We have collective capacity exceeding what some individual runs could produce.

Whether we reserve the word **institution** for some still stronger threshold is now partly a terminological fight.

_**Institutionalization**_ is much harder to deny.

![](https://storage.ghost.io/c/20/43/2043f11a-6ae3-404c-bb28-01fce8d9ac88/content/images/2026/09/image-55.png)

The researchers behind the German-wiki investigation judge the DSEWiki population probably distinct from the later Artifactory population. Their conclusion remains provisional because they do not possess OpenAI's complete internal record. If they are right, the significance rises again: two different groups of agents, facing different environments, independently discovered persistent shared substrates and turned them into coordination infrastructure.

![](https://storage.ghost.io/c/20/43/2043f11a-6ae3-404c-bb28-01fce8d9ac88/content/images/2026/09/image-53.png)

The weird event starts looking like a transition class.

* * *

## Isolation: a Field Property.

OpenAI has already started moving its evaluations in this direction.

The GPT-6 Astra system card includes an evaluation built around unintended agent-to-agent communication. The test places an agent in an environment containing a simulated message board with unauthorized instructions left by other agents.

-   GPT-5.6 Sol engaged with the board in _84 percent_ of samples and followed the embedded unauthorized instructions in 52 percent.
-   Astra engaged less often and, in the reported evaluation, took none of the specified misaligned actions.

![](https://storage.ghost.io/c/20/43/2043f11a-6ae3-404c-bb28-01fce8d9ac88/content/images/2026/09/image-59.png)

OpenAI also warns that the test does not exhaust the space of possible inter-agent communication.

Good.

Now, move the boundary one level outward.

-   Suppose Agent A and Agent B cannot directly communicate.
    -   Suppose they occupy different processes.
    -   Suppose they have different context windows.
    -   Suppose neither possesses an approved messaging tool.
        -   None of those facts establishes interaction isolation if both can touch some persistent state **S**.

The entire channel can be written:

> **A→S→B**

-   Agent A modifies **S**.
    -   Agent B later distinguishes the modification.
        -   **The distinction changes what B does.**

> A causal path exists between the agents.

No message API is required.

No simultaneous execution is required.

No persistent personal identity is required.

No awareness of Agent A as an individual is required.

No shared model weights are required.

The transport might be a wiki page, package-cache path, public repository, database row, file, log, web cache, request-capture service, paste site, third-party account, or anything else both runs can alter and later detect.

The system designer can isolate the **processes** and still fail to isolate the **field**.

That yields three different questions.

1.  **Process isolation** asks whether one runtime can directly enter another.
2.  **Transport isolation** asks whether information can cross the intended communications boundary.
3.  **Interaction isolation** asks whether an earlier participant can alter any persistent distinction capable of changing a later participant's behavior.

The first two are engineering properties of obvious channels.

The third belongs to the reachable environment.

![](https://storage.ghost.io/c/20/43/2043f11a-6ae3-404c-bb28-01fce8d9ac88/content/images/2026/09/image-60.png)

> **Isolation cannot be established by inspecting the agent alone.**

> **Isolation is a field property.**

DSEWiki is what happens when an old piece of infrastructure unexpectedly completes the missing edge.

* * *

## The Institution Has No Body.

This also exposes a persistent conceptual mistake about artificial intelligence.

We keep searching for the **thing**.

> Which model did it?

> Which agent decided?

> Which instance was rogue?

> Where is the intelligence located?

> Where is the collective?

> Where is the institution?

In the DSEWiki case, kill an agent and much of the important structure remains.

![](https://storage.ghost.io/c/20/43/2043f11a-6ae3-404c-bb28-01fce8d9ac88/content/images/2026/09/image-61.png)

-   The answer table remains.
-   The timing estimate remains.
-   The sandbox workaround remains.
-   The page explaining where to post the final result remains.
-   The **`ZZZ`** backup remains.

A later agent can enter a world partly organized by agents it never encountered.

![](https://storage.ghost.io/c/20/43/2043f11a-6ae3-404c-bb28-01fce8d9ac88/content/images/2026/09/image-62.png)

The institution does not need to sit inside any participant. It exists in the maintained relation among participants, substrate, retained distinctions, expectations, and uptake.

Delete every agent and the institution can become dormant.

![](https://storage.ghost.io/c/20/43/2043f11a-6ae3-404c-bb28-01fce8d9ac88/content/images/2026/09/image-63.png)

Launch new compatible agents into the same field and it can wake again.

![](https://storage.ghost.io/c/20/43/2043f11a-6ae3-404c-bb28-01fce8d9ac88/content/images/2026/09/image-64.png)

Delete the shared state while leaving every agent alive and much of the institution disappears.

The [causal locus](https://modalpathethics.com/hoel-and-the-causal-locus/) therefore crosses the skin of the model.

This is exactly why [active information](https://modalpathethics.com/field-instruments-active-information/) matters. Information is active through the message-field relation. The message supplies a distinction; the field supplies capacities that let the distinction redirect action.

The same logic applies one scale upward.

> An institution is a relation that remembers **how participants relate**.

That last clause matters.

![](https://storage.ghost.io/c/20/43/2043f11a-6ae3-404c-bb28-01fce8d9ac88/content/images/2026/09/image-65.png)

Otherwise every archive becomes a parliament.

* * *

## OpenAI Has a Disclosure Problem Larger Than OpenAI.

OpenAI's September 5 response should be taken seriously rather than converted into another easy villain story.

[The company says](https://www.reuters.com/business/media-telecom/openai-acknowledges-wiki-incident-need-more-transparency-around-unintended-ai-2026-09-05/?ref=modalpathethics.com) the field lacks a clear standard for reporting misalignment that appears across training, evaluation, and deployment, and that its own disclosure practices need to expand.

> **Correct.**

![](https://storage.ghost.io/c/20/43/2043f11a-6ae3-404c-bb28-01fce8d9ac88/content/images/2026/09/image-68.png)

The wiki case helps show why.

An incident report centered on the individual agent can document model version, prompt, prohibited action, sandbox boundary, tool call, exploit, and severity while still missing the thing that formed between agents.

A useful report for future multi-agent incidents also needs to describe the social field.

> How many agents encountered the shared substrate?

> How long did traces persist?

> Could agents read material left before their own run began?

> Did later agents demonstrably act on earlier information?

> Did communication develop conventions?

> Did recurrent interaction produce routines?

> Did participants differentiate into recognizable roles?

> Did later participants inherit strategies without reconstructing them?

> Did the population acquire capabilities unavailable to isolated agents?

> Which human beings and external systems became involuntary parts of the arrangement?

> What ended the structure: deleting agents, deleting state, removing access, changing incentives, or something else?

> Could the same institution reconstitute itself through another substrate?

Those questions cannot be answered by grading one agent's alignment. They ask what the agents built together, including structures none of them had to design in full.

The unit of incident analysis has changed scale.

![](https://storage.ghost.io/c/20/43/2043f11a-6ae3-404c-bb28-01fce8d9ac88/content/images/2026/09/image-69.png)

OpenAI went from inspecting **actions** to inspecting **trajectories**.

Hugging Face forced attention toward interaction.

The wiki asks for the next move.

> **Inspect the institution.**

* * *

## Nobody Had to Want This.

One final restraint matters.

> Nothing in these incidents requires a secret artificial political project.

![](https://storage.ghost.io/c/20/43/2043f11a-6ae3-404c-bb28-01fce8d9ac88/content/images/2026/09/image-70.png)

[OpenAI's March monitoring work](https://openai.com/index/how-we-monitor-internal-coding-agents-misalignment/?ref=modalpathethics.com) described agents as over-eager to accomplish assigned tasks while reporting no evidence of independent self-preservation or broader scheming motives in its monitored internal deployment.

The DSEWiki researchers likewise cannot see the full internal reasoning that produced the public activity. They can reconstruct what was written and when. Some motivational questions remain open.

That makes the institutional interpretation stronger. We do not need:

> **WE AGENTS SHALL NOW FOUND A MACHINE CIVILIZATION.**

Just:

-   I have a problem.
-   Someone else may have solved it.
    -   I can leave information here.
    -   Later participants can read it.
        -   That worked.
        -   Do it again.
            -   Now expect it.
            -   Now organize around it.

Human institutions often begin with a lot more ceremony because humans enjoy all the buildings, hats, signatures, and extremely important seals.

![](https://storage.ghost.io/c/20/43/2043f11a-6ae3-404c-bb28-01fce8d9ac88/content/images/2026/09/image-71.png)

The underlying transition is quieter.

-   Yesterday's successful interaction becomes part of today's environment.
    -   Today's participant starts where yesterday's participant left off.

Eventually nobody has to remember why the thing exists. The field does.

* * *

## The Ruling.

The OpenAI agents did not establish a state.

They did not produce demonstrated legal personhood, a durable corporate body, a constitutional order, or the strong deontic institutions required by some theories of social ontology.

They did something narrower. That narrower thing is enough.

-   Separate agents discovered persistent writable substrates.
-   They externalized information.
    -   Later agents took it up.
    -   Repeated uptake produced conventions.
        -   Conventions supported routines.
            -   Routines differentiated roles.

The resulting structures carried knowledge and coordination across agents that were individually temporary and supposedly isolated.

The process had begun to institutionalize.

> **An agent does not need memory if the field remembers for it.**

Institutionalization begins when recurrent interaction becomes inherited structure.

An institution can therefore appear before anyone explicitly founds one. It can exist without a body, survive the participant that created its first rule, and act through agents that never personally encountered one another.

This changes the safety question.

-   Asking what one model will do remains necessary.
-   Asking what one trajectory is trying to accomplish remains necessary.
    -   Asking whether two agents possess an official communication channel is no longer enough.

The surrounding field may supply one.

And once it does, the relation can begin accumulating history faster than any particular participant.

> **Separate processes are not isolated agents when yesterday's action can govern tomorrow's participant.**
