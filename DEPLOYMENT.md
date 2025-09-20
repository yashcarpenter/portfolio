# GitHub Pages Deployment Guide

## Prerequisites
- GitHub repository named `portflio` (or update the basePath in next.config.ts)
- GitHub account with Pages enabled

## Deployment Steps

### 1. Enable GitHub Pages
1. Go to your repository on GitHub
2. Click on "Settings" tab
3. Scroll down to "Pages" section
4. Under "Source", select "GitHub Actions"
5. Save the settings

### 1.1. Alternative: Enable Pages via Repository Settings
If the above doesn't work, try this method:
1. Go to "Settings" → "Pages"
2. Under "Source", select "Deploy from a branch"
3. Select "gh-pages" branch and "/ (root)" folder
4. Click "Save"

### 2. Push to GitHub
```bash
git add .
git commit -m "Configure for GitHub Pages deployment"
git push origin main
```

### 3. Monitor Deployment
1. Go to "Actions" tab in your GitHub repository
2. You should see the "Deploy to GitHub Pages" workflow running
3. Wait for it to complete (usually takes 2-3 minutes)

### 4. Access Your Site
Your portfolio will be available at:
`https://yourusername.github.io/portflio`

## Important Notes

- The site will automatically redeploy every time you push to the `main` branch
- Make sure your repository is public for free GitHub Pages hosting
- If you change the repository name, update the `basePath` in `next.config.ts`

## Troubleshooting

### Build Fails
- Check the Actions tab for error details
- Ensure all dependencies are in `package.json`
- Verify TypeScript compilation passes locally

### 404 Errors
- Make sure `trailingSlash: true` is set in `next.config.ts`
- Check that all internal links use relative paths

### Images Not Loading
- Ensure `images: { unoptimized: true }` is set in `next.config.ts`
- Use relative paths for images

## Local Testing
To test the static export locally:
```bash
npm run build
npx serve out
```
