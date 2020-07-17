var x = prompt("Enter OS and version with space e.g. windwos 10 : ");
var y = x.split(" ");

console.log(y);

document.write(
  "<h1><br><br>The OS name is " + y[0] + " and version is " + y[1] + "</h1>"
);
