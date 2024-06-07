(function() {
    function displayGreeting() {
        const now = new Date();
        const hour = now.getHours();
        let greeting;

        if (hour < 12) {
            greeting = "Good Morning";
        } else if (hour < 18) {
            greeting = "Good Afternoon";
        } else if (hour < 21) {
            greeting = "Good Evening";
        } else {
            greeting = "Good Night";
        }

        return greeting;
    }

    console.log(displayGreeting());
})();
