import {useEffect, useState} from  "react";
import {GoogleMap, LoadScript, Marker} from "@react-google-maps/api";
import { use } from "react";

function MapaGeolocalizacion(){

    const [ubicacion, setUbicacion] = useState(null)

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                setUbicacion({
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                })
            },
            (error) => console.error(error),
            {enableHighAccuracy: true, timeout: 5000, maximumAge: 0}
        )
    }, [])

    return(
        <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY }>
            {ubicacion && (
                <GoogleMap
                    mapContainerStyle={{width: '100%', height: '400px'}}
                    center={ubicacion}
                    zoom={15}
                    >
                        <Marker position={ubicacion} />
                    </GoogleMap>
                    //Mostrar recorrido de la ubicacion actual a la sucursal 1 del componente sucursales, utilizando la API de DirectionsService y DirectionsRenderer de Google Maps
                            
                    
            )}
            </LoadScript>
    )
}

export default MapaGeolocalizacion;
        