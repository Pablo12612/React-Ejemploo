import heavy from './assets/heavy.png'
import Ozz from './assets/ozz.png'
import './Body.css';
function Card(){
    return(
        <div className='cardDiv'>
            <div className='card1'>
                <img src={heavy} alt="rOCKKK" />
                <p>Rock</p>
            </div>
            <div className='card2'>
                <img src={Ozz} alt="OZZZ" />
                <p>Heavy</p>
            </div>
            <div className='card3'>
                <img src="" alt="" />
                <p>Nu</p>
            </div>

        </div>
    )
}

export default Card

