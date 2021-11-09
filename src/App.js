import React,{useState,useEffect} from 'react';
import "./App.css";
import CurrentWeather from './components/CurrentWeather';
import Forecast from './components/Forecast';
import Cities, { cities } from './city'

import filterForrecast from './utils'

const App = () => {
  const [weather,setWeather]=useState(null);
  const[city,setCity]=useState("Prague")
  const [forrecast,setForrecast]=useState(null);


const apikey = "7f8488732453f8caa4c6121d9d9dd7b4";
  

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


    const changeCity=(e)=>{
      setCity(e.target.value)
    }

  console.log(forrecast)
  
  return (
    <div className="App">
      <div className="container">
        <h1>My Weather App</h1>
        <div className="select-wrapper">
          <select
            className="select"
            name="cityselect"
            id="cityselect"
            value={city}
            onChange={changeCity}
          >
           {cities.map(c=> <option value={c}>{c}</option>)}
          </select>
        </div>
        <div className="weather">
        <CurrentWeather data={weather} mesto={city}/>
        <div class="weather__forecast" id="predpoved">
        {forrecast  && forrecast.map(f=><Forecast data={f}/>)}
         </div>
        </div>
      </div>
    </div>
  );
};

export default App;
