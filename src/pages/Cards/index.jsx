import React, { useEffect, useState } from 'react'
import estilos from './estilos.module.css';
import ItemCard from '../../components/ItemCard';

export default function index(props) {

  const { titulo, color } = props.datos;
  

  return (
    <div className={estilos.cards}>
      <h3 style={{ background: color }} className={estilos.titulo}>{titulo}</h3>
      <div className={estilos.card}>
        {
          props.videos.map((item) => {
            return (
              <ItemCard key={item.id}
                id={item._id}
                categoria={props.datos.titulo}
                imagen={item.imagen}
                urlVideo={item.video}
                datos={item}
                color={color}
              />
            )
          })
        }
      </div>
    </div>
  )
}
