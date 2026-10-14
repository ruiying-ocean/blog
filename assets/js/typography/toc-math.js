// FixIt's TOC keeps raw TeX in heading labels. Reuse Hugo's rendered heading
// before FixIt moves the desktop TOC and attaches its navigation handlers.
document.querySelectorAll('#toc-static a[href^="#"], #toc-dialog a[href^="#"]').forEach((link) => {
  const heading = document.getElementById(decodeURIComponent(link.hash.slice(1)));
  const title = heading?.querySelector(':scope > span');
  if (title?.querySelector('.katex')) {
    link.replaceChildren(...Array.from(title.childNodes, (node) => node.cloneNode(true)));
  }
});
