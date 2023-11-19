import React, { useState } from 'react';

import Weather from './Weather';
import WeatherWeek from './WeatherWeek';
import Footer from './Footer'
import { useTheme } from './Theme/ThemeContext';


export default function Main() {
    // declaração das variáveis
    const { theme } = useTheme();

    const [weatherData, setWeatherData] = useState(null);
    const [weatherDataNow, setWeatherDataNow] = useState(null);
    const [city, setCity] = useState('');
    const [apiKey] = useState('f10175fd866847518fbe2c603425902b');
    const [apiKey2] = useState('b44df372b4a8f835767dc76a901dcd99');

    function kelvinToCelsius(kelvin) {
        return Math.round(kelvin - 273.15);
    }

    function searchWeather() {
        fetch(`https://api.weatherbit.io/v2.0/forecast/daily?city=${city}&key=${apiKey}&lang=pt`)
            .then(response => response.json())
            .then(data => {
                setWeatherData(data)
            })
            .catch(error => {
                console.log(error);
            });

        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey2}&lang=pt`)
            .then(response => response.json())
            .then(data => {
                setWeatherDataNow(data);
                data.main.temp = kelvinToCelsius(data.main.temp);
            })
            .catch(error => {
                console.log(error);
            });
    }

  return (
    <section className={`section-main ${weatherData ? '' : 'full-screen'} ${theme === 'dark' ? 'dark' : ''}`}>
        <div className="div-main">
            <label>Cidade</label>
            <div className="d-flex gap-2">
                <input className="form-control shadow-sm" type="text" placeholder="Digite o nome da cidade" onChange={(e) => setCity(e.target.value)} />
                <button className="btn btn-primary" onClick={searchWeather}>Buscar</button>
            </div>
        </div>

        {weatherData && weatherDataNow && <Weather weatherData={weatherData} tempNow={weatherDataNow} />}

        {weatherData && weatherDataNow && <WeatherWeek weatherData={weatherData} />}

        {weatherData && weatherDataNow && <Footer />}
    </section>
  );
}