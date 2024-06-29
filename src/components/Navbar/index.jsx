import React from 'react'

import estilos from './estilos.module.css';

export default function index() {
  return (
    <div className={estilos.nav}>
        <span className={estilos.tittle} >ALURAFLIX</span>
        <ul className={estilos.lista}>
          <li className={estilos.item}><a href="#">HOME</a></li>
          <li className={estilos.item}><a href="#">NUEVO VIDEO</a></li>
        </ul>
    </div>
  )
}
