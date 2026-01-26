# offRoute Chronicles - CMS & Gallery Setup Guide

## 🎉 What's New?

Your blog now has:

✅ **Professional Photo Gallery** - Display multiple photos per blog post  
✅ **Supabase CMS Integration** - Manage content in a real database (optional but recommended)  
✅ **Mock Data Fallback** - Works perfectly with sample data if you don't use Supabase  
✅ **Enhanced Blog Pages** - Beautiful layout for blog posts with related stories  
✅ **Easy Content Management** - No coding required to add posts!

---

## 📖 Two Ways to Use This App

### Option 1: With Mock Data (No Setup Required) ✨
- Use sample blog posts included in the app
- Perfect for testing and development
- No database or sign-ups needed
- **To edit content**: See [MOCK_DATA_EDITING.md](./MOCK_DATA_EDITING.md)

### Option 2: With Supabase CMS (Recommended) 🚀
- Real database for permanent content
- Add/edit posts via Supabase Dashboard
- Store images in the cloud
- Scale to thousands of posts
- **Quick Setup**: 5 minutes - See [SUPABASE_QUICKSTART.md](./SUPABASE_QUICKSTART.md)

---

## 🖼️ Photo Gallery Feature

### What's New in Blog Posts?

Each blog post now displays:

1. **Main Cover Image** - Beautiful hero section
2. **Photo Gallery** - Multiple photos in an elegant grid
   - Hover to see image descriptions
   - Responsive design (adjusts to mobile/tablet/desktop)
3. **Related Stories** - Links to similar posts
   - Preview image and excerpt
   - Easy navigation to other stories

### How to Add Gallery Images

**With Supabase:**
1. Create blog post in `blog_posts` table
2. Go to `gallery_images` table
3. Add images linked to the post ID
4. Images appear instantly on the blog post page!

**With Mock Data:**
1. Edit `src/api/base44Client.js`
2. Add images to `post.gallery_images` array
3. Restart the app

---

## 🎯 File Structure

```
offRoute-Chronicles/
├── CMS_SETUP_GUIDE.md          ← Detailed CMS setup (deprecated, see SUPABASE_QUICKSTART.md)
├── SUPABASE_QUICKSTART.md      ← Quick start (recommended!)
├── MOCK_DATA_EDITING.md        ← How to edit sample data
├── .env                        ← Your Supabase credentials (don't commit!)
├── .env.example                ← Template for .env
├── package.json                ← Now includes @supabase/supabase-js
└── src/
    ├── api/
    │   └── base44Client.js     ← API client (supports Supabase + Mock)
    ├── Pages/
    │   ├── BlogPost.js         ← Blog post page (NEW: gallery section!)
    │   └── Stories.js          ← All stories page
    └── Components/
        └── travel/
            └── BlogGrid.js     ← Recent stories grid
```

---

## 🚀 Getting Started

### For Beginners (Use Mock Data)

The app **already works** with sample posts! Just run:

```bash
npm start
```

No setup needed. Edit posts in the code as shown in [MOCK_DATA_EDITING.md](./MOCK_DATA_EDITING.md).

### For Production (Use Supabase)

Follow the 5-minute setup in [SUPABASE_QUICKSTART.md](./SUPABASE_QUICKSTART.md).

---

## 📋 Features Breakdown

### Gallery Section in Blog Posts

**Location**: Visible on each blog post page (`/blog/:id`)

**Displays**:
- Grid of photos (2 columns on mobile, 3 on desktop)
- Hover effects reveal photo descriptions
- Responsive and mobile-friendly
- Fallback to default image if URL fails

**Add Images**:
```sql
INSERT INTO gallery_images (post_id, image_url, alt_text) VALUES
('post-id-here', 'https://image-url.com/image.jpg', 'Description of image');
```

### Related Stories Section

**Location**: Below gallery on blog post page

**Shows**:
- 3 similar posts from same category
- Preview image, title, and excerpt
- "View Photos & Story" hover text
- Click to view full post with its gallery

**Automatic**: Works by matching post categories!

---

## 🔄 How the App Decides: Supabase or Mock Data?

The app checks for Supabase credentials:

```
1. Check if REACT_APP_SUPABASE_URL in .env
2. If YES → Try to connect to Supabase
3. If SUCCESS → Use real data
4. If NO or FAIL → Use mock sample data
```

So you can:
- **Start with mock data** (zero setup)
- **Add .env credentials later** (no code changes!)
- **Still see content** while configuring Supabase

---

## 📝 Mock Data Example

Current sample posts:

| Title | Category | Author |
|-------|----------|--------|
| Discovering Hidden Gems in Tokyo | adventure | John Doe |
| Street Food Adventures in Bangkok | food | Jane Smith |
| Culture and Temples of Bali | culture | Maria Garcia |
| Mountain Trekking in Nepal | nature | Alex Turner |
| Beach Hopping in Maldives | beach | Emma Wilson |
| Urban Exploration in New York | city | David Lee |

Edit these in `src/api/base44Client.js` (See MOCK_DATA_EDITING.md)

---

## ✨ Pro Tips

### Best Image Practices
- Use **Unsplash** (free, high quality): https://unsplash.com
- Use **Pexels**: https://pexels.com
- Use **your own images** (upload to Supabase Storage)
- Image size: ~500x350px works best

### Blog Post Content
- Write in **Markdown** format
- Use `#` for headings
- Use `- ` for bullet points
- Include images with `![alt](url)`

### Gallery Tips
- Add 3-6 images per post
- Write descriptions in `alt_text`
- Keep file sizes under 2MB
- Use consistent aspect ratios

---

## 🐛 Common Issues & Fixes

**Issue**: Posts not showing  
**Fix**: Check table names match exactly (`blog_posts`, `gallery_images`, `destinations`)

**Issue**: Images 404 errors  
**Fix**: Use full HTTPS URLs, not relative paths

**Issue**: Supabase not connecting  
**Fix**: Check `.env` has correct URL and key, restart app

**Issue**: Can't see new posts  
**Fix**: Hard refresh browser (Ctrl+Shift+R or Cmd+Shift+R)

---

## 🎓 Next Steps

1. **Try the app** with current sample data
2. **Read** [SUPABASE_QUICKSTART.md](./SUPABASE_QUICKSTART.md) for real database
3. **Create** first post in Supabase
4. **Add gallery** images to the post
5. **Share** your site!

---

## 📚 Resources

**Video Tutorials**:
- Supabase setup: https://supabase.com/docs/guides/getting-started/quickstarts/reactjs
- React Query: https://tanstack.com/query/latest

**Documentation**:
- Supabase API: https://supabase.com/docs/reference/javascript/introduction
- React Router: https://reactrouter.com/docs
- Tailwind CSS: https://tailwindcss.com/docs

**Community**:
- Supabase Discord: https://discord.supabase.com
- React community: https://react.dev/community

---

## 💡 Feature Ideas

Once comfortable with Supabase, consider adding:

- [ ] User authentication (allow visitors to comment)
- [ ] Like/heart reactions on posts
- [ ] Newsletter subscription form
- [ ] Search functionality
- [ ] Admin dashboard
- [ ] Post categories with filtering
- [ ] Reading time estimates
- [ ] Social media sharing buttons

All possible with Supabase! 🎯

---

## ❓ Questions?

1. Check this README
2. See [SUPABASE_QUICKSTART.md](./SUPABASE_QUICKSTART.md)
3. Review [MOCK_DATA_EDITING.md](./MOCK_DATA_EDITING.md)
4. Check browser console (F12) for error messages
5. Visit https://supabase.com/docs for detailed help

---

Enjoy managing your travel blog! ✈️🌍📸
