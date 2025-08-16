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
      <h3 className="">Previsão próximos 5 dias.</h3>
      <div className="weather-list">
        {next5DaysForecast.map((forecast) => (
          <div key={forecast.dt} className="wheather-item">
            <p className="forecast-day">{convertDate(forecast)}</p>
            <img
              src={`http://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`}
              alt=""
            />
            <p className="forecast-description">{forecast.weather[0].description}</p>
            <p>
              {Math.round(forecast.main.temp_min)}ºC min/
              {Math.round(forecast.main.temp_max)}ºC max
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WeatherInformations5Days;
