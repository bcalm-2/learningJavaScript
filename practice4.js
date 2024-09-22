let num = Number.parseInt(prompt("Enter number"));
for (let index = 1; index < num; index++) {
  if (index % 2 === 0) {
    document.write("even\n");
  } else {
    document.write("odd\n");
  }
}
