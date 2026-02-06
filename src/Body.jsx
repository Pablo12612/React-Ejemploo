import wwee from './assets/wwee.jpg'; 
import aeww from './assets/aeww.jpg';
import njpw from './assets/njpw.jpg';
import log from './assets/log.jpg';   
import wwe from './assets/wwe.jpg';
import aew from './assets/aew.jpg';
import bnjpw from './assets/bnjpw.jpg';
import tna from './assets/tna.jpg';
import jaja from './assets/jaja.jpg';
import btna from './assets/btna.jpg';
import bul from './assets/bul.jpg';
import seth from './assets/seth.jpg';
import xd from './assets/xd.jpg';
import pl from './assets/pl.jpg';
import ro from './assets/ro.jpg';
import ed from './assets/ed.jpg';
import ge from './assets/ge.jpg';
import pa from './assets/pa.jpg';
import whc from './assets/whc.jpg';
import wuc from './assets/wuc.jpg';
import wuwc from './assets/wuwc.jpg';
import ft from './assets/ft.jpg';
import jclp from './assets/jclp.jpg';
import noc from './assets/noc.jpg';
import no from './assets/no.jpg';
import John from './assets/John.jpg';
import hey from './assets/hey.jpg';
import ltn from './assets/ltn.jpg';
import rg from './assets/rg.jpg';
import mex from './assets/mex.jpg';
import bros from './assets/bros.jpg';
import hbk from './assets/hbk.jpg';
import ch from './assets/ch.jpg';
import good from './assets/good.jpg';
import art from './assets/art.jpg';
import pen from './assets/pen.jpg';



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

function AcercaDe(){
    return (
        <div className="acerca-container">
            <h1 className="head">Acerca de nosotros</h1>
            <p className="text">
                Somos una pequeña comunidad dedicada a compartir información sobre el mundo del wrestling profesional y en general sobre las Luchitas Falsas.
                <img src={jaja} alt="jsjsj" />

                <p>Fan de Jey Uso</p>
            </p>
            
        </div>
    );
}

function Productos(){
    return(
        <>
        <div className='productos-header'>
                        <h1 className='hpro'>Productos</h1>

        </div>
        <div className='productos-container'>
            <Tarjeta name='T-Shirt Bullet Club | $35.00' src={bul} />
            <Tarjeta name='T-Shirt Seth Rollins | $30.00' src={seth} />
            <Tarjeta name='T-Shirt Degeneratio - X | $25.00' src={xd} />
            <Tarjeta name='T-Shirt Gunther | $30.00' src={pl} />
            <Tarjeta name='T-Shirt Randy Orton | $35.00' src={ro} />
            <Tarjeta name='T-Shirt Edge | $25.00' src={ed} />
            <Tarjeta name='T-Shirt Rated R Superstar Edge | $35.00' src={ge} />
            <Tarjeta name='T-Shirt Drew Mcintyre | $30.00' src={pa} />
            <Tarjeta name='World Heavyweight Championship | $45.00' src={whc} />
            <Tarjeta name='WWE Universal Championship | $40.00' src={wuc} />
            <Tarjeta name='WWE Undisputed Championship | $50.00' src={wuwc} />
        </div>
        </>
    )
}

function Galeria(){
     return(
        <>
        <div className='galeria-header'>
            <h1 className='Galeria'>Galería</h1>
        </div>
        <div className='galeria-container'>
            <Tarjeta name='WWE' src={wwe} />
            <Tarjeta name='ft' src={ft} />
            <Tarjeta name='jclp' src={jclp} />
            <Tarjeta name='no' src={no} />
            <Tarjeta name='John Cena' src={John} />
            <Tarjeta name='hey' src={hey} />
            <Tarjeta name='ltn' src={ltn} />
            <Tarjeta name='rg' src={rg} />
            <Tarjeta name='mex' src={mex} />
            <Tarjeta name='bros' src={bros} />
            <Tarjeta name='hbk' src={hbk} />
            <Tarjeta name='ch' src={ch} />
            <Tarjeta name='good' src={good} />
            <Tarjeta name='art' src={art} />   
        </div>
            </>
    );
}      


function Contacto(){
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

function Tarjeta({name, src}){
    return(
        <div className='card1'>
            <img src={src} alt={name} />
            <p>{name}</p>
        </div>
    );
}

export default Body;
