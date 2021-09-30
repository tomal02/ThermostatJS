document.addEventListener("DOMContentLoaded", () => {
  const updatedTemp = () => {
    document.querySelector("#temperature").innerText = thermostat.temperature;
  };

  const thermostat = new Thermostat();
  updatedTemp();

  document.querySelector("#temperature-up").addEventListener("click", () => {
    thermostat.up();
    updatedTemp();
  });
  document.querySelector("#temperature-down").addEventListener("click", () => {
    thermostat.down();
    updatedTemp();
  });
  document.querySelector("#temperature-reset").addEventListener("click", () => {
    thermostat.reset();
    updatedTemp();
  });
  document
    .querySelector("#power-saving-toggle")
    .addEventListener("click", () => {
      thermostat.togglePS();
      if (thermostat.isPowerSavingOn()) {
        document.querySelector("#power-saving-status").innerText = "ON";
      } else {
        document.querySelector("#power-saving-status").innerText = "OFF";
      }
    });
});
