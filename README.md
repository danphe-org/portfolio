# Modern Developer Portfolio

An editorial, high-performance, dark-themed portfolio template built with **React**, **TypeScript**, **Tailwind CSS**, and **Vite**.

Designed with bold typography, crimson red accents, cutout hero layering, interactive project showcases, and a streamlined engineering workflow timeline.

![Portfolio Reference Design](/assets/reference-design.jpg)

---

## ⚡ Quick Start

```bash
# Install dependencies (if not already installed)
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

The dev server will run on `http://localhost:5173`.

---

## 🎨 Dual Preset System

The template includes two pre-configured data sets that you can toggle with a single click in the top navbar or bottom-right Customize button:

1. **Exact Image Match (`templatePreset`)**:
   - Matches the exact reference poster from your image (`Rayhan Aditya`, `Web Designer & UI/UX Creator`, `Veloce Bikes`, etc.).
2. **Backend & Fullstack Developer (`backendFullstackPreset`)**:
   - Tailored specifically for backend/fullstack engineers (`Nishan Rana`, `Backend Architect & Fullstack Developer`, Microservices, APIs, High Throughput, Node.js, Go, PostgreSQL, Redis, Docker, AWS).

---

## 🛠️ How to Customize with Your Own Details

### 1. Change Text, Projects, Skills & Experience
All content is centralized in a single typed configuration file:
👉 **[`src/data/portfolioData.ts`](file:///Users/nishanranamagar/Documents/personal/portfolio/src/data/portfolioData.ts)**

You can edit:
- **`hero`**: Your name, titles, bio, stats, and location.
- **`projects`**: Project titles, categories, descriptions, metrics, tech stacks, GitHub repos, and live URLs.
- **`education`**: Your degrees, universities, certifications, and years.
- **`skills`**: The skill badges rendered in the pills grid.
- **`process`**: Your 5-step engineering or design workflow.
- **`quote`**: Your personal philosophy quote and signature.
- **`contact`**: Your email, phone, location, and social links.

### 2. Replace Your Portrait Picture
- You can preview any photo immediately using the floating **"Customize"** button in the bottom-right corner and clicking **"Upload Test Photo"**.
- To make your photo permanent:
  1. Save your portrait cutout image (PNG with transparent background is recommended for the magazine cutout effect) inside `public/`.
  2. In `src/data/portfolioData.ts`, set `portraitImage: '/your-photo.png'`.

### 3. Replace Project Thumbnails
- Add your project screenshots or mockups to `public/assets/` (or any URL).
- Update the `image` field in `projects` inside `src/data/portfolioData.ts`.

---

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── assets/              # Thumbnails, cutout portrait, reference assets
│   └── favicon.svg          # Custom developer red bracket favicon
├── src/
│   ├── components/
│   │   ├── Navbar.tsx             # Top header bar with status & preset toggle
│   │   ├── Hero.tsx               # Giant PORTFOLIO typography + portrait + bio + stats
│   │   ├── Projects.tsx           # Selected projects grid & cards
│   │   ├── ProjectModal.tsx       # Detail case study modal with tech stack & links
│   │   ├── ProcessAndSkills.tsx   # 3-column section (Education/Skills, Timeline, Red Quote card)
│   │   ├── ContactFooter.tsx      # "Let's Work Together" footer + desk mockup + copy email
│   │   └── CustomizerDrawer.tsx   # Floating interactive drawer for live testing
│   ├── data/
│   │   └── portfolioData.ts       # Central data file for all your text & links
│   ├── types/
│   │   └── portfolio.ts           # TypeScript interfaces
│   ├── App.tsx                    # Root application
│   ├── index.css                  # Tailwind styles and custom fonts
│   └── main.tsx                   # React entrypoint
├── index.html                     # HTML shell with Google Fonts (Bebas Neue, Caveat, Plus Jakarta Sans)
├── tailwind.config.js             # Color palette & font definitions
└── package.json
```

---

## 🚀 Deployment

Run `npm run build` to generate the production bundle inside `dist/`. You can deploy this folder directly to:
- **Vercel**: Import repository and deploy with standard Vite settings.
- **Netlify**: Set publish directory to `dist`.
- **GitHub Pages**: Deploy the `dist` directory with `gh-pages`.
