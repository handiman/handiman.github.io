---
title: Meningsfulla tester
slug: meaningful-tests
sitemap: true
description: TDD, BDD och Specification by Example i vardagen. Tester som läses som dokumentation och berättar vad som faktiskt gick sönder.
---
TDD, BDD och Specification by Example i vardagen.

Tester som läses som dokumentation och som, när de fallerar, berättar vad som faktiskt gick sönder.
<!--more-->
Om er testsvit är långsam, skör, oläslig eller full av mystiska röda fel kan jag hjälpa er att göra den till något ni litar på – eller till och med forma om den till körbara specifikationer som styr utvecklingen i stället för att släpa efter.

## Exempel
Jag har gjort några små demoprojekt för att visa hur man skriver meningsfulla tester i praktiken. De har några år på nacken, men idéerna håller fortfarande:

- **[SpecFlow-demo](https://github.com/handiman/specflow.demo)**: ett enkelt exempel på Specification by Example och körbara specifikationer
- **[Fail Better](https://github.com/handiman/fail-better)**: NUnit-tekniker för tydligare och mer mänskliga felmeddelanden, bland annat egna constraints som gör XML-valideringsfel begripliga

## Kundcase

### Wasa Kredit

Flera interna finansiella system hade samlat på sig år av teknisk skuld, duplicerad logik och krav som glidit isär. Jag hjälpte teamet att införa Specification by Example och levande dokumentation med SpecFlow, så att diskussionerna utgick från konkreta exempel i stället för abstrakta beskrivningar.
Fördelarna var bland annat:

- Tydligare, exempelbaserade krav som delades av utvecklare, testare och analytiker
- Körbara specifikationer som också fungerade som dokumentation och automatiska tester
- Mindre tvetydighet och säkrare refaktorering tack vare meningsfull testtäckning
- Ett mer iterativt och samarbetsinriktat arbetssätt genom hela utvecklingscykeln

### CashGuard

StoreManager hade Word-baserade krav som glidit isär och inget automatiskt sätt att verifiera beteendet. Jag införde Specification by Example och gjorde om befintliga user stories till körbara specifikationer med SpecFlow. Det gav utvecklare, testare och produktägare ett gemensamt språk och lade grunden för automatiserade regressionstester.
Fördelarna var bland annat:

- Tydliga, exempelbaserade krav i stället för tvetydiga dokument
- Automatiserade regressionstester som speglade verkligt affärsbeteende
- Levande dokumentation som höll sig i synk med systemet
- Bättre kommunikation och färre missförstånd i teamet
