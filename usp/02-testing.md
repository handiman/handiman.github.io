---
title: Tests That Make Sense
slug: meaningful-tests
sitemap: true
description: TDD, BDD and Specification by Example as everyday practice. Tests that read like documentation and tell you what actually broke.
---
TDD, BDD and Specification by Example as everyday practice.

Tests that read like documentation and, when they fail, tell you what actually broke.
<!--more-->
If your test suite is slow, brittle, unreadable, or full of mysterious red failures, I can help you turn it into something you trust — or even reshape it into executable specifications that guide development instead of dragging behind it.

## Examples
I’ve created a few small demo projects to help teams understand how to write meaningful tests in practice. They’re a few years old, but the ideas still hold up:

- **[SpecFlow demo](https://github.com/handiman/specflow.demo)**: a simple example of Specification by Example and executable specifications
- **[Fail Better](https://github.com/handiman/fail-better)**: NUnit techniques for clearer, more human failure messages, including custom constraints that make XML validation errors understandable

## Case Studies

### Wasa Kredit

Several internal financial systems had accumulated years of technical debt, duplicated logic, and drifting requirements. I helped the team introduce Specification by Example and living documentation using SpecFlow, grounding discussions in concrete examples instead of abstract descriptions.
Benefits included:

- Clearer, example‑driven requirements shared by developers, testers, and analysts
- Executable specifications that doubled as documentation and automated tests
- Reduced ambiguity and safer refactoring through meaningful test coverage
- A more iterative, collaborative way of working across the whole development cycle

### CashGuard

StoreManager had drifting Word‑based requirements and no automated way to verify behavior. I introduced Specification by Example and turned existing user stories into executable specifications using SpecFlow. This created a shared language between developers, testers, and product owners and formed the basis for automated regression testing.
Benefits included:

- Clear, example‑driven requirements instead of ambiguous documents
- Automated regression tests that reflected real business behavior
- Living documentation that stayed in sync with the system
- Better communication and fewer misunderstandings across the team
