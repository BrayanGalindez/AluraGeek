import { conexionAPI } from "./conexionAPI.js";

const lista = document.querySelector("[data-lista]")

export default function crearCard(titulo, precio, imagen, id) {
  const producto = document.createElement("li");
  producto.className = "tarjeta_producto";
  producto.innerHTML = `
    <img src="${imagen}" class="tarjeta_imagen" />
    <h1 class="tarjeta_titulo">${titulo}</h1>
    <div class="tarjeta_items">
      <h1 class="tarjeta_precio">${precio}</h1>
      <img
        class="boton_eliminar"
        src="./public/imagenes/icon _trash.svg"
      />
    </div>
  `;
  const botonEliminar = producto.querySelector('.boton_eliminar');
  botonEliminar.addEventListener('click', async () => {
      await conexionAPI.eliminarProducto(id);
      console.log('eliminar producto:',id);
      producto.remove(); // Elimina la tarjeta del DOM si la eliminación fue exitosa
  });
  return producto;
}

async function listarProductos() {
  try {
      const listaAPI = await conexionAPI.listarProductos();
      listaAPI.forEach(producto => lista.appendChild(crearCard(producto.titulo, producto.precio, producto.imagen, producto.id)));
  } catch (error) {
      lista.innerHTML = `<h2 class="mensaje__titulo">Ha ocurrido un problema con la conexion :(</h2>`;
  }
}

listarProductos();