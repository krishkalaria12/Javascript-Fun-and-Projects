const start = document.getElementById("button-start");
const stop = document.getElementById("button-stop");
const reset = document.getElementById("button-reset");
const seconds = document.getElementById("seconds");
const tens = document.getElementById("tens");

let sec = 0;
let min = 0;
let intervalId;

function timeout() {
    sec++;
    seconds.textContent = sec < 10 ? "0" + sec : sec;
    if (sec > 59) {
        seconds.textContent = "00";
        sec = 0;
        min++;
        tens.textContent = min < 10 ? "0" + min : min;
    }
}

reset.addEventListener("click", () => {
    sec = 0;
    min = 0;
    seconds.textContent = "00";
    tens.textContent = "00";
    clearInterval(intervalId); // Stop the timer
});

start.addEventListener("click", () => {
    clearInterval(intervalId); // Clear any existing interval
    intervalId = setInterval(timeout, 1000); // Start the timer
})

stop.addEventListener("click", () => {
    clearInterval(intervalId); // Stop the timer
});