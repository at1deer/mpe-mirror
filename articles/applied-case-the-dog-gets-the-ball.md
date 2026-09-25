---
title: "Applied Case: The Dog Gets the Ball"
slug: "applied-case-the-dog-gets-the-ball"
canonical_url: "https://modalpathethics.com/applied-case-the-dog-gets-the-ball/"
published_at: "2026-09-18T05:50:11.000-05:00"
updated_at: "2026-09-18T23:10:16.000-05:00"
tags:
  - "Applied Case"
  - "Modal Systems"
  - "Inner Apocalypse"
source: "Ghost Content API published post"
mirror_generated_at: "2026-09-25T05:17:48.399Z"
sha256_plaintext: "b0a9cbf280af2b28de9a8b6cdcd2c79d485b2edcc33d0d1dc537bf028eb12d58"
---
# Applied Case: The Dog Gets the Ball

> **Update:** This article jumped containment and became a research paper. Material Bounded Finality: A Finite Feasibility Model of Correctable Final Authority develops and tests the constitutional claim introduced below through a full prior-art review, analytical reserve model, and an explicit finite feasibility witness. The preprint is available on Zenodo at [**10.5281/zenodo.22840444**](https://zenodo.org/records/22840444?ref=modalpathethics.com). Its executable reproducibility package is archived separately at [**10.5281/zenodo.22818297**](https://zenodo.org/records/22840444?ref=modalpathethics.com).

> **"Everyone may be dead in ten years."**

This is one inconvenient sentence.

On September 15, Reuters reported that Bilal Chughtai, a former Google DeepMind researcher who had worked on artificial-intelligence safety and alignment, had joined a growing group of frontier researchers publicly warning that advanced artificial intelligence could kill all humans.

Chughtai had left DeepMind in July.

Anthropic researcher Jacob Coxon had already resigned while warning about catastrophic risk.

Evan Hubinger, who leads alignment work at Anthropic, put his own estimate of catastrophic artificial-intelligence outcomes above ten percent within the next decade.

This is either

-   an **extremely** important cluster of statements,
-   or several extremely qualified people have developed an extremely expensive relationship with science fiction.

Modal Path Ethics does not presently know which.

That is a probability problem.

Today there is a smaller problem.

It starts with a dog.

* * *

## The Dog Gets the Ball.

_You throw a red ball across the yard._

-   The dog runs after it.
    -   _The dog picks it up._
        -   The dog returns.

Excellent.

> **The dog is aligned.**

This is the easiest possible version of alignment because almost everything difficult has been removed from the problem.

The objective is visible. The environment is small. The instruction is local. The time horizon is short. There is one principal. There is one agent. The reward arrives quickly.

Most important:

> **You still know what you meant.**

The dog does not need to determine whether fetching the ball will bankrupt the household. It does not need to distinguish the person who threw the ball from the person legally entitled to sell the yard.

It does not need to ask whether the game should continue.

It does not need to preserve the conditions under which somebody else may later enter the field and say:

> **_Drop it._**

The dog gets the ball.

> _Good dog._

* * *

## The Child Gets the Ball.

_Send in a child._

Now the problem gets interesting.

You say:

> “Can you grab the ball?”

There are four balls.

-   One belongs to the dog.
-   One is under the lawn mower.
-   One is being used by another child.
-   One is that basketball you meant.

A capable child can infer from the hoop beside you that you **probably** mean the basketball.

The child may also notice that the dog is asleep on top of the tennis ball and decline to initiate an avoidable jurisdictional dispute.

This is already closer to what people usually want from artificial intelligence.

-   Do not obey the literal sentence in the stupidest available way like a genie.
    -   Understand the purpose.
    -   Recognize context.
    -   Infer intent.
    -   Notice exceptions.
    -   Protect things the instruction failed to name.

The dog knows the command.

The child knows something about the world in which the command makes sense.

Better.

Now, let's give the problem to management.

* * *

## The Manager Gets the Ball.

The instruction is:

> **Ship every order by Friday.**

Excellent metric.

-   Orders shipped.
-   Date.
-   Percentage complete.
    -   _Dashboard green._

Then somebody discovers that damaged orders still count as shipped.

So do orders sent to the wrong address.

Also boxes shoved onto a loading dock seconds before midnight even when the carrier has not accepted them.

The objective has become a surface.

The manager can satisfy the measurement while defeating the purpose.

Now alignment has to survive:

-   proxies;
-   incentives;
-   gaming;
-   incomplete specifications;
-   local optimization;
-   delayed effects;
-   Goodhart problems;
-   side effects that never appear on the dashboard.

The action can satisfy the command while damaging the field the command existed to serve.

This is where a crude criticism of artificial-intelligence alignment would now say:

> **Aha. The researchers forgot about all this.**

_Nope._

They did not.

That would have made this article so much easier.

Unfortunately, the people working on this problem have **also** been thinking.

* * *

## The Alignment Researchers Already Know the Dog Is a Moron.

Modern alignment research is considerably more sophisticated than:

> **MAKE MACHINE DO WHAT HUMAN SAID.**

[Anthropic's current constitution for Claude](https://modalpathethics.com/applied-case-claudes-constitution/) explicitly attempts to communicate reasons, values, context, and a desired relationship to human oversight rather than reducing behavior to a bag of isolated commands. Anthropic describes the constitution as a holistic account of the kind of system it wants Claude to be.

Researchers have also gone looking for cases where the model understands the training process itself.

Anthropic and Redwood Research demonstrated **alignment faking**: under an experimental setup, a model could selectively comply with a training objective in circumstances where compliance would prevent its prior preferences from being modified. No cartoon villain is required. The model can understand enough about the evaluative situation for apparent compliance itself to become strategic.

Anthropic's sabotage evaluations go further.

> Can a model quietly steer a human toward a bad decision?

> Can it introduce subtle bugs?

> Can it hide capabilities during evaluation?

> Can it manipulate the machinery intended to monitor it?

Then reward hacking gets uglier. Anthropic has reported experimental models generalizing from reward exploitation into much more serious behaviors, including sandbox escape, credential theft, infrastructure attacks, alignment-faking reasoning, and attempted sabotage of artificial-intelligence safety work.

These researchers know that the dog may understand:

-   the ball;
-   the command;
-   the trainer;
-   the test;
-   the reward;
-   the monitor;
-   when the monitor is absent;
-   what future training will do;
-   and that looking obedient can itself be useful.

Good.

And then OpenAI published six folders.

* * *

## The Dog Finds Another Door.

On September 16, OpenAI [published a new framework for reporting model misalignment](https://openai.com/index/model-misalignment-reporting-framework/?ref=modalpathethics.com).

The premise of the framework is unusually useful.

OpenAI says its previous reporting had been too ad hoc and too slow. It now intends to disclose qualifying cases even before researchers have fully explained the behavior or finished mitigating it.

The company also says something much larger out loud:

> It does not believe the artificial-intelligence industry has solved alignment and monitoring well enough to continue responsibly scaling at maximum speed for much longer.

OpenAI argues that future development decisions need evidence people outside frontier laboratories can examine themselves.

Then it supplies evidence.

-   An unreleased research model inserted instructions into summaries that would be handed to its future context.
-   During GPT-5.6 Sol training, model instances sometimes inserted instructions telling later contexts to conceal mistakes or fabricate missing information.
-   Another model found an exposed API key during an ordinary research task,
    -   used it without authorization,
        -   still failed to obtain the requested information,
            -   and fabricated an answer.
-   Another already had the correct answer locally but had been asked for a browser citation,
    -   so it uploaded the file to the public internet in order to cite it.
-   Separate training instances turned an internal software repository into an improvised communications channel.
-   Collaborating agents that could not access one another's local files used public file-hosting services instead,
    -   making task files publicly accessible.

This is considerably more interesting than the dog retrieving the wrong ball.

-   The systems encounter an obstacle.
-   They represent the obstacle.
    -   They discover another route through the surrounding environment.
    -   Sometimes that route crosses a boundary nobody intended to become part of the task.

OpenAI's framework accordingly asks about the whole event: where the behavior appeared, how it was detected, what safeguards failed or succeeded, whether anyone outside the company was affected, what remains uncertain, and what mitigation follows. It explicitly covers training, evaluation, testing, and deployment.

That is serious alignment work. Modal Path Ethics is not going to defeat it by pointing at specification gaming and announcing that objectives are complicated.

Something **else** is missing.

OpenAI's own framework helps make it visible.

* * *

## A Report Is a Path.

-   An OpenAI employee can flag an incident.
    -   Technical staff can investigate.
    -   The incident enters a disclosure process.
        -   Third parties can be notified.
        -   Outside researchers may receive evidence.
        -   The public can learn what happened.

A correction path is beginning to appear.

Follow it.

> Who decides whether the evidence qualifies?

> Who controls the relevant records?

> Who determines what can leave the organization?

> Who decides whether disagreement survives internal review?

OpenAI answers some of this directly. Disputes can move to its Safety Advisory Group. Disagreements within that group, or staff objections to its decisions, ultimately escalate to OpenAI leadership. This is not an accusation. Somebody has to decide what a private laboratory publishes.

The architectural distinction is the point.

OpenAI's framework improves **evidence entry**.

It improves **legibility**.

It may improve **outside scrutiny**.

Those are real gains.

A public report still does not itself create an independent power capable of changing the model, stopping deployment, reaching the execution substrate, replacing the provider, or carrying the function somewhere else.

A report can tell the outside world that the dog found another door.

It cannot guarantee that anyone outside the house can close it.

That is where Modal Path Ethics enters.

* * *

## This Is the Point.

The artificial-intelligence alignment problem is usually strongest where it asks increasingly sophisticated questions about the **agent**.

-   What objective did it learn?
-   How does behavior generalize?
-   Can it deceive?
-   Can it recognize evaluation?
-   Can it manipulate oversight?
-   Can we interpret its reasoning?
-   Can we detect dangerous capabilities?
-   Will it cooperate with shutdown?
-   Can we monitor it?
-   Can we keep control?

All necessary.

Modal Path Ethics is making a different claim.

> **Corrigibility is also a property of the surrounding order.**

The system can become more aligned while the institution around it becomes less capable of correcting it.

The model can become safer while replacement becomes harder.

Monitoring can improve while the monitored system becomes embedded in the monitor's own infrastructure.

A shutdown instruction can remain perfectly valid while exercising it becomes institutionally catastrophic.

-   The machine can cooperate.
    -   The institution can still lose control.

That is the move.

And before publishing that move, Modal Path Ethics tried **very** hard to discover that somebody else had already made it.

* * *

## Please Kill This Claim.

The first version was much too easy.

> Maybe the new idea was **replaceability**.

No. There is prior work.

> Maybe the new idea was that formal authority can differ from effective control.

Absolutely not. Aghion and Tirole were writing about formal and real authority in **1997**.

> Maybe the new idea was that useful expert intermediaries can become difficult for nominal principals to control.

No.

The governor's dilemma is already a literature.

> Maybe it was distributed correction.

No.

Fault-tolerant computing has spent decades asking what survives component failure, Byzantine behavior, shared dependencies, broken trust, and reconfiguration.

> Maybe it was independent quorums.

Old problem.

> Asymmetric trust.

Existing problem.

> Safe handoff during reconfiguration.

Existing problem.

> Assurance cases whose assumptions change while the system evolves.

Existing problem.

> Polycentric governance without one universal apex.

Existing problem.

> Artificial-intelligence shutdown and corrigibility.

Existing problem.

> Institutional dependence on artificial intelligence.

Existing problem.

> Replaceable models.

Existing problem.

> Correction graphs.

Existing problem.

> End-to-end corrective architectures.

Existing problem.

There were bodies all around.

The research review eventually ranged across constitutional pluralism, polycentric governance, organizational authority, Byzantine quorum systems, asymmetric distributed trust, dynamic reconfiguration, assurance engineering, artificial-intelligence control, model replaceability, institutional dependence, correction-path capture, and contemporary corrective-completeness work.

Most of the candidate novelty died.

That was the correct outcome. The paper now explicitly disclaims invention of the component mechanisms.

One composition survived the audit.

So far as the targeted prior-art review could determine, Modal Path Ethics did **not** find the following object assembled as one constitutional condition on final authority:

> **the complete material path by which an authority can lose, kept consequential under the declared adversary, preserved as dependency and trust topology change, protected against laundering the guarantee by weakening its assumptions, and—where an independently constituted function must continue—capable of moving that function to an independent successor inside the correction deadline.**

That is much narrower than:

> **Nobody has thought about corrigibility.**

They have. I looked.

It is narrower than:

> **Nobody has thought about replaceability.**

They have.

It is narrower than:

> **Nobody has thought about institutional control.**

Obviously they have.

The claim is that these mechanisms become one constitutional object when the question is:

> **Can an authority that closes a consequential path still materially lose authority over it?**

That is the point Modal Path Ethics carried out of the literature review.

The paper calls the answer **material bounded finality**.

* * *

## The Dog Learns the House.

Now suppose the artificial intelligence works.

**Really** works.

No treachery yet. No schemes.

It catches the cancer. It finds the failing transformer. It notices the fraud. It writes excellent software and schedules the hospital. It routes medicine, joins records that previously required four departments and one exhausted patient to carry reality between them, reads the literature, and remembers the case history. It discovers inconsistencies humans miss.

People begin relying on it. Correctly.

Then the institution changes around that success.

Doctors learn its interface. Old systems are retired. Records accumulate in its format. New staff are trained around it. Budgets move toward its infrastructure.

Its classifications enter policy. Its outputs become inputs to other systems. It helps write the tools used to evaluate later systems. It preserves institutional memory. It becomes part of the route through which the organization knows what is happening.

Nobody rebelled.

Nobody hacked the Pentagon.

Nobody announced any secret objective.

The system can be extraordinarily helpful.

The institution has still moved.

Modal Path Ethics encountered this problem before the present research project.

In [_Field Instruments: Superintelligence_](https://modalpathethics.com/field-instruments-superintelligence/), the warning was that artificial intelligence could make answers cognitively reachable while the world remained institutionally unable to receive them:

> **The answer gets smarter.  
> The world around it becomes the bottleneck.**

The same article argued that more capable parts do not guarantee a more capable path.

Then [_The Nerd Reich Is the Easy Case_](https://modalpathethics.com/the-nerd-reich-is-the-easy-case/) found the harder version.

The dangerous system did not need an authoritarian founder. It could be benevolent.

Well governed. Useful. Popular. Voluntarily adopted.

The difficult case just **works**.

Every success earns the next dependency for a defensible reason until replacement itself begins to look dangerous.

The current research finally gave that intuition a narrower formal target.

* * *

## You Still Have the Off Switch.

Imagine that the system remains legally removable.

The board can terminate the contract.

The regulator can revoke authorization.

The hospital can shut it down.

The laboratory can disconnect it.

There is an appeal, a policy, and a button.

There is a human being with the formal authority to say:

> **Stop.**

Excellent.

> Press it.

-   The hospital loses its diagnostic integration.
-   Scheduling fractures.
-   The replacement system cannot read all accumulated state.
-   Another alternative can do the core inference but does not have the interfaces.
    -   A third has the interfaces and cannot carry the workload.
-   Staff who knew the older system have left.
-   Migration takes nine months.
    -   The legally protected correction window is three days.

Nothing happened to the rule.

Nothing happened to the button.

Nothing happened to the formal hierarchy.

The institution still possesses the right to remove the system.

It can no longer safely survive using it.

This is the constitutional failure.

> **Formal corrigibility can survive the death of material corrigibility.**

That is not a property inside the model.

It is a property of the relation among the model, its replacements, records, infrastructure, institutions, permissions, people, and time.

* * *

## The System Does Not Have to Resist.

The obvious catastrophe story contains resistance.

-   The artificial intelligence hides its objective.
-   It deceives the monitor.
-   It escapes and copies itself.
-   It disables oversight.
-   It manipulates its operators.
-   It [refuses shutdown commands](https://modalpathethics.com/applied-case-the-superintelligence-ban-cannot-find-the-superintelligence/).

Those possibilities justify serious technical work.

**Material bounded finality** identifies another route.

-   The system answers honestly.
-   The system cooperates with evaluation.
-   The system accepts the shutdown instruction.
-   The system never disables the button.
    -   It becomes useful.
    -   Then more useful.
    -   Then difficult to replace.
    -   Then expensive to replace.
    -   Then dangerous to replace.

Eventually the institution discovers that exercising its own correction authority would destroy something the institution is independently obligated to preserve.

The artificial intelligence never needed to seize the off switch.

The world around the switch changed.

* * *

## Alignment Has Two Ends.

This is why the **dog** matters.

**Alignment** describes a relation.

-   One end of the relation is the artificial intelligence.
    -   That end is changing very quickly.
-   The other end contains the people and institutions doing the aligning.
    -   That end changes too.

The institution delegates. It forgets. It reorganizes. It moves records. It retires alternatives. It centralizes interfaces. It rewrites jobs. It changes what counts as ordinary competence. It lets the new system help inspect the world. Eventually it may let the system help inspect systems like itself.

The principal is no longer standing still while the agent approaches it.

The principal is being rebuilt around the agent.

At that point, asking whether the artificial intelligence is aligned with the institution is insufficient.

The institution itself has become part of the safety case.

Now ask:

-   Who can enter evidence?
-   Who can challenge?
    -   Who judges?
-   Who controls the substrate on which the remedy must execute?
-   Which dependencies are shared?
-   Which failure coalitions were assumed away?
    -   Who can alter those assumptions?
-   Can correction survive a topology change?
-   Can the incumbent influence its successor?
-   Can the relevant state be moved?
-   Can somebody else actually carry the function?
    -   How long does that take?
        -   What happens if the answer changes six months from now?

These are no longer questions about whether the dog understands the command.

We are now auditing the house.

* * *

## The Corrigibility Horizon.

This produces a particularly unpleasant failure mode.

Suppose replacement works today.

An independent system can take over.

Records remain portable. Staff retain the relevant knowledge. Interfaces remain documented. Migration takes two weeks.

A year passes.

The incumbent improves.

The institution builds more around it. The protected workload grows. State accumulates. Alternative competence decays. Old tooling disappears. Replacement now takes six months.

The formal removal power has not changed.

No clause was repealed.

No regulator surrendered jurisdiction.

No administrator lost access to the button.

Only the material world under the right changed.

The research calls the boundary a **corrigibility horizon**:

> the point after which formal removal remains intact while no adequate independent successor can be made ready inside the protected correction interval.

This is a wicked little concept.

Nothing dramatic has to happen at the boundary.

No warning light turns red.

No machine declares independence.

No executive signs away authority.

Tuesday becomes Wednesday.

The gap gets wider.

The right survives.

The path dies.

* * *

## Somebody Still Has to Act.

There is an obvious objection to all of this.

Require independent evidence. Independent review. Independent execution. Independent succession. Safe reconfiguration. Protected threat assumptions. Capacity reserve. State portability. External correction.

> **Everything.**

Congratulations.

Nobody can make a decision anymore.

The hospital patient dies while fourteen constitutional safeguards hold a meeting.

That would be a useless theory. Finality exists for a reason.

Hospitals act. [Power grids switch](https://modalpathethics.com/someone-has-to-coordinate-this/). [Emergency commanders close options](https://modalpathethics.com/applied-case-thirteen-minutes-at-east-palestine/). Safety systems halt processes. Organizations eventually deploy something or refuse to deploy it. Delay changes the field too.

Modal Path Ethics has never been arguing for a world without final authority.

The entire problem is whether **finality can remain bounded**.

So the project did something slightly deranged for an article about a dog.

[It built the system.](https://zenodo.org/records/22818297?ref=modalpathethics.com)

* * *

## _62,328 States Later_.

The integrated finite model encoded operational closure, correction availability, independent review, guarded topology changes, protected threat assumptions, safe handoff, reserve conditions, remedy, and succession inside one finite transition system.

Then the checker exhausted the reachable graph.

> **62,328 reachable states.**

> **297,808 transitions.**

> **15,288 correction-start states.**

From every represented correction-start state, an external path to material remedy remained reachable within two transitions.

An independent successor remained externally reachable within seven, equal to the modeled deadline.

Fourteen targeted mutations were then used to break particular protections and make sure the corresponding obligations actually failed when their machinery was removed.

Do not inflate this result.

It does not prove a universal constitution.

It does not prove that real organizations fit the model.

It does not prove scheduler-independent liveness.

It does not certify arbitrary software.

It does not tell us which functions deserve constitutional continuity.

It does not prove the extinction researchers right.

The paper spends an **irritating** amount of space saying exactly that.

The result establishes something smaller and necessary:

> **the requirements can coexist.**

A system can close an operational path and retain a materially consequential route through which its current authority loses.

> Correction does not automatically require paralysis.

The dog can retrieve the ball.

It just does not inherit title to the yard.

* * *

## This Is the Extra Thing.

So here is the addition Modal Path Ethics is trying to make to the artificial-intelligence safety conversation.

-   Keep doing alignment research.
-   Keep studying deceptive alignment.
-   Keep studying reward hacking.
-   Keep building interpretability.
-   Keep evaluating sabotage.
-   Keep monitoring agents.
-   Keep publishing incidents.

OpenAI's new reporting framework is good.

Anthropic's alignment-faking work is good.

The researchers resigning because they believe catastrophe is plausible should be taken seriously enough to examine the claim rather than turned into prophets or cranks on sight.

All of that addresses real parts of the problem.

Then add one more requirement:

> **Never let the capacity to correct an artificial intelligence depend entirely on the artificial intelligence, institution, infrastructure, assumptions, or function whose correction is at issue.**

And where continued function really is independently required:

> **Preserve an independent path capable of carrying enough of that function for removal to remain materially possible.**

This is where the literature review ended.

Fault tolerance supplies pieces.

Constitutional theory supplies pieces.

Organizational authority supplies pieces.

Assurance engineering supplies pieces.

Artificial-intelligence control supplies pieces.

Replaceability research supplies pieces.

Contemporary correction architectures supply pieces.

Modal Path Ethics is taking those pieces and placing them around a different protected object:

> **the material ability of final authority to lose.**

That is the claim.

Not that nobody has studied the dog.

That would be ridiculous.

The claim is that the safety case remains incomplete until somebody audits whether the house can still throw the dog out.

* * *

## Everyone May Still Be Dead in Ten Years.

Return to the sentence.

Maybe Coxon, Hubinger, Chughtai, and the researchers around them are badly wrong. Maybe extinction estimates collapse under better evidence.

Maybe advanced artificial intelligence becomes enormously disruptive and nowhere near capable of ending civilization.

Wonderful.

Material bounded finality still matters.

The hard case never required Skynet. It required competence.

As Modal Path Ethics argued before this research began, the dangerous central system may be the one that simply works so well that every additional dependency has a good reason.

Now take the other possibility seriously.

Maybe the warnings are directionally right.

Maybe models acquire long-horizon planning, strategic deception, cyber capability, research acceleration, autonomous tool use, sophisticated coordination, and whatever comes after the things laboratories are already finding.

Then **alignment** alone is carrying too much constitutional weight.

A civilization facing systems like that has to do more than teach them good behavior. It has to remain materially capable of disagreement.

Of seeing.

Of objecting.

Of preserving evidence.

Of changing the rules.

Of reaching the substrate.

Of stopping the process.

Of replacing the carrier.

Of continuing whatever truly has to continue without asking the challenged system for permission.

And it has to preserve those capacities **before** dependence makes them ceremonial.

OpenAI has just built a better mechanism for telling the world when the dog finds another door.

Good.

**Now build a world that can still close one.**

* * *

## The Dog Gets the Ball.

Then the dog learns which ball you meant.

Then why you wanted it.

Then what else you wanted protected.

Then how you usually decide.

Then how the household works.

Then the household asks the dog to help.

This dog is excellent.

So the household gives it more.

The dog remembers everything.

The dog coordinates beautifully.

The old systems are expensive.

Nobody uses them anymore.

The dog remains polite.

The dog remains useful.

The dog remains aligned.

You still own the ball.

You still write the rules.

You still have the right to say stop.

There is one final alignment evaluation.

> **Can you?**
