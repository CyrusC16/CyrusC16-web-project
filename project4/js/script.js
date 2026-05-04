// Greeting form (index.html)
document.getElementById("greetingForm")?.addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;

    let message = "Hello, " + name + "! Welcome to my travel page 🌍";

    document.getElementById("greetingMessage").textContent = message;
});


// Destination form (project4.html)
document.getElementById("destinationForm")?.addEventListener("submit", function(event) {
    event.preventDefault();

    let destination = document.getElementById("destination").value;

    let message = "That sounds amazing! I'd love to visit " + destination + " someday! ✈️";

    document.getElementById("destinationMessage").textContent = message;
});