var utils = {};

if (!window.requestAnimationFrame) {
  window.requestAnimationFrame = (
    window.requestAnimationFrame ||
    window.requestAnimationFrame ||
    window.requestAnimationFrame ||
    window.requestAnimationFrame ||
    function (callback) {
      return window.setTimeout(callback, 1000/60);
    }
  )
};
