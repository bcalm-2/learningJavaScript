let num = Number.parseInt(prompt("Enter number"));
for (let index = 1; index < num; index++) {
  if (index % 3 === 0) {
    document.write("fizz\n");
  } else if (index % 5 === 0) {
    document.write("buzz\n");
  } else if (index % 3 === 0 && index % 5 === 0) {
    document.write("fizzBuzz\n");
  } else {
    document.write(index + "\n");
  }
}
