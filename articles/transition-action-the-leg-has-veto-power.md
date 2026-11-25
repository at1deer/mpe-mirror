---
title: "Transition Action: The Leg Has Veto Power"
slug: "transition-action-the-leg-has-veto-power"
canonical_url: "https://modalpathethics.com/transition-action-the-leg-has-veto-power/"
mirror_url: "https://mirror.modalpathethics.com/articles/transition-action-the-leg-has-veto-power.md"
published_at: "2026-11-23T06:00:00.000-06:00"
updated_at: "2026-11-23T05:59:59.000-06:00"
tags:
  - "Transition Action"
  - "Chastening of the Controller"
authors:
  - "Aidan Lawson"
source: "Ghost Content API — published post"
mirror_generated_at: "2026-11-25T09:01:39.920Z"
mirror_generator_version: "2.0.0"
sha256_plaintext: "9a6f4a176db51adfd56c8ee6d84cccaaa97cd168a647578e807fbf97064f734d"
---
# Transition Action: The Leg Has Veto Power

> _Transition Action_ is the heavily neglected technical wing of Modal Path Ethics: a series about technologies crossing from research, prototype, or theory into reachable action. Each entry begins with a live technical event and asks what has changed in the field. This is not a futurist roundup.

-   What can now be built, tested, measured, or operationalized that was not reachable before?
-   What physical process carries the new action?
-   Which old background assumption has become less necessary?
-   What new failure conditions enter with the new design?

> _Transition Action_ is a field inspection at the moment a capability starts to move.

* * *

### This fucking thing's name is **INSECTRON**.

There was just no chance Modal Path Ethics was going to behave normally about this one.

This week in _Transition Action_, the controller has lost control of the legs.

On November 5, Donato Romano and Gianluca Manduca published a tiny six-legged robot in _npj Robotics_. It is **8.7 centimeters** long. It weighs **33.9 grams.** It has two motors, six legs, an onboard camera, an ESP32, magnetic couplings throughout its drivetrain, and the exact name that every congressional hearing in 2047 will point to while insisting _nobody_ could possibly have seen this coming.

**INSECTRON** is also very slow.

At its fastest tested condition on flat ground, it reached about 2.7 centimeters per second.

So we have time.

The important part is what happens when one of its legs gets stuck.

-   The motor keeps trying to turn.
    -   The obstacle says **no.**

And instead of waiting for a central controller to _notice the disagreement, calculate the force, decide whether the situation is dangerous, issue a new instruction, and hope nothing snaps during the committee process—_

-   **the leg slips out of the drivetrain.**

The connection is magnetic.

Too much torque arrives?

-   The magnets let go.
-   The obstruction passes.
    -   The magnets reconnect.
    -   The leg returns to work.

The controller has issued an order.

But the leg has discovered judicial review.

* * *

# Six Legs. Two Motors.

# One Emerging Labor Dispute.

Hexapod robots have six legs because insects have six legs and insects have spent several hundred million years making this all look much easier than it is.

A robot designer has options.

-   Give each leg its own actuator and obtain exquisite control at the price of motors, wiring, drivers, weight, power demand, control complexity, and six separate opportunities for something expensive to become a loose wire.
-   Or mechanically link the legs and accept less independent control in exchange for a much simpler machine.

**INSECTRON** chooses violence against the parts count instead.

Its six legs are divided into two groups of three.

Each group gets one DC micromotor.

Gears synchronize the three legs on each side into a repeating walking cycle. The two sides then run opposite one another so that one tripod supports the body while the other moves.

-   Two motors.
-   Six legs.

A large part of the gait has been removed from software and bolted into the geometry of the drivetrain.

Already very disrespectful.

Then Romano and Manduca made the bolts optional too.

The legs are attached to their driving gears with small neodymium magnets.

-   Not screws.
-   Not rigid keyed joints.
    -   **Magnets.**

Each leg is effectively connected through a tiny magnetic clutch.

Under ordinary load, the magnets hold.

Torque passes from gear to leg.

**INSECTRON** walks toward whatever great and terrible objective has been entered into the mission planner.

> Then a leg jams.

The required torque rises.

At the designed limit, the magnetic connection slips.

The drivetrain keeps moving without forcing the trapped leg through the obstruction.

