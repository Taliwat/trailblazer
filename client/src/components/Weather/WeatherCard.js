export default function WeatherCard ({ weather }) {
  // `https://openweathermap.org/img/wn/${weather.icon}@2x.png`

  return(
    <div className="rounded overflow-hidden shadow-lg">
      {weather.dt_txt}
    </div>
  )
}