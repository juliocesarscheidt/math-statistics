const arraySort = arr => arr.slice().sort((a, b) => a - b);

const arrayTotal = arr => arr.slice().reduce((prev, current) => parseFloat(prev) + parseFloat(current));

const arrayMedian = (arr) => {
  if (arr && arr.length) {
    const sorted = arraySort(arr);
    const middle = Math.floor(sorted.length / 2);
    if (sorted.length % 2 === 0) {
      return (sorted[middle - 1] + sorted[middle]) / 2;
    }
    return sorted[middle];
  }
  return 0;
};

const arrayDifference = (arrA, arrB) => arrA.filter(x => !arrB.includes(x));

// Quartil INC
const quartileInc = (data, q) => {
  let newData = arraySort([...data]);

  let result = 0;
  const pos = ((newData.length) - 1) * q;
  const base = Math.floor(pos);
  const rest = pos - base;

  if (newData[base + 1] !== undefined && newData[base + 1] !== null) {
    const diff = newData[base + 1] - newData[base];
    result = newData[base] + rest * (diff);
  } else {
    result = newData[base];
  }
  return result;
};

// Quartil EXC
const quartileExc = (data, q) => {
  let newData = arraySort([...data]);
  newData.unshift(0);

  let result = 0;
  const pos = ((newData.length)) * q;
  const base = Math.floor(pos);
  const rest = pos - base;

  if (newData[base + 1] !== undefined && newData[base + 1] !== null) {
    const diff = newData[base + 1] - newData[base];

    result = newData[base] + rest * (diff);
  } else {
    result = newData[base];
  }
  return result;
};

const quartileFactory = (data, type, percent) => {
  type = `${type.toString().toUpperCase().substring(0, 1)}${type.toString().toLowerCase().substring(1, 100)}`;
  if (type !== 'Inc' && type !== 'Exc') {
    return 0;
  }
  const funcQuartile = `quartile${type}`;
  return eval(funcQuartile)(data, percent);
}

const quartileQ1 = (data, type = 'inc') => {
  return quartileFactory(data, type, 0.25);
};
const quartileQ2 = (data, type = 'inc') => {
  return quartileFactory(data, type, 0.5);
};
const quartileQ3 = (data, type = 'inc') => {
  return quartileFactory(data, type, 0.75);
};

// const arr = [8, 4.5, 5.5];
const arr = [5, 8, 7, 12, 15, 10, 60];
console.info('arr', arr);


const median = arrayMedian(arr);
console.info('median', median);

const total = arrayTotal(arr);
console.info('total', total);


const max = Math.max(...arr);
console.info('max', max);

const min = Math.min(...arr);
console.info('min', min);

const mean = arr.length && arr.length > 0 ? total / arr.length : 0;
console.info('mean', mean.toFixed(4));


// Amplitude (Max - Min)
const amplitude = max - min;
console.info('amplitude', amplitude.toFixed(4));


const lowerQuartile = quartileQ1(arr, 'exc');
const halfQuartile = quartileQ2(arr, 'exc');
const upperQuartile = quartileQ3(arr, 'exc');

console.info('lowerQuartile', lowerQuartile);
console.info('halfQuartile', halfQuartile);
console.info('upperQuartile', upperQuartile);


// IQR = interquartile range (Q3 - Q1)
const iqr = upperQuartile - lowerQuartile;
console.info('iqr', iqr);


// Variance = sum((each element - mean) ^ 2) / total of elements
const varianceArr = arr.slice().map(ele => Math.pow((ele - mean), 2));
const variance = arrayTotal(varianceArr) / arr.length;
console.info('variance', variance.toFixed(4));

// Standard Deviation = square root of variance
const standardDeviation = Math.pow(variance, (1 / 2));
console.info('standardDeviation', standardDeviation.toFixed(4));


// Mode
const uniques = [];
const mode = [];

arr.forEach((ele) => {
  if (uniques.includes(ele)) {
    if (!mode.includes(ele)) {
      mode.push(ele);
    }
  }
  uniques.push(ele);
});
console.info('mode', mode);
