(function() {
    function printVariableTypes() {
        let integer = 42;
        let float = 3.14;
        let string = "Hello, World!";
        let array = [1, 2, 3];
        let obj = { a: 1, b: 2 };
        let bool = true;

        return {
            integer: typeof integer,
            float: typeof float,
            string: typeof string,
            array: typeof array,
            obj: typeof obj,
            bool: typeof bool
        };
    }

    const types = printVariableTypes();
    for (const [name, type] of Object.entries(types)) {
        console.log(`${name}: ${type}`);
    }
})();
