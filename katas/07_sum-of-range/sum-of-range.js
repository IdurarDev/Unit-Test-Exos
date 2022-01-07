function range (start, end) {
  let sum = 0;
  for (let i = start; i <= end; i++) {
    sum += i;
  }
  return sum
}
// function range (start, end) {
//   for (let i = start; i <= end; i++) {
//      console.log(i);
//   }
// }

// console.log(range(1, 10))

function sum (arr) {
  return arr;
}

console.log(sum(range(1, 10)))
