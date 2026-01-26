# Editing Mock Data (Without Supabase)

If you want to edit blog posts, images, and descriptions **without setting up Supabase**, you can edit the mock data directly in the code.

## File to Edit

📁 **Location**: `src/api/base44Client.js`

This file contains all sample data for the app.

---

## How Mock Data Works

1. **Sample posts** are hardcoded in `mockBlogPosts` array
2. When app loads, it shows these posts everywhere
3. Edit the code → Restart app → Changes appear

---

## Editing Blog Posts

### Find the Post

Open `src/api/base44Client.js` and find `mockBlogPosts`. Each post looks like:

```javascript
{
  id: '1',
  title: 'Discovering Hidden Gems in Tokyo',
  excerpt: 'Explore the lesser-known attractions of Tokyo that most tourists miss',
  content: '# Discovering Hidden Gems in Tokyo\n\n...',
  author: 'John Doe',
  created_date: new Date('2024-01-15'),
  image: 'https://images.unsplash.com/photo-1540959375944-7049f642e9d5?w=500&h=350&fit=crop',
  category: 'adventure',
  featured: true,
}
```

### Change the Cover Image

Replace the `image` URL with your own:

```javascript
// Before:
image: 'https://images.unsplash.com/photo-1540959375944-7049f642e9d5?w=500&h=350&fit=crop',

// After:
image: 'https://images.unsplash.com/photo-1234567890?w=500&h=350&fit=crop',
```

### Change the Title

```javascript
// Before:
title: 'Discovering Hidden Gems in Tokyo',

// After:
title: 'Your New Title Here',
```

### Change the Description (Excerpt)

```javascript
// Before:
excerpt: 'Explore the lesser-known attractions of Tokyo that most tourists miss',

// After:
excerpt: 'Your short description for the stories page',
```

### Change the Full Content

The `content` field uses **Markdown** format. Example:

```javascript
content: `
# Main Heading

This is a paragraph. You can write multiple paragraphs.

## Sub Heading

More content here.

- Bullet point 1
- Bullet point 2
- Bullet point 3

> This is a quote

**Bold text** and *italic text*

