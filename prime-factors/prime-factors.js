exports.for = function (n) {
  let factors = [];
  
  /* push the number of 2's that divide n */
  while (n % 2 === 0) {
    factors.push(2);
    n /= 2;
  }
  /* n must be odd at this point, so we can skip even factors (i += 2) */
  for (let i = 3; i <= Math.sqrt(n); i += 2) {
    /* while i divides n, push i and divide n by i */
    while (n % i === 0) {
      factors.push(i);
      n /= i;
    }
  }
  /* if n is greater than 2, push n */
  if (n > 2) {
    factors.push(n);
  }
  return factors;
};