import { format } from 'date-fns';
import { pt } from 'date-fns/locale';

export default function Weather(props) {

    function getCurrentDate() {
        const today = new Date();
        const formattedDate = format(today, "dd 'de' MMMM 'de' yyyy", { locale: pt });
        return formattedDate;
    }

    // armazenando o valor recebido pela propriedade weatherData
    const weatherData = props.weatherData;
    const tempNow = props.tempNow;
    const currentDate = getCurrentDate();
    
    return (
      <div>
        <h3>{weatherData.city_name}, {weatherData.country_code}</h3>
        <p>Máxima: {Math.round(weatherData.data[0].app_max_temp)}&deg;C</p>
        <p>Miníma: {Math.round(weatherData.data[0].app_min_temp)}&deg;C</p>
        <p>Umidade: {tempNow && tempNow.main && tempNow.main.humidity}%</p>
        <p>Temperatura: {tempNow.main.temp}&deg;C</p>
        <p>Condição: {tempNow.weather[0].description}</p>
        <p>{currentDate}</p>
      </div>
    );
  }