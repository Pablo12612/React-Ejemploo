import bc from './assets/bc.png';
import iconoFaceook from './assets/face.png';
import iconoWhatsapp from './assets/Whatsapp.png';
import iconoYoutube from './assets/youtube.png';
import iconoLinkedin from './assets/link.png';
import iconoGmail from './assets/Gmail.png';
import iconoInstagram from './assets/instagram.png';
import PropTypes from 'prop-types';




import './Encabezado.css';
import Clima from './Clima';

function Encabezado({cambiarVista}){
    return(
    <div className='encabezadoDiv'>
        <Logotipo />
        <Menu cambiarVista={cambiarVista} />
        <Redes />
    </div>
    )
}


function Logotipo(){
  return(
    <div className='logoDiv'>
      <img src={bc} alt='Logotipo' />
    </div>
  )
}

function Menu({cambiarVista}){
    return(
        <div className='menuDiv'>
            <ul>
                <li onClick={() => cambiarVista('Inicio')}>Inicio</li>
                <li onClick={() => cambiarVista('AcercaDe')}>Acerca de</li>
                <li onClick={() => cambiarVista('Productos')}>Productos</li>
                <li onClick={() => cambiarVista('Galeria')}>Galería</li>
                <li onClick={() => cambiarVista('Contacto')}>Contacto</li>
                <li onClick={() => cambiarVista('Sucursales')}>Sucursales</li>

            </ul>
        </div>
    )
}

function Redes(){
    return(
        <div className='redesDiv'>
            <ul>
                <li><img src={iconoFaceook} alt="Facebook" /></li>
                <li><img src={iconoYoutube} alt="Youtube" /></li>
                <li><img src={iconoInstagram} alt="Instagram" /></li>
                <li><img src={iconoWhatsapp} alt="Whatsapp" /></li>
                <li><img src={iconoGmail} alt="Gmail" /></li>
                <li><img src={iconoLinkedin} alt="Linkedin" /></li>

            </ul>
            <Clima
            />
        </div>
    )
}
Menu.propTypes = {
    cambiarVista: PropTypes.func.isRequired
};

Encabezado.propTypes = {
    cambiarVista: PropTypes.func.isRequired
};

export default Encabezado;

