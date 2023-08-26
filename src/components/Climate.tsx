"use client"
import { useEffect, useState } from "react";
import { Sun } from "@/assets/icons/Sun";
import Image from "next/image";

import weather from '../assets/img/weather.png'
import rain from '../assets/img/rain.png'

interface WeatherData {
    name: string;
    main: {
        temp: number;
        humidity: number;
    };
    weather: {
        main: string;
    }[];
    rain?: {
        '1h': number;
    };
}


export function Climate() {

    const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
    const [currentDay, setCurrentDay] = useState<string>('');
    const [currentDate, setCurrentDate] = useState<string>('');
    const [locationPermissionDenied, setLocationPermissionDenied] = useState(false);

    useEffect(() => {

        const getLocation = () => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(fetchWeatherData, handleLocationError);
            } else {
                console.log("Geolocation is not supported by this browser.");
            }
        };

        const fetchWeatherData = async (position: { coords: { latitude: number; longitude: number; }; }) => {
            setLocationPermissionDenied(false);
            const apiKey = '3312cb75504b9a946a5921a3f93d5fb3';
            const { latitude, longitude } = position.coords;
            const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;

            try {
                const response = await fetch(apiUrl);
                const data = await response.json();
                setWeatherData(data);

            } catch (error) {
                console.error('Error fetching weather data:', error);
            }
        };

        const handleLocationError = () => {
            setLocationPermissionDenied(true);
        };

        getLocation();

        const fetchAndSetWeatherData = () => {
            getLocation();
        };

        const interval = setInterval(fetchAndSetWeatherData, 300000);


        const daysOfWeek = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
        const currentDate = new Date();
        const dayIndex = currentDate.getDay();
        setCurrentDay(daysOfWeek[dayIndex]);

        const formattedDate = `${currentDate.getDate().toString().padStart(2, '0')}/${(currentDate.getMonth() + 1).toString().padStart(2, '0')}/${currentDate.getFullYear()}`;
        setCurrentDate(formattedDate);

        return () => clearInterval(interval);
    }, []);


    if (locationPermissionDenied) {
        return <p>Permita o acesso a localização para exibir os dados.</p>;
    }

    if (!weatherData) {
        return <p>Carregando...</p>;
    }

    const cityName = weatherData.name;
    const temperature = Math.round(weatherData.main.temp - 273.15);
    const humidity = weatherData.main.humidity;
    const rainVolume = weatherData.rain?.['1h'] || 0;
    const weatherCondition = weatherData.weather[0].main;


    return (

            <div className="flex justify-center items-center w-full">
            <div className="bg-white rounded-lg shadow-md p-6 xl:w-1/3 ">
                <div className="flex justify-between">
                    <div className="w-1/2">
                        <h2 className="text-3xl font-bold mb-4">{cityName}</h2>
                        <h2 className="text-lg font-normal mb-4">{currentDay} - {currentDate}</h2>
                        <h2 className="text-md font-normal mb-4">Umidade: {humidity}%</h2>
                        <h2 className="text-md font-normal mb-4">Chuva: {rainVolume} mm/h</h2>
                    </div>
                    <div className="flex justify-center items-center w-1/2 gap-5">
                        <div className="w-32">
                            {weatherCondition === 'clear' ? <Sun /> : weatherCondition === 'rain' ? <Image src={rain} alt="Rain" /> : <Image src={weather} alt="Cloud and Sun" />}
                        </div>
                        <p className="text-md xl:text-xl 2xl:text-2xl">{temperature} °C</p>
                    </div>
                </div>
                <div className="text-xs text-center mt-5"><span >Os dados são atualizados a cada 5 minutos.</span></div>
            </div>
        </div>
    )
}