# Quick Start Guide - Contentful Blog

## 🚀 Getting Your Blog Running in 3 Steps

### Step 1: Get Your API Keys from Contentful

1. Go to https://app.contentful.com and log in
2. Click **Settings** → **API keys**
3. Copy these two values:
   - **Space ID**
   - **Content Delivery API - access token**

### Step 2: Add Keys to Your Config File

1. Open `contentful-config.js` in this folder
2. Replace the placeholder values:

```javascript
window.CONTENTFUL_CONFIG = {
    SPACE_ID: 'paste_your_space_id_here',
    ACCESS_TOKEN: 'paste_your_access_token_here',
    CONTENT_TYPE: 'blogPost'
};
```

3. Save the file

### Step 3: Create and Publish Blog Posts

1. In Contentful, go to **Content**
2. Click **Add entry** and select your blog post type
3. Fill in at least the **title** field
4. Click **Publish** (not just Save!)

### ✅ Test It

Open `blog.html` in your browser - you should see your blog posts!

---

## 📋 Need More Help?

See `CONTENTFUL-SETUP.md` for detailed instructions and troubleshooting.

## 🎨 Content Model

Your blog posts can have these fields:
- **title** - Post title (required)
- **body** - Main content
- **excerpt** - Short preview
- **featuredImage** - Main image
- **publishDate** - When published
- **tags** - Categories
- **author** - Author name

If you used Contentful's blog template, these should already exist!

## ⚠️ Common Issues

**"Missing credentials" error?**
→ Make sure you replaced the placeholder text in `contentful-config.js`

**No posts showing?**
→ Make sure your posts are **Published**, not just saved as drafts

**Images not showing?**
→ Add a Media field called `featuredImage` to your content model

