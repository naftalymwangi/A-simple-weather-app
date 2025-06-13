async function getWeather() {
  const city = document.getElementById('city').value;
  const result = document.getElementById('result');
  if (!city) {
    result.innerText = 'Please enter a city name.';
    return;
  }

  const apiKey = "032865e0f7b8decf66e54a423d60a31a";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  result.innerText = "Fetching...";

  try {
    const res = await fetch(url);
    const data = await res.json();

    if (data.cod === "404") {
      result.innerText = "City not found.";
    } else {
      result.innerHTML = `
        <strong>${data.name}</strong><br>
        ${data.weather[0].description}<br>
        🌡️ Temp: ${data.main.temp}°C<br>
        💧 Humidity: ${data.main.humidity}%
      `;
    }
  } catch (err) {
    result.innerText = "Error fetching data.";
  }
}
