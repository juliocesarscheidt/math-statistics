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


const arr = [60, 35, 20];
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
console.info('mean', mean.toFixed(2));


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
console.info('uniques', uniques);
