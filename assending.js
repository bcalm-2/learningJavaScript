let a = Number.parseInt(prompt("Enter number"));
let b = Number.parseInt(prompt("Enter number"));
let c = Number.parseInt(prompt("Enter number"));
if (a < b && a < c) {
  console.log(b < c);
  if (b < c) {
    console.log(a, b, c);
  } else {
    console.log(a, c, b);
  }
} else if (b < c && b < a) {
  console.log(c < a);
  if (c < a) {
    console.log(b, c, a);
  } else {
    console.log(b, a, c);
  }
} else if (c < a && c < b) {
  if (a < b) {
    console.log(c, a, b);
  } else {
    console.log(c, b, a);
  }
}
