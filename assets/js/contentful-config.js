/**
 * Contentful Configuration
 * 
 * TO SET UP:
 * 1. Log in to your Contentful account at https://app.contentful.com
 * 2. Go to Settings > API keys
 * 3. Create a new API key or use an existing one
 * 4. Copy your Space ID and Content Delivery API access token
 * 5. Paste them below
 */

window.CONTENTFUL_CONFIG = {
    // Your Contentful Space ID
    // Find it in: Settings > General Settings > Space ID
    SPACE_ID: 'cyfprs1hppyy',
    
    // Your Content Delivery API - access token (for PUBLISHED content only)
    // Find it in: Settings > API keys > Content delivery / preview tokens
    ACCESS_TOKEN: 'cmtP1TTMbjdMTzskOKBn9e84Ks_dk2cjSDodPzu6Gfg',
    
    // Optional: Content Preview API - access token (for DRAFT + PUBLISHED content)
    // Only needed if you want to see unpublished drafts on your blog
    // Find it in the same place as ACCESS_TOKEN (it's a different token in the same section)
    PREVIEW_TOKEN: '', // Leave empty for public website
    
    // Set to true to use Preview API (shows drafts), false for Delivery API (published only)
    USE_PREVIEW: false,
    
    // The content type ID for your blog posts
    // This should match the ID you set up in your Contentful content model
    // Common values: 'blogPost', 'post', 'article'
    // Find it in: Content model > Your content type > (look at the top right for the ID)
    CONTENT_TYPE: 'pageBlogPost'
};

/**
 * CONTENTFUL BLOG TEMPLATE FIELDS:
 * 
 * If you used Contentful's blog template, your fields are:
 * - title (Short text) - The post title
 * - slug (Short text) - URL-friendly identifier
 * - content (Rich text) - The main blog content
 * - shortDescription (Long text) - Brief summary/excerpt
 * - publishedDate (Date) - When the post was published
 * - featuredImage (Media) - Main post image
 * - author (Reference) - Author information
 * - relatedBlogPosts (References) - Links to related posts
 * 
 * These field names are already configured in blog.html.
 */

