---
title: "Transition Action: The Load Moves"
slug: "transition-action-the-load-follows-the-sun"
canonical_url: "https://modalpathethics.com/transition-action-the-load-follows-the-sun/"
published_at: "2026-06-15T05:50:44.000-05:00"
updated_at: "2026-06-19T02:59:16.000-05:00"
tags:
  - "Transition Action"
  - "Chastening of the Controller"
source: "Ghost Content API published post"
mirror_generated_at: "2026-08-10T14:00:20.799Z"
sha256_plaintext: "87d967f59c8cb41a8649477866dc9c69b89212648fab7df9044a55d6bece544c"
---
# Transition Action: The Load Moves

> Transition Action is the technical wing of Modal Path Ethics: a series about technologies crossing from research, prototype, or theory into reachable action. Each entry begins with a live technical event and asks what has changed in the field. This is not a futurist roundup.

-   What can now be built, tested, measured, or deployed that was not reachable before?
-   What physical process carries the new action?
-   Which additional components have become unnecessary?
-   What new failure conditions enter with the new design?

> Transition Action is a field inspection at the moment a capability starts to move.

* * *

The headline this week is that artificial photosynthesis may not need a battery to follow the sun.

![](https://storage.ghost.io/c/20/43/2043f11a-6ae3-404c-bb28-01fce8d9ac88/content/images/2026/06/press_260610_Amao.jpg)

_Artificial-photosynthesis electrochemical fuel-production system. Credit: Osaka Metropolitan University._

In March 2026, researchers at Osaka Metropolitan University published a solar-fuel system that converts carbon dioxide and water into aqueous formic acid. The system connects ordinary photovoltaic panels directly to a bank of electrolyzers. It produced fuel throughout the day under real, changing sunlight while using 85 percent of the photovoltaic energy available at the panels’ predicted maximum-power points.

It did this without the conventional electronic system normally used to keep a solar panel operating efficiently.

The press-release version is just:

> The researchers removed the battery.

The technical transition is more interesting.

They redesigned the electrolyzer so that its own electrical resistance, internal heating, and fluid flow help it follow the changing output of the solar panels.

The load learns how to move.

* * *

## Artificial Photosynthesis.

“Artificial photosynthesis” can evoke a synthetic leaf sitting quietly in the sun.

The device here is much more industrial.

![](https://storage.ghost.io/c/20/43/2043f11a-6ae3-404c-bb28-01fce8d9ac88/content/images/2026/06/d5el00177c-f6.gif)

A photovoltaic panel converts sunlight into electricity. That electricity enters an electrolyzer. Inside the electrolyzer, electrochemical reactions use water and carbon dioxide to produce formic acid: a liquid chemical product in which some of the captured solar energy remains stored.

There are therefore several conversions in sequence:

-   **sunlight →**
    -   **electricity →**
        -   **electrochemical reaction →**
            -   **liquid fuel**

Natural photosynthesis also converts variable sunlight into stored chemical energy, but the comparison should not conceal the machinery. This experimental system uses solar panels, electrodes, ion-exchange materials, water reservoirs, carbon-dioxide flow, pumps, valves, electrical connections, and four electrolyzers connected in series.

The result is still artificial photosynthesis in the broad technical sense. Light enters. Persistent chemical energy leaves.

The hard part is keeping that chain productive while the light refuses to remain constant.

* * *

## The Maximum-Power Problem.

A photovoltaic panel does not emit one fixed quantity of useful power.

Its voltage and current change with irradiance, temperature, and the electrical load attached to it. For any given condition, there is a particular operating point at which the panel produces its maximum available power.

That point moves.

A cloud passes overhead. Current falls. The panel’s electrical characteristics change. The cloud moves. Irradiance rises again. The best operating point moves with it.

Connecting a solar panel directly to an arbitrary machine does not guarantee that the machine will draw power where the panel can provide it most efficiently. The panel and the load settle at the intersection of their electrical behaviors. A poor match leaves usable energy uncaptured.

Conventional solar systems solve this with maximum-power-point tracking, or MPPT.

![](https://storage.ghost.io/c/20/43/2043f11a-6ae3-404c-bb28-01fce8d9ac88/content/images/2026/06/image-937.png)

An electronic controller repeatedly measures the panel and adjusts the effective load through power electronics. A DC-to-DC converter changes the relationship between the voltage and current produced by the panel and the voltage and current accepted by the equipment. A battery may stabilize the flow, absorb temporary surpluses, and supply temporary deficits.

The architecture is:

**variable panel → tracking electronics → converter → battery → controlled load**

This is an extremely capable arrangement. It can maintain a stable electrical environment even when the source is unstable.

It is also an additional machine inserted between the source and the intended machine.

For solar-fuel production, that creates an awkward duplication. The battery stores solar energy so that the electrolyzer can turn solar energy into another stored chemical form.

The battery may provide useful functions beyond this narrow conversion task. It should not be declared universally redundant. But when the immediate goal is daylight production of a persistent chemical fuel, the system contains two storage chemistries partly because the electrolyzer cannot comfortably accept the sun as it arrives.

The researchers asked whether the load could change instead.

* * *

## The Load Follows the Source.

The new electrolyzer contains a solid-state electrolyte whose ionic resistance has a negative temperature coefficient.

In plain language:

> As the electrolyte becomes warmer, ions move through it more easily.

That property couples the machine’s electrical behavior to its temperature.

![](https://storage.ghost.io/c/20/43/2043f11a-6ae3-404c-bb28-01fce8d9ac88/content/images/2026/06/d5el00177c-f2.gif)

When stronger sunlight supplies more electrical power, the electrolyzer heats. As its temperature rises, its internal resistance falls. Lower resistance permits more current to pass. The operating behavior of the electrolyzer therefore changes in the same direction as the available solar input.

The effect is not accidental waste heat tolerated by the design. Heat becomes part of the operating mechanism.

![](https://storage.ghost.io/c/20/43/2043f11a-6ae3-404c-bb28-01fce8d9ac88/content/images/2026/06/d5el00177c-f4.gif)

Fluid flow supplies another adjustable relationship. Water moving through the electrolyzer carries heat away. Changing the flow rate changes thermal dissipation. The system measures electrical current and uses low-power pumps to regulate the water supply, coordinating production rate, temperature, resistance, and final formic-acid concentration.

The researchers modeled these relationships together:

-   photovoltaic irradiance and output;
-   electrolyzer current and voltage;
-   temperature-dependent ionic resistance;
-   heat produced inside the electrolyzer;
-   heat lost through convection, radiation, and flowing water;
-   reactant flow;
-   product concentration.

The resulting system is described as **chemical maximum-power-point tracking**.

That name is slightly provocative. The device still contains electronics. However, the main matching function is no longer performed by a conventional electronic MPPT controller continually transforming the power between panel and electrolyzer. The operating point emerges from the coupled electrochemical and thermal behavior of the load itself.

The machine can't make the sun stable, so it makes stability unnecessary at that interface.

* * *

## Control Has Moved Into the Relation.

The first Transition Action examined physical systems in which sensing, computation, and response move out of a centralized processor and into the body of a machine.

This case is adjacent, but it is not the same transition.

The artificial-photosynthesis system is not a chemical computer replacing a digital computer. Its electrolyte is not running an algorithm in any general sense. Its thermal response is not software secretly written in matter.

The more precise lesson is about **coupling**.

![](https://storage.ghost.io/c/20/43/2043f11a-6ae3-404c-bb28-01fce8d9ac88/content/images/2026/06/d5el00177c-f3.gif)

A solar panel and an electrolyzer are often represented as separate components:

-   one produces electricity;
-   one consumes electricity;
-   an interface reconciles them.

Physically, the operating point belongs to the combined system. The current that actually flows is produced by the encounter between the panel’s current-voltage curve and the electrolyzer’s current-voltage curve. Neither component independently determines the result.

The researchers redesigned that encounter.

This is the philosophical correction beneath the engineering result:

> An interface is not empty space between two finished objects.

The source changes the load. The load changes the source’s operating condition. Temperature changes resistance. Resistance changes current. Current changes heating. Flow changes temperature. The product rate determines how much reactant should move. Every supposedly separate box participates in a shared physical field.

Conventional control architectures often manage these relationships from above. Sensors observe the components, a controller compares measured behavior to a desired state, and actuators force corrections.

The chemical MPPT system brings part of that correction into the relation being corrected.

* * *

## Do Not Call It Controllerless.

The strongest version of the headline would also be the least accurate.

![](https://storage.ghost.io/c/20/43/2043f11a-6ae3-404c-bb28-01fce8d9ac88/content/images/2026/06/d5el00177c-f8.gif)

The experimental machine still uses:

-   current measurement;
-   a pump controller;
-   low-power piezoelectric pumps;
-   a microprocessor;
-   a solenoid valve;
-   a DC-to-DC converter for peripheral equipment.

The advance is therefore not a machine free from electronics, conversion hardware, or active regulation.

> It is a solar-fuel system without the conventional battery-backed electronic MPPT layer between the photovoltaic array and the electrolyzers.

That narrower claim is still substantial.

It also reveals why system boundaries matter in technical reporting. A component can disappear from the main power path while remaining elsewhere in the installation. A control function can migrate without all control equipment disappearing. A machine can become more autonomous in one respect while retaining external dependencies in another.

“**Battery-free**” also needs a boundary. The demonstrated fuel-production apparatus did not require a battery to perform maximum-power tracking during daylight operation. A larger installation might still add energy storage for startup, nighttime operation, emergency control, gas handling, communications, or integration with other infrastructure.

Removing a component does not prove that the component was foolish, only that one of its functions has found another carrier.

* * *

## The Demonstration Is Real and Small.

The researchers tested the system outdoors using commercially available monocrystalline-silicon photovoltaic panels.

Four electrolyzers produced pure aqueous formic-acid solution from carbon dioxide and water. Across the daylight experiment, the system achieved an overall photovoltaic-energy utilization factor of 85 percent relative to the panels’ modeled maximum available electrical output.

The reported external solar-to-formic-acid energy efficiency was 2 percent, including energy consumed by peripheral equipment. The researchers describe that figure as state of the art for this type of complete system.

The product concentration remained comparatively stable through much of the operating day, although performance weakened under the lowest late-day irradiance. The system also produced enough formic acid to operate a miniature diorama exhibited at Expo 2025 Osaka.

These are prototype results.

![](https://storage.ghost.io/c/20/43/2043f11a-6ae3-404c-bb28-01fce8d9ac88/content/images/2026/06/d5el00177c-f5.gif)

Two percent solar-to-fuel efficiency is not an argument that formic-acid production has defeated conventional solar electricity, batteries, or other fuel pathways. The paper does not establish commercial cost at scale, multiyear durability, manufacturing yield, lifecycle emissions, safe distributed carbon-dioxide supply, or competitive energy economics.

The authors state that long-term testing is still underway. The system’s durability depends heavily on the electrolyzer. The transition has crossed into demonstration. It has not crossed into infrastructure.

* * *

## The Larger Engineering Pattern.

Energy systems often treat variable inputs as defects to be corrected before useful work begins.

-   Wind changes speed.
-   Sunlight changes intensity.
-   Waste heat changes temperature.
-   Industrial exhaust changes composition.
-   Human motion changes frequency and force.

A familiar response is to build a buffer, regulator, converter, reservoir, controller, or storage stage that turns the variable source into a standardized input.

Standardization makes systems composable. A machine designed for stable electricity does not need to understand the weather. A factory process supplied at a fixed voltage can ignore the behavior of the power source upstream.

That abstraction has enormous value, and also a cost.

Every layer added to stabilize the source introduces materials, conversion losses, control logic, maintenance requirements, failure modes, supply chains, and capital expense. Sometimes the interface becomes more elaborate than the process it was built to protect.

The chemical MPPT system demonstrates the inverse strategy:

> Before forcing the source to meet the machine, ask whether the machine can meet the source.

A load designed around variability may remove an entire layer of compensation.

That principle reaches far beyond artificial photosynthesis.

-   Thermal processes can follow periods of surplus heat.
-   Electrochemical production can vary with renewable output.
-   Mechanical systems can exploit variable frequency instead of suppressing it.
-   Water treatment can operate in modular cycles rather than demanding constant power.
-   Materials can alter conductivity, permeability, stiffness, or reaction rate as environmental conditions change.
-   Production systems can store value in their output rather than first storing electricity in an intermediate battery.

None of these substitutions is automatically superior. A source-following load may sacrifice scheduling, precise output, utilization rate, controllability, or compatibility with existing infrastructure.

The question is now available at every unstable interface:

> Which component should adapt?

* * *

## What This Makes Reachable.

The immediate reachability is modest and concrete.

-   We can connect photovoltaic panels to a liquid-fuel electrolyzer without placing a conventional battery-backed MPPT system in the main energy path.
-   We can use temperature-dependent ionic conductivity as part of the mechanism that matches an electrolyzer to changing solar output.
-   We can coordinate current, heat transfer, reactant flow, and product concentration inside one coupled model.
-   We can operate a small solar-to-formic-acid machine autonomously from sunrise to sunset under real outdoor conditions.

The longer reachability is architectural.

Renewable-energy systems may not always need to reproduce the stable electrical environment built for fossil-powered industry. Some industrial loads can be redesigned around the actual behavior of renewable sources.

Intermittency then stops being a problem assigned entirely to the grid, battery, or converter. Part of it becomes a property of the process design.

A future chemical plant may expose an operating envelope rather than demand one fixed input. A production line may increase, decrease, heat, cool, or circulate in step with available energy. A reactor may embody part of the power-conditioning behavior that would otherwise require a separate electronic installation.

The machine becomes less indifferent to its source. The source becomes less burdened by the machine.

* * *

## The Transition Action.

The official Transition Action is to design the load around the source before buffering the source for the load.

![](https://storage.ghost.io/c/20/43/2043f11a-6ae3-404c-bb28-01fce8d9ac88/content/images/2026/06/image-939.png)

This does not mean removing batteries, converters, or controllers wherever they appear. Standardized power, independent storage, and active electronic control remain essential technical capabilities.

It means refusing to treat them as the automatic first answer.

For every variable energy source, identify the work the interface is performing:

-   Is it shifting voltage?
-   Matching impedance?
-   storing excess production?
-   supplying temporary deficits?
-   stabilizing output quality?
-   preserving product concentration?
-   protecting components?
-   meeting a fixed production schedule?

Then ask which of those functions can migrate into the load, the material, the reaction, the thermal design, the flow system, or the product itself.

The Osaka system does not abolish maximum-power tracking.

It changes what performs it.

![](https://storage.ghost.io/c/20/43/2043f11a-6ae3-404c-bb28-01fce8d9ac88/content/images/2026/06/image-940.png)

Sunlight rises. Current increases. The electrolyzer warms. Ionic resistance falls. More current enters. Pumps alter flow. Heat leaves with the water. Product concentration remains within a usable range.

The loop is spread across electricity, matter, temperature, and motion.

The battery has left the main path.

The load has begun to follow the sun.
