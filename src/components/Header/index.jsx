import React from 'react'

import estilos from './estilos.module.css';
import imgBanner from './player.png';

export default function index() {
  return (
    <div className={estilos.header}>
        <div className={estilos.text}>
            <h1 className={estilos.tittle}>FRONT END</h1>
            <h2 className={estilos.subtittle}>Challenge React</h2>
            <p className={estilos.description}>Este challenge es una forma de aprendizaje. Es un mecanismo donde podrás comprometerte en la resolución de un problema para poder aplicar todos los conocimientos adquiridos en la formación React</p>
        </div>
        <div className={estilos.image}>
            <img src={imgBanner} alt="" />
        </div>
    </div>
  )
}
