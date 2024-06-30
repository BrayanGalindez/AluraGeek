async function listarProductos(){
    const conexion = await fetch('http://localhost:8000/productos');
    const conexionConvertida = await conexion.json();
    console.log(conexionConvertida);
    return conexionConvertida
}

async function enviarProducto(titulo, precio, imagen){
    const conexion = await fetch('http://localhost:8000/productos',{
        method: 'POST',
        headers:{"Content-type": "application/json"},
        body:JSON.stringify({
            titulo:titulo,
            precio: precio,
            imagen:imagen
        })
    })
    const conexionConvertida = conexion.json();
    if(!conexion.ok){
        throw new Error("Ha ocurrido un error al enviar el producto")
    }
    return conexionConvertida
}
async function eliminarProducto(id) {
    try {
        const response = await fetch(`http://localhost:8000/productos/${id}`, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json"
            }
        });
        if (response.ok) {
            console.log('Producto eliminado exitosamente');
        } else {
            console.error('Error al eliminar el producto:', response.statusText);
        }
    } catch (error) {
        console.error('Error en la solicitud:', error);
    }
}
export const conexionAPI = {
    listarProductos, enviarProducto, eliminarProducto
};