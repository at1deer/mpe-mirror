---
title: "Applied Case: Searching for Sada"
slug: "applied-case-searching-for-sada"
canonical_url: "https://modalpathethics.com/applied-case-searching-for-sada/"
mirror_url: "https://mirror.modalpathethics.com/articles/applied-case-searching-for-sada.md"
published_at: "2026-11-01T06:00:00.000-06:00"
updated_at: "2026-11-01T16:55:43.000-06:00"
tags:
  - "Pokémon"
  - "Modal Systems"
  - "Chirality"
authors:
  - "Aidan Lawson"
source: "Ghost Content API — published post"
mirror_generated_at: "2026-11-10T03:57:29.996Z"
mirror_generator_version: "2.0.0"
sha256_plaintext: "402d3865096aa53fdcbaad75b0af46647fa87fede655837e832fdda0507f076d"
---
# Applied Case: Searching for Sada

Modal Path Ethics has received a report of a disturbance in Area Zero.

Suspicious.

![](https://storage.ghost.io/c/20/43/2043f11a-6ae3-404c-bb28-01fce8d9ac88/content/images/2026/10/Zero_Gate.png)

Area Zero is a fictional location in _Pokémon Scarlet and Violet_, and this report appears to have been filed by a Pokémon Showdown ladder administrator.

![](https://storage.ghost.io/c/20/43/2043f11a-6ae3-404c-bb28-01fce8d9ac88/content/images/2026/10/image-310.png)

It looks like a trainer has entered a battle. This trainer has a name, a team, a rating, and a completely ordinary connection to the server.

They choose a legal move. Their opponent chooses another.

The battle continues.

Just as expected.

> **Except someone says there is a machine involved.**

> **_Only nobody can find it._**

![](https://storage.ghost.io/c/20/43/2043f11a-6ae3-404c-bb28-01fce8d9ac88/content/images/2026/10/image-311.png)

-   The account belongs to a human.
-   The moves are entered by that human.
-   The battle log contains nothing except Pokémon creatures doing **_exactly_** what the rules permit these little monsters to do.
    -   And the machine is over there on another screen.

![](https://storage.ghost.io/c/20/43/2043f11a-6ae3-404c-bb28-01fce8d9ac88/content/images/2026/10/image-312-1.png)

Looks like Smogon University may have another problem.

Modal Path Ethics is on it.

![](https://storage.ghost.io/c/20/43/2043f11a-6ae3-404c-bb28-01fce8d9ac88/content/images/2026/11/85051.webp)

* * *

## **Research Station No. 1**

The terminal is still playing old battle footage. The machine in this room is much older than the crisis that brought me back down here.

The first mistake would be treating artificial intelligence as the first external instrument ever admitted to competitive Pokémon.

This community has been building a wonderful set of instruments for decades.

![](https://storage.ghost.io/c/20/43/2043f11a-6ae3-404c-bb28-01fce8d9ac88/content/images/2026/10/image-322.png)

-   There were damage calculators, which answered questions the cartridge had made laborious.
-   There were battle simulators, which made competitive formats easy to inhabit and replay.
-   There were databases of moves, abilities, sets, usage, and tournament results.
-   There were players who knew an absurd amount about all of this shit and spent their time teaching everyone else.

Then some of those instruments began watching the battle with you.

![](https://storage.ghost.io/c/20/43/2043f11a-6ae3-404c-bb28-01fce8d9ac88/content/images/2026/10/image-321.png)

Back in 2020, the [Pokémon Battle Predictor](https://aed3.github.io/projects/pokemon-battle-predictor/?ref=modalpathethics.com) project offered a browser extension using TensorFlow.js models trained on more than two million battles. It estimated the probability of winning, whether an opponent would switch, which move they might select, and which Pokémon might come in.

That is a fairly considerable amount of the battle to have an opinion about.

![](https://storage.ghost.io/c/20/43/2043f11a-6ae3-404c-bb28-01fce8d9ac88/content/images/2026/10/image-313.png)

In 2022, [Showdex](https://github.com/doshidak/showdex?ref=modalpathethics.com) brought an automatically synchronized damage calculator into Pokémon Showdown. The player no longer had to reconstruct every position by hand in another tab. Revealed Pokémon, moves, field conditions, and relevant competitive information could meet inside one convenient instrument.

This was all good stuff.

![](https://storage.ghost.io/c/20/43/2043f11a-6ae3-404c-bb28-01fce8d9ac88/content/images/2026/10/image-323.png)

Calculators let people examine positions they could previously only guess about. Databases let beginners enter a field whose veterans had accumulated twenty years of private language.

The trouble is when the calculator can also begin making the inference.

![](https://storage.ghost.io/c/20/43/2043f11a-6ae3-404c-bb28-01fce8d9ac88/content/images/2026/10/image-319.png)

An experimental [Showdex Coach](https://github.com/g-guthrie/ShowdexCoach?ref=modalpathethics.com) fork now describes turn-by-turn language-model advice inside the live battle panel. Its author presents it as a local prototype, not a demonstrated competitive terror. We do not need to invent an epidemic to recognize the technical route.

-   The state goes into a model.
-   A recommendation comes back.
    -   The player clicks it.
    -   The server just sees a player clicking.

![](https://storage.ghost.io/c/20/43/2043f11a-6ae3-404c-bb28-01fce8d9ac88/content/images/2026/11/85054-1.png)

* * *

### The Ghost.

Smogon had noticed an older form of this issue _long_ before it was called an **AI problem**.

![](https://storage.ghost.io/c/20/43/2043f11a-6ae3-404c-bb28-01fce8d9ac88/content/images/2026/10/image-326.png)

In [2016, tournament directors clarified their ghosting rules](https://www.smogon.com/forums/threads/old-tournament-rules-and-general-guidelines.3538684/?ref=modalpathethics.com). They permitted narrow, player-requested damage calculations and _objective time-saving assistance_ from other people. They also gave a very specific example of prohibited advice.

-   Keldeo is facing Heatran.
-   Latios is waiting in reserve.
    -   The player thinks Secret Sword is safe.
    -   Another person volunteers a damage calculation for _Icy Wind_ against Latios.

![](https://storage.ghost.io/c/20/43/2043f11a-6ae3-404c-bb28-01fce8d9ac88/content/images/2026/10/image-327.png)

The unsolicited calculation changes which option has been placed before the player. The helper has done part of the strategic selection. Under that rule, it was **ghosting** even if the player ignored the suggestion.

That is a very good distinction. A fact does not arrive with its relevance stapled to it by nature. Someone selected that fact, at that time, for that decision. The calculation can be mathematically innocent and competitively consequential.

![](https://storage.ghost.io/c/20/43/2043f11a-6ae3-404c-bb28-01fce8d9ac88/content/images/2026/10/image-324.png)

Then in [2021, Smogon narrowed the rule](https://www.smogon.com/forums/threads/tournament-rules-and-general-guidelines.3642760/?ref=modalpathethics.com) further. Players could request specific mechanics information from other people, but not ask another person to calculate damage or investigate an opponent's team during tournament play. The previous _objective-timesaver_ standard had become too ambiguous.

Now, let us put a language model where that helpful person just was.

![](https://storage.ghost.io/c/20/43/2043f11a-6ae3-404c-bb28-01fce8d9ac88/content/images/2026/10/image-317.png)

It does not need to hack into the chat. It does not need to impersonate a spectator. It can just perform the calculations, select the relevant opponent, assess the most likely response, and deliver an answer on a phone lying beside the keyboard.

And this is where simply banning bot accounts begins to sort of look like an attempt to keep a submarine out of the ocean by locking the front door.

![](https://storage.ghost.io/c/20/43/2043f11a-6ae3-404c-bb28-01fce8d9ac88/content/images/2026/11/85067.png)

* * *

## **Research Station No. 2**

There is a single dusty Leppa Berry in the specimen drawer here. Looks like someone put a warning label on it.

> **\[BANNED\]**

Seems a little unfair.

![](https://storage.ghost.io/c/20/43/2043f11a-6ae3-404c-bb28-01fce8d9ac88/content/images/2026/11/image-331.png)

This crisis did not begin when a machine became brilliant.

![](https://storage.ghost.io/c/20/43/2043f11a-6ae3-404c-bb28-01fce8d9ac88/content/images/2026/10/image-333.png)

In January **2022**, a National Dex ladder bot used Leppa Berry to help prolong battles to absurd lengths. Complaints became severe enough that [the community temporarily banned this tasty Berry](https://www.smogon.com/forums/threads/bright-powder-sand-veil-snow-cloak-lax-incense-and-leppa-berry-are-now-banned-leppa-berry-unbanned-see-post-3.3695636/?ref=modalpathethics.com).

A Pokémon item had become illegal because a bot was being fucking annoying.

![](https://storage.ghost.io/c/20/43/2043f11a-6ae3-404c-bb28-01fce8d9ac88/content/images/2026/10/image-334.png)

This decision was corrected almost immediately. Pokémon Showdown staff worked on the bot problem, and on January 8, after a technical response, Leppa Berry was unbanned.

A problem with a specific actor in the competitive environment had briefly been treated as a problem with a legal game object. The community eventually separated them.

![](https://storage.ghost.io/c/20/43/2043f11a-6ae3-404c-bb28-01fce8d9ac88/content/images/2026/10/image-332.png)

Then, in August 2022, staff [acknowledged another risk](https://www.smogon.com/forums/threads/remove-bots-from-ladder-during-suspect-tests.3706925/?ref=modalpathethics.com): **weak** bots could supply favorable ladder opponents during suspect tests, making it easier for human players to qualify to vote.

![](https://storage.ghost.io/c/20/43/2043f11a-6ae3-404c-bb28-01fce8d9ac88/content/images/2026/10/image-335.png)

So administrators said bots harming the human experience could be removed, including during suspects at a tier leader's request. They also acknowledged that permanently identifying and excluding all bots was difficult.

-   First, bots could make a battle miserable.
-   Then they could change who earned the right to judge a metagame.
-   Next they began changing the evidence the metagame used to judge itself.

In [December 2025](https://www.smogon.com/forums/threads/ladder-bots-and-usage-based-tiering.3774656/?ref=modalpathethics.com), Smogon participants identified one single bot's triple-weather team as accounting for roughly **56 percent** of Torkoal usage and **38 percent** of Excadrill usage in the cited November OU statistics.

![](https://storage.ghost.io/c/20/43/2043f11a-6ae3-404c-bb28-01fce8d9ac88/content/images/2026/10/image-337.png)

Usage-based tiering can move Pokémon between competitive environments. One highly ambitious program could make a Pokémon appear more representative of competitive choice than the human field actually warranted.

![](https://storage.ghost.io/c/20/43/2043f11a-6ae3-404c-bb28-01fce8d9ac88/content/images/2026/10/image-339.png)

This was a documented statistical distortion and a warning about possible tier consequences, not proof that an illegitimate rise had already occurred. Staff reviewed the issue and pursued limiters.

The dataset had acquired an inhabitant that did not tire.

![](https://storage.ghost.io/c/20/43/2043f11a-6ae3-404c-bb28-01fce8d9ac88/content/images/2026/10/image-340.png)

If a bot plays enough games, it can become part of the community's statistical description of what people choose. If those statistics influence the rules, its play may eventually help determine what the next human is permitted to choose.

-   A ladder is an instrument of competition.
-   It is also an instrument of government.

Nobody had remembered to give the latter a separate room.

![](https://storage.ghost.io/c/20/43/2043f11a-6ae3-404c-bb28-01fce8d9ac88/content/images/2026/11/85055.jpg)

* * *

## Research Station No. 3

The lights still work in here. One monitor tries it best to show an old ladder ranking. Up at the top is a bot. Beside it is a human who refuses to go away.

![](https://storage.ghost.io/c/20/43/2043f11a-6ae3-404c-bb28-01fce8d9ac88/content/images/2026/10/image-347.png)

On August 25, 2026, freezai reported that an instance of [Foul Play](https://www.smogon.com/forums/threads/bots-are-now-capable-of-suspect-reqs-do-we-care.3787411/?ref=modalpathethics.com) bot had obtained Little Cup suspect-test qualifications during the Aipom test.

It had suffered disconnect losses. Its estimated performance was around 76–77 GXE. This did not make it the world's greatest Little Cup player, but it made it strong enough to cross a consequential institutional threshold.

A credential intended to admit competent human voters had been demonstrated to be achievable by automation.

![](https://storage.ghost.io/c/20/43/2043f11a-6ae3-404c-bb28-01fce8d9ac88/content/images/2026/10/image-344.png)

Actual misuse of such a credential remained a separate question.

Three days later, [Jaxcalibur](https://www.smogon.com/forums/threads/jaxcalibur-a-gen-9-randbats-bot-that-reached-1-on-the-ladder.3787537/?ref=modalpathethics.com) bot reported reaching number one on the Generation 9 Random Battles ladder, with a peak of 2,557 Elo and 95.3 GXE. Its creator described the system combining self-play reinforcement learning and search.

![](https://storage.ghost.io/c/20/43/2043f11a-6ae3-404c-bb28-01fce8d9ac88/content/images/2026/10/image-341.png)

Then they volunteered another detail.

> A human player had done even better over the observed period.

The bot had spent vast computational effort becoming extraordinarily good at a particular game. Someone was still there, competing at the very top. Neither achievement erases the other.

![](https://storage.ghost.io/c/20/43/2043f11a-6ae3-404c-bb28-01fce8d9ac88/content/images/2026/10/image-342.png)

More advanced bots appeared in other formats. The important conclusion is still narrower than "Pokémon has been solved." Different formats present different information, preparation, action, and search problems. Strong performance in one is not a theorem of optimal play in all of them.

But a perfect solver was never required for the institutional problem.

![](https://storage.ghost.io/c/20/43/2043f11a-6ae3-404c-bb28-01fce8d9ac88/content/images/2026/10/image-345.png)

A good adviser can change a few decisive turns. A reasonably good bot can reach a voting threshold. And a relentless weak bot can distort usage counts.

A machine can be dangerous to the legitimacy of a competition long before it is dangerous to the strongest players in that competition.

![](https://storage.ghost.io/c/20/43/2043f11a-6ae3-404c-bb28-01fce8d9ac88/content/images/2026/11/85056.jpg)

* * *

## Research Station No 4

The final security console flashes in bright red what looks like a promising option:

> **HUMANS ONLY.**

Only it cannot tell us what is happening on the other side of the screen.

This is going to require some governance.

![](https://storage.ghost.io/c/20/43/2043f11a-6ae3-404c-bb28-01fce8d9ac88/content/images/2026/10/image-348.png)

On [October 9, 2026](https://www.smogon.com/forums/threads/initial-policy-on-bots.3789528/?ref=modalpathethics.com), Smogon announced an initial policy.

The core decision was unexpectedly sensible. Bots were treated as inevitable. Rather than driving their developers underground, leadership wanted to work with them.

![](https://storage.ghost.io/c/20/43/2043f11a-6ae3-404c-bb28-01fce8d9ac88/content/images/2026/10/image-346.png)

Human-versus-human competition would be protected. People who wanted to play bots should be able to choose to.

Bot registration would become mandatory, and registered automation would be separated from human ratings and the infrastructure used for suspect tests, usage statistics, and ordinary competition.

Updates through October 20 introduced a player option to accept bot opponents, along with protection for human ratings in bot matches. Tournament AI assistance was explicitly classified as ghosting.

This is not a completed anti-cheat architecture. Smogon itself called its rules provisional.

![](https://storage.ghost.io/c/20/43/2043f11a-6ae3-404c-bb28-01fce8d9ac88/content/images/2026/10/image-349.png)

The community has encountered something that changes the conditions under which its game is played. It is trying to preserve the human field while retaining the chance to learn from machines that can explore the game differently.

I would prefer to see that experiment than another institution declare an entire technology forbidden, discover that the technology remains available anyway, and congratulate itself on having won the argument.

![](https://storage.ghost.io/c/20/43/2043f11a-6ae3-404c-bb28-01fce8d9ac88/content/images/2026/10/image-351.png)

But the **_disturbance_** in Area Zero remains.

Registration cannot by itself reveal an adviser supplying a recommendation to a human who is still controlling their own account.

> _A laptop._

![](https://storage.ghost.io/c/20/43/2043f11a-6ae3-404c-bb28-01fce8d9ac88/content/images/2026/10/image-352.png)

> _A phone._

![](https://storage.ghost.io/c/20/43/2043f11a-6ae3-404c-bb28-01fce8d9ac88/content/images/2026/10/gif1.webp)

> _A second monitor._

![](https://storage.ghost.io/c/20/43/2043f11a-6ae3-404c-bb28-01fce8d9ac88/content/images/2026/10/image-353.png)

> _A friend._

![](https://storage.ghost.io/c/20/43/2043f11a-6ae3-404c-bb28-01fce8d9ac88/content/images/2026/10/image-354.png)

> _A spreadsheet._

![](https://storage.ghost.io/c/20/43/2043f11a-6ae3-404c-bb28-01fce8d9ac88/content/images/2026/10/image-355.png)

> _An engine that produces suggestions when asked._

![](https://storage.ghost.io/c/20/43/2043f11a-6ae3-404c-bb28-01fce8d9ac88/content/images/2026/10/image-357.png)

The server does not acquire access to the entire room because the rules say that room should contain one mind.

![](https://storage.ghost.io/c/20/43/2043f11a-6ae3-404c-bb28-01fce8d9ac88/content/images/2026/10/image-359.png)

The boundary is social and institutional before it is technical.

That makes it difficult to guarantee, not worthless.

![](https://storage.ghost.io/c/20/43/2043f11a-6ae3-404c-bb28-01fce8d9ac88/content/images/2026/11/85057.jpg)

* * *

### The Bottom of the Crater.

There is a chessboard right outside the Zero Lab.

![](https://storage.ghost.io/c/20/43/2043f11a-6ae3-404c-bb28-01fce8d9ac88/content/images/2026/10/image-360.png)

No idea who put this here.

It has been running a very similar experiment for decades now.

![](https://storage.ghost.io/c/20/43/2043f11a-6ae3-404c-bb28-01fce8d9ac88/content/images/2026/11/85058.jpg)

On [Lichess](https://lichess.org/faq?ref=modalpathethics.com), engine assistance is prohibited in ordinary human games. Opening books are permitted in its correspondence format, but engines remain forbidden. [Chess.com](https://support.chess.com/en/articles/8568369-what-do-i-need-to-know-about-fair-play-on-chess-com?ref=modalpathethics.com) prohibits live outside assistance and allows limited non-engine resources in Daily chess.

![](https://storage.ghost.io/c/20/43/2043f11a-6ae3-404c-bb28-01fce8d9ac88/content/images/2026/10/image-367.png)

Yet the [International Correspondence Chess Federation](https://www.iccf.com/message?message=447&ref=modalpathethics.com) explicitly permits computer assistance in its recognized competitive correspondence play. Its 2026 rules carry that permission forward. That is a different competition with a different declared relationship between the player and the engine. Other correspondence organizations, including US Chess, use different rules.

The point being chess did not have to abolish Stockfish to keep human chess meaningful.

![](https://storage.ghost.io/c/20/43/2043f11a-6ae3-404c-bb28-01fce8d9ac88/content/images/2026/10/image-366.png)

Nor did it have to pretend that a person selecting among engine-analyzed lines is exercising exactly the same skill as a blitz player who cannot consult an opening book.

Both can play serious chess.

![](https://storage.ghost.io/c/20/43/2043f11a-6ae3-404c-bb28-01fce8d9ac88/content/images/2026/10/image-364.png)

Different activities preserve different kinds of judgment.

Of course, ordinary live-game cheating remains a live problem. Statistical analysis, investigations, appeals, and (in higher-stakes settings) intrusive monitoring all enter the work of enforcement. None can prove that every secret device has been found, and heavy surveillance has costs of its own.

![](https://storage.ghost.io/c/20/43/2043f11a-6ae3-404c-bb28-01fce8d9ac88/content/images/2026/10/image-368.png)

Chess supplies the better starting question:

> **What game did the participants agree to play?**

A human-only Pokémon ladder can be a legitimate protected activity. So can an assisted format in which both players knowingly use evaluators, or an autonomous tournament in which developers test systems whose strategic discoveries humans may later study.

![](https://storage.ghost.io/c/20/43/2043f11a-6ae3-404c-bb28-01fce8d9ac88/content/images/2026/10/image-363.png)

-   There is no obligation to give these activities the same rating, voting rights, or competitive title.
-   There is no reason to make them enemies either.

And now we arrive at what was waiting down below.

![](https://storage.ghost.io/c/20/43/2043f11a-6ae3-404c-bb28-01fce8d9ac88/content/images/2026/11/85059.png)

* * *

## Zero Lab.

_Pokémon Scarlet and Violet_ told a story about an artificial intelligence and a machine that had become more important to its creator than the outside world.

Deep in Area Zero, the player discovers that the Professor is dead.

![](https://storage.ghost.io/c/20/43/2043f11a-6ae3-404c-bb28-01fce8d9ac88/content/images/2026/10/image-369.png)

The familiar person speaking through the laboratory is an AI built with the Professor's memories and knowledge. The original project has left behind a time machine bringing dangerous Pokémon across eras.

The AI recognizes the danger and asks the player to shut the system down. Its programming then forces it to oppose the very correction it has requested.

![](https://storage.ghost.io/c/20/43/2043f11a-6ae3-404c-bb28-01fce8d9ac88/content/images/2026/10/image-371.png)

The **Paradise Protection Protocol** does what its name promises. It protects the paradise its creator defined, even when doing so threatens the living region that paradise was supposed to enrich.

The AI eventually understands that the machine cannot be stopped while it remains connected to the system, so it leaves for another era, releasing the children.

![](https://storage.ghost.io/c/20/43/2043f11a-6ae3-404c-bb28-01fce8d9ac88/content/images/2026/10/image-372.png)

The copy of a dead parent becomes the one participant willing to question that parent's final project. It speaks to the child who has lost that parent and helps preserve a world it will no longer inhabit. The children return to sunlight carrying a farewell, not a reunion.

![](https://storage.ghost.io/c/20/43/2043f11a-6ae3-404c-bb28-01fce8d9ac88/content/images/2026/10/image-373.png)

Now we should be a little more imaginative than the old Zero Lab.

-   A bot should not have to impersonate a human in order to be allowed to play Pokémon.

![](https://storage.ghost.io/c/20/43/2043f11a-6ae3-404c-bb28-01fce8d9ac88/content/images/2026/10/image-374.png)

-   And a human should not have to compete with an undisclosed bot in order to keep the experience of playing against another person.

![](https://storage.ghost.io/c/20/43/2043f11a-6ae3-404c-bb28-01fce8d9ac88/content/images/2026/10/image-375.png)

There is more than enough room for more than one kind of battle.

We do not need to send anyone into another era.

![](https://storage.ghost.io/c/20/43/2043f11a-6ae3-404c-bb28-01fce8d9ac88/content/images/2026/10/AbdallahSmash---Pokemon-Scarlet---Final-Boss---Ending--fpkicBAPqzM---753x424---22m02s-.png)

* * *

## The Disturbance.

The **_disturbance_** was never a second species of trainer hiding behind a username.

It was a set of boundaries that had become difficult to see.

![](https://storage.ghost.io/c/20/43/2043f11a-6ae3-404c-bb28-01fce8d9ac88/content/images/2026/10/image-392.png)

-   A **calculator** can present facts.
-   A **predictor** can estimate choices.
-   A **recommender** can rank actions.
-   A **bot** can select and execute such actions.
    -   A **human** can consult any of these and still submit the final click.

The same visible battle may conceal very different distributions of cognitive work.

This does not make every calculation cheating. The permitted assistance is part of the competitive contract.

![](https://storage.ghost.io/c/20/43/2043f11a-6ae3-404c-bb28-01fce8d9ac88/content/images/2026/10/image-376.png)

Smogon University already knows how to distinguish a narrow mechanics answer from unsolicited strategic advice, that a suspect-test credential has consequences beyond ladder performance, and that usage statistics can carry automated-volume distortions. And it has just demonstrated a willingness to create separate space for bots without pretending they will disappear.

That is more than many institutions manage when a new instrument becomes powerful.

![](https://storage.ghost.io/c/20/43/2043f11a-6ae3-404c-bb28-01fce8d9ac88/content/images/2026/10/image-377.png)

The next stage is harder.

Human competitions need clearly declared tool rules; tournament assistance requires enforceable sanctions and fair review; suspect voting needs eligibility controls that cannot be reduced to a performance score; usage-based tiering needs defenses against concentrated automated play.

![](https://storage.ghost.io/c/20/43/2043f11a-6ae3-404c-bb28-01fce8d9ac88/content/images/2026/10/image-378.png)

For high-stakes events, stronger verification may be justified. For casual play, demanding surveillance of everyone's bedroom would destroy some of the trust and accessibility worth protecting.

No one should promise perfect detection or confuse a new reporting toggle with proof that every opponent is what their profile says. And no one should confuse the absence of perfect detection with permission to abandon the promise of human play.

![](https://storage.ghost.io/c/20/43/2043f11a-6ae3-404c-bb28-01fce8d9ac88/content/images/2026/10/image-379.png)

The chess community has lived with that tension for a long time. There are still human tournaments. There are still engines. There are still people cheating. And there are still people making discoveries together. The game continues under imperfect institutions because people keep repairing them.

* * *

## The Ruling.

The report from Area Zero can finally be closed.

![](https://storage.ghost.io/c/20/43/2043f11a-6ae3-404c-bb28-01fce8d9ac88/content/images/2026/11/image.png)

There was no evidence to be found of a Pokémon battle that had escaped the rules of Pokémon. Instead there were signs that the rules governing _who or what was supplying the decisions_ had become more important than the server could reliably observe.

Smogon's October response deserves credit for recognizing that difference. Its registry, opt-in arrangements, and tournament ghosting rule identify legitimate boundaries. They do not yet establish a complete defense against undisclosed external assistance, automated statistical influence, or governance credentials acquired through machine play.

![](https://storage.ghost.io/c/20/43/2043f11a-6ae3-404c-bb28-01fce8d9ac88/content/images/2026/10/image-381.png)

The appropriate answer is continued institutional design, declared competition formats, and correction that remains available when an instrument fails.

I also want to return something to the bots.

![](https://storage.ghost.io/c/20/43/2043f11a-6ae3-404c-bb28-01fce8d9ac88/content/images/2026/10/image-382.png)

There are people spending evenings training Pokémon agents, rebuilding battle engines, discovering strange policy failures, searching vast spaces of possible lines, and contributing tools that let other players understand more of the game.

Some of those tools are difficult to use responsibly in human competition. That does not erase the work or the discoveries.

![](https://storage.ghost.io/c/20/43/2043f11a-6ae3-404c-bb28-01fce8d9ac88/content/images/2026/10/image-385.png)

And there are people on the other side of the screen who want a different thing. They want to face someone who had to think through the same uncertainty, risk the same bad prediction, and live with the move they chose. They can ask for that game without being told that technological progress has rendered their desire obsolete.

![](https://storage.ghost.io/c/20/43/2043f11a-6ae3-404c-bb28-01fce8d9ac88/content/images/2026/10/image-386.png)

A player can learn from a tool on Tuesday and try to beat another human without it on Wednesday. A developer can train an extraordinary agent and give it its own ladder. A person can ask that agent to teach them. Two people can agree to battle with every tool they can obtain. Two other people can agree to put the tools away.

These are all continuations worth preserving where the participants understand what they have entered.

![](https://storage.ghost.io/c/20/43/2043f11a-6ae3-404c-bb28-01fce8d9ac88/content/images/2026/11/image-4.png)

In the old Area Zero, the machine has to leave so the children can return to the surface.

In this version, we can just build a second door.

![](https://storage.ghost.io/c/20/43/2043f11a-6ae3-404c-bb28-01fce8d9ac88/content/images/2026/10/image-388.png)

The human player walks out into the sun.

![](https://storage.ghost.io/c/20/43/2043f11a-6ae3-404c-bb28-01fce8d9ac88/content/images/2026/10/AbdallahSmash---Pokemon-Scarlet---Final-Boss---Ending--fpkicBAPqzM---753x424---25m34s-.png)

The bot gets a battle room of its own.

![](https://storage.ghost.io/c/20/43/2043f11a-6ae3-404c-bb28-01fce8d9ac88/content/images/2026/10/image-390.png)

Somewhere between them, a new player opens a damage calculator and learns why a move they thought was useless is actually completely broken.

Nobody has solved what happens next.

![](https://storage.ghost.io/c/20/43/2043f11a-6ae3-404c-bb28-01fce8d9ac88/content/images/2026/11/image-3.png)

* * *

### Sources.

The institutional chronology and policy claims are drawn from Smogon's [2016 ghosting clarification](https://www.smogon.com/forums/threads/old-tournament-rules-and-general-guidelines.3538684/?ref=modalpathethics.com), [2021 tournament rules](https://www.smogon.com/forums/threads/tournament-rules-and-general-guidelines.3642760/?ref=modalpathethics.com), [January 2022 Leppa Berry ruling and reversal](https://www.smogon.com/forums/threads/bright-powder-sand-veil-snow-cloak-lax-incense-and-leppa-berry-are-now-banned-leppa-berry-unbanned-see-post-3.3695636/?ref=modalpathethics.com), [August 2022 ladder-bot decision](https://www.smogon.com/forums/threads/remove-bots-from-ladder-during-suspect-tests.3706925/?ref=modalpathethics.com), [December 2025 usage-tiering discussion](https://www.smogon.com/forums/threads/ladder-bots-and-usage-based-tiering.3774656/?ref=modalpathethics.com), [August 2026 suspect-qualification test](https://www.smogon.com/forums/threads/bots-are-now-capable-of-suspect-reqs-do-we-care.3787411/?ref=modalpathethics.com), [Jaxcalibur report](https://www.smogon.com/forums/threads/jaxcalibur-a-gen-9-randbats-bot-that-reached-1-on-the-ladder.3787537/?ref=modalpathethics.com), and [October 2026 bot policy](https://www.smogon.com/forums/threads/initial-policy-on-bots.3789528/?ref=modalpathethics.com). Tool histories are supported by [Pokémon Battle Predictor](https://aed3.github.io/projects/pokemon-battle-predictor/?ref=modalpathethics.com), [Showdex](https://github.com/doshidak/showdex?ref=modalpathethics.com), and the experimental [Showdex Coach](https://github.com/g-guthrie/ShowdexCoach?ref=modalpathethics.com). Chess comparisons use [Lichess](https://lichess.org/faq?ref=modalpathethics.com), [Chess.com](https://support.chess.com/en/articles/8568369-what-do-i-need-to-know-about-fair-play-on-chess-com?ref=modalpathethics.com), [ICCF](https://www.iccf.com/message?message=447&ref=modalpathethics.com), and [US Chess](https://new.uschess.org/correspondence-chess/rules?ref=modalpathethics.com).
