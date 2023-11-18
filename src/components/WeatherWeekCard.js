import { format, parseISO } from 'date-fns';
import { pt } from 'date-fns/locale';
import WeatherIcon from './WeatherIcon';

const WeatherCard = ({ data }) => {
    const formattedDate = parseISO(data.valid_date);
    const diaSemana = format(formattedDate, 'eee', { locale: pt });
  
    return (
      <div className="weather-card">
        <h3>{diaSemana}</h3>
        <WeatherIcon iconCode={data.weather.icon} />
        <p>Temp. Máxima: {data.max_temp}&deg;C</p>
        <p>Temp. Mínima: {data.min_temp}&deg;C</p>
      </div>
    );
};
  
export default WeatherCard;