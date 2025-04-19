module.exports = function (eleventyConfig) {
  // Enable both Markdown and Nunjucks templates
  eleventyConfig.setTemplateFormats(["md", "njk"]);

  // Passthrough assets and JS files
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });
  eleventyConfig.addPassthroughCopy("src/**/*.js");

  // ✅ Fix: Declare as a *paired* shortcode (content is passed between open/close tags)
  eleventyConfig.addPairedShortcode("exampleBlock", function (content) {
    return `
<div class="example-container">
  ${content}
</div>
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
