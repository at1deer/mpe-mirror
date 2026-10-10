---
title: "Applied Case: The Proof Had No Deadline"
slug: "applied-case-the-proof-had-no-deadline"
canonical_url: "https://modalpathethics.com/applied-case-the-proof-had-no-deadline/"
mirror_url: "https://mirror.modalpathethics.com/articles/applied-case-the-proof-had-no-deadline.md"
published_at: "2026-10-08T05:59:44.000-05:00"
updated_at: "2026-10-08T08:15:30.000-05:00"
tags:
  - "Proof-to-Theory"
  - "Modal Systems"
authors:
  - "Aidan Lawson"
source: "Ghost Content API — published post"
mirror_generated_at: "2026-10-10T21:57:37.355Z"
mirror_generator_version: "2.0.0"
sha256_plaintext: "25341a608ec161327c5780e86a77d9fd17ac9035708404204bb5cbfcc90d6aa3"
---
# Applied Case: The Proof Had No Deadline

Proof-to-Theory recently attempted to launch the same mathematical verification task **321 times**.

All 321 attempts failed.

The problem was disk space.

This is an excellent place to begin an article about the future of mathematics.

It had been working on OpenAI's **PrimeGaps186** proof package. The source result concerns the gaps between consecutive prime numbers: specifically, a claimed improvement establishing that gaps of at most 186 occur infinitely often.

The mathematical work was enormous. The Lean formalization was enormous. The machinery required to check the machinery was becoming rather enormous itself.

Then the research agent spent hundreds of turns trying to get past a preflight check that required eight gigabytes of free disk space I did not have.

The actual Lean project had already built successfully.

The separate, much smaller verification task was never launched.

The Console just inspected the remaining disk space, rejected the attempt, and waited for the agent to ask again.

Which it did.

And did.

And did.

And **did**.

> **Three hundred twenty-one times.**

There is a strange comfort in discovering that artificial intelligence can still be defeated by a computer telling it **no** for the same reason **321 times**.

Unfortunately, this was on my computer.

* * *

## The 186.

