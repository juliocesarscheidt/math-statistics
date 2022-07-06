class Factorization {
  constructor() {
    this.counter = 0;
  }
  byTwo(n) {
    if (n <= 1) {
      return n;
    }
    this.counter += 1;
    const next = n / 2;
    console.log('next', next);
    return this.byTwo(next);
  }
  getCounter() {
    return this.counter;
  }
}

const target = 1000000;
const factorization = new Factorization();
factorization.byTwo(target);
const result = factorization.getCounter();
console.log('result', result);
// result 20
