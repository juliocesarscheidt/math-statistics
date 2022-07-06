const fatorial = (n) => {
  if (n === 0) return 1;
  return (n * fatorial(n -1));
}

const result = fatorial(4);
console.log('result', result);
// result 24 = 4 * 3 * 2 * 1
