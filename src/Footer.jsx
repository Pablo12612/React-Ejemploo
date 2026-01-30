import './Footer.css';

function Footer(){
    return(
        <div className='footerDiv'>
            <PiePagina />
        </div>
    )
}

function PiePagina(){
    return(
        <div className='piepaginaDiv'>
            <div>
                <p>&copy; 2026 Mi Sitio Web. Todos los derechos reservados.</p>

            </div>

        </div>
    )
}

export default Footer