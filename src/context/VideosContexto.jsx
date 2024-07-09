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
                    imagen: item.imagen,
                    video: item.video,
                    descripcion: item.descripcion
                })
            })
            const conexConvertida = await conex.json();
            actualizarListado(conexConvertida);
        }catch(err){
            console.log("error en crear nuevo video "+err)
        }
    };

    async function editVideo(item) {
        console.log("metodo para EDITAR videos");

        try{
            const response = await fetch(`http://localhost:3000/videos/${item.id}`,{
                method:'PUT',
                headers:{
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id: item.id,
                    titulo: item.titulo,
                    categoria: item.categoria,
                    imagen: item.imagen,
                    video: item.video,
                    descripcion: item.descripcion
                }),
            });
            if(response.ok){
                const result = await response.json();
                console.log("Se realizo el update "+result);
                setDuplicado(duplicado.map(i=>(i.id === item.id ? result : i)));
            }
        }catch(err){
            console.log("Error en update. Contexto. "+err);
        }
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