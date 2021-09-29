describe("Thermostat", function () {
  beforeEach(function () {
    thermostat = new Thermostat();
  });
  it("Starts at 20", function () {
    expect(thermostat.getTemp()).toBe(20);
  });
  it("Temperature can be increased", function () {
    thermostat.up(10);
    expect(thermostat.getTemp()).toBe(30);
  });
  it("Temperature can be decreased", function () {
    thermostat.down(5);
    expect(thermostat.getTemp()).toBe(15);
  });
  it("Has a minimum temperature of 10", function () {
    thermostat.down(10);
    expect(function () {
      thermostat.down(1);
    }).toThrow("Can't lower temperature as would be below the minimum");
  });
  it("Temperature can be reset to 20", function () {
    thermostat.up(5);
    thermostat.reset();
    expect(thermostat.getTemp()).toBe(20);
  });

  describe("Energy usage", function () {
    it("Can return low-usage", function () {
      thermostat.down(3);
      expect(thermostat.energyUsage()).toBe("low-usage");
    });
    it("Can return mediun-usage", function () {
      expect(thermostat.energyUsage()).toBe("medium-usage");
    });
    it("Can return high-usage", function () {
      thermostat.up(6);
      expect(thermostat.energyUsage()).toBe("high-usage");
    });
  });

  describe("Power saving mode", function () {
    it("Can toggle power saving mode", function () {
      expect(thermostat.powerSaving).toBe(true);
      thermostat.togglePS();
      expect(thermostat.powerSaving).toBe(false);
    });
    it("Changes maximum temperature when toggling", function () {
      expect(thermostat.maximum).toBe(25);
      thermostat.togglePS();
      expect(thermostat.maximum).toBe(32);
    });
    it("Can return the current mode", function () {
      expect(thermostat.isPowerSavingOn()).toBe(true);
    });
  });
});
