// weather.test.js

const assert = require('assert');
const WeatherService = require('../core/weather');

describe('Unit Test - Weather Service', () => {
  // Existing test cases

  it('should handle getting average temperature for a location with no temperature history (mutant-killing case 1)', () => {
    const weatherService = new WeatherService();
    const averageTemperature = weatherService.getAverageTemperature('NewCity');
    assert.equal(averageTemperature, null);
  });

  it('should handle getting average temperature for a location with one temperature (mutant-killing case 2)', () => {
    const weatherService = new WeatherService();
    weatherService.updateWeatherData('Rome', 28, 'Sunny');
    const averageTemperature = weatherService.getAverageTemperature('Rome');
    assert.equal(averageTemperature, 28);
  });

  it('should handle getting average temperature for a location with multiple temperatures (mutant-killing case 3)', () => {
    const weatherService = new WeatherService();
    weatherService.updateWeatherData('Amsterdam', 16, 'Rainy');
    weatherService.updateWeatherData('Amsterdam', 14, 'Cloudy');
    weatherService.updateWeatherData('Amsterdam', 18, 'Clear');
    
    const averageTemperature = weatherService.getAverageTemperature('Amsterdam');
    assert.equal(averageTemperature, (16 + 14 + 18) / 3);
  });

  it('should handle getting average temperature for a location with no temperature history (mutant-killing case 1)', () => {
    const weatherService = new WeatherService();
    const averageTemperature = weatherService.getAverageTemperature('NewCity');
    assert.equal(averageTemperature, null);
  });

  it('should handle getting average temperature for a location with one temperature (mutant-killing case 2)', () => {
    const weatherService = new WeatherService();
    weatherService.updateWeatherData('Rome', 28, 'Sunny');
    const averageTemperature = weatherService.getAverageTemperature('Rome');
    assert.equal(averageTemperature, 28);
  });

  it('should handle getting average temperature for a location with multiple temperatures (mutant-killing case 3)', () => {
    const weatherService = new WeatherService();
    weatherService.updateWeatherData('Amsterdam', 16, 'Rainy');
    weatherService.updateWeatherData('Amsterdam', 14, 'Cloudy');
    weatherService.updateWeatherData('Amsterdam', 18, 'Clear');
    
    const averageTemperature = weatherService.getAverageTemperature('Amsterdam');
    assert.equal(averageTemperature, (16 + 14 + 18) / 3);
  });

  // New test cases to kill the identified mutants
  it('should handle getting average temperature for a location with one temperature (mutant-killing case 4)', () => {
    const weatherService = new WeatherService();
    weatherService.updateWeatherData('Paris', 25, 'Sunny');
    const averageTemperature = weatherService.getAverageTemperature('Paris');
    assert.equal(averageTemperature, 25);
  });

  it('should handle getting average temperature for a location with multiple temperatures (mutant-killing case 5)', () => {
    const weatherService = new WeatherService();
    weatherService.updateWeatherData('London', 20, 'Cloudy');
    weatherService.updateWeatherData('London', 22, 'Clear');
    weatherService.updateWeatherData('London', 18, 'Rainy');
    
    const averageTemperature = weatherService.getAverageTemperature('London');
    assert.equal(averageTemperature, (20 + 22 + 18) / 3);
  });

  // Add the rest of your test cases
});
