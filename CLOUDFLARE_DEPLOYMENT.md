# Cloudflare Pages Deployment Guide for Claimb.lol

This guide will help you deploy your Next.js static site to Cloudflare Pages.

## Prerequisites

- A Cloudflare account (free tier works fine)
- Your GitHub repository connected to Cloudflare Pages
- Your project is already configured for static export (`output: 'export'` in `next.config.js`)

## Deployment Steps

### 1. Connect to Cloudflare Pages

1. Log in to [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Navigate to **Pages** in the sidebar
3. Click **Create a project**
4. Click **Connect to Git** and authorize Cloudflare to access your GitHub account
5. Select your `claimb.lol` repository

### 2. Configure Build Settings

When setting up the project, use these settings:

**Framework preset:** `Next.js (Static HTML Export)`

- This preset is specifically for Next.js projects with `output: 'export'`

**Build command:**

```bash
npm run build
```

**Build output directory:**

```
out
```

**Root directory:**

```
/
```

**Environment variables:**

- None required for the landing page (static site)
- If you add any API routes later, add them in the Cloudflare dashboard

### 3. Advanced Build Settings (Optional)

**Node.js version:** `18` or `20` (recommended)

- You can set this in the build settings or add a `.nvmrc` file

### 4. Deploy

1. Click **Save and Deploy**
2. Cloudflare will build and deploy your site
3. Initial build takes 2-5 minutes
4. You'll get a `*.pages.dev` URL immediately

### 5. Custom Domain Setup

1. Go to your project's **Custom domains** tab
2. Click **Set up a custom domain**
3. Enter `claimb.lol` (and `www.claimb.lol` if desired)
4. Follow the DNS configuration instructions
5. Cloudflare will automatically provision SSL certificates

## Build Configuration Reference

Your project is already properly configured:

### `next.config.js` (Already Configured ✅)

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Static export for Cloudflare Pages
  trailingSlash: true, // Better compatibility
  images: {
    unoptimized: true, // Required for static export
  },
};
```

### `package.json` scripts (Already Configured ✅)

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build", // This is what Cloudflare runs
    "start": "next start"
  }
}
```

## Automatic Deployments

Once connected:

- **Production deployments:** Every push to `main` branch
- **Preview deployments:** Every pull request gets a unique preview URL
- **Instant rollbacks:** One-click rollback to any previous deployment

## Performance Optimizations

Cloudflare Pages automatically provides:

- ✅ Global CDN with 300+ locations
- ✅ Automatic HTTPS
- ✅ HTTP/2 and HTTP/3
- ✅ Brotli compression
- ✅ DDoS protection
- ✅ Unlimited bandwidth (free tier)

## Troubleshooting

### Build fails with "Command not found"

- Make sure `npm run build` is in your package.json
- Check that your Node.js version is 18+

### 404 errors on routes

- Verify `trailingSlash: true` in next.config.js
- Check that all pages are in the `app` directory

### Images not loading

- Ensure `unoptimized: true` in next.config.js
- Verify images are in the `public` directory

### Styling issues

- Run `npm run build` locally first to test
- Check that Tailwind CSS is properly configured

## Post-Deployment Checklist

- [ ] Test all pages (Home, Privacy, Terms, Support)
- [ ] Verify images load correctly
- [ ] Test navigation between pages
- [ ] Check mobile responsiveness
- [ ] Verify favicon displays
- [ ] Test social media sharing (Open Graph)
- [ ] Check that sitemap.xml is accessible
- [ ] Verify robots.txt is accessible
- [ ] Test page load speed (should be < 1s)

## Useful Commands

### Test production build locally:

```bash
npm run build
npx serve@latest out
```

### Check build output:

```bash
npm run build
ls -la out/
```

## Alternative: Vercel Deployment

If you prefer Vercel (also excellent for Next.js):

1. Go to [vercel.com](https://vercel.com)
2. Import your GitHub repository
3. Framework preset: **Next.js** (auto-detected)
4. Deploy

Vercel will automatically detect your Next.js config and deploy correctly.

## Why Cloudflare Pages?

✅ **Pros:**

- Free unlimited bandwidth
- Global CDN with excellent performance
- Great DDoS protection
- Simple setup for static sites
- Preview deployments for PRs

⚠️ **Cons:**

- Limited to static sites (no server-side rendering)
- No API routes (but you don't need them for this landing page)

## Support

If you encounter issues:

- [Cloudflare Pages Docs](https://developers.cloudflare.com/pages/)
- [Next.js Static Export Docs](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)
- [Cloudflare Community](https://community.cloudflare.com/)

---

**Current Configuration Status:** ✅ Ready for Deployment

Your project is properly configured and ready to deploy to Cloudflare Pages!
# Cloudflare Pages will pull the latest commit with ESLint fixes
