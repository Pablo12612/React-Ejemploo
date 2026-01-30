import bo from './assets/bad.jpg';
import om from './assets/simb.jpg';
import rock from './assets/rock.jpg';
import im from './assets/log.jpg';


import './Body.css';

function Body(){
    return(
        <div className='bodyDiv'>
            <Card />
        </div>

    )
}

function Card(){
    return(
        <div className='cardDiv'>
            <div className='card1'>
                <img src={bo} alt="rOCKKK" />
                <h2>Rock</h2>
                <p>dkfdfkhdhdfhhdfhflhldfhldhfldhlfhdlldh</p>
            </div>
            <div className='card2'>
                <img src={om} alt="OZZZ" />
                <h2>Metal</h2>
                                <p>dkfdfkhdhdfhhdfhflhldfhldhfldhlfhdlldh</p>

            </div>
            <div className='card3'>
                <img src={rock} alt="" />
                <h2>NU</h2>
                                <p>dkfdfkhdhdfhhdfhflhldfhldhfldhlfhdlldh</p>

            </div>

        </div>

    )
}

function ImagenFondo(){
    return(
        <div className='fondoDiv'>
            <div className='Fondo'>
                        <img src={im} alt="" />

            </div>
</div>
    )



}

export default Body

