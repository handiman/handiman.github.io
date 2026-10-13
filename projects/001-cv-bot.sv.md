---
title: CV-bot
url: https://www.henrikbecker.net/sv/
tagline: Ställ en fråga till mitt CV.
summary: En chattassistent som svarar på rekryterares frågor om mig, på deras eget språk. Chattrutan i sidhuvudet på henrikbecker.net.
description: En chattassistent på henrikbecker.net som svarar på frågor om min erfarenhet, på det språk frågan ställs på. Byggdes ursprungligen med ASP.NET Core minimal API på .NET 10 med Semantic Kernel och Azure OpenAI (GPT-4.1), driftsatt på Azure App Service. Den har sedan portats till Cloudflare Workers (Python) med Workers AI, för att minska kostnaden och antalet plattformar.
start_date: 2025-10-27
skills: 
- C#
- .NET 10
- ASP.NET Core
- Semantic Kernel
- Azure OpenAI (GPT-4.1)
- Azure App Service
- Azure Blob Storage
- Cloudflare Workers
- Workers AI (Mistral Small 3.1)
- Cloudflare KV
- GitHub Actions
- Web Components
- AI-stödd utveckling (Claude Code)
---
Chattrutan i sidhuvudet på den här sajten är en liten AI-assistent som svarar på frågor om mitt CV, på det språk du frågar på.

Backend byggdes ursprungligen som ett ASP.NET Core minimal API på .NET 10 som använde Semantic Kernel med Azure OpenAI (GPT-4.1) och kördes på Azure App Service. Den har sedan portats till Cloudflare Workers (Python) med Workers AI, för att minska kostnaden och antalet plattformar.

Efter varje driftsättning av sajten skickar ett GitHub Actions-flöde en uppdaterad Markdown-version av mitt CV till boten, som sparar den i Cloudflare KV.

Den första versionen delade upp CV:t i sektioner, lagrade dem som embeddings och sökte fram de närmaste för varje fråga. För ett dokument i storleken av ett CV visade sig det vara fel verktyg: svaren missade fakta som låg i andra sektioner. Nu skickas hela CV:t med i prompten vid varje fråga, vilket är enklare och ger bättre svar.
