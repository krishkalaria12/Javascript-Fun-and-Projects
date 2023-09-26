console.log("This is my script");
const resultCont = document.getElementById("resultCont");
const emailForm = document.querySelector("form");

emailForm.addEventListener("submit", async (e) => {
    e.preventDefault()

    resultCont.innerHTML = `<img width="123" src="./reload.svg" alt="Loading...">`;

    const apiKey = "ema_live_zKvTnwMnP7QWg8ce5UpiyP7SrOy06ehoxeId34A3"; 
    const email = document.getElementById("username").value;
    const url = `https://api.emailvalidation.io/v1/info?apikey=${apiKey}&email=${email}`;

    try {
        const res = await fetch(url);
        if (res.ok) {
            const result = await res.json();
            let str = `<ul>`;
            for (const key of Object.keys(result)) {
                if (result[key] !== "" && result[key] !== " ") {
                    str += `<li>${key}: ${result[key]}</li>`;
                }
            }
            str += `</ul>`;
            resultCont.innerHTML = str;
        } else {
            resultCont.innerHTML = "Error: Unable to fetch data.";
        }
    } catch (error) {
        console.error("Error:", error);
        resultCont.innerHTML = "An error occurred.";
    }
});
