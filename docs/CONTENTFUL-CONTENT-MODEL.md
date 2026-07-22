# Contentful Content Model Guide

## 📐 Blog Post Content Type Setup

When setting up your blog in Contentful, create a content type with these fields:

### Content Type Settings
- **Name**: Blog Post
- **API Identifier**: `blogPost` (must match CONTENT_TYPE in contentful-config.js)
- **Description**: Blog posts for the website

---

## 📋 Field Definitions

### 1. Title (Required)
- **Field ID**: `title`
- **Type**: Short text
- **Required**: Yes
- **Description**: The blog post title

### 2. Slug (Optional)
- **Field ID**: `slug`
- **Type**: Short text
- **Required**: No
- **Description**: URL-friendly identifier (e.g., "benefits-of-chiropractic-care")
- **Validation**: Unique

### 3. Body (Required)
- **Field ID**: `body`
- **Type**: Long text or Rich text
- **Required**: Yes
- **Description**: The main content of the blog post

### 4. Excerpt (Recommended)
- **Field ID**: `excerpt`
- **Type**: Long text
- **Required**: No
- **Description**: A short summary or preview (used in blog cards)
- **Character limit**: Recommended 150-200 characters

### 5. Featured Image (Recommended)
- **Field ID**: `featuredImage`
- **Type**: Media (Single file)
- **Required**: No
- **Description**: Main image displayed with the post
- **Accepted file types**: Images
- **Recommended size**: 1200x630px (2:1 ratio)

### 6. Publish Date (Recommended)
- **Field ID**: `publishDate`
- **Type**: Date and time
- **Required**: No
- **Description**: When the post was/will be published
- **Note**: Posts are sorted by this date

### 7. Author (Optional)
- **Field ID**: `author`
- **Type**: Short text or Reference
- **Required**: No
- **Description**: Author name or reference to author entry

### 8. Tags (Optional)
- **Field ID**: `tags`
- **Type**: Short text, list
- **Required**: No
- **Description**: Categories or tags for the post
- **Examples**: "Wellness", "Tips", "Chiropractic Care"

---

## 🎯 Quick Setup Options

### Option 1: Use Contentful's Template (Easiest)
1. Go to Contentful
2. When creating a space, select "Blog" template
3. Everything is already configured!

### Option 2: Manual Setup
1. Go to **Content model** in Contentful
2. Click **Add content type**
3. Name it "Blog Post"
4. Set API Identifier to `blogPost`
5. Add each field from the list above

---

## 📝 Example Blog Post

Here's what a complete blog post looks like in Contentful:

```
Title: 5 Benefits of Regular Chiropractic Care

Slug: benefits-of-chiropractic-care

Excerpt: Discover how regular chiropractic adjustments can improve your 
posture, reduce pain, and enhance your overall wellness.

Body: 
Many people think of chiropractors only when they're in pain, but regular 
chiropractic care offers numerous benefits for your long-term health...

[full article content]

Featured Image: [Upload image: chiropractic-care.jpg]

Publish Date: 2025-11-29 10:00 AM

Author: Dr. Mee-Lynn

Tags: Wellness, Chiropractic Care, Health Tips
```

---

## ✅ Checklist

After setting up your content model:

- [ ] Content type API ID is `blogPost` (or you've updated contentful-config.js)
- [ ] At minimum, you have a `title` field
- [ ] You've added fields for `body`, `excerpt`, `featuredImage`, and `publishDate`
- [ ] You've created at least one test blog post
- [ ] You've **published** the post (not just saved as draft)

---

## 🔧 Customization

### If You Want Different Field Names

If your fields have different IDs, update `blog.html` around line 280:

```javascript
const title = fields.title || 'Untitled';              // Change 'title' to your field ID
const excerpt = fields.excerpt || fields.body || '';   // Change 'excerpt' to your field ID
const imageUrl = fields.featuredImage?.fields?.file?.url || '';  // Change 'featuredImage'
const date = fields.publishDate || post.sys.createdAt; // Change 'publishDate'
const tags = fields.tags || [];                         // Change 'tags'
```

### If You Have a Different Content Type ID

Update `contentful-config.js`:

```javascript
CONTENT_TYPE: 'yourContentTypeId'  // e.g., 'post', 'article', 'blogEntry'
```

---

## 📚 Resources

- [Contentful Content Model Docs](https://www.contentful.com/developers/docs/concepts/data-model/)
- [Field Types Reference](https://www.contentful.com/developers/docs/references/field-types/)
- [Rich Text Guide](https://www.contentful.com/developers/docs/concepts/rich-text/)

