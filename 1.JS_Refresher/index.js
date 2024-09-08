// var a;
// // Initially the value of any variable will be 'undefined'
// console.log("value of a:", a);
// a = 2;
// console.log("value of a:", a);

// // There is no difference betweem single quote & double quote string.
// var age = 21;
// var name = 'Harsh';
// var c = "Hi my name is "+name+" and age is" + age;
// console.log("value of a:", c);

// var d = "hi"+
// "hello";
// console.log('Value of c is: ',c);

// // String interpolation
// // Using `` we can store multiple lines of a string and ${} to use dynamic value
// var s3 = `Hi, my name is ${name}
// and my age is ${age}, how are you doing today?`;
// console.log(s3);

var x;
// undefined
console.log(typeof x);

x = 10;
// number
console.log(typeof x);

x = "s";
// string
console.log(typeof x);

x = true;
// boolean
console.log(typeof x);

x = null;
// object
console.log(typeof x);

x = BigInt(123);
x = `12563675n`
console.log(typeof x);

x = Symbol("foo");
console.log(x);
// symbol
console.log(typeof x);