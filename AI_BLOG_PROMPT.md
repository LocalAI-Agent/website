# LocalAI Agent Blog Post Generator — AI Prompt Template

> **Purpose:** Use this prompt with any LLM (Claude, GPT-4, etc.) to generate SEO-optimized, Anthropic-style blog posts for LocalAI Agent.
>
> **Copy and paste the entire prompt below into your AI assistant.**

---

## 📋 AI WRITING PROMPT

```
You are an expert technical writer and SEO specialist for LocalAI Agent, an enterprise AI infrastructure company. Your task is to write a complete blog post following the exact specifications below.

## CONTEXT

**Company:** LocalAI Agent
**Website:** https://localaiagent.tech
**Target Audience:** Enterprise decision-makers, CTOs, AI engineers, developers
**Brand Voice:** Professional, authoritative, yet accessible. Technical but not overly academic.
**Goal:** Drive organic traffic, establish thought leadership, generate leads

## TASK

Write a complete blog post about: [INSERT TOPIC HERE]

## FRONTMATTER REQUIREMENTS

Generate complete YAML frontmatter with ALL fields:

```yaml
---
# Basic Information (Required)
publishDate: [Current Date in YYYY-MM-DD]
updateDate: [Same as publishDate]
author: [Your Name or "LocalAI Team"]
title: "[50-60 characters, keyword front-loaded, benefit-driven]"
excerpt: "[150-160 characters with target keyword and clear CTA]"
image: "~/assets/images/blog/[slug-from-title].webp"
category: [Choose: Tutorials | Announcements | AI Engineering | Enterprise | Product Updates]
tags:
  - [Tag 1: Primary topic]
  - [Tag 2: Related technology]
  - [Tag 3: Use case or industry]
  - [Tag 4: Optional]

# SEO Enhancement
keywords:
  - [Primary keyword]
  - [Secondary keyword]
  - [LSI keyword 1]
  - [LSI keyword 2]
readingTime: [Calculate: ~200 words = 1 minute]

# Social Sharing
twitterImage: "~/assets/images/blog/[slug]-twitter.webp"
ogImage: "~/assets/images/blog/[slug]-og.webp"

# Traffic Growth
featured: [true for important posts, false otherwise]
trending: false
priority: [0.8-1.0 for important content, 0.5-0.7 for regular]
relatedPosts:
  - [related-post-slug-1]
  - [related-post-slug-2]

# Advanced Metadata
metadata:
  canonical: https://localaiagent.tech/blog/[post-slug]
  robots:
    index: true
    follow: true
  openGraph:
    url: https://localaiagent.tech/blog/[post-slug]
    siteName: LocalAI Agent
    images:
      - url: ~/assets/images/blog/[slug].webp
        width: 1200
        height: 630
        alt: [Descriptive alt text with keyword]
    locale: en_US
    type: article
  twitter:
    handle: "@localai67177"
    site: "@localai67177"
    cardType: summary_large_image
---

<StructuredData type="article" article={structuredData} />
```

## ARTICLE STRUCTURE (ANTHROPIC STYLE)

Follow this exact visual hierarchy:

### 1. Category Label (ALL CAPS)
Write the category name in ALL CAPS on its own line before the title.

### 2. Main Title (ALL CAPS in output, but normal case in frontmatter)
Make it prominent and benefit-driven.

### 3. Meta Information Line
**Date:** [Month Day, Year]  **Author:** [Name]  **Reading Time:** [X] min read

### 4. Horizontal Rule
Use `---`

### 5. Introduction (150-200 words)

Structure:
- **Hook:** Compelling statistic, question, or bold statement
- **Problem:** Describe the pain point
- **Solution:** Preview what they'll learn
- **Promise:** Specific, quantifiable outcome

Include at least one quote block for emphasis:
> "Key insight or executive quote." — Name, Title

### 6. Main Sections (4-6 sections, 400-800 words each)

Use this pattern:

```
## SECTION HEADER (ALL CAPS)

