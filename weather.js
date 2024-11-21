let url = "https://api.openweathermap.org/data/2.5/weather?q=bengaluru&appid=76122ed11da10580fea231a2a5fc4183&units=metric"
let cityInput = document.getElementById("city");
let searchBtn = document.getElementById("search-btn");

searchBtn.addEventListener("click", () => {
    let city = cityInput.value.trim();
    if (city) {
        fetch(https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=76122ed11da10580fea231a2a5fc4183&units=metric)
            .then(response => response.json())
            .then(data => {
                if (data.message) {
                    alert(data.message);
                } else {
                    document.querySelector(".info").style.display = "flex";
                    document.getElementById("cityname").innerHTML = data.name;
                    document.getElementById("temperature").innerHTML = ${data.main.temp} °C;
                    document.getElementById("wind").innerHTML = WIND: ${data.wind.speed} m/s;
                    document.getElementById("humidity").innerHTML = HUMIDITY: ${data.main.humidity}%;
                    document.getElementById("weather-icon").src = http://openweathermap.org/img/wn/${data.weather[0].icon}.png;
                }
            })
            .catch(error => console.log(error));
    } else {
        alert("First Write the City Name");
    }
});