---
title: "Applied Case: I Gave a Mathematician Homework"
slug: "applied-case-i-gave-a-mathematician-homework"
canonical_url: "https://modalpathethics.com/applied-case-i-gave-a-mathematician-homework/"
mirror_url: "https://mirror.modalpathethics.com/articles/applied-case-i-gave-a-mathematician-homework.md"
published_at: "2026-09-30T09:44:24.000-05:00"
updated_at: "2026-10-01T23:07:44.000-05:00"
tags:
  - "Applied Case"
  - "Modal Path Ethical Software"
  - "Modal Systems"
  - "Proof-to-Theory"
authors:
  - "Aidan Lawson"
source: "Ghost Content API — published post"
mirror_generated_at: "2026-10-08T06:34:45.414Z"
mirror_generator_version: "2.0.0"
sha256_plaintext: "8d50e80f35dfbbb21858115c03e4677378bbd6b3d845fb33c6af4c91e442a546"
---
# Applied Case: I Gave a Mathematician Homework

A few weeks ago, while I was supposed to be finishing [_The Inner Apocalypse_](https://modalpathethics.com/the-inner-apocalypse-has-been-published-free-download/), I sent a mathematician a candidate proof.

It came with **code**. It came with **a diagram**. It came with certificates, verification instructions, and enough provenance to establish that the problem had survived a fairly serious series of attempts to make it fail.

It also came with another item that I had neglected to put in the attachment list.

> **Work.**

-   Here is this unusual machine.
-   Here is the argument about it.
-   Here is why the argument appears to survive the checks.
    -   Please determine whether it is correct, whether it matters, and what a human being is supposed to learn from this whole affair.

I had packaged the result carefully. I had still left part of the route into understanding sitting on somebody else's desk.

This was pretty awkward for someone [who had been complaining about artificial intelligence producing research debt](https://modalpathethics.com/applied-case-the-mathematicians-appeal-the-scoreboard/?utm_source=chatgpt.com).

There is an obvious defense of me here, and it is a good one:

## What the fuck else was I supposed to do with it?

### Throw it out?

A person outside a specialty develops an argument, attacks it, documents it, and asks someone inside the specialty to examine it. That is a reasonable thing to do. Some would even call it responsible.

Keeping the candidate private forever would not improve its mathematics. Destroying it would not restore **anyone's** weekend. Seeking expert criticism was appropriate. The unfinished part was allowing that request to become the only available next step from possessing the proof. There was clearly a missing step here.

I could still reconstruct the mechanism, separate the pieces doing different mathematical jobs, expose the vulnerable steps, build examples, change the machine, see which explanations survived, and try to produce something more mathematically useful. Then, if that all worked out, I could try to turn the system into something that can digest **other people's** bundles of near-indecipherable machine-proof to make them more readable before a real-life human mathematician has to see it.

So the next morning, still in the middle of writing _The Inner Apocalypse_, I began work on **Proof-to-Theory**.

Penance got a project name.

* * *

## After the Proof.

On September 23, [Futurism reported mathematicians' difficulty extracting understanding from OpenAI's Navier–Stokes proof](https://futurism.com/artificial-intelligence/mathematicians-openai-agents-proof-borderline-incomprehensible?utm_source=chatgpt.com). Its account, drawing on NPR's reporting, quoted Javier Gómez-Serrano: **“The paper is not written for humans.”** James Maynard described the difficulty of extracting human understanding from it. Uh oh.

That is a handoff problem. A proof can exist while the route from the proof to usable mathematics remains expensive.

By then, I had already gotten pretty heavy into a penance project aimed at exactly that gap, and I happened to have a candidate proof of my own on which to stop being so theoretical about it.

**Proof-to-Theory** began with a simple question:

> **What work remains after the proof exists?**

-   A **proof** establishes a consequence from assumptions.
-   An **explanation** makes the argument intelligible.
-   **Theory** goes further. It identifies the structure that made the argument work, distinguishes that structure from the machinery used to certify it, and tells us what should happen when the object changes.

Those tasks overlap. They do not automatically finish together.

So **Proof-to-Theory** went back into the machine.

-   The first job was **representation**.

The original quantity asks when one particular state can merge with another. Global measures of how much the whole automaton had compressed were therefore too coarse. The relevant object turned out to be the **pair automaton**, where two moving states become a single moving point and collision becomes ordinary reachability to the diagonal.

-   The next job was **separation**.

The shortest collision time and whole-machine synchronization are different questions. The lower bound is carried by a transition-by-transition progress certificate in pair space. Synchronization becomes visible through composed actions that expose a cycle and a fold.

-   Then came **intervention**.

Change the machine and ask which explanations survive. In the twelve-state example below, either of two individual transition changes leaves the shortest collision time at sixteen. Make both changes together and it drops to fifteen, even though the large macro-actions used by the original successful word remain unchanged. That tells us exactly where one attractive explanation runs out of information.

Over the following weeks, **Proof-to-Theory** expanded beyond this one automaton. The project continues. But this is where it began, and where the idea can now be shown rather than described.

* * *

## Conjecture 8, From Proof to Theory.

The object below is a self-contained version of the candidate result. It starts with the automaton itself. It then gives the mathematical argument:

-   the explicit word showing that the distinguished state can merge in **4_n_/3** letters;
-   the pair-space certificate ruling out every shorter word;
-   the separate synchronization construction;
-   and the altered machines that show which parts of the explanation survive intervention.

The general claim is that for the Dżyga–Szykuła family with

> **n = 3k+6**

the distinguished state has compress-with-another threshold

> **τ(q0) = 4k+8 = 4n/3,**

and the family is synchronizing.

The status remains straightforward: **this is a computer-assisted candidate proof with reproduced checks. Independent verification remains open.** Making the argument easier to inspect does not change that.

The complete object follows, and can be downloaded below.

* * *

* * *

[

Conjecture 8 From Proof to Theory

Save this html for a copy of the embed above (does not include markdown and pdf, downloads below)

conjecture-8-standalone.html

109 KB

download-circle

](https://modalpathethics.com/content/files/2026/09/conjecture-8-standalone.html "Download")

[

conjecture-8

conjecture-8.md

13 KB

download-circle

](https://modalpathethics.com/content/files/2026/09/conjecture-8-1.md "Download")

[

conjecture-8

conjecture-8.pdf

109 KB

download-circle

](https://modalpathethics.com/content/files/2026/09/conjecture-8-1.pdf "Download")

* * *
