import { createContext, useContext, useState, useEffect } from "react";

export const VideosContext = createContext();

VideosContext.displayName = 'VideosContexto';

export default function VideosProvider({ children }) {
    const [listaVideo, setListaVideo] = useState([]);

    return (
        <VideosContext.Provider value={{ listaVideo, setListaVideo }}>
            {children}
        </VideosContext.Provider>
    );
}

export function useVideoContext() {
    const { listaVideo, setListaVideo } = useContext(VideosContext);
    const [duplicado, setDuplicado] = useState([]);

    function actualizarListado(itemNuevo) {
        setDuplicado([...duplicado, itemNuevo]);
    }

    useEffect(()=>{
        setListaVideo(duplicado);
    },[duplicado]);

    useEffect(() => {
        const conexionApi = async () => {
            try {
                const response = await fetch("http://localhost:3000/videos");
                const data = await response.json();
                setDuplicado(data);
                setListaVideo(data);
            } catch (err) {
                console.log("Error al obtener datos: ", err);
            }
        };
        conexionApi();
    }, []);

    async function addVideo(item) {
        console.log("metodo para agregar videos nuevos");
        console.log('desde CONTEXTO');
        console.log(item);
        try {
            const conex = await fetch("http://localhost:3000/videos", {
                method: 'POST',
                headers: { "Content-type": "application/json" },
                body: JSON.stringify({
                    id: Math.random().toString(),
                    titulo: item.titulo,
                    categoria: item.categoria,
                    image: item.imagen,
                    video: item.imagen,
                    descripcion: item.descripcion
                })
            })
            const conexConvertida = await conex.json();
            actualizarListado(conexConvertida);
        }catch(err){
            console.log("error en crear nuevo video "+err)
        }

    };

    function editVideo() {
        console.log("metodo para EDITAR videos");
        console.log(listaVideo);
    }

    async function deleteVideo(id) {
        console.log("desde context. id: " + id);
        try {
            const response = await fetch(`http://localhost:3000/videos/${id}`, {
                method: 'DELETE',
            });
            if (response.ok) {
                  const actualizar = duplicado.filter((item) => item.id !== id);
                  setDuplicado(actualizar);
                console.log("se borro")
            } else {
                console.log("NOSE BORRA")
            }
        } catch (err) {
            console.log("Error conex al querer eliminar elemento. " + err);
        }
    }

    return { listaVideo, setListaVideo, addVideo, editVideo, deleteVideo };
}