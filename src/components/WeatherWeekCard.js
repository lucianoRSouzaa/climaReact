import { format, parseISO } from 'date-fns';
import { pt } from 'date-fns/locale';
import WeatherIcon from './WeatherIcon';

const WeatherCard = ({ data }) => {
    const formattedDate = parseISO(data.valid_date);
    const diaSemana = format(formattedDate, 'eee', { locale: pt });
  
    return (
      <div className="d-flex flex-column align-items-center flex-fill weather-card">
        <p>{diaSemana}</p>
        <div className="border-right d-flex flex-column align-items-center w-100 pt-2">
            <WeatherIcon iconCode={data.weather.icon} />
            <div className="d-flex flex-column">
                <span className="pt-3">{Math.round(data.max_temp)}&deg;C</span>
                <span>{Math.round(data.min_temp)}&deg;C</span>
            </div>
        </div>
      </div>
    );
};
  
export default WeatherCard;