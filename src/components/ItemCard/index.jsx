import React, { useState, useEffect } from 'react'

import estilos from './estilos.module.css';
const images = require.context(`../../assets/img`, true);

export default function index(props) {


  return (
    <div className={estilos.container}>
      <div className={estilos.images}>
        <img src={images(`./${props.image}`)} alt='image.logo' />
      </div>
      <div className={estilos.btns}>
        <a className={estilos.btn} href={props.url}>
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
