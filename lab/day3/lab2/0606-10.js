(function() {
    function movieOfTheDay(day) {
        let movie;
        switch (day.toLowerCase()) {
            case "monday":
                movie = "Inception";
                break;
            case "tuesday":
                movie = "Titanic";
                break;
            case "wednesday":
                movie = "Avatar";
                break;
            case "thursday":
                movie = "The Godfather";
                break;
            case "friday":
                movie = "The Dark Knight";
                break;
            case "saturday":
                movie = "Pulp Fiction";
                break;
            case "sunday":
                movie = "The Shawshank Redemption";
                break;
            default:
                movie = "Invalid day";
        }
        return movie;
    }

    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    days.forEach(day => {
        console.log(`Movie for ${day}: ${movieOfTheDay(day)}`);
    });
})();
