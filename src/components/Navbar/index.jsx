import React from 'react'

import estilos from './estilos.module.css';

export default function index() {
  return (
    <div className={estilos.nav}>
        <span className={estilos.tittle} >ALURAFLIX</span>
        <ul className={estilos.lista}>
          <li className={estilos.item}><a href="#" id={estilos.home}>HOME</a></li>
          <li className={estilos.item}><a href="#" id={estilos.nuevo}>NUEVO VIDEO</a></li>
        </ul>
    </div>
  )
}
