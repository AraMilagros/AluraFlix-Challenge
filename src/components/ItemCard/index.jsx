import React, { useState, useEffect } from 'react'

import estilos from './estilos.module.css';
import { useVideoContext } from '../../context/VideosContexto';
import Dialogo from '../DialogEdit';

export default function index(props) {

  const { deleteVideo, editVideo } = useVideoContext();

  const [openModal, setOpenModal] = useState(false);

  const actualizarItem = (item) => {
    editVideo(item);
    // console.log(item);
  }

  return (
    <>
      <div className={estilos.container} style={{ border: `3px solid ${props.color}` }}>
        <div className={estilos.images}>
          <a href={props.urlVideo} target="_blank">
            <div className={estilos.fondo}>
              <h3 className={estilos.fondo__tittle}>{props.datos.titulo}</h3>
              <p className={estilos.fondo__descripcion}>{props.datos.descripcion}</p>
            </div>
            <img src={props.imagen} alt='image.logo' />
          </a>
        </div>
        <div className={estilos.btns} style={{ borderTop: `3px solid ${props.color}` }}>
          <a className={estilos.btn}
            onClick={() => deleteVideo(props.id)}>
            <i className="fa-solid fa-trash"></i>
            BORRAR
          </a>
          <a className={estilos.btn}
            onClick={() => setOpenModal(true)}>
            <i className="fa-solid fa-pen-to-square"></i>
            EDITAR
          </a>
        </div>
      </div>
      {openModal && <Dialogo closeModal={setOpenModal} datos={props.datos} actualizar={actualizarItem} />}
    </>
  )
}
