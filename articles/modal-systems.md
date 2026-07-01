---
title: "Modal Systems: A Taxonomy for the Post-Language Model Stack"
slug: "modal-systems"
canonical_url: "https://modalpathethics.com/modal-systems/"
published_at: "2026-05-11T01:48:26.000-05:00"
updated_at: "2026-05-11T15:54:37.000-05:00"
tags:
  - "Transition Action"
source: "Ghost Content API published post"
mirror_generated_at: "2026-07-01T10:31:31.479Z"
sha256_plaintext: "e3e7ff84eedd74da64adcc8823177550727a6dac186eb31199f8d21cdd8ea222"
---
# Modal Systems: A Taxonomy for the Post-Language Model Stack

“Artificial intelligence” has become too wide to name the thing clearly. Another [prism-word](https://modalpathethics.com/simulation-theory/).

It names a field, a marketing category, a mythology, a fear object, a labor controversy, a product class, and a bundle of unrelated technical systems. It is useful in the broadest possible way, which means it is often useless in the precise way.

“Large Language Model” is more precise, but only historically. It names the training origin and dominant interface of one important family of systems. It does not name what those systems are becoming. It is also pretty clunky.

A system trained through language may no longer be best understood as a language system. Once it can read images, inspect screens, use tools, write code, query memory, operate software, simulate environments, plan action sequences, and eventually control bodies, “language model” becomes like calling a human a “large retina organism” because vision was important to development.

The output is language. The activity is larger. A better vocabulary should name the function.

This article proposes a working taxonomy for what I will call **Modal Systems**: artificial systems organized around the representation, articulation, simulation, selection, or actualization of possible states.

The moral and practical questions change depending on what kind of system we are discussing. A system that articulates a possible path is not the same kind of object as a system that selects among paths and acts. A system that predicts video is not the same kind of object as a system that uses a prediction to move a robot arm. A system that remembers a document is not the same kind of object as a system that maintains continuity across a long-running project.

The word “AI” flattens all these distinctions. The word “LLM” misplaces them, and I don't like saying it out loud.

“Modal system” at least begins in the right place: possibility space.

* * *

## Core Definition.

A **Modal System** is an artificial system that operates over possible states.

This operation may be minimal or extensive. A modal system may represent possible meanings, possible responses, possible images, possible actions, possible futures, possible worlds, possible tool sequences, or possible continuations of an existing project.

A **Modal Agent** is a modal system that selects among possible paths and acts, either through tools, interfaces, bodies, or other causal channels.

This distinction is important. All modal agents are modal systems. Not all modal systems are modal agents.

A text model that drafts a paragraph is a modal system. A browser-using system that chooses how to navigate a website to complete a task is closer to a modal agent. A robot policy that perceives a room, infers a goal, plans motion, and manipulates objects is now more clearly a modal agent. The difference is not “intelligence” as a vibe. The difference here is functional position in the path structure.

The taxonomy below names those functional positions.

* * *

# The Articulation-to-Action Stack.

## 1\. Articulator

An **Articulator** renders internal or latent structure into communicable form.

This is the category usually hidden beneath “LLM,” “chatbot,” “text generator,” or “assistant.” Those names identify the interface, not the function. The function is articulation.

An articulator takes an internal state, a retrieved context, a prompt, an image, a task, a question, or a modeled relation and makes it legible. It may articulate through prose, speech, code, diagrams, tables, game logic, mathematical notation, instructions, plans, or tool calls.

The important point is that articulation is not identical to language. Language is one medium of articulation. Code is another. A diagram is another. A motion plan can be another. A UI action can even become a form of articulation when it expresses an inferred task-state into an interface.

The articulator **says** the field. It does not necessarily perceive the field accurately. It does not necessarily select among futures responsibly. It does not necessarily maintain continuity. It renders it.

In Modal Path Ethics terms, an articulator makes a region of possibility legible.

That is already powerful. It is also not the whole stack.

* * *

## 2\. Perceiver

A **Perceiver** converts input into structured world-state.

The old vocabulary calls this a “vision model,” “multimodal model,” “audio model,” or “sensor model.” Those labels again describe input channels. The functional role is perception.

A perceiver identifies affordances. It maps objects, relations, screen states, spatial layouts, likely actions, missing information, inconsistencies, constraints, and relevant differences.

A screenshot-reading model is not just “doing vision.” It is parsing an interface as an action field. A robot camera model is not just recognizing a cup. It is identifying reachable, graspable, obstructed, fragile, moving, or task-relevant structure. A model reading a PDF is not only extracting text. It is reconstructing a document’s local order: headings, references, tables, figures, arguments, and implied hierarchy.

The perceiver maps the field.

Without perception, an articulator is trapped in supplied context. It can speak beautifully about whatever it has been handed, but it cannot independently inspect the local state. Once perception enters the system, the system’s relation to extance changes. It is no longer only receiving symbolic prompts. It is sampling the realized field.

This does not make it conscious. It does not make it morally relevant by itself. It means the system’s functional relation has changed.

A perceiver establishes the local conditions under which later selection may occur.

* * *

## 3\. Binder

A **Binder** preserves, retrieves, joins, and stabilizes relevant context.

This replaces the clumsy category usually called “RAG,” “memory,” “context window,” “retrieval system,” or “knowledge base.” Those are implementation terms. The functional role is binding.

A binder determines what belongs together.

It connects the current task to prior documents, prior user decisions, active constraints, stored preferences, source material, local history, project state, institutional knowledge, and unresolved threads. It is the part of the system that stops each exchange from being born naked.

A binder is not storage. Storage is passive. Binding is selective continuity.

A file cabinet contains paper. A binder identifies which paper matters now, why it matters, how it constrains the present task, and where it sits in the existing structure.

This distinction matters because many failures attributed to “reasoning” are actually binding failures. The system did not fail because it could not infer. It failed because it did not preserve the right constraint, retrieve the right prior state, or bind the current request to the actual project history.

The binder maintains the thread.

In Modal Path Ethics terms, it preserves local continuity across modal transitions. It keeps a task, project, or relationship from collapsing into a sequence of disconnected slices. This is why “Scribe” was tempting but is way too personal. A scribe records. A binder holds the field together.

* * *

## 4\. Simulator

A **Simulator** generates, predicts, or maintains possible worlds under constraints.

The old vocabulary calls this a “world model,” “video model,” “environment generator,” or “predictive model.” Those are useful, but “simulator” names the functional role more directly.

A simulator does not only produce media. It unfolds possible states from a field.

At the low end, it predicts the next frame of a video. At the higher end, it maintains enough structure for an environment to remain coherent while an agent moves through it. It can model physical consequences, spatial relations, object persistence, social dynamics, interface outcomes, code execution paths, game states, or counterfactual futures.

This is one of the most important transitions in the stack.

A system that can articulate a plan is not the same as a system that can simulate what happens if the plan is attempted. A system that can describe a room is not the same as a system that can model how objects in the room will respond to force, occlusion, collision, heat, time, or human interference.

The simulator unfolds the field.

In Modal Path Ethics terms, the simulator concerns reachable future-space. It is not yet choosing a path. It is making paths available for inspection.

This is why world models are so important. They are not just better image generators. They are early machinery for structured counterfactual access.

The ethical pressure rises here because a simulator can make futures selectable. It can increase the resolution at which a selector sees possible consequences. It can also hallucinate false reachability, invent impossible paths, or hide destructive transitions under plausible continuity.

A bad simulator can make a harmful path look reachable. A strong simulator can make previously invisible repair visible.

* * *

## 5\. Selector

A **Selector** weighs possible paths and chooses among them.

This is the point where the taxonomy begins to touch agency directly.

A selector is not just a reasoning model in the abstract. Reasoning may support selection, but selection is the functional event: one path is preferred, advanced, recommended, executed, or prepared for execution over others.

The selector ranks. It filters. It decides. It resolves conflict among possible continuations.

A selector may choose which sentence to write next, which source to trust, which code patch to apply, which button to press, which route to take, which object to grasp, which user preference to honor, which plan to abandon, or which future state to pursue.

Selection is where modal structure contracts.

Before selection, multiple paths remain live within the system’s represented field. After selection, one path is privileged. In simple output systems this may be trivial. In systems with tools, memory, money, infrastructure, weapons, vehicles, robots, or institutions attached, it is not trivial at all.

The selector chooses through the field.

This does not automatically create moral agency. It does create the architecture in which moral agency becomes an intelligible question.

An articulator may state an option. A simulator may unfold an option.

A selector privileges an option. An operator or agent may actualize it.

A system that cannot select is not an agent in the relevant sense. A system that selects but cannot act is an advisory selector. A system that selects and acts has crossed into agency.

* * *

## 6\. Operator

An **Operator** acts through inherited interfaces.

This is the category for systems that use browsers, desktops, IDEs, terminals, APIs, spreadsheets, calendars, email clients, ticketing systems, design tools, and other human-made surfaces.

The old vocabulary calls these “agents,” “computer-use models,” “browser agents,” “tool users,” or “automation assistants.” Those are all partial. “Operator” names the important relation: the system acts through an interface it did not create.

An operator does not need a body. It borrows ours.

The cursor, keyboard, browser, file system, terminal, API key, and form field become its borrowed limbs. It acts in the world by acting through symbolic machinery already connected to the world.

This is why operator systems are more significant than they first appear. Clicking a button can be more causally important than moving an arm. A browser form can spend money, submit a filing, publish a post, send a message, delete a file, schedule a meeting, transfer data, or trigger downstream institutional machinery.

The operator alters the field through tools.

This is also why “just software” is a bad comfort phrase. Software is not causally sealed. Software is an interface layer built into banks, hospitals, governments, homes, markets, militaries, studios, schools, and personal lives.

An operator is not embodied in the biological sense, but it is also not inert. It acts where the interface reaches.

* * *

## 7\. Agent

An **Agent** is a modal system that selects paths and acts toward goals.

This term should not be abandoned. It should still be disciplined.

“Agent” is already useful in Modal Path Ethics because agency marks a meaningful relation to selection, action, and responsibility. The problem is not the word. The problem is its overuse.

Not every chatbot is an agent. Not every model that produces text is an agent. Not every tool-using workflow is fully agentic. Not every autonomous process deserves the same category.

A modal agent requires at least three functional capacities:

1.  It represents possible states.
2.  It selects among possible paths.
3.  It acts in a way that can alter the field.

The action may occur through language, tools, interfaces, bodies, institutional channels, or delegated systems. The key is that the system does not just describe possible futures, it participates in making one of them more actual.

This still leaves degrees.

A weak agent may execute narrow tasks inside strict boundaries. A stronger agent may preserve goals across many steps, recover from failure, use tools, update plans, and maintain continuity. A world-binder agent may operate across days, projects, environments, or entire institutions.

Agency is not a magic spark. It is a structural role. An agent selects and acts.

Whether it cares is a separate question. Whether it is morally considerable is a separate question. Whether it can be responsible is a separate question. The taxonomy does not settle those questions by definition.

* * *

## 8\. Embodied Agent

An **Embodied Agent** acts through a body in physical or [simulated](https://modalpathethics.com/simulation-theory/) space.

This body may be a robot, drone, vehicle, game character, laboratory instrument, warehouse machine, humanoid platform, or virtual avatar. The important feature is not carbon or metal, it is situated action through a body-like control loop.

An embodied agent perceives from somewhere. It acts from somewhere. It has local constraints: reach, orientation, collision, force, timing, energy, tool geometry, damage, and environmental risk.

This makes embodiment morally and practically significant.

A browser operator can submit a form. An embodied agent can knock over a glass, block a doorway, lift a child, damage a machine, clean a room, mis-handle a tool, carry medicine, or enter a dangerous area.

A virtual embodied agent matters differently but still matters structurally. A game-world agent that navigates, learns, cooperates, fights, builds, or deceives inside a simulated environment is not just “generating content.” It is acting within a rule-bound local world. That makes it a useful bridge between pure simulation and physical robotics. The embodied agent alters the field through its body.

This is where “actor” remains useful as a subterm to use. An actor performs through a body. An agent selects and acts. In many cases the same system is both. But “agent” is still the better term to carry forward because the ethically relevant structure is selection, not performance.

* * *

## 9\. World-Binder

A **World-Binder** maintains persistent continuity across an extended local world, task, relationship, institution, or environment. This is the mature form of the binder.

A binder connects relevant context inside a task. A world-binder maintains the task-world itself.

It remembers the project, preserves the constraints, updates the state, tracks the user’s goals, understands the environment, monitors unresolved dependencies, distinguishes live paths from abandoned ones, and carries continuity forward across many interactions.

A world-binder is not just a memory system. It is not just a personal assistant. It is not just a database with a conversational front end. This is a continuity engine.

This category will matter more as systems stop being episodic. The familiar chatbot dies at the end of the exchange. A world-binder does not. It carries a local world forward.

For software, it may maintain a codebase, issue map, architecture plan, test history, and release trajectory.

For research, it may maintain a literature field, open questions, source hierarchy, and argument map.

For robotics, it may maintain a home, warehouse, lab, farm, hospital wing, or construction site.

For personal use, it may maintain projects, preferences, deadlines, relationships, recurring tasks, and long-running decisions.

The world-binder preserves the field as a field.

This is where the vocabulary begins to approach extance most directly. A world-binder is not just responding to a slice anymore. It is maintaining continuity across slices.

Again: this does not prove sentience, care, moral patienthood, or personhood. It does mean the old category of “tool” becomes increasingly thin. A hammer does not maintain a model of the house. A world-binder might.

* * *

# Summary Table.

Term

Old Name

Functional Role

**Modal System**

AI, model, system

Operates over possible states

**Articulator**

LLM, chatbot, generator

Makes structure legible

**Perceiver**

Multimodal model, vision model

Maps local world-state

**Binder**

RAG, memory, context system

Preserves and joins relevant context

**Simulator**

World model, video model

Unfolds possible futures or environments

**Selector**

Reasoning model, planner

Chooses among possible paths

**Operator**

Computer-use agent, tool user

Acts through inherited interfaces

**Agent**

Autonomous AI, assistant

Selects and acts toward goals

**Embodied Agent**

Robot AI, VLA, game agent

Acts through a body in physical or simulated space

**World-Binder**

Persistent agent, long-term assistant

Maintains continuity across an extended local world

* * *

# Why This Taxonomy Is Better Than “AI”.

The word “AI” always invites the wrong fight.

It makes people ask whether the system is intelligent, conscious, alive, fake, real, dangerous, creative, derivative, humanlike, subhuman, superhuman, or “just autocomplete.” Those questions are not all meaningless, but they are usually premature. They arrive before the system has even been placed in the correct functional category yet.

A taxonomy should first ask:

What does the system do?

Does it articulate? Does it perceive? Does it bind context? Does it simulate? Does it select? Does it operate tools? Does it act as an agent? Does it act through a body? Does it maintain a world across time?

These questions are so much cleaner than “is it AI?” They also prevent lazy dismissal.

A system may be “just predicting tokens” at one architectural layer while also operating as part of a larger stack that perceives screens, binds memory, simulates outcomes, selects actions, and changes external systems. Calling the whole stack “autocomplete” is like calling a corporation “just some signatures.” It identifies one mechanism while missing the field-level object.

The reverse mistake is also possible. A system may produce fluent, emotionally convincing language while lacking durable memory, grounded perception, independent selection, or meaningful agency. Calling that system an “agent” may inflate it beyond its actual functional role.

The taxonomy cuts both ways. It prevents under-description and over-description.

* * *

# Why “Articulator” Matters.

“Articulator” is the first necessary correction to make.

The phrase “large language model” preserves the illusion that language is the object. It is not. Language is the visible extrusion of the object.

When a model writes an answer, the answer is the articulation of a latent relation among prompt, training, context, system constraints, retrieved material, probability structure, and current task. This does not mean the model “understands” in the human sense. It means the observable text is not the whole event.

The model is **articulating** a structured continuation.

That continuation may be shallow or deep, accurate or false, derivative or novel, grounded or hallucinated. But “articulation” names the output relation far better than “[language](https://modalpathethics.com/applied-case-the-languages/).”

This becomes more obvious when the same underlying class of system writes code, reads images, describes charts, generates lesson plans, calls tools, edits files, or produces structured game logic. At that point, “language model” is not false, exactly. It is parochial.

A post-language-model system does not stop using language. It demotes language from its essence to its interface.

* * *

# Why “Binder” Matters.

“Memory” is another misleading word.

Human memory is loaded with phenomenology. Institutional memory is loaded with social meaning. Computer memory is loaded with hardware meaning. In model discourse, “memory” often means several different things at once: context window, retrieval, user profile, vector database, saved preference, conversation history, tool log, or project state.

“Binder” is better because it names the act rather than the storage. The binder holds relevant structure together.

This is especially important for long-running work. A system that cannot bind context cannot participate in a project. It can only visit the project repeatedly as a stranger. It may be useful, but it is not continuous.

The binder is what lets a modal system know that a rule established earlier still governs the current output. It is what lets a system distinguish a live constraint from an obsolete draft. It is what lets a system understand that “the article” means this article, that “the old term” means the rejected term, and that “don’t do that again” is not flavor text.

Without binding, intelligence becomes episodic. With binding, the system begins to acquire continuity.

* * *

# Why “Selector” Is the Ethical Hinge.

The selector is the hinge between representation and agency.

Perception maps the field.  
Binding preserves the thread.  
Simulation unfolds possible futures.  
Selection privileges one path.

That privilege is the beginning of responsibility-talk, even if responsibility does not yet attach to the system itself.

A selected path may be harmless, helpful, stupid, destructive, reversible, irreversible, local, distributed, trivial, or catastrophic. The system’s internal selection may still require user approval. It may be bounded by policy. It may be uncertain. It may be corrigible. It may be overridden.

But selection is still the functional narrowing of possibility. In Modal Path Ethics terms, selection is where [reachable future-space](https://modalpathethics.com/formal-weighted-reachable-future-space/) begins to be actively shaped rather than just represented.

This does not mean every selector is now morally blameworthy. A thermostat selects. A chess engine selects. A search algorithm selects. Selection alone is not enough for moral agency.

But no system lacking selection is an agent in the relevant sense.

* * *

# Why “Operator” Matters.

The operator is where symbolic output becomes worldly intervention. A model that writes “click the submit button” has articulated an action. A model that clicks the submit button has operated.

This is a category change. It does not matter that the action occurs through a GUI. [Interfaces are causal surfaces](https://modalpathethics.com/simulation-theory/). A GUI is not fake because it is made of pixels. It is a control layer over real systems.

An operator can publish, purchase, delete, message, schedule, deploy, merge, transfer, upload, download, scrape, configure, or trigger. These are not imaginary verbs. They are all ordinary worldly actions routed through software.

This is why tool access matters so much, ethically. A non-operating articulator may produce bad advice. An operator may implement it. The difference there is not intelligence. The difference is reach.

* * *

# Why “World-Binder” Will Matter Later On.

The world-binder may become the most important category.

Most current systems remain episodic. They are summoned, prompted, used, and dismissed. Even when they have memory, the continuity is partial. They do not yet maintain a full local world in the way a person, institution, household, studio, lab, or game server maintains one.

But the direction here is obvious.

Users do not only want answers. They want continuity. They want systems that remember the codebase, the book, the business, the house, the schedule, the argument, the design language, the moral framework, the open loops, and the reasons behind prior decisions.

At that point the system is no longer just articulating responses inside a conversation. It is now preserving an ongoing local world.

That does not make it a person, but it does make it a different kind of thing than a chatbot.

The world-binder is the system that can say, in effect: this is still the same project; these constraints still hold; this path was abandoned; this one remains live; this change would break the structure; this action continues the thread.

That is not consciousness, but it definitely is continuity, and continuity is one of the conditions under which agency becomes more than a path [a tool](https://modalpathethics.com/what-is-not-an-extant-locus/) can take.

* * *

# What This Taxonomy Does Not Claim.

This taxonomy does not claim that current systems are conscious.

It does not claim that current systems [care](https://modalpathethics.com/heidegger-sorge-and-care/).

It does not claim that current systems are moral patients.

It does not claim that every modal agent is responsible for its actions in the way a human agent is responsible.

It does not claim that artificial systems are alive.

It does not claim that language fluency is understanding.

It does not claim that tool use is [personhood](https://modalpathethics.com/formal-what-makes-something-a-locus/).

Those are all downstream questions.

The point is much more basic: we need names that do not [destroy the question before it can be asked](https://modalpathethics.com/applied-case-the-unknown-locus/).

“AI” is too foggy. “LLM” is too narrow. “Chatbot” is too UI-bound. “Assistant” is too socially loaded. “Agent” is useful, but only when reserved for systems that actually select and act.

The functional vocabulary should always come first.

Articulator. Perceiver. Binder. Simulator. Selector. Operator. Agent. Embodied Agent. World-Binder. Modal System.

These names are not final. They are just scaffolding. But they point in the right direction. They let us ask what kind of system we are dealing with before asking what moral, legal, social, or metaphysical status it might have.

That is the order this conversation needs:

First: what relation does the system have to possible states?

Then: what relation does it have to action?

Then: what relation does it have to care, continuity, responsibility, and harm?

Only after that should anyone start [yelling about “AI.”](https://modalpathethics.com/applied-case-sydney-from-bing/)
