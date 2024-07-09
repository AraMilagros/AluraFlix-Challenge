import React, { useEffect } from 'react'
import estilos from './estilos.module.css';

export default function index(props) {
    useEffect(() => {
        let selec = document.getElementById('categoria');
        selec.value = props.datos.categoria;
    })
    return (
        <>
            <div className={estilos.overlay}></div>
            <div className={estilos.dialogo}>
                <i className="icon-x fa-regular fa-circle-xmark"
                    onClick={() => { props.closeModal(false) }}></i>
                <h1>EDITAR CARD:</h1>
                <form className={estilos.formulario}>
                    <div className={estilos.input__text} id={estilos.input__titulo}>
                        <label>Titulo</label>
                        <input type="text" placeholder='Ingrese el título'
                            onChange={(e) => setTitulo(e.target.value)}
                            value={props.datos.titulo}
                        />
                    </div>

                    <div className={estilos.input__text} id={estilos.input__categoria}>
                        <label>Categoría</label>
                        <select name="categoria" id="categoria">
                            <option id="seleccion">Seleccione una categoria</option>
                            <option id="frontend" value="frontend">Frontend</option>
                            <option id="backend" value="backend">Backend</option>
                            <option id="innovacion" value="innovacion">Innovación</option>
                        </select>
                    </div>

                    <div className={estilos.input__text} id={estilos.input__imagen}>
                        <label>Imagen</label>
                        <input type="text" placeholder='Ingrese enlace de la imagen'
                            value={props.datos.image}
                            onChange={(e) => setImagen(e.target.value)} />
                    </div>

                    <div className={estilos.input__text} id={estilos.input__video}>
                        <label>Video</label>
                        <input type="text" placeholder='Ingrese el enlace del video'
                            value={props.datos.video}
                            onChange={(e) => setVideo(e.target.value)}
                        />
                    </div>

                    <div className={estilos.input__text} id={estilos.input__descripcion}>
                        <label>Descripción</label>
                        <textarea rows={5} placeholder='¿De qué trata este video?'
                            value={props.datos.descripcion}
                            onChange={(e) => setDescripcion(e.target.value)}></textarea>
                    </div>

                    <div className={estilos.input__text} id={estilos.input__btns}>
                        <input type="submit" value="GUARDAR" />
                        <input type="button" value="LIMPIAR" />
                    </div>
                </form>
            </div>
        </>
    )
}
