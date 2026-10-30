---
title: "Applied Case: The Mathematicians Got $15 Million. I Got a Colon."
slug: "applied-case-the-mathematicians-got-15-million-i-got-a-colon"
canonical_url: "https://modalpathethics.com/applied-case-the-mathematicians-got-15-million-i-got-a-colon/"
mirror_url: "https://mirror.modalpathethics.com/articles/applied-case-the-mathematicians-got-15-million-i-got-a-colon.md"
published_at: "2026-10-25T05:30:00.000-05:00"
updated_at: "2026-10-25T05:30:00.000-05:00"
tags:
  - "Proof-to-Theory"
  - "Applied Case"
authors:
  - "Aidan Lawson"
source: "Ghost Content API — published post"
mirror_generated_at: "2026-10-30T13:26:49.503Z"
mirror_generator_version: "2.0.0"
sha256_plaintext: "238579fe5b07f53ff53a069eba7ba79d420751d005aebaa4669fdb8b0e298b6a"
---
# Applied Case: The Mathematicians Got $15 Million. I Got a Colon.

The Simons Foundation, Anthropic, and OpenAI have announced a **$15 million initiative** to help mathematicians evaluate, understand, and build on AI-generated mathematical results.

Excellent.

Professional mathematicians should be paid to examine all this stuff. OpenAI has released enough mathematics to keep entire departments occupied, and somebody needs to determine what has actually been proved, what the proofs depend upon, and what anybody is supposed to learn from them.

Meanwhile, I have been attempting something related with **Proof-to-Theory**, approximately five dollars in model calls, and a computer I also need for the rest of my life.

-   Their program has grants, workshops, and computing resources.
-   Mine has a Windows filesystem that recently refused to cooperate because a dependency contained a colon.

This is a short progress report.

* * *

## The Atlas Survived.

On October 7, I started **PTT-OM-001**, a full first-pass examination of OpenAI's mathematics repository. The source was pinned to its original release, preserving 372 research families and 722 manuscripts as a fixed historical target.

By October 13, Proof-to-Theory had completed **all 80 research batches and indexed all 372 families**.

The resulting dossiers identified source-asserted claims, assumptions, proposed mathematical representations, formalization boundaries, unresolved questions, and specific places to attack the arguments.

This was a source-facing reconnaissance pass. Most entries were assembled from selected source material rather than complete independent manuscript reviews. The later Atlas reader has eleven edited explanatory pilots. The other 361 families still require substantial work before I would call them anything approaching successful human explanations.

Proof-to-Theory has been trying to recover the mathematical understanding that a large proof package may leave inaccessible. A catalogue of theorem statements does not accomplish that job.

All the same, the first pass did locate several interesting interfaces.

* * *

## A Few Things PTT Actually Found.

> **Family 095: A cone can fail to have one representation while possessing another.**

The hyperbolicity-cone manuscripts include a claim that certain cones admit **no finite semidefinite lift**.

The associated Lean endpoint PTT inspected concerns **nonspectrahedrality**: the absence of a direct semidefinite representation.

Those statements differ.

A cone might have no direct matrix-pencil representation and still admit one after introducing auxiliary variables and projecting back down. And a companion source claims an explicit lifted representation for an earlier cone.

Proof-to-Theory therefore isolated a concrete verification obligation: the relevant no-lift argument must exclude _every_ permitted finite lift for the particular cone being discussed. Proving nonspectrahedrality of some cone does not settle that stronger claim.

No counterexample to the main manuscript was established. The scope distinction is real, and the cone identities need to be checked.

* * *

> **Family 197: The torsion came back.**

One family claims a counterexample to direct finiteness for a **torsion-free** group algebra.

The formally described characteristic-two construction PTT located instead uses a group with **odd-prime torsion**.

Both results would be interesting. They answer different questions.

A successful verification of the torsion example would leave the torsion-free claim requiring its own argument.

* * *

> **Family 017: π came with an extra theorem.**

The selected comparator for the claim that π has irrationality exponent two does not include the accompanying Flint–Hills convergence result.

The first inventory therefore treated Flint–Hills as outside that formal endpoint.

The subsequent source recovery found a separate `flint_hills_summable` declaration in the same Lean module.

Good correction.

Outside the selected comparator did not mean absent from the formal source.

PTT also matched the written statements of the selected π theorem and two Family 003 zeta/Dirichlet nonvanishing declarations against their official comparator statements. These were static source-text matches. The Lean kernel still needs to check them in the intended environment.

Elsewhere, the examination left narrower questions worth pursuing: whether the matrix-multiplication extraction preserves independence across all three tensor legs, and whether a contingency-table sampler retains a sufficiently strong acceptance bound under extremely unbalanced margins.

These are **research questions**, not discovered mathematical failures.

* * *

## And Then Lean Arrived.

October 8 began with a dependency-resolution patch whose line endings broke `lake update`.

After that was repaired, Windows encountered an AINTLIB dependency containing a root filename with **colons** in its timestamp.

Windows did not approve. Not at all.

October 9 brought a failure involving `Mathlib/Probability/ProductMeasure.olean.private`. Subsequent inspection found the supposedly problematic artifact was physically present. The underlying cause remains unresolved. Memory pressure and concurrency are possibilities.

The full campaign eventually recorded **180 Lean module attempts**, producing 185 declaration entries.

Of those, the frozen export labeled 121 as built with axioms reported and 64 as failed or environment-blocked. The export did not preserve enough complete execution evidence to reconcile those labels into an independent verification record.

Worse, the official repository contains **405 comparator configurations**. The exported pass recorded **zero confirmed comparator matches**. It also missed declaration records for 108 families with Lean documentation, including the original π calibration family.

So the result is painfully straightforward.

-   I have a frozen Atlas of 372 research families.
-   I do not have 372 completed mathematical explanations.
-   I do not have 180 disproved mathematical statements.
-   And I do not have an independently reproduced formal-verification certificate for the repository.

* * *

## This Computer Has Other Shit to Do.

The Console has since been repaired and a fresh verification handoff prepared. The next run can concentrate on the missing comparator and module evidence without repeating the entire manuscript-research campaign.

It could also occupy my computer for several more days.

Unfortunately, I have other research to conduct, software to develop, games to build, and an increasingly compelling need for more than 16 GB of RAM.

So Proof-to-Theory is temporarily leaving Lean alone.

The $15 million initiative to support professional mathematicians is welcome. OpenAI and Anthropic are producing mathematical results at a scale that demands serious external expertise, independent reproduction, and human explanation. Supporting that work is preferable to leaving them to absorb the verification burden.

Proof-to-Theory has a much smaller assignment.

It needs to show exactly what the source claims, what the formal object establishes, which missing steps carry the result, and whether its reconstructed explanation actually teaches anyone something.

The first Atlas pass made _some_ progress on the first three questions.

The fourth is still outstanding.

So is the Lean verifier.

It would be cool to report that artificial intelligence has accelerated mathematical understanding beyond all historical precedent.

But for now, my most reproducible discovery is that **the mathematical future remains open, provided I can get my computer back.**

* * *

**Sources:** [Simons Foundation funding announcement](https://www.simonsfoundation.org/news/simons-foundation-launches-15m-effort-to-help-mathematicians-navigate-ai-era/?ref=modalpathethics.com) · [OpenAI mathematics repository, frozen October 6 source](https://github.com/openai/math/tree/adc7f1241b42e322a6451854ab7e4b4c146bf78a?ref=modalpathethics.com) · [Prior Proof-to-Theory incident](https://modalpathethics.com/applied-case-the-proof-had-no-deadline/)
