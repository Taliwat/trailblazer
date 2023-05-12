export default function Weathercard ({ weather }) {
  // `https://openweathermap.org/img/wn/${weather.icon}@2x.png`

  return(
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <p>{weather}</p>
    </div>
  )
}