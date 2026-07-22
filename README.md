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
├── CNAME                       # GitHub Pages custom domain
├── assets/
│   ├── images/                 # Site images (incl. blog/ subfolder)
│   └── js/
│       └── contentful-config.js  # Contentful API configuration
├── docs/                       # Project documentation (Contentful setup, todo, etc.)
└── README.md                   # This file
```

## 🔧 Contentful Integration

This website uses Contentful as a headless CMS for managing:
- **Blog posts** - Articles displayed on the blog page
- **Team members** - Staff profiles shown on the about page

### Contentful Configuration

The connection to Contentful is configured in `assets/js/contentful-config.js`:
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
- `docs/CONTENTFUL-SETUP.md` - How Contentful is configured
- `docs/CONTENTFUL-CONTENT-MODEL.md` - Content structure
- `docs/README-CONTENTFUL.md` - General Contentful information

## ✏️ Making Edits on GitHub.com (No Coding Experience Required)

This section is for the marketing person or business owner who wants to make small edits — text, phone numbers, links, hours, etc. — directly through the GitHub website. No installs, no command line.

You don't have direct push access to this repository, so the standard way to suggest a change is:

1. **Fork** the repo — creates your own personal copy of it under your GitHub account.
2. **Edit** the file(s) using GitHub's built-in web editor, right in your browser.
3. **Open a Pull Request (PR)** — this asks the repo owner to review and merge your change into the live site.
4. The owner reviews and merges the PR. Once merged, GitHub Pages automatically redeploys, and the change goes live within a couple of minutes.

Nothing you do in your fork touches the live site until a PR is merged, so it's safe to experiment.

### Step 1: Fork the repository

1. Go to https://github.com/nicolenadine/petoskeychiro
2. Click **Fork** in the top-right corner.
3. Click **Create fork**. GitHub creates a copy at `github.com/YOUR-USERNAME/petoskeychiro`.

You only need to do this once — reuse the same fork for future edits (see "Keeping your fork up to date" below).

### Step 2: Edit a file

1. In **your fork**, click into the file you want to change (e.g. `index.html`, `contact.html`, `faq.html`).
2. Click the **pencil icon** ("Edit this file") in the top-right of the file view.
3. Make your change in the text editor.
   - If you're changing visible text (a sentence, phone number, hours, etc.), find that text and edit it carefully without disturbing the surrounding `<tags>`.
   - Change only what you intend to. Adding or deleting a stray `<` or `>` can break the page layout.
   - Use the **Preview** tab next to the editor to sanity-check the diff before committing.
4. Scroll down to **"Commit changes"**:
   - Write a short, descriptive message (e.g. "Update phone number on contact page").
   - Select **"Create a new branch for this commit and start a pull request."**
   - Click **Propose changes**.

### Step 3: Open the pull request

1. On the "Comparing changes" screen, confirm the base repository is `nicolenadine/petoskeychiro` and the base branch is `main`.
2. Add a title and a short description of what changed and why.
3. Click **Create pull request**.

The change is now submitted for review — the live site is untouched until it's merged.

### Step 4: Wait for review

The repo owner reviews the PR, may leave comments, and merges it once it looks good. After merging into `main`, the site automatically redeploys (usually live within 1-2 minutes).

### Editing multiple files at once

To bundle several changes into one PR:
- Make your first edit and choose "Create a new branch," as above.
- For each additional file, edit it and choose **"Commit directly to `your-branch-name`"** instead of creating another new branch.
- Open a single pull request once all the files are updated on that branch.

### Keeping your fork up to date

Before starting new edits, sync your fork so you're working from the latest version:

1. Go to your fork on GitHub.
2. Click **Sync fork** near the top of the file list, then **Update branch**.

### Tips

- Stick to small edits this way — text, links, contact info. For layout changes, new pages, or styling, loop in a developer.
- Blog posts and team member bios don't go through this process — those are managed in Contentful (see above).
- If a PR looks wrong, just close it without merging — nothing on the live site changes.

## 🐞 Reporting a Problem or Requesting a Change (GitHub Issues)

If you spot something wrong on the site (a typo, broken link, layout issue) or want to request a change but don't want to edit it yourself, open a GitHub Issue instead. This creates a written record that the developer can track and respond to.

1. Go to https://github.com/nicolenadine/petoskeychiro/issues
2. Click **New issue**.
3. Give it a clear title (e.g. "Phone number wrong on Contact page" or "Please add a link to the new promo page").
4. In the description, include:
   - Which page it's on (a URL or page name, e.g. `contact.html` or "the Contact page")
   - What's wrong, or what you'd like changed
   - A screenshot if it's a visual issue (drag and drop an image directly into the description box)
5. Click **Submit new issue**.

You'll be notified by email/GitHub when there's a reply or when it's resolved. You don't need a fork or a pull request for this — just a free GitHub account and access to this repository's Issues tab.

## 👨‍💻 Making Code Changes (For Developers, Local Setup)

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

### ⚠️ Migrating from WordPress/AWS

If you're currently using WordPress hosted on AWS, follow these steps to migrate to this new static site:

#### Before Making DNS Changes:

1. **Backup your WordPress site** (if you need any content/images from it)
2. **Document current DNS settings** - take screenshots of all current DNS records
3. **Note your AWS setup** - you may want to shut down AWS resources after migration to avoid charges
4. **Plan for downtime** - there may be a brief period during DNS propagation where the old or new site shows inconsistently

#### Migration Steps:

1. **Deploy the new site to GitHub Pages first** (complete the setup below)
2. **Test the new site** at `nicolenadine.github.io/petoskeychiro` to ensure everything works
3. **Then update DNS** to point to GitHub Pages (this switches your domain to the new site)
4. **Wait for DNS propagation** (24-48 hours)
5. **Verify everything works** on your custom domain
6. **Shut down WordPress/AWS** to avoid ongoing costs

#### What Happens to Email?

If you have email addresses using your domain (like `info@petoskeychiro.com`):
- **Email DNS records (MX records) are separate** - don't delete them!
- Only change A and CNAME records related to your website
- Keep any MX, TXT, or other records for email services

---

### Setting Up Your Custom Domain

To connect your custom domain (e.g., `www.petoskeychiro.com` or `petoskeychiro.com`):


### Step 1: Update DNS Settings at Your Domain Registrar

You'll need to log into wherever you purchased your domain (GoDaddy, Namecheap, Google Domains, etc.) and add DNS records.

#### Option A: Using a Subdomain (www.petoskeychiro.com) - RECOMMENDED

Add a **CNAME record**:

| Record Type | Name/Host | Value/Points To              | TTL  |
|-------------|-----------|------------------------------|------|
| CNAME       | www       | nicolenadine.github.io       | 3600 |

**Then** add an **A record** for the apex domain (or use ALIAS/ANAME if available):

| Record Type | Name/Host | Value/Points To    | TTL  |
|-------------|-----------|-------------------|------|
| A           | @         | 185.199.108.153   | 3600 |
| A           | @         | 185.199.109.153   | 3600 |
| A           | @         | 185.199.110.153   | 3600 |
| A           | @         | 185.199.111.153   | 3600 |

#### Option B: Using Apex Domain Only (petoskeychiro.com)

Add **A records** (you need all 4):

| Record Type | Name/Host | Value/Points To    | TTL  |
|-------------|-----------|-------------------|------|
| A           | @         | 185.199.108.153   | 3600 |
| A           | @         | 185.199.109.153   | 3600 |
| A           | @         | 185.199.110.153   | 3600 |
| A           | @         | 185.199.111.153   | 3600 |

 

### Step 2: Wait for DNS Propagation

- DNS changes can take **up to 24-48 hours** to propagate worldwide
- Most changes happen within **1-2 hours**
- You can check status at: https://dnschecker.org


### Troubleshooting DNS Issues

**Domain not connecting:**
- Wait longer (DNS can take up to 48 hours)
- Make sure you deleted any old A or CNAME records for the same host
- Verify your DNS records are exactly as shown above

**"DNS check unsuccessful" error in GitHub:**
- Wait a few more hours for propagation
- Double-check the CNAME record points to `nicolenadine.github.io` (not the full URL)
- Make sure there's no trailing dot in your DNS records

**HTTPS not working:**
- Wait 24 hours after DNS is working before enabling HTTPS
- GitHub needs time to provision the SSL certificate
- Try unchecking and re-checking "Enforce HTTPS"

### After Migration: Shutting Down AWS/WordPress

Once your new site is live and working on your custom domain:

#### 1. Verify Everything Works
- Test all pages on your custom domain
- Check that blog posts load from Contentful
- Verify contact forms work
- Test on mobile devices

#### 2. Shut Down WordPress/AWS Resources

**To avoid ongoing AWS charges:**

1. Log into AWS Console
2. Go to **EC2** (if using EC2 instances)
   - Select your WordPress instance
   - Actions → Instance State → Terminate
3. Go to **RDS** (if using database)
   - Select your database
   - Actions → Delete (consider final snapshot if needed)
4. Go to **S3** (if storing files)
   - Delete WordPress-related buckets (after backing up any needed files)
5. Go to **Lightsail** (if using Lightsail)
   - Delete the WordPress instance
6. Check **Elastic Beanstalk**, **CloudFront**, **Route 53** for any other resources

**Cost Savings:**
- WordPress on AWS: Typically $10-50+/month
- This static site on GitHub Pages: **$0/month** 🎉

#### 3. Keep Your Domain Registration

- Your domain registration is separate from hosting
- Keep paying your domain registrar (GoDaddy, Namecheap, etc.) for the domain name itself
- You're only eliminating hosting costs, not domain registration costs

## 👥 Team Workflow

### For Marketing Managers / Business Owner:
- Blog posts and team member profiles: update through the Contentful web interface — no technical knowledge required, changes go live immediately.
- Small text edits to the site itself (phone numbers, hours, wording): use the fork → edit → pull request workflow described in [✏️ Making Edits on GitHub.com](#️-making-edits-on-githubcom-no-coding-experience-required) above. No installs needed, and nothing goes live until the PR is reviewed and merged.
- Found a bug or want a change but don't want to edit it yourself? Open a [GitHub Issue](#-reporting-a-problem-or-requesting-a-change-github-issues) instead.

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
- **Bugs, typos, or change requests**: Open a GitHub Issue — see [🐞 Reporting a Problem or Requesting a Change](#-reporting-a-problem-or-requesting-a-change-github-issues) above

## 📄 License

© 2025 Petoskey Chiropractic. All rights reserved.

