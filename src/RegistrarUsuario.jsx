import React, { useState } from "react";
import api from "./Services/api";
import './RegistrarUsuario.css';

function RegistrarUsuario() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
    
  const handleSubmit = async (e) => {
    e.preventDefault();

    const nuevoUsuario = { name, email, password };

    try {
      const response = await api.post("/users", nuevoUsuario);
      console.log("Usuario registrado:", response.data);
      alert("Usuario registrado exitosamente");
    } catch (error) {
      console.error("Error al registrar el usuario:", error);
    }
    };

    return (
    <div className="registrar-usuario-container">
        <h1>Registrar Usuario</h1>
        <form onSubmit={handleSubmit} className="registrar-form">
        <input
            type="text"
            placeholder="Nombre"
            value={name}
            onChange={(e) => setName(e.target.value)}
        /> 
        <input
            type="email"
            placeholder="Correo Electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
        />
        <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Registrar</button>
        </form>
    </div>
  );
}

export default RegistrarUsuario;