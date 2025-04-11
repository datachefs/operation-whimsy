
module.exports = function(eleventyConfig) {
eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });
  return {
    pathPrefix: "/operation-whimsy",
    dir: {
      input: "src",
      includes: "_includes",
      layouts: "_layouts",
      output: "_site"
    }
  };
};
