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
});
