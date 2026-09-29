---
title: Delivery Automation
slug: automated-delivery
sitemap: true
description: Boring, automated deployments with GitHub Actions, Azure Pipelines, Octopus Deploy oor whatever the team already has. From 45 minutes to 5 at Norconsult Astando.
---
Deployments should be boring. At Norconsult Astando I took them from about 45 minutes to about 5; at Plejmo, from an hour to under two.

**GitHub Actions**, **Azure Pipelines**, **Octopus Deploy** or whatever the team already has.
<!--more-->It also brings a few practical advantages:
- **It saves time** — deployments become a non‑event instead of a time sink
- **It’s reliable** — the same steps run the same way every time
- **It’s person‑independent** — anyone can trigger a release, or it can run fully automatically

Below are two examples of how I’ve helped teams move from manual deployments to predictable, automated delivery.

### [Norconsult Astando AB][astando]

**Isy Road** had an all manual deployment process. 
The deployment documentation was spread over several documents and was not up to date. 
I helped the client setup automated deployment for Isy Road as a pilot project. **Octopus Deploy** was used and benefits included:

* Reduced deployment time from ~45 minutes to ~5 minutes per application instance - 15 at the time.
* Automated database deployment.
* More confidence in the deployment process.
* Virtually no deployment related errors.

The success of the pilot project lead to setting up automated deploy for their products **Isy Map** and **Isy Case** as well.
  
### [Plejmo][plejmo]

**Plejmo** had an all manual deployment process that was not very difficult but 
stole a lot of time from the small development team ‐ time that should be used to develop the product. 
Using **Octopus Deploy** we were able to: 

* Reduce deployment time from ~1 hour to under 2 minutes.
* Automate database deployment.
* Virtually eliminate deployment related errors.

The deployment process became so quick and painless that we could (and often did) deploy several times a day ‐ even during peak hours.

[astando]: /experience/norconsult-astando/
[plejmo]: /experience/film2home/