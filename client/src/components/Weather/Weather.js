import { useEffect, useState } from "react";
import Weathercard from "./WeatherCard"
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`${id === open ? "rotate-180" : ""
        } h-5 w-5 transition-transform`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}

export default function Weather({ park }) {
  const [weatherData, setWeatherData] = useState([]);
  const lat = parseFloat(park.latitude);
  const lon = parseFloat(park.longitude);
  const openWeatherURI = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_WEATHER_API}&units=imperial`

  const [open, setOpen] = useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(openWeatherURI);
      const data = await response.json();
      setWeatherData(data.list);
    }
    fetchData()
  }, [openWeatherURI])

  return (
    <div id="Weather" className="p-2 shadow-lg grow-0 w-full">
      <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(1)}>
          <p className="font-extrabold text-black-600 text-2xl">Weather Forecast:🌡</p>
        </AccordionHeader>
        <AccordionBody>
          <div className="flex flex-row flex-wrap">
            {weatherData && weatherData.map((weather) => (<Weathercard weather={weather} key={weather.dt} />))}
          </div>
        </AccordionBody>
      </Accordion>
    </div>
  )
}