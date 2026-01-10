# Deployment Guide

## Recommended Platforms

### Vercel (Easiest - Recommended)

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. **Deploy on Vercel**
   - Go to https://vercel.com
   - Import your GitHub repository
   - Vercel will auto-detect Next.js
   - Add environment variables if needed
   - Deploy!

3. **Custom Domain**
   - In Vercel dashboard, go to Settings > Domains
   - Add `aisod.solutions` or `aisod.pro`
   - Update DNS records as instructed

### Netlify

1. **Build Command**: `npm run build`
2. **Publish Directory**: `.next`
3. **Node Version**: 18.x or higher

### Self-Hosted (Node.js Server)

1. **Build the application**:
   ```bash
   npm run build
   ```

2. **Start production server**:
   ```bash
   npm start
   ```

3. **Use PM2 for process management**:
   ```bash
   npm install -g pm2
   pm2 start npm --name "aisod-website" -- start
   pm2 save
   pm2 startup
   ```

## Environment Setup

### Required Environment Variables

None required for basic functionality. Optional variables:

```env
NEXT_PUBLIC_SITE_URL=https://aisod.solutions
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX  # Google Analytics
CONTACT_EMAIL=enterprise@aisod.solutions
```

## Performance Optimization

### Already Included:
- ✅ Next.js Image optimization
- ✅ Code splitting
- ✅ Automatic font optimization
- ✅ CSS minification
- ✅ JavaScript minification

### Additional Optimizations:

1. **Enable Compression** (if self-hosting):
   - Use nginx or similar with gzip/brotli

2. **CDN Setup**:
   - Use Vercel Edge Network (automatic)
   - Or configure Cloudflare/CDN

3. **Image Optimization**:
   - All images are optimized via Next.js Image component
   - Consider WebP format for better compression

## SEO Checklist

- [x] Meta tags configured
- [x] Open Graph tags
- [x] Twitter Card tags
- [x] Structured data (JSON-LD)
- [x] Sitemap generated
- [x] Robots.txt configured
- [ ] Submit sitemap to Google Search Console
- [ ] Submit sitemap to Bing Webmaster Tools
- [ ] Create and verify Google Search Console property
- [ ] Add Google Analytics (optional)

## Monitoring & Analytics

### Recommended Tools:

1. **Google Analytics 4**
   - Add tracking code to `app/layout.tsx`

2. **Vercel Analytics** (if using Vercel)
   - Automatic performance monitoring

3. **Google Search Console**
   - Monitor search performance
   - Track indexing status

## Security

- ✅ HTTPS enforced (automatic on Vercel/Netlify)
- ✅ Content Security Policy (can be added)
- ✅ XSS protection (Next.js built-in)
- [ ] Add security headers (via `next.config.js`)

## Backup & Maintenance

1. **Regular Backups**:
   - Code: GitHub repository
   - Database: If using one, set up automated backups

2. **Updates**:
   - Keep dependencies updated: `npm audit fix`
   - Monitor Next.js updates

3. **Monitoring**:
   - Set up uptime monitoring (UptimeRobot, Pingdom)
   - Configure error tracking (Sentry, optional)

## Post-Deployment

1. **Test Everything**:
   - [ ] All pages load correctly
   - [ ] Forms submit properly
   - [ ] Mobile responsiveness
   - [ ] Social media previews
   - [ ] SEO metadata

2. **Submit to Search Engines**:
   - Google Search Console
   - Bing Webmaster Tools

3. **Social Media**:
   - Test Open Graph previews on Facebook, Twitter, LinkedIn
   - Update social media profiles with website link

4. **Analytics**:
   - Verify tracking is working
   - Set up conversion goals

## Support

For issues or questions:
- Check Next.js documentation: https://nextjs.org/docs
- Vercel documentation: https://vercel.com/docs
- AISOD Tech support: enterprise@aisod.solutions
