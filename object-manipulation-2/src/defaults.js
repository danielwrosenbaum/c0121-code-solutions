/* exported defaults */
function defaults(target, source) {
  delete target.property;
  Object.assign(target, source);
}
