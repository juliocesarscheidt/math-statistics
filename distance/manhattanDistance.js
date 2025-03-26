// Implements manhattan distance
// Formula
// De(x, y) = Sum( abs( x - y ) )
// L1-regularization - L1 norm

const manhattanDistance = (a, b) => {
  const lenValues = Math.min(a.length, b.length);

  const distances = [];
  for (let i = 0; i < lenValues; i ++) {
    distances.push(Math.abs(a[i] - b[i]));
  }

  const sumValues = distances.reduce((previousValue, curValue) => previousValue + curValue);

  const distReal = sumValues;
  console.info('distReal', distReal.toFixed(4));

  // adapt the scale of the distance and make it uniform
  // 0 => totally different :: 1 => totally equal
  const distUniform = 1 / (1 + Math.sqrt(sumValues));
  console.info('distUniform', distUniform.toFixed(4));

  const Euler = Math.E;
  const sigmoideDist = 1 / (1 + (Euler ** (-Math.sqrt(sumValues))));
  console.info('sigmoideDist', sigmoideDist.toFixed(4));

  return {
    distReal,
    distUniform,
    sigmoideDist,
  };
}

const a = [3.0, 3.5, 1.5, 5.0, 3.0, 3.5]
const b = [2.5, 3.5, 3.0, 3.5, 2.5, 3.0]

manhattanDistance(a, b);
// distReal 4.5000
// distUniform 0.3204
// sigmoideDist 0.8930
