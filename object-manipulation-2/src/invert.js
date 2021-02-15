/* exported invert */

function invert(source) {
  var newObj = {};
  for (var property in source) {
    newObj[source[property]] = property;
  }
  return newObj;
}