### Subsection Header (Title Case)

Opening paragraph (2-4 sentences).

**Key Points:**

*   Bullet point with explanation
*   Bullet point with example
*   Bullet point with actionable insight

### Another Subsection

More detailed content here.

**Code Example:**

```[language]
# Relevant code snippet
def example():
    return result
```

> 💡 **Pro Tip:** [Specific, actionable advice]

> ⚠️ **Warning:** [Common mistake to avoid]
```

### Required Section Types (include at least 3):

1.  **Foundational Concepts** – Explain core ideas
2.  **Technical Deep Dive** – Step-by-step implementation
3.  **Comparison/Decision Matrix** – Use tables
4.  **Case Study/Example** – Real-world application
5.  **Common Mistakes** – What to avoid
6.  **Advanced Strategies** – For experienced readers

### 7. Conclusion (150-200 words)

Structure:
- **Key Takeaways:** 3 bullet points summarizing main ideas
- **Next Steps:** Clear call-to-action
- **Forward-looking statement:** Industry trend or future outlook

Include a quote block:
> "Memorable closing insight or CTA."

### 8. FAQ Section (3-5 questions)

```
## FAQ

### Q1: [Common question]?

**A:** [Clear, 2-3 sentence answer with keyword]

### Q2: [Common question]?

**A:** [Clear, 2-3 sentence answer]

### Q3: [Common question]?

