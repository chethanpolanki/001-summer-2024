(function() {
    function isPrime(n) {
        if (n <= 1) {
            return false;
        }
        for (let i = 2; i < n; i++) {
            if (n % i === 0) {
                return false;
            }
        }
        return true;
    }

    const number = 17;
    console.log(`Is ${number} a prime number? ${isPrime(number)}`);
})();
