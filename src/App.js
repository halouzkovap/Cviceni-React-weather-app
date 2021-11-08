import React,{useState,useEffect} from 'react';
import "./App.css";
import CurrentWeather from './components/CurrentWeather';

const App = () => {
  const [weather,setWeather]=useState(null);
  const[city,setCity]=useState("Prague")
  const [forrecast,setForrecast]=useState(null);


const apikey = "7f8488732453f8caa4c6121d9d9dd7b4";
  
const filterForrecast=(data)=>{
  return data.filter((_, index) => index % 8 === 0);
}

const fetchForrecast = () => {
          fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apikey}`)
          .then(response => response.json())
          .then(json => {setForrecast(filterForrecast(json.list)); console.log(json.list);}) 
}
  
const fetchCurrentWeather=()=>{
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apikey}`)
  .then(response => response.json())
  .then(json => {setWeather(json); console.log(json);}) 
}

    useEffect(() => {
      fetchForrecast();
    }, [city]);
  
    useEffect(() => {
      fetchCurrentWeather();
    }, [city]);

  console.log(forrecast)
  
  return (
    <div className="App">
      <div className="container">
        <h1>My Weather App</h1>
        <div className="weather">
          { <div className="button-group">
            <button className="button" onClick={()=>setCity("Prague")}>Prague</button>
            <button className="button" onClick={()=>setCity("Brno")}>Brno</button>
            <button className="button" onClick={()=>setCity("London")}>London</button>
          </div> }

        <CurrentWeather data={weather} />

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
              {forrecast  && forrecast.map(f => <div class="forecast__temp">{f && Math.round(f.main.temp)}°C</div>)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
