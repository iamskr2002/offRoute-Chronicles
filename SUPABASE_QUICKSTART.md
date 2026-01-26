# Quick Start: CMS Integration for offRoute Chronicles

## What's New?

Your app now supports:
✅ **Supabase CMS** - Manage blog posts, images, and galleries in a real database  
✅ **Enhanced Photo Gallery** - Beautiful gallery section in blog posts  
✅ **Fallback to Mock Data** - App works without Supabase (uses sample data)  
✅ **Easy to Setup** - No backend coding required

---

## 🚀 Quick Setup (5 minutes)

### Step 1: Create Free Supabase Account
1. Visit https://supabase.com
2. Click "Sign Up" → Create Account
3. Create a new project (choose any region)
4. Wait for setup (2-3 minutes)

### Step 2: Copy Your Credentials
1. In Supabase, click **"Settings"** (bottom left)
2. Click **"API"**
3. Copy:
   - **Project URL** (looks like: `https://xxxxx.supabase.co`)
   - **Anon Key** (public key, not the service role)

### Step 3: Update Environment File
In your project, open/edit `.env` file:

```env
REACT_APP_SUPABASE_URL=https://xxxxx.supabase.co
REACT_APP_SUPABASE_ANON_KEY=your-anon-key-here
```

Replace with your actual values from Step 2.

### Step 4: Create Database Tables
In Supabase dashboard, go to **"SQL Editor"** and paste each query:

**Query 1 - Blog Posts Table:**
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

**Query 2 - Gallery Images Table:**
```sql
CREATE TABLE gallery_images (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  post_id UUID NOT NULL REFERENCES blog_posts(id) ON DELETE CASCADE,
  image_url TEXT NOT NULL,
  alt_text TEXT,
  created_date TIMESTAMP DEFAULT NOW()
);
```

**Query 3 - Destinations Table:**
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

### Step 5: Restart Your App
```bash
npm start
```

Done! 🎉

---

## 📝 How to Add Content

### Add a Blog Post

1. In Supabase, go to **"Table Editor"**
2. Click **`blog_posts`** table
3. Click **"Insert row"** and fill in:

| Field | Example |
|-------|---------|
| title | "Hidden Gems in Tokyo" |
| excerpt | "Explore lesser-known attractions..." |
| content | "# Heading\n\nYour full post content in Markdown" |
| author | "John Doe" |
| category | adventure, culture, food, nature, city, beach, or mountains |
| image | https://images.unsplash.com/photo-xxxx?w=500&h=350&fit=crop |
| featured | true or false |

### Add Gallery Images to a Post

1. Go to **`gallery_images`** table
2. Click **"Insert row"** and fill in:

| Field | Value |
|-------|-------|
| post_id | (Click dropdown, select the blog post) |
| image_url | https://images.unsplash.com/photo-xxxx |
| alt_text | "Description of the image" |

### Add a Destination

1. Go to **`destinations`** table
2. Click **"Insert row"** and fill in:

| Field | Example |
|-------|---------|
| name | "Tokyo, Japan" |
| description | "A vibrant metropolis blending..." |
| image | https://images.unsplash.com/photo-xxxx |
| rating | 4.8 |

---

## 🖼️ Image URLs

Best image sources:
- **Unsplash**: https://unsplash.com (free, high quality)
  - Example: `https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=350&fit=crop`
- **Pexels**: https://pexels.com (free)
- **Your own**: Upload to Supabase Storage (see below)

### Upload Images to Supabase (Optional)

For best performance, upload images to Supabase:

1. In Supabase sidebar, click **"Storage"**
2. Create new bucket: **"blog-images"**
3. Click **"Upload"** and add image files
4. Copy the public URL from the image menu
5. Use that URL in your posts

---

## 🎨 Post Categories

Choose from these categories (affects color):

| Category | Color |
|----------|-------|
| adventure | Orange |
| culture | Purple |
| food | Red |
| nature | Green |
| city | Blue |
| beach | Cyan |
| mountains | Slate |

---

## ✨ What You Can Now Do

### View & Edit Posts
- All posts display in Stories page
- Click any post to see full content + gallery

### Photo Galleries
- Add multiple images per blog post
- Beautiful hover effects
- Images show on blog post pages

### Featured Posts
- Set `featured = true` to highlight certain posts
- Featured posts appear differently (optional)

### Search & Filter
- Stories page has category filters
- Search by title/excerpt

---

## 🔧 Troubleshooting

**Posts not showing?**
- Check `.env` has correct credentials
- Make sure table is named exactly `blog_posts`
- Restart the app: `npm start`

**Images not loading?**
- Verify URLs start with `https://`
- Check image is publicly accessible
- Try uploading to Supabase Storage instead

**"Module not found" error?**
- Run: `npm install @supabase/supabase-js`
- Restart app: `npm start`

**No Supabase credentials?**
- App still works with sample/mock data
- Just add `.env` values when ready

---

## 📚 More Features (Future)

Once comfortable, you can add:
- User authentication & logins
- Comments & ratings on posts
- Newsletter subscriptions
- Admin dashboard
- Full-text search
- Analytics

All from Supabase Dashboard! 🎯

---

## 📖 Resources

- **Supabase Docs**: https://supabase.com/docs
- **React Examples**: https://supabase.com/docs/guides/getting-started/quickstarts/reactjs
- **Database Guide**: https://supabase.com/docs/guides/database

---

## ❓ Need Help?

1. Check Supabase dashboard for errors
2. Open browser console (F12) for error messages  
3. Restart the app: `npm start`
4. Check that table/column names match exactly

Enjoy! ✈️
