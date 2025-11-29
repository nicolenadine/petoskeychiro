# Content Preview API vs Content Delivery API

## 🤔 What's the Difference?

Contentful provides two different APIs for accessing your content:

### 📦 Content Delivery API (Default - What You're Using)
**Shows:** Only **PUBLISHED** content  
**Use for:** Public-facing websites (your live blog)  
**Security:** Safe to use publicly  
**You have this set up:** ✅

### 👁️ Content Preview API (Optional)
**Shows:** Both **PUBLISHED** and **DRAFT** content  
**Use for:** Testing/previewing posts before publishing  
**Security:** Should be kept more private  
**You need this if:** You want to see unpublished drafts on your blog

---

## 🎯 For Most Users: Stick with Delivery API

**You already have the right setup!** The Content Delivery API (which you configured) is what you want for a public website.

### ✅ Your Current Setup:
- Visitors see only published, ready content
- No accidental draft posts showing up
- This is the standard approach for blogs

---

## 🔧 When to Use Preview API

You might want the Preview API if:
- You want to preview blog posts before publishing them
- You're testing how drafts will look on your website
- You're working on posts and want to see them live before publishing

**Note:** This is typically used during development, not on your live public website.

---

## 📝 How to Add Preview API (Optional)

### Step 1: Get Your Preview Token
1. Go to https://app.contentful.com
2. Navigate to **Settings** → **API keys**
3. Click on your API key
4. Find **Content Preview API - access token** (it's different from the Delivery token)
5. Copy it

### Step 2: Add to Config
Open `contentful-config.js` and add your preview token:

```javascript
window.CONTENTFUL_CONFIG = {
    SPACE_ID: 'cyfprs1hppyy',
    ACCESS_TOKEN: 'cmtP1TTMbjdMTzskOKBn9e84Ks_dk2cjSDodPzu6Gfg',
    
    // Add your preview token here
    PREVIEW_TOKEN: 'your_preview_token_here',
    
    // Set to true to see drafts
    USE_PREVIEW: true,  // Change to true
    
    CONTENT_TYPE: 'blogPost'
};
```

### Step 3: Test
- Open `blog.html` in your browser
- You should now see both published AND draft posts

### Step 4: Switch Back for Production
When you're ready to go live, set `USE_PREVIEW: false` to show only published content.

---

## 🔒 Security Considerations

### Content Delivery API (Current)
- ✅ Safe to use in public websites
- ✅ Only shows published content
- ✅ Can be exposed in client-side code
- ✅ Rate-limited but generous

### Content Preview API
- ⚠️ More sensitive (shows drafts)
- ⚠️ Consider keeping private during development
- ⚠️ Don't commit to public repositories if you have sensitive drafts
- ✅ Still safe - only shows content, can't edit/delete

---

## 💡 Recommended Workflow

### For Development/Testing:
```javascript
USE_PREVIEW: true  // See drafts while working
```

### For Your Live Website:
```javascript
USE_PREVIEW: false  // Only show published posts
```

---

## 📊 Quick Comparison

| Feature | Delivery API | Preview API |
|---------|--------------|-------------|
| Published posts | ✅ Yes | ✅ Yes |
| Draft posts | ❌ No | ✅ Yes |
| Changed but unpublished | ❌ No | ✅ Yes |
| Public use | ✅ Recommended | ⚠️ Optional |
| Your current setup | ✅ Active | Not configured |

---

## ❓ FAQ

**Q: Do I need the Preview API?**  
A: No! For a public blog, the Delivery API is perfect.

**Q: Can I use both?**  
A: Yes! Toggle between them with the `USE_PREVIEW` setting.

**Q: Will drafts show on my live site?**  
A: Not with your current setup. You'd need to add the preview token AND set `USE_PREVIEW: true`.

**Q: Is my content safe?**  
A: Yes! Both APIs only allow reading content, not editing or deleting.

**Q: Should I add the preview token to .gitignore?**  
A: If you're using Git and have sensitive drafts, yes. But it's not as critical as a Content Management API token.

---

## 🎓 Summary

**Bottom line:** You're all set! The Content Delivery API you configured is the right choice for your public blog. Only add the Preview API if you specifically need to preview draft posts before publishing them.

**Your current setup shows:** Published posts only ✅  
**This is perfect for:** A public-facing blog ✅

