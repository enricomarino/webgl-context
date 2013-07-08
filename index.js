
/**
 * Get a WebGL rendering context, if availale.
 *
 * @param {HTMLCanvasElement} canvas The canvas element.
 * @param {Object} options Options for creating the context.
 * @return {WebGLRenderingContext} A WebGL rendering context 
 *   or `null` if not available.
 */

module.exports = function (canvas, options) {
  var options = options || {};
  var context = canvas.getContext('webgl', options);

  if (!context) {
    context = canvas.getContext('experimental-webgl', options);
  }

  return context;
};
