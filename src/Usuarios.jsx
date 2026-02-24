import './Usuarios.css';
import React, { useState, useEffect } from "react";
import api from './Services/api';

function Usuarios(){
    const [usuarios, setUsuarios] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        const obtenerUsuarios = async () => {
            try {
                const response = await api.get("/users");
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

    return (
        <div>
            <header className='usuarios-header'>
                <h1>Usuarios</h1>
            </header>

            <main className='usuarios-container'>
                {usuarios.length === 0 ? (
                    <p>No hay usuarios</p>
                ) : (
                    <table className='tUsuarios'>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nombre</th>
                                <th>Apellidos</th>
                                <th>Dirección</th>
                                <th>Teléfono</th>
                                <th>Email</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {usuarios.map(usuario => (
                                <tr key={usuario.id}>
                                    <td>{usuario.id}</td>
                                    <td>{usuario.username}</td>
                                    <td>{usuario.apellidos || '-'}</td>
                                    <td>{usuario.direccion || '-'}</td>
                                    <td>{usuario.telefono || '-'}</td>
                                    <td>{usuario.email}</td>
                                    <td>
                                        <button>Editar</button>
                                        <button>Eliminar</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </main>
        </div>
    );
}

export default Usuarios;