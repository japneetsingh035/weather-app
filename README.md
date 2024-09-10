# Global Weather App

## Overview
This weather app allows users to enter any city name from around the world and get the current weather conditions using the OpenWeather API.

## Screenshots

![Screenshot 1](assets/Screenshot%202024-09-10%20at%201.03.35%20AM.png)
![Screenshot 2](assets/Screenshot%202024-09-10%20at%2012.59.27%20AM.png)


## Features
- Users can enter any city name globally.
- Retrieve real-time weather data, including temperature, weather conditions, and an icon representing the weather.

## Tech Stack
- HTML
- CSS
- JavaScript
- OpenWeather API

## Instructions

1. **Obtain an API Key**
   - Sign up for a free API key from OpenWeatherMap at [OpenWeather API](https://openweathermap.org/api).

2. **Setup Environment Variables**
   - Create a `.env` file in the root directory of the project.
   - Add your API key to the `.env` file:
     ```
     OPENWEATHER_API_KEY=your_openweather_api_key
     ```
   - **Important:** Ensure the `.env` file is included in your `.gitignore` to prevent it from being tracked by version control.

3. **Run the App**
   - Replace `your_openweather_api_key` with your actual API key in the file.
   - Open `index.html` in a browser to use the app.

## Future Enhancements
- Add a 5-day weather forecast.
- Improve error handling for cities with similar names.
- Add geolocation-based weather fetching.
