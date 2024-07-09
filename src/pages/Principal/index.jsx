import React, { useState, useEffect } from 'react'

import Cards from '../Cards';
import estilos from './estilos.module.css';
import { useVideoContext } from '../../context/VideosContexto';
export default function index() {

    const [equipos, actualizarEquipos] = useState([
        {
            id: "front1",
            titulo: "frontend",
            color: "#6BD1FF"
        },
        {
            id: "back2",
            titulo: "backend",
            color: "#3ebcb0"
        },
        {
            id: "innov3",
            titulo: "innovacion",
            color: "#f2b308"
        }
    ]);

    const {listaVideo, setListaVideo} = useVideoContext();

    return (
        <div className={estilos.contenedorCards}>{
            equipos.map((equipo) => {
                return (
                    <Cards
                        datos={equipo}
                        key={equipo.titulo}
                        videos={listaVideo.filter(video => video.categoria === equipo.titulo)}
                    />
                )
            })
        }</div>
    )
}
