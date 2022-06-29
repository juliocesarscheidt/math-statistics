const arr = [7, 96, 90, 94, 72];

const totalFn = arr => arr.reduce((accumulator, current) => accumulator + current);

const powerFn = (x) => Math.pow(x, 2);

const squareRootFn = (x) => Math.pow(x, 1 / 2);

// it calculates the populational variance
const varianceFn = (arr) => {
  const startAccumulator = 0;

  const arrLen = arr.length;
  console.log('arrLen', arrLen);
  const total = totalFn(arr);
  console.log('total', total);
  const mean = (total / arrLen);
  console.log('mean', mean);

  const reducedValue = arr.reduce((accumulator, current) =>
    accumulator + powerFn(current - mean), startAccumulator);

  return reducedValue / arrLen;
};

const standardDeviationFn = (variance) => squareRootFn(variance);

const variance = varianceFn(arr);
console.log('variance', variance);
// arrLen 5
// total 359
// mean 71.8
// variance 1121.76

const standardDeviation = standardDeviationFn(variance);
console.log('standardDeviation', standardDeviation);
// 33.49268576868687
