function arrayOfMultiples(num, length) {
  let m = [];
  for (let i = 1; i <= length; i++) {
    m.push(num * i);
  }
  return m;
}

console.log(arrayOfMultiples(7, 5));
console.log(arrayOfMultiples(12, 10));
console.log(arrayOfMultiples(17, 6));
