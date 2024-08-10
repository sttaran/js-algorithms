
export function measurePerformance(cb) {
  const start = performance.now();
  cb();
  const end = performance.now();
  return (end - start)/ 1000;
}

const addUpTo = (n) => {
    return n * (n + 1) / 2;
}

const addUpTo2 = (n) => {
    let total = 0;
    for (let i = 1; i <= n; i++) {
        total += i;
    }
    return total;
}


console.log(measurePerformance(() => addUpTo(10_000_000_000)));
console.log(measurePerformance(() => addUpTo2(10_000_000_000)));