[![Netlify Status](https://api.netlify.com/api/v1/badges/597d4bdd-8685-46b4-92e7-a4f3248d6a62/deploy-status)](https://app.netlify.com/projects/ruiying/deploys)

# Blog

This blog is built with [Hugo](https://gohugo.io/), a fast and flexible static site generator.

## Local Development

### Prerequisites

- [Hugo](https://gohugo.io/installation/) **0.168.0 extended**, matching Netlify
  and the bundled KaTeX 0.18.4 stylesheet.
- **FixIt 0.4.5**, pinned by the `themes/FixIt` Git submodule.

### Running Locally

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd blog
   ```

2. Initialize and update the FixIt theme submodule:
   ```bash
   git submodule update --init --recursive
   ```

3. Start the Hugo development server:
   ```bash
   hugo server
   ```

4. Open your browser and navigate to `http://localhost:1313`

The site will automatically reload when you make changes to the content or configuration.

### Building for Production

To build the static site for production:

```bash
hugo
```

The generated site will be available in the `public/` directory.

`netlify.toml` pins Hugo under `[build.environment]`, so production, deploy
previews, and branch builds use the same release. Netlify checks out the theme
revision recorded in the Git submodule. These settings take effect when the
repository changes are deployed; no separate Hugo version setting is needed
in the Netlify dashboard.

## Post typography

Posts use locally hosted **Lora** for titles and headings, **Source Serif 4**
for prose (including real italics and variable weights), and **Geist** for
contents navigation, metadata, tables, and captions. Code stays monospace;
Chinese text uses the system CJK fallback. The reading layout includes fluid
type sizes, a bounded column width, and spacing for paragraphs, lists, quotes,
tables, and figures. Colors follow the active theme in light and dark mode.

All settings live in `[params.typography]` in `hugo.toml`: change `headingFont`,
`bodyFont`, `uiFont`, `bodySize`, `titleSize`, `lineHeight`, or `measure` to adjust the design.
`enable = false` turns the layer off. `sections` limits where it loads; by
default only individual posts use it. A post can opt out with `typography: false`
in its front matter. About, Research, Publications, and listing pages keep their
own layouts.

The implementation belongs to this site, outside the theme submodule:

- `assets/css/typography/prose.css`: reusable reading styles and design tokens.
- `assets/css/typography/fixit.css`: FixIt integration, including desktop and
  mobile contents navigation that shares the post typography tokens.
- `layouts/_partials/typography/head.html`: loads fingerprinted stylesheets.
- `static/fonts/`: local WOFF2 fonts and their licenses; no runtime font service.

### Switching themes

1. Keep the files above and `[params.typography]` when installing a new theme.
2. Set `adapter = ""` to remove the FixIt-specific integration.
3. Call `{{ partial "typography/head.html" . }}` from the new theme's head hook,
   **after its main stylesheet**, passing the current page as `.`. FixIt's hook
   is currently configured in `[params.customPartials].head`.
4. Set `articleSelector`, `titleSelector`, `contentSelector`, and `metaSelector`
   to match the new theme's article, title, rendered Markdown, and metadata
   elements. Alternatively, add `.blog-article`, `.blog-title`, `.blog-prose`,
   and `.blog-meta` to those elements and remove the selector settings.

The core styling needs no JavaScript or changes to post Markdown. A future theme
may need a small adapter for its own layout or shortcode styles. Preview a long
post on desktop and mobile, including tables, code, equations, and both color
modes, after switching.

### Math rendering

Equations retain KaTeX's own math fonts. `assets/lib/katex/` overrides FixIt's
older stylesheet and copy helper with KaTeX **0.18.4**, matching the renderer
in Hugo **0.168.0**. `netlify.toml` pins the same Hugo version for all builds.
When upgrading Hugo, check its embedded KaTeX version and update these assets
together: mismatched versions can break superscripts such as `\delta^{13}C`.
The FixIt adapter also loads `assets/js/typography/toc-math.js` on math posts
to reuse rendered headings in the desktop and mobile contents menus, replacing
the theme's raw TeX labels. This is separate from the reusable CSS typography.
