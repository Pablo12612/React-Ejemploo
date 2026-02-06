import History from './assets/History.jpg';
import './Card.css';

function Card() {
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