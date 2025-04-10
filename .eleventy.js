module.exports = function (eleventyConfig) {
  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "docs"
    }
  };
};
module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets");
  return {
    dir: {
      input: "src",
      output: "dist"
    }
  };
};