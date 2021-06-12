import { useEffect, useState } from 'react';
import { Weather } from './Weather';
import { SearchCityForm } from './SearchCityForm';

const URL = `https://api.openweathermap.org/data/2.5/weather?appid=103d2bea1f0fea90b85f7ca4c51dcc4f&units=metric
&q=London`;

export const WeatherApp = () => {
  const [currentWeather, setCurrentWeather] = useState();
  const [isWeatherLoading, setIsWeatherLoading] = useState(true);

  const setWeather = (data) => {
    setCurrentWeather({
      city: data.name,
      temp: data.main.temp,
      feelsLike: data.main.feels_like,
      max: data.main.temp_max,
      min: data.main.temp_min,
    });
    setIsWeatherLoading(false);
  };
  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setWeather(data);
      });
  }, [URL]);
  // const { city, temp, feelsLike, max, min } = currentWeather;
  return (
    <div>
      <SearchCityForm
        beforeSubmit={() => {
          setIsWeatherLoading(true);
        }}
        onSuccessSubmit={(data) => {
          setWeather(data);
        }}
      />
      {isWeatherLoading ? (
        <h1>Loadinbg...</h1>
      ) : (
        <Weather {...currentWeather} />
      )}
    </div>
  );
};
