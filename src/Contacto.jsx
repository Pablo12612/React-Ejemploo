import './Contacto.css'
import { useState } from 'react'
function Contacto(){
    return(
        <div className='Conc'>
            <ContC/>
        </div>
    )
}

function ContC(){

    const [formData, setFormData] = useState({
        nombre: '',
        correo: '',
        mensaje: ''
    })

    const [enviado, setEnviado] = useState(false)

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if(formData.nombre === '' || formData.correo === '' || formData.mensaje === ''){
            alert('Por favor completa todos los campos')
            return
        }

        console.log(formData)
        setEnviado(true)

        setFormData({
            nombre: '',
            correo: '',
            mensaje: ''
        })
    }

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

            <form className='formulario' onSubmit={handleSubmit}>
                
                <input
                    type="text"
                    name="nombre"
                    placeholder="Tu nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                />

                <input
                    type="email"
                    name="correo"
                    placeholder="Tu correo"
                    value={formData.correo}
                    onChange={handleChange}
                />

                <textarea
                    name="mensaje"
                    placeholder="Escribe tu mensaje"
                    rows="5"
                    value={formData.mensaje}
                    onChange={handleChange}
                />

                <button type="submit">Enviar</button>

            </form>

            {enviado && <p className="mensaje-exito">Mensaje enviado correctamente ✅</p>}

            <p>Y en todas nuestras redes sociales</p>

        </div>
        </>
    );
}

export default Contacto;
