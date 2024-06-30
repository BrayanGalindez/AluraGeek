import { conexionAPI } from "./conexionAPI.js";
const formulario = document.querySelector('[data-formulario]');

async function crearProducto(evento){

    evento.preventDefault();

    const titulo = document.querySelector('[data-titulo]').value;
    const precio= document.querySelector('[data-precio]').value;
    const imagen = document.querySelector('[data-imagen]').value;
    try{
        await conexionAPI.enviarProducto(titulo, precio, imagen);
    }catch(e){
        alert(e)
    }
    
}
formulario.addEventListener('submit',evento => crearProducto(evento));