function search(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#search-input");
  let city = searchInputElement;
  let cityElement = document.querySelector("#current-city");
  let apiKey = `144016bb2ce3odff4b8e4583ca9a5c1t`;
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(newTemperature);
  cityElement.innerHTML = city.value;
}
function newTemperature(response) {
  let currentTemperatureValue = document.querySelector(
    ".current-temperature-value"
  );
  currentTemperatureValue.innerHTML = Math.round(
    response.data.temperature.current
  );
}

function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let day = date.getDay();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (hours < 10) {
    hours = `0${hours}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let formattedDay = days[day];
  return `${formattedDay} ${hours}:${minutes}`;
}

let searchForm = document.querySelector(".search-button");
searchForm.addEventListener("click", search);

let currentDateELement = document.querySelector("#current-date");
let currentDate = new Date();

currentDateELement.innerHTML = formatDate(currentDate);

let apiUrl = `https://api.shecodes.io/weather/v1/current?query=Lisbon&key=144016bb2ce3odff4b8e4583ca9a5c1t&units=metric
`;
