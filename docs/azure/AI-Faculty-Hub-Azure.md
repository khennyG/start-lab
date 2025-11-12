# AI Faculty Hub – Project Documentation (Proposed Azure Integration)

Last updated: 2025-11-12

## 1. Overview

The AI Faculty Hub — also called the AI Teaching Toolkit — is a project we’re building for the College of Science (COS) at Northeastern. The goal is simple: create one place where faculty can see and share the different ways AI is being used in teaching and learning across the college.

This site will have:

- Real examples of how COS faculty are using AI in their classrooms
- A searchable prompt library that showcases effective teaching prompts
- A section where COS faculty can submit their own prompts or use cases to add to the collection

It’s designed to live within Northeastern’s intranet space, where anyone at Northeastern can view it, but only COS faculty can contribute new content.

Right now, the site is up on Vercel (frontend) and Firebase (backend) for testing and development. Because this will be an official COS resource, we want to move to a university‑supported platform — most likely Azure, which Cloud Services recommended for long‑term hosting, security, and maintenance.

## 2. Project goals

- Build a sustainable, easy‑to‑navigate web platform that highlights how COS faculty are integrating AI into teaching
- Allow secure faculty submissions for new prompts and teaching examples using Northeastern credentials
- Have a backend system that stores and organizes submissions safely under university infrastructure
- Make the project maintainable long‑term, so when I graduate, someone within COS or IT can easily continue the work

## 3. How the platform should work

### 3.1 Access and permissions

User Type | Access Level | Description
---|---|---
Anyone at Northeastern | Read‑only | Can browse and explore all public content
COS Faculty | Contributor | Log in with Northeastern credentials to submit prompts or teaching examples
COS Admin or Moderator | Approver | Review, edit, or approve submissions before they go live

### 3.2 Core features

- Home Page: Overview of the project, featured faculty, and examples of AI in teaching
- Prompt Library: A searchable space for teaching prompts (by topic, goal, Bloom’s level, etc.)
- Use Case Gallery: Detailed faculty examples of how they’re using AI in their courses
- Submission Form: For faculty to submit prompts or examples (only after logging in)
- Admin Dashboard: A simple moderation view to review, approve, or delete submissions

## 4. Technical overview (current → target)

Current (for testing):
- Next.js (React) frontend
- Firebase for auth/storage/submissions
- Vercel for hosting

Target (recommended):
- Hosting on Azure
- Authentication via Microsoft Entra ID (formerly Azure AD)
- Serverless APIs with Azure Functions
- Data in Azure Cosmos DB (or Azure SQL, if preferred)
- Files in Azure Blob Storage (optional)
- Secrets in Azure Key Vault
- Monitoring with Azure Application Insights

We’re suggesting Azure because it integrates with Northeastern’s identity and governance model, and it sets us up for a clean handoff to IT.

## 5. Recommended Azure setup

Purpose | Azure Service | What it would do
---|---|---
Frontend Hosting | Azure Static Web Apps | Host the Next.js site and auto‑deploy from GitHub; CDN out of the box
Backend Logic / API | Azure Functions | Handle submissions, auth checks, and database calls
Database | Azure Cosmos DB (SQL API) or Azure SQL | Store prompts, submissions, and moderation status
Authentication | Microsoft Entra ID (Azure AD) | Northeastern SSO for login; group‑based access for COS faculty
File Storage (optional) | Azure Blob Storage | Uploads for images, documents, faculty headshots
Secrets & Keys | Azure Key Vault | Store DB credentials and other secrets safely
Monitoring | Azure Application Insights | Track errors, performance, and custom events (e.g., submission_created)

Notes:
- If we ever need full server‑side rendering with a custom Node server, we can host the frontend on Azure App Service or Container Apps instead of Static Web Apps.
- For now, the site is mostly static with some client calls to APIs, so Static Web Apps is a good fit.

## 6. Example workflow

1) A faculty member logs into the site using Northeastern SSO (Entra ID).
2) They fill out a submission form for a new prompt or use case.
3) The data goes to an Azure Function, which validates identity and checks they’re COS faculty.
4) The submission is saved in the database as “Pending.”
5) A COS admin or moderator logs in and reviews the submission.
6) Once approved, it appears in the Prompt Library or Use Case Gallery.

## 7. Hosting and maintenance

### 7.1 GitHub repository

The project is already on GitHub (used for Vercel). For Azure, the plan is to:

- Keep the repo in GitHub but move or mirror it under Northeastern’s official organization
- Give designated COS technical staff access
- Use GitHub Actions to automatically build and deploy to Azure Static Web Apps on push
# AI Faculty Hub – Project Documentation (Proposed Azure Integration)

## 1. Overview

The AI Faculty Hub (also called the AI Teaching Toolkit) is a project we’re building for the College of Science (COS) at Northeastern.
The idea is to create one shared space where faculty can explore how others are using AI in their teaching — what tools they’re trying, what’s worked well, and how it’s helped students learn.

The website will include:

- A Prompt Library of sample teaching prompts that faculty can browse and learn from.
- A Use Case Gallery with real examples of classroom applications.
- A Submission Portal where COS faculty can contribute their own prompts and examples.

Anyone within Northeastern should be able to access the site and explore its content.
However, only COS faculty members will have the ability to log in and submit new content.

