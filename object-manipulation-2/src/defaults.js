/* exported defaults */
// function defaults(target, source) {
//   console.log('target', target, 'source', source);
//   for (var property in source) {
//     if (source[property] !== target[property]) {
//       target[property] = source[property];
//     }

//   }
//   console.log('target 2', target, 'source 2', source);
// }

// function defaults(target, source) {
//   for (var keys in source) {
//     target.hasOwnProperty(keys) || (target[keys] = source[keys]);
//   }
//   console.log(target);
// }

function defaults(target, source) {

  Object.assign(target, source);

}

// function defaults(target, source) {
//   for (var property in source) {
//     if (source[property] !== target[property]) {
//       target[property] = source[property];
//     }
//   }
// }

// function defaults(target, source) {
//   if (target === source) {
//     return;
//   }
//   for (var key in source) {
//     target[key] = source[key];
//     if (source[key] )
//   }
// }
// function defaults(target, source) {
//   for (var keys in source) {
//     target.hasOwnProperty(keys) || (target[keys] = source[keys]);
//   }
//   console.log(target);
// }

// function defaults(target, source) {
//   for (var property in source) {
//     for (var property2 in target) {
//       if (property !== property2) {
//         console.log('tp: ', target, target[property2], 'sp: ', source[property]);
//         target[property] = source[property];
//       }
//     }
//   }
// }
