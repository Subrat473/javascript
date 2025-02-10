function map(f, a) {
    const result = new Array(a.length);
    for (let i = 0; i < a.length; i++) {
      result[i] = f(a[i]);
    }
    return result;
  }
  
  const numbers = [0, 1, 2, 5, 10];
  const cubedNumbers = map(function (x) {
    return x * x * x;
  }, numbers);
  console.log(cubedNumbers); // [0, 1, 8, 125, 1000]
  