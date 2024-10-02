let num1 = number.parseInt(prompt("Enter the number1"));
let num2 = number.parseInt(prompt("Enter the number2"));
let operation = prompt("Enter the opetation name......");
function sum(number1, number2) {
  return number1 + number2;
}
function sub(number1, number2) {
  return number1 + number2;
}
function mul(number1, number2) {
  return number1 + number2;
}
function div(number1, number2) {
  return number1 + number2;
}

if (operation === "sum") {
  console.log(sum(num1, num2));
} else if (operation === "sub") {
  console.log(sub(num1, num2));
} else if (operation === "mul") {
  console.log(mul(num1, num2));
} else if (operation === "div") {
    console.log(div(num1, num2))
} else {
  console.log("operation not supported");
}
