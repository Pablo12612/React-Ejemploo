import miImagen from './assets/images.png';
import iconoFaceook from './assets/face.png';
import iconoWhatsapp from './assets/Whatsapp.png';
import iconoYoutube from './assets/youtube.png';
import iconoLinkedin from './assets/link.png';
import iconoGmail from './assets/Gmail.png';
import iconoInstagram from './assets/instagram.png';



import './Encabezado.css';

function Encabezado(){
    return(
    <div className='encabezadoDiv'>
        <Logotipo />
        <Menu />
        <Redes />
    </div>
    )
}


function Logotipo(){
  return(
    <div className='logoDiv'>
      <img src={miImagen} alt='Logotipo' />
    </div>
  )
}

function Menu(){
    return(
        <div className='menuDiv'>
            <ul>
                <li>Inicio</li>
                <li>Acerca de</li>
                <li>Productos</li>
                <li>Contacto</li>
                <li>Sucursales</li>
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
        </div>
    )
}

function Card(){
    return(
        <div className='cardDiv'>
            <ul>
            <li>ROCK</li>
            <li>HEAVY</li>
            <li>NU</li>
            </ul>
        </div>
    )
}

export default Encabezado

