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

    const addVideo = (item) => {
        console.log("metodo para agregar videos nuevos");
        // const conex = await fetch("http://localhost:3000/videos", {
        //     method: 'POST',
        //     headers: { "Content-type": "application/json" },
        //     body: JSON.stringify({
        //         id: Math.random().toString(),
        //         titulo: item.titulo,
        //         categoria: item.categoria,
        //         imagen: item.imagen,
        //         video: item.imagen,
        //         descripcion: item.descripcion
        //     })
        // })
        // const conexConvertida = await conex.json();

    };

    function editVideo() {
        console.log("metodo para EDITAR videos");
    }

    function deleteVideo(id) {
        console.log("metodo para BORRAR video");
    }

    return {video, setVideo, addVideo, editVideo, deleteVideo};
}