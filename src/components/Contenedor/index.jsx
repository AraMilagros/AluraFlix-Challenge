import estilos from './estilos.module.css';

function Contenedor({ children }) {
  return <section className={estilos.container}>{children}</section>;
}

export default Contenedor;