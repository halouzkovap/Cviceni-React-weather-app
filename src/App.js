import React,{useState,useEffect} from 'react';
import "./App.css";

const App = () => {
  const [weather,setWeather]=useState(null);
  


  const fetchWeather = () => {
    console.log("fetch")
        fetch('https://api.openweathermap.org/data/2.5/weather?q=Prague&units=metric&appid=7f8488732453f8caa4c6121d9d9dd7b4')
        .then(response => response.json())
        .then(json => {setWeather(json); console.log(json);}) 
  }

  console.log("before fetch");

  useEffect(() => {
    console.log("useeffect")
    fetchWeather();
  }, []);

  console.log(weather)

  
  return (
    <div className="App">
      <div className="container">
        <h1>My Weather App</h1>
        <div className="weather">
          {/* <div className="button-group">
            <button className="button">City01</button>
            <button className="button">City02</button>
            <button className="button">City03</button>
          </div> */}
          <div className="weather__current">
            <h2 className="weather__city" id="mesto">
              City, Country
            </h2>
            <div className="weather__inner weather__inner--center">
              <div className="weather__section weather__section--temp">
                <span className="weather__temp-value" id="teplota">
                  {weather && Math.round(weather.main.temp)}
                </span>
                <span className="weather__temp-unit">°C</span>
                <div className="weather__description" id="popis">
                  --
                </div>
              </div>
              <div
                className="weather__section weather__section--icon"
                id="ikona"
              >
                { <img
                  src={`http://openweathermap.org/img/wn/${weather && weather.weather[0].icon}@2x.png`}
                  alt="current weather icon"
                /> }

              </div>
            </div>
            <div className="weather__inner">
              <div className="weather__section">
                <h3 className="weather__title">Wind</h3>
                <div className="weather__value">
                  <span id="wind">--</span> km/h
                </div>
              </div>
              <div className="weather__section">
                <h3 className="weather__title">Humidity</h3>
                <div className="weather__value">
                  <span id="humidity">--</span> %
                </div>
              </div>
            </div>
            <div className="weather__inner">
              <div className="weather__section">
                <h3 className="weather__title">Sunrise</h3>
                <div className="weather__value">
                  <span id="sunrise">{weather && weather.sys.sunrise}</span>
                </div>
              </div>
              <div className="weather__section">
                <h3 className="weather__title">Sunset</h3>
                <div className="weather__value">
                  <span id="sunset">{weather && weather.sys.sunset}</span>
                </div>
              </div>
            </div>
          </div>
          <div class="weather__forecast" id="predpoved">
            <div class="forecast">
              <div class="forecast__day">Day, date</div>
              <div class="forecast__icon">
                {/* <img
                  src={URL FROM OPEN WEATHER}
                  style={{ height: "100%" }}
                  alt="current weather icon"
                /> */}
              </div>
              <div class="forecast__temp">-- °C</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
