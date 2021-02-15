/* exported pick */
function pick(source, keys) {
  var newObj = {};
  for (var property in source) {
    for (var i = 0; i < keys.length; i++) {
      if (property === keys[i]) {
        newObj[property] = source[property];
      }
      if (newObj[property] === undefined) {
        delete newObj[property];
      }
    }
  }
  return newObj;
}
