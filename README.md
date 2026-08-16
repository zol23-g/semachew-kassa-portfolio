# Semachew Molla Kanssa - Academic & Research Portfolio Website

A modern, responsive, accessible, dark/light themed academic portfolio website designed for **Semachew Molla Kanssa** (Assistant Professor & Lead Artificial Intelligence Researcher).

Built with **Next.js 14+ (App Router)**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

---

## 🌟 Key Features

- **9 Full Academic Sections**:
  1. **Home**: Hero section with name, academic title, tagline, interactive metrics badges, and particle mesh background.
  2. **About**: Academic biography, Ph.D./M.Sc./B.Sc. education timeline, professional experience, and research skills badges.
  3. **Research**: Core research focus areas, active/completed research projects, outcomes, and impact metrics dashboard (Citations, h-index).
  4. **Publications**: Searchable peer-reviewed papers with category tabs (Journals, Conferences, Books), citation counts, author highlighting, and interactive **BibTeX modal generator**.
  5. **News**: Timeline of lab announcements, grant awards, keynote invitations, and honors.
  6. **Team**: Research lab scholars (Ph.D. candidates, postdocs, RAs) with bio cards and contact links.
  7. **Code**: Open-source GitHub projects,star/fork counts, language tags, and repository links.
  8. **Videos**: Video gallery layout featuring embedded keynotes, paper presentations, and tutorial talks.
  9. **Contact**: Interactive contact form with client-side state handling, campus office details, office hours, and map location preview.

- **Global `Cmd+K` Search Palette**: Instant search modal indexing publications, research projects, news, videos, and code repositories.
- **Dark/Light Mode**: Seamless dark/light theme switching with `next-themes`.
- **Structured JSON Data Source**: All personal content is stored in `src/data/profile.json`, making updates effortless.
- **SEO & Accessibility**: Dynamic metadata, Open Graph cards, Twitter cards, `sitemap.ts`, `robots.ts`, and Schema.org JSON-LD for Academic Person.

---

## 🚀 Local Development Setup

### Prerequisites
- Node.js 18.x or higher
- npm 9.x or higher

### Steps
1. Clone or navigate to the project folder:
```bash
cd C:\Users\zelalem.wubet\.gemini\antigravity\scratch\semachew-molla-kanssa-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the local development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

---

## 📂 Project Directory Structure

```
semachew-molla-kanssa-website/
├── public/
├── src/
│   ├── app/
│   │   ├── layout.tsx         # Root layout, metadata, ThemeProvider, JSON-LD
│   │   ├── page.tsx           # Main page rendering all 9 portfolio sections
│   │   ├── sitemap.ts         # Dynamic SEO Sitemap
│   │   ├── robots.ts          # Search engine crawlers config
│   │   └── globals.css        # Tailwind CSS imports & custom scrollbar
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx         # Sticky glassmorphic header
│   │   │   ├── Footer.tsx         # Academic footer with social links
│   │   │   └── CommandPalette.tsx # Global Cmd+K Search Modal
│   │   ├── ui/
│   │   │   ├── Logo.tsx           # SMK Monogram Logo
│   │   │   ├── SectionHeader.tsx  # Reusable section header
│   │   │   ├── ThemeToggle.tsx    # Dark/Light theme switch button
│   │   │   └── BackToTop.tsx      # Smooth back-to-top floating button
│   │   └── sections/
│   │       ├── Hero.tsx           # Hero header & metrics
│   │       ├── About.tsx          # Bio, Education & Experience timelines
│   │       ├── Research.tsx       # Research areas & projects
│   │       ├── Publications.tsx   # Filterable papers & BibTeX generator
│   │       ├── News.tsx           # News & honors timeline
│   │       ├── Team.tsx           # Lab members grid
│   │       ├── CodeProjects.tsx   # GitHub open-source repositories
│   │       ├── Videos.tsx         # Video lectures & modal player
│   │       └── Contact.tsx        # Contact form & office details
│   ├── data/
│   │   └── profile.json       # Centralized JSON content store
│   ├── types/
│   │   └── portfolio.ts       # TypeScript interfaces
│   └── lib/
│       └── utils.ts           # Class merge utility (cn)
├── DEPLOYMENT.md              # Detailed GitHub & Vercel deployment guide
├── README.md
├── package.json
└── vercel.json                # Vercel deployment configuration
```

---

## ✏️ How to Customize Content

All content displayed on the website is controlled by `src/data/profile.json`. To update your website:
1. Open `src/data/profile.json`.
2. Edit any field (e.g., add new publications, update citations, change office hours, or add news).
3. Save the file. Next.js will automatically reflect the changes.

---

## 🌐 Deployment Instructions

Refer to [DEPLOYMENT.md](file:///C:/Users/zelalem.wubet/.gemini/antigravity/scratch/semachew-molla-kanssa-website/DEPLOYMENT.md) for full instructions on setting up GitHub, Vercel hosting, free custom domains (`.is-a.dev`, `.vercel.app`), and automatic HTTPS SSL configuration.
