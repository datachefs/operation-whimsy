
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.copy-code').forEach(button => {
    button.addEventListener('click', () => {
      const template = button.nextElementSibling;
      const html = template.innerHTML.trim();
      const css = JSON.parse(template.dataset.css || "[]");
      const js = JSON.parse(template.dataset.js || "[]");

      const fullDoc = \`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Example</title>
  \${css.map(href => \`<link rel="stylesheet" href="\${href}">\`).join("\n")}
</head>
<body>
  \${html}
  \${js.map(src => \`<script src="\${src}"></script>\`).join("\n")}
</body>
</html>\`;

      navigator.clipboard.writeText(fullDoc).then(() => {
        button.textContent = "Copied!";
        setTimeout(() => button.textContent = "Copy Code", 2000);
      });
    });
  });
});
