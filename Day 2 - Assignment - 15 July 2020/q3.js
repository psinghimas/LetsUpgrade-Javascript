// array

// concat()			Joins two or more arrays, and returns a copy of the joined arrays

var a = ["aa", "bb", "cc"];
var b = ["dd", "ee", "ff"];

var c = a.concat(b);

console.log(c);

// find()			Returns the value of the first element in an array that pass a test

var ages = [3, 10, 18, 20, 10, 50, 45, 60, 20];

function chk(age) {
  return age >= 18;
}

var c = ages.find(chk);
console.log(c);

// findIndex()			Returns the index of the first element in an array that pass a test

function chk(age) {
  return age >= 45;
}

var c = ages.findIndex(chk);
console.log(c);

// forEach()			Calls a function for each array element

// includes()			Check if an array contains the specified element

var c = ages.includes(20);
console.log(c);

// indexOf()			Search the array for an element and returns its position

var c = ages.indexOf(10);
console.log(c);

// isArray()			Checks whether an object is an array

var c = Array.isArray(ages);
console.log(c);

// join()			Joins all elements of an array into a string

var c = a.join();
console.log(c);

// pop()			Removes the last element of an array, and returns that element

console.log(a);

var c = a.pop();
console.log(c);

// push()			Adds new elements to the end of an array, and returns the new length

a.push("hola");
console.log(a);

// reverse()			Reverses the order of the elements in an array

console.log(b);
b.reverse();
console.log(b);

// sort()			Sorts the elements of an array
ages.sort();
console.log(ages);
