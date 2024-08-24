// The Array object a collection of multiple items under a single variable name.
var g = [1,2,4.5,true,"abc",[1,2,3]];
console.log(g);

// Everything which is non-primitve is an Object in JS
// Array is not just an object but it also has various useful methods such as map, filter, reduce, copyWithin,...
console.log(typeof g);
console.log(Array.isArray(g));

var a = null, b = null;
// true
console.log(a===b);