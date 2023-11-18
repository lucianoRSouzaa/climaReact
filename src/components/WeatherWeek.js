import WeatherWeekCard from './WeatherWeekCard';


export default function Weather(props) {

    // armazenando o valor recebido pela propriedade weatherData
    const weatherData = props.weatherData;
    
    return (
        <section className="weather-week-section">
            {weatherData.data.map((dia) => (
                <WeatherWeekCard key={dia.ts} data={dia} />
            ))}
        </section>
    );
}
  