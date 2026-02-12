import './Galeria.css'
import ft from './assets/ft.jpg';
import jclp from './assets/jclp.jpg';
import no from './assets/no.jpg';
import John from './assets/John.jpg';
import hey from './assets/hey.jpg';
import ltn from './assets/ltn.jpg';
import mex from './assets/mex.jpg';
import bros from './assets/bros.jpg';
import hbk from './assets/hbk.jpg';
import ch from './assets/ch.jpg';
import Good from './assets/good.jpg';



function Galeria(){
    return(
        <div className='ContG'>
            <ContG />
        </div>
    )
}


function ContG(){
     return(
        <>
        <div className='galeria-header'>
            <h1 className='Galeria'>Galería</h1>
        </div>
        <div className='galeria-container'>
            <Tarjeta name='NO Yeet' src={ft} />
            <Tarjeta name='Si' src={jclp} />
            <Tarjeta name='Last Time' src={no} />
            <Tarjeta name='John Cena' src={John} />
            <Tarjeta name='The Hero' src={hey} />
            <Tarjeta name='The Last Time is Now' src={ltn} />
            <Tarjeta name='Latinos' src={mex} />
            <Tarjeta name='Lucha Brothers' src={bros} />
            <Tarjeta name='Heart Break Kid' src={hbk} />
            <Tarjeta name='Champion' src={ch} />
            <Tarjeta name='Good' src={Good} />
        </div>
            </>
    );
}      

function Tarjeta({name, src}){
    return(
        <div className='galeriaCard'>
            <img src={src} alt={name} />
            <p>{name}</p>
        </div>
    );
}

export default Galeria;