import './Sucursales.css';

function Sucursales() {
  const sucursales = [
    { 
            nombre: "Sucursal Arena México", 
            direccion: "Av. Reforma #123, CDMX", 
            telefono: "55 1234 5678",
            horario: "Lun - Sáb | 9:00 am - 7:00 pm",
            lat: 19.49781100406502, 
            lng: -99.17447281658546
        },
        { 
            nombre: "Sucursal Plaza del Vestido", 
            direccion: "Av. Reforma #456, Tulancingo", 
            telefono: "33 9876 5432",
            horario: "Lun - Vie | 9:00 am - 6:00 pm",
            lat: 20.100164112062654, 
            lng: -98.35585153561426
        },
        { 
            nombre: "Sucursal Tianguis Cultural Del Chopo", 
            direccion: "Av. Tianguis Cultural #800, CDMX", 
            telefono: "81 2468 1357",
            horario: "Lun - Sáb | 10:00 am - 8:00 pm",
            lat: 19.449292480460198, 
            lng: -99.14942316631888
            
        }
    ];

    return (
        <div className="sucursales-section">
            <h2>Nuestras Sucursales</h2>

            {sucursales.map((sucursal, index) => (
                <div key={index} className="sucursal-card">
                    <h3>{sucursal.nombre}</h3>
                    <p>📍 {sucursal.direccion}</p>
                    <p>📞 Tel: {sucursal.telefono}</p>
                    <p>⏰ Horario: {sucursal.horario}</p>
                    
                    
                    <div className="map-container">
                        <iframe
                            title={`map-${index}`}
                            src={`https://www.google.com/maps?q=${sucursal.lat},${sucursal.lng}&hl=es;z=14&output=embed`}
                            width="100%"
                            height="250"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                        ></iframe>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Sucursales;