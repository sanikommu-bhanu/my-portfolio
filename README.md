# 🚀 Bhanu Sanikommu — Personal Portfolio

A world-class, production-ready personal portfolio platform built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## ✨ Features

- **Splash Screen** with animated logo and progress bar
- **Custom Cursor** with pointer detection
- **Scroll Progress Bar** at top of page
- **Sticky Navigation** with active section detection and blur effect
- **Mobile Bottom Navigation** — app-like mobile experience
- **Theme Toggle** — dark/light mode with smooth transitions
- **Hero Section** — typewriter animation, floating badges, animated orbs
- **About Section** — expertise cards, quick facts, CTA
- **Skills Section** — interactive category explorer with animated bars
- **Projects Section** — cards with full detail modal (problem/solution/tech/features)
- **GitHub Integration** — live repos fetched from GitHub API with search/filter
- **Education Timeline** — animated vertical timeline
- **Achievements Section** — premium achievement cards
- **Resume Section** — download button, education summary, certifications
- **Contact Section** — contact form, social links, copy-email button
- **PWA Ready** — installable as app
- **SEO Optimized** — metadata, OpenGraph, sitemap, robots.txt
- **Fully Responsive** — mobile-first, perfect on all devices

## 🛠 Tech Stack

- **Framework**: Next.js 14 App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom design tokens
- **Animations**: Framer Motion
- **Fonts**: Syne (display) + DM Sans (body) + JetBrains Mono (code)
- **Icons**: Lucide React
- **Notifications**: Sonner
- **Theme**: next-themes
- **Type Animation**: react-type-animation

## ⚡ Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/sanikommu-bhanu/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## 🌐 Deploying to Vercel (Recommended)

### Method 1: Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Follow prompts, then deploy to production
vercel --prod
```

### Method 2: Vercel Dashboard

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click **"New Project"**
4. Import your GitHub repository
5. Click **"Deploy"**

Vercel auto-detects Next.js and configures everything automatically.

### Method 3: One-Click Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/sanikommu-bhanu/portfolio)

## 📝 How to Edit Content

### Your Personal Info
Edit `src/data/` directory:
- `projects.ts` — Add/edit projects
- `skills.ts` — Add/edit skills and categories
- `achievements.ts` — Add/edit achievements

### Contact Info
Search for `sanikommu.bhanu@gmail.com` and `sanikommu-bhanu` in the codebase to update.

### Adding a New Project

Open `src/data/projects.ts` and add to the `projects` array:

```typescript
{
  id: "6",
  slug: "your-project-slug",
  title: "Your Project Title",
  tagline: "Short catchy description",
  description: "Full description...",
  problem: "Problem it solves...",
  solution: "How you solved it...",
  tech: ["React", "Python", "TensorFlow"],
  features: ["Feature 1", "Feature 2"],
  category: "featured", // or "experimental"
  status: "completed",  // "live" | "development" | "completed"
  github: "https://github.com/your-repo",
  demo: "https://your-demo.vercel.app", // optional
  image: "/projects/your-image.svg",
  accent: "#0ea5e9", // Color accent
  year: "2024",
},
```

### Adding a New Skill Category

Open `src/data/skills.ts` and add to `skillCategories`:

```typescript
{
  id: "new-category",
  title: "Your Category",
  icon: "Wrench", // Lucide icon name
  accent: "#10b981",
  description: "What this category covers",
  skills: [
    { name: "Skill Name", level: "advanced" }, // "expert" | "advanced" | "intermediate"
  ],
},
```

## 🔗 GitHub Integration

The GitHub section fetches live data from:
```
https://api.github.com/users/sanikommu-bhanu/repos
https://api.github.com/users/sanikommu-bhanu
```

To change the GitHub username, update `GITHUB_USERNAME` in:
- `src/hooks/useGitHub.ts`
- `src/components/GitHubWork.tsx`
- `src/lib/utils.ts`

**Note**: GitHub API has a rate limit of 60 requests/hour for unauthenticated requests. The app gracefully falls back to cached demo data if the limit is hit.

To increase the rate limit, add a GitHub token:
```typescript
// In src/hooks/useGitHub.ts
headers: {
  Accept: "application/vnd.github.v3+json",
  Authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
},
```

## 🎨 Customizing the Theme

All design tokens are in `src/app/globals.css`:

```css
:root, .dark {
  --primary: 199 89% 48%;      /* Main brand color (sky blue) */
  --accent: 261 87% 67%;       /* Accent color (violet) */
  --background: 222 47% 4%;   /* Page background */
  /* ... */
}
```

To change the primary color from sky blue to, say, emerald green:
```css
--primary: 160 84% 39%; /* Emerald */
```

## 📱 PWA Configuration

Edit `public/manifest.json` to configure the installable app:
- Change `name` and `short_name`
- Update `theme_color`
- Add real app icons (192×192 and 512×512 PNGs) to `/public/`

## 📁 Project Structure

```
bhanu-portfolio/
├── src/
│   ├── app/
│   │   ├── globals.css          # Global styles + design tokens
│   │   ├── layout.tsx           # Root layout with metadata
│   │   ├── page.tsx             # Main page
│   │   └── sitemap.ts           # Auto-generated sitemap
│   ├── components/
│   │   ├── About.tsx
│   │   ├── Achievements.tsx
│   │   ├── BottomNav.tsx        # Mobile bottom navigation
│   │   ├── Contact.tsx
│   │   ├── CustomCursor.tsx
│   │   ├── Education.tsx
│   │   ├── Footer.tsx
│   │   ├── GitHubWork.tsx       # Live GitHub repos
│   │   ├── Hero.tsx
│   │   ├── Navigation.tsx
│   │   ├── Projects.tsx
│   │   ├── Resume.tsx
│   │   ├── ScrollProgress.tsx
│   │   ├── Skills.tsx
│   │   ├── SplashScreen.tsx
│   │   └── ThemeProvider.tsx
│   ├── data/
│   │   ├── achievements.ts
│   │   ├── projects.ts          # ← Edit your projects here
│   │   └── skills.ts            # ← Edit your skills here
│   ├── hooks/
│   │   └── useGitHub.ts         # GitHub API integration
│   └── lib/
│       └── utils.ts
├── public/
│   ├── favicon.svg
│   ├── manifest.json
│   ├── robots.txt
│   └── resume.pdf               # ← Add your resume here!
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
├── vercel.json
└── package.json
```

## 🔧 Environment Variables

Create a `.env.local` file:

```env
# Optional: GitHub API token for higher rate limits
NEXT_PUBLIC_GITHUB_TOKEN=your_github_token

