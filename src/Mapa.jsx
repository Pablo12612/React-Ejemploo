import {GoogleMap, useLoadScript, Marker} from '@react-google-maps/api';
const containerStyle = {
    width: '900px',
    height: '900px'
};

function Mapa ({lat, lng, nombre}){
const {isLoaded, loaderror} = useLoadScript({
    googleMapsApikey: import .meta.env.VITE_APP_GOOGLE_MAPS_API_KEY
})

if(loaderror) return <div>"Error al cargar el mapa</div>;
if(!isLoaded) return <div>"Cargando el mapa...</div>;

const center ={lat,lng};

return(
    <>
    <h3>{nombre}</h3>
    <GoogleMap
    mapContainerStyle={containerStyle}
    center={center}
    zoom={16}
    >

    <Marker position={center} />
    </GoogleMap>
    </>
);
}

export default Mapa;