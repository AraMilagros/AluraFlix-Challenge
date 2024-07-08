import React, { useState, useEffect } from 'react'

import estilos from './estilos.module.css';
import { useVideoContext } from '../../context/VideosContexto';
const images = require.context(`../../assets/img`, true);

export default function index(props) {

  const { deleteVideo, editVideo } = useVideoContext();


  const editarVideo = () => {
    console.log("Aqui se llamara el modal para editar");
  }
  
  return (
    //! aqui encerrar el segundo div de la linea 19 en un <a></a> con props.urlVideo 
    <div className={estilos.container}>
      <div className={estilos.images}>
        <img src={images(`./${props.image}`)} alt='image.logo' />
      </div>
      <div className={estilos.btns}>
        <a className={estilos.btn}
          onClick={()=>deleteVideo(props.id)}>
          <i className="fa-solid fa-trash"></i>
          BORRAR
        </a>
        <a className={estilos.btn}
          onClick={()=>editarVideo()}>
          <i className="fa-solid fa-pen-to-square"></i>
          EDITAR
        </a>
      </div>
    </div>
  )
}