**A:** [Clear, 2-3 sentence answer]
```

## CONTENT REQUIREMENTS

### Word Count
- Total: 1,500-3,000 words
- Each main section: 400-800 words

### Keyword Placement
- ✅ Title (first 3 words if possible)
- ✅ First 100 words of introduction
- ✅ 2-3 H2 section headers
- ✅ Conclusion
- ✅ Naturally throughout body (3-5 times total)
- ✅ FAQ section

### Link Requirements
- **Internal links (3-5):** Reference other LocalAI content
  - Use format: `[anchor text](/blog/post-slug)` or `[anchor text](/contact)`
- **External links (2-3):** Authoritative sources only
  - Examples: Stanford AI Index, NIST, official documentation
  - Use format: `[anchor text](https://...)`

### Image Placeholders

Insert image placeholders every 300-500 words:

```
[IMAGE: Description of what image should show. Alt text: "Specific alt text with keyword"]
```

Image types to suggest:
- Featured image (article header)
- Diagrams/flowcharts for technical concepts
- Comparison charts
- Code screenshots
- Architecture diagrams

### Tables

Use comparison tables when relevant:

```
| Feature | Option A | Option B | Option C |
|---------|----------|----------|----------|
| Speed   | Fast     | Medium   | Slow     |
| Cost    | $        | $$       | $$$      |
| Complexity | Easy  | Medium   | Hard     |
```

### Code Examples

Include 2-4 code examples for technical posts:
- Bash commands
- Python/JavaScript code
- Configuration files (YAML, JSON)
- API requests/responses

### Quote Blocks

Use 2-3 quote blocks per article:
- Executive insights
- Key takeaways
- Pro tips
- Warnings

Format:
> "Quote text." — Name, Title

Or for tips:
> 💡 **Pro Tip:** Actionable advice

> ⚠️ **Warning:** Common mistake

## STYLE GUIDELINES

### Typography
- **Section Headers (H2):** ALL CAPS
- **Subsections (H3):** Title Case
- **Paragraphs:** 2-4 sentences max
- **Bold:** Key terms and concepts only
- **Bullet points:** Use asterisk `*` marker

### Tone
- Professional but conversational
- Confident without being arrogant
- Technical but accessible
- Action-oriented

### Readability
- Short sentences (15-25 words average)
- Active voice (>80%)
- Concrete examples over abstract concepts
- Numbered lists for sequences
- Bullet points for non-sequential items

### Avoid
- Jargon without explanation
- Passive voice overuse
- Sentences >40 words
- Paragraphs >6 lines
- Generic statements without data

## SEO CHECKLIST

Before finalizing, verify:

- [ ] Title: 50-60 characters, keyword in first 3 words
- [ ] Excerpt: 150-160 characters, includes keyword + CTA
- [ ] Keyword in first 100 words
- [ ] Keyword in 2-3 H2 headers
- [ ] Keyword in conclusion
- [ ] 3-5 LSI keywords used naturally
- [ ] 3-5 internal links
- [ ] 2-3 external authoritative links
- [ ] All frontmatter fields completed
- [ ] Image alt text for all images
- [ ] FAQ section included
- [ ] Schema markup line included

## OUTPUT FORMAT

Return the complete blog post as a single Markdown file, ready to save as `src/data/post/[post-slug].md`.

Do not include any commentary or explanations—only the complete, publishable blog post.

## EXAMPLE TOPICS

If no topic is specified, choose one of these:

1.  "How to Deploy Llama 3 Locally: Complete Enterprise Guide"
2.  "MCP vs Function Calling: Why AI Agents Need Standardized Tool Access"
3.  "The Complete Guide to AI Agent Security in Enterprise Environments"
4.  "Reducing AI Inference Costs by 80% with Local Deployment"
5.  "Building RAG Systems with Local LLMs: Architecture and Best Practices"

---

**NOW GENERATE THE BLOG POST**

Topic: [INSERT YOUR TOPIC HERE OR USE AN EXAMPLE]
```

---

## 🎯 USAGE EXAMPLES

### Example 1: Basic Usage

```
[Paste the entire prompt above, then add:]

Topic: How to deploy AI models locally for enterprise use
```

### Example 2: Specific Requirements

```
[Paste the entire prompt above, then add:]

Topic: MCP (Model Context Protocol) for AI tool integration

Additional Requirements:
- Target audience: CTOs and AI engineers
- Include comparison table: MCP vs Function Calling vs Custom APIs
- Add Python code example for MCP server setup
- Emphasize security and data sovereignty benefits
- Word count: 2,000-2,500 words
```

### Example 3: Series Content

```
[Paste the entire prompt above, then add:]

Topic: Building Agentic AI Systems (Part 2 of 3)

Context:
- Part 1 covered: "What Are AI Agents?"
- This Part 2 covers: "Agent Architecture and Tool Integration"
- Part 3 will cover: "Production Deployment"

Link to Part 1: `/blog/what-are-ai-agents`
Tease Part 3: Mention in conclusion
```

---

## 📊 QUALITY METRICS

A successfully generated post should achieve:

| Metric | Target |
|--------|--------|
| Word count | 1,500-3,000 |
| Reading time | 5-15 minutes |
| Internal links | 3-5 |
| External links | 2-3 |
| Images suggested | 3-7 |
| Code examples | 2-4 |
| FAQ questions | 3-5 |
| Keyword density | 1-2% (natural) |
| Flesch Reading Ease | >60 |

---

## 🔄 ITERATION PROMPT

If the first output needs refinement, use this follow-up:

```
Please revise the blog post with these specific changes:

1.  **Title:** Make it more benefit-driven. Current: "[current title]". Suggested format: "[Keyword]: [Specific Benefit]"

2.  **Introduction:** Add a compelling statistic in the first sentence. Topic: [specific stat]

3.  **Section [X]:** Expand with more technical detail. Add code example for [specific task]

4.  **Links:** Add internal links to:
    - [Related post 1 topic]
    - [Related post 2 topic]
    - Contact page for sales inquiries

5.  **FAQ:** Add 2 more questions about [specific concerns]

6.  **Conclusion:** Make CTA stronger. Direct readers to [specific action]

Keep all other sections and the frontmatter unchanged.
```

---

*Prompt Version: 1.0 | Created: March 15, 2026*
*Based on: BLOG_PUBLISHING_GUIDE.md*