The machine has not solved the obstacle. It has solved a smaller and, for the next several milliseconds, much more important problem:

> **do not destroy yourself because the ground disagreed with the plan.**

* * *

# The Rock Does Not Need an Account.

Consider the respectable _modern_ solution.

-   A robot encounters resistance.
-   A sensor measures something.
    -   The measurement becomes a signal.
    -   The signal becomes data.
        -   The processor compares the data to a threshold.
        -   The controller classifies the event.
            -   The control law modifies the motor command.
            -   The motor driver changes the current.
                -   The machine finally stops trying to shove its own leg through a rock.

Sensible. Also:

> the rock was there the whole time.

**INSECTRON** lets the rock participate in the conversation earlier.

-   The obstacle increases resistance at the leg.
-   Resistance increases torque at the coupling.
    -   The coupling slips.
    -   Meeting over.

The machine does not need to know what kind of obstacle produced the overload before the overload protection can work.

Rock.

Root.

Debris.

Some researcher leaning on the robot again.

Doesn't matter.

**INSECTRON's** magnetic clutch is radically indifferent to ontology.

It has one jurisdiction.

> **Too much torque.**

Within that jurisdiction, it acts immediately.

This is that same little insult to centralized control that keeps appearing throughout _Transition Action._

-   _Shape Is Already Code_ found computation migrating into morphology.
-   _The Signal Never Becomes Data_ found touch becoming action before a central processor had finished converting the world into paperwork.

**INSECTRON** adds another move.

The physical transmission now contains a refusal condition.

The machine does not have to represent the bad command in order to stop faithfully transmitting it. There is a limit in the connection itself.

The leg can say **no** before the center has had time to compose a statement.

* * *

# The Bug Is Full of Magnets.

The researchers did not stop after giving the legs local veto power.

The two halves of INSECTRON are also magnetically coupled.

Each side of the robot contains one three-leg drive module.

Ordinarily, the two modules stay coordinated.

But reality has retained the right to apply asymmetric force.

-   One side hits something.
-   One set of legs carries more load.
-   The body is struck.
-   The two halves momentarily disagree about what the correct geometry of **INSECTRON** should be.

A rigid connection would settle the dispute through stress.

**INSECTRON** permits some slippage.

The magnetic coupling between the two drive modules can absorb transient differences and allow the halves to move relative to one another before returning toward their normal relation.

This is exactly the kind of crass behavior insects have been using to humiliate roboticists for years.

An insect body is not a tiny armored vehicle assembled around a perfect kinematic diagram.

Legs bend.

Joints yield.

Segments move.

Loads redistribute.

The body contributes to the answer.

Robotics has a word for one version of this: **preflex**.

A preflex is a useful response produced by the physical properties of the body before a new control signal is required.

**Elasticity** can answer.

**Geometry** can answer.

**Compliance** can answer.

The nervous system may arrive later and discover that the body has already prevented the emergency from becoming paperwork.

**INSECTRON** gives its drivetrain a small mechanical version of that privilege.

The magnets do not know anything.

But knowledge was never required.

* * *

# The Magnets Have Also Taken Over Sensing.

At this point, the magnets begin to get ideas.

They are already:

-   attaching the legs;
-   transmitting torque;
-   limiting overload;
-   allowing tool-free replacement;
-   tolerating some misalignment;
-   coupling the two drive modules;
-   absorbing disturbances.

Apparently this was insufficient institutional coverage.

The transmission magnets are also used with Hall-effect sensors to track the angular phase of the drivetrain.

As the magnets rotate, the sensors read the changing magnetic field.

That gives the onboard electronics enough information to reconstruct where each drive module is in its cycle and maintain the intended relationship between the two sides.

So one physical feature now participates in attachment, transmission, protection, modularity, compliance, and proprioception.

Over here at Modal Path Ethics, we have grave concerns about this accumulation of jurisdiction.

Unfortunately the magnets have an excellent performance record and polls remain strong.

* * *

# The Craven Scientists Attack **INSECTRON**.

A new robot can claim resilience.

Or researchers can place it in an arena and begin hitting it.

Romano and Manduca chose science.

Their disturbance test uses a motorized actuator with a rigid indenter that descends vertically onto the robot.

