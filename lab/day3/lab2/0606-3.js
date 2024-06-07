(function() {
    function factorial(n) {
        if (n === 0) {
            return 1;
        } else {
            return n * factorial(n - 1);
        }
    }

    const number = 5;
    console.log(`Factorial of ${number} is ${factorial(number)}`);
})();
