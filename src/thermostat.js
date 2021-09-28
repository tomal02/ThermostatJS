class Thermostat {
  constructor() {
    this.temperature = 20;
  }
  getTemp() {
    return this.temperature;
  }
  up(change) {
    this.temperature += change;
  }
  down(change) {
    this.temperature -= change;
  }
}
