// weather.js

class WeatherService {
    constructor() {
      this.weatherData = {};
    }
  
    updateWeatherData(location, temperature, condition) {
      this.weatherData[location] = { temperature, condition };
    }
  
    getTemperature(location) {
      return this.weatherData[location] ? this.weatherData[location].temperature : null;
    }
  
    getCondition(location) {
      return this.weatherData[location] ? this.weatherData[location].condition : null;
    }
  }
  
  module.exports = WeatherService;
  