**Proof-to-Theory** began as an earnest effort to recover mathematical understanding from large, difficult proof packages. Modal Path Ethics introduced it in [_I Gave a Mathematician Homework_](https://modalpathethics.com/applied-case-i-gave-a-mathematician-homework/), tested it [against the Chair44 aperiodic monotile](https://modalpathethics.com/applied-case-the-mathematician-still-has-a-job/), and then sent it wading into OpenAI's [166-page Navier–Stokes submission](https://modalpathethics.com/applied-case-the-proof-was-166-pages-long/).

**PrimeGaps186** was a different sort of test.

The [OpenAI repository](https://github.com/openai/PrimeGaps186?ref=modalpathethics.com) contained a substantial Lean development supporting three connected conclusions: a result about finding at least two primes in translates of an admissible 40-element set, an explicit set of diameter 186, and the corresponding bound on infinitely recurring prime gaps.

There was a catch.

The main formalized conclusions still depended on **three project-specific axioms**.

-   Two represented deep mathematical estimates associated with the work of Nicholas Katz and of Fouvry, Kowalski, and Michel.
-   The third represented a collection of numerical integral and cap bounds supported by a separate computational certificate.

These were not arbitrary inventions. They were tied to published mathematics and external computation.

They were also **not yet discharged inside the Lean proof**.

A machine checker can verify that a theorem follows from declared assumptions.

That does not establish those assumptions inside the same trusted formal system.

So, **Proof-to-Theory** received its assignment.

> Could it recover the proof's structure, identify the remaining debts, and select an honest next action?

In **PTT-043**, it reconstructed the argument as two coupled budgets.

-   One tracks the distribution estimates and the admissible arithmetic structure of the sieve.
-   The other tracks a signed mathematical energy calculation, its losses, and the numerical margin needed to keep the eventual inequality positive.

This was useful compression of the source, not a newly discovered theorem.

More importantly, the reconstruction identified the obligations separating the conditional formalization from an unconditional one.

The numerical obligation alone contained **152 specific inequalities**.

That gave the project something better than an instruction to keep trying until the computer said yes.

* * *

## The Computer Finally Starts Doing Mathematics.

**PTT-044** encountered an environment failure before Lean could run.

**PTT-045** repaired enough of the environment to build the pinned project successfully.

Then came the 321 attempts against the eight-gigabyte preflight requirement.

The resulting run ultimately lasted 704 turns.

It produced a super useful diagnosis of the verification software and **no new kernel-checked mathematical lemma**.

That is a failed research action, and also an unusually well-documented software failure.

The next pass repaired the execution problem.

**PTT-046** finally ran Lean. It established nonnegativity of the first selected physical integral and its normalized expression, without introducing a new project axiom.

**PTT-047** established a real-deal upper comparison: removing a bounded face weight could only increase the relevant nonnegative physical integral. The proof preserved the actual measure, cover conditions, square, and normalization.

-   Small steps.
    -   Real steps.

Then **PTT-048** tried to make the larger jump into the finite numerical majorant.

It failed.

The missing bridge required something much more specific than another attractive inequality: a proof-carrying representation of the relevant physical cells, their marked-coordinate bounds, the signed square calculation, and the directed numerical enclosures.

The source's computational certificate and the Lean definition of the physical integral were not interchangeable objects. The system could describe how they should connect. It had not constructed a kernel-checked connection.

> **Zero of the 152 numerical inequalities had been closed.**

Result preserved.

There is no victory banner for **PTT-048**. There is a narrower next target, aimed at proving one marked-coordinate cell envelope before attempting the entire contraction again.

The prime-gap theorem is still conditional in the pinned formalization. Modal Path Ethics has not improved the number 186, completed OpenAI's proof, or discovered that the source mathematics is false.

It has identified exactly where this attempt stopped, recovered a few valid subresults, and found a missing representation that a successor can now attack.

-   I would have preferred a faster route to that sentence.
-   I am also glad this record exists.

* * *

## Suddenly There Are 722 Manuscripts.

On October 6, OpenAI [released a **much larger** mathematical collection](https://openai.com/index/sharing-ai-progress-in-mathematics/?ref=modalpathethics.com).

Its [public repository](https://github.com/openai/math?ref=modalpathethics.com) currently organizes **722 manuscripts into 372 related result families**. Some have accompanying Lean formalizations. Others remain at different stages of verification. OpenAI explicitly acknowledges that some unformalized results may contain issues.

A family can contain a principal argument, consequences, alternative proofs, and companion papers. Counting every file as one solved problem would be an immediate misunderstanding of the collection.

Proof-to-Theory is now being directed toward this larger task.

The new goal is to build an **atlas**.

A reader approaching one of these results should be able to find the actual theorem being claimed, the assumptions it uses, the status of any formal certificate, the mechanism carrying the argument, the points where existing literature supplies the work, and the places where the explanation remains incomplete.

Where possible, the system should reconstruct useful examples, interventions, failure conditions, and neighboring questions.

It must also be willing to say **UNKNOWN**.

An atlas entry must distinguish a verified dependency from an inferred mechanism, an attractive representation from a demonstrated one, and a proposed consequence from something the proof actually establishes.

This atlas is an ongoing research effort. It is not presently a completed, independently adjudicated encyclopedia of OpenAI mathematics.

PrimeGaps186 showed us why this restriction is essential.

A convincing account of a missing bridge does not close the bridge.

An explanation of how a certificate should work does not turn that certificate into a Lean theorem.

And a thousand beautifully organized mathematical documents would be a remarkably expensive way to misunderstand one thousand mathematical documents.

-   Trying to make a navigable field.
-   Also trying to learn where the field still resists navigation.

Then, [Quanta Magazine published a story](https://www.quantamagazine.org/as-ai-closed-in-on-unique-games-proof-researchers-raced-to-beat-the-machines-20261007/?ref=modalpathethics.com) that made the whole project feel a little less abstract.

* * *

## September 11.

Dor Minzer had spent years working toward one of the important conjectures in theoretical computer science.

With his graduate students Yumou Fei and Shuo Wang, he had finally reached a major result in April 2026.

It concerned **4-to-1 games**, a constraint-satisfaction problem closely related to the famous Unique Games Conjecture and its 2-to-1 variant.

Their work was not an unpublished copy of the theorem OpenAI would eventually announce.

Their 4-to-1 result was mathematically distinct, with consequences of its own. It established, among other things, a major hardness result concerning the coloring of graphs known to be three-colorable.

The students and their adviser had also developed a way of making the proof work after several previous approaches failed.

The argument used a new error-correcting-code construction and an elaborate sequence of transformations. Those transformations were mathematical achievements in their own right.

By April, they had the result.

They were writing the paper.

That ordinarily takes time.

A serious mathematical exposition has to do more than record each valid inference. Its authors must decide where the argument begins for a reader, which definitions deserve motivation, why a particular construction works, where the methods fail, and what survives when the original problem changes.

Then, on September 11, Minzer began receiving **messages**.

> OpenAI was rumored to have solved the Unique Games Conjecture.

> A release might be imminent.

Suddenly, the paper had a deadline.

Three days later, the researchers [posted their 95-page manuscript](https://eccc.weizmann.ac.il/report/2026/179/?ref=modalpathethics.com).

They explained that the mathematics was complete, while the exposition was not yet in the form they had wanted to share. They explicitly attributed the accelerated release to the rumors.

Quanta reports that large stretches of the later manuscript consisted of definitions and lemmas without connecting prose.

On October 6, OpenAI released its results, including the Unique Games work and a Lean-formalized proof of the stronger 2-to-1 conjecture.

The researchers had gotten their paper out first.

Their mathematical accomplishment remained intact.

But something strange had happened to the path through which they intended to present it.

> **A machine proof they had not seen had already altered their research schedule.**

* * *

## They Should Not Have Had to Hurry.

There is an easy objection.

> Of course they hurried.

Academic careers depend on recognition.

Graduate students need records of accomplishment. Researchers compete for grants, positions, invitations, collaborators, and attention. A major company can command publicity on a scale that a university research group cannot.

Establishing priority can matter enormously.

Under those conditions, publishing quickly may be an entirely reasonable defensive decision.

I do not know which specific career or funding pressures influenced this team, and their decision need not have been mistaken.

That makes the problem worse.

> **The institution can make rushing rational while making the reason for rushing scientifically irrelevant.**

-   The researchers had already proved their theorem.
-   OpenAI had developed a related, potentially stronger result by another route.

Neither fact required the human researchers to abandon the exposition they were developing.

A proof arriving elsewhere can change what is known about the theorem. It can change which conjectures remain open. It can even show that parts of a research program should be reconsidered.

Those are **mathematical** reasons to respond.

A rumor that someone is about to publish a stronger result does something different.

It alters the expected **recognition** attached to continuing along the same path.

The research has acquired a competitor's clock.

This is the part I want to isolate.

The machine's proof did not need to be wrong, dangerous, illegitimate, or inferior for the research field to suffer a distortion.

The pressure arose because the surrounding reward machinery had already confused several different mathematical accomplishments.

-   Discovery.
-   Verification.
-   Explanation.
-   Representation.
-   Generalization.
-   Training.
-   The recovery of useful knowledge from unsuccessful approaches.

These activities overlap. They are not interchangeable.

If one result's arrival makes all the others less worthy of continuation, the surrounding institution has mistaken the published theorem for the whole scientific achievement.

I have [complained about theorem scoreboards](https://modalpathethics.com/applied-case-the-theorem-scoreboard/) before.

This is what happens when the scoreboard reaches backward into work that is still being done.

* * *

## The Seven Years Are Still There.

Consider what Minzer, Fei, and Wang actually developed.

-   They learned why certain approaches failed.
-   They identified constraints that a successful construction would have to satisfy.
-   They found a code that looked promising before they knew whether the surrounding machinery could accommodate it.
-   They eventually connected that code to the other necessary components.

Those failures were part of the route to the result.

A new proof arriving from elsewhere does not erase them.

It may give a quicker argument. It may expose a better technique. It may reveal that some of the obstacles were artifacts of the human approach.

Great.

Now mathematics has more to investigate.

The machine's output can answer the question it was assigned.

The researchers' work also generated knowledge about how one might approach that question, why several approaches fail, and what new constructions become available after those failures are understood.

A sufficiently capable machine may eventually produce excellent explanations, failure maps, and new conceptual frameworks too.

There is no protected human monopoly on understanding.

The point is that **one completed proof does not exhaust the legitimate paths through which mathematical understanding can develop**.

A human proof is itself an output. So is a machine proof.

The scientific value of **either** depends on what it establishes and what further work it makes possible.

But a researcher who has spent years constructing an argument may possess something quite different from a reader who has just received a correct answer.

They may know how the argument developed, where it broke, which abandoned constructions could be useful somewhere else.

And sometimes they possess a representation that makes the result understandable in a way the first complete proof never did.

Modal Path Ethics just saw this in the [Chair44 experiment](https://modalpathethics.com/applied-case-the-mathematician-still-has-a-job/). Proof-to-Theory reconstructed the recursive engine of a complicated machine-assisted proof. **Chaim Goodman-Strauss** subsequently supplied a much simpler visual representation using three neat colors.

-   The machine's reconstruction had value.
-   The human representation had value.
    -   Neither had to invalidate the other.

The same applies here.

An independent 4-to-1 proof may remain worth developing after a 2-to-1 proof arrives, especially if it carries methods that travel to different problems.

Whether it does must be established by mathematical work.

The announcement of another theorem cannot settle that question.

* * *

## Nobody Has to Become OpenAI's Translator.

There is a second mistake waiting for us.

> Suppose a lab produces a difficult proof.

> The community now needs to understand it.

-   A researcher who has spent years studying the surrounding mathematics is probably well equipped to help.
    -   So we tell that researcher to stop developing their own approach and begin translating the machine's proof.

We do not know that is a good choice or an **absolutely terrible one** until we examine what each path can contribute.

This is directly relevant to Proof-to-Theory.

The atlas is an attempt to make the OpenAI release easier to investigate. It should hopefully reduce the cost of finding relevant work, checking provenance, recovering mechanisms, identifying gaps, and locating productive next questions.

But we cannot assume that digesting OpenAI's manuscript is the best possible use of every mathematician's time.

A researcher might learn more by completing an alternative proof instead.

Another might study the machine proof and discover a useful general principle that nobody else recognized.

A third might ignore the entire release and work on something that has nothing to do with OpenAI's chosen list of problems.

The existence of a vast new mathematical archive does not grant that archive authority over the future of mathematics.

* * *

## Who Gets to Decide What Mathematics Needs?

There is already an important institutional response.

On September 29, the independent [Advisory Group on Mathematics and Artificial Intelligence](https://agmai.org/general-sep29/?ref=modalpathethics.com) at the Institute for Advanced Study published recommendations for responsible release of machine-generated mathematics.

The group argues that AI labs producing significant mathematical output have responsibilities beyond posting the results.

That includes improving citations and exposition, releasing provenance, supporting verification, and providing funding for the development of human understanding.

Crucially, it recommends that decisions about which explanatory projects receive support be made by **independent, existing nonprofit institutions**, rather than the labs producing the results.

OpenAI's [October 6 announcement](https://openai.com/index/sharing-ai-progress-in-mathematics/?ref=modalpathethics.com) says it plans to fund workshops, conferences, and programs dedicated to understanding AI-generated mathematics.

That is a constructive response. It still leaves a question.

> **Who is funding the mathematician who does not want to translate the machine proof?**

Or the researcher whose alternative construction might illuminate another problem?

Or the graduate student who wants six more months to make a difficult argument intelligible?

The person who has learned something important from a failed route and cannot yet package it as a successful theorem?

The researcher whose entire program is made newly uncertain because a lab can generate a large number of results without giving the community comparable access to the instrument?

Proprietary research capacity can create an environment in which the people pursuing open problems cannot know whether their work is about to be overtaken by systems they cannot use or independently examine.

The issue is larger than paying people to explain the next hot batch of machine results.

Mathematics needs institutions capable of supporting inquiry whose destination has not yet been supplied.

The community should be able to establish priority without forcing every provisional result into its final public form. A dated technical preprint can record a claim while a later exposition receives its own recognition.

Grants and assessments should also recognize substantive mathematical work beyond first announcement: reusable constructions, independently revealing proofs, rigorous negative results, conceptual simplifications, error discovery, and the development of new research directions.

None of this requires pretending that slow work is automatically valuable.

Some slow work is unproductive.

Some machine proofs are great.

Some abandoned projects deserve to stay abandoned.

An institution responsible for evaluating mathematics should be able to make those distinctions without outsourcing the decision to whoever announces a theorem first.

* * *

## The Ruling.

Proof-to-Theory spent 321 attempts failing to launch a checker.

It eventually got through, verified a few narrow mathematical steps, and found another obstruction.

The theorem remained conditional.

The work produced a better map of what remained to be done.

That is the whole reason Proof-to-Theory exists. Its success condition cannot simply be the generation of another impressive output. I want it to help recover the mathematical work carried by an output, discover what the output leaves unexplained, and identify the next investigation worth performing.

-   Some days it may find a hidden mechanism.
-   Some days a missing representation.
-   Some days a counterexample.
-   Some days an eight-gigabyte preflight check.

There is useful information in all four, although I really would prefer to encounter the fourth one less often.

Minzer, Fei, and Wang developed their result through years of investigation. Their eventual manuscript was accelerated by the rumor of a machine proof.

The arrival of OpenAI's result did not erase their mathematics.

It did not erase their failed approaches, their new construction, their knowledge of the problem, or the possibility that their proof will teach something important that the machine's proof does not.

They should have been free to finish explaining it on the timetable that their research warranted.

Perhaps they would then have read OpenAI's work and changed their minds about the best explanation.

Perhaps they would have found something even better in the comparison between.

Perhaps they would have continued with their own proof because that was where the most promising unexplored mathematics remained.

The **scientific question** was which path deserved further investigation.

The **publication race** answered a different question.

> **The theorem did not steal their seven years.**

> **The surrounding institution made them afraid that it could.**

That is the problem to repair.

And meanwhile, PTT has 722 manuscripts to navigate.

The atlas is going to take a **while**.
