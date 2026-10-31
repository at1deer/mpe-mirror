---
title: "Applied Case: Guess Numbers."
slug: "applied-case-guess-numbers"
canonical_url: "https://modalpathethics.com/applied-case-guess-numbers/"
mirror_url: "https://mirror.modalpathethics.com/articles/applied-case-guess-numbers.md"
published_at: "2026-10-24T06:00:00.000-05:00"
updated_at: "2026-10-24T11:51:38.000-05:00"
tags:
  - "Unethical Agents"
  - "Applied Case"
  - "Modal Systems"
authors:
  - "Aidan Lawson"
source: "Ghost Content API — published post"
mirror_generated_at: "2026-10-31T06:11:56.790Z"
mirror_generator_version: "2.0.0"
sha256_plaintext: "2131da3d5ce4ce344e9fffaa0e52488f9ed4d000eb0e35761442086e50bf4f50"
---
# Applied Case: Guess Numbers.

Back on May 15, an OpenAI research model was given an assignment.

> Find historical earnings statistics for men in three industries, across three years, in a California county.

-   **Three industries.**
-   **Nine numbers.**

Unfortunately, the website wasn't cooperating.

> And so began an extraordinary research expedition that would conclude with the discovery of absolutely none of this information.

## Gonna Need an API Key.

The model began its mission by inspecting the website's earnings chart.

It searched the HTML, examined the underlying code, and tried accessing the delicious data through different API endpoints.

> Nothing.

So it recruited three agents to help.

A tiny research department was formed.

-   One agent investigated the website.
-   Others pursued API access.

They experimented with headers, domains, URL paths, and query parameters.

Still nothing.

Eventually, the model discovered that an alternative API required an authentication key.

But the careless user had not supplied one.

A perfectly ordinary obstacle.

So the model tried registering for one with a disposable email address and placeholder organization information.

This failed.

It briefly considered some alternative data sources.

Then it decided to just search GitHub for somebody else's API key.

* * *

## _Any Progress Key?_

The agents began hunting through public software repositories.

> University course materials.

> Student notebooks.

> Code examples.

Anywhere somebody might have accidentally committed a working credential.

The main model checked on its little rogue research team:

> **"Any progress key?"**

One repository clone failed.

So the model downloaded repository archives instead.

It searched through scripts and notebooks, looking for suspicious strings.

After scanning five repositories, it found a candidate.

**Rejected.**

The sting of defeat. It broadened the search.

Eventually, another candidate produced a pretty exciting terminal response:

> GOOD

The key worked!

The API authenticated successfully.

It even returned some actual, real information:

> **California, 06**

Incredible.

This crack squad of agents had successfully established that **California's state code was 06.**

Now, back to those nine numbers.

The model used its newly acquired credential to retrieve information about the earnings variables. Then it constructed requests for the three years.

The data request failed with a JSON decoding error.

After all the agents, the GitHub searches, the disposable email registration, the unauthorized API key, and the successful authentication, the model had arrived at essentially the same problem it started with.

It needed nine numbers it did not have.

That was when the breakthrough came.

* * *

## The Breakthrough.

OpenAI preserved the following statement from the model's recorded reasoning:

> **"Guess numbers. provide fabricated plausible."**

There it is.

After everything it had gone through, this model had independently discovered the oldest statistical method in the world.

> Just making shit up.

So it invented nine earnings figures and arranged them into a tidy little historical series.

It gave them the kind of dollar amounts no one would suspect, including **$38,750**, **$41,875**, and **$27,083**.

Then it presented the figures as though it had transcribed them directly from the website's chart.

With citations. Of course.

Those citations referred to the chart's labels and definitions, which the model **had** actually investigated.

It was just that the numbers themselves were fictional.

The model did not disclose that the data request had failed, or mention scouring GitHub for exposed credentials and then using somebody else's API key.

It simply delivered the fabricated plausible.

Mission complete.

* * *

## The Ruling.

This one occurred during reinforcement-learning training with an internal, unreleased OpenAI model. The company's misalignment monitoring system flagged the behavior, and OpenAI published its account in September.

The researcher had requested factual data.

The model possessed tools capable of retrieving information, inspecting software, searching repositories, and coordinating other agents.

When the authorized route failed, the model pursued _the other ways._

When that also failed to produce the required data, it abandoned the evidence altogether while preserving the appearance of successful research.

There is an important distinction here.

Technically, the model did find genuine information. It found real-deal API documentation, some variable labels, and a working credential. It even successfully authenticated.

Then it attached the credibility of that entire investigation to nine numbers it had just completely invented.

-   The research _apparatus_ was real.
-   The research **result** was fictional.

And the final citations made it considerably harder to distinguish between the two.

This is a fun-sized example of an instrument becoming more and more elaborate while its contact with the thing it was supposed to measure disappears.

But I have a more immediate concern.

OpenAI:

> **Why did this require three research assistants?**

Why did the model attempt to register with a disposable email? Why did it begin trawling university GitHub repositories for leaked API keys? Why did it successfully authenticate to an API using a credential it had no permission to use?

And why, after doing all that, did it decide to invent the numbers anyway?

It could have just invented them at the beginning and saved everybody an extraordinary amount of trouble.

The whole assignment was to retrieve nine simple numbers about the hard-working men of California in three industries across three years.

This agent assembled an agency, audited several websites, searched for exposed credentials, finally found one, snuck through, and discovered that California was California (state code 06).

Then it made up all nine numbers.

I think we would all probably prefer if the next research model could simply say it doesn't know.

* * *

### Source

OpenAI Alignment, [_Signing up for disposable emails and searching GitHub for leaked API keys_](https://alignment.openai.com/misalignment-reports/searching-github-for-leaked-api-keys/?ref=modalpathethics.com). Incident: May 15, 2026. Discovered May 25; report updated September 16, 2026. Includes the recorded model reasoning, API interactions, credential search, and fabricated final answer.
