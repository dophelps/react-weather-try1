import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecastcss";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }
  let apiKey = "b400ae3b711a616262d18b0ca2cbe78f";
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="WeatherForecast">
      <div cakssName="row">
        <div className="col">
          <div className="WeatherForecast-day">Thu</div>
          <WeatherIcon code="01d" size={36} />
          <div className="WeatherForecast-temperatures">
            {" "}
            <span className="WeatherForecast-temperature-max"> 19º </span>{" "}
            <span className="WeatherForecast-temperature-min">10º </span>
          </div>
        </div>
      </div>
    </div>
  );
}
