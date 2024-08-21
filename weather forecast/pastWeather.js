let dateInput = document.querySelector(".date-input");
let searchBtn = document.querySelector(".search-btn");
/*
searchBtn.addEventListener('click',()=> {
  displayPastWeather();
});

function displayPastWeather(){
  const apiKey = "204839194a9bab1305b974d5136e6660";
  const city = document.querySelector(".searchBox").value;
  let date = dateInput.value;
  const dt = convertToDate(date);
  const end = (Number(dt) + 100);
  
  fetch(`https://history.openweathermap.org/data/2.5/history/city?q=${city}&type=hour&start=${dt}&end=${end}&appid=${apiKey}`)
    .then((response) => response.json())
    .then((data) => displayWeather(data));
}
function displayWeather(data) {
  const {name}= data;
  const {icon, description}= data.weather[0];
  const {temp, humidity}= data.main;
  const {speed}= data.wind;
  const {visibility} = data;
  const {pressure}= data.main;
  console.log(name, description, temp, humidity, speed, visibility, pressure);
  document.querySelector(".fa-solid fa-location-dot").innerText = name;
  document.querySelector(".weather-icon").src = `http://openweathermap.org/img/wn/${icon}.png`;
  document.querySelector(".description").innerText = description;
  document.querySelector(".temp").innerText = temp + "°C";
  document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
  document.querySelector(".wind").innerText = "Wind Speed: " + speed + " km/h";
  document.querySelector(".visibility").innerText = "Visibility: " + visibility + " meters";
  document.querySelector(".air-pressure").innerText = "Air Pressure: " + pressure + " mb"; 

}*/


function convertToDate(date){
  const parts = date.split('-');
  const newDate = new Date(parts[2], parts[1]-1, parts[0]);
  return newDate.getTime() / 1000;
}
searchBtn.addEventListener('click', () => {
  displayPastWeather().catch(error => console.error(error));
});

async function displayPastWeather() {
  try {
    const apiKey = "204839194a9bab1305b974d5136e6660"; // Replace with your actual API key
    const city = document.querySelector(".searchBox").value;
    let date = dateInput.value;
    const dt = convertToDate(date);
    const end = Number(dt) + 100;

    const response = await fetch(`https://api.openweathermap.org/data/2.5/your-historical-endpoint?q=${city}&type=hour&start=${dt}&end=${end}&appid=${apiKey}`);
    
    if (!response.ok) {
      throw new Error('Network response was not ok.');
    }

    const data = await response.json();
    displayWeather(data);
  } catch (error) {
    console.error('Error:', error);
  }
}
