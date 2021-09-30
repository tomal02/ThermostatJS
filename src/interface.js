document.addEventListener("DOMContentLoaded", () => {

  const selectElement = document.querySelector('#current-city');
  selectElement.addEventListener('change', (event) => {
    const city = event.target.value;
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric`
    
    fetch(url)
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        document.querySelector('#current-temperature').innerText = data.main.temp;
      })
  });

  const updatedTemp = () => {
    document.querySelector("#temperature").innerText = thermostat.temperature;
    document.querySelector("#temperature").className = thermostat.energyUsage();
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
  document.querySelector("#power-saving-toggle").addEventListener("click", () => {
      thermostat.togglePS();
      if (thermostat.isPowerSavingOn()) {
        document.querySelector("#power-saving-status").innerText = "ON";
      } else {
        document.querySelector("#power-saving-status").innerText = "OFF";
      }
    });
});
