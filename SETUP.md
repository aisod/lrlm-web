# Setup Instructions

## Quick Start

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Copy Logo**
   - Copy `AISOD Logo ed.png` to `public/logo.png`
   - Or rename it: `mv "AISOD Logo ed.png" public/logo.png`

3. **Create Open Graph Image**
   - See `OG_IMAGE_INSTRUCTIONS.md` for detailed instructions
   - Create a 1200x630px image and save as `public/og-image.png`
   - Or use an online tool like Canva or OpenGraph.xyz

4. **Run Development Server**
   ```bash
   npm run dev
   ```

5. **Open Browser**
   - Navigate to http://localhost:3000

## Before Deployment

1. ✅ Update domain in `app/layout.tsx` (replace `aisod.solutions` with your actual domain)
2. ✅ Update social media links in `components/Footer.tsx`
3. ✅ Create and add `public/og-image.png` for social media previews
4. ✅ Update Google verification code in `app/layout.tsx` (if using Google Search Console)
5. ✅ Test the demo booking form (connect to your backend/email service)
6. ✅ Update contact email in `components/Footer.tsx` and `app/layout.tsx`

## Environment Variables (Optional)

Create a `.env.local` file for any API keys or environment-specific settings:

```env
NEXT_PUBLIC_SITE_URL=https://aisod.solutions
CONTACT_EMAIL=enterprise@aisod.solutions
```

## Deployment Checklist

- [ ] All images optimized and in place
- [ ] SEO metadata updated with correct domain
- [ ] Social media preview image created
- [ ] Analytics tracking code added (if needed)
- [ ] Form submission handler configured
- [ ] SSL certificate configured
- [ ] Domain DNS configured
- [ ] Performance tested (Lighthouse)
- [ ] Mobile responsiveness tested
- [ ] Cross-browser compatibility tested
