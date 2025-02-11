// Functions in programming
// 1. They are a block of code that perform a specific task
// 2. They are reusable.
// 3. They are not executed until they are called.

function weatherAdvisory(temperature) {
    if (temperature >= 25) {
        console.log("It's hot! Stay hydrated.")
    } else if (temperature >= 15 && temperature <= 25) {
        console.log("It's pleasant. Enjoy the weather");
    } else if (temperature >= 5 && temperature < 15) {
        console.log("It's chilly. Wear a jacket.");
    } else {
        console.log("It's cold! Wear warm clothing");
    }
}

weatherAdvisory(28)
weatherAdvisory(21)