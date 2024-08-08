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
    const URL = "https://aluraflix-backend-qlvp.onrender.com/api/items";

    function actualizarListado(itemNuevo) {
        setDuplicado([...duplicado, itemNuevo]);
    }

    useEffect(() => {
        setListaVideo(duplicado);
    }, [duplicado]);

    useEffect(() => {
        const conexionApi = async () => {
            try {
                const response = await fetch(URL,{
                    method: 'GET',
                    headers: new Headers({'Content-type': 'application/json'}),
                });
                const data = await response.json();
                if(data.length != 0){
                    setDuplicado(data);
                    setListaVideo(data);
                }else{
                    setDuplicado(null)
                    setListaVideo(null);
                }

            } catch (err) {
                console.log("Error al obtener datos: ", err);
            }
        };
        conexionApi();
    }, []);

    async function addVideo(item) {

        try {
            const conex = await fetch(URL, {
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
            });            
            const conexConvertida = await conex.json();
            actualizarListado(conexConvertida);
        } catch (err) {
            console.log("error en crear nuevo video " + err)
            // console.log(err.data)
        }
    };

    async function editVideo(item) {
        console.log("metodo para EDITAR videos");
        console.log(`${URL}/${item.id.toString()}`)
        try {
            const response = await fetch(`${URL}/${item.id}`, {
                method: 'PUT',
                headers: {
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
            if (response.ok) {
                const result = await response.json();
                console.log("Se realizo el update " + result);
                setDuplicado(duplicado.map(i => (i._id === item.id ? result : i)));
            }
        } catch (err) {
            console.log("Error en update. Contexto. " + err);
        }
    }

    async function deleteVideo(id) {
        console.log("desde context. id: " + id);
        try {
            const response = await fetch(`${URL}/${id}`, {
                method: 'DELETE',
            });
            if (response.ok) {
                const actualizar = duplicado.filter((item) => item._id !== id);
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