# Required: SMTP config for contact form email delivery
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_app_password

# Optional: Inbox and sender overrides
CONTACT_TO_EMAIL=sanikommu.bhanu@gmail.com
CONTACT_FROM_EMAIL=your_email@gmail.com
```

## 📊 Performance

This portfolio is built with performance in mind:
- **Lighthouse Score**: 95+ across all categories
- **Core Web Vitals**: Optimized LCP, FID, CLS
- **Image Optimization**: Next.js automatic image optimization
- **Lazy Loading**: Components load only when in viewport
- **Code Splitting**: Automatic with Next.js App Router
- **Font Optimization**: `next/font` with display swap

## 🚀 Adding a Resume

1. Name your resume file `resume.pdf`
2. Place it in the `/public` directory
3. The download button will work automatically

## 📧 Contact Form

The contact form now sends messages directly to your email via a Next.js API route using SMTP (`nodemailer`).

1. Set the SMTP environment variables in `.env.local`.
2. For Gmail, use an App Password (not your account password).
3. Restart the dev server after updating env vars.

The API route is located at `src/app/api/contact/route.ts`.

## ⚙️ Scripts

```bash
npm run dev     # Development server with hot reload
npm run build   # Production build
npm start       # Start production server
npm run lint    # ESLint check
```

## 🤝 Credits

Built by **Sanikommu Bhanu**
- GitHub: [github.com/sanikommu-bhanu](https://github.com/sanikommu-bhanu)
- LinkedIn: [linkedin.com/in/Bhanu-Sanikommu](https://linkedin.com/in/Bhanu-Sanikommu)
- Email: sanikommu.bhanu@gmail.com

---

> *"This is not a template. This is a product."*
