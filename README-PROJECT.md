# Nivha By Fashion Cut — Angular Website

A static, responsive, animated 3-page Angular (v20) website for the ladies tailoring
boutique "Nivha By Fashion Cut" (near Sree Krishna Sweets, Koppam Junction, Palakkad).

## Pages
- **Home** – animated hero, services, process, why-choose-us, testimonials, CTA
- **About** – brand story, mission/vision, values, timeline
- **Contact** – business info, embedded map, working contact form (front-end only)

## Run locally
```bash
npm install
npm start          # dev server at http://localhost:4200
```

## Build for production
```bash
npm run build       # outputs to dist/nivha-fashion-cut/browser
```
The `dist/` folder in this package already contains a pre-built production build —
you can deploy that folder as-is to any static host (Netlify, Vercel, GitHub Pages,
Hostinger, etc.) since this is a fully static site.

## Things to customize before going live
- Phone number / WhatsApp link (currently a placeholder: +91 99473 65696)
- Email address (currently a placeholder: hello@nivhafashioncut.example)
- Exact address / pincode and Google Maps pin
- Real photos (the hero/about sections currently use CSS illustrations, not photos)
- Working hours if different from Mon–Sat, 8:30 AM – 7:00 PM
- The contact form currently just shows a success message in the browser — wire it
  up to an email service (e.g. Formspree, EmailJS) or your own backend to actually
  receive submissions.
