function fib() {
  const list = [];
  list[0] = 0;
  list[1] = 1;
  for (let i = 2; i < 100; i++) {
    list[i] = list[i - 1] + list[i - 2];
  }
  return list;
}

function numsToStrings(array) {
  return _.map(array, function foo(o) {
    return `${o}`;
  });
}

function numEvenNums(array) {
  return _.filter(array, function foo(o) {
    return (o % 2) == 0;
  });
}

console.log(fib());
console.log(numsToStrings(fib()));
console.log(numEvenNums(fib()));