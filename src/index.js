// Set the date we're counting down to
const countDownDate = 1725159600000;

// Update the countdown every 1 second
const countdown = setInterval(function () {
    // Get the current date and time
    const now = new Date().getTime();

    // Calculate the distance between now and the countdown date
    const distance = countDownDate - now;

    // Calculate months, days, hours, minutes, and seconds
    const months = Math.floor(distance / (1000 * 60 * 60 * 24 * 30));
    const days = Math.floor((distance % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the countdown
    document.getElementById("months").innerHTML = padDigits(months);
    document.getElementById("days").innerHTML = padDigits(days);
    document.getElementById("hours").innerHTML = padDigits(hours);
    document.getElementById("minutes").innerHTML = padDigits(minutes);
    document.getElementById("seconds").innerHTML = padDigits(seconds);

    // If the countdown is over, stop it
    if (distance < 0) {
        clearInterval(countdown);
    }
}, 1000);

// Function to pad digits with leading zeros
function padDigits(num) {
    return num < 10 ? "0" + num : num;
}