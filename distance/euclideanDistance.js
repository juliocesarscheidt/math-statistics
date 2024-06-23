// Implements euclidean distance
// Formula
// De(x, y) = Sqrt( Sum( Power2( abs( x - y ) ) ) )

const euclideanDistance = (a, b) => {
  const lenValues = Math.min(a.length, b.length);

  const distances = [];
  for (let i = 0; i < lenValues; i ++) {
    distances.push(Math.pow(Math.abs(a[i] - b[i]), 2));
  }

  const sumValues = distances.reduce((previousValue, curValue) => previousValue + curValue);

  const distReal = Math.sqrt(sumValues);
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

euclideanDistance(a, b);
// distReal 2.2913
// distUniform 0.3038
// sigmoideDist 0.9082
