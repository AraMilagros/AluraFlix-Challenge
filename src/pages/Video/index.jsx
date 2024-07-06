import React from 'react'

import estilos from './estilos.module.css';

export default function index() {
  return (
    <div className={estilos.container}>
        <h2>NUEVO VIDEO</h2>
        <h4>COMPLETE EL FORMULARIO PARA CREAR UNA NUEVA TARJETA DE VIDEO</h4>
        <hr/>
        <h3>Crear Tarjeta</h3>
        <hr />

        <form>
            <div>
                <label>Titulo</label>
                <input type="text" placeholder='Ingrese el título'/>
            </div>

            <div>
                <label>Categoría</label>
                <select>
                    <option id="seleccion">Seleccione una categoria</option>
                    <option id="frontend">Frontend</option>
                    <option id="backend">Backend</option>
                    <option id="innovacion">Innovación</option> 
                </select>
            </div>

            <div>
                <label>Imagen</label>
                <input type="text" placeholder='Ingrese enlace de la imagen'/>
            </div>

            <div>
                <label>Video</label>
                <input type="text" pattern='Ingrese el enlace del video'/>
            </div>

            <div>
                <label>Descripción</label>
                <textarea></textarea>
            </div>

            <div>
                <input type="submit" value="GUARDAR"/>
                <input type="button" value="LIMPIAR" />
            </div>
        </form>
    
    </div>
  )
}