[Link text](https://example.com)
`
```

### Change the Author

```javascript
author: 'Your Name',
```

### Change the Category

Must be one of: `adventure`, `culture`, `food`, `nature`, `city`, `beach`, `mountains`

```javascript
category: 'food',  // Affects color in Stories page
```

### Change the Date

```javascript
created_date: new Date('2024-02-20'),  // YYYY-MM-DD format
```

---

## Adding a New Blog Post

Copy an existing post and modify it. Add it to the `mockBlogPosts` array:

```javascript
const mockBlogPosts = [
  {
    id: '1',
    title: 'Post 1',
    // ... existing posts ...
  },
  {
    id: '7',  // NEW: Use a unique ID
    title: 'My Amazing Story',
    excerpt: 'A short description',
    content: '# My Amazing Story\n\nFull content here...',
    author: 'Your Name',
    created_date: new Date('2024-02-20'),
    image: 'https://images.unsplash.com/photo-xxxx?w=500&h=350&fit=crop',
    category: 'adventure',
    featured: false,
  },
];
```

**Important**: Each post must have a **unique `id`** value!

---

## Adding Gallery Images

Find the post in the code and add a `gallery_images` array:

```javascript
{
  id: '1',
  title: 'Discovering Hidden Gems in Tokyo',
  // ... other fields ...
  gallery_images: [
    'https://images.unsplash.com/photo-xxxx?w=500&h=500&fit=crop',
    'https://images.unsplash.com/photo-yyyy?w=500&h=500&fit=crop',
    'https://images.unsplash.com/photo-zzzz?w=500&h=500&fit=crop',
  ],
}
```

**Important**: Gallery images are **optional**. If you don't add this field, no gallery shows.

---

## Editing Destinations

Destinations appear on the "Destinations" page. Find the `Destination` entity in the code:

```javascript
{
  id: '1',
  name: 'Tokyo, Japan',
  description: 'A vibrant metropolis blending tradition and modernity',
  image: 'https://images.unsplash.com/photo-xxxx?w=500&h=350&fit=crop',
  rating: 4.8,
}
```

**Fields**:
- `name`: Destination name
- `description`: What makes it special
- `image`: Cover photo URL
- `rating`: 0-5 star rating (decimal)

---

## Image URL Sources

### Free Images (Recommended)

**Unsplash** - Free, high quality
- Website: https://unsplash.com
- Example URL: `https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=350&fit=crop`
- Usage: Right-click image → Copy link

**Pexels** - Free, creative commons
- Website: https://pexels.com

**Pixabay** - Free, public domain
- Website: https://pixabay.com

### Your Own Images

Upload to free hosting:
- Imgur: https://imgur.com
- ImgBB: https://imgbb.com

---

## Example: Full Blog Post

```javascript
{
  id: '7',
  title: 'Desert Adventures in Morocco',
  excerpt: 'Experience the magic of Sahara Desert and ancient medinas',
  content: `
# Desert Adventures in Morocco

Morocco is a country of contrasts and wonders. From bustling markets to endless deserts, this North African gem offers unforgettable experiences.

## The Sahara

The Sahara Desert is a must-see. Imagine golden dunes stretching to the horizon...

### Camel Trekking

- Ride a camel across sand dunes
- Sleep in a traditional Berber tent
- Watch the sunset over the desert
- Experience Berber hospitality

## Ancient Medinas

Wander through narrow streets of:
- Fez
- Marrakech
- Essaouira

**Pro tip**: Wear comfortable shoes for exploring the medinas!

> "The desert is a place where the soul finds peace" - Unknown

## Getting There

Fly into Marrakech International Airport. From there, arrange tours to the Sahara.

[Learn more about Morocco](https://www.visitmorocco.com)
`,
  author: 'Sarah Anderson',
  created_date: new Date('2024-02-15'),
  image: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=500&h=350&fit=crop',
  category: 'nature',
  featured: false,
  gallery_images: [
    'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=500&fit=crop',
    'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=500&h=500&fit=crop',
    'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=500&h=500&fit=crop',
  ],
}
```

---

## Saving & Restarting

1. **Save** the file (Ctrl+S or Cmd+S)
2. The app will **auto-reload** in the browser
3. Your changes appear immediately!

If the app doesn't reload automatically:
1. Switch to browser
2. Press F5 to refresh
3. Or stop app (Ctrl+C) and run `npm start` again

---

## Tips & Tricks

### Markdown Cheat Sheet

```markdown
# Heading 1
## Heading 2
### Heading 3

**Bold text**
*Italic text*
***Bold and italic***

- Bullet point
- Another point
  - Sub point

1. Numbered list
2. Second item

> Quote text

[Link text](https://url.com)

![Image alt](image-url)

---
Horizontal line above
```

### Valid Categories with Colors

| Category | Color |
|----------|-------|
| adventure | 🟠 Orange |
| culture | 🟣 Purple |
| food | 🔴 Red |
| nature | 🟢 Green |
| city | 🔵 Blue |
| beach | 🔷 Cyan |
| mountains | ⬜ Slate |

### Rating Scale

- 5.0 = Absolutely amazing
- 4.5 = Excellent, highly recommended
- 4.0 = Very good
- 3.5 = Good
- 3.0 = Decent
- Below 3.0 = Not recommended

---

## Troubleshooting

**Changes not showing?**
- Make sure you saved the file
- Hard refresh browser: Ctrl+Shift+R (or Cmd+Shift+R on Mac)
- Restart the app: Ctrl+C, then `npm start`

**Syntax error (red squiggly lines)?**
- Check for missing quotes: `"text"`
- Check for missing commas between fields
- Check all brackets match: `{...}`, `[...]`

**Image not loading?**
- Make sure URL starts with `https://`
- Check URL is complete and correct
- Try opening URL in new tab to verify it works

**Can't find the right file?**
- Press Ctrl+P (or Cmd+P)
- Type: `base44Client.js`
- Click to open

---

## Ready to Use Supabase?

Once you're comfortable with mock data, you can:

1. Set up Supabase (free account)
2. Create tables
3. Add posts via dashboard
4. Never edit code again!

See [SUPABASE_QUICKSTART.md](./SUPABASE_QUICKSTART.md) when ready! 🚀

---

Enjoy editing your travel blog! ✈️
