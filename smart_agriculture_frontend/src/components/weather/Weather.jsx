import { WeatherWidget } from "@daniel-szulc/react-weather-widget"
import "./Weather.scss"

const CustomWeather = ({location}) => {
    return (
        <WeatherWidget
            location= {location}
        />
    );
}

const Weather = () => {
    return (
        <>
            <div className="weather">
                <div>
                    <h2>GPS Weather</h2>
                    <WeatherWidget
                        autoLocate="gps"
                    />
                </div>
                <div>
                    <h2>Bangladesh Weather</h2>
                    <CustomWeather location={"Bangladesh"}/>
                </div>
                <div>
                    <h2>Rajshahi Weather</h2>
                    <CustomWeather location={"Rajshahi"}/>
                </div>
                <div>
                    <h2>Sirajganj Weather</h2>
                    <CustomWeather location={"Sirajganj"}/>
                </div>
            </div>
        </>
    );
};

export default Weather;
