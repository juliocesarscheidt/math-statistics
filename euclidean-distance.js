// Implements euclidean distance
// Formula
// De(x, y) = Sqrt( Sum( Power2( x - y ) ) )

const randomBetween = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const euclideanDistance = (rates) => {
  const lenRates = Math.min(rates[0].length, rates[1].length);

  const distances = [];
  for (let i = 0; i < lenRates; i ++) {
    distances.push(Math.pow(rates[0][i] - rates[1][i], 2));
  }

  const sumValues = distances.reduce((previousValue, curValue) => previousValue + curValue);

  const distReal = Math.sqrt(sumValues);
  console.info('distReal', distReal.toFixed(2));

  // adapt the scale of the distance and make it uniform
  // 0 => totally different :: 1 => totally equal
  const distUniform = 1 / (1 + Math.sqrt(sumValues));
  console.info('distUniform', distUniform.toFixed(2));

  return {
    distReal,
    distUniform,
  };
}

const users = [
  {
    name: 'User 1',
    rates: [3.0, 3.5, 1.5, 5.0, 3.0, 3.5],
  }, {
    name: 'User 2',
    rates: [2.5, 3.5, 3.0, 3.5, 2.5, 3.0],
  }
];

console.info(users);
euclideanDistance(users.map(u => u.rates));
// dist 2.29
// distStandard 0.30
