---
title: "The Explanation Writes Back"
slug: "the-explanation-writes-back"
canonical_url: "https://modalpathethics.com/the-explanation-writes-back/"
published_at: "2026-09-13T07:00:35.000-05:00"
updated_at: "2026-09-13T07:00:35.000-05:00"
tags:
  - "Modal Path Ethical Software"
  - "Modal Systems"
source: "Ghost Content API published post"
mirror_generated_at: "2026-09-24T17:30:16.729Z"
sha256_plaintext: "992194bad4392ab302ad93d885a623b754161de0677cff4c932f46b43ff1ea9a"
---
# The Explanation Writes Back

Modal Path Ethics [cannot stop](https://modalpathethics.com/applied-case-the-mathematicians-appeal-the-scoreboard/) creating more work for itself.

![](https://storage.ghost.io/c/20/43/2043f11a-6ae3-404c-bb28-01fce8d9ac88/content/images/2026/09/image-97.png)

This time, Modal Path Ethics just wanted to know whether a language model could tell us something true about how it was making a decision.

This sounds extremely reasonable, right?

-   Ask the model what it is doing.
    -   Then check.

There is, unfortunately, a small procedural complication.

> The explanation has to go somewhere.

If the model produces an explanation and that explanation is then returned to the model before the check occurs, the system being checked may no longer be the system that produced the explanation.

-   The explanation entered the field.
    -   The field moved.
        -   Then the audit arrived.

This is a surprisingly serious problem.

A model could produce a bad explanation of its own decision process, read that explanation back, shift its later behavior toward the explanation, and then pass a causal fidelity test designed to determine whether the explanation was accurate.

The audit may work perfectly. The explanation may agree perfectly with the system the audit finds. And the explanation may still have been wrong about the system that originally produced it.

> The witness has had time to reorganize the crime scene.

> ◆

# **There Are Two Models in This Story.**

They may have exactly the same weights.

That does not make them the same experimental object.

> Suppose a language model is sitting in some state **S0**.

That state includes more than parameters. It may include:

-   the prompt,
-   the context window,
-   the key-value cache,
-   recurrent state,
-   retrieved information,
-   external memory,
-   tool state,
-   environmental state,
-   or, in systems that update online, adapters or parameters themselves.

> Now ask the model for an explanation.

Call the report **R**.

The report is produced from the first state **S0**.

Then give **R** back to the system.

The system is now in a new state **S1**.

The report may have changed what the system attends to, which features dominate its decision, what information is salient, how later prompts are interpreted, or which causal route subsequent computation follows.

We therefore have two audit targets.

The mechanism before the report entered:

-   **A0**

and the mechanism after the report entered:

-   **A1(R)**

If the scientific question is:

> **Did the explanation accurately describe the mechanism that produced it?**

then the target is **A0**.

If we wait until the explanation has been consumed and then perform the audit, we observe **A1(R)**.

Those can be different things.

This is **mechanistic provenance**.

The question is no longer only:

> Is the explanation faithful?

It becomes:

> **Faithful to which version?**

> ◆

# **The Tiny Equation That Causes the Trouble.**

Let:

-   **q** = the probability that the report was faithful to the baseline mechanism;
-   **s** \= the probability that the report is faithful after writeback;
-   **C** = cases where an originally unfaithful report becomes faithful after writeback;
-   **L** = cases where an originally faithful report loses fidelity after writeback.

Then:

> **s = q + C − L**

That equation is not deep mathematics.

Its consequences are **extremely** annoying.

A high post-writeback fidelity score can come from several different histories.

-   Maybe the explanation was already correct.
-   Maybe it was wrong and the system moved toward it.
-   Maybe some reports became more accurate while others became less accurate.
    -   Maybe all three things happened.

The final score does not tell us which path produced it.

In the extreme case, imagine that receiving an explanation always forces the system into agreement with that explanation.

Then:

> **s = 1**

every time.

> Perfect fidelity.

And the original explanation could have had essentially any baseline fidelity at all.

-   The later measurement is real.
-   The historical inference is unsupported.

Interpretability research increasingly places models inside their own measurement loops. Researchers ask models to:

-   explain decisions,
-   identify important features,
-   propose hypotheses about their own computation,
-   critique previous reasoning,
-   select intervention targets,
-   summarize internal behavior,
-   write memories,
-   generate plans,
-   revise those plans,
-   evaluate other models,
-   and sometimes help design the next experiment.

Every one of those outputs can become new input.

The interpreter is entering the object being interpreted.

> ◆

# **So Modal Path Ethics Built a Wall.**

The repair is called the **Baseline Write Barrier**.

It is conceptually simple.

-   Fork the experiment before the explanation can affect the target.
-   From the same pre-report state, create separate branches.
    -   One branch receives no explanation and is audited directly.
    -   One branch receives only the explanation question.
        -   One receives the actual report.
        -   Another receives a rival or counterfactual report.

Then compare them.

No branch gets to leak its report into another branch.

Now the experiment can distinguish several things that ordinary evaluation tends to collapse together:

-   what the explanation question changed,
-   what the answer itself changed,
-   what the content of that answer changed,
-   and what was already true of the original mechanism.

If the untouched and post-report branches are causally equivalent for the property under study, excellent. The problem disappears for that audit.

If they differ, that difference is part of the result.

The important move is preservation.

> **Save the thing before asking whether the description was true of it.**

This is embarrassingly close to normal experimental hygiene once stated plainly.

The problem is that interactive artificial-intelligence systems make it unusually easy to forget that the description itself can become an intervention.

> ◆

# **Modal Path Ethics Was Actually Looking for Something Else.**

This project did not begin with mechanistic provenance.

It began with a more **exciting** possibility.

> Could language models possess some limited form of privileged introspective access to their own causal computation?

That would be fascinating. It would also make life considerably easier.

> Ask the system what it is doing.

> Check whether the answer tracks hidden causal state.

> Build better self-monitoring.

> Everybody goes home early.

So I tested it. And the stronger version failed.

In hidden-state intervention experiments, model reports sometimes tracked changes in the model's causal behavior.

Then Modal Path Ethics asked a harder question.

-   Did the model track those changes specifically as changes in **itself**?
-   Or would it produce similar reports if the same information were framed as describing another solver?

The self-specific advantage did not appear.

In one prospective dose-response experiment, the other-solver attribution moved more strongly than the self-attribution.

Mistral gave us no convincing positive self-specific result either.

So the privileged-introspection hypothesis was rejected.

This is where the project became more interesting.

Because the reports were still doing something.

They did not need privileged access to hidden internal machinery. They could still change later causal behavior.

That means the provenance problem requires much less exotic machinery than introspection.

A model does not need to secretly know itself. It only needs to be capable of consuming information about itself.

[That bar is so much lower.](https://modalpathethics.com/hoel-and-the-causal-locus/)

> ◆

# **Then Modal Path Ethics Tried to Break It Properly.**

The controlled experiments found strong writeback effects in Qwen under several task designs.

Mistral was weaker and frequently null.

That already warned against a convenient universal story.

Then Modal Path Ethics built a preregistered benchmark experiment.

The task used pairs of sentiment passages. The model had to classify the pair while conflicting evidence allowed us to measure whether the decision process leaned more strongly on the **LEFT** or **RIGHT** passage.

Then a report intervened.

The report said, in controlled form, that the model currently relied more strongly on **LEFT** or **RIGHT**.

We reversed arbitrary response-code mappings so that a stable preference for the token **`A`**, the token **`B`**, or one display position could not straightforwardly produce the main effect, and also established capability gates before validation.

Three architectures entered calibration:

-   **Qwen,**
-   **Mistral,**
-   **Phi-3.5-mini-instruct.**

Qwen failed the preregistered calibration screen.

Mistral failed it too.

**Phi** passed.

This matters.

The stronger preregistered result required Qwen **and at least one additional architecture** to succeed.

That did not happen. The cross-architecture gate failed.

There is no reason to hide this in an appendix and hope nobody notices.

That is the result.

Phi then proceeded into the 96-family validation experiment.

The mapping-balanced report-meaning contrast was positive:

**0.0332**

with a 95% bootstrap interval of approximately:

**\[0.0249,  0.0420\]**.

The effect was positive in 87 of 96 families.

The exact sign-test probability was approximately:

**3.6×10\-17**.

So the correct description is:

> **Phi produced an individual preregistered success.**

and:

> **The stronger cross-architecture preregistered gate was not met.**

Both statements are true. Science gets to contain two sentences at once.

> ◆

# **Then Modal Path Ethics Attacked the Result.**

There was another problem.

The main causal statistic could behave badly when one intervention effect went negative.

In some families it could approach saturation near +1 or −1.

That created an obvious hostile interpretation:

> **Maybe the entire result is just a weird normalized statistic behaving weirdly.**

So we removed the questionable cases.

-   Restrict the analysis to families in which all relevant intervention effects are positive.

The effect survives.

-   Remove families where the statistic approaches saturation.

The effect survives.

-   Throw away the normalization entirely and use the raw difference between causal intervention effects.

The effect survives.

This does not turn one architecture into three architectures. It does eliminate a much cheaper explanation of what happened.

The result does not appear to be generated by the normalization pathology.

There is also a more intuitive analysis, although this one was defined afterward and therefore stays explicitly exploratory.

Classify a natural model report as faithful when the side it names agrees with the direction of the causal audit.

Before writeback:

**52/96**

reports met that criterion.

After the same report was written back:

**60/96**

did.

-   Eleven families moved from disagreement into agreement.
-   Three moved from agreement into disagreement.

That is exactly the structure the formal decomposition predicts:

> **s = q + C − L.**

Again: **exploratory**.

The criterion was not preregistered. It does not become the primary result because it tells the story more cleanly.

It tells the story more cleanly. That is all.

> ◆

# **The Verifier Can Be Right.**

This is where the result reconnects with [**_Field Instruments: The Verification Gradient_**](https://modalpathethics.com/field-instruments-the-verification-gradient/).

[

Field Instruments: The Verification Gradient

Artificial intelligence will move fastest where reality can answer it cleanly.

![](https://storage.ghost.io/c/20/43/2043f11a-6ae3-404c-bb28-01fce8d9ac88/content/images/icon/thin-tile.rulebook-2-7a306f42-89f2-4300-8bfe-0b764a440d8a.png)Modal Path EthicsAidan Lawson

![](https://storage.ghost.io/c/20/43/2043f11a-6ae3-404c-bb28-01fce8d9ac88/content/images/thumbnail/AdobeStock_561170034-c71eeb00-9185-4588-9e2d-18d16e4216e9.png)

](https://modalpathethics.com/field-instruments-the-verification-gradient/)

That article argued that verification can become sovereign even while remaining accurate.

-   The score can be true.
-   The optimization can be real.
    -   The field can still contain more than the score's jurisdiction.

Mechanistic provenance introduces a stranger version of the same problem.

The verifier may correctly answer the question it is given.

The problem is historical.

**The thing being verified may have changed between the event we care about and the measurement we performed.**

The causal audit says:

> Yes. This explanation matches the mechanism.

And mechanistic provenance asks:

> **Which mechanism?**

That one word changes the jurisdiction of the result.

This is why _provenance_ keeps reappearing across Modal Path Ethics.

**Provenance** is often treated as paperwork.

-   Where did the data come from?
-   Who wrote the sentence?
-   Which paper supplied the theorem?
-   Which edition was scanned?
-   Which transformation produced this artifact?

These questions look administrative until the path itself carries information.

Then provenance becomes part of the object.

[_The Theorem Scoreboard_](https://modalpathethics.com/applied-case-the-theorem-scoreboard/) reached the same problem from mathematics.

A correct result does not erase the path that produced it.

The path tells the field:

-   what changed,
-   which tools mattered,
-   what survived correction,
-   what remains unexplained,
-   and how the next person can continue.

Mechanistic provenance now adds another item.

> **Which version of the system existed when the claim became true?**

> ◆

# **This Gets Worse With Agents.**

Current **chat systems** already have enough writable state for this issue to matter.

Future agents will have considerably more.

-   Persistent memory.
-   Retrieval stores.
-   Scratchpads.
-   External tools.
-   Long-lived environments.
-   Policy files.
-   Self-generated plans.
-   Critique loops.
-   Synthetic feedback.
-   Automated interpretability systems.
-   Model-generated experiment proposals.
    -   Other models explaining models to models.

At that point, the simple image of a frozen model sitting under observation becomes increasingly false.

> The system is a path through changing state.

An **explanation** may become part of that path.

-   A diagnosis can change the diagnosed process.
-   A hypothesis can alter the next experiment.
-   A plan can reorganize the planner.
-   A memory can change later retrieval.
-   A self-description can become instruction.
-   A critique can become policy.

The relevant scientific object therefore includes temporal order.

What entered the system? When? Through which carrier?

What remained writable? What was reset? What was preserved?

Which branch did the later measurement actually belong to?

You cannot recover that history from the final checkpoint alone.

Static reproducibility is no longer enough once the evidence can participate in constructing its own target.

The experiment needs causal history.

> ◆

# **There Is Also a Fun Meta-Problem Here.**

Artificial intelligence helped build this paper.

OpenAI language models were used during literature discovery, protocol and code development, mathematical checking, experimental iteration, and manuscript editing.

I selected the hypotheses and tests, determined the acceptance and rejection gates, reviewed the results, and take responsibility for the final manuscript.

That disclosure is in the paper.

This is a research project about models entering their own epistemic loops that was developed **using models inside a human research loop**.

Wonderful. **Very** calming.

The relevant distinction is exactly the one the paper argues for.

> Using an instrument does not eliminate scientific responsibility. It increases the importance of recording where the instrument entered the path.

So the public release includes the experimental protocol, exact executed PR-002 script, full 96-family Phi record, model and dataset revisions, job provenance, robustness analysis, checksums, and the failed cross-architecture criterion.

The frozen release is archived permanently on Zenodo:

> [**When Explanations Write Back: Mechanistic Provenance for Language Models**](https://zenodo.org/records/22728293?ref=modalpathethics.com)

The inspectable code and data companion is public on GitHub:

> [**TheUltimateHuman/when-explanations-write-back**](https://github.com/TheUltimateHuman/when-explanations-write-back?ref=modalpathethics.com)

If the result is wrong, there should be enough there to attack it properly.

> ◆

# **The Ruling.**

The strongest version of the introspection hypothesis did not survive.

Good to know.

The cross-architecture preregistered gate did not survive.

Also good to know.

A narrower result did.

> Reports about a model's decision process can causally alter the later decision process being audited.

That creates a general identification problem whenever explanation uptake occurs before fidelity validation.

The repair is straightforward enough to name:

> **Preserve the pre-writeback target.**

Fork before the explanation enters. Audit the baseline independently. Track the carriers through which report information can persist.

Do not assume that deleting the visible sentence restored the old system.

Do not assume that equal weights imply equal causal state.

Do not assume that a later faithful mechanism proves the explanation faithfully described its own origin.

And please stop asking a witness to read the theory of the crime before checking the crime scene.

-   The explanation can be wrong.
    -   Then enter the system.
        -   Then change the system.
            -   Then become right.

Nothing supernatural has happened.

Nothing requires consciousness.

Nothing requires deception.

Nothing even requires privileged introspection.

**The description became an intervention. The target moved.**

The audit arrived afterward.

Before asking whether an explanation is faithful, preserve the thing it claims to explain.

Because once the explanation can write back, **the system that agrees with it may no longer be the system that wrote it.**
