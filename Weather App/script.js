const btn = document.getElementById("search-btn")
const savedCity = localStorage.getItem('lastCity');
const typeimg = document.getElementById("typeimg");

if (savedCity) {
    const cityInput = document.getElementById("city-input");
    cityInput.value = savedCity;
}

btn.addEventListener("click" , weatherUpdate)

function weatherUpdate() {
    const cityInput = document.getElementById("city-input")
    const valueCity = cityInput.value
    
    if (valueCity!= "") {
        localStorage.setItem('lastCity', valueCity);
        const url = `https://weatherapi-com.p.rapidapi.com/current.json?q=${valueCity}`;
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'abcaf7b588msh4857db7e8aac436p1c1513jsn3179a8ba1238',
                'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
            }
        };
        async function WeatherApi() {
            try {
                const response = await fetch(url, options);
                const result = await response.json();
                const city = document.getElementById("city")
                const country = document.getElementById("country")
                city.textContent = `City - ${result.location.name}`
                country.textContent = `Country - ${result.location.country}`
                const celsius = document.getElementById("celsius")
                const farhenhit = document.getElementById("farhenhit")
                const humidity = document.getElementById("Humidity")
                const WindSpeed = document.getElementById("WindSpeed")
                const feelsLike = document.getElementById("feelsLike")
                const Pressure = document.getElementById("Pressure")
                const cloud = document.getElementById("cloud")
                const typeWeather = document.getElementById("typeweather")

                humidity.textContent = `Humidity - ${result.current.humidity}`
                WindSpeed.textContent = `WindSpeed - ${result.current.wind_kph} kph`
                feelsLike.textContent = `feelsLike - ${result.current.feelslike_c}°C`
                Pressure.textContent = `Pressure - ${result.current.pressure_in}`
                cloud.textContent = `cloud - ${result.current.cloud}`
                celsius.textContent = `Celsius - ${result.current.temp_c}`
                farhenhit.textContent = `Farhenheit - ${result.current.temp_f}`

                let celsiusTemp = result.current.temp_c
                console.log(typeof celsiusTemp);
                if (celsiusTemp >= 30){
                    typeWeather.textContent = "Hot and Sunny Day!"
                    typeimg.style.display = "block";
                    typeimg.setAttribute("src", "./assets/icons8-sunny-weather-48.png");
                }
                else if (20<=celsiusTemp<=25){
                    typeWeather.textContent = "Cloudy Day!"
                    typeimg.style.display = "block";
                    typeimg.setAttribute("src", "./assets/cloudy.png");
                }
                else if (celsiusTemp<=20){
                    typeWeather.textContent = "Very Cold!"
                    typeimg.style.display = "block";
                    typeimg.setAttribute("src", "./assets/cold.png");
                }
            } catch (error) {
                alert("Enter a Valid City");
                cityInput.value = "";
            }
        }
        WeatherApi()
    } else {
        alert("Enter The City Name!")
    }
}

if (savedCity) {
    weatherUpdate();
}







