import React, { useEffect, useState } from 'react';
import { Search, MapPin, Wind } from 'react-feather';
import weatherApi from '../../weatherapi/weatherapi'; // Correct import path
import dateFormat from 'dateformat';
import './weatherforecast.css'

const WeatherForeCast = ({city}) => {
  
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        if(city){
          const  data  = await weatherApi(city);
          console.log(data)
          setWeatherData(data);
          setLoading(false);

        }
       
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();

  }, [city]);

  const renderDate = () => {
    let now = new Date();
    return dateFormat(now, "dddd, mmmm dS, h:MM TT");
  }

  return (
    <div className='app'>
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error}</div>}
      {weatherData && weatherData.weather &&
        <div className="content">
          <div className="location d-flex">
            <MapPin />
            <h2>{weatherData.name} <span>({weatherData.sys.country})</span></h2>
          </div>
          <p className="datetext">{renderDate()}</p>
          <div className="weatherdesc d-flex flex-c">
            <img src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`} alt="" />
            <h3>{weatherData.weather[0].description}</h3>
          </div>
          <div className="tempstats d-flex flex-c">
            <h1>{weatherData.main.temp} <span>&deg;C</span></h1>
            <h3>Feels Like {weatherData.main.feels_like} <span>&deg;C</span></h3>
          </div>
          <div className="windstats d-flex">
            <Wind />
            <h3>Wind is {weatherData.wind.speed} Knots in {weatherData.wind.deg}&deg;</h3>
          </div>
        </div>
      }
      {!weatherData && !loading && <div className="content">
        <h4>No Data found !</h4>
      </div>}
    </div>
  );
}

export default WeatherForeCast;
