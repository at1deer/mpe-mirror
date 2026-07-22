---
title: "Klein Conformance Protocol"
slug: "klein-conformance-protocol-evidence-for-action-through-resistant-matter"
canonical_url: "https://modalpathethics.com/klein-conformance-protocol-evidence-for-action-through-resistant-matter/"
published_at: "2026-05-19T00:48:27.000-05:00"
updated_at: "2026-06-08T23:47:23.000-05:00"
tags:
  - "Transition Action"
source: "Ghost Content API published post"
mirror_generated_at: "2026-07-22T14:36:31.265Z"
sha256_plaintext: "a99466c5a7407fc08fad9f96f280348f603c1a550a21e26ee3579bd3957214ed"
---
# Klein Conformance Protocol

[Klein Conformance Protocol is now public.](https://github.com/at1deer/Klein-Conformance-Protocol?ref=modalpathethics.com)

![](https://storage.ghost.io/c/20/43/2043f11a-6ae3-404c-bb28-01fce8d9ac88/content/images/2026/05/image-122.png)

KCP was mostly developed already back in January, I just hadn't actually made it real yet. This was one of the first completed, material artifacts of the thoughts behind Modal Path Ethics. This began as a problem in structure.

If action matters, then [the difference between intending a transition and causing a transition matters](https://modalpathethics.com/applied-case-the-double-effect/). If a system says that it did something, [that claim is not the same as the actual event](https://modalpathethics.com/applied-case-the-therac-25/). If a machine receives an instruction, [that instruction is not the same as substrate change](https://modalpathethics.com/applied-case-the-experience-machine/). If a backend reports success, [that report is not the same as physical truth](https://modalpathethics.com/applied-case-the-shooter-inquiry/).

That gap is where a lot of the modern world quietly lives today.

Software is comfortable with its logs. Hardware is comfortable with drivers. Labs are comfortable with their instruments. Robotics is comfortable with middleware. Each of these domains has its own way of saying, “the system did the thing.”

But when that thing passes through resistant matter, like electrodes, droplets, sensors, motors, cells, reagents, field conditions, timed apparatus, degrading components, now that claim needs more structure.

Klein Conformance Protocol is an attempt to build some of that structure.

Not the whole machine. Not the final proof. KCP is not the grand unified operating system for matter. The first public alpha is narrower and, for that reason, more serious:

> Klein is a protocol stack for packaging, signing, and independently verifying evidence artifacts for substrate execution attempts under uncertainty.

That is the cleanest version. The more impolite version is: this is my way to stop pretending that “the command ran” and “the world changed” are anywhere near the same sentence.

* * *

## Why This Belongs Here.

Modal Path Ethics is built up around [reachable future](https://modalpathethics.com/formal-weighted-reachable-future-space/) state-space. [Harm](https://modalpathethics.com/contraction-is-harm/) contracts that space. Good expands it without causing harm. [Better](https://modalpathethics.com/applied-case-1904-st-louis-marathon/) chooses the reachable path that preserves and opens the most structure under the conditions actually present.

This framework has always had a technical shadow, operating in silence on my machines.

You cannot evaluate action honestly if you cannot actually tell what changed. You cannot evaluate repair honestly if you cannot distinguish repair from a report of repair.

You cannot evaluate technological capability honestly if every backend is allowed to smuggle its own success condition into the story.

Klein is not “the software version” of Modal Path Ethics. This is not a moral theory in code. This is far more modest and more useful than that.

Klein is an **evidence discipline for transitions**.

KCP asks:

> What was the intended artifact?

> What was the planned execution schedule?

> What trace did the backend actually issue?

> What evidence log was produced?

> What was signed?

> What can an independent verifier check?

> What was simulated?

> What was observed?

> What is still not proven?

Those are all Modal Path Ethics questions before they are traditional software questions. They are all questions about whether a claimed path through state-space is actually supported by the extant field.

* * *

## The Problem: Matter Resists.

Software can lie, but software usually lies in a clean room. Physical systems lie in a swamp. [Resistentialism may be more real than I previously joked](https://modalpathethics.com/secondary-morals/).

Matter resists our plans. Devices drift. Sensors miss. Electrodes fail. Droplets stick. Motors skip. Cameras glare. Pipettes clog. Timers desynchronize.

A command that is valid in the abstract can be entirely invalid on a damaged substrate. A planned transition can be partially reachable, temporarily unreachable, or reachable only through repair.

That means physical execution claims need more than just logs.

They need layered evidence. Klein separates those layers.

An **artifact** says what is supposed to be executed.

A **runbook** says the planned schedule of execution.

A **trace** says what the backend issued or applied.

**HAIL** (the evidence log) records canonical events.

A **run manifest** binds the run to hashes, backend identity, profile, and evidence.

A **run bundle** packages the evidence into a portable `.kcprun` file.

An **independent verifier** checks that bundle without trusting the original executor.

That stack is the spine of the project:

```
artifact → runbook → trace → HAIL → manifest → bundle → verifier
```

The current alpha implements that spine. It also implements the trust side:

```
backend key → registry → signed registry → trust policy → signed capabilities
```

A physical execution claim is not only “what happened?” It is also “who says so, and under what authority, and with what capabilities, and under what trust policy?”

Klein does not try to erase trust. It makes trust explicit enough to inspect.

* * *

## What This Alpha Actually Does.

[The public alpha](https://github.com/at1deer/Klein-Conformance-Protocol?ref=modalpathethics.com) can validate `.klein` and `.kleinc` artifacts. It can run the v1 conformance suite. It can emit and check HAIL evidence logs. It canonicalizes evidence, hash-chains the event stream, signs run manifests, verifies trust policy and backend identity, packages portable `.kcprun` bundles, and verifies them independently.

There is a Python verifier and a Rust verifier surface. The Rust side is all there because independent verification should not mean “the same Python process agreed with itself.” Cross-language fixture checks are part of making the evidence truly portable.

The first substrate profile is DMF/EWOD: digital microfluidics / electrowetting-on-dielectric.

This choice is not random. DMF/EWOD is a perfect early substrate for Klein because it sits between computation and matter in a very literal way.

![](https://storage.ghost.io/c/20/43/2043f11a-6ae3-404c-bb28-01fce8d9ac88/content/images/2026/05/opendrop-730x300.png)

You have electrode grids, frame sequences, channel states, voltage and frequency ranges, and visible substrate transitions. You can describe an intended state change, generate a planned runbook, execute a simulated backend, record a trace, produce observations, and package the result.

**The OpenDrop part needs to be said very carefully:**

![](https://storage.ghost.io/c/20/43/2043f11a-6ae3-404c-bb28-01fce8d9ac88/content/images/2026/05/image-121.png)

### KCP does **not** control OpenDrop hardware.

It does **not** vendor OpenDrop code. It does **not** claim OpenDrop support.

What it has, instead, is an experimental OpenDrop/EWOD dry-run and transport-planning scaffold. This maps Klein DMF concepts into OpenDrop-style command intents and serialized command streams, with hardware IO disabled by schema and runtime validation. It is there so future contributors are not starting from a blank page.

That is not any kind of hardware claim. I have tested this on **zero hardware, and the alpha scaffold was not built to run on real hardware**.

* * *

## Recovery Without Magic.

One of the most important pieces in the alpha is ECRP: the retry/replan contract.

Recovery is where systems love to hallucinate their competence. A backend fails, retries something, reports success, and the report gets treated as repair.

That is not actually acceptable if the system is acting through matter. Recovery needs rules. Klein’s rule is simple:

> No invisible repair.

If recovery happens, it must always be policy-bound, trace-backed, and evidence-backed. If a retry succeeds in simulation, the evidence must show the failure, the allowed strategy, the attempt, the trace, and the final status. If the evidence does not support the recovery claim, the claim fails.

The current alpha includes one narrow simulator-only recovery success path. Pay close attention to that phrase: **Simulator-only**. **Narrow**. **Evidence-backed**. This is not physical recovery proof.

This is the right order of operations, I think. First, define what recovery would have to mean. Then, simulate it honestly. Then, later, make hardware produce the same kind of evidence.

* * *

## Observation != Proof.

The alpha also adds observation semantics.

A **trace** says what the backend issued. An **observation** says what a simulator, sensor, or source reported about substrate state.

Those are not the same thing.

In current Klein, **observations** are simulator-backed snapshots. They can confirm simulator state against trace/runbook expectations. They cannot prove physical droplet motion. They cannot certify that a wet-lab event occurred. They are evidence artifacts inside a declared model.

Again, this is the point. Klein does not get stronger by pretending anything. It gets stronger by refusing to collapse categories down for its convenience.

A simulated observation is useful, because it defines the shape a later physical observation must now satisfy. It gives future hardware work a target. It is still not proof of anything.

* * *

## What Klein **Does Not** Claim.

The alpha does not claim physical proof.

It does not claim hardware support.

It does not claim HIL execution.

It does not claim sensor proof.

It does not claim trusted timestamp proof.

It does not claim hardware attestation.

It does not claim production certification.

Those are not failures, just the current boundaries.

A system that lies about its boundary is worse than useless in this space, even more than many others. [It contracts the future by making bad evidence look like good evidence](https://modalpathethics.com/tales-of-distortion-symmess-hole/). [It invites people to build on false ground](https://modalpathethics.com/applied-case-the-prisoners-dilemma/).

Klein’s current alpha instead attempts to make the ground visible.

* * *

## Why KCP Matters.

A lot of technological harm comes from collapsed transitions.

We say “the AI decided,” when really, a distributed field of incentives, datasets, architectures, tools, operators, and deployment conditions produced a transition.

We say “the lab result showed,” when really, an instrument, sample, protocol, calibration state, software layer, and interpretive frame [produced an evidence object](https://modalpathethics.com/applied-case-the-scientific-method/).

We say “the machine did it,” when really, what we have is an instruction, a trace, a partial observation, and a claim.

That collapse is not just sloppy. This one directly damages the field. This one lets weak claims pass as strong claims. It lets systems borrow authority from matter without paying the evidentiary cost of acting through real matter.

Klein is one attempt to demand that cost.

If a backend wants to claim execution, then it should emit evidence. If it wants to claim recovery, then it should emit the failure and the repair path. If it wants trust, it should bind itself to keys, registries, policies, capabilities, and verifiable bundles. If it wants physical proof, it should eventually bring observations, hardware source semantics, timestamps, attestation, and a threat model.

Until then, it should say what it has.

* * *

## What is Public Now.

The public alpha includes the repository, documentation, whitepaper draft, demo commands, release notes, portable bundle examples, recorded-run examples, and verifier paths.

This demo is not very flashy. You will not see a video of a glowing lab robot. It is better than that: it is portable and inspectable.

You can run the conformance suite yourself. You can verify a `.kcprun` bundle. You can validate a recorded run. You can inspect the OpenDrop/EWOD dry-run transport plan. You can run the Rust verifier against the cross-language fixtures. You can see exactly what passes and exactly what is still future work here.

So the demo is not, “trust me.”

It's, "verify the evidence".

* * *

## The Better Path Ahead.

The next work is not to rush into any hardware claims.

The next work is to let the alpha breathe in public, try and get eyes on the architecture, and then move carefully. The long path is larger.

Klein is aiming at a future where substrate execution claims can move between systems the same way network packets can move between machines: not because every substrate is the same, because the evidence boundary is explicit enough to route, verify, reject, retry, and audit.

That is the “_TCP/IP for matter_” intuition, but not as a slogan. As work to do.

The current alpha does not get us there. It gives us the first honest pieces: artifacts, runbooks, traces, evidence logs, signed manifests, trust policy, portable bundles, independent verification, substrate profiles, simulated observations, recorded-run archives, and dry-run adapter boundaries.

That is enough to say the project has crossed from idea into structure. So, [Klein is public now](https://github.com/at1deer/Klein-Conformance-Protocol?ref=modalpathethics.com).
