class Thermostat {
  constructor() {
    this.temperature = 20;
    this.MINIMUM = 10;
  }
  getTemp() {
    return this.temperature;
  }
  up(change) {
    this.temperature += change;
  }
  down(change) {
    if (this.temperature - change >= this.MINIMUM) {
      this.temperature -= change;
    } else {
      throw "Can't lower temperature as would be below the minimum";
    }
  }
}
