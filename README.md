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
`enable = false` turns the layer off. `sections` limits the reading styles; by
default only individual posts use them. A post can opt out with `typography: false`
in its front matter. The Geist navigation and font declarations load site-wide;
The `/posts/` overview uses Lora for its heading and listed titles, with Geist
for years, dates, and pagination. Its compact title scale is separate from the
article title size; long titles wrap on narrow screens. About, Research,
Publications, and taxonomy listings keep their own content layouts.

The menu uses the site's name, text links, and an underline for the active
section. `pageRef` connects each menu item to its Hugo page, keeping Writing
active on posts too. Posts place categories above the title, followed by the
publication date and reading time. The footer keeps tags, the update date,
license, and source/share links, with previous/next links scoped to posts via
`params.navigation.inSection`.

The implementation belongs to this site, outside the theme submodule:

- `assets/css/typography/prose.css`: reusable reading styles and design tokens.
- `assets/css/typography/fixit.css`: FixIt integration, including desktop and
  mobile contents navigation, post headers, and footers.
- `assets/css/typography/navigation.css`: site-wide FixIt menu styling.
- `assets/css/typography/archive.css`: FixIt section overview typography,
  loaded only for the configured sections (including their pagination pages).
- `layouts/_partials/typography/head.html`: loads fingerprinted stylesheets.
- `layouts/_partials/typography/post-header.html`: reusable category/title markup.
- `layouts/posts/single.html`: FixIt 0.4.5 layout override for the header and
  compact metadata. It retains the theme's content, TOC, comments, and other
  hooks, and falls back to the original header when typography is disabled.
  Compare this file with the upstream layout when upgrading FixIt.
- `static/fonts/`: local WOFF2 fonts and their licenses; no runtime font service.

### Switching themes

1. Keep the files above and `[params.typography]` when installing a new theme.
2. Set `adapter = ""` to remove the FixIt-specific integration.
   Remove `layouts/posts/single.html` so the new theme can supply its own post
   layout. The optional `typography/post-header.html` partial can be reused by
   passing a dictionary with `Page`, `Title`, and merged page `Params`.
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
