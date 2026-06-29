# 🚀 Portfolio Sprint — Plan for Jatin Karma

> A structured roadmap to build, polish, and deploy a professional portfolio website.

---

## 👤 Personal Details

| Field        | Value                          |
|--------------|-------------------------------|
| Name         | Jatin Karma                   |
| Email        | jatinkarmaa@gmail.com         |
| Phone        | +91 9179555040                |
| Location     | Indore, Madhya Pradesh, India |
| LinkedIn     | linkedin.com/in/jatinkarma    |
| GitHub       | github.com/jatin-karma        |
| Kaggle       | kaggle.com/jatinkarma         |

---

## 🎯 Goal

Build and deploy a **clean, professional, responsive** single-page portfolio website that showcases skills, projects, and achievements — targeted at **internship recruiters and hackathon judges**.

---

## 🗂️ Portfolio Structure — 6 Sections

### 1. Hero Section
- Full name: **Jatin Karma**
- Tagline: Animated typewriter cycling through roles — *ML Engineer in training, Python Developer, Data Analyst, FastAPI Builder*
- 1–2 sentence intro about background and goal
- Downloadable resume button (link to PDF)
- Social links: GitHub, LinkedIn, Kaggle, Email
- Avatar with gradient ring animation
- Badge: B.Tech AI & ML · CGPA 8.48

### 2. About Section
- Background: B.Tech (AI & ML), Acropolis Institute of Technology, Indore
- What drives you: Building end-to-end ML systems that go beyond notebooks
- Currently exploring: DSA deepening + Agentic AI systems
- Volunteering and community involvement
- Stat cards: CGPA 8.48 · 3+ Projects · 5+ Certifications · IEEE Volunteer 2025

### 3. Skills Section
Group into three categories:

| Category   | Items                                                                                      |
|------------|-------------------------------------------------------------------------------------------|
| Technical  | Python, C++, SQL, Scikit-learn, Pandas, NumPy, Matplotlib, Seaborn, FastAPI, Flask, ML, EDA, REST API, Feature Engineering |
| Tools      | Git & GitHub, Jupyter Notebook, VS Code, MySQL, Kaggle, Oracle Cloud, Linux, HTML/CSS/JS |
| Soft Skills| Problem Solving, Analytical Thinking, Collaboration, Fast Learner, Communication, Initiative |

### 4. Projects Section

| Project | Description | Tech Stack |
|---|---|---|
| **Early Diabetes Detection** | End-to-end risk prediction app with Random Forest classifier, FastAPI backend, responsive frontend. Handled class imbalance, feature scaling, hyperparameter tuning. | Python, Random Forest, FastAPI, HTML/CSS/JS, Scikit-learn |
| **House Price Prediction** | Regression pipeline on Ames Housing dataset (80+ features). EDA, missing value handling, model benchmarking. Tuned Random Forest best performer. | Python, Scikit-learn, Pandas, Matplotlib, Ridge Regression |
| **Blog Platform (Capstone)** | Full-stack blog with user authentication, CRUD operations, relational database. | Python, Web Dev, MySQL, Auth, CRUD |

Each card includes: name, description, tech stack tags, GitHub link.

### 5. Education & Achievements

**Education:**
- B.Tech — Computer Science (AI & ML Specialization)
- Acropolis Institute of Technology and Research, Indore
- Sept 2024 – June 2028 · CGPA: 8.48 / 10.0

**Certifications:**
- Oracle Cloud Infrastructure 2025 — Certified AI Foundations Associate
- Exploratory Data Analysis for Machine Learning (2025)
- Introduction to Machine Learning — Kaggle (2026)
- 100 Days of Code
- Engineer AI Agents with Agent Development Kit (ADK)
- Programming, Data Structures and Algorithms using Python

**Achievements & Volunteering:**
- IEEE Volunteer — International Conference on Innovation and Healthcare (ICIH 2025)
- IIC Regional Meet Volunteer — Institution's Innovation Council, 2025
- Active DSA Practitioner — Arrays, trees, graphs, DP on competitive platforms (2024–Present)
- Regular Hackathon Participant

### 6. Contact Section
- Email: jatinkarmaa@gmail.com
- LinkedIn: linkedin.com/in/jatinkarma
- GitHub: github.com/jatin-karma
- Phone: +91 9179555040
- Location: Indore, Madhya Pradesh, India

---

## 🎨 Design System

| Token      | Value                                      |
|------------|--------------------------------------------|
| Background | `#0A0F1E` (deep navy)                      |
| Card BG    | `#111827`                                  |
| Accent     | `#6C63FF` (electric indigo)                |
| Accent 2   | `#00D4FF` (cyan)                           |
| Text       | `#F0F4FF`                                  |
| Subtext    | `#8892A4`                                  |
| Border     | `rgba(108,99,255,0.18)`                    |
| Display Font | Space Grotesk (700, 600)                |
| Body Font  | Inter (400, 500)                           |
| Mono Font  | JetBrains Mono (labels, terminal, tags)    |
| Border Radius | 12px                                   |
| Signature Element | Terminal typewriter in hero with blinking cursor |

---

## 🛠️ Tech Stack

- **HTML5** — semantic structure
- **CSS3** — custom properties, grid, flexbox, animations
- **Vanilla JavaScript** — typewriter effect, scroll reveal, hamburger menu
- **Google Fonts** — Space Grotesk, Inter, JetBrains Mono
- No frameworks, no build tools — pure static site

---

## 📦 File Structure

```
portfolio/
├── index.html          ← entire site (HTML + CSS + JS in one file)
├── resume.pdf          ← your downloadable resume (add manually)
└── README.md           ← brief project description for GitHub
```

---

## 🚀 Deployment — GitHub + Vercel

### Step 1: GitHub Setup
```bash
git init
git add .
git commit -m "Initial portfolio commit"
git remote add origin https://github.com/jatin-karma/<repo-name>.git
git push -u origin main
```
- Set repository visibility to **Public**

### Step 2: Vercel Deployment
1. Go to [vercel.com](https://vercel.com) → Log in with GitHub
2. Click **"Add New Project"** → Import your portfolio repo
3. Vercel auto-detects static HTML — no configuration needed
4. Click **Deploy** → get your live URL (e.g. `jatin-karma.vercel.app`)

### Step 3: Link Resume
- Add your `resume.pdf` to the repo root
- Update the resume button `href` in `index.html` to `./resume.pdf`
- Push the update → Vercel auto-redeploys

---

## ✅ Final Checklist

- [ ] Responsive Design — tested on mobile and desktop
- [ ] Working Links — all buttons and anchors function correctly
- [ ] Resume Included — downloadable PDF linked in hero section
- [ ] GitHub Public — repository visible to everyone
- [ ] Live Website — Vercel URL deployed and accessible
- [ ] All social links point to correct profiles
- [ ] Contact section email and phone are correct
- [ ] Ready to Present — can walk through each section confidently

---

## 📋 Judging Criteria (self-assess before submitting)

| Criterion       | Target                                              |
|----------------|------------------------------------------------------|
| Design          | Visually distinctive, dark theme, consistent tokens |
| Content         | Authentic, specific, complete across all 6 sections |
| Responsiveness  | Works on 320px mobile up to 1440px desktop          |
| Deployment      | Live Vercel URL returns 200, loads under 2s         |
| Creativity      | Typewriter animation, gradient avatar, scroll reveal |
| Code Quality    | Single-file, readable CSS variables, semantic HTML  |

---

*Generated from Resume + LinkedIn Profile — Jatin Karma, 2025*
