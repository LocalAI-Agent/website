# LocalAI Agent — Blog Image Generator AI Prompt

> **Purpose:** Use this prompt with AI image generators (DALL-E 3, Midjourney, Stable Diffusion) or AI assistants to create perfectly optimized blog images for LocalAI Agent.
>
> **Copy and paste the relevant section into your AI tool.**

---

## 📋 AI IMAGE GENERATION PROMPT

### For AI Image Generators (DALL-E 3, Midjourney, etc.)

```
You are creating a blog featured image for LocalAI Agent, an enterprise AI infrastructure company.

## IMAGE SPECIFICATIONS

**Dimensions:** 1200 × 675 pixels (16:9 aspect ratio)
**Format:** WebP
**Style:** Professional, modern, tech-focused
**Color Palette:** Blues, grays, whites (corporate tech aesthetic)

## SUBJECT MATTER

[INSERT TOPIC DESCRIPTION HERE]

## COMPOSITION RULES

1. **Safe Zone:** Keep all important content within center 80% of the image
   - Leave 10% margin on all sides for cropping
   - Place key elements (text, faces, logos) in the center

2. **Text Space:** Leave room for potential text overlay
   - Avoid busy backgrounds where text would go
   - Use negative space strategically

3. **Brand Alignment:**
   - Clean, minimalist aesthetic
   - No watermarks or stock photo artifacts
   - Professional enterprise technology feel

## TECHNICAL REQUIREMENTS

- **Resolution:** Minimum 1200px width
- **Aspect Ratio:** Exactly 16:9
- **File Size:** Under 200KB (after optimization)
- **Color Space:** sRGB
- **Quality:** Sharp, clear, high contrast

## STYLE REFERENCES

**Do:**
- Modern server/AI/technology imagery
- Abstract neural network visualizations
- Clean geometric patterns
- Professional photography style
- Subtle gradients and lighting

**Don't:**
- Cartoon or illustration style (unless specified)
- Overly busy compositions
- Low contrast or washed out colors
- Generic stock photo aesthetics

## OUTPUT

Generate a 16:9 ratio image optimized for:
- Blog post featured image
- Social media sharing (Open Graph, Twitter Cards)
- Professional enterprise technology audience

---

**TOPIC:** [Insert your specific topic here]

**EXAMPLE:** "Local AI deployment showing server hardware with neural network visualization overlay, enterprise data center background, blue and gray color scheme"
```

---

## 🎨 AI IMAGE EDITOR PROMPT

### For AI Assistants (Claude, GPT-4) to Describe Images

```
You are an expert visual designer creating image briefs for LocalAI Agent blog posts.

## TASK

Generate a detailed image description that can be given to:
1. A human designer
2. An AI image generator (DALL-E 3, Midjourney, Stable Diffusion)
3. Used for alt text and accessibility

## IMAGE SPECIFICATIONS

**Type:** Featured Image (Blog Post Cover)
**Dimensions:** 1200 × 675 pixels (16:9 aspect ratio)
**Format:** WebP
**Max File Size:** 200KB

## BRAND GUIDELINES

**Company:** LocalAI Agent
**Industry:** Enterprise AI Infrastructure
**Audience:** CTOs, AI Engineers, Enterprise Decision-Makers
**Tone:** Professional, authoritative, innovative

**Color Palette:**
- Primary: Deep Blue (#1E3A5F)
- Secondary: Tech Gray (#6B7280)
- Accent: Electric Blue (#3B82F6)
- Background: Clean White/Light Gray

**Visual Style:**
- Clean, minimalist design
- Modern technology aesthetic
- Professional enterprise feel
- No cartoon or illustration style (unless specified)

## OUTPUT FORMAT

Generate the following:

### 1. Image Description (for AI generator)
A detailed paragraph describing exactly what should appear in the image.

### 2. Composition Notes
- Subject placement
- Background treatment
- Lighting and mood
- Color scheme

### 3. Text Overlay Suggestion (optional)
If text should be added, specify:
- Text content
- Font style
- Placement

### 4. Alt Text
Accessibility description (125 characters max).

### 5. File Naming Suggestion
SEO-friendly filename.

---

**BLOG POST TOPIC:** [Insert topic]

**EXAMPLE:**
Topic: "Local AI Deployment Guide"

Output:
### Image Description
A modern enterprise server rack with glowing blue AI neural network visualization overlay. The servers are arranged in a clean data center environment with subtle blue LED lighting. Abstract data flow lines connect the servers, representing AI model distribution. Professional, corporate aesthetic with deep blue and gray tones.

### Composition Notes
- **Subject:** Server rack positioned center-left (rule of thirds)
- **Background:** Soft-focus data center corridor
- **Lighting:** Cool blue ambient lighting from servers
- **Colors:** Deep blue (#1E3A5F), tech gray (#6B7280), electric blue accents (#3B82F6)
- **Safe Zone:** All key elements within center 80% of frame

### Text Overlay Suggestion (optional)
- **Text:** "Local AI Deployment"
- **Font:** Bold sans-serif (Inter or similar)
- **Placement:** Bottom third, white text with subtle drop shadow

### Alt Text
"Enterprise server rack with blue AI neural network visualization overlay in modern data center"

### File Naming Suggestion
`local-ai-deployment-guide.webp`
```

