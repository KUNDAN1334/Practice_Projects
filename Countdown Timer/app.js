const endDate = "10 December 2024 12:00 AM";
const inputs = document.querySelectorAll("input");

function clock() {
    const now = new Date();
    const end = new Date(endDate);
    const diff = end - now;

    if (diff < 0) {
        // Stop the clock if the end date has passed
        inputs[0].value = 0;
        inputs[1].value = 0;
        inputs[2].value = 0;
        inputs[3].value = 0;
        return;
    }

    // Calculate time differences
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    // Update input values
    inputs[0].value = days;
    inputs[1].value = hours;
    inputs[2].value = minutes;
    inputs[3].value = seconds;
}

clock();

setInterval(clock, 1000);
