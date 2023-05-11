import { useEffect, useState } from "react";

export default function Weather ({ parkCode }) {
  const [eventData, setEventData] = useState([]);
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  const ROOTNPSURI = 'https://developer.nps.gov/api/v1/events?parkCode='
  const NPSURI = `${ROOTNPSURI}${parkCode}&api_key=${process.env.REACT_APP_NPS_API}`
  const opwnWeatherURI = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${process.env.REACT_APP_WEATHER_API}`

  useEffect(() =>{
    async function fetchData() {
      const response = await fetch(NPSURI);
      const data = await response.json();
      const weatherRes = await fetch(opwnWeatherURI);
      const weatherData = await weatherRes.json();
      setEventData(data.data)
      setLatitude(data.data.latitude);
      setLongitude(data.data.longitude);
    }
    fetchData()
  }, [NPSURI])

  return(
    <div>
      WEATHER
    </div>
  )
}