/* exported pick */
function pick(source, keys) {
  var newObj = {};
  // var objValues = Object.values(source);
  // console.log('values ', objValues);
  var i = 0;
  for (i; i < keys.length; i++) {
    // console.log('keys', keys, 'i:', keys[i]);
    for (var property in source) {
      if (property === keys[i]) {
        newObj = Object.assign({}, property);
        // console.log('newObj: ', newObj);

      }

    }
  }
  return newObj;
}
