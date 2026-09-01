---
title: "Transition Action: The Signal Never Becomes Data"
slug: "transition-action-the-signal-never-becomes-data"
canonical_url: "https://modalpathethics.com/transition-action-the-signal-never-becomes-data/"
published_at: "2026-07-20T21:46:37.000-05:00"
updated_at: "2026-07-21T01:17:31.000-05:00"
tags:
  - "Transition Action"
  - "Modal Path Ethics"
  - "Chastening of the Controller"
source: "Ghost Content API published post"
mirror_generated_at: "2026-09-01T16:52:20.240Z"
sha256_plaintext: "68b3d1dd37ef20fd1d5ad6b1b5128202eb990bb40501358edc3bf3f8762ced9d"
---
# Transition Action: The Signal Never Becomes Data

> Transition Action is the technical wing of Modal Path Ethics: a series about technologies crossing from research, prototype, or theory into reachable action. Each entry begins with a live technical event and asks what has changed in the field. This is not a futurist roundup.

-   What can now be built, tested, measured, or operationalized that was not reachable before?
-   What physical process carries the new action?
-   Which old background assumption has become less necessary?
-   What new failure conditions enter with the new design?

> Transition Action is a field inspection at the moment a capability starts to move.

* * *

This week, the controller has been asked to wait outside.

A robot is touched.

