import React from 'react'

import estilos from './estilos.module.css';

//! poner en estilos.tittle(valorpsado) para los titulos de cards

export default function index() {
  return (
    <div className={estilos.container}>
        <h2 className={estilos.tittle}>NUEVO VIDEO</h2>
        <h4 className={estilos.subTittle}>COMPLETE EL FORMULARIO PARA CREAR UNA NUEVA TARJETA DE VIDEO</h4>
        <hr/>
        <h3>Crear Tarjeta</h3>
        <hr />

        <form className={estilos.formulario}>
            <div className={estilos.input__text} id={estilos.input__titulo}>
                <label>Titulo</label>
                <input type="text" placeholder='Ingrese el título'/>
            </div>

            <div className={estilos.input__text} id={estilos.input__categoria}>
                <label>Categoría</label>
                <select>
                    <option id="seleccion">Seleccione una categoria</option>
                    <option id="frontend">Frontend</option>
                    <option id="backend">Backend</option>
                    <option id="innovacion">Innovación</option> 
                </select>
            </div>

            <div className={estilos.input__text} id={estilos.input__imagen}>
                <label>Imagen</label>
                <input type="text" placeholder='Ingrese enlace de la imagen'/>
            </div>

            <div className={estilos.input__text} id={estilos.input__video}>
                <label>Video</label>
                <input type="text" placeholder='Ingrese el enlace del video'/>
            </div>

            <div className={estilos.input__text} id={estilos.input__descripcion}>
                <label>Descripción</label>
                <textarea rows={5} placeholder='¿De qué trata este video?'></textarea>
            </div>

            <div className={estilos.input__text} id={estilos.input__btns}>
                <input type="submit" value="GUARDAR"/>
                <input type="button" value="LIMPIAR" />
            </div>
        </form>
    
    </div>
  )
}
