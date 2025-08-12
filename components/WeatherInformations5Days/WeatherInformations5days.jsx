import "./WeatherInformations5Days.css";

function WeatherInformations5Days({ weather5Days }) {
  let dailyForecast = {};

  for (let forecast of weather5Days.list) {
    //forecast = previsão.
    //Coletando a "Unix timestamp" e convertendo para data usual.
    const date = new Date(forecast.dt * 1000).toLocaleDateString();

    if (!dailyForecast[date]) {
      dailyForecast[date] = forecast;
    }
  }

  const next5DaysForecast = Object.values(dailyForecast).slice(0, 6);

  function convertDate(date) {
    const newDate = new Date(date.dt * 1000).toLocaleDateString("pt-BR", {
      weekday: "long",
      day: "2-digit",
    });

    return newDate;
  }

  return (
    <div className="weather-container">
      <h2>Previsão próximos 5 dias.</h2>
      {next5DaysForecast.map((forecast) => (
        <div key={forecast.dt}>
          <p>{convertDate(forecast)}</p>
          <img
            src={`http://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`}
            alt=""
          />
          <p>{forecast.weather[0].description}</p>
          <p>
            {Math.round(forecast.main.temp_min)}ºC min/
            {Math.round(forecast.main.temp_max)}ºC max
          </p>
        </div>
      ))}
    </div>
  );
}

export default WeatherInformations5Days;
