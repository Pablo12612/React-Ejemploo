import React, { useState, useEffect } from "react";
import api from "./Services/api";
import "./Productos.css";

function Productos() {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const obtenerProductos = async () => {
      try {
        const response = await api.get("/products");
        console.log("Datos recibidos:", response.data);

        setProductos(response.data);
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setLoading(false);
      }
    };

    obtenerProductos();
  }, []);

  if (loading) return <p>Cargando...</p>;

  return (
    <div>
      <header className="productos-header">
        <h1>Nuestro Catálogo Tecnológico</h1>
      </header>

      <main className="productos-container">
        {productos.length === 0 ? (
          <p>No hay productos</p>
        ) : (
          productos.map((producto) => (
            <article key={producto.id} className="productosCard">
              <img src={producto.image} alt={producto.name} />
              <span>{producto.category}</span>
              <h2>{producto.name}</h2>
              <p>{producto.description}</p>
              <h3>${producto.price}</h3>
              <button>Comprar</button>
            </article>
          ))
        )}
      </main>
    </div>
  );
}

export default Productos;