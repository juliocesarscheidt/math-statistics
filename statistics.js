const arraySort = arr => arr.slice().sort((a, b) => a - b);

const arrayTotal = arr => arr.slice().reduce((prev, current) => parseFloat(prev) + parseFloat(current));

// Quartil INC
const quartileInc = (data, q) => {
  let newData = arraySort([...data]);

  let result = 0;
  const pos = ((newData.length) - 1) * q;
  const base = Math.floor(pos);
  const rest = pos - base;

  if (newData[base + 1] !== undefined && newData[base + 1] !== null) {
    const diff = newData[base + 1] - newData[base];
    result = newData[base] + rest * diff;
  } else {
    result = newData[base];
  }
  return result;
};

// Quartil EXC
const quartileExc = (data, q) => {
  let newData = arraySort([...data]);
  // add an element to the beginning of the array
  newData.unshift(0);

  let result = 0;
  const pos = ((newData.length)) * q;
  const base = Math.floor(pos);
  const rest = pos - base;

  if (newData[base + 1] !== undefined && newData[base + 1] !== null) {
    const diff = newData[base + 1] - newData[base];

    result = newData[base] + rest * diff;
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

const quartileType = 'exc';

const lowerQuartile = quartileQ1(arr, quartileType);
const halfQuartile = quartileQ2(arr, quartileType);
const upperQuartile = quartileQ3(arr, quartileType);

console.info('lowerQuartile', lowerQuartile);
console.info('halfQuartile', halfQuartile);
console.info('upperQuartile', upperQuartile);


// IQR = interquartile range (Q3 - Q1)
const iqr = upperQuartile - lowerQuartile;
console.info('iqr', iqr);


// Variance = sum((each element - mean) ^ 2) / total of elements
const varianceArr = arr.slice().map(ele => Math.pow((ele - mean), 2));

// populational variance is divided by the lenght of data
const variancePopulation = arrayTotal(varianceArr) / arr.length;
console.info('variance Population', variancePopulation.toFixed(4));

// Populational Standard Deviation = square root of populational variance 
const standardDeviationPopulation = Math.pow(variancePopulation, (1 / 2));
console.info('standard Deviation Population', standardDeviationPopulation.toFixed(4));


// sample variance is divided by the lenght of data - 1
const varianceSample = arrayTotal(varianceArr) / (arr.length - 1);
console.info('variance Sample', varianceSample.toFixed(4));

// Populational Standard Deviation = square root of populational variance 
const standardDeviationSample= Math.pow(varianceSample, (1 / 2));
console.info('standard Deviation Sample', standardDeviationSample.toFixed(4));

