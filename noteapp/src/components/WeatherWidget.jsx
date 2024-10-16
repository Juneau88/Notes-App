// import React, { useState, useEffect } from "react";
// // import Cloudy from "../assets/cloudrmbckgcropped.png";

// const WeatherWidget = () => {
//   const [weatherData, setWeatherData] = useState(null);
//   const apiKey = "OtqAyQLMG5YH2BAtVZzUGwYrhtYmmsYH";

//   useEffect(() => {
//     fetch(`https://api.tomorrow.io/v4/timelines?location=Braunschweig&fields=temperature,humidity,weatherCode,windspeed&units=metric&timesteps=current&apikey=${apiKey}`)
//       .then((response) => response.json())
//       .then((data) => setWeatherData(data))
//       .catch((error) => console.error('Error fetching weather data:', error));
//   }, [apiKey]);

//   if (!weatherData) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="weather-widget">
//       <h3>Weather in Braunschweig</h3>
//       <br />
//       <p>Temperature: {weatherData.data.timelines[0].intervals[0].values.temperature}°C</p>
//       <p>Humidity: {weatherData.data.timelines[0].intervals[0].values.humidity}%</p>
//       <p>Wind: {weatherData.data.timelines[0].intervals[0].values.windspeed}km/h</p>
//       {/* <img className="cloudsy" src={require("../assets/cloudrmbckgcropped.png")} alt="" /> */}
//     </div>
//   );
// };

// export default WeatherWidget;