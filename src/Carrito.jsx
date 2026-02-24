import React, { useState, useEffect } from "react";
import api from "./Services/api";
import "./Carrito.css";

function Carrito() {
  const [carrito, setCarrito] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const obtenerCarrito = async () => {
      try {

        const response = await api.get("/carts");
        const carts = response.data;

        if (carts.length === 0) {
          setCarrito([]);
          return;
        }

        const productosDelCarrito = carts[0].products;

        const productosConDetalle = await Promise.all(
          productosDelCarrito.map(async (item) => {
            const producto = await api.get(`/products/${item.productId}`);

            return {
              ...producto.data,
              quantity: item.quantity,
            };
          })
        );

        setCarrito(productosConDetalle);
      } catch (error) {
        console.error("Error al obtener el carrito:", error);
      } finally {
        setLoading(false);
      }
    };

    obtenerCarrito();
  }, []);

  if (loading) return <p>Cargando...</p>;

  return (
    <div>
      <header className="carrito-header">
        <h1>Carrito</h1>
      </header>

      <main className="carrito-container">
        {carrito.length === 0 ? (
          <p>Tu carrito está vacío</p>
        ) : (
          carrito.map((item) => (
            <article key={item.id} className="carritoCard">
              <img src={item.image} alt={item.title} />
              <h2>{item.title}</h2>
              <p>Cantidad: {item.quantity}</p>
              <h3>Precio: ${item.price}</h3>
            </article>
          ))
        )}
      </main>
    </div>
  );
}

export default Carrito;