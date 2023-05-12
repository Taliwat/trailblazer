import { useEffect, useState } from "react";
import WeatherCard from "./WeatherCard"

export default function Weather ({ parkCode }) {
  const [weatherData, setWeatherData] = useState([])
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  const ROOTNPSURI = 'https://developer.nps.gov/api/v1/events?parkCode='
  const NPSURI = `${ROOTNPSURI}${parkCode}&api_key=${process.env.REACT_APP_NPS_API}`
  const openWeatherURI = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${process.env.REACT_APP_WEATHER_API}`

  useEffect(() =>{
    async function fetchData() {
      const response = await fetch(NPSURI);
      const data = await response.json();
      setLatitude(data.data.latitude);
      setLongitude(data.data.longitude);
      const weatherRes = await fetch(openWeatherURI);
      const wData = await weatherRes.json();
      setWeatherData(wData.list);
      console.log(weatherData[0])
    }
    fetchData()
  }, [])

  return(
    <div>
      {weatherData.map((weather) => (
        <WeatherCard weather={weather} key={weather.dt}/>
      ))}
    </div>
  )
}