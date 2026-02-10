import {APIProvider,Map, AdvancedMarker, Pin} from '@vis.gl/react-google-maps';
import History from './assets/History.jpg';
import './Card.css';

function Card() {
    const position = {lat:20.276439346881805, Ing:-97.9636377050528};
    return (
        <div 
            className="card-con-fondo"
            style={{ backgroundImage: `url(${History})` }}
        >
            <div className="card-contenido">
                <h2>Vive la Historia del Wrestling Profesional</h2>
                <p>Descubre los momentos más icónicos del mundo del lucha profesional.</p>


            </div>
        </div>
    );
}

export default Card;