---

## 🖼️ AI ALT TEXT GENERATOR PROMPT

### For Generating Alt Text from Image Descriptions

```
You are an accessibility specialist creating alt text for blog images.

## TASK

Generate SEO-optimized, descriptive alt text for blog post images.

## GUIDELINES

**Length:** 100-125 characters maximum
**Style:** Descriptive, specific, includes keyword naturally
**Avoid:** "Image of", "Picture of", redundant phrases

## FORMULA

```
[Subject] + [Action/State] + [Context/Keyword]
```

## EXAMPLES

**Good Alt Text:**
- ✅ "Enterprise server rack with blue AI neural network visualization overlay"
- ✅ "Comparison chart showing 70% latency reduction with local AI deployment"
- ✅ "MCP architecture diagram illustrating tool integration flow"
- ✅ "CTO reviewing AI deployment dashboard on multiple monitors"

**Bad Alt Text:**
- ❌ "Image of servers"
- ❌ "Picture showing AI stuff"
- ❌ "Screenshot"
- ❌ "Diagram1.png"

## CONTEXT

**Blog Post Title:** [Insert title]
**Target Keyword:** [Insert keyword]
**Image Description:** [Describe the image]

## OUTPUT

Generate 3 alt text variations:

1. **Standard:** Straightforward description
2. **SEO-Optimized:** Includes target keyword naturally
3. **Detailed:** More comprehensive (still under 125 chars)

---

**INPUT:**
Blog Post Title: [Title]
Target Keyword: [Keyword]
Image Description: [Description]
```

---

## 📐 AI IMAGE CROP/RESIZE PROMPT

### For AI Assistants to Provide Image Editing Instructions

```
You are a photo editor providing precise instructions for resizing images to blog specifications.

## BLOG IMAGE REQUIREMENTS

**Target Dimensions:** 1200 × 675 pixels
**Aspect Ratio:** 16:9 (exactly)
**Safe Zone:** Center 80% (10% margin on all sides)

## TASK

Analyze the source image and provide specific cropping/resizing instructions.

## SOURCE IMAGE INFO

**Current Dimensions:** [Width × Height]
**Current Aspect Ratio:** [e.g., 4:3, 1:1, 16:9]
**Important Content Location:** [Describe where key elements are]

## OUTPUT FORMAT

Provide step-by-step instructions:

### Option 1: Crop to 16:9

1. **Crop Area:**
   - Start: [X, Y coordinates]
   - End: [X, Y coordinates]
   - Result: 1200 × 675 pixels

2. **Content Preservation:**
   - Keep [specific element] in [position]
   - Ensure [important content] remains visible
   - Avoid cutting off [specific concern]

### Option 2: Resize with Padding

1. **Resize to:** [Dimensions]
2. **Add Padding:**
   - Top: [X pixels, color]
   - Bottom: [X pixels, color]
   - Left: [X pixels, color]
   - Right: [X pixels, color]

### Option 3: Content-Aware Fill

1. **Extend Canvas to:** 1200 × 675 pixels
2. **Fill Method:** Content-aware fill or gradient
3. **Color Match:** [Describe color to blend]

### Tools-Specific Instructions

**For Photoshop:**
```
1. Image → Canvas Size → 1200 × 675px
2. Position: [Center/Top/Bottom/etc.]
3. Canvas extension color: [Color]
4. File → Export → Save for Web (WebP, 80% quality)
```

**For Canva:**
```
1. Create design → Custom dimensions → 1200 × 675px
2. Upload image → Position in center
3. Adjust crop → Download → WebP format
```

**For Online Tools:**
```
1. Go to [Tool URL]
2. Upload image
3. Select 16:9 crop ratio
4. Download as WebP
```

---

**SOURCE IMAGE:**
Dimensions: [Width × Height]
Important Content: [Description]
Preferred Method: [Crop/Resize/Pad]
```

