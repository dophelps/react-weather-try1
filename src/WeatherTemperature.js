import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");
  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <div className="WeatherTemperature">
        <span className="temperature">{Math.round(props.celsius)}</span>
        <span className="unit">
          {" "}
          ºC |{" "}
          <a href="/" onClick={showFahrenheit}>
            {" "}
            ºF
          </a>{" "}
        </span>{" "}
      </div>
    );
  } else {
    return (
      <div className="WeatherTemperature">
        <span className="temperature">{Math.round(props.fahrenheit)}</span>
        <span className="unit">
          {" "}
          <a href="/" onClick={showCelsius}>
            ºC |{" "}
          </a>{" "}
          ºF
        </span>{" "}
      </div>
    );
  }
}
