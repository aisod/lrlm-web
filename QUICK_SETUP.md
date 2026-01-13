# Quick Setup Guide for AISOD LRLM Website

## 🚀 Get Started in 5 Minutes

### 1. Environment Setup
```bash
# Copy the environment template
cp env.template .env.local

# Edit .env.local and configure your form service
# For Formspree (recommended):
# 1. Go to https://formspree.io/
# 2. Create a free account
# 3. Create a new form
# 4. Replace YOUR-FORM-ID in .env.local with your actual form ID
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see your website!

## 📧 Form Configuration Options

### Option 1: Formspree (Easiest)
```env
DEMO_FORM_SERVICE=formspree
FORMSPREE_ENDPOINT=https://formspree.io/f/your-form-id
```

### Option 2: Console Logging (Testing)
```env
DEMO_FORM_SERVICE=console
```

### Option 3: Custom Webhook
```env
DEMO_FORM_SERVICE=webhook
DEMO_FORM_WEBHOOK_URL=https://your-api.com/webhooks/demo-form
DEMO_FORM_API_KEY=your-api-key
```

## 🚀 Deploy to Netlify

1. Push your code to GitHub
2. Connect your GitHub repo to Netlify
3. Set environment variables in Netlify dashboard
4. Deploy!

The site is already configured for Netlify deployment with:
- Node.js 20.9.0
- Automatic build detection
- Next.js plugin

## ✅ Production Checklist

- [ ] Environment variables configured (.env.local created)
- [ ] Form service connected (Formspree account created)
- [ ] Domain updated (already done: aisod.solutions)
- [ ] Test form submission
- [ ] Deploy to Netlify
- [ ] Test live site

## 🆘 Need Help?

- **Documentation**: See full SETUP.md and DEPLOYMENT.md
- **Form Issues**: Check your .env.local configuration
- **Build Issues**: Ensure Node.js >= 20.9.0
- **Contact**: enterprise@aisod.solutions