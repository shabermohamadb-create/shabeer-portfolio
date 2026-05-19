# Shaber Mohamad — Game Developer Portfolio

A next-generation, cinematic game developer portfolio website with AAA aesthetics, hologram UI, 3D Three.js animations, and futuristic cyberpunk design.

---

## ✦ Tech Stack

- **React 18** + **Vite 5**
- **Tailwind CSS 3**
- **Framer Motion 11**
- **React Three Fiber** + **Three.js**
- **Lenis** (smooth scroll)
- **React Icons**

---

## ✦ Features

- Custom animated cursor
- Loading screen with progress bar
- 3D Three.js hero background
- Particle canvas background
- Scroll progress indicator
- Smooth Lenis scrolling
- Hologram project cards with scan effects
- Animated skill progress bars
- Vertical experience timeline
- Testimonial auto-slider
- Contact form with animation
- Resume download system
- Fully responsive (mobile-first)
- SEO meta tags

---

## ✦ Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run development server

```bash
npm run dev
```

Visit: `http://localhost:5173`

### 3. Build for production

```bash
npm run build
```

### 4. Preview production build

```bash
npm run preview
```

---

## ✦ Resume Setup

1. Get your resume as a PDF
2. Rename it to: `shabeer.pdf`
3. Place it in the `/public` folder (replace the placeholder)
4. The download button will automatically serve it

---

## ✦ Deploy to Vercel

### Option A: Vercel CLI

```bash
npm install -g vercel
vercel login
vercel --prod
```

### Option B: Vercel Dashboard

1. Go to [vercel.com](https://vercel.com)
2. Click **Add New Project**
3. Import your GitHub repo
4. Vercel auto-detects Vite — click **Deploy**

That's it! Zero config needed. `vercel.json` is already set up.

---

## ✦ Customization Guide

### Update Personal Info

| File | What to change |
|------|---------------|
| `src/components/sections/Hero.jsx` | Name, subtitle, buttons |
| `src/components/sections/About.jsx` | Bio, stats, timeline |
| `src/components/sections/Skills.jsx` | Skill names, levels |
| `src/components/sections/Projects.jsx` | Project cards, links |
| `src/components/sections/Experience.jsx` | Work history |
| `src/components/sections/Contact.jsx` | Email, phone, socials |
| `index.html` | SEO meta tags, page title |

### Change Colors

Edit `src/index.css` — look for CSS variables:

```css
:root {
  --neon-cyan: #00f5ff;
  --neon-purple: #bf00ff;
  --neon-pink: #ff006e;
  --neon-green: #00ff88;
}
```

### Add/Remove Projects

Edit `src/components/sections/Projects.jsx` — find the `projects` array and add/remove objects following the same structure.

---

## ✦ Folder Structure

```
shaber-portfolio/
├── public/
│   ├── favicon.svg
│   └── shabeer.pdf          ← Replace with your resume
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.jsx
│   │   │   └── Footer.jsx
│   │   ├── sections/
│   │   │   ├── Hero.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Skills.jsx
│   │   │   ├── Projects.jsx
│   │   │   ├── Experience.jsx
│   │   │   ├── Achievements.jsx
│   │   │   ├── Testimonials.jsx
│   │   │   └── Contact.jsx
│   │   └── ui/
│   │       ├── LoadingScreen.jsx
│   │       ├── CustomCursor.jsx
│   │       ├── ScrollProgress.jsx
│   │       └── ParticleBackground.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── vercel.json
└── README.md
```

---

## ✦ License

MIT — Free to use and modify.

Built with ❤️ for Shaber Mohamad's game development portfolio.
