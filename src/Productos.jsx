import './Productos.css';
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

function Productos(){
    return(
        <div className='ContP'>
            <ContP />

        </div>
    )
}


function ContP(){
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
    );
}

function Tarjeta({name, src}){
    return(
        <div className='productosCard'>
            <img src={src} alt={name} />
            <p>{name}</p>
        </div>
    );
}

export default Productos;