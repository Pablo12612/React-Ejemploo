import im from './assets/log.jpg';
import './Card.css';

function Card(){
    return(
        <div className='cardDiv'>
            <ImagenFondo />

        </div>
    )
}



function ImagenFondo(){
    return(
        <div className='fondoDiv'>
            <div className='Fondo'>
                        <img src={im} alt="" />
                        <p>ihfidfhdih</p>

            </div>
</div>
    )



}

export default Card