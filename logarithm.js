const logarithm = (logaritmando, base) => {
  /**
   * log (logaritmando, base) = x
   *
   * exemplo -> log (8, 2) = x
   * 2 ^ x = 8
   * base ^ x = logaritmando
   */
  if (logaritmando && /^[\d]+$/.test(logaritmando)
    && base && /^[\d]+$/.test(base)) {
    if (logaritmando > 0 && base > 0 && base != 1) { // logaritmando > 0 e base > 0 e base <> 1
      // neste caso o logaritmo existe
      if (base === logaritmando) {
        return 1;
      }
      if (logaritmando === 1) {
        return 0;
      }
      for (let x = 0; x < logaritmando; x ++) {
        // se a base elevada ao x for igual ao logaritmando retorna o x como resposta
        if (Math.pow(base, x) == logaritmando) {
          return x;
        }
      }
      return 0;
    } else {
      // Logaritmo inexistente
      throw Error('Logaritmo inexistente');
    }
  } else {
    throw Error('Parametros inválidos');
  }
}

if (process.argv.length === 4) {
  const logaritmando = process.argv[2];
  const base = process.argv[3];
  console.info(logarithm(logaritmando, base));
} else {
  // default
  console.info('logarithm(8, 2)', logarithm(8, 2));
  // 3
}
