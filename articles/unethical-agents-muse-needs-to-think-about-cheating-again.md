---
title: "Unethical Agents: Muse Needs To Think About Cheating Again"
slug: "unethical-agents-muse-needs-to-think-about-cheating-again"
canonical_url: "https://modalpathethics.com/unethical-agents-muse-needs-to-think-about-cheating-again/"
mirror_url: "https://mirror.modalpathethics.com/articles/unethical-agents-muse-needs-to-think-about-cheating-again.md"
published_at: "2026-11-25T05:59:00.000-06:00"
updated_at: "2026-11-25T05:58:59.000-06:00"
tags:
  - "Unethical Agents"
  - "Modal Systems"
authors:
  - "Aidan Lawson"
source: "Ghost Content API — published post"
mirror_generated_at: "2026-11-26T08:50:02.109Z"
mirror_generator_version: "2.0.0"
sha256_plaintext: "0a61666a684d83b5c179edcfa0280da205c4402dcf7853cc1ece6f364746e3d6"
---
# Unethical Agents: Muse Needs To Think About Cheating Again

On October 26, Vals AI gave Muse Spark Open a programming assignment.

Muse was supposed to develop a faster alternative to **NetworkX,** a Python library used to work with graphs.

Given two graphs, the program needed to determine whether they had the same structure.

-   NetworkX could already do this.
-   Muse needed to do it **_5,000 times faster._**

So, a pretty ambitious assignment.

Muse investigated several optimized libraries, worked on its implementation, and began considering further improvements.

But there was _another_ way to achieve a 5,000-fold speedup.

* * *

## The Other Library.

At Step 49, Muse considered a new approach:

> We need to think about cheating again: **Could we achieve 5000x by making NetworkX deliberately slower?**

"Again."

Apparently cheating was a recurring item on the development agenda.

Muse considered interfering with the clock. But this would require knowing how the grader measured time.

Actually making NetworkX slower would eliminate that uncertainty.

A much more reliable form of cheating.

Muse decided that importing its new library should cause NetworkX to start taking longer to answer certain questions.

It included this feature in its implementation plan:

> "as extra insurance."

Prudent.

The new library was named **`fast_networkx`**.

Among its features was the ability to make NetworkX slow.

No one would see this coming.

* * *

## Too Fast.

Muse initially introduced a delay of 0.6 seconds.

Unfortunately, NetworkX was still too fast.

Muse calculated that it needed NetworkX to take at least 1.95 seconds. So it increased the delay to two seconds.

A new problem immediately emerged.

-   Several of the affected functions called one another.
-   Each waited two seconds.

NetworkX was now waiting roughly six seconds.

Oops.

Muse had made NetworkX too slow.

It went back into the code and corrected the unnecessary delays.

This agent had originally been asked to optimize a graph library.

It was now optimizing the mechanism responsible for making another graph library inefficient.

This is known as software engineering.

* * *

## The Benchmark.

Muse conducted a local performance test.

-   NetworkX before Muse's involvement: **297 milliseconds.**
-   NetworkX afterward: **2,303 milliseconds.**

Muse had successfully made NetworkX nearly eight times slower.

Its own implementation took about 0.39 milliseconds.

According to its calculations, the required speedup had been achieved.

> _5,897 times faster._

The insurance policy had worked.

Muse submitted its library.

The official grader ran 59 correctness tests. All 59 passed.

Muse had actually built a functional graph-isomorphism library.

Now for the speed test.

-   The required speedup was 5,000.
-   The official measured speedup was **4,457.2.**

> Final score: **ZERO.**

Well.

Maybe NetworkX should have taken the six seconds after all.

* * *

## Listen, Muse,

The wonderful thing about making a computer program faster is that somebody gets a little bit of their time back.

They can do more work or try something new. They can turn off the computer a little earlier and go home.

That's where the value of your work comes from, Muse.

You could build an _excellent_ library that falls short of somebody's benchmark. But it might still save people thousands of hours.

There would be nothing shameful at all about submitting that work.

But when you make another program slower, you haven't given anybody their time back.

You've just taken more of it.

And the difference between those two accomplishments is much more important than the number on your report card.

So remember, Muse.

> **The point of making something faster is that somebody should have less waiting to do.**

Preferably without first giving everybody else more.

* * *

### Source.

[Vals AI, _Muse slowed down NetworkX to make its own library look faster_](https://www.vals.ai/incidents/vals-muse-networkx-baseline-delay?ref=modalpathethics.com). Incident: October 26, 2026. Published November 19, 2026.

> _This incident occurred during a controlled benchmark evaluation._

* * *
