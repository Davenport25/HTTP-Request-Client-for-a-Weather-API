axios = require('axios');// Imports the Axios Library

API_KEY = '0af66d1bdccce7a7a1b86714e4a31e5c'; // Replace with your actual API key gotten from OpenWeatherMap
BASE_URL = 'https://api.openweathermap.org/data/2.5/weather'; // is the starting point of the API request

getWeatherByCity = async (city) => { //Function to fetch weather data
  try {
     response = await axios.get(BASE_URL, {
      params: { // adds the parameters needed for a complete request

        q: city,
        appid: API_KEY,
        units: 'metric', // Use 'imperial' for Fahrenheit
      },
    });

     data = response.data;
    console.log(`The Weather in ${data.name}, ${data.sys.country}:`);
    console.log(`Temperature is: ${data.main.temp}°C`);
    console.log(`Condition is: ${data.weather[0].description}`);
  } catch (error) {
    console.error('Error fetching weather data:', error.response?.data?.message || error.message);
  }
};

// Specify the city
 city = 'Ibadan'; // 

getWeatherByCity(city);
