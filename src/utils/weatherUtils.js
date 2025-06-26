const API_KEY = "5c7077c8fabef826a9b988d3e0b781b0"; // Replace this with your real API key

export async function fetchWeather(city) {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
  );
  if (!res.ok) throw new Error("City not found");
  return await res.json();
}
