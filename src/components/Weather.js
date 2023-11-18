import { format } from 'date-fns';
import { pt } from 'date-fns/locale';
import WeatherIcon from './WeatherIcon';
import { TbArrowBigUpFilled, TbArrowBigDownFilled  } from "react-icons/tb";
import { WiHumidity } from "react-icons/wi";


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
      <div className="box-weather-now d-flex mt-4 px-5">
        <div className="col-conditions">
          <div>
            <p className="city-name">{weatherData.city_name}, {weatherData.country_code}</p>
            <p>{currentDate}</p>
          </div>
          <div className="div-data-now mt-4 mb-2">
            <p className="pt-2"><TbArrowBigUpFilled className="icon-temp" /> Máxima: {Math.round(weatherData.data[0].app_max_temp)}&deg;C</p>
            <p><TbArrowBigDownFilled className="icon-temp" /> Miníma: {Math.round(weatherData.data[0].app_min_temp)}&deg;C</p>
            <p className="pb-2"><WiHumidity className="icon-humidity" /> Umidade: {tempNow.main.humidity}%</p>
          </div>
        </div>
        <div className="col-temp-now d-flex flex-column justify-content-center align-items-center">
          <p className="temp-now">{tempNow.main.temp}&deg;C</p>
          <p className="condition-now text-center">{tempNow.weather[0].description}</p>
        </div>
        <div className="col-icon d-flex justify-content-center align-items-center">
          <WeatherIcon iconCode={tempNow.weather[0].icon} />
        </div>        
      </div>
    );
  }