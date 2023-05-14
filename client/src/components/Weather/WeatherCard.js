import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button
} from "@material-tailwind/react";

export default function Weathercard ({ weather }) {
  //https://openweathermap.org/img/wn/10d@2x.png
  const ICONURI = `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`

  return(
    <Card className="m-2 w-64">
      <CardBody>
        <h1>{weather.dt_txt}</h1>
        <img src={ICONURI} alt={weather.weather[0].description}/>
        <p>Weather: {weather.weather[0].description}</p>
        <p>Temperature: {weather.main.temp}°F</p>
        <p>Humidity: {weather.main.humidity}%</p>
      </CardBody>
    </Card>
  )
}