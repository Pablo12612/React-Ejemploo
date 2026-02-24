import React, { useState, useEffect } from "react";
import api from "./Services/api";
import './RegistrarProducto.css';

function RegistrarProducto() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");

    const handleSubmit = async (e) => {
    e.preventDefault();

    const nuevoProducto = { title, price, description, category, image };

    try {
        const response = await api.post("/products", nuevoProducto);
        console.log("Producto registrado:", response.data);
        alert("Producto registrado exitosamente");
    }catch (error) {
        console.error("Error al registrar el producto:", error);
    }
    };

    return (
        <div className="registrar-producto-container">
            <h1>Registrar Producto</h1>
            <form onSubmit={handleSubmit} className="registrar-form">
                <input
                    type="text"
                    placeholder="Titulo"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <input
                    type="number"
                    placeholder="Precio"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />
                 <input
                    type="text"
                    placeholder="Descripción"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Categoría"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Imagen"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                />
                <button type="submit">Registrar</button>
                </form>
        </div>
    )
}

export default RegistrarProducto;
