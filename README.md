# Emad Askareimotlagh – Portfolio

Personal portfolio site built with Next.js. Showcases projects, skills, education, and contact information in Swedish and English.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3002](http://localhost:3002).

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server (port 3002) |
| `npm run build` | Create production build |
| `npm run start` | Build + run production server (port 3002) |

## Project structure

```
pages/           # Next.js routes (home, contact)
src/
  components/    # Layout, header, footer
  screens/       # Page sections (hero, projects, etc.)
  data/          # Project image galleries
locales/         # Swedish & English translations
public/          # Images and static assets
styles/          # Global SCSS
```

## Features

- Bilingual (SV / EN)
- Project cards with image gallery on click
- Responsive layout with SCSS modules
- Contact page with form

## CV (PDF)

Generate a PDF CV from portfolio content:

```bash
npm run generate:cv
```

Uses system Chrome if available. If it fails, install Puppeteer's Chrome once:

```bash
npx puppeteer browsers install chrome
```

Output: `cv/Emad_Askareimotlagh_CV.pdf`

## Tech stack

Next.js 14 · React 18 · Sass · Formik · React Icons
