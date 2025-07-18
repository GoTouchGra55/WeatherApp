export async function fetchWeatherData(location) {
  if (!location) throw new Error('Location not provided');

  try {
    const resp = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=YXGFVLQHA66XJ4RQLLVVUMUYK`
    );

    if (!resp.ok) {
      throw new Error(`API Error: ${resp.status}`);
    }

    const data = await resp.json();
    return data;
  } 
  
  catch (err) {
    throw new Error(`Weather fetch failed: ${err.message}`);
  }
}
