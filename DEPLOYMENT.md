# 🚀 Deployment Guide

This guide provides step-by-step instructions for deploying the MIT Student Portal to various platforms.

## 📋 Prerequisites

- Node.js (16.0.0 or higher)
- npm (8.0.0 or higher)
- Git installed and configured
- GitHub account
- Vercel account (for Vercel deployment)

## 🌐 Vercel Deployment (Recommended)

### Option 1: One-Click Deployment

1. Click the deploy button:
   [![Deploy to Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/sanjivani188/MIT.git)

2. Follow the Vercel setup wizard:
   - Connect your GitHub account
   - Select the repository
   - Configure project settings (use defaults)
   - Click "Deploy"

### Option 2: Manual Deployment

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel:**
   ```bash
   vercel login
   ```

3. **Build the project:**
   ```bash
   npm run build
   ```

4. **Deploy:**
   ```bash
   vercel --prod
   ```

5. **Follow the prompts:**
   - Link to existing project? No
   - Project name: `mit-student-portal`
   - Directory: `./` (current directory)

### Vercel Configuration

The project includes a `vercel.json` file with optimized settings:

```json
{
  "version": 2,
  "buildCommand": "npm run build",
  "outputDirectory": "build",
  "framework": "create-react-app",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

## 🌐 Netlify Deployment

### Option 1: Git-based Deployment

1. **Connect Repository:**
   - Log in to [Netlify](https://www.netlify.com/)
   - Click "New site from Git"
   - Choose GitHub and authorize
   - Select the `MIT` repository

2. **Configure Build Settings:**
   - Build command: `npm run build`
   - Publish directory: `build`
   - Node version: `18` (in Environment variables)

3. **Deploy:**
   - Click "Deploy site"
   - Wait for build to complete

### Option 2: Manual Upload

1. **Build locally:**
   ```bash
   npm run build
   ```

2. **Upload build folder:**
   - Go to Netlify dashboard
   - Drag and drop the `build` folder

### Netlify Configuration

Create `netlify.toml` for advanced configuration:

```toml
[build]
  publish = "build"
  command = "npm run build"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[build.environment]
  NODE_VERSION = "18"
```

## 🌐 GitHub Pages Deployment

1. **Install gh-pages:**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Update package.json:**
   ```json
   {
     "homepage": "https://sanjivani188.github.io/MIT",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d build"
     }
   }
   ```

3. **Deploy:**
   ```bash
   npm run deploy
   ```

4. **Enable GitHub Pages:**
   - Go to repository settings
   - Scroll to "Pages" section
   - Select source: "Deploy from a branch"
   - Select branch: `gh-pages`

## 🌐 Firebase Hosting

1. **Install Firebase CLI:**
   ```bash
   npm install -g firebase-tools
   ```

2. **Login to Firebase:**
   ```bash
   firebase login
   ```

3. **Initialize Firebase:**
   ```bash
   firebase init hosting
   ```

4. **Configure settings:**
   - Public directory: `build`
   - Single-page app: `Yes`
   - Rewrite all URLs to /index.html: `Yes`

5. **Build and deploy:**
   ```bash
   npm run build
   firebase deploy
   ```

## 🔧 Environment Variables

For production deployment, set these environment variables:

```env
REACT_APP_NAME=MIT Student Portal
REACT_APP_VERSION=1.0.0
REACT_APP_DEPLOYMENT_URL=https://your-domain.com
```

### Setting Environment Variables:

**Vercel:**
- Dashboard → Project → Settings → Environment Variables

**Netlify:**
- Dashboard → Site → Settings → Build & deploy → Environment variables

**GitHub Pages:**
- Not supported (client-side only)

## 🏗️ Build Optimization

### Performance Tips:

1. **Enable gzip compression** (automatic on most platforms)
2. **Use CDN** for static assets
3. **Enable caching** for static files
4. **Optimize images** before deployment

### Build Analysis:

```bash
npm run build
npx serve -s build
```

Access build analyzer:
```bash
npm install -g webpack-bundle-analyzer
npx webpack-bundle-analyzer build/static/js/*.js
```

## 📊 Monitoring and Analytics

### Add to index.html:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🔒 Security Headers

The project includes security headers in `vercel.json`:

```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        }
      ]
    }
  ]
}
```

## 🐛 Troubleshooting

### Common Issues:

1. **Build fails:**
   ```bash
   npm ci
   npm run build
   ```

2. **Routing issues (404 on refresh):**
   - Ensure SPA redirects are configured
   - Check `vercel.json` or `netlify.toml`

3. **Environment variables not working:**
   - Must start with `REACT_APP_`
   - Restart development server after changes

4. **Slow build times:**
   - Clear npm cache: `npm cache clean --force`
   - Update dependencies: `npm update`

### Build Logs:

Check build logs in platform dashboard:
- Vercel: Functions → View Build Logs
- Netlify: Deploys → Build Log
- GitHub Pages: Actions tab

## 📞 Support

If you encounter issues:

1. Check the [troubleshooting section](#-troubleshooting)
2. Review platform-specific documentation
3. Create an issue on GitHub
4. Contact platform support

---

🎉 **Your MIT Student Portal is now ready for the world!**
