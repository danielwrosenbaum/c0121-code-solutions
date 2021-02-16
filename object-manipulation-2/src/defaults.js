/* exported defaults */
function defaults(target, source) {
  for (var property in source) {
    for (var property2 in target) {
      if (property !== property2) {
        Object.assign(source, target);
      }
    }
  }
  Object.assign(target, source);
}
