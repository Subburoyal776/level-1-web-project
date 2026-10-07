// Task 2 - Interactive Background Button

function changeBackground() {

    const colors = [
        "#1b813e",
        "#a7eb09",
        "#f3670a",
        "#3307f3"
    ];

    const randomColor =
        colors[Math.floor(Math.random() * colors.length)];

    document.body.style.backgroundColor = randomColor;
}


// Task 2 - Greeting Based on Time

function showGreeting() {

    const hour = new Date().getHours();

    let message;

    if (hour < 12) {

        message = "Good Morning! 🌅";

    } else if (hour < 18) {

        message = "Good Afternoon! ☀️";

    } else {

        message = "Good Evening! 🌙";

    }

    document.getElementById("greeting").textContent = message;
}


// Task 2 - Addition Calculator

function calculateSum() {

    const number1 =
        document.getElementById("number1").value;

    const number2 =
        document.getElementById("number2").value;

    if (number1 === "" || number2 === "") {

        document.getElementById("result").textContent =
            "Please enter both numbers.";

        return;
    }

    const sum =
        Number(number1) + Number(number2);

    document.getElementById("result").textContent =
        "Result: " + sum;
}


// Contact Form

function submitForm(event) {

    event.preventDefault();

    const name =
        document.getElementById("name").value;

    document.getElementById("form-message").textContent =
        "Thank you, " + name + "! Your form was submitted.";

}