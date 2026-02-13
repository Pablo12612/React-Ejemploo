import './Acerca de.css';
import jaja from './assets/jaja.jpg';


function AcercaDe(){
    return(
        <div className='AC'>
            <Contenedor />

        </div>
    )

}


function Contenedor(){
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



export default AcercaDe;