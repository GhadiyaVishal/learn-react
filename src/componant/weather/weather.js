import React, {useState, useEffect} from 'react'

const Weather = ({tempInfo}) => {

    const [weatherCurrentStatus, setWeatherCurrentStatus] = useState("");
     const {
        temp,
        humidity,
        pressure,
        weathermood,
        name,
        speed,
        country,
        sunset,
     } = tempInfo;

     useEffect(() => {
         if(weathermood)
         {
             switch (weathermood) {
                 case "Clouds":
                     setWeatherCurrentStatus("wi-day-cloudy");
                     break;

                 case "Haze":
                    setWeatherCurrentStatus("wi-fog");
                    break;
                case "Clear":
                    setWeatherCurrentStatus("wi-day-sunny");
                    break;
                 default:
                    setWeatherCurrentStatus("wi-day-sunny");
                     break;
             }
             
         }
     }, [weathermood])


     let sec= sunset;
     let date = new Date(sec * 1000);   //convert into millisecond cause converting millisecond to time is easy in js
     let time = `${date.getHours()}:${date.getMinutes()}`;
    return (
        <>
         <article className="widget">
            <div className="weatherIcon">
                <i className={`wi ${weatherCurrentStatus}`}></i>
            </div>
            <div className="weatherInfo">
                <div className="temperature">
                    <span>{temp}&deg;</span>
                </div>
                <div className="description">
                    <div className="weatherCondition">{weathermood}</div>
                    <div className="place">{name} {country}</div>
                </div>
            </div>
            <div className="date">{new Date().toLocaleString()}</div>


              {/* 4 column section */}
              <div className="extra-temp">
                  <div className="temp-info-minmax">
                      <div className="two-sided-section">
                          <p>
                              <i className={"wi wi-sunset"}></i>
                          </p>
                          <p className="extra-info-leftside">
                              {time} PM <br />
                              sunset
                          </p>
                      </div>

                      <div className="two-sided-section">
                          <p>
                              <i className={"wi wi-humidity"}></i>
                          </p>
                          <p className="extra-info-leftside">
                              {humidity} <br />
                              humidity
                          </p>
                      </div>
                  </div>
                  <div className="weather-extra-info">
                  <div className="two-sided-section">
                          <p>
                              <i className={"wi wi-rain"}></i>
                          </p>
                          <p className="extra-info-leftside">
                              {pressure} <br />
                              Pressure
                          </p>
                      </div>
                      <div className="two-sided-section">
                          <p>
                              <i className={"wi wi-strong-wind"}></i>
                          </p>
                          <p className="extra-info-leftside">
                              {speed} <br />
                              Speed
                          </p>
                      </div>
                  </div>
              </div>

            </article>   
        </>
    )
}

export default Weather;
