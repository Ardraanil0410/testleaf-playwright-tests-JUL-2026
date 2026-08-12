"use strict";
function fibonacci(n) {
    if (n === 0) {
        return 0;
    }
    let a = 0;
    let b = 1;
    for (let i = 2; i <= n; i++) {
        let next = a + b;
        a = b;
        b = next;
    }
    return b;
}
console.log(fibonacci(0));
console.log(fibonacci(1));
console.log(fibonacci(5));
console.log(fibonacci(7));
console.log(fibonacci(10));
