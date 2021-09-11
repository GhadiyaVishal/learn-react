import React, { useState, useEffect } from 'react'
import "./style.css"
import Weather from './weather';
const Temp = () => {

    const [searchValue, setSearchValue] = useState("ahmedabad");
    const [tempInfo, setTempInfo] = useState({});
    

    const getWeatherInfo= async () => {
        try{
           let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=916e41160e2e22959ca927052d24378a`;

           const res = await fetch(url);
           const data = await res.json()
           const { temp, humidity, pressure } = data.main;
           const { main: weathermood } = data.weather[0];
           const { name } = data;
           const { speed } = data.wind;
           const { country, sunset } =data.sys;
           
           const newWeatherData = {
              temp,
              humidity,
              pressure,
              weathermood,
              name,
              speed,
              country,
              sunset,
           };
           setTempInfo(newWeatherData);
        }
        catch(err)
        {
            console.log(err);
        }
    };
    useEffect(() => {
        getWeatherInfo();
    }, []);
    return (
        <>
            <div className="wrap">
                <div class="search">
                    <input 
                       type="search"
                       placeholder="Search...."
                       autoFocus
                       id="search"
                       className="searchTerm"
                       value={searchValue}
                       onChange={(event) => setSearchValue(event.target.value)}
                       ></input>
                       <button className="searchButton" type="button" onClick={getWeatherInfo}>search</button>
                </div>
            </div>
            <Weather tempInfo = {tempInfo}/>
        </>
    )
}

export default Temp;
