import React, { useState, useEffect } from 'react'

import estilos from './estilos.module.css';
import { useVideoContext } from '../../context/VideosContexto';
// const images = require.context(`../../assets/img`, true);
import Dialogo from '../DialogEdit';

export default function index(props) {

  const { deleteVideo, editVideo } = useVideoContext();

  const [openModal, setOpenModal] = useState(false);

  const editarVideo = () => {
    console.log("Aqui se llamara el modal para editar");
  }

  
  return (
    <>
      <div className={estilos.container}>
      <div className={estilos.images}>
        {/* <img src={images(`./${props.image}`)} alt='image.logo' /> */}
        <img src={props.image} alt='image.logo' />
      </div>
      <div className={estilos.btns}>
        <a className={estilos.btn}
          onClick={()=>deleteVideo(props.id)}>
          <i className="fa-solid fa-trash"></i>
          BORRAR
        </a>
        <a className={estilos.btn}
          onClick={()=>setOpenModal(true)}>
          <i className="fa-solid fa-pen-to-square"></i>
          EDITAR
        </a>
      </div>
    </div>
    {openModal && <Dialogo closeModal={setOpenModal} datos={props.datos} />}
    </>
  )
}
