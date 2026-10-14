# KaTeX 0.18.4

Site-owned overrides for FixIt's KaTeX stylesheet and copy-tex helper.
Downloaded unmodified from https://registry.npmjs.org/katex/-/katex-0.18.4.tgz.
The MIT license is included in `LICENSE`.

Hugo 0.168.0 bundles KaTeX 0.18.4:
https://github.com/gohugoio/hugo/blob/v0.168.0/internal/warpc/js/package.json

The new renderer emits `.katex-base`, `.katex-strut`, and `.katex-sizing`, which
FixIt 0.4.5's bundled 0.16.22 CSS does not recognize. Keep these assets aligned with
the Hugo version pinned in `netlify.toml`. The matching font files are already
in `static/lib/katex/fonts/` (byte-identical to the 0.18.4 distribution).

If moving away from FixIt, load this stylesheet wherever the new theme renders
KaTeX HTML, and preserve its relative `fonts/` URLs. The typography layer does
not replace KaTeX's font families or superscript positioning.
