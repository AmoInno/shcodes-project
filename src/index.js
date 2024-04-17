function updateWeatherInfo(response) {
  let temperatureElement = document.querySelector("#temperature");
  let temp = response.data.temperature.current;
  temperatureElement.innerHTML = Math.round(temp);
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = response.data.city;
}

function searchCity(city) {
  let apiKey = "2cb2816d3aft58ff4684d3f6f5ob5068";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(updateWeatherInfo);
}

function doSearch(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input-value");

  searchCity(searchInput.value);
}

let searchFormElement = document.querySelector("#search-form-input");
searchFormElement.addEventListener("submit", doSearch);

searchCity("Paris");
