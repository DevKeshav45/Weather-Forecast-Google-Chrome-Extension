

const apiKey = "02b6078c82e0b665b33e808c65b7ee41";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

async function checkWeather(city) {

    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } else {
        var data = await response.json();

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temperature").innerHTML = Math.round(data.main.temp - 273.1) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

        if (data.weather[0].main == "clouds") {
            document.querySelector(".weatherIcon").src = "images/clouds.png";
        }

        if (data.weather[0].main == "clear") {
            document.querySelector(".weatherIcon").src = "images/clear.png";
        }

        if (data.weather[0].main == "Mist") {
            document.querySelector(".weatherIcon").src = "images/mist.png";
        }

        if (data.weather[0].main == "Drizzle") {
            document.querySelector(".weatherIcon").src = "images/drizzle.png";
        }

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }


}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
})