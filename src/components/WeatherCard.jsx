import "../App.css"; 
import {
  WiDaySunny,
  WiRain,
  WiCloud,
  WiThunderstorm,
  WiSnow,
  WiFog,
} from "react-icons/wi";

export default function WeatherCard({ weather }) {
  const description = weather.weather[0].description.toLowerCase();

  // Function to select icon based on weather description
  const getWeatherIcon = () => {
    if (description.includes("cloud")) return <WiCloud size={48} />;
    if (description.includes("rain")) return <WiRain size={48} />;
    if (description.includes("sun") || description.includes("clear"))
      return <WiDaySunny size={48} />;
    if (description.includes("storm")) return <WiThunderstorm size={48} />;
    if (description.includes("snow")) return <WiSnow size={48} />;
    if (description.includes("fog") || description.includes("mist"))
      return <WiFog size={48} />;
    return <WiDaySunny size={48} />; // default icon
  };

  return (
    <div className="card">
      <h2>{weather.name}</h2>
      
      <div className="weather-icon-row">
        {getWeatherIcon()}
        <p className="desc">{weather.weather[0].description}</p>
      </div>

      <p className="temp">{Math.round(weather.main.temp)}°C</p>
      <p className="humidity">Humidity: {weather.main.humidity}%</p>
    </div>
  );
}


