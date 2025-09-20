# Deployment Guide

This portfolio can be deployed to both **Vercel** and **GitHub Pages** with different configurations.

## 🚀 Vercel Deployment (Recommended)

Vercel is the easiest and most reliable option for Next.js applications.

### Steps:
1. **Connect to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Sign in with GitHub
   - Click "New Project"
   - Import your `portflio` repository

2. **Deploy**:
   - Vercel will automatically detect it's a Next.js app
   - Use the default settings
   - Click "Deploy"

3. **Result**:
   - Your site will be live at `https://your-project-name.vercel.app`
   - Automatic deployments on every push to main branch
   - No additional configuration needed

## 📄 GitHub Pages Deployment

GitHub Pages requires static export and additional configuration.

### Steps:
1. **Enable GitHub Pages**:
   - Go to your repository → Settings → Pages
   - Under "Source", select "GitHub Actions"

2. **Deploy**:
   - Push your code to the `main` branch
   - GitHub Actions will automatically build and deploy
   - Your site will be live at `https://yashcarpenter.github.io/portflio`

3. **Manual Build** (if needed):
   ```bash
   npm run build:github
   ```

## 🔧 Configuration Details

### For Vercel:
- Uses standard Next.js build (`npm run build`)
- No static export
- Full Next.js features available
- Automatic routing

### For GitHub Pages:
- Uses static export (`npm run build:github`)
- Generates static HTML files
- Limited to static features
- Custom routing with 404.html

## 🎯 Recommendation

**Use Vercel** for the best experience:
- ✅ Faster builds
- ✅ Better performance
- ✅ Automatic deployments
- ✅ No configuration needed
- ✅ Full Next.js features

**Use GitHub Pages** only if:
- You specifically need GitHub Pages
- You want everything in one repository
- You're using a custom domain

## 🔄 Switching Between Platforms

The configuration automatically detects the deployment target:

- **Vercel**: Uses `npm run build` (standard Next.js)
- **GitHub Pages**: Uses `npm run build:github` (static export)

No code changes needed when switching platforms!
