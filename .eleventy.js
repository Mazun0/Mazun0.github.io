const { DateTime } = require("luxon"); // For fomat calender


module.exports = function (eleventyConfig) {
  eleventyConfig.addFilter("readableDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toFormat("yyyy-MM-dd");
  });
  
  eleventyConfig.addPassthroughCopy("src/resources");

  eleventyConfig.addPassthroughCopy({ "src/resources/css": "css" });
  eleventyConfig.addPassthroughCopy({ "src/resources/javascript": "javascript" });

  eleventyConfig.addCollection("projects", function(collectionApi) {
    return collectionApi.getFilteredByGlob("./src/projects/*.md");
  });

  eleventyConfig.addCollection("blog", function(collectionApi) {
    return collectionApi.getFilteredByGlob("./src/blog/*.md");
  });
  eleventyConfig.addPassthroughCopy("robots.txt");
  eleventyConfig.addFilter("hex", (num) => {
    if (typeof num === "number") {
      return "0x" + num.toString(16).toUpperCase();
    }
    return num; // 
  });

  return {
    dir: {
      input: "src",
      output: "docs",
      includes: "_includes",
    }
  };
  

  
};
