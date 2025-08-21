# Deployment Guide

This guide covers deploying Claimb.lol to various hosting platforms.

## 🚀 Vercel (Recommended)

Vercel is the easiest deployment option for Next.js applications.

### 1. Prepare Your Repository
- Push your code to GitHub
- Ensure all environment variables are documented in `env.example`

### 2. Connect to Vercel
1. Go to [vercel.com](https://vercel.com) and sign in
2. Click "New Project"
3. Import your GitHub repository
4. Vercel will auto-detect Next.js settings

### 3. Configure Environment Variables
In your Vercel project dashboard:
1. Go to Settings → Environment Variables
2. Add your API keys:
   ```
   NEXT_PUBLIC_RIOT_API_KEY=your_riot_api_key
   NEXT_PUBLIC_OPENAI_API_KEY=your_openai_api_key  # Optional
   ```

### 4. Deploy
- Vercel will automatically deploy on every push to main
- Custom domains can be configured in the dashboard

## 🌐 Netlify

### 1. Build Configuration
Create `netlify.toml` in your project root:
```toml
[build]
  command = "npm run build:static"
  publish = "out"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### 2. Deploy
1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build:static`
3. Set publish directory: `out`
4. Add environment variables in Netlify dashboard

## 🐳 Docker

### 1. Create Dockerfile
```dockerfile
FROM node:18-alpine AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

FROM node:18-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build:static

FROM nginx:alpine AS runner
COPY --from=builder /app/out /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

### 2. Build and Run
```bash
docker build -t claimb-lol .
docker run -p 80:80 claimb-lol
```

## 📁 Static Hosting (GitHub Pages, AWS S3, etc.)

### 1. Build Static Files
```bash
npm run build:static
```

### 2. Upload Contents
Upload the contents of the `out/` directory to your hosting service.

### 3. Configure Redirects
Ensure your hosting service handles client-side routing by redirecting all routes to `index.html`.

## 🔧 Environment Variables

### Required for All Deployments
- `NEXT_PUBLIC_RIOT_API_KEY`: Your Riot Games API key

### Optional
- `NEXT_PUBLIC_OPENAI_API_KEY`: OpenAI API key for AI coaching
- `NEXT_PUBLIC_OPENROUTER_API_KEY`: OpenRouter API key (alternative)
- `NEXT_PUBLIC_TOGETHER_API_KEY`: Together.ai API key (alternative)

## 🚨 Common Issues

### Build Failures
- Ensure all dependencies are installed: `npm install`
- Check TypeScript errors: `npm run type-check`
- Verify environment variables are set

### API Errors
- Confirm Riot API key is valid and has sufficient quota
- Check API rate limits (100 requests per 2 minutes)
- Verify region endpoints are correct

### Routing Issues
- Ensure your hosting service supports client-side routing
- Configure redirects for SPA behavior

## 📊 Performance Optimization

### Build Optimization
- Use `npm run build:static` for static hosting
- Enable gzip compression on your server
- Use CDN for static assets

### Runtime Optimization
- Implement proper caching headers
- Use service workers for offline functionality
- Optimize images and assets

## 🔒 Security Considerations

### API Keys
- Never commit API keys to version control
- Use environment variables for all sensitive data
- Consider API key rotation for production

### CORS
- Configure CORS properly if needed
- Limit API access to trusted domains

## 📈 Monitoring

### Recommended Tools
- **Vercel Analytics**: Built-in performance monitoring
- **Sentry**: Error tracking and performance monitoring
- **Google Analytics**: User behavior tracking

### Key Metrics
- Page load times
- API response times
- Error rates
- User engagement

## 🆘 Troubleshooting

### Development vs Production
- Test with production build: `npm run build && npm start`
- Check browser console for errors
- Verify environment variables are loaded

### Debug Mode
Enable debug logging by setting:
```bash
NODE_ENV=development
DEBUG=*
```

---

For additional support, check the main README or create a GitHub issue.
