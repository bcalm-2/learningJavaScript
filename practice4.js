const a = [1, -3, 2];

function isPositive(element) {
  return element > 0;
}

const filterResult = a.filter(isPositive);
console.log(filterResult);

function mapperFunction(element) {
  console.log("square is " + element * element);
  return element * element;
}
const result = a.map(mapperFunction);

function function2(element) {
  return element > 0 && element < 2;
}

const filterResult2 = a.filter(function2);

console.log(filterResult2);
