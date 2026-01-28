function Expresiones(){
    const nombre = 'Pablo';
    const apellidos = 'Martinez Gaspar';
    return (
        <div>
            <h2>Expresiones</h2>
            <h3>Tu Nombre es: {nombre} y tus Apellidos son: {apellidos}</h3>
            <Lista />
        </div>
    )
}

function Lista(){
    const users = [ 
        {id: 1, name: 'Pablo', role: 'Web Developer'},
        {id: 2, name: 'Jorge', role: 'Web Developer'},
        {id: 3, name: 'Osmar', role: 'Team Leader'},

    ] 
    
    return (
        <div>
            <table>
                <tbody>
                    <tr>
                        <th>Nombre</th>
                        <th>Role</th>
                    </tr>
                    <tr>
                        {
                        users.map(function(user, index){
                            return(
                                <tr key={index}>
                                <td>{user.name}</td>
                                <td>{user.role}</td>
                                </tr>
                            )

                        })

                        }

                    </tr>
                </tbody>
            </table>

        </div>

    )
}

export default Expresiones