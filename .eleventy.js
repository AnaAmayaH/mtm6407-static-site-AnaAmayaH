module.exports = function(eleventyConfig) {
  // Esto copia la carpeta de assets a la salida final
  eleventyConfig.addPassthroughCopy("src/assets");

  return {
    dir: {
      input: "src",         // carpeta de entrada
      includes: "_includes",// si usas plantillas parciales
      output: "docs"        // carpeta de salida para GitHub Pages
    }
  };
};