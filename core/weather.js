// weather.js

class WeatherService {
  constructor() {
    this.weatherData = {};
    this.temperatureHistory = {};
  }

  updateWeatherData(location, temperature, condition) {
    // Update current weather data
    this.weatherData[location] = { temperature, condition };

    // Update temperature history
    if (!this.temperatureHistory[location]) {
      this.temperatureHistory[location] = [];
    }
    this.temperatureHistory[location].push(temperature);
  }

  getTemperature(location) {
    return this.weatherData[location] ? this.weatherData[location].temperature : null;
  }

  getCondition(location) {
    return this.weatherData[location] ? this.weatherData[location].condition : null;
  }

  getAverageTemperature(location) {
    const temperatures = this.temperatureHistory[location];
  
    if (!temperatures) {
      return null; // No temperature data available
    }
  
    const sum = temperatures.reduce((acc, temperature) => acc + temperature, 0);
    return sum / temperatures.length;
  }  
}

module.exports = WeatherService;
