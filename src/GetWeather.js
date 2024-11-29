import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { StyleSheet, Text } from 'react-native';

const api = axios.create();

function GetWeather() {
    const [temperatureData, setTemperatureData] = useState();
    const [minTempData, setMinTempData] = useState();
    const [maxTempData, setMaxTempData] = useState();
    const [city, setCity] = useState();
    const [winds, setWinds] = useState();
    const [clouds, setClouds] = useState();
    const [humidity, setHumidity] = useState();
    const [weatherDescription, setWeatherDescription] = useState();
    useEffect(() => {
        axios.get("https://api.openweathermap.org/data/2.5/weather?q=London,uk&units=metric&APPID=fe15647dd5e3cce75aacc72cdd96df5e")
            .then((res) => {
                setTemperatureData(res.data.main.temp);
                setMinTempData(res.data.main.temp_min);
                setMaxTempData(res.data.main.temp_max);
                setCity(res.data.name);
                setWinds(res.data.wind.speed);
                setClouds(res.data.clouds.all);
                setHumidity(res.data.main.humidity);
            })
            .catch(e=> console.log(e));
    }, [])


    return (
        <div style={styles.container }>
            <h2>Data from Open Weather</h2>
            <p>Temprature in: {city} <img src={require('./clearweather.png')} /> </p>
            <p>Current Temperature: {temperatureData} degrees Celsius</p>
            <p>Maximum Temperature: {maxTempData} degrees Celsius</p>
            <p>Minimum Temperature: {minTempData} degrees Celsius</p>
            <p>Wind speed: {winds} km/h</p>
            <p>Cloud coverage: {clouds}%</p>
            <p>Humidity: {humidity}%</p>
        </div>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignment: 'center',
        backgroundColor: 'skyblue'
    }
}
)

export default GetWeather;
