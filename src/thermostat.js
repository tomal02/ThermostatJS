class Thermostat {
  constructor() {
    this.temperature = 20;
    this.MINIMUM = 10;
    this.maximum = 25;
    this.powerSaving = true;
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

  togglePS() {
    if (this.powerSaving === true) {
      this.powerSaving = false;
      this.maximum = 32;
    } else {
      this.powerSaving = true;
      this.maximum = 25;
    }
  }

  reset() {
    this.temperature = 20;
  }
}
