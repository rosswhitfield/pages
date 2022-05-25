setParameters = (pressure, temperature, humidity) => {
  console.log(pressure, temperature, humidity);
  document
    .getElementById("barometer")
    .setAttribute("transform", `rotate(${(pressure / 100 - 1000) * 3.375})`);
  document
    .getElementById("temperature")
    .setAttribute("transform", `rotate(${280 + temperature * 0.9})`);
  document
    .getElementById("humidity")
    .setAttribute("transform", `rotate(${90 - (humidity - 20) * 0.5625})`);
};

// setParameters(101660, 20.6, 92.839980753296);

data = fetch("https://api.weather.gov/stations/KOQT/observations/latest")
  .then((data) =>
    data.json().then((json) => {
      setParameters(
        json["properties"]["barometricPressure"]["value"],
        json["properties"]["temperature"]["value"],
        json["properties"]["relativeHumidity"]["value"]
      );
    })
  )
  .catch((error) => console.log("Error:" + error));
