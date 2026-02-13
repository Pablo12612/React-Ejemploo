import History from './assets/History.jpg';
import './Card.css';

function Comp(){
    return(
        <Card/>
    )
}

function Card() {

    function irARuta() {
        const origen = "20.27642996697176,-97.97035069536626";
        const destino = "19.49781100406502,-99.17447281658546";

        const url = `https://www.google.com/maps/dir/?api=1&origin=${origen}&destination=${destino}&travelmode=driving`;

        window.open(url, "_blank");
    }

    return (
        <div 
            className="card-con-fondo"
            style={{ backgroundImage: `url(${History})` }}
        >
            <div className="card-contenido">
                <h2>Vive la Historia del Wrestling Profesional</h2>
                <p>Descubre los momentos más icónicos del mundo del lucha profesional.</p>

                {/* MAPA EMBEBIDO */}
                <div className="mapa-container">
                    <iframe
                        title="Mapa sucursal"
                        width="100%"
                        height="300"
                        style={{ border: 0, borderRadius: "10px" }}
                        loading="lazy"
                        allowFullScreen
                        src="https://www.google.com/maps?q=19.49781100406502,-99.17447281658546&hl=es&z=14&output=embed"
                    ></iframe>
                </div>

                <button onClick={irARuta} className="btn-ruta">
                    Cómo llegar desde mi ubicación 🚗
                </button>

            </div>
        </div>
    );
}

export default Comp;
