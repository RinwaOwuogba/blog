---
title: 'Using Linear as a Second Brain for Software Engineering (SWE)'
description: 'Why I treat Linear as external memory, so context and past decisions stay recoverable in minutes instead of lost in my head.'
pubDate: 'Jun 05 2026'
heroImage: '../../assets/cover-linear.jpg'
---

## Introduction

First thought that probably comes to your mind is **"What's wrong with his first brain?"**

To answer that, my first brain is fine (AFAIK). Despite the brain in my head working fine, I depend on a second one in the form of Linear as part of my workflow. Agentic programming changed SWE, any single engineer can effectively act as a whole team and the implications of that are massive.

What used to be one engineer, working on one task for hours/days with full context in their heads and regular repetition to drill the details in memory is now multiple parallel tasks which need to be completed today. Compound this by the need to align with team members, review implementation, explain decisions etc, you quickly realize your memory cannot hold everything.

You can only hold so much in memory when handling multiple tasks. Chances are you forget alot - to test an edge case you considered, a specific reason behind an implementation decision, a compromise the team agreed to, the commit/PR where the feature started from, etc. Even if your memory was a *steel-strap*, you're only one person, with a fixed amount of time/energy. If you held all context, across a growing number of implementations in your head alone, you would become a bottleneck to other team members who need context for their work. God forbid you fall sick and your business logic heavy service goes down.

## My workflow

Any new work I start, begins with a clarification session between me and my favourite coding agent (Claude Code right now). During this **we're** making sure **I** have enough context to create a solution - issue reproduction, high level feature scoping, clarification questions etc. Once this is clear, I ask Claude to create a issue on linear using the **linear mcp** tool based off this conversation.

Once the issue has been created, I work through it - create an implementation plan, review plan rigorously, implement, review implementation, get feedback, repeat as needed till I'm satisfied with the work that has been done. During this process I note decisions I and the team (via feedback conversations) made, insights that surfaced etc

Finally, when an implementation is ready to go out, I do my best (still working on it) to add those notes I took during implementation to the Linear issue, add screenshots from my local development environment if relevant and just try to put as much useful information as possible on Linear. Doing this dramatically reduces the *cost* of getting context on this work, both for other team members and future me.

Recently, I was wondering why an implementation I made was missing in production. Working with Claude, I was able to pull context from Linear, identifying the disconnect that led to that outcome in minutes!

That's it. My process is still a work in progress but I can already see the benefits.

*Hero photo by [Ibrahim Jonathan](https://unsplash.com/@jobarick) on [Unsplash](https://unsplash.com).*
