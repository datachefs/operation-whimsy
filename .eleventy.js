module.exports = function (eleventyConfig) {
  // Enable Markdown and Nunjucks templates
  eleventyConfig.setTemplateFormats(["md", "njk"]);

  // ✅ Copy global assets
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });

  // ✅ Copy all static files inside example subfolders
  eleventyConfig.addPassthroughCopy({ "src/examples": "examples" });

  // ✅ Optional: if you're using standalone .js files elsewhere
  eleventyConfig.addPassthroughCopy("src/**/*.js");

  eleventyConfig.addPassthroughCopy("src/.nojekyll");

  // ✅ Add a collection for all example pages
  eleventyConfig.addCollection("examples", function (collectionApi) {
    return collectionApi.getFilteredByGlob("src/examples/**/index.njk");
  });

  // Shortcode (unchanged)
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
