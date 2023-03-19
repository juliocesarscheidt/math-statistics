const arraySort = arr => arr.slice().sort((a, b) => a - b);

const arrayTotal = arr => arr.slice().reduce((prev, current) => parseFloat(prev) + parseFloat(current));

// Quartil INC
const quartileInc = (data, q) => {
  let dataSorted = arraySort([...data]);

  const pos = ((dataSorted.length) - 1) * q;
  const base = Math.floor(pos);
  const rest = pos - base;

  const diff = dataSorted[base + 1] - dataSorted[base];
  return dataSorted[base] + rest * diff;
};

// Quartil EXC
const quartileExc = (data, q) => {
  let dataSorted = arraySort([...data]);
  // add an element to the beginning of the array
  dataSorted.unshift(0);

  const pos = ((dataSorted.length)) * q;
  const base = Math.floor(pos);
  const rest = pos - base;

  const diff = dataSorted[base + 1] - dataSorted[base];
  return dataSorted[base] + rest * diff;
};

const arr = [68, 71, 75, 15, 86, 93, 65, 74, 77, 12];
console.info('arr', arr);

const total = arrayTotal(arr);

const max = Math.max(...arr);
console.info('max', max);

const min = Math.min(...arr);
console.info('min', min);

const mean = arr.length && arr.length > 0 ? total / arr.length : 0;
console.info('mean', mean.toFixed(2));

// Amplitude (Max - Min)
const amplitude = max - min;
console.info('amplitude', amplitude.toFixed(2));

// quartiles
const lowerQuartileExc = quartileExc(arr, 0.25); // Q1
const halfQuartileExc = quartileExc(arr, 0.5); // Q2
const upperQuartileExc = quartileExc(arr, 0.75); // Q3

console.info('lowerQuartileExc', lowerQuartileExc.toFixed(2));
console.info('halfQuartileExc', halfQuartileExc.toFixed(2));
console.info('upperQuartileExc', upperQuartileExc.toFixed(2));

// IQR = interquartile range (Q3 - Q1)
const iqr = upperQuartileExc - lowerQuartileExc;
console.info('iqr', iqr);

const upperBound = mean + 1.5 * iqr;
console.info('upperBound', upperBound.toFixed(2));

const lowerBound = mean - 1.5 * iqr;
console.info('lowerBound', lowerBound.toFixed(2));

const outliers = arr.filter(element => element < lowerBound || element > upperBound);
console.info('outliers', outliers);

// Variance = sum((each element - mean) ^ 2) / total of elements
const varianceArr = arr.slice().map(ele => Math.pow((ele - mean), 2));

// Populational variance is divided by the lenght of data
const variancePopulation = arrayTotal(varianceArr) / arr.length;
console.info('variance Population', variancePopulation.toFixed(4));

// Populational Standard Deviation = square root of populational variance 
const standardDeviationPopulation = Math.pow(variancePopulation, (1 / 2));
console.info('standard Deviation Population', standardDeviationPopulation.toFixed(4));

// Sample variance is divided by the lenght of data - 1
const varianceSample = arrayTotal(varianceArr) / (arr.length - 1);
console.info('variance Sample', varianceSample.toFixed(4));

// Sample Standard Deviation = square root of populational variance 
const standardDeviationSample= Math.pow(varianceSample, (1 / 2));
console.info('standard Deviation Sample', standardDeviationSample.toFixed(4));
