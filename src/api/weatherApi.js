import axios from 'axios';

export const fetchWeather = async () => {
  try {
    const response = await axios.get(
      'https://api.open-meteo.com/v1/forecast?latitude=50.45&longitude=30.52&current_weather=true'
    );
    return response.data.current_weather;
  } catch (error) {
    console.error("Помилка завантаження погоди:", error);
    return null;
  }
};