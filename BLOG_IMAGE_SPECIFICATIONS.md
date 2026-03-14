# LocalAI Agent — Blog Image Specifications

## 📐 Image Standards

### Featured Image (Blog Post Cover)

**Recommended Size:** `1200 × 675 pixels` (16:9 aspect ratio)

| Property | Value | Notes |
|----------|-------|-------|
| **Width** | 1200px (minimum) | Optimal: 1200-1920px |
| **Height** | 675px (minimum) | Optimal: 675-1080px |
| **Aspect Ratio** | 16:9 | Strictly enforced |
| **Format** | WebP (preferred) | Also accepts: JPG, PNG |
| **File Size** | < 200KB | Optimized for web |
| **Color Space** | sRGB | Standard for web |

---

## ✅ What Works

### Good Examples

**16:9 Ratio Images:**
```
┌─────────────────────────────┐
│                             │
│     1200 × 675 pixels       │
│     Perfect 16:9 ratio      │
│                             │
└─────────────────────────────┘
```

**Common 16:9 Resolutions:**
- 1920 × 1080 (Full HD)
- 1600 × 900 (HD+)
- 1280 × 720 (HD)
- 1200 × 675 (Recommended)
- 800 × 450 (Small)

---

## ❌ What Doesn't Work

### Wrong Aspect Ratios

**Square Images (1:1):**
```
┌──────────────┐
│              │
│   1000×1000  │  ← Will be cropped
│              │
└──────────────┘
```

**Portrait Images (3:4):**
```
┌──────────┐
│          │
│          │  ← Will be cropped
│ 800×1000 │
│          │
│          │
└──────────┘
```

**Ultrawide Images (21:9):**
```
┌──────────────────────────────┐
│                              │  ← Sides will be cropped
│        1920 × 820            │
│                              │
└──────────────────────────────┘
```

---

## 🛠️ How to Prepare Images

### Option 1: Resize to 16:9

