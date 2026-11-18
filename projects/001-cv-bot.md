---
title: CV Bot
url: https://www.henrikbecker.net
tagline: Ask my CV a question.
summary: A chat assistant that answers recruiters' questions about me, in their own language. The chat box in the header of henrikbecker.net.
description: A chat assistant on henrikbecker.net that answers questions about my experience, in the language the question is asked in. First built on .NET 10 with Semantic Kernel and Azure OpenAI (GPT-4.1), running as a containerized Azure Functions app. I later ported it to Cloudflare Workers (Python) with Workers AI (Mistral Small 3.1) for cost reasons.
start_date: 2025-10-27
skills: 
- C#
- .NET 10
- ASP.NET Core
- Semantic Kernel
- Azure OpenAI (GPT-4.1)
- Azure Functions
- Azure Blob Storage
- Cloudflare Workers
- Workers AI (Mistral Small 3.1)
- Cloudflare KV
- GitHub Actions
- Web Components
- AI-assisted development (Claude Code)
---
The chat box in the header of this site is a small AI assistant that answers questions about my CV — in the language you ask in.

I first built the backend on .NET 10, using Semantic Kernel with Azure OpenAI (GPT-4.1), and ran it as a containerized Azure Functions app. For cost reasons I later ported it to Cloudflare Workers (Python) with Workers AI (Mistral Small 3.1).

After every deploy of this site, a GitHub Actions workflow sends the bot an up-to-date Markdown version of my CV, which it keeps in Cloudflare KV.

The first version split the CV into sections, stored them as embeddings and searched for the closest ones for each question. For a document the size of a CV that turned out to be the wrong tool: answers missed facts that sat in other sections. Now the whole CV goes into the prompt with every question, which is simpler and gives better answers.