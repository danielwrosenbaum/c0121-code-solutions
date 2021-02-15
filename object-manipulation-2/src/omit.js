/* exported omit */
function omit(source, keys) {
  var newObj = {};
  for (var property in source) {
    newObj[property] = source[property];
    for (var i = 0; i < keys.length; i++) {
      if (keys[i] === property) {
        delete newObj[property];
      }
    }
  }
  return newObj;
}
