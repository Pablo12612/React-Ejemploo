import './Sucursales.css'
function Sucursales() {
    return (
        <div className="ContS">
            <Ubis />
        </div>
    );
}

function Ubis() {

    const sucursales = [
        { id: 1, nombre: "Sucursal Centro", mapa: "URL_DEL_MAPA_1" },
        { id: 2, nombre: "Sucursal Norte", mapa: "URL_DEL_MAPA_2" },
        { id: 3, nombre: "Sucursal Sur", mapa: "URL_DEL_MAPA_3" },
        { id: 4, nombre: "Sucursal Este", mapa: "URL_DEL_MAPA_4" },
    ];

    return (
        <div className="contUbi">
            {sucursales.map((sucursal) => (
                <div className="cardUbi" key={sucursal.id}>
                    <h3>{sucursal.nombre}</h3>

                    <iframe
                        src={sucursal.mapa}
                        width="100%"
                        height="250"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        title={sucursal.nombre}
                    ></iframe>
                </div>
            ))}
        </div>
    );
}

export default Sucursales;
