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
    epect(thermostat.getTemp()).toBe(15);
  });
});
