describe("Thermostat", function () {
  it("Starts at 20", function () {
    let thermostat = new Thermostat();
    expect(thermostat.getTemp()).toBe(20);
  });
});
