import React, { useEffect, useState } from 'react'

import estilos from './estilos.module.css';
import { useVideoContext } from '../../context/VideosContexto';

export default function index() {

    const { addVideo } = useVideoContext();
    const [titulo, setTitulo] = useState();
    const [categoria, setCategoria] = useState();
    const [imagen, setImagen] = useState();
    const [video, setVideo] = useState();
    const [descripcion, setDescripcion] = useState();

    const enviar = (e) => {
        e.preventDefault();
        const selec = document.getElementById('categoria');
        if (selec.value !== 'seleccion') {
            addVideo({
                titulo: titulo,
                categoria: categoria,
                imagen: imagen,
                video: video,
                descripcion: descripcion
            });
            limpiar();
        } else {
            console.log("falta elegir categoria");
            selec.style.border = `2px solid red`;
            selec.style.color = 'red';
        }

    }


    useEffect(() => {
        const select = document.getElementById('categoria');
        select.addEventListener('change', () => {
            setCategoria(select.value);
            select.style.border = `2px solid white`;
            select.style.color = 'white';
        })

    }, []);

    const limpiar = () => {
        setTitulo('');
        setCategoria('seleccion');
        setImagen('');
        setVideo('');
        setDescripcion('');

        const inputs = document.querySelectorAll('.input_text');

        for (let index = 0; index < inputs.length; index++) {
            console.log(inputs[index].value);
            inputs[index].value = '';
        }
        const selec = document.getElementById('categoria');
        selec.value = "seleccion";

    }

    return (
        <div className={estilos.container}>

            <h2 className={estilos.tittle}>NUEVO VIDEO</h2>
            <h4 className={estilos.subTittle}>COMPLETE EL FORMULARIO PARA CREAR UNA NUEVA TARJETA DE VIDEO</h4>
            <hr />
            <h3 className={estilos.tarjeta}>Crear Tarjeta</h3>
            <hr />

            <form className={estilos.formulario} onSubmit={enviar}>
                <div className={estilos.input__text} id={estilos.input__titulo}>
                    <label>Titulo</label>
                    <input className="input_text" type="text" placeholder='Ingrese el título' minLength="4"
                        onChange={(e) => setTitulo(e.target.value)} required />
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
                    <input className="input_text" type="url" placeholder='Ingrese enlace de la imagen'
                        onChange={(e) => setImagen(e.target.value)} required />
                </div>

                <div className={estilos.input__text} id={estilos.input__video}>
                    <label>Video</label>
                    <input className="input_text" type="url" placeholder='Ingrese el enlace del video'
                        onChange={(e) => setVideo(e.target.value)} required />
                </div>

                <div className={estilos.input__text} id={estilos.input__descripcion}>
                    <label>Descripción</label>
                    <textarea className="input_text" rows={5} placeholder='¿De qué trata este video?'
                        onChange={(e) => setDescripcion(e.target.value)}></textarea>
                </div>

                <div className={estilos.input__text} id={estilos.input__btns}>
                    <input id={estilos.btnGuardar} type="submit" value="GUARDAR" />
                    {/* <input id={estilos.btnLimpiar} type="button" value="LIMPIAR" /> */}
                </div>
            </form>

        </div>
    )
}
