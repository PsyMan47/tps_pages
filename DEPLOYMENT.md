# Deployment Guide for GitHub Pages

## Quick Start

Your Next.js website is ready to deploy to GitHub Pages! Follow these steps:

## Step 1: Create GitHub Repository

1. Go to [GitHub](https://github.com) and create a new repository
2. Name it something like `tps-pages` or `the-perfect-sound-website`
3. Don't initialize with README (we already have one)

## Step 2: Push Your Code

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: The Perfect Sound website"

# Add remote (replace with your repository URL)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Push to main branch
git branch -M main
git push -u origin main
```

## Step 3: Configure GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages** (in the left sidebar)
3. Under **Source**, select **GitHub Actions**
4. The workflow will automatically run and deploy your site

## Step 4: Access Your Site

After the workflow completes (usually 1-2 minutes), your site will be available at:
```
https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/
```

## Manual Build (Optional)

If you want to test the build locally:

```bash
# Build the site
npm run build

# The static files will be in the 'out' directory
# You can preview them by serving the out directory
```

## Updating the Site

Whenever you make changes:

```bash
git add .
git commit -m "Description of your changes"
git push
```

The GitHub Action will automatically rebuild and redeploy your site.

## Troubleshooting

### Build fails on GitHub Actions
- Check the Actions tab in your repository for error logs
- Make sure all dependencies are in package.json
- Verify the build works locally with `npm run build`

### Site shows 404
- Make sure GitHub Pages is set to use GitHub Actions as source
- Check that the workflow completed successfully in the Actions tab
- Wait a few minutes for GitHub's CDN to update

### Images or assets not loading
- All assets should be in the `public` folder
- Use relative paths for images
- The `.nojekyll` file prevents Jekyll processing

## Custom Domain (Optional)

To use a custom domain:

1. Add a `CNAME` file to the `public` folder with your domain
2. Configure DNS settings with your domain provider
3. Enable HTTPS in GitHub Pages settings

## Need Help?

Check the [Next.js Static Export documentation](https://nextjs.org/docs/app/building-your-application/deploying/static-exports) for more details.
