// weather.test.js

const assert = require('assert');
const WeatherService = require('../src/weather');

describe('Unit Test - Weather Service', () => {
  it('should update weather data for a location', () => {
    const weatherService = new WeatherService();
    weatherService.updateWeatherData('New York', 25, 'Sunny');
    assert.deepStrictEqual(weatherService.weatherData['New York'], { temperature: 25, condition: 'Sunny' });
  });

  it('should get temperature for a location', () => {
    const weatherService = new WeatherService();
    weatherService.updateWeatherData('London', 18, 'Cloudy');
    const temperature = weatherService.getTemperature('London');
    assert.equal(temperature, 18);
  });

  it('should get condition for a location', () => {
    const weatherService = new WeatherService();
    weatherService.updateWeatherData('Paris', 30, 'Clear');
    const condition = weatherService.getCondition('Paris');
    assert.equal(condition, 'Clear');
  });

  it('should handle getting temperature for non-existing location', () => {
    const weatherService = new WeatherService();
    const temperature = weatherService.getTemperature('NonExistingCity');
    assert.equal(temperature, null);
  });

  it('should handle getting condition for non-existing location', () => {
    const weatherService = new WeatherService();
    const condition = weatherService.getCondition('NonExistingCity');
    assert.equal(condition, null);
  });

  // Additional test cases for mutation coverage
  it('should handle getting temperature for undefined location', () => {
    const weatherService = new WeatherService();
    const temperature = weatherService.getTemperature(undefined);
    assert.equal(temperature, null);
  });

  it('should handle getting condition for undefined location', () => {
    const weatherService = new WeatherService();
    const condition = weatherService.getCondition(undefined);
    assert.equal(condition, null);
  });

  // Add more unit tests as needed
});
