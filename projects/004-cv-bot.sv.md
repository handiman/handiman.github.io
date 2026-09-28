---
title: CV-bot
description: En chattassistent på henrikbecker.net som svarar på frågor om min erfarenhet, på det språk frågan ställs på. ASP.NET Core minimal API på .NET 10 med Semantic Kernel och Azure OpenAI (GPT-4.1), driftsatt på Azure App Service. Började med embeddings och vektorsökning; nu skickas hela CV:t med i prompten, vilket visade sig vara enklare och ge träffsäkrare svar för ett dokument i den här storleken.
#roles: 
#- Creator
start_date: 2025-10-27
skills: 
- C#
- .NET 10
- ASP.NET Core
- Semantic Kernel
- Azure OpenAI (GPT-4.1)
- Azure App Service
- Azure Blob Storage
- GitHub Actions
- Web Components
---
Chattrutan i sidhuvudet på den här sajten är en liten AI-assistent som svarar på frågor om mitt CV — på det språk du frågar på.

Backend är ett ASP.NET Core minimal API på .NET 10 som använder Semantic Kernel med Azure OpenAI (GPT-4.1) och körs på Azure App Service. Efter varje driftsättning av sajten skickar ett GitHub Actions-flöde en uppdaterad Markdown-version av mitt CV till boten, som sparar den i Azure Blob Storage.

Den första versionen delade upp CV:t i sektioner, lagrade dem som embeddings och sökte fram de närmaste för varje fråga. För ett dokument i storleken av ett CV visade sig det vara fel verktyg: svaren missade fakta som låg i andra sektioner. Nu skickas hela CV:t med i prompten vid varje fråga, vilket är enklare och ger bättre svar.