![](https://storage.ghost.io/c/20/43/2043f11a-6ae3-404c-bb28-01fce8d9ac88/content/images/2026/07/image-455.png)

The touch bends a pillar. The pillar squeezes fluid. The fluid moves another part of the machine.

The interesting part: nobody has to translate the event into a number first.

On 8 July 2026, _Science Advances_ published a paper from a National University of Singapore-led team titled _Mechanical multiaxis force sensor for directly bridging sensing and fluidic actuation_. The researchers introduced ME-SOFS, a mechanical soft force sensor that detects force along multiple axes and converts the force directly into fluid movement capable of driving an actuator.

The conventional chain has been shortened past the point of politeness.

> Contact -> Deformation -> Pressure -> Action

No powered signal-processing circuit has to interpret the contact. No general controller has to decide that the contact occurred and issue a separate return command. The force enters the body of the sensor and leaves as organized movement.

The machine has received an engineering reflex.

* * *

## Every Robot Has a Bureaucracy.

Most modern robots divide contact into offices.

-   A sensor encounters the world.
-   A transducer converts the encounter into an electrical signal.
-   Conditioning electronics clean and scale the signal.
-   A processor turns the signal into data.
-   A control law selects a response.
-   A driver sends energy to an actuator.
-   The actuator returns the decision to matter.

This architecture is powerful. It makes behavior programmable, inspectable, revisable, and generalizable across many situations. The bureaucracy exists because it can do serious work.

It also makes every small encounter request permission from the center.

A local push on a soft gripper may have to travel through sensors, wires, converters, software, and output electronics before the gripper changes its behavior. Each stage adds latency, mass, energy demand, calibration work, interfaces, and possible failure.

Wet environments attack electronics. Heat attacks electronics. Pressure attacks seals and housings. Electromagnetic interference attacks signals. Tiny and compliant robots struggle to carry rigid administrative headquarters inside their adorable little bodies.

ME-SOFS removes several offices from the route. The applied force supplies both the information and the physical event that carries the response. The machine does not receive free energy; the incoming force is already energy. What disappears is the demand for a powered interpretive layer between touch and action.

> The controller has not been improved. Its jurisdiction has been reduced.

* * *

## Five Rooms Around a Pillar.

The sensor is a soft, porous, 3D-printed structure organized around one central pillar and five fluid-filled chambers.

Four chambers are arranged horizontally around the pillar. A fifth chamber registers the vertical direction. When a force pushes the pillar, the pillar tilts or compresses into the chamber aligned with that force. The chamber loses volume. Fluid leaves through soft tubing. Something connected at the other end receives the displacement.

The geometry performs the first analysis.

Direction appears as **which chamber is compressed**.

Magnitude appears through **how much fluid is displaced**.

The receiving actuator responds to the fluidic output without waiting for software to classify the event.

![](https://storage.ghost.io/c/20/43/2043f11a-6ae3-404c-bb28-01fce8d9ac88/content/images/2026/07/image-456.png)

This is multiaxis sensing through organized deformation. The body of the sensor separates horizontal, lateral, and vertical force components because its chambers occupy different relations to the pillar. The structure does not need an abstract coordinate system hovering above it. The coordinate system has been built into the material.

The research team can tune sensitivity by changing geometric parameters in the printable design, including hole diameter and the thickness and angle of the sloped central foam. A change in blueprint changes the physical transfer function.

> The calibration begins as a shape.

This is the direct descendant of [_Shape Is Already Code_](https://modalpathethics.com/transition-action-shape-is-already-code/). That earlier Transition Action inspected the broader movement toward physical computing: bodies acting as kernels, materials filtering signals, geometry participating in control. ME-SOFS gives that movement a compact new unit. A force enters. The structure decomposes it. The fluid carries the result.

* * *

## The Optional Witness.

The title needs one important qualification.

> The signal **can** become data.

![](https://storage.ghost.io/c/20/43/2043f11a-6ae3-404c-bb28-01fce8d9ac88/content/images/2026/07/image-457.png)

The device includes an optional passive electrical readout. Displaced fluid moves small magnets past 3D-printed metal arcs. The changing magnetic flux induces voltage pulses, following the same broad principle used by a bicycle dynamo. The pulse count tracks the applied force magnitude.

So the sensor can leave a record. A computer can receive that record. A learning system can use it. The apparatus has not declared war on information.

The transition is sharper:

> The signal does not have to become data before it becomes action.

Representation has moved from mandatory middle step to optional branch.

That distinction is technically valuable. A local response can occur through the fluidic path while the electrical path reports the event for monitoring, memory, learning, or higher-order coordination. The robot can act now and explain later. The center can remain informed without becoming the compulsory author of every movement.

Biological systems use related divisions of labor. Local tissue mechanics, spinal circuits, reflexes, and distributed sensory loops handle some events before deliberate cognition arrives. The analogy should stay limited; a printed fluidic sensor is not a nervous system. The engineering lesson survives the boundary. Fast local response and slower global interpretation do not have to occupy the same loop.

* * *

## The Hand Feels Across the Machine.

The most immediately legible demonstration places five miniaturized ME-SOFS units into a soft glove.

Each unit is roughly the size of a green pea. The glove and sensors were produced in one continuous 3D-printing process from a single material, without manual assembly of five separate sensing modules. The glove detected fingertip forces during grasping and supported estimates of the weight being held.

Then the team connected the sensor to a soft haptic pad worn on a human fingertip.

A blindfolded operator controlled a robotic arm as it grasped an egg, wooden blocks, and a partially filled bottle. Force at the robot gripper moved fluid through the system. The haptic pad pressed back on the operator. The person felt how firmly the remote hand was holding the object through a physical transmission path.

The robot did not first compose a description of pressure and send the description home. Pressure traveled.

![](https://storage.ghost.io/c/20/43/2043f11a-6ae3-404c-bb28-01fce8d9ac88/content/images/2026/07/image-458.png)

The successful grasp patterns could also be recorded and replayed to train the robot to repeat the movement autonomously. Here the two paths meet cleanly:

-   The **direct path** provides immediate haptic contact.
-   The **data path** preserves a successful interaction for learning and repetition.

A controller remains useful. It has stopped being the toll booth between every touch and every response.

* * *

## The Droplet and the Grass.

The other demonstrations are smaller and conceptually useful.

The team used the sensing-to-action loop to steer individual liquid droplets through a miniature fluid controller without software. They also connected force detection to a field of flexible, hair-like structures that bent according to the direction and strength of the input.

These are not complete autonomous robots. They are clean little proofs of routing.

A push at one location becomes organized behavior elsewhere. The material architecture preserves enough structure from the contact to produce a directional response. The system does not need a general model of the world to know which way to bend.

This is where the controller chastening becomes precise. Intelligence has often been defined by the richness of the internal representation. ME-SOFS demonstrates a different technical competence: preserving the action-relevant structure of an event while refusing the cost of full representation.

> The machine does not need to know everything the touch means. It needs a body that carries the part that matters.

* * *

## The Reflex Leaves the Dry Bench.

The researchers also tested the device under conditions that punish ordinary electronics.

ME-SOFS maintained stable performance in water heated to 90 degrees Celsius and under pressure equivalent to roughly 11 metres of water depth. Its open-ended fluidic channels equalized with the surrounding water pressure, allowing the sensor to respond to applied force instead of treating ambient pressure as the event. With no electronic components in the direct path, the sensor also avoids one major vulnerability to electromagnetic interference.

Eleven metres is not the deep sea. A controlled hot-water test is not long-term industrial deployment. The result still moves the boundary. The sensor is not dependent on keeping a delicate powered interpretation stack dry, cool, shielded, and perfectly sealed before it can respond.

That matters for soft robots intended for wet infrastructure, medical environments, hazardous inspection, underwater work, and other places where the body of the machine meets conditions that the controller would prefer to receive as a report from somewhere safer.

* * *

## The Chastening of the Controller.

The controller is not disappearing from robotics.

Robots still need goals, memory, arbitration, adaptation, planning, fault detection, communication, and the ability to distinguish a harmless push from a dangerous situation. A local fluidic loop cannot decide whether an elderly person is falling, whether a surgeon intends to cut, whether a gripper should release, or whether the system should stop the task entirely. Context still exists. Context is expensive.

The change is jurisdictional.

![](https://storage.ghost.io/c/20/43/2043f11a-6ae3-404c-bb28-01fce8d9ac88/content/images/2026/07/image-459.png)

Central control no longer has to own every layer of response. A soft body can carry bounded reflexes. A sensor can drive an actuator directly. A mechanical loop can handle fast local contact while a digital controller works at a slower and more abstract level. The body can answer the world before the world has been completely redescribed.

This produces a more honest picture of control.

-   Some control lives in software.
-   Some control lives in geometry.
-   Some control lives in material compliance.
-   Some control lives in fluid routing.
-   Some control lives in the environment that supplies the force.

No single box gets to impersonate the whole machine.

Modal Path Ethics recognizes the general pattern.

Instruments always become dangerous when they mistake their local jurisdiction for sovereignty over the field. Robotics has made the same mistake in a technical register whenever the controller is treated as the only location where behavior becomes intelligent. ME-SOFS is a small material correction.

* * *

## Bad Reflexes.

A controller losing jurisdiction does not make the remaining system wise.

Reflex is fast because reflex does not understand much.

A direct physical loop can respond before interpretation. It can also respond incorrectly before interpretation. Its behavior is bounded by the geometry, fluid, material properties, fabrication tolerances, and connection topology chosen during design. Those constraints are the local policy of the machine.

The unanswered engineering field is substantial.

-   How stable is the response after long cyclic use, wear, deformation, and repeated sterilization or cleaning?
-   How do bubbles, leakage, contamination, evaporation, tube length, and changing fluid properties affect latency and force transmission?
-   How consistently can the porous geometry be manufactured across devices and scales?
-   How does the sensor behave under simultaneous, rapidly changing, or conflicting forces?
-   What force amplification is available when the receiving actuator must do more work than the original contact supplies?
-   How does a safety system override the reflex when the direct response becomes dangerous?

A software controller can often be patched. A printed channel may need to be rebuilt. A line of code can expose a branch condition. A physical transfer function may hide inside deformation, wear, friction, hysteresis, and a small pocket of fluid that behaves differently after six months.

Distributed physical intelligence therefore needs distributed audit. The design file, material recipe, print process, calibration, tubing, test environment, and final assembled behavior all belong to the program.

> When control enters matter, verification has to follow it there.

* * *

## What This Makes Reachable.

The immediate reachability is narrow and real.

-   A soft sensor can separate force along multiple axes through geometry and fluid displacement.
-   Applied force can drive a fluidic actuator directly, without powered electronic processing in the loop.
-   The same sensor can optionally produce an electrical record for monitoring and learning.
-   Miniaturized sensors can be printed directly into a soft glove in one continuous fabrication process.
-   Remote grasping force can be transmitted as haptic pressure to a human operator.
-   Software-free fluidic responses can steer droplets and bend flexible structures.
-   The sensing mechanism can continue operating under tested hot-water, pressure, and electromagnetic conditions that complicate conventional electronics.

The longer reachability is architectural.

> A robot can be designed with a layered nervous system rather than one command throne.

> Local contact loops can live in the body.

> Optional readout can carry evidence upward.

> Higher-order controllers can handle goals and conflicts without micromanaging every deformation.

This could support softer and more resilient machines for care, medicine, underwater work, field inspection, teleoperation, and environments where electronics are too fragile, too bulky, too power-hungry, or simply unnecessary for the first response.

It also gives physical intelligence a clearer unit of composition: a sensor whose output is already an action signal.

* * *

## The Transition Action.

The official _Transition Action_ is to make representation optional in the first response.

ME-SOFS receives force through a central pillar, separates that force through five fluid chambers, and routes the resulting pressure toward an actuator. The contact can produce movement without passing through powered electronics, a processor, or a software control loop. A passive electrical branch can still create data when memory, measurement, or learning is useful.

That is the full chastening.

> The signal can become data. But it no longer has to wait for data to become action.

The controller remains available for the work that needs context. The body takes back the work that can be carried by shape, pressure, and local relation.

A robot is touched.

![](https://storage.ghost.io/c/20/43/2043f11a-6ae3-404c-bb28-01fce8d9ac88/content/images/2026/07/image-460.png)

Matter handles the first reply.
