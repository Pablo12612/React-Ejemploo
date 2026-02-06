import wwee from './assets/wwee.jpg'; 
import aeww from './assets/aeww.jpg';
import njpw from './assets/njpw.jpg';
import tna from './assets/tna.jpg';
import AcercaDe from './Acerca de';
import Productos from './Productos';
import Galeria from './Galeria';
import Contacto from './Contacto';



import './Body.css';

function Body({vista}){
    const vistas={
        "Inicio": <Inicio />,
        "AcercaDe": <AcercaDe />,
        "Productos": <Productos />,
        "Galeria": <Galeria />,
        "Contacto": <Contacto />
    }
    return(
        <div className='card2'>
            {vistas[vista] || <Inicio />}
        </div>
    );
}
   
function Inicio(){
    return(
        <div className='inicio-container'>
            <Tarjeta name='WWE' src={wwee} />
            <Tarjeta name='AEW' src={aeww} />
            <Tarjeta name='NJPW' src={njpw} />
            <Tarjeta name='TNA' src={tna} />
        </div>
    );
}



function Tarjeta({name, src}){
    return(
        <div className='card1'>
            <img src={src} alt={name} />
            <p>{name}</p>
        </div>
    );
}

export default Body;
