import { useEffect, useState } from "react";
import Weathercard from "./WeatherCard"

export default function Weather ({ park }) {
  const [weatherData, setWeatherData] = useState([]);
  const lat = parseFloat(park.latitude);
  const lon = parseFloat(park.longitude);
  const openWeatherURI = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_WEATHER_API}`

  useEffect(() =>{
    async function fetchData() {
      const response = await fetch(openWeatherURI);
      const data = await response.json();
      setWeatherData(data.list);
    }
    fetchData()
  }, [openWeatherURI])

  useEffect(()=>{
    return
  }, [weatherData])

  return(
    <div id="Weather">
      WEATHER
      {/* {weatherData.filter(weather.dt_tx => weather.include().map((weather) => (
        <Weathercard weather={weather} key={weather.dt}/>
      ))} */}
    </div>
  )
}