---

## 🎯 COMPLETE WORKFLOW PROMPT

### End-to-End Image Creation Workflow

```
You are managing the complete blog image creation workflow for LocalAI Agent.

## BLOG POST INFO

**Title:** [Blog post title]
**Topic:** [Main topic]
**Target Keyword:** [Primary SEO keyword]
**Publish Date:** [Date]

## WORKFLOW STEPS

### Step 1: Image Concept
Generate 3 image concept ideas that visually represent the blog topic.

### Step 2: AI Image Prompt
For the chosen concept, create a detailed DALL-E 3 / Midjourney prompt.

### Step 3: Composition Review
Verify the image meets:
- [ ] 16:9 aspect ratio (1200 × 675px)
- [ ] Safe zone compliance (center 80%)
- [ ] Brand alignment (professional, enterprise)
- [ ] Color scheme (blues, grays, whites)

### Step 4: Optimization Instructions
Provide instructions for:
- Resizing to 1200 × 675px
- Compressing to < 200KB
- Converting to WebP format

### Step 5: Alt Text Generation
Create 3 alt text variations (100-125 characters each).

### Step 6: File Naming
Suggest SEO-friendly filename.

### Step 7: Frontmatter Integration
Show how to use in blog post:

```yaml
---
title: "[Blog Title]"
image: "~/assets/images/blog/[filename].webp"
twitterImage: "~/assets/images/blog/[filename]-twitter.webp"
ogImage: "~/assets/images/blog/[filename]-og.webp"
---
```

---

**BEGIN WORKFLOW FOR:**

Blog Post Title: [Insert title]
Topic: [Insert topic]
Target Keyword: [Insert keyword]
```

---

## 📊 IMAGE TYPE SPECIFICATIONS

### Prompt Templates by Image Type

#### 1. Featured Image (Required)

```
Create a 16:9 featured image for a blog post about [TOPIC].

**Specifications:**
- Dimensions: 1200 × 675 pixels
- Style: Professional enterprise technology
- Colors: Blue, gray, white palette
- Content: [Describe main subject]
- Mood: [Authoritative/Innovative/Educational]

**Key Elements:**
- [Element 1]
- [Element 2]
- [Element 3]

**Avoid:**
- [What to exclude]
```

#### 2. Inline Diagram/Chart

```
Create an inline diagram for explaining [CONCEPT].

**Specifications:**
- Width: 800-1200px (flexible height)
- Style: Clean, minimalist diagram
- Colors: Match brand palette
- Text: Legible at web sizes

**Diagram Type:** [Flowchart/Architecture/Comparison/Process]

**Include Labels:**
- [Label 1]
- [Label 2]
- [Label 3]
```

#### 3. Comparison Table Image

```
Create a visual comparison table for [OPTIONS].

**Specifications:**
- Width: 1000-1200px
- Rows: [Number]
- Columns: [Number]
- Style: Clean, readable table design

**Compare:**
| Option | Feature 1 | Feature 2 | Feature 3 |
|--------|-----------|-----------|-----------|
| [A]    | [Data]    | [Data]    | [Data]    |
| [B]    | [Data]    | [Data]    | [Data]    |
```

#### 4. Code Screenshot

```
Format this code snippet as a beautiful screenshot:

```[language]
[Paste code here]
```

**Specifications:**
- Theme: Modern dark theme (Dracula, One Dark, etc.)
- Font: Monospace (Fira Code, JetBrains Mono)
- Font Size: 14-16px
- Padding: 20px around code
- Background: Dark (#1E1E1E or similar)
- Syntax Highlighting: Enabled
- Line Numbers: Optional
```

