import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div class="container">
        <Weather defaultCity="New York" />
        <footer>
          {" "}
          This page was coded by Dani Phelps and is {""}
          <a
            href="https://github.com/dophelps/react-weather-try1"
            target="_blank"
            rel="noopner noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and
          <a
            href="https://tangerine-croissant-171f0e.netlify.app"
            target="_blank"
            rel="noopner noreferrer"
          >
            {" "}
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
