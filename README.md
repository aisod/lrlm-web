# AISOD LRLM Website

Professional website for AISOD Low Resource and Reasoning Language Model (LRLM) - Namqula, the first sovereign AI language model optimized for African languages.

## 🌍 About

This is the enterprise-focused website for AISOD.solutions, showcasing Namqula LRLM - an AI language model specifically designed for African languages, starting from Namibia. The website highlights:

- **65% more efficient tokenization** for African languages
- **Offline-capable** deployment on budget devices
- **African cultural reasoning** capabilities
- **Data sovereignty** for governments and enterprises

## 🚀 Features

- Modern, professional design inspired by OpenAI, Grok, and Meta
- Fully responsive across all devices
- SEO optimized with meta tags, structured data, and sitemap
- Social media preview images (Open Graph & Twitter Cards)
- Smooth animations and transitions
- Dark mode support
- Enterprise demo booking system
- Performance optimized with Next.js 14

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Ready for Vercel, Netlify, or any Node.js hosting

## 📦 Installation

1. Install dependencies:
```bash
npm install
```

2. Copy your logo to `public/logo.png` (if not already done)

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🏗️ Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with SEO metadata
│   ├── page.tsx            # Home page
│   ├── globals.css         # Global styles
│   └── sitemap.ts          # Sitemap generation
├── components/
│   ├── Navbar.tsx          # Navigation bar
│   ├── Hero.tsx            # Hero section
│   ├── Stats.tsx           # Statistics section
│   ├── Features.tsx        # Features showcase
│   ├── Technology.tsx      # Technology details
│   ├── UseCases.tsx        # Use cases grid
│   ├── Pricing.tsx         # Pricing plans
│   ├── DemoBooking.tsx     # Demo booking form
│   ├── CTA.tsx             # Call-to-action section
│   └── Footer.tsx          # Footer component
└── public/
    ├── logo.png            # AISOD logo
    ├── og-image.png        # Social media preview image
    └── robots.txt          # SEO robots file
```

## 🎨 Customization

### Colors
Edit `tailwind.config.ts` to customize the color scheme:
- `primary`: Main brand color (blue)
- `accent`: Accent color (yellow/gold)

### Content
All content is in the component files. Update text, features, and pricing in:
- `components/Features.tsx`
- `components/Pricing.tsx`
- `components/UseCases.tsx`

### SEO
Update SEO metadata in:
- `app/layout.tsx` - Main metadata and Open Graph tags
- `app/sitemap.ts` - Sitemap URLs

## 📱 Social Media Preview

The website includes Open Graph and Twitter Card meta tags. To generate the preview image:

1. Create a 1200x630px image
2. Save it as `public/og-image.png`
3. The image will automatically be used for social media sharing

## 🌐 Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Import project in Vercel
3. Deploy automatically

### Other Platforms
The site can be deployed to any platform supporting Next.js:
- Netlify
- AWS Amplify
- DigitalOcean App Platform
- Self-hosted Node.js server

## 📧 Contact

For enterprise inquiries:
- Email: enterprise@aisod.solutions
- Website: https://aisod.solutions

## 📄 License

Proprietary - AISOD Tech © 2026

---

**Built with ❤️ for Africa, starting from Namibia**
