# Petoskey Chiropractic Website

A modern, professional website for Petoskey Chiropractic featuring dynamic content management through Contentful CMS.

## 🌐 Live Site

[Add your live URL here once deployed]

## 📋 Project Overview

This is a static website that uses:
- **HTML/CSS/JavaScript** - Core website structure and styling
- **Contentful CMS** - Dynamic content management for blog posts and team members
- **Client-side rendering** - Content is fetched from Contentful API and rendered in the browser

## 🚀 Quick Start

### View the Website Locally

1. Clone this repository:
   ```bash
   git clone [your-repo-url]
   cd PetoskeyChiro
   ```

2. Open `index.html` in your browser, OR use a local server (recommended):
   ```bash
   # Using Python 3
   python3 -m http.server 8000
   
   # OR using PHP
   php -S localhost:8000
   
   # OR using Node.js (if you have http-server installed)
   npx http-server -p 8000
   ```

3. Navigate to `http://localhost:8000` in your browser

## 📁 Project Structure

```
PetoskeyChiro/
├── index.html                  # Homepage
├── about.html                  # About page with team members
├── blog.html                   # Blog page (pulls from Contentful)
├── contact.html                # Contact page
├── faq.html                    # FAQ page
├── new-patient-information.html
├── chiropractic-services.html
├── active-release.html
├── massage-therapy.html
├── shockwave-therapy.html
├── contentful-config.js        # Contentful API configuration
├── *.png                       # Images
└── README.md                   # This file
```

## 🔧 Contentful Integration

This website uses Contentful as a headless CMS for managing:
- **Blog posts** - Articles displayed on the blog page
- **Team members** - Staff profiles shown on the about page

### Contentful Configuration

The connection to Contentful is configured in `contentful-config.js`:
- Space ID: `dn3t3khy3cva`
- Access Token: Read-only delivery API token
- Content Types: `pageBlogPost` and `teamMember`

### How Content Updates Work

1. Content editors log into Contentful CMS
2. They create/edit blog posts or team member profiles
3. Changes are published in Contentful
4. Website automatically fetches the latest content when pages load

**No need to redeploy the website for content changes!**

### For Detailed Contentful Documentation

See these files for more information:
- `CONTENTFUL-SETUP.md` - How Contentful is configured
- `CONTENTFUL-CONTENT-MODEL.md` - Content structure
- `README-CONTENTFUL.md` - General Contentful information

## ✏️ Making Code Changes

### To Update Design/Layout:

1. Edit the relevant HTML file
2. Test locally in your browser
3. Commit and push changes to GitHub
4. GitHub Pages will automatically redeploy (within 1-2 minutes)

### To Add New Pages:

1. Create a new `.html` file following the existing structure
2. Copy the header and footer from existing pages for consistency
3. Update navigation menus across all pages
4. Test locally, then commit and push

### To Update Styles:

- Styles are embedded in `<style>` tags in each HTML file
- Look for the `<style>` section in the `<head>` of each page
- Make changes, test, commit, and push

## 🌍 Deployment (GitHub Pages)

This site is hosted on GitHub Pages.

### Automatic Deployment:

Every time you push to the main branch, GitHub Pages automatically rebuilds and deploys the site.

### Manual Deployment Steps:

If you need to redeploy manually:
1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Ensure source is set to deploy from the main branch
4. The site will rebuild automatically

## 🔒 Custom Domain Setup

To connect your custom domain (e.g., `www.petoskeychiro.com`):

1. Go to **Settings** → **Pages** in your GitHub repository
2. Under "Custom domain", enter your domain name
3. Add these DNS records at your domain registrar:
   ```
   Type: CNAME
   Name: www
   Value: [your-username].github.io
   ```
4. Wait for DNS propagation (can take up to 24 hours)
5. Enable "Enforce HTTPS" in GitHub Pages settings

## 👥 Team Workflow

### For Marketing Managers:
- Update content through the Contentful web interface
- No technical knowledge required for content updates
- Blog posts and team member changes go live immediately

### For Developers:
- Clone this repository to make code changes
- Create a new branch for significant changes
- Test locally before pushing
- Push to main branch to deploy

## 🆘 Troubleshooting

### Content Not Showing Up:

1. Check that content is **Published** in Contentful (not just saved as draft)
2. Clear your browser cache and reload
3. Check browser console for API errors (F12 → Console tab)

### Website Not Updating After Push:

1. Check GitHub Actions tab for build status
2. Wait 2-3 minutes for deployment to complete
3. Clear browser cache or try incognito mode

### Local Development Issues:

- If images don't load, make sure you're using a local server (not just opening the HTML file)
- Some browsers block API calls from `file://` URLs

## 📞 Support

For questions or issues:
- **Content updates**: Contact your Contentful admin
- **Technical issues**: Create an issue in this GitHub repository
- **Emergency**: [Add contact information]

## 📄 License

© 2025 Petoskey Chiropractic. All rights reserved.

