import React, { useState, useEffect } from 'react'

import Cards from '../Cards';
import estilos from './estilos.module.css';

export default function index() {

    const [equipos, actualizarEquipos] = useState([
        {
            id: "front1",
            titulo: "frontend",
        },
        {
            id: "back2",
            titulo: "backend",
        },
        {
            id: "innov3",
            titulo: "innovacion",
        }
    ]);

    const [videos, setVideos] = useState([]);
    const [duplicado, setDuplicado] = useState([]);

    useEffect(() => {
        const conexionApi = async () => {
            try {
                const response = await fetch("http://localhost:3000/videos");
                const data = await response.json();
                setVideos(data);
                setDuplicado(data);
                console.log(data);
            } catch (err) {
                console.log("Error al obtener datos: ", err);
            }
        };
        conexionApi();
    }, []);

    return (
        <div className={estilos.contenedorCards}>{
            equipos.map((equipo) => {
                return (
                    <Cards
                        datos={equipo}
                        key={equipo.titulo}
                        videos={videos.filter(vid => vid.equipo === equipo.titulo)}
                    />
                )
            })
        }</div>
    )
}