**Using Online Tools:**
1. [Canva](https://canva.com) - Create 1200×675 design
2. [Adobe Express](https://adobe.com/express) - Free image resizer
3. [Bulk Resize](https://bulkresizephotos.com) - Batch processing

**Using Photoshop:**
```
1. Image → Image Size
2. Set Width: 1200px, Height: 675px
3. File → Export → Save for Web (WebP)
4. Quality: 80% (keeps file size < 200KB)
```

**Using GIMP (Free):**
```
1. Image → Scale Image
2. Width: 1200px, Height: 675px
3. File → Export As → .webp
4. Quality: 80%
```

### Option 2: Crop to 16:9

**Important:** Keep important content in the center!

```
Original Image (4:3)
┌─────────────────────────┐
│                         │
│   ┌───────────────┐     │  ← Crop area (16:9)
│   │  Keep content │     │
│   │    here!      │     │
│   └───────────────┘     │
│                         │
└─────────────────────────┘
```

---

## 📝 Frontmatter Usage

### Correct

```markdown
---
title: "My Blog Post"
image: ~/assets/images/blog/my-post.webp
# Image is 1200×675px (16:9)
---
```

### Incorrect

```markdown
---
title: "My Blog Post"
image: ./src/assets/images/blog/my-post.jpg
# Wrong path format + wrong ratio
---
```

---

## 🎨 Design Guidelines

### Content in Safe Zone

Keep important elements within center 80%:

```
┌─────────────────────────────┐
│  ← 10% margin (safe zone) → │
│  ┌─────────────────────┐    │
│  │                     │    │
│  │   Main content      │    │
│  │   Text, faces,      │    │
│  │   logos here        │    │
│  │                     │    │
│  └─────────────────────┘    │
│  ← 10% margin (safe zone) → │
└─────────────────────────────┘
```

### Text Overlay

If adding text to images:
- **Font Size:** Minimum 24px for readability
- **Contrast:** Ensure text stands out from background
- **Position:** Center or bottom-third rule
- **Shadow:** Add drop shadow for readability

### Branding

- **Logo Placement:** Bottom-right corner
- **Logo Size:** Maximum 10% of image height
- **Opacity:** 80-90% for subtle branding

---

## 🔍 Optimization Checklist

Before uploading:

- [ ] Dimensions are 1200×675px (or 16:9 ratio)
- [ ] File format is WebP (or JPG/PNG)
- [ ] File size is under 200KB
- [ ] Important content is centered
- [ ] Image is sharp and clear
- [ ] Colors are vibrant (not washed out)
- [ ] No watermarks from stock sites
- [ ] Alt text describes the image

---

## 📊 Image Types

### 1. Featured Images (Required)

**Purpose:** Blog list page, social sharing

**Size:** 1200 × 675px (16:9)

**Example:**
```markdown
---
title: "AI Deployment Guide"
image: ~/assets/images/blog/ai-deployment.webp
---
```

### 2. Inline Images (Optional)

**Purpose:** Content illustrations

**Size:** 800-1200px width (any height)

**Usage in Markdown:**
```markdown
![Description](~/assets/images/blog/inline-image.webp)
```

### 3. Social Sharing Images

**Purpose:** Open Graph, Twitter Cards

**Size:** 1200 × 630px (1.91:1)

**Note:** Uses same image as featured image, auto-cropped

---

## 🚀 Quick Reference

### Minimum Requirements
```
Width:  1200px
Height: 675px
Ratio:  16:9
Format: WebP
Size:   < 200KB
```

### File Naming
```
✅ my-blog-post.webp
✅ my-blog-post-featured.webp
✅ 2026-03-ai-deployment.webp

❌ image1.jpg
❌ IMG_1234.PNG
❌ screenshot.png
```

### Path Format
```
✅ ~/assets/images/blog/filename.webp
❌ ./src/assets/images/blog/filename.webp
❌ /assets/images/blog/filename.webp
```

---

## 🛠️ Tools & Resources

### Free Image Sources
- [Unsplash](https://unsplash.com) - High-quality photos
- [Pexels](https://pexels.com) - Free stock photos
- [Pixabay](https://pixabay.com) - Free images and videos

### Image Editors
- [Canva](https://canva.com) - Online design tool
- [Photopea](https://photopea.com) - Free online Photoshop
- [GIMP](https://gimp.org) - Free desktop editor

### Optimization Tools
- [Squoosh](https://squoosh.app) - Google's image optimizer
- [TinyPNG](https://tinypng.com) - PNG/JPG compression
- [Convertio](https://convertio.co) - Format converter

---

## 📱 Social Media Preview

### How Images Appear

**Twitter (Summary Large Image):**
```
┌─────────────────────────┐
│      Image 1200×630     │
│                         │
│  Title                  │
│  Description...         │
│  localaiagent.tech      │
└─────────────────────────┘
```

**LinkedIn:**
```
┌─────────────────────────┐
│      Image 1200×627     │
│                         │
│  Title                  │
│  localaiagent.tech      │
└─────────────────────────┘
```

**Facebook:**
```
┌─────────────────────────┐
│      Image 1200×630     │
│                         │
│  Title                  │
│  Description...         │
│  localaiagent.tech      │
└─────────────────────────┘
```

---

## 🔧 Troubleshooting

### Image Appears Cropped

**Problem:** Image doesn't fill 16:9 frame

**Solution:** 
1. Resize image to 1200×675px
2. Or add padding to reach 16:9 ratio

### Image Looks Blurry

**Problem:** Image resolution too low

**Solution:**
1. Use minimum 1200px width
2. Export at 100% quality
3. Check original file resolution

### Image File Too Large

**Problem:** File size > 200KB

**Solution:**
1. Compress with Squoosh.app
2. Reduce quality to 80%
3. Resize to 1200×675px

### Image Not Showing

**Problem:** Image path incorrect

**Solution:**
1. Use `~/assets/images/blog/filename.webp`
2. Check file exists in correct folder
3. Verify file extension matches

---

*Last updated: March 14, 2026*  
*Version: 1.0*
