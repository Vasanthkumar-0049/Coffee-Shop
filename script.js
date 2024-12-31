
var offerEndDate = new Date("December 31, 2024 23:59:59").getTime();

// Update the countdown every second
var countdownInterval = setInterval(function() {

    var now = new Date().getTime(); 
    var timeLeft = offerEndDate - now; // Calculate the time remaining

    
    // var days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    // result
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    if (timeLeft < 0) {
        clearInterval(countdownInterval);
        document.getElementById("countdown").innerHTML = "Offer Expired!";
    }

}, 1000);
