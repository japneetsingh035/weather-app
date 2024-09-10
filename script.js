document.getElementById('weather-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const city = document.getElementById('city').value;
    if (!city) {
        alert('Please enter a city name.');
        return;
    }

    const apiKey = 'your_openWeather_ApiKey'; // Replace with your OpenWeather API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                document.getElementById('weather-city').textContent = `Weather in ${data.name}`;
                document.getElementById('weather-description').textContent = data.weather[0].description;
                document.getElementById('weather-temp').textContent = `Temperature: ${data.main.temp}°C`;

                const weatherIcon = document.getElementById('weather-icon');
                weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
                weatherIcon.style.display = 'block'; // Show the icon

                // Show the weather-info section
                document.querySelector('.weather-info').classList.add('show');
            } else {
                alert('City not found. Please try again.');
                resetWeatherData();
            }
        })
        .catch(error => {
            console.error('Error fetching the weather data:', error);
            alert('Failed to fetch the weather data. Please try again later.');
            resetWeatherData();
        });
});

function resetWeatherData() {
    document.getElementById('weather-city').textContent = '';
    document.getElementById('weather-description').textContent = '';
    document.getElementById('weather-temp').textContent = '';
    document.getElementById('weather-icon').style.display = 'none'; // Hide the icon
    document.querySelector('.weather-info').classList.remove('show'); // Hide the weather-info section
}

