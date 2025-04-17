module.exports = function(eleventyConfig) {
  // Enable both .md and .njk inputs
  eleventyConfig.setTemplateFormats(["md", "njk"]);

  // Passthrough assets and JS files
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });
  eleventyConfig.addPassthroughCopy("src/**/*.js");

  // Paired shortcode for rendering and copying examples
  eleventyConfig.addPairedShortcode("copyExample", function(content, css = [], js = []) {
    const cssLinks = (css || []).map(href =>
      `<link rel="stylesheet" href="${href}">`
    ).join("\n");

    const jsLinks = (js || []).map(src =>
      `<script src="${src}"></script>`
    ).join("\n");

    return `
      <div class="demo">${content}</div>
      <button class="copy-code">Copy Code</button>
      <template class="source-template" data-css='${JSON.stringify(css)}' data-js='${JSON.stringify(js)}'>
${content}
      </template>
    `;
  });

  return {
    pathPrefix: "/operation-whimsy",
    dir: {
      input: "src",
      includes: "_includes",
      layouts: "_includes/layouts",
      output: "docs"
    }
  };
};
