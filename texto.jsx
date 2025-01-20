import React, { useState } from "react";

const ContactoWhatsApp = () => {
  const [productosSeleccionados, setProductosSeleccionados] = useState([]);

  // Función para agregar o quitar un producto de la lista
  const toggleProducto = (producto) => {
    setProductosSeleccionados((prevProductos) => {
      if (prevProductos.includes(producto)) {
        // Quitar el producto si ya está seleccionado
        return prevProductos.filter((p) => p !== producto);
      } else {
        // Agregar el producto si no está seleccionado
        return [...prevProductos, producto];
      }
    });
  };

  // Función para enviar los productos seleccionados por WhatsApp
  const enviarMensajeWhatsApp = () => {
    const empresaNombre = "Tu Empresa";
    const numeroTelefono = "1234567890";
    const mensaje = `¡Hola! Estoy interesado/a en los productos de acero inoxidable y equipamiento industrial que ofrece ${empresaNombre}. Aquí está mi lista de productos seleccionados:\n\n${productosSeleccionados
      .map((producto, index) => `${index + 1}. ${producto}`)
      .join("\n")}\n\n¿Podrían brindarme más información?`;

    // Redirigir a WhatsApp con el mensaje
    window.open(
      `https://wa.me/${numeroTelefono}/?text=${encodeURIComponent(mensaje)}`,
      "_blank"
    );
  };

  return (
    <div>
      <h1>Selecciona los productos que deseas:</h1>

      {/* Lista de productos con checkbox */}
      <div>
        <label>
          <input
            type="checkbox"
            onChange={() => toggleProducto("Cocinas Industriales")}
            checked={productosSeleccionados.includes("Cocinas Industriales")}
          />
          Cocinas Industriales
        </label>
        <label>
          <input
            type="checkbox"
            onChange={() => toggleProducto("Mesas de Acero Inoxidable")}
            checked={productosSeleccionados.includes("Mesas de Acero Inoxidable")}
          />
          Mesas de Acero Inoxidable
        </label>
        <label>
          <input
            type="checkbox"
            onChange={() =>
              toggleProducto("Refrigeradores Industriales y Cámaras de Frío")
            }
            checked={productosSeleccionados.includes(
              "Refrigeradores Industriales y Cámaras de Frío"
            )}
          />
          Refrigeradores Industriales y Cámaras de Frío
        </label>
        <label>
          <input
            type="checkbox"
            onChange={() => toggleProducto("Otros Equipos")}
            checked={productosSeleccionados.includes("Otros Equipos")}
          />
          Otros Equipos
        </label>
      </div>

      {/* Mostrar productos seleccionados */}
      <div>
        <h2>Productos seleccionados:</h2>
        {productosSeleccionados.length > 0 ? (
          <ul>
            {productosSeleccionados.map((producto, index) => (
              <li key={index}>{producto}</li>
            ))}
          </ul>
        ) : (
          <p>No has seleccionado ningún producto.</p>
        )}
      </div>

      {/* Botón para enviar a WhatsApp */}
      <button
        className="home__container__button"
        onClick={enviarMensajeWhatsApp}
        disabled={productosSeleccionados.length === 0} // Deshabilitar si no hay productos
      >
        <i className="pi pi-whatsapp"></i> Enviar por WhatsApp
      </button>
    </div>
  );
};

export default ContactoWhatsApp;

//Asi seria el envio de mesanjes

// ¡Hola! Estoy interesado/a en los productos de acero inoxidable y equipamiento industrial que ofrece Tu Empresa. Aquí está mi lista de productos seleccionados:

// 1. Cocinas Industriales
// 2. Mesas de Acero Inoxidable

// ¿Podrían brindarme más información?
