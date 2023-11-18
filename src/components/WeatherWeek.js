import WeatherWeekCard from './WeatherWeekCard';


export default function WeatherWeek(props) {

    // armazenando o valor recebido pela propriedade weatherData
    const weatherData = props.weatherData;
    
    return (
        <div className="weather-week-section d-flex mt-4 mb-5">
            {weatherData.data.map((dia) => (
                <WeatherWeekCard key={dia.ts} data={dia} />
            ))}
        </div>
    );
}
  