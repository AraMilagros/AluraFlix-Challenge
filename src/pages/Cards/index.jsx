import React, { useEffect, useState } from 'react'
import estilos from './estilos.module.css';
import ItemCard from '../../components/ItemCard';

export default function index(props) {

  const { id, titulo } = props.datos;
  // const { colaboradores, eliminarColaborador, actualizarColor, like } = props
  
  useEffect(() => {
    console.log('DESDE CARDS')
    console.log(props.videos)
    console.log("-------")
    console.log(props.datos.id)
  })
  return (
    <div className={estilos.cards}>
      <h3>{props.datos.titulo}</h3>
      <div className={estilos.card}>
        {
          props.videos.map((item) => {
            return (
              <ItemCard key={Math.random()}
                equipo={props.datos.titulo}
                image={item.image}
                url={item.url}
              />
            )
          })
        }
      </div>
    </div>
  )
}
