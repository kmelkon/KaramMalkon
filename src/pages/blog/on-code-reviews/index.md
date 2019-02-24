---
title: 'On Code Reviews'
description: Code reviews are an integral part to having a functional team
date: '2019-02-24'
---

## 5 Dysfunctions of a team

- Absence of trust
- Fear of conflict
- Lack of commitment
- Avoidance of accountability
- Inattention to results

## 5 Counters for the 5 Dysfunctions of a Team

- Absence of trust- -> Build trust
  _ Share experiences
  _ Understand the characteristics of each team member
  _ Demonstrate credibility
  _ Lack of trust stems from us not being able to show our weaknesses and be vulnerable and open with one another.
  Lack of trust causes us to be reluctant to ask for help or assist each other and be defensive when confronted with feedback.
- Fear of conflict- -> Be honest and open
  _ There is usually more than one way to it
  _ Ask questions, not statements
  _ Conflict is productive
  _ Lack of trust causes us to avoid debates which makes it seem like we have zero conflicts (which is not possible). It's important that we express our opinions.
- Lack of commitment- -> Work as a team
  _ Make sure every party is heard
  _ Do it thoroughly or not at all \* If conflict doesn't arise, that means only one side's opinions are included in the end result. Everyone's opinion needs to be included in the decision making process.

Support each other.

- Avoidance of accountability- -> Be accountable
  _ Communicate with others early and often
  _ Hold each other accountable
  _ Make clear what needs to be done, by whom and by when
  _ When teams don’t commit, you can’t have accountability: “people aren’t going to hold each other accountable if they haven’t clearly bought into the plan”. In a well-functioning team, it’s the responsibility of each team member to hold one another accountable and accept it when others hold them accountable. Very often, the key to success is the measurement of progress: making clear what the team’s standards are, what needs to be done, by whom and by when.
- Inattention to results- -> tune in
  _ Set the tone for the whole team
  _ Establish guidelines/goals \* A team can only become results oriented when all team members place the team’s results first. When individuals aren’t held accountable, team members naturally tend to look out for their own interests, rather than the interests of the team. Teams can overcome this dysfunction by making the team results clear and rewarding the behaviors that contribute to the team’s results.

The primary role of the leader in overcoming these dysfunctions is to lead by example and set the tone for the whole team. This includes being the first one to be vulnerable, encouraging debate and conflict, making responsibilities and deadlines clear, setting the team’s standards, and last but not least being clear on the team’s results.

## What is a code review?

"Peer review – an activity in which people other than the author of a software deliverable examine it for defects and improvement opportunities – is one of the most powerful software quality tools available. Peer review methods include inspections, walkthroughs, peer deskchecks, and other similar activities."-Humanizing peer reviews

## Why do code reviews?

- Improve us as developers
- Decentralize knowledge
- Share responsibility
- Reinforce clean code practices
- Catch bugs

First of all, everyone makes mistakes, and we know it! When a coder knows he or she will be code reviewed, it's like a safety net: they can more easily relax and code, knowing that another set of eyes will be reading this code before it's considered "done".

Second, everyone learns from a code review. The author gains additional insight on how to improve their code; the reviewer can learn new techniques and ideas from the code they're reviewing; the bystanders get the benefits of both.

## When to code review?

Code reviews should happen after automated checks (tests, style, other CI) have completed successfully, but before the code merges to the repository’s mainline branch.

## Intangible benefits of CRs

- CRs promote openness: Code reviews set the tone for the entire company that everything we do should be open to scrutiny from others, and that such scrutiny should be a welcome part of your workflow rather than viewed as threatening. It’s natural to feel threatened by critique, so you have to hold it as a practice to maintain the right mindset.

- CRs raise team standards: Aside from promoting psychic flexibility, code reviews also help prevent the broken window effect by making sure all of our engineers share a similarly high set of standards. The mere act of saying explicitly to ourselves that we have very high standards perpetuates a virtuous cycle. People begin to want to honor our high bar of quality for its own sake, not merely to “get past the reviewer.”

Don't leave "broken windows" (bad designs, wrong decisions, or poor code) unrepaired.

- CRs propel teamwork: The act of reconciling different viewpoints between reviewer and reviewee can sometimes be a challenge. Opinions are often subjective (e.g. “I just don’t like how you’ve done this,” to which one might respond, “Yeah, well, I do like how I’ve done this”), and the reviewer might be making a good judgment call… or might just be obstructionist without quite realizing it.

> Successful teamwork is not about mastering subtle, sophisticated theories, but rather about combining common sense with uncommon levels of discipline and persistence. Ironically, teams succeed because they are exceedingly human. By acknowledging the imperfections of their humanity, members of functional teams overcome the natural tendencies that make teamwork so elusive.
