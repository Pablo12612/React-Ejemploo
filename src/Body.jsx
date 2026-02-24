import wwee from './assets/wwee.jpg'; 
import aeww from './assets/aeww.jpg';
import njpw from './assets/njpw.jpg';
import tna from './assets/tna.jpg';
import dm from './assets/dm.jpg';
import cmp from './assets/cmp.jpg';
import mjf from './assets/mjf.jpg';
import ys from './assets/ys.jpg';
import ms from './assets/ms.jpg';
import AcercaDe from './Acerca de';
import Productos from './Productos';
import Galeria from './Galeria';
import Contacto from './Contacto';
import Sucursales from './Sucursales';
import Usuarios from './Usuarios';
import Carrito from './Carrito';



import './Body.css';

function Body({vista}){
    const vistas={
        "Inicio": <Inicio />,
        "AcercaDe": <AcercaDe />,
        "Productos": <Productos />,
        "Galeria": <Galeria />,
        "Contacto": <Contacto />,
        "Sucursales": <Sucursales />,
        "Usuarios": <Usuarios />,
        "Carrito": <Carrito />
    }
    return(
        <div className='cardDiv'>
            {vistas[vista] || <Inicio />}
        </div>
    );
}
   
function Inicio(){
    return(
        <div className='inicio-container'>
            <Tarjeta name='WWE' src={wwee} />
            <Tarjeta name='WWE' src={wwee} />
            <Tarjeta name='AEW' src={aeww} />
            <Tarjeta name='NJPW' src={njpw} />
            <Tarjeta name='TNA' src={tna} />
            <Tarjeta name='Drew Mcintyre' src={dm}/>
            <Tarjeta name='CM Punk' src={cmp} />
            <Tarjeta name='Maxwell Jacob Friedman (MJF)' src={mjf}/>
            <Tarjeta name='Yota Tsuji' src={ys}/>
            <Tarjeta name='Mike Santana' src={ms}/>

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
