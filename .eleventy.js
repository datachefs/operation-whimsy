module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });
  eleventyConfig.addPassthroughCopy("src/**/*.js");
  eleventyConfig.addPassthroughCopy("src/**/**/*.js");

  return {
    pathPrefix: "/operation-whimsy",
    dir: {
      input: "src",
      includes: "_includes",
      layouts: "_layouts",
      output: "docs"  // <-- this is the key change
    }
  };
};
