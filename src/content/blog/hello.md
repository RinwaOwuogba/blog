---
title: 'Hello — and what this is'
description: 'A first post, and a quick tour of how this blog works.'
pubDate: 'Aug 06 2026'
heroImage: '../../assets/hello-cover.png'
---

This is my corner of the internet, a place to write about engineering, web3, and how building
software is changing in the agentic era. No algorithm, no paywall, just notes I want to keep and
share.

A quick note on how it's built, since that's on-brand for the writing here: it's a static site, so
every post is just a Markdown file I own. Adding one looks like this — no editor, no database:

```ts
// src/content/blog/my-post.md
export const frontmatter = {
  title: 'A thing I learned',
  description: 'The short version.',
  pubDate: 'Aug 07 2026',
};
```

Code blocks get real syntax highlighting out of the box, which matters when most of what I write
has code in it:

```go
// A tiny Go handler — highlighted the same way it would be in your editor.
func handleHealth(w http.ResponseWriter, r *http.Request) {
    w.Header().Set("Content-Type", "application/json")
    json.NewEncoder(w).Encode(map[string]string{"status": "ok"})
}
```

More soon.
