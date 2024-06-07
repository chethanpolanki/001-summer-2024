(function() {
    function displayPatterns() {
        const n = 5;
        let patterns = {};

        patterns.pattern1 = [];
        for (let i = 1; i <= n; i++) {
            patterns.pattern1.push("*".repeat(i));
        }

        patterns.pattern2 = [];
        for (let i = n; i >= 1; i--) {
            patterns.pattern2.push("*".repeat(i));
        }

        patterns.pattern3 = [];
        for (let i = 1; i <= n; i++) {
            patterns.pattern3.push(" ".repeat(n - i) + "*".repeat(i));
        }

        return patterns;
    }

    const patterns = displayPatterns();
    console.log("Pattern 1:");
    patterns.pattern1.forEach(line => console.log(line));
    console.log("\nPattern 2:");
    patterns.pattern2.forEach(line => console.log(line));
    console.log("\nPattern 3:");
    patterns.pattern3.forEach(line => console.log(line));
})();