Right now, the site is being built with Next.js (React), hosted temporarily on Vercel, and using Firebase as the backend for testing and storage.
Since this is going to be a long-term, university-owned platform, we want to migrate it to Northeastern’s infrastructure, and we’re recommending Azure as a possible solution because of its compatibility, security, and integration with Northeastern systems.

## 2. Project Goals

- Build a reliable and visually engaging platform that highlights how COS faculty are integrating AI into teaching.
- Allow faculty to safely and easily submit prompts and teaching examples, using Northeastern’s single sign-on system.
- Host everything on a university-managed backend so it’s secure, supported, and sustainable.
- Create a clear handoff plan so the project can be maintained or extended after I graduate.

## 3. Current Setup

At the moment, the project is live in development using:

- Frontend: Next.js (React framework)
- Backend: Firebase (for storing submissions and authentication testing)
- Hosting: Vercel (temporary deployment)
- Version Control: GitHub

This setup works well for testing, but for an official university deployment, we need a backend and hosting environment that meet university IT and data-governance requirements.

## 4. Proposed Hosting and Architecture (Azure)

If we move forward with Azure, here’s the setup that would best fit our needs:

| Component            | Azure Service                         | Purpose                                                                                         |
|----------------------|---------------------------------------|-------------------------------------------------------------------------------------------------|
| Frontend Hosting     | Azure Static Web Apps                 | Hosts the website (Next.js app) and connects directly to GitHub for automatic deployments.      |
| Backend Logic / APIs | Azure Functions                       | Handles all backend logic — receiving form submissions, verifying faculty identity, and saving data securely. |
| Database             | Azure Cosmos DB or Azure SQL Database | Stores all submissions (prompts, examples, and user roles).                                     |
| Authentication       | Azure Active Directory (Entra ID)     | Provides secure login using Northeastern credentials (SSO).                                     |
| File Storage         | Azure Blob Storage (optional)         | Stores any uploaded media, like screenshots or PDFs.                                            |
| Secrets Management   | Azure Key Vault                       | Keeps API keys and credentials secure.                                                          |
| Monitoring           | Azure Application Insights            | Tracks usage, submissions, and any backend issues.                                              |

## 5. How the Platform Should Work

### Access Levels

| User Type             | Access      | Description                                                       |
|-----------------------|------------|-------------------------------------------------------------------|
| Anyone at Northeastern| Can view   | Can browse the website and explore prompts or use cases.          |
| COS Faculty           | Can submit | Can log in using Northeastern SSO to share new prompts or examples.|
| COS Admin / Moderator | Can approve| Reviews incoming submissions before they go live.                  |

### Workflow Example

- Visitor Access: Anyone with a Northeastern account can open the website and explore prompts and examples — no login required for viewing.
- Faculty Submission: A COS faculty member logs in through Northeastern SSO to submit a new prompt or classroom example.
- Backend Handling: The submission goes to an Azure Function, which checks that the user’s email belongs to Northeastern and verifies they’re part of the College of Science.
- Data Storage: The submission is stored in the Azure database with a “Pending” tag.
- Moderation: A COS admin or moderator reviews the pending submission and either approves or edits it.
- Live Display: Once approved, the new content automatically appears in the Prompt Library or Use Case Gallery.

## 6. Future Hosting and Maintenance Plan

### GitHub Repository

The codebase currently lives on my GitHub, but the plan is to transfer it to an official Northeastern or COS GitHub organization (managed by IT).
This ensures that:

- The code remains accessible and editable by authorized maintainers.
- Continuous Deployment (CD) can be configured through GitHub Actions directly to Azure Static Web Apps.

### Long-Term Maintenance

When I graduate:

- All credentials and environment variables will be stored in Azure Key Vault.
- The repository will include detailed documentation for setup, deployment, and local testing.
- A COS IT or Cloud Services staff member (or a new student assistant) can take over maintenance easily.

## 7. Security and Data Protection

- Authentication will use Northeastern’s Entra ID (SSO) — no separate logins or passwords.
- Faculty submissions will include minimal personal information (name, department, prompt content).
- All data will live within university-managed Azure services, ensuring compliance with Northeastern’s IT and FERPA guidelines.

## 8. Recommended Azure Services Summary

| Purpose               | Azure Service                         | Why We Need It                                   |
|-----------------------|---------------------------------------|--------------------------------------------------|
| Host the website      | Azure Static Web Apps                 | Scalable, integrates easily with GitHub CI/CD    |
| Handle form submissions| Azure Functions                      | Simple, secure serverless backend                |
| Store data            | Azure Cosmos DB or SQL Database       | Reliable for structured content like prompts     |
| Authentication        | Azure Active Directory                | Seamless Northeastern SSO integration            |
| Store uploads         | Azure Blob Storage                    | For any media or attached files                  |
| Secure credentials    | Azure Key Vault                       | Keeps keys and secrets encrypted                  |
| Track performance     | Azure Application Insights            | Helps monitor performance and detect issues      |

## 9. Future Add-Ons or Ideas

- A tagging system so prompts can be filtered by AI tool or subject area.
- A simple analytics dashboard showing popular prompts or topics.
- A feedback button or upvote system so faculty can mark helpful prompts.
- Integration into the MyNortheastern portal or COS intranet homepage for visibility.
