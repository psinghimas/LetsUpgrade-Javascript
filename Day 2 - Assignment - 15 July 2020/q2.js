// String methods

var test = "I like letsupgrade community";

// charAt() Returns the character at the specified index (position)
var a = test.charAt(4);
console.log(a);

//charCodeAt()					Returns the Unicode of the character at the specified index

var a = test.charCodeAt(4);
console.log(a);

//concat()					Joins two or more strings, and returns a new joined strings

var a = "Lets";
var b = "Upgrade";

console.log(a.concat(b));

//endsWith()					Checks whether a string ends with specified string/characters

var str = "Hello world, this is sam.";
var n = str.endsWith("sam.");
console.log(n);

//includes()					Checks whether a string contains the specified string/characters

var str = "Hello world, this is sam.";
var n = str.includes("hola");
console.log(n);

//indexOf()					Returns the position of the first found occurrence of a specified value in a string

var str = "Hello world, this is sam.";
var n = str.indexOf("sam.");
console.log(n);

//lastIndexOf()					Returns the position of the last found occurrence of a specified value in a string

var n = str.lastIndexOf("this");
console.log(n);

//repeat()					Returns a new string with a specified number of copies of an existing string

var n = str.repeat(5);
console.log(n);

//replace()					Searches a string for a specified value, or a regular expression, and returns a new string where the specified values are replaced

var n = str.replace("sam", "param");
console.log(n);

//search()					Searches a string for a specified value, or regular expression, and returns the position of the match

var n = str.search("this");
console.log(n);

//slice()					Extracts a part of a string and returns a new string

var n = str.slice(10, 19);
console.log(n);

//split()					Splits a string into an array of substrings

var n = str.split(" ");
console.log(n);

//toLocaleLowerCase()					Converts a string to lowercase letters, according to the host's locale

var n = str.toLocaleLowerCase();
console.log(n);

//toLocaleUpperCase()					Converts a string to uppercase letters, according to the host's locale

var n = str.toLocaleUpperCase();
console.log(n);

//toLowerCase()					Converts a string to lowercase letters

var n = str.toLowerCase();
console.log(n);

//toUpperCase()					Converts a string to uppercase letters

var n = str.toUpperCase();
console.log(n);

//trim()					Removes whitespace from both ends of a string

var str = "       Hello World!        ";
console.log(str.trim());
