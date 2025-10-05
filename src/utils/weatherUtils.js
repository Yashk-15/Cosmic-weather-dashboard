const API_KEY = "https://i3gheij89d.execute-api.ap-south-1.amazonaws.com/prod"; // Replace this with your real API key

export async function fetchWeather(city) {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
  );
  if (!res.ok) throw new Error("City not found");
  return await res.json();
}
