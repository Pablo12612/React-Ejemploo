import './Contacto.css'
import pen from './assets/pen.jpg';


function Contacto(){
    return(
        <div className='Conc'>
            <ContC/>

        </div>
    )
}

function ContC(){
    return(
        <>
        <div className='contacto-header'>
            <h1 className='hc'>Contacto</h1>
        </div>
        <div className='contacto-container'>
            <p className='pc'>Para más información, contáctanos en:</p>
            <p className='pc'>Correo electrónico: info@wrestling.com</p>
            <p className='pc'>Teléfono: +52 764 133 3121</p>
            <p className='pc'>Dirección: Calle del Wrestling, Ciudad del Lucha, México</p>
            <p>Y en Todas nuestras redes sociales</p>
            <img src={pen} alt="Redes sociales" />

        </div>
        </>
    );
}

export default Contacto;