// pearson correlation

const arraySum = arr => arr.slice().reduce((prev, current) => parseFloat(prev) + parseFloat(current));

const a = [3.0, 3.5, 1.5, 5.0, 3.0, 3.5];
const b = [2.5, 3.5, 3.0, 3.5, 2.5, 3.0];

const correlationStatus = [
  'Perfeita positiva',
  'Forte positiva',
  'Moderada positiva',
  'Fraca positiva',
  'Ínfima positiva',
  'Nula',
  'Ínfima negativa',
  'Fraca negativa',
  'Moderada negativa',
  'Forte negativa',
  'Perfeita negativa',
]

const pearsonCorrelation = (a, b) => {
  const lenDatasets = Math.min(a.length, b.length);
  // console.info('lenDatasets', lenDatasets);

  const sumA = arraySum(a);
  const sumB = arraySum(b);

  const multiAB = [];
  for (let i = 0; i < lenDatasets; i ++) {
    multiAB.push(a[i] * b[i]);
  }

  const sumMultiAB = arraySum(multiAB);

  const sqrtsA = [];
  for (let i = 0; i < lenDatasets; i ++) {
    sqrtsA.push(Math.pow(a[i], 2));
  }
  const sumSqrtA = arraySum(sqrtsA);

  const sqrtsB = [];
  for (let i = 0; i < lenDatasets; i ++) {
    sqrtsB.push(b[i] ** 2);
  }
  const sumSqrtB = arraySum(sqrtsB);

  const correlation = (sumMultiAB - ((sumA * sumB) / lenDatasets)) / (
    Math.sqrt(
      (sumSqrtA - ((Math.pow(sumA, 2)) / lenDatasets)) *
      (sumSqrtB -  ((Math.pow(sumB, 2)) / lenDatasets))
    )
  );
  console.info('correlation', correlation.toFixed(4));

  let status;

  if (parseFloat(correlation) == 1) {
    status = correlationStatus[0];
  } else if (parseFloat(correlation) >= 0.8 && parseFloat(correlation) < 1) {
    status = correlationStatus[1];
  } else if (parseFloat(correlation) >= 0.5 && parseFloat(correlation) < 0.8) {
    status = correlationStatus[2];
  } else if (parseFloat(correlation) >= 0.1 && parseFloat(correlation) < 0.5) {
    status = correlationStatus[3];
  } else if (parseFloat(correlation) >= 0.0 && parseFloat(correlation) < 0.1) {
    status = correlationStatus[4];
  } else if (parseFloat(correlation) == 0.0) {
    status = correlationStatus[5];
  } else if (parseFloat(correlation) >= -0.1 && parseFloat(correlation) < 0.0) {
    status = correlationStatus[6];
  } else if (parseFloat(correlation) >= -0.5 && parseFloat(correlation) < -0.1) {
    status = correlationStatus[7];
  } else if (parseFloat(correlation) >= -0.8 && parseFloat(correlation) < -0.5) {
    status = correlationStatus[8];
  } else if (parseFloat(correlation) >= -1 && parseFloat(correlation) < -0.8) {
    status = correlationStatus[9];
  } else if (parseFloat(correlation) == -1) {
    status = correlationStatus[10];
  }

  console.info('status', status);

  return { correlation, status };
}

pearsonCorrelation(a, b);
// correlation 0.4951
// status Fraca positiva
