var a = prompt("Enter the marks : ");

if (a < 40) {
  var b = "Grade C";
} else if (a > 40 && a < 70) {
  var b = "Grade B";
} else if (a > 70) {
  var b = "Grade A";
} else {
  alert("Go to school, its still not too late ;)");
}

document.write(
  "<h1><br><br> Marks are " + a + " and your grade is " + b + "</h1>"
);
