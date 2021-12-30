// pearson correlation

const arrayTotal = arr => arr.slice().reduce((prev, current) => parseFloat(prev) + parseFloat(current));

const datasets = [
  [35.6, 59, 25.2, 22.5, 25.41],
  [12.7, 29.4, 8.6, 8.3, 12.4],
];

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

const pearsonCorrelation = (datasetA, datasetB) => {
  const lenDatasets = Math.min(datasetA.length, datasetB.length);
  // console.info('lenDatasets', lenDatasets);

  const sumA = arrayTotal(datasetA);
  const sumB = arrayTotal(datasetB);

  // console.info('sumA', sumA);
  // console.info('sumB', sumB);

  const multiAB = [];
  for (let i = 0; i < lenDatasets; i ++) {
    multiAB.push(datasetA[i] * datasetB[i]);
  }
  // console.info('multiAB', multiAB);

  const sumMultiAB = arrayTotal(multiAB);
  // console.info('sumMultiAB', sumMultiAB);

  const sqrtsA = [];
  for (let i = 0; i < lenDatasets; i ++) {
    sqrtsA.push(datasetA[i] ** 2);
  }
  // console.info('sqrtsA', sqrtsA);

  const sumSqrtsA = arrayTotal(sqrtsA);
  // console.info('sumSqrtsA', sumSqrtsA);

  const sqrtsB = [];
  for (let i = 0; i < lenDatasets; i ++) {
    sqrtsB.push(datasetB[i] ** 2);
  }
  // console.info('sqrtsB', sqrtsB);

  const sumSqrtsB = arrayTotal(sqrtsB);
  // console.info('sumSqrtsB', sumSqrtsB);

  const result = (sumMultiAB - ((sumA * sumB) / lenDatasets)) / (
    Math.sqrt(
      (sumSqrtsA - ((Math.pow(sumA, 2)) / lenDatasets)) *
      (sumSqrtsB -  ((Math.pow(sumB, 2)) / lenDatasets))
    )
  );
  console.info('result', result);

  let status;

  if (parseFloat(result) == 1) {
    status = correlationStatus[0];
  } else if (parseFloat(result) >= 0.8 && parseFloat(result) < 1) {
    status = correlationStatus[1];
  } else if (parseFloat(result) >= 0.5 && parseFloat(result) < 0.8) {
    status = correlationStatus[2];
  } else if (parseFloat(result) >= 0.1 && parseFloat(result) < 0.5) {
    status = correlationStatus[3];
  } else if (parseFloat(result) >= 0.0 && parseFloat(result) < 0.1) {
    status = correlationStatus[4];
  } else if (parseFloat(result) == 0.0) {
    status = correlationStatus[5];
  } else if (parseFloat(result) >= -0.1 && parseFloat(result) < 0.0) {
    status = correlationStatus[6];
  } else if (parseFloat(result) >= -0.5 && parseFloat(result) < -0.1) {
    status = correlationStatus[7];
  } else if (parseFloat(result) >= -0.8 && parseFloat(result) < -0.5) {
    status = correlationStatus[8];
  } else if (parseFloat(result) >= -1 && parseFloat(result) < -0.8) {
    status = correlationStatus[9];
  } else if (parseFloat(result) == -1) {
    status = correlationStatus[10];
  }

  console.info('status', status);

  return { result, status };
}

pearsonCorrelation(datasets[0], datasets[1]);
