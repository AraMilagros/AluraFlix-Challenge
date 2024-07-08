import { createContext, useContext, useState } from "react";

export const VideosContext = createContext();

VideosContext.displayName = 'VideosContexto';

export default function VideosProvider({ children }) {
    const [video, setVideo] = useState([]);

    return (
        <VideosContext.Provider value={{ video, setVideo }}>
            {children}
        </VideosContext.Provider>
    );
}

export function useVideoContext() {
    const { video, setVideo } = useContext(VideosContext);

    async function addVideo(item) {
        console.log("metodo para agregar videos nuevos");
        console.log('desde CONTEXTO');
        console.log(item);
        const conex = await fetch("http://localhost:3000/videos", {
            method: 'POST',
            headers: { "Content-type": "application/json" },
            body: JSON.stringify({
                id: Math.random().toString(),
                titulo: item.titulo,
                equipo: item.categoria,
                imagen: item.imagen,
                video: item.imagen,
                descripcion: item.descripcion
            })
        })
        const conexConvertida = await conex.json();
    };

    function editVideo() {
        console.log("metodo para EDITAR videos");
    }

    async function deleteVideo (id){
        console.log("desde context. id: "+id);
        try {
            const response = await fetch(`http://localhost:3000/videos/${id}`, {
                method: 'DELETE',
            });
            if (response.ok) {
            //   const actualizar = duplicado.filter((item) => item.id !== id);
            //   setDuplicado(actualizar);
                console.log("se borro")
            }else{
                console.log("NOSE BORRA")
            }
        } catch (err) {
            console.log("Error conex al querer eliminar elemento. " + err);
        }
    }

    return { video, setVideo, addVideo, editVideo, deleteVideo };
}