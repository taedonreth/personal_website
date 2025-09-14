# Adding Newsletter Posts

This folder contains all newsletter posts as Markdown files. To add a new post:

## 1. Create a new `.md` file

Create a new file in this directory with a URL-friendly name (lowercase, hyphens for spaces).

Example: `my-new-post.md`

## 2. Add frontmatter

At the top of your file, add YAML frontmatter with the required metadata:

```yaml
---
title: "Your Post Title"
excerpt: "A brief description of your post content."
date: "2024-01-20"
---
```

## 3. Write your content

After the frontmatter, write your post content using Markdown:

````markdown
# Your Main Heading

Your paragraph content here.

## Subheading

- Bullet points
- More content
- Lists work great

### Code blocks

```bash
npm install something
```
````

**Bold text** and _italic text_ are supported.

```

## 4. Save and deploy

That's it! Your post will automatically appear on the newsletter page and be accessible at `/newsletter/your-post-slug`.

## Markdown Features Supported

- Headings (`#`, `##`, `###`)
- Paragraphs
- Lists (bulleted and numbered)
- Code blocks with syntax highlighting
- Bold (`**text**`) and italic (`*text*`)
- Links (`[text](url)`)
- Images (`![alt](url)`)

## File Naming

- Use lowercase letters
- Use hyphens instead of spaces
- Keep it descriptive but concise
- Examples: `getting-started-with-react.md`, `my-coding-journey.md`
```
