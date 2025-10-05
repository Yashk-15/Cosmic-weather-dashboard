import { useState, useEffect } from "react";
import { fetchWeather } from "./utils/weatherUtils";
import AnimatedBackground from "./components/AnimatedBackground";
import WeatherCard from "./components/WeatherCard";
import { AnimatePresence, motion } from "framer-motion";
import "./App.css";
import ParticlesBackground from "./components/particlesbg";

function App() {
  const [city, setCity] = useState("New York");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchWeather(city)
      .then(setWeather)
      .catch(() => {
        setWeather(null);
        setError("City not found");
      });
  }, [city]);

  return (
    <div className="container">
       <ParticlesBackground />
      {weather && (
        <AnimatedBackground
          condition={weather.weather[0].main.toLowerCase()}
        />
      )}

      <div className="content">
        <h1>☄️ Cosmic Weather Dashboard</h1>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.input
            type="text"
            placeholder="Enter city..."
            value={city}
            onChange={(e) => setCity(e.target.value)}
            whileFocus={{ scale: 1.05, boxShadow: "0 0 10px rgba(255,255,255,0.6)" }}
            transition={{ type: "spring", stiffness: 300 }}
          />
        </motion.div>

        <AnimatePresence mode="wait">
          {weather ? (
            <motion.div
              key={weather.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5 }}
            >
              <WeatherCard weather={weather} />
            </motion.div>
          ) : (
            <p>{error}</p>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default App;


