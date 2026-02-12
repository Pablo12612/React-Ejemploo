import History from './assets/History.jpg';
import './Card.css';
import Mapa from './Mapa';

function Card() {
    return (
        <div 
            className="card-con-fondo"
            style={{ backgroundImage: `url(${History})` }}
        >
            <div className="card-contenido">
                <h2>Vive la Historia del Wrestling Profesional</h2>
                <p>Descubre los momentos más icónicos del mundo del lucha profesional.</p>
                <Mapa
                lat={20.238412227000126}
                lng={-97.95422547274731}
                nombre={"Universidad Tecnologica de Xicotepec de Juarez"}/>


            </div>
        </div>
    );
}

export default Card;