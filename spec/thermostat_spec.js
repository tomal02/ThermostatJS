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
  });
});
