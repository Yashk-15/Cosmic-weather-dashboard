// Replace with your actual API Gateway URL
const API_ENDPOINT = "https://i3gheij89d.execute-api.ap-south-1.amazonaws.com/weather";

export async function fetchWeather(city) {
  try {
    const response = await fetch(`${API_ENDPOINT}?city=${encodeURIComponent(city)}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('City not found');
    }

    const result = await response.json();
    
    // Log whether data came from cache or API
    console.log(`Data source: ${result.source}`);
    
    return result.data;
  } catch (error) {
    console.error('Error fetching weather:', error);
    throw error;
  }
}
