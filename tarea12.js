function getFibonacciSequence(num) {
  if (num === 1) return [1];

  let fibonacci = [1, 1];
  for (let i = 2; i < num; i++) {
    fibonacci = [...fibonacci, fibonacci[i - 2] + fibonacci[i - 1]];
  }
  return fibonacci;
}

const fibonacci = getFibonacciSequence(6);

console.log(fibonacci);
