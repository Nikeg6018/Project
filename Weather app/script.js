let weather = {
    apiKey: "0b1c935cbe011b56985775cda4750d3bgna",
    fetchWeather: function (city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q="
            + city
            + "&units=metric&appid="
            + this.apiKey
        )
            .then((response) => response.json())
            .then((data) => this.displayWeather(data));
    },
    displayWeather: function (data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity, pressure } = data.main;
        const { speed } = data.wind;
        // console.log(name, icon, description, temp, humidity, speed);
        document.querySelector(".city").innerHTML = "Weather in " + name;
        document.querySelector(".icon").src =
            "http://openweathermap.org/img/wn/"
            + icon
            + ".png";
        document.querySelector(".description").innerHTML = description;
        document.querySelector(".temp").innerHTML = temp + " ℃";
        document.querySelector(".humidity").innerHTML = "Humidity : " + humidity + "%";
        document.querySelector(".wind").innerHTML = "Wind Speed : " + speed + " Km/h";
        document.querySelector(".pressure").innerHTML = "Pressure : " + pressure / 1000 + " Bar";
        document.querySelector(".weather").classList.remove("loading");
        document.body.style.background = "url('https://source.unsplash.com/1600x900/?" + name + "')";
    },
    search: function () {
        this.fetchWeather(document.querySelector(".search-bar").value);
    }
};

document
    .querySelector(".search button")
    .addEventListener("click", function () {
        weather.search();
    });

document
    .querySelector(".search-bar")
    .addEventListener("keyup", function (event) {
        if (event.key == "Enter") {
            weather.search();
        }
    });

// weather.fetchWeather("Surat");