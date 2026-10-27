---
title: "Applied Case: Qichao Wang Explains the Part I Couldn't"
slug: "qichao-wang-explains-the-part-i-couldnt"
canonical_url: "https://modalpathethics.com/qichao-wang-explains-the-part-i-couldnt/"
mirror_url: "https://mirror.modalpathethics.com/articles/qichao-wang-explains-the-part-i-couldnt.md"
published_at: "2026-10-16T06:00:00.000-05:00"
updated_at: "2026-10-16T08:40:14.000-05:00"
tags:
  - "Applied Case"
  - "Proof-to-Theory"
authors:
  - "Aidan Lawson"
source: "Ghost Content API — published post"
mirror_generated_at: "2026-10-27T05:30:07.145Z"
mirror_generator_version: "2.0.0"
sha256_plaintext: "1ee91886e0df2a20fc5c9323a224c9d647ae58e649281bbd4b50c45d5e90fef5"
---
# Applied Case: Qichao Wang Explains the Part I Couldn't

Qichao Wang has cited Modal Path Ethics in a mathematics paper.

Two articles, actually. The references to [_Revenge of the Theorem Scoreboard_](https://modalpathethics.com/applied-case-the-mathematicians-appeal-the-scoreboard/) and [_I Gave a Mathematician Homework_](https://modalpathethics.com/applied-case-i-gave-a-mathematician-homework/) are sitting at the bottom of an eight-page proof about synchronizing automata. This was not the outcome I expected when I wandered into Conjecture 8 in September.

Wang's paper, [_The compress-with-another threshold of Szykuła's Figure 3 family_](https://arxiv.org/abs/2610.07044?ref=modalpathethics.com), was posted October 5. It gives a concise proof of the result for the corrected automaton family and, separately, a construction showing that the entire machine can be synchronized. It also cites earlier independent computational and proof-oriented work, and explicitly declines to make a priority claim.

Neither will I, of course.

The part I do want to talk about is what his paper actually explains. Because I had spent weeks producing, checking, and trying to communicate evidence about this machine, and Wang managed to put the obstruction I was struggling to explain into a few pages.

* * *

What the Machine Was Supposed to Do.

A synchronizing automaton is a machine with a finite number of states and a few input buttons. In this case the buttons are **a** and **b**. Pressing one moves _every possible starting state_ according to the same rule.

You can imagine two copies of the machine starting in different rooms. Give them identical button presses. Eventually, they might arrive in the same room. Once that happens, no later button sequence can separate them again.

Conjecture 8 concerned a particular family from Marek Szykuła's survey, attributed there to Maciej Dżyga. For one distinguished starting state, q0, how many button presses are unavoidable before it merges with **any** other starting state?

Wang uses p for the size parameter. The family has:

n = 3p, with p ≥ 3.

The answer for the corrected family is:

μ(q0) = 4p = 4n/3.

Here μ(q0) means the _shortest_ such collision. It is not the number of steps needed to merge every state. That is a different question, and mixing the two is an easy way to make an impressive-looking claim about the wrong problem.

I had a candidate proof package, reproducible checks, a diagram, and then a public Proof-to-Theory handoff. We could exhibit a word of the proposed length. We had pair-space exploration and certificates intended to rule out shorter words. What I was having trouble giving a reader was the reason that lower bound should be believable without inspecting the machine's entire paperwork.

Wang supplies that reason.

* * *

Only Two Pairs Can Finish the Job.

A pair of states can be followed as one object: press **a** or **b** and update both positions together. This produces a new machine whose states are _pairs_ of states from the original.

It is useful because the moment of collision becomes visible. Before two states merge, they have to arrive at a pair that the next letter actually collapses.

For this family, each letter collapses exactly one pair:

Ka = {q4, q2p+1}

Kb = {q3, q2p}

Those are the only final entrances. If q0 is going to collide with anything, some pair beginning with q0 must eventually reach one of them, then take the corresponding collapsing step.

This shrinks the question enormously. We do not need to give a separate story about every possible word. We need to establish how soon any pair involving q0 can reach either of those two places.

Wang's exact distances are:

distance to Kb = 4p − 1

distance to Ka = 4p

The final collapsing letter costs one more step. That immediately gives the claimed minimum of **4p**.

Of course, simply writing down those distances would be the same problem I already had. _Why_ can't another route reach one of the pairs sooner?

That is where the actual explanation begins.

* * *

The Shortcuts Are Not There.

Wang first identifies a region of the pair machine that looks available in a diagram but cannot be entered from a starting pair involving q0, apart from one exceptional kernel pair. The obstruction comes from how the machine's alternating transitions preserve parity and coordinate sums, with the exceptional edges checked separately.

Then he assigns two **entrance potentials** to the remaining routes. A potential here is a lower bound on how much travel must already have happened before a pair can occupy a particular part of the machine.

If a path enters the first layer, it has already paid one minimum cost. If it tries to take the reflected route around the outside, it has to pay another. The bounds survive exits, reentries, and the exceptional transitions. Even the smallest case, **p = 3**, gets its own endpoint check rather than being quietly swept under the general picture.

The essential result is that the apparent shortcuts do not beat the clock. To reach the pair that **b** can collapse, the machine must spend at least **4p − 1** moves. The alternative pair requires at least **4p** before its own last move.

That is substantially more useful to me than another thousand successful searches. It tells me what prevents an early collision. The pair-space certificate can check the bound; the excluded region and entrance potentials explain the obstruction that makes the bound work for every size.

Proof-to-Theory had identified the pair machine as the right object and retained the necessary evidence. Wang gives that object a small argument a reader can inspect.

* * *

The Word and the Separate Problem.

Wang also gives an explicit shortest collision word:

w = (ba)p(ab)p

It has **4p** letters and sends q0 and q2 to the same state, q2. So there are two sides to the result: an actual route of length **4p**, and an argument that nothing shorter can work.

There is a correction worth preserving here. The witness printed in the original statement of Conjecture 8 had **4p + 1** letters. Wang's paper uses the corrected word above and spells out the completed transition rules. This is a result about that **corrected** Figure 3 family.

Then comes the other problem. Merging q0 with _some_ state does not show that the whole automaton can be reset to one state from every possible starting position. Wang supplies a separate reset construction, giving the bound:

rt(Ap) ≤ 3p2 + 4p − 1.

That is an **upper bound** on the reset threshold, not a claim that this is always the shortest reset word. The distinction matters because synchronization was part of the conjecture, and the first-collision calculation alone does not establish it.

Wang reports reproducible computational checks for 67 parameter values, including sizes up to **3,072 states**. Those checks support the derivations. The all-size claim is carried by the written argument, and the paper is careful about its Lean result too: the abstract barrier mechanism has a conditional Lean formalization; the full concrete family theorem is not claimed to have been formalized there.

I appreciate the degree of specificity.

* * *

What I Was Actually Missing.

The earlier Modal Path Ethics work remains what it was: a computer-assisted candidate proof, exposed artifacts, and a request for independent inspection. Wang's citation is a citation. It does not certify my package, establish influence, or award anyone priority. His paper names independent work besides ours, and Szykuła had received other proofs too. That history should stay intact.

But the comparison tells me something concrete about Proof-to-Theory.

I built the system because I was tired of the idea that producing a proof and understanding a proof were automatically the same accomplishment. The first handoff could find the relevant pair-space structure, reproduce finite cases, record a lower-bound certificate, and display the proposed witness. I could point to where the hard step lived.

Wang shows what it looks like when someone takes responsibility for that hard step _as an explanation_. Name the only collision pairs. Show why the easy-looking region is inaccessible. Charge every remaining entrance its minimum time. Construct a word that meets the resulting bound. Handle the small exception. Prove synchronization separately.

Now I can explain Conjecture 8 without making a reader walk through my entire research folder, which is an improvement for both mathematics and the reader's afternoon.

* * *

**Sources:** [Qichao Wang, _The compress-with-another threshold of Szykuła's Figure 3 family_ (arXiv:2610.07044)](https://arxiv.org/abs/2610.07044?ref=modalpathethics.com); [Modal Path Ethics, _Applied Case: Revenge of the Theorem Scoreboard_](https://modalpathethics.com/applied-case-the-mathematicians-appeal-the-scoreboard/); [Modal Path Ethics, _Applied Case: I Gave a Mathematician Homework_](https://modalpathethics.com/applied-case-i-gave-a-mathematician-homework/).
