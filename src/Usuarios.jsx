import './Usuarios.css';
import api from './Services/api';

function Usuarios(){

     const [usuarios, setUsuarios] = useState([]);
      const [loading, setLoading] = useState(true);
        useEffect(() => {
            const obtenerUsuarios = async () => {
                try {
                    const response = await api.get("/users");
                    console.log("Datos recibidos:", response.data);

                    setUsuarios(response.data);
                } catch (error) {
                    console.error("Error:", error);
                } finally {
                    setLoading(false);
                }
            };
            obtenerUsuarios();
        }, []);

  if (loading) return <p>Cargando...</p>;

    return(
        <div>
            <header className='usuarios-header'>
                <h1>Nuestros Usuarios</h1>
            </header>

            <main className='usuarios-container'>
                {usuarios.length === 0 ? (
                    <p>No hay usuarios</p>
                ) : (
                    <ul>
                        {usuarios.map(usuario => (
                            <li key={usuario.id}>{usuario.name}</li>
                        ))}
                    </ul>
                )}
                

            </main>
        </div>
    );
}








export default Usuarios;