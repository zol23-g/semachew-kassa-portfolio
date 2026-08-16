# Complete Step-by-Step Deployment Guide

This guide provides instructions for deploying the **Semachew Molla Kanssa Academic Portfolio** to **Vercel** using **GitHub** and setting up a custom domain (including free domain options like `.is-a.dev` or `.vercel.app`).

---

## Step 1: Create a GitHub Repository & Push Code

1. Log in to your [GitHub Account](https://github.com).
2. Click **New Repository**.
3. Name your repository (e.g., `semachew-kanssa-portfolio`).
4. Set visibility to **Public** (or Private).
5. Do **not** initialize with a README (we already created a complete project).
6. Open your terminal in the project directory (`C:\Users\zelalem.wubet\.gemini\antigravity\scratch\semachew-molla-kanssa-website`) and execute:

```bash
git init
git add .
git commit -m "Initial commit: Complete academic portfolio website for Semachew Molla Kanssa"
git branch -M main
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/semachew-kanssa-portfolio.git
git push -u origin main
```

---

## Step 2: Deploy to Vercel (Free Tier)

Vercel provides free, high-performance hosting tailored for Next.js applications with zero configuration required.

1. Sign up or Log in to [Vercel](https://vercel.com) using your GitHub account.
2. Click **Add New...** -> **Project**.
3. Import your GitHub repository (`semachew-kanssa-portfolio`).
4. In the configuration panel:
   - **Framework Preset**: Next.js (automatically detected)
   - **Root Directory**: `./`
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next`
5. Click **Deploy**.
6. Vercel will build and deploy your website within 1 minute. You will receive a live URL such as `https://semachew-kanssa-portfolio.vercel.app`.

---

## Step 3: Registering & Configuring a Free Custom Domain

### Option A: Free `.is-a.dev` Domain (Recommended for Developers & Academics)
1. Fork the open-source [is-a-dev/register](https://github.com/is-a-dev/register) GitHub repository.
2. Create a JSON file in `domains/semachew-kanssa.json` with the following content:
```json
{
  "owner": {
    "username": "YOUR_GITHUB_USERNAME",
    "email": "semachew.kanssa@academic.edu"
  },
  "record": {
    "CNAME": "cname.vercel-dns.com"
  }
}
```
3. Submit a Pull Request. Once merged, your domain `semachew-kanssa.is-a.dev` will be active!
4. In your Vercel Dashboard, go to **Settings** -> **Domains**, click **Add**, and enter `semachew-kanssa.is-a.dev`.

### Option B: Free Default Vercel Domain
1. In Vercel Dashboard -> **Settings** -> **Domains**.
2. Customize your `.vercel.app` domain (e.g., `semachew-kanssa.vercel.app`).

### Option C: Cloudflare Pages / `.pages.dev`
If you choose Cloudflare Pages, connect your GitHub repository to Cloudflare Pages. Cloudflare will automatically build the Next.js site and grant you a `semachew-kanssa.pages.dev` domain.

---

## Step 4: Automatic SSL Certificate Setup

- **Vercel** automatically issues free **Let's Encrypt SSL/TLS certificates** for all connected domains.
- Once your domain is added, HTTPS is enabled automatically with HTTP-to-HTTPS redirect enforced.

---

## Step 5: How to Update Website Content in the Future

Updating your academic portfolio is completely code-free:

1. Open `src/data/profile.json` in any text editor or directly on GitHub.
2. Modify your biography, publications list, new grant awards, or team members.
3. Commit and push your changes to GitHub:
```bash
git add src/data/profile.json
git commit -m "Update publications and latest grant news"
git push origin main
```
4. **Vercel will automatically trigger a new deployment**, updating your live website within 30 seconds!
