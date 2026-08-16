# ApexLead Systems — AI Visibility Solutions (AEO • SEO • GEO)

[![Vercel Deployment](https://img.shields.io/badge/Deploy-Vercel-black?logo=vercel&logoColor=white)](https://vercel.com/new)
[![GitHub Repository](https://img.shields.io/badge/GitHub-Repository-181717?logo=github&logoColor=white)](https://github.com)
[![React](https://img.shields.io/badge/React-19.0-61dafb?logo=react&logoColor=black)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-6.0-646CFF?logo=vite&logoColor=white)](https://vitejs.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.0-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com)
[![Gemini AI](https://img.shields.io/badge/Google_Gemini-2.0_Flash-4285F4?logo=google&logoColor=white)](https://ai.google.dev)

> **ApexLead Systems** is an enterprise-grade AI Visibility, Answer Engine Optimization (AEO), Generative Engine Optimization (GEO), and High-Converting Business Website Design platform engineered to position local businesses as the #1 recommended service across **ChatGPT Search**, **Google Gemini & AI Overviews**, **Perplexity AI**, and **Apple Intelligence / Siri Voice Search**.

---

## 🚀 1-Click Deploy to Vercel

You can deploy this entire full-stack application (frontend + serverless API) to **Vercel** with one click:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

### Deploying to Vercel via Git:
1. Push this repository to your GitHub account.
2. Go to [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Import your GitHub repository.
4. Set the **Framework Preset** to `Vite`.
5. Add your Environment Variable in the Vercel Dashboard:
   - `GEMINI_API_KEY`: Your Google Gemini API Key from [Google AI Studio](https://aistudio.google.com/app/apikey).
6. Click **Deploy**. Vercel will automatically build the client SPA and deploy the `/api` serverless functions.

---

## 🛠️ Step-by-Step GitHub Setup

To push this project to a new GitHub repository:

```bash
# 1. Initialize git repository
git init

# 2. Add all project files
git add .

# 3. Create initial commit
git commit -m "feat: initial release of ApexLead Systems AI Visibility Suite"

# 4. Rename main branch
git branch -M main

# 5. Link your GitHub remote repository (replace with your repo URL)
git remote add origin https://github.com/YOUR_USERNAME/apexlead-systems.git

# 6. Push to GitHub
git push -u origin main
```

---

## ⚙️ Environment Variables

Create a `.env` file in the project root (copied from `.env.example`):

```env
# Required for AI Visibility Scanner and AI Concierge (Gemini 2.0 / 3.7)
GEMINI_API_KEY="YOUR_GEMINI_API_KEY_HERE"

# Optional: Host URL for domain canonicalization
APP_URL="https://apexleadsystems.site"
```

---

## 💻 Local Development

```bash
# 1. Install dependencies
npm install

# 2. Start local development server (Express + Vite)
npm run dev

# 3. Open browser
# Visit http://localhost:3000
```

---

## 🏗️ Production Build & Container Deployment

```bash
# Build the production Vite bundle and Node server
npm run build

# Start the compiled production server
npm start
```

---

## 📁 Project Architecture

```
apexlead-systems/
├── api/                    # Vercel Serverless Function entrypoint
│   └── index.ts            # Serverless handler proxying Express routes
├── server/                 # Core backend API architecture
│   └── app.ts              # Express API (Audit, Leads, Chat, Stats, Export)
├── server.ts               # Standalone Node / Docker / Cloud Run entrypoint
├── src/
│   ├── components/         # Modular UI Components
│   │   ├── Navbar.tsx      # Responsive header with verified branding
│   │   ├── Hero.tsx        # High-impact value proposition & quick scan CTA
│   │   ├── AIVisibilityAuditScanner.tsx  # Interactive NAP scanner & report engine
│   │   ├── WebsiteOptimizerStudio.tsx   # Schema.org & llms.txt code generator
│   │   ├── CreativeStudio.tsx           # Social media & ad creative generator
│   │   ├── BookingModal.tsx             # 1-on-1 Zoom strategy session scheduler
│   │   ├── AIConciergeChat.tsx          # Real-time Gemini-powered assistant
│   │   └── ...
│   ├── App.tsx             # Main application orchestrator
│   └── index.css           # Tailwind CSS v4 styling
├── public/                 # Static assets, logos, favicons, crawlers
│   ├── brand-icon.svg      # Vector brand emblem
│   ├── logo.svg            # Master high-res SVG artwork
│   ├── logo.png            # 1200x1200 master PNG logo
│   ├── og-image.png        # 1200x630 Open Graph social share card
│   ├── llms.txt            # AEO / AI crawler specification
│   ├── robots.txt          # Search & Generative AI crawler directives
│   └── sitemap.xml         # SEO sitemap
├── vercel.json             # Vercel deployment & routing configuration
├── metadata.json           # Application metadata & permissions
└── package.json            # Scripts & project dependencies
```

---

## 🌟 Key Capabilities & Features

1. **Live AI Visibility & NAP Diagnostic Scanner**:
   - Zero-guesswork multi-engine audit simulating citation rankings across **ChatGPT**, **Gemini**, **Perplexity**, and **Apple Siri**.
   - Generates actionable vulnerability scores, missed monthly revenue estimates, and downloadable Schema.org JSON-LD markup.

2. **AEO / SEO / GEO Website Optimizer Studio**:
   - Generates production-ready `Schema.org LocalBusiness JSON-LD`, `llms.txt` crawler specs, Google Maps CID coordinates, and FAQ schema in real-time.

3. **Lead Management & CSV Export Pipeline**:
   - Collects, timestamps, and organizes business audit requests with one-click `.csv` export for CRM integration.

4. **AI Creative & Social Media Studio**:
   - Generates high-converting Meta / Google ad copy, geotagged Google Business Profile updates, and educational carousel graphics.

5. **24/7 AI Concierge**:
   - Grounded conversational assistant answering prospect inquiries, handling objections, and scheduling 1-on-1 strategy calls.

---

## 📄 License

This project is proprietary software belonging to **ApexLead Systems LLC**. All rights reserved.
