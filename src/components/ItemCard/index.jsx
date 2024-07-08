import React, { useState, useEffect } from 'react'

import estilos from './estilos.module.css';
import { useVideoContext } from '../../context/VideosContexto';
const images = require.context(`../../assets/img`, true);

export default function index(props) {

  const {video, editVideo} = useVideoContext();

  const mensaje = () => {
    console.log("desde ITEMCARD");
    console.log(video)
    editVideo();
  }

  return (
    <div className={estilos.container}>
      <div className={estilos.images}>
        <img src={images(`./${props.image}`)} alt='image.logo' />
      </div>
      <div className={estilos.btns}>
        <a className={estilos.btn} onClick={mensaje}>
          <i className="fa-solid fa-trash"></i>
          BORRAR
        </a>
        <a className={estilos.btn}>
          <i className="fa-solid fa-pen-to-square"></i>
          EDITAR
        </a>
      </div>
    </div>
  )
}