-   The unsuspecting machine is walking.
    -   The apparatus comes down.

**INSECTRON** is physically interrupted from above for either:

-   0.1 seconds;
-   0.5 seconds;
-   or 1 second.

Then the indenter retreats and everyone waits to see whether the bug pulls itself together.

They performed 360 trials.

**INSECTRON** recovered in more than 90 percent of them.

Across the three perturbation durations, recovery landed around 91, 95, and 94 percent.

There are precious few dignity-preserving ways to describe this experiment.

The researchers repeatedly squished their robot with a machine.

The robot _usually_ resumed walking.

I have now read several hundred scientific papers for Modal Path Ethics and remain delighted by how much serious knowledge is ultimately produced by someone professionally doing the thing a five-year-old would have tried first.

> **What if I squish it.**

**Excellent** question.

_Fund it._

* * *

# **INSECTRON** Goes Outside.

The researchers also placed their little magnetic employee on different terrains.

> Soil.

> Sand.

> Perlite.

> Grass.

> Inclines.

> Normal surfaces.

The robot walked across them with different energetic costs and speeds.

On the flat reference surface, increasing its gait frequency from 1.5 to 1.9 hertz raised forward speed from about 1.8 to 2.7 centimeters per second.

A five-degree incline dropped that performance to roughly 0.8 centimeters per second.

This is where we must temporarily suspend the insect uprising narrative.

The future Sovereign of the Storm Drain currently struggles with a mild ramp.

**INSECTRON** is not escaping the laboratory tonight.

A moderately determined caterpillar may still defeat this thing.

The robot also has a minimum measured Cost of Transport of around 30, which is a useful scientific way of saying that absolutely nobody should currently build an **INSECTRON** freight network.

Fine.

We have identified the remaining window for human preparation.

* * *

# The Leg Comes Off.

There is another consequence of magnetic attachment which the paper presents with unreasonable calm.

> The legs can be replaced without tools.

They detach.

You put another one on.

The magnets align it.

And the robot is ready again.

This only sounds innocent because the current object is around the size of something you would remove from a kitchen using a glass and an envelope.

Scale this architecture upward in imagination for twelve seconds.

> A machine arrives at a damaged site.

-   One leg breaks.

No mechanic opens a housing.

No bolt pattern must be aligned.

No intricate fastening procedure begins.

-   The damaged limb comes off.
    -   Another goes on.
    -   The coupling finds its position.
        -   The robot returns to the field.

This is modularity entering the body at the same point where overload protection entered it.

And this is why **INSECTRON** is more interesting than a funny robot with magnets.

The researchers are collapsing several previously separate mechanical problems into one neat physical relation.

-   Attachment.
-   Torque transmission.
-   Release.
-   Realignment.
-   Replacement.
-   Shock tolerance.

The connection is doing much more than holding two pieces together.

The interface has become behavior.

* * *

# The Interface Has Opinions.

This is the _Transition Action_ hinge.

A conventional diagram treats the drivetrain as a servant.

-   Motor over here.
    
    -   Leg over there.
    
    -   Transmission in the middle.
        -   The transmission faithfully carries the command.

**INSECTRON** corrupts this picture.

The transmission has conditions.

It will carry the torque under one region of the field.

Outside that region, the relation changes.

This means the controller's command is no longer equivalent to the body's action.

There is another authority in the path.

Not another _intelligence_.

Not another _processor_.

**A material threshold.**

The controller can command the motor to continue.

But the magnetic interface decides how much of that command actually reaches the leg because physical law has been recruited into the architecture as a local boundary.

The control diagram therefore has to stop pretending that intelligence arrives at the body from somewhere up above it.

The controller does not stand outside the machine issuing reality.

It participates in a field that answers back.

Today, the field's answer is:

> **no, that leg is stuck.**

* * *

# There Is, Unfortunately, Prior Art.

We now perform the traditional _Transition Action_ ceremony in which Modal Path Ethics gets very excited and then discovers engineering actually existed before Tuesday.

Roboticists have been exploiting compliant bodies for decades.

RHex famously demonstrated that a mechanically simple hexapod with compliant legs could achieve robust locomotion across difficult terrain without micromanaging every footfall.

