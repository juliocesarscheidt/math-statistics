const sigmoide = (x) => {
  const Euler = Math.E;
  return 1 / (1 + (Euler ** (-x)));
}

console.info(sigmoide(10));
// 0.9999546021312976

console.info(sigmoide(5));
// 0.9933071490757153

console.info(sigmoide(2));
// 0.8807970779778823
