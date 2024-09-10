document.getElementById('weather-form').addEventListener('submit', async (event) => {
    event.preventDefault();
    
    const city = document.getElementById('city').value;
    const apiKey = 'your_api_key'; // Replace with your API key
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;

    try {
        // Fetch current weather
        const weatherResponse = await fetch(weatherUrl);
        const weatherData = await weatherResponse.json();
        if (weatherData.cod === '404') {
            alert('City not found');
            return;
        }

        document.getElementById('weather-city').textContent = weatherData.name;
        document.getElementById('weather-description').textContent = weatherData.weather[0].description;
        document.getElementById('weather-temp').textContent = `${weatherData.main.temp}°C`;
        document.getElementById('weather-icon').src = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`;
        document.querySelector('.weather-info').classList.add('show');

        // Fetch 5-day forecast
        const forecastResponse = await fetch(forecastUrl);
        const forecastData = await forecastResponse.json();
        const forecastContainer = document.getElementById('forecast');
        forecastContainer.innerHTML = '';

        forecastData.list.forEach((item, index) => {
            if (index % 8 === 0) { // Take one forecast item per day (8 entries per day)
                const forecastDay = document.createElement('div');
                forecastDay.className = 'forecast-day';
                forecastDay.innerHTML = `
                    <h3>${new Date(item.dt_txt).toLocaleDateString()}</h3>
                    <img src="https://openweathermap.org/img/wn/${item.weather[0].icon}.png" alt="Weather Icon">
                    <p>${item.weather[0].description}</p>
                    <p>${item.main.temp}°C</p>
                `;
                forecastContainer.appendChild(forecastDay);
            }
        });
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
});
