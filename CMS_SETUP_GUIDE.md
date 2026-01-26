# CMS Integration Guide - offRoute Chronicles

## Overview
This guide helps you set up a **Supabase** backend for managing blog posts, images, and galleries permanently.

## Why Supabase?
✅ Free to start (with 500MB storage)
✅ Real PostgreSQL database
✅ Built-in authentication
✅ File storage (for images)
✅ React integration ready
✅ No backend code needed

---

## Step 1: Create a Supabase Account

1. Go to [supabase.com](https://supabase.com)
2. Click "Sign Up" and create a free account
3. Create a new project (choose any region)
4. Wait for the project to initialize (2-3 minutes)

---

## Step 2: Create Database Tables

Once in the Supabase dashboard:

### Table 1: `blog_posts`
Click "SQL Editor" → "New Query" → Paste this:

```sql
CREATE TABLE blog_posts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  excerpt TEXT NOT NULL,
  content TEXT NOT NULL,
  author TEXT NOT NULL,
  category TEXT NOT NULL,
  image TEXT,
  featured BOOLEAN DEFAULT false,
  created_date TIMESTAMP DEFAULT NOW(),
  updated_date TIMESTAMP DEFAULT NOW()
);
```

### Table 2: `gallery_images`
```sql
CREATE TABLE gallery_images (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  post_id UUID NOT NULL REFERENCES blog_posts(id) ON DELETE CASCADE,
  image_url TEXT NOT NULL,
  alt_text TEXT,
  created_date TIMESTAMP DEFAULT NOW()
);
```

### Table 3: `destinations`
```sql
CREATE TABLE destinations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  description TEXT NOT NULL,
  image TEXT,
  rating DECIMAL(2,1),
  created_date TIMESTAMP DEFAULT NOW()
);
```

---

## Step 3: Get Your Credentials

In Supabase dashboard:
1. Click "Settings" (bottom left)
2. Click "API" 
3. Copy these values:
   - **Project URL** (your-project.supabase.co)
   - **Anon Key** (public key)

---

## Step 4: Install Supabase Client

In your project terminal:
```bash
npm install @supabase/supabase-js
```

---

## Step 5: Create Environment Variables

Create a `.env` file in your project root:
```
REACT_APP_SUPABASE_URL=your-project.supabase.co
REACT_APP_SUPABASE_ANON_KEY=your-anon-key
```

Replace with your actual values from Step 3.

---

## Step 6: Update the API Client

The app will automatically use the updated `base44Client.js` which now connects to Supabase instead of mock data.

---

## Step 7: Add Blog Posts via Supabase Dashboard

1. In Supabase, go to "Table Editor"
2. Click `blog_posts` table
3. Click "Insert row" and add:
   - **title**: Your post title
   - **excerpt**: Short description
   - **content**: Full content (supports Markdown)
   - **author**: Author name
   - **category**: Choose from: adventure, culture, food, nature, city, beach, mountains
   - **image**: URL to cover image
   - **featured**: true/false

Example image URLs (from Unsplash):
- https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=350&fit=crop
- https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=500&h=350&fit=crop
- https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=500&h=350&fit=crop

---

## Step 8: Add Gallery Images

1. Click `gallery_images` table
2. Click "Insert row" and add:
   - **post_id**: (Click the dropdown, select the blog post)
   - **image_url**: URL to image
   - **alt_text**: Description of the image

---

## Step 9: Upload Images to Supabase Storage (Optional)

For better performance, upload images to Supabase:

1. Click "Storage" in sidebar
2. Create a new bucket called "blog-images"
3. Click "Upload" to add images
4. Copy the public URL and use it in your posts

---

## Troubleshooting

### Posts not showing?
- Check that `REACT_APP_SUPABASE_URL` and `REACT_APP_SUPABASE_ANON_KEY` are correct in `.env`
- Restart the app: `npm start`
- Check browser console for errors

### Images not loading?
- Make sure image URLs are complete (start with http:// or https://)
- Images must be publicly accessible

### Need help?
- Supabase Docs: https://supabase.com/docs
- React example: https://supabase.com/docs/guides/getting-started/quickstarts/reactjs

---

## Future Enhancements

Once comfortable with Supabase, you can add:
- User authentication
- Comments and reactions
- Subscriber management
- Admin dashboard
- Search functionality

All without writing backend code!