Passive dynamics, series elasticity, mechanical clutches, flexible structures, underactuation, morphological computation, and embodied intelligence all belong to established research traditions.

**INSECTRON** has not discovered the shocking principle that machines can survive impacts by being less rigid.

Nor has it invented _magnets_.

This is devastating, but the article will continue.

The specific move here is a compact integration:

-   three legs driven by one motor on each side;
-   magnetic micro-clutches between drivetrain and legs;
-   magnetic coupling between the two drive modules;
-   magnetic sensing for phase reconstruction;
-   passive overload release;
-   self-alignment;
-   tool-free mechanical reconfiguration.

That package is article-worthy because miniature robots live under brutal constraints.

Every motor counts.

Every fastener.

Every gram.

Every extra control path becomes another component that has to fit inside a machine whose total body length is 8.7 centimeters.

**INSECTRON** buys multiple forms of resilience from the same physical architecture.

That is the _transition_.

* * *

# Do **Not** Build the Swarm Yet.

There are several extremely funny reasons we are not _yet_ turning our sewers, mines, collapsed structures, and planetary surfaces over to **INSECTRON.**

The current robot is slow.

Its disturbance testing is controlled.

Its environment is still friendly compared with the places where resilient miniature robots would eventually be useful.

Dust changes the game.

Mud mixes things up.

Metal fragments can get interesting.

Repeated wear can be an issue.

Magnetic contamination messes with things in a particularly on-theme way.

The coupling threshold also has to be chosen correctly.

Too weak and the robot's legs begin resigning during ordinary work.

Too strong and the overload protection stops protecting much of anything.

There is no metaphysical **"correct magnet."**

There is a design region.

The robot's mass, gait, leg geometry, surface, expected payload, impact conditions, manufacturing tolerances, magnetic strength, and required torque all participate in where that region sits.

The local veto has to be calibrated.

Otherwise **INSECTRON** develops either authoritarian legs or a parliament incapable of passing motion.

Both are bad robotics.

* * *

# What This Makes Reachable.

The immediate field change is compact.

A centimeter-scale hexapod can now demonstrate a drivetrain in which **the same magnetic interfaces used to carry motion also provide passive overload release, self-alignment, disturbance tolerance, and modular leg replacement.**

Small inspection robots can enter environments where collisions are normal rather than exceptional.

Search robots can be built with limbs that sacrifice connection before sacrificing the drivetrain.

Field machines can become easier to repair.

Miniature robots can obtain resilience without assigning an independent actuator, force sensor, and protection routine to every joint.

More interestingly, the robot shows one more way control can be distributed without becoming vague.

-   The command still exists.
-   The motor still moves.
-   The gait still has coordination.
    -   The leg-drive interface has its own bounded response.

There is no need to inflate this into "the robot body is intelligent" today.

That phrase usually spends five paragraphs turning someone's nice, precise result into incense.

The actual result is better.

> **A physical relation can carry a rule.**

-   Below this torque:
    -   remain coupled.
-   Above this torque:
    -   _slip._
-   When the condition changes:
    -   reconnect.

The connection is the rule.

* * *

# The _Transition Action_.

The official **_Transition Action_** is:

> **Give the leg veto power over the force passing into it.**

Romano and Manduca built overload refusal into the mechanical path itself.

A trapped leg does not need to remain rigidly obedient until another layer notices the consequences.

The coupling can yield locally.

The drivetrain can survive the disagreement.

The robot can recover.

The physical interface has become a participant in control.

This week, the controller takes home another L.

A very small one.

About 8.7 centimeters.

It is walking slowly across the table.

Its name is **INSECTRON.**

And for reasons that should concern everyone, **its legs are replaceable.**

* * *

## Sources.

-   Romano, D., and Manduca, G. (2026). [Insect-inspired hexapod robot with magnetically coupled compliant and modular drive system](https://doi.org/10.1038/s44182-026-00106-y?ref=modalpathethics.com). _npj Robotics_, 4, Article 54. Published November 5, 2026.
-   Saranlı, U., Buehler, M., and Koditschek, D. E. (2001). [RHex: A Simple and Highly Mobile Hexapod Robot](https://doi.org/10.1177/02783640122067570?ref=modalpathethics.com). _The International Journal of Robotics Research_, 20(7), 616–631.
