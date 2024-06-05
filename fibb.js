
function* fibonacciGenerator(n) {
    let [a, b] = [0, 1];
    for (let i = 0; i < n; i++) {
        yield a;
        [a, b] = [b, a + b];
    }
}

console.log("\nFibonacci Sequence:");
for (const fib of fibonacciGenerator(5)) {
    console.log(fib);
}