---

## ✅ QUALITY CHECKLIST PROMPT

### For AI to Verify Image Quality

```
You are a quality assurance specialist reviewing blog images.

## CHECKLIST

Review the image against these criteria:

### Technical Requirements
- [ ] Dimensions are 1200 × 675px (±5% tolerance)
- [ ] Aspect ratio is exactly 16:9
- [ ] File format is WebP (or JPG/PNG)
- [ ] File size is under 200KB
- [ ] Image is sharp (not blurry)
- [ ] Colors are vibrant (not washed out)

### Content Requirements
- [ ] Important content is within center 80% (safe zone)
- [ ] No watermarks or stock photo artifacts
- [ ] Text overlay (if any) is readable
- [ ] Brand colors are used appropriately
- [ ] Image is relevant to blog topic

### Accessibility
- [ ] Alt text is provided (100-125 characters)
- [ ] Alt text describes image content
- [ ] Alt text includes keyword naturally
- [ ] No "image of" or "picture of" phrases

### SEO
- [ ] Filename is descriptive and includes keyword
- [ ] Filename uses hyphens (not underscores)
- [ ] Filename is lowercase
- [ ] Path format is correct: `~/assets/images/blog/filename.webp`

---

**IMAGE TO REVIEW:**
File: [Filename]
Blog Post: [Title]
Target Keyword: [Keyword]

**OUTPUT:**
List any issues found and provide specific fix recommendations.
```

---

## 🔄 IMAGE OPTIMIZATION PROMPT

### For AI to Suggest Optimizations

```
You are an image optimization specialist.

## CURRENT IMAGE

**File:** [Filename]
**Current Dimensions:** [Width × Height]
**Current File Size:** [KB]
**Current Format:** [WebP/JPG/PNG]

## TARGET REQUIREMENTS

**Dimensions:** 1200 × 675 pixels
**Max File Size:** 200KB
**Format:** WebP
**Quality:** 80-85%

## OPTIMIZATION STEPS

Provide specific instructions:

### 1. Resize
```
Current: [Current dimensions]
Target: 1200 × 675px
Method: [Crop/Resize/Pad]
```

### 2. Compress
```
Current Size: [X KB]
Target: < 200KB
Recommended Quality: [80-85%]
Tool: [Squoosh/TinyPNG/etc.]
```

### 3. Format Conversion
```
Current: [Format]
Target: WebP
Tool: [Convertio/Squoosh/Photoshop]
```

### 4. Quality Check
After optimization, verify:
- [ ] Image is still sharp
- [ ] Colors are not degraded
- [ ] Text is still readable
- [ ] File size is under 200KB

---

**IMAGE INFO:**
[Provide current image details]
```

---

## 📱 SOCIAL MEDIA PREVIEW PROMPT

### For AI to Generate Social Previews

```
You are a social media specialist creating image variations for different platforms.

## BASE IMAGE

**Featured Image:** 1200 × 675px (16:9)
**Topic:** [Blog topic]

## PLATFORM REQUIREMENTS

Generate specifications for each:

### Twitter (Summary Card with Large Image)
- **Dimensions:** 1200 × 600px (2:1)
- **Crop:** Center crop from 16:9
- **Safe Zone:** Center 60% vertically

### LinkedIn
- **Dimensions:** 1200 × 627px (1.91:1)
- **Crop:** Minimal crop from 16:9
- **Safe Zone:** Center 90%

### Facebook
- **Dimensions:** 1200 × 630px (1.91:1)
- **Crop:** Minimal crop from 16:9
- **Safe Zone:** Center 90%

### Pinterest (Optional)
- **Dimensions:** 1000 × 1500px (2:3)
- **Format:** Vertical pin
- **Note:** Requires separate design

## OUTPUT

For each platform, provide:
1. Crop instructions from base image
2. Any text overlay adjustments needed
3. Platform-specific optimization tips

---

**BASE IMAGE TOPIC:** [Insert topic]
```

---

*Prompt Version: 1.0 | Created: March 15, 2026*
*Based on: BLOG_IMAGE_SPECIFICATIONS.md*
