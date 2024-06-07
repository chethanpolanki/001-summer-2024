(function() {
    function arithmeticOperations(a, b) {
        return {
            addition: a + b,
            subtraction: a - b,
            multiplication: a * b,
            division: a / b,
            modulo: a % b,
            exponentiation: a ** b
        };
    }

    const result = arithmeticOperations(10, 5);
    console.log("Addition: " + result.addition);
    console.log("Subtraction: " + result.subtraction);
    console.log("Multiplication: " + result.multiplication);
    console.log("Division: " + result.division);
    console.log("Modulo: " + result.modulo);
    console.log("Exponentiation: " + result.exponentiation);
})();
