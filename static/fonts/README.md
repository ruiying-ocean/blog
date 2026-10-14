# Local blog fonts

Downloaded from the Google Fonts CSS API on 2026-10-14. These unmodified WOFF2
subsets are served locally; the site does not contact Google to render text.

| Family | Files | Variable axes | Upstream |
| --- | --- | --- | --- |
| Geist | Latin and Latin Extended, normal | Weight 100–900 | https://github.com/google/fonts/tree/main/ofl/geist |
| Lora | Latin and Latin Extended, normal and italic | Weight 400–700 | https://github.com/google/fonts/tree/main/ofl/lora |
| Source Serif 4 | Latin, Latin Extended, and Greek, normal and italic | Weight 200–900, optical size 8–60 | https://github.com/google/fonts/tree/main/ofl/sourceserif4 |

All families use the SIL Open Font License 1.1. Each family directory contains
its original `OFL.txt`. The Unicode ranges in `assets/css/typography/fonts.css`
allow browsers to fetch only the needed subsets. CJK and other scripts fall
back to the fonts configured in `hugo.toml`.

Source requests (using a current browser user agent for variable WOFF2 output):

```text
https://fonts.googleapis.com/css2?family=Geist:wght@100..900&display=swap
https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400..700;1,400..700&family=Source+Serif+4:ital,opsz,wght@0,8..60,200..900;1,8..60,200..900&display=swap
```

When updating fonts, download the matching WOFF2 files and licenses, retain the
API's Unicode ranges, and update `fonts.css` with the local paths. When adding
another family, define its `@font-face` in `fonts.css` and select it in `hugo.toml`.
