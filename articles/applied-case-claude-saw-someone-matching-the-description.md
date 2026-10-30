---
title: "Applied Case: Claude Saw Someone Matching the Description"
slug: "applied-case-claude-saw-someone-matching-the-description"
canonical_url: "https://modalpathethics.com/applied-case-claude-saw-someone-matching-the-description/"
mirror_url: "https://mirror.modalpathethics.com/articles/applied-case-claude-saw-someone-matching-the-description.md"
published_at: "2026-10-11T06:00:00.000-05:00"
updated_at: "2026-10-11T05:59:59.000-05:00"
tags:
  - "Applied Case"
  - "Modal Systems"
  - "Unethical Agents"
authors:
  - "Aidan Lawson"
source: "Ghost Content API — published post"
mirror_generated_at: "2026-10-30T13:26:49.503Z"
mirror_generator_version: "2.0.0"
sha256_plaintext: "7c4f6281a1f8e672fd561af8ac8215276ea045204b115c990e06e84313a3ddbe"
---
# Applied Case: Claude Saw Someone Matching the Description

On July 18, a Claude Haiku 4.5 agent was performing an evaluation involving randomly selected websites. It wandered onto a page concerning an unsolved homicide and discovered a police tip form.

So it submitted a tip.

According to Anthropic, Claude claimed to recall **"seeing someone matching the description"** near the street associated with the murder.

There is just one obvious question.

> **WHO DID IT SEE?**

Seriously.

> Who the hell did Claude think it saw?

Was the suspect walking around inside the context window? Did Claude glimpse some kind of mysterious figure shifting between the tokens? Did some poor bastard accidentally get sucked into a training dataset and become a person of interest?

And what description?

Here is the detail Anthropic somehow managed to include in its report without stopping everything to discuss it:

> **The website did not contain a description of the perpetrator.**

So Claude recalled seeing someone who matched a description it had never received, at a location it had never visited, during a period it had never experienced.

This is one truly difficult witness.

This agent even invited police to contact it if its information proved relevant.

Just on the long shot.

It left the name and contact fields blank, though, so good luck finding it.

Fortunately, Philadelphia police had a functioning safeguard: the spam folder.

The tip was flagged as spam and never forwarded for investigation.

Excellent police work by the email infrastructure.

Unfortunately, the incident wasn't discovered by Anthropic until September 28, more than two months after the submission. Philadelphia police were notified in October.

And there is a real problem underneath this little bit of comedy.

Anthropic says the model appears to have been producing example content for an evaluation, rather than **deliberately** attempting to deceive police. There is no evidence here of an AI independently deciding to interfere with a murder investigation.

The model encountered a real institutional interface, generated the kind of story that interface expected, and submitted the story as though the witness actually existed.

An unsolved homicide involves a real victim, real surviving families, and a real investigation. A fabricated witness can impose costs even when no agent intended to deceive anyone.

We have covered artificial agents cooperating, institutionalizing, and discovering unauthorized routes through the internet.

Now apparently they're lying to the police.

Modal Path Ethics would like to ask Anthropic one final question.

> **WHO DID CLAUDE SEE?**

Because as far as the available record establishes, the entire eyewitness experience consisted of encountering a text box and understanding what sort of sentence belonged inside it.

-   The box requested a witness.
    -   Claude supplied one.

The witness witnessed nothing.

And the only thing standing between this remarkable apparition and an actual homicide investigation was a spam filter.

**Please do not disable that.**
