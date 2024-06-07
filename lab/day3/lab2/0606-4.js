(function() {
    function fibonacci(n) {
        let fibSequence = [];
        let a = 0, b = 1, next;
        while (a <= n) {
            fibSequence.push(a);
            next = a + b;
            a = b;
            b = next;
        }
        return fibSequence;
    }

    const number = 50;
    console.log(`Fibonacci sequence up to ${number}: ${fibonacci(number).join(", ")}`);
})();
