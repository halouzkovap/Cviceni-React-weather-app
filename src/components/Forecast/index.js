import React ,{useState,useEffect} from "react";


const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];     
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];        

const Forecast=(props)=>{

const getDayfromUnix = (unix) => {
        const date = new Date(unix * 1000);
        return `${days[date.getDay()]}, ${months[date.getMonth()]} ${date.getDate()} `;
       };

return(
    
            <div class="forecast">
              <div class="forecast__day">{props.data && getDayfromUnix(props.data.dt)}</div>
              <div class="forecast__icon">
                { <img
                  src={`http://openweathermap.org/img/wn/${props.data && props.data.weather[0].icon}@2x.png`}
                  style={{ height: "100%" }}
                  alt="current weather icon"
                /> }
              </div>
               <div class="forecast__temp">{props.data && Math.round(props.data.main.temp)}°C</div>
            </div>

   )
}
export default Forecast;