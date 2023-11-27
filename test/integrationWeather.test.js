// integrationWeather.test.js

const assert = require('assert');
const WeatherService = require('../core/weather');

describe('Integration Test - Weather Service', () => {
  it('should update and retrieve weather data for a location', () => {
    const weatherService = new WeatherService();
    weatherService.updateWeatherData('Tokyo', 22, 'Rainy');
    
    const temperature = weatherService.getTemperature('Tokyo');
    const condition = weatherService.getCondition('Tokyo');

    assert.equal(temperature, 22);
    assert.equal(condition, 'Rainy');
  });

  // Add more integration tests as needed
});
