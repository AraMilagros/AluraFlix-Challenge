import React, { useEffect, useState } from 'react'
import estilos from './estilos.module.css';

export default function index(props) {

    const [titulo, setTitulo] = useState(props.datos.titulo);
    const [categoria, setCategoria] = useState(props.datos.categoria);
    const [imagen, setImagen] = useState(props.datos.imagen);
    const [video, setVideo] = useState(props.datos.video);
    const [descripcion, setDescripcion] = useState(props.datos.descripcion);

    useEffect(() => {
        let selec = document.getElementById('categoria');
        selec.value = props.datos.categoria;
    }, [])

    useEffect(() => {
        const select = document.getElementById('categoria');
        select.addEventListener('change', () => {
            // console.log(select.value)
            setCategoria(select.value);
            select.style.border = `2px solid white`;
            select.style.color = 'white';
        })

    }, []);

    const enviar = () => {

        const selec = document.getElementById('categoria');
        if (selec.value !== 'seleccion') {
            props.actualizar({
                id: props.datos._id,
                titulo: titulo,
                categoria: categoria,
                imagen: imagen,
                video: video, 
                descripcion: descripcion
            });
        } else {
            console.log("falta elegir categoria");
            selec.style.border = `2px solid red`; 
            selec.style.color = 'red';
        }
    }

    return (
        <>
            <div className={estilos.overlay}></div>
            <div className={estilos.dialogo}>
                <i className="icon-x fa-regular fa-circle-xmark"
                    onClick={() => { props.closeModal(false) }}></i>
                <h1>EDITAR CARD:</h1>
                <form method='dialog' className={estilos.formulario}>
                    <div className={estilos.input__text} id={estilos.input__titulo}>
                        <label>Titulo</label>
                        <input type="text"
                            onChange={(e) => setTitulo(e.target.value)}
                            placeholder={props.datos.titulo}
                        />
                    </div>

                    <div className={estilos.input__text} id={estilos.input__categoria}>
                        <label>Categoría</label>
                        <select name="categoria" id="categoria">
                            <option id="seleccion" value="seleccion">Seleccione una categoria</option>
                            <option id="frontend" value="frontend">Frontend</option>
                            <option id="backend" value="backend">Backend</option>
                            <option id="innovacion" value="innovacion">Innovación</option>
                        </select>
                    </div>

                    <div className={estilos.input__text} id={estilos.input__imagen}>
                        <label>Imagen</label>
                        <input type="text"
                            placeholder={props.datos.imagen}
                            onChange={(e) => setImagen(e.target.value)} />
                    </div>

                    <div className={estilos.input__text} id={estilos.input__video}>
                        <label>Video</label>
                        <input type="text"
                            placeholder={props.datos.video}
                            onChange={(e) => setVideo(e.target.value)}
                        />
                    </div>

                    <div className={estilos.input__text} id={estilos.input__descripcion}>
                        <label>Descripción</label>
                        <textarea rows={5}
                            placeholder={props.datos.descripcion}
                            onChange={(e) => setDescripcion(e.target.value)}></textarea>
                    </div>

                    <div className={estilos.input__text} id={estilos.input__btns}>
                        <input id={estilos.btnGuardar} type="button" onClick={enviar} value="GUARDAR" />
                        {/* <input id={estilos.btnLimpiar} type="button" value="LIMPIAR" /> */}
                    </div>
                </form>
            </div>
        </>
    )
}
