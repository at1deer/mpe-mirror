---
title: "Proof-to-Theory Has Found Someone With a Better Computer"
slug: "proof-to-theory-has-found-someone-with-a-better-computer"
canonical_url: "https://modalpathethics.com/proof-to-theory-has-found-someone-with-a-better-computer/"
mirror_url: "https://mirror.modalpathethics.com/articles/proof-to-theory-has-found-someone-with-a-better-computer.md"
published_at: "2026-11-06T06:00:00.000-06:00"
updated_at: "2026-11-06T06:00:01.000-06:00"
tags:
  - "Proof-to-Theory"
  - "News"
authors:
  - "Aidan Lawson"
source: "Ghost Content API — published post"
mirror_generated_at: "2026-11-12T07:38:31.272Z"
mirror_generator_version: "2.0.0"
sha256_plaintext: "9e4c3ccb6ad0f88177dbb60027bd1e8ca50fd0fefd02285d8b71fa40083a752e"
---
# Proof-to-Theory Has Found Someone With a Better Computer

On November 5, TechCrunch published an article titled [_Axiom Math Wants to Keep AI Slop Out of Mathematics_](https://techcrunch.com/2026/11/05/axiom-math-wants-to-keep-ai-slop-out-of-mathematics/?ref=modalpathethics.com).

I have been attempting to do something related for the past six weeks, with Proof-to-Theory, five dollars in model calls, and a computer that has repeatedly informed me it would prefer to be doing anything else.

Unfortunately, Axiom Math has now entered the room.

On November 4, the company [announced](https://axiommath.ai/research/the-stacks-project-formalized/?ref=modalpathethics.com) a Lean formalization of the Stacks Project, a roughly 7,500-page reference covering enormous portions of modern algebraic geometry.

-   **Sixteen million lines of Lean.**

The week before, Axiom [announced](https://axiommath.ai/research/the-enormous-theorem-formalized/?ref=modalpathethics.com) a formalization of the classification of finite simple groups.

-   **Forty-three million more lines of Lean.**

That second project took _twenty-four days._

-   Axiom has engineers, mathematicians, purpose-built models, substantial funding, coordinated agent swarms, and apparently a computer capable of completing the tasks assigned to it.
-   I have been using Windows.

So I believe we have reached a natural transition point.

* * *

## Never Forget It.

Proof-to-Theory began because I gave a mathematician homework.

In September, Modal Path Ethics had been investigating Conjecture 8, a problem about synchronizing automata. I had produced a computer-assisted candidate proof, certificates, diagrams, reproducible checks, and enough supporting material to keep somebody busy for a while.

Then I sent it to a mathematician.

This was, in retrospect, an enormous amount of homework.

So I set out to repair the handoff.

It had become very obvious very quickly that a proof can establish a mathematical claim without making the underlying structure obvious. A machine can produce a certificate without identifying the useful idea. A paper can contain every necessary step while leaving the reader unable to recognize which steps will matter in the next problem.

So I began building a system to work backward from proof to mathematical understanding.

I called it **_Proof-to-Theory_**.

The early research had already taught the system some useful discipline: local evidence could not automatically become a global explanation, unsuccessful experiments had to remain unsuccessful, and a beautiful account of a missing proof obligation did not discharge the obligation.

Then I turned it loose on mathematics.

This was terrible for my hard drive.

* * *

## The Three Colors.

The first major external benchmark was Chair44, an aperiodic monotile.

The mathematical source already had a proof. Proof-to-Theory was asked to recover the essential mechanism without seeing a later human simplification.

It did this.

The system found the recursive structure, the forced grouping into larger copies, the reduction of a possible translational period, and the separate symmetry argument.

It also identified the place where the proof still needed a better human representation.

Then mathematician Chaim Goodman-Strauss arrived with three colors.

> Red, green, and blue.

The recursion became visible.

-   PTT had found the engine.
-   The mathematician had found the picture.

That was the first important result: Proof-to-Theory could sometimes identify which part of a mathematically valid construction remained difficult to understand without pretending it had already solved the explanation problem.

Then Qichao Wang produced an even better example in the original Conjecture 8 investigation.

Wang wrote a concise proof identifying the only pairs through which the relevant collision could occur, then explained why apparently shorter routes were blocked. The proof was small enough to carry mentally.

He also cited Modal Path Ethics.

Twice.

I was very pleased with this arrangement, **_especially_** the part where somebody else did the difficult mathematical exposition.

Proof-to-Theory had finally found its ideal workflow.

* * *

## The Computer Says No.

Naturally, things escalated.

Proof-to-Theory went through OpenAI's 166-page Navier–Stokes submission, recovered a useful architecture of the argument, and correctly reported that important explanatory and formal-verification obligations remained unresolved.

Then came PrimeGaps186.

This concerned OpenAI's claimed improvement to bounded gaps between primes and a substantial Lean proof package containing unresolved axiom dependencies.

Proof-to-Theory was supposed to investigate the mathematical obligations needed to make the result fully unconditional.

Instead, it attempted to launch the same verification task **321 times**.

Each attempt failed.

This computer did not have eight gigabytes of available disk space.

The research agent checked.

There were not eight gigabytes.

It checked again.

There were still not eight gigabytes.

And it continued this investigation for hundreds of turns, ultimately producing a 704-turn record in which the most thoroughly examined mathematical object was my own storage drive.

To its credit, later passes did get Lean running and establish some actual subresults. It also identified the missing bridge between the source's numerical certificate and the formal object that certificate needed to bound.

Zero of the 152 targeted numerical inequalities had been discharged.

* * *

## Seven Hundred Twenty-Two Manuscripts.

Then OpenAI released its fucking enormous mathematics collection.

Obviously, I decided to examine the entire thing at once.

PTT-OM-001 began on October 7.

The repository's frozen release contained 372 research families and 722 manuscripts. Proof-to-Theory completed eighty reconnaissance batches and indexed all 372 families.

It identified assumptions, proof dependencies, claimed mechanisms, unresolved formal obligations, and possible ways to interrogate the arguments.

That was a substantial piece of work.

That was also a reconnaissance atlas, not 372 completed mathematical explanations.

The edited reader contained eleven explanatory pilots. The other 361 families still needed serious work.

The Lean verification effort had its own problems. Dependencies broke. A filename contained a colon that Windows could not or would not tolerate. Some builds failed for reasons the available records could not conclusively diagnose. The resulting declaration export was incomplete and did not establish independent verification of the collection.

-   I had created a system to help the mathematical community process machine-produced research.
-   That system had now generated enough additional research work to require its own dedicated mathematical community.

Then the Simons Foundation, Anthropic, and OpenAI announced a $15 million initiative to help mathematicians understand AI-generated mathematics.

And now, just as I was considering how to proceed, Axiom Math appeared with sixteen million lines of Lean.

So I am beginning to suspect the universe is trying to tell me something.

* * *

## Axiom Has Already Done Its Homework.

I initially thought Axiom might be solving only the verification side.

That would have left a fairly obvious assignment for Proof-to-Theory: take Axiom's enormous checked proofs and recover the human mathematical understanding.

Luckily, I looked at what Axiom had actually built.

The company already publishes interactive proof maps, dependency-aware blueprints, source-linked declarations, mathematical explanations, and explicit accounts of corrections discovered during formalization.

Its finite-simple-group project reports thirty-four noteworthy deviations from the published mathematical record, including a serious problem involving the Unbalanced Group Theorem. Axiom's researchers supplied an alternative route and reported an additional group-theoretic result.

The Stacks formalization similarly reports missing hypotheses, counterexamples, and repaired arguments.

Axiom's public [Stacks repository](https://github.com/AxiomMath/Stacks?ref=modalpathethics.com) also distinguishes human-reviewed formalizations from the faster-growing AI-generated tier that still needs review. Both tiers contain kernel-checked proofs. Their human-review status differs.

I have not independently reproduced these enormous builds, nor will I ever do so, and checking a formal statement does not automatically establish that it faithfully represents its original mathematical source. Axiom's own published work acknowledges the translation and review problem.

Still, the overlap is substantial.

The people building this system already understand that verification, source fidelity, mathematical explanation, and usable proof infrastructure are separate jobs.

They are attacking those jobs at a scale I cannot reasonably compete with.

So there is probably no need for me to send them a forty-page memo explaining that a dependency graph is useful.

They already have one.

It is very large.

They have several, actually.

* * *

## One Last Piece of Homework.

There is one question I would still like to leave with Axiom.

> **Can an explanation demonstrate that it actually improves mathematical understanding?**

A proof map helps people locate an argument. An exposition helps them read it. A counterexample reveals where a statement fails.

The more demanding test is whether a proposed explanation lets someone predict what will happen when the mathematics changes. That was the ambition behind the Chair44 comparison and the later Proof-to-Theory experiments.

Axiom may already be doing some or all of this internally. Its public work already contains several of the necessary instruments. I see no reason to dress up overlapping ideas as an invention of Modal Path Ethics today.

If there is a useful missing piece, it is the prospective evaluation of **whether an explanation produces transferable understanding**.

So if Axiom has that too, wonderful.

Then I have no further homework to assign.

Congratulations.

You have completed my course.

* * *

## Official Retirement Notice.

Effective November 5, 2026, **Modal Path Ethics is retiring Proof-to-Theory as an active research and software-development program.**

Its legendary work remains available as part of the research record.

The Conjecture 8 handoff remains a candidate proof, not independently validated. Chair44 remains a successful mechanism reconstruction with an incomplete human representation. Navier–Stokes remains a partial source-bound explanation. The PrimeGaps186 work retains its valid subresults and unresolved obligations. PTT-OM-001 remains an ambitious reconnaissance atlas whose incomplete verification and explanation work will not be retroactively promoted into success.

The research program still did something worthwhile. It identified a real problem, constructed ways to investigate it, recovered useful structures, exposed failures, and made some mathematical material a little easier to inspect.

Then it discovered a better-supported route forward.

I would also like to use my computer again.

* * *

## Thank You, Proof-to-Theory, For Everything.

This system was occasionally brilliant.

It was frequently confused.

It produced legitimate computational results, useful explanations, honest failures, and a truly inspiring number of attempts to overcome a disk-space check by just running into it again.

Proof-to-Theory taught us all that a proof can be complete while its explanation remains unfinished.

It also taught us that explaining this distinction does not require me to personally verify every theorem ever written forever.

And that last lesson was particularly expensive.

Thank you to the mathematicians who built the original work, the people who developed Lean and Mathlib, the researchers who made the results more understandable, and the Axiom team for making the next stage of the problem look considerably more tractable.

Please keep the human mathematicians in the loop.

Please keep the source statements attached to the proofs.

Please give your agents enough disk space.

And please, always remember our hero **Proof-to-Theory.**

Mathematics continues.

My computer is finally free.

> _There will be no PTT-050 to verify this announcement._

* * *

### Sources and earlier work

-   [Axiom Math — The Stacks Project, formalized in Lean](https://axiommath.ai/research/the-stacks-project-formalized/?ref=modalpathethics.com)
-   [Axiom Math — Formalizing the Enormous Theorem](https://axiommath.ai/research/the-enormous-theorem-formalized/?ref=modalpathethics.com)
-   [Axiom Math — Stacks GitHub repository](https://github.com/AxiomMath/Stacks?ref=modalpathethics.com)
-   [TechCrunch — Axiom Math Wants to Keep AI Slop Out of Mathematics](https://techcrunch.com/2026/11/05/axiom-math-wants-to-keep-ai-slop-out-of-mathematics/?ref=modalpathethics.com)
