import { useEffect, useState } from "react";
import './Clima.css'

function Clima(){
    const [clima, setClima] = useState(null);
    const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;
    const lat = 20.23577966923853;
    const lng = -97.95701497018916;

    useEffect(() =>{
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric&lang=es`)
        .then((res) => res.json())
        .then((data) => {
            setClima(data)
            console.log(data)
        })
        .catch((error) => console.log('Error:', error));

    },[])

    return(
        <div className="divClima">
            {
                clima && clima.main ? (
                    <>
                        <p>
                            {clima.name} 🌡️Temp: {clima.main.temp}°C 💧Hum: {clima.main.humidity}%
                        </p>
                        <p>{clima.weather[0].description}</p>
                    </>
                ) : (
                    <p>Cargando clima...</p>
                )
            }
        </div>
    );
}

export default Clima;
