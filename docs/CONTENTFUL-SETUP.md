# Contentful Blog Setup Guide

This guide will help you configure your Contentful CMS integration with your Petoskey Chiropractic website.

## Step 1: Get Your Contentful API Keys

1. **Log in to Contentful**
   - Go to [https://app.contentful.com](https://app.contentful.com)
   - Sign in with your account

2. **Find Your Space ID**
   - Click on your space name in the top left
   - Go to **Settings** (gear icon) → **General Settings**
   - Copy your **Space ID**

3. **Get Your Access Token**
   - Go to **Settings** → **API keys**
   - Click on an existing API key or create a new one by clicking **Add API key**
   - Copy the **Content Delivery API - access token**
   - ⚠️ **Important**: Use the Content Delivery API token (not the Preview API token) for published content

## Step 2: Configure Your Website

1. **Open the configuration file**
   - Open `contentful-config.js` in your project folder

2. **Add your credentials**
   ```javascript
   window.CONTENTFUL_CONFIG = {
       SPACE_ID: 'your_actual_space_id_here',
       ACCESS_TOKEN: 'your_actual_access_token_here',
       CONTENT_TYPE: 'blogPost'  // Change this if your content type has a different ID
   };
   ```

3. **Save the file**

## Step 3: Verify Your Content Model

Your Contentful blog post content type should include these fields:

### Required Fields:
- **title** (Short text) - The blog post title

### Optional but Recommended Fields:
- **slug** (Short text) - URL-friendly identifier
- **body** (Long text or Rich text) - Main content
- **excerpt** (Long text) - Short summary/preview
- **publishDate** (Date & time) - Publication date
- **featuredImage** (Media) - Main image for the post
- **author** (Short text) - Author name
- **tags** (Short text, list) - Categories/tags

### To Check Your Content Type ID:
1. Go to **Content model** in Contentful
2. Click on your blog post content type
3. Look at the top right for the **API Identifier** (e.g., "blogPost")
4. Make sure this matches the `CONTENT_TYPE` in your `contentful-config.js`

## Step 4: Create Test Content

1. **Go to Content**
   - Click **Content** in the left sidebar

2. **Add an entry**
   - Click **Add entry** → Select your blog post content type
   - Fill in at least the **title** field
   - Add other content as desired

3. **Publish it**
   - Click **Publish** in the top right
   - ⚠️ **Important**: Content must be published to appear on your website

## Step 5: Test Your Blog

1. **Open your blog page**
   - Open `blog.html` in your browser
   - You should see your blog posts appear

2. **Troubleshooting**
   - If you see "Loading..." indefinitely, check the browser console (F12) for errors
   - Verify your Space ID and Access Token are correct
   - Make sure your content is **published** (not just saved as a draft)
   - Check that your Content Type ID matches your actual content model

## Common Issues

### "Missing Contentful credentials" error
- Make sure you've replaced `YOUR_SPACE_ID_HERE` and `YOUR_ACCESS_TOKEN_HERE` in `contentful-config.js`

### "No Blog Posts Yet" message
- Check that you've created and **published** blog posts in Contentful
- Verify the CONTENT_TYPE matches your content model's API identifier

### Images not showing
- Make sure you've added a **Media** field called `featuredImage` to your content model
- Upload and attach images to your blog posts in Contentful

### CORS errors
- Make sure you're using the **Content Delivery API** token (not Preview API)
- The Content Delivery API should work from any domain

## Customization

### Changing Field Names
If your Contentful fields have different names, you can customize the blog display:

1. Open `blog.html`
2. Find the `renderBlogPosts` function
3. Update the field names to match your content model:
   ```javascript
   const title = fields.yourTitleFieldName || 'Untitled';
   const excerpt = fields.yourExcerptFieldName || '';
   // etc.
   ```

### Styling
All styles are in the `<style>` section of `blog.html`. You can customize:
- Colors (uses your existing CSS variables)
- Card layouts
- Grid columns
- Font sizes

## Need Help?

- [Contentful Documentation](https://www.contentful.com/developers/docs/)
- [Content Delivery API Reference](https://www.contentful.com/developers/docs/references/content-delivery-api/)
- [Contentful Support](https://www.contentful.com/support/)

