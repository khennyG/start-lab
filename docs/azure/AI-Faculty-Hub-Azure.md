# AI Faculty Hub - Project Documentation

**Live site:** [https://start-lab-sage.vercel.app/](https://start-lab-sage.vercel.app/) (still in dev)

---

## 1. Overview

The AI Faculty Hub website is a project I am building for the College of Science (COS) at Northeastern. The idea is to create one shared space where faculty can explore how others are using AI in their teaching, what tools they're trying, what's worked well, and how it's helped students learn.

The website will include:

- **A Prompt Library** of sample teaching prompts that faculty can browse and learn from.  
- **A Use Case Gallery** with real examples of classroom applications.  
- **A Submission Portal** where COS faculty can contribute their own prompts and examples.

Anyone within Northeastern should be able to access the site and explore its content. However, only COS faculty members will have the ability to log in and submit new content.

Right now, the site is being built with **Next.js (React)**, hosted temporarily on **Vercel**, and using **Firebase** as the backend for testing and storage. Hopefully we can use **Azure** as a possible solution to handle all that we need.

---

## 2. Project Goals

- Build a reliable and visually engaging platform that highlights how COS faculty are integrating AI into teaching.  
- Allow faculty to safely and easily submit prompts and teaching examples, using Northeastern's single sign-on system.  
- Host everything on a university-managed backend so it's secure, supported, and sustainable.  
- Create a clear handoff plan so the project can be maintained or extended after I graduate.  

---

## 3. Current Setup

At the moment, the project is live in development using:

- **Frontend:** Next.js (React framework)  
- **Backend:** Firebase (for storing submissions and authentication testing)  
- **Hosting:** Vercel (temporary deployment)  
- **Version Control:** GitHub  

This setup works well for testing, but for an official university deployment, we need a backend and hosting environment that meet university IT and data-governance requirements.

---

## 4. Proposed Hosting and Architecture (Azure)

If we move forward with Azure, here's the setup that would best fit our needs:

| **Component** | **Azure Service** | **Purpose** |
|---|---|---|
| Frontend Hosting | Azure Static Web Apps | Hosts the website (Next.js app) and connects directly to GitHub for automatic deployments. |
| Backend Logic / APIs | Azure Functions | Handles all backend logic, receiving form submissions, verifying faculty identity, and saving data securely. |
| Database | Azure Cosmos DB or Azure SQL Database | Stores all submissions (prompts, examples, and user roles). |
| Authentication | Azure Active Directory (Entra ID) | Provides secure login using Northeastern credentials (SSO). |
| File Storage | Azure Blob Storage (optional) | Stores any uploaded media, like screenshots or PDFs. |
| Secrets Management | Azure Key Vault | Keeps API keys and credentials secure. |
| Monitoring | Azure Application Insights | Tracks usage, submissions, and any backend issues. |

---

## 5. How the Platform Should Work

### Access Levels

| **User Type** | **Access** | **Description** |
|---|---|---|
| Anyone at Northeastern | Can view | Can browse the website and explore prompts or use cases. |
| COS Faculty | Can submit | Can log in using Northeastern SSO to share new prompts or examples. |
| COS Admin / Moderator | Can approve | Reviews incoming submissions before they go live. |

---

### Workflow Example

**Visitor Access**  
Anyone with a Northeastern account can open the website and explore prompts and examples, no login required for viewing.

**Faculty Submission**  
A COS faculty member logs in through Northeastern SSO to submit a new prompt or classroom example.

**Backend Handling**  
The submission goes to an Azure Function, which checks that the user's email belongs to Northeastern and verifies they're part of the College of Science.

**Data Storage**  
The submission is stored in the Azure database with a "Pending" tag.

**Moderation**  
A COS admin or moderator reviews the pending submission and either approves or edits it.

**Live Display**  
Once approved, the new content automatically appears in the Prompt Library or Use Case Gallery.

---

## 6. Future Hosting and Maintenance Plan

### GitHub Repository

The codebase currently lives on my GitHub, but the plan is to transfer it to an official Northeastern or COS GitHub organization (managed by IT). This ensures that:

- The code remains accessible and editable by authorized maintainers.  
- CD can be configured through GitHub Actions directly to Azure Static Web Apps.
- Or if there is any other solution for this (please let us know)

---

### Long-Term Maintenance

When I graduate:

- All credentials and environment variables will be stored in Azure Key Vault.  
- The repository will include detailed documentation for setup, deployment, and local testing.  
- A COS IT or Cloud Services staff member (or a new student assistant) can take over maintenance easily.  

---

## 7. Security and Data Protection

- Authentication will use Northeastern's Entra ID (SSO), no separate logins or passwords.  
- Faculty submissions will include minimal personal information (name, department, prompt content).  
- All data will live within university-managed Azure services, ensuring compliance with Northeastern's IT rules/guidelines 

---

## 8. Recommended Azure Services Summary

| **Purpose** | **Azure Service** | **Why We Need It** |
|---|---|---|
| Host the website | Azure Static Web Apps | Scalable, integrates easily with GitHub CI/CD |
| Handle form submissions | Azure Functions | Simple, secure serverless backend |
| Store data | Azure Cosmos DB or SQL Database | Reliable for structured content like prompts |
| Authentication | Azure Active Directory | Seamless Northeastern SSO integration |
| Store uploads | Azure Blob Storage | For any media or attached files |
| Secure credentials | Azure Key Vault | Keeps keys and secrets encrypted |
| Track performance | Azure Application Insights | Helps monitor performance and detect issues |

AI Faculty Hub - Project Documentation (Proposed Azure Integration)
Live site: https://start-lab-sage.vercel.app/ (still in dev)
1. Overview

The AI Faculty Hub is a project we’re building for the College of Science (COS) at Northeastern.
The idea is to create one shared space where faculty can explore how others are using AI in their teaching - what tools they’re trying, what’s worked well, and how it’s helped students learn.

The website will include:

A Prompt Library of sample teaching prompts that faculty can browse and learn from.

A Use Case Gallery with real examples of classroom applications.

A Submission Portal where COS faculty can contribute their own prompts and examples.

Anyone within Northeastern should be able to access the site and explore its content.
However, only COS faculty members will have the ability to log in and submit new content.

Right now, the site is being built with Next.js (React), hosted temporarily on Vercel, and using Firebase as the backend for testing and storage.
Since this is going to be a long-term, university-owned platform, we want to migrate it to Northeastern’s infrastructure, and we’re recommending Azure as a possible solution because of its compatibility, security, and integration with Northeastern systems.

2. Project Goals

Build a reliable and visually engaging platform that highlights how COS faculty are integrating AI into teaching.

Allow faculty to safely and easily submit prompts and teaching examples, using Northeastern’s single sign-on system.

Host everything on a university-managed backend so it’s secure, supported, and sustainable.

Create a clear handoff plan so the project can be maintained or extended after I graduate.

3. Current Setup

At the moment, the project is live in development using:

Frontend: Next.js (React framework)

Backend: Firebase (for storing submissions and authentication testing)

Hosting: Vercel (temporary deployment)

Version Control: GitHub

This setup works well for testing, but for an official university deployment, we need a backend and hosting environment that meet university IT and data-governance requirements.

4. Proposed Hosting and Architecture (Azure)

If we move forward with Azure, here’s the setup that would best fit our needs:

| Component            | Azure Service                         | Purpose                                                                                         |
|----------------------|---------------------------------------|-------------------------------------------------------------------------------------------------|
| Frontend Hosting     | Azure Static Web Apps                 | Hosts the website (Next.js app) and connects directly to GitHub for automatic deployments.      |
| Backend Logic / APIs | Azure Functions                       | Handles all backend logic - receiving form submissions, verifying faculty identity, and saving data securely. |
| Backend Logic / APIs | Azure Functions                       | Handles all backend logic - receiving form submissions, verifying faculty identity, and saving data securely. |
| Database             | Azure Cosmos DB or Azure SQL Database | Stores all submissions (prompts, examples, and user roles).                                     |
| Authentication       | Azure Active Directory (Entra ID)     | Provides secure login using Northeastern credentials (SSO).                                     |
| File Storage         | Azure Blob Storage (optional)         | Stores any uploaded media, like screenshots or PDFs.                                            |
| Secrets Management   | Azure Key Vault                       | Keeps API keys and credentials secure.                                                          |
| Monitoring           | Azure Application Insights            | Tracks usage, submissions, and any backend issues.                                              |
5. How the Platform Should Work
Access Levels

| User Type             | Access      | Description                                                       |
|-----------------------|------------|-------------------------------------------------------------------|
| Anyone at Northeastern| Can view   | Can browse the website and explore prompts or use cases.          |
| COS Faculty           | Can submit | Can log in using Northeastern SSO to share new prompts or examples.|
| COS Admin / Moderator | Can approve| Reviews incoming submissions before they go live.                  |
Workflow Example

Visitor Access
Anyone with a Northeastern account can open the website and explore prompts and examples - no login required for viewing.

Faculty Submission
A COS faculty member logs in through Northeastern SSO to submit a new prompt or classroom example.

Backend Handling
The submission goes to an Azure Function, which checks that the user’s email belongs to Northeastern and verifies they’re part of the College of Science.

Data Storage
The submission is stored in the Azure database with a “Pending” tag.

Moderation
A COS admin or moderator reviews the pending submission and either approves or edits it.

Live Display
Once approved, the new content automatically appears in the Prompt Library or Use Case Gallery.

6. Future Hosting and Maintenance Plan
GitHub Repository

The codebase currently lives on my GitHub, but the plan is to transfer it to an official Northeastern or COS GitHub organization (managed by IT).
This ensures that:

The code remains accessible and editable by authorized maintainers.

Continuous Deployment (CD) can be configured through GitHub Actions directly to Azure Static Web Apps.

Long-Term Maintenance

When I graduate:

All credentials and environment variables will be stored in Azure Key Vault.

The repository will include detailed documentation for setup, deployment, and local testing.

A COS IT or Cloud Services staff member (or a new student assistant) can take over maintenance easily.

7. Security and Data Protection

Authentication will use Northeastern’s Entra ID (SSO) - no separate logins or passwords.

Faculty submissions will include minimal personal information (name, department, prompt content).

All data will live within university-managed Azure services, ensuring compliance with Northeastern’s IT and FERPA guidelines.

8. Recommended Azure Services Summary

| Purpose               | Azure Service                         | Why We Need It                                   |
|-----------------------|---------------------------------------|--------------------------------------------------|
| Host the website      | Azure Static Web Apps                 | Scalable, integrates easily with GitHub CI/CD    |
| Handle form submissions| Azure Functions                      | Simple, secure serverless backend                |
| Store data            | Azure Cosmos DB or SQL Database       | Reliable for structured content like prompts     |
| Authentication        | Azure Active Directory                | Seamless Northeastern SSO integration            |
| Store uploads         | Azure Blob Storage                    | For any media or attached files                  |
| Secure credentials    | Azure Key Vault                       | Keeps keys and secrets encrypted                  |
| Track performance     | Azure Application Insights            | Helps monitor performance and detect issues      |
