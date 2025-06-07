document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("weatherBtn");
  const weatherOutput = document.getElementById("weather");

  button.addEventListener("click", async () => {
    const city = document.getElementById("city").value.trim();
    if (!city) {
      weatherOutput.innerHTML = "Please enter a city name.";
      return;
    }

    const apiKey = "9ef3a5f200228683633a2425bb5096df"; // Replace with your OpenWeatherMap API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    try {
      const response = await fetch(url);
      const data = await response.json();

      if (data.cod === 200) {
        weatherOutput.innerHTML = `
          <h3>${data.name}</h3>
          <p>${data.weather[0].description}</p>
          <p>Temperature: ${data.main.temp} °C</p>
          <p>Humidity: ${data.main.humidity}%</p>
        `;
      } else {
        weatherOutput.innerHTML = "City not found.";
      }
    } catch (error) {
      weatherOutput.innerHTML = "Error fetching weather data.";
      console.error(error);
    }
  });
});
