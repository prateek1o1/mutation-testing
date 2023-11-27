// integrationWeather.test.js

const assert = require('assert');
const WeatherService = require('../core/weather');

describe('Integration Test - Weather Service', () => {
  // Existing integration test cases

  it('should update and retrieve weather data for a location', () => {
    const weatherService = new WeatherService();
    weatherService.updateWeatherData('Tokyo', 22, 'Rainy');
    
    const temperature = weatherService.getTemperature('Tokyo');
    const condition = weatherService.getCondition('Tokyo');

    assert.equal(temperature, 22);
    assert.equal(condition, 'Rainy');
  });

  it('should handle getting average temperature for a location in integration test', () => {
    const weatherService = new WeatherService();
    weatherService.updateWeatherData('Berlin', 20, 'Clear');
    weatherService.updateWeatherData('Berlin', 22, 'Clear');
    weatherService.updateWeatherData('Berlin', 18, 'Cloudy');
    
    const averageTemperature = weatherService.getAverageTemperature('Berlin');
    assert.equal(averageTemperature, (20 + 22 + 18) / 3);
  });

  // Add more integration test cases as needed
});
