/*window.alert("WeatherWithYou can provide you weather forecasts and historical weather forecasts of any city. So Please support us .")*/


let weather= {
    "apikey": "204839194a9bab1305b974d5136e6660",
    fetchWeather: function(city) {
      fetch("https://api.openweathermap.org/data/2.5/weather?q="+city+"&units=metric&appid="+this.apikey)
      .then((response) => response.json())
      .then((data) => this.displayWeather(data));
    },
    displayWeather: function (data) {
      const {name}= data;
      const {icon, description}= data.weather[0];
      const {temp, humidity}= data.main;
      const {speed}= data.wind;
      const {visibility} = data;
      const {pressure}= data.main;

      document.querySelector(".city-label").innerText = name;
      document.querySelector(".weather-icon").src = "http://openweathermap.org/img/wn/${icon}.png";
      document.querySelector(".description").innerText = description;
      document.querySelector(".temp").innerText = temp + "°C";
      document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
      document.querySelector(".wind").innerText = "Wind Speed: " + speed + " km/h";
      document.querySelector(".visibility").innerText = "Visibility: " + visibility + " meters";
      document.querySelector(".air-pressure").innerText = "Air Pressure: " + pressure + " mb"; 

    },
    search: function (){
      this.fetchWeather(document.querySelector(".searchBox").value);
    }
    
  }
fetch("https://api.openweathermap.org/data/2.5/weather?q=Mumbai&units=metric&appid="+weather.apikey)
.then((response) => response.json())
.then((data) => weather.displayWeather(data));

document.querySelector(".search-btn").addEventListener("click", function(){
  weather.search();
  })

