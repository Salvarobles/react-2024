/**
 * @author Salvador Robles Gómez
 * @description Crea un componente Card que acepte props para el título (title), el cuerpo (body) y un footer
 * (footer). Este componente renderizará una tarjeta con las secciones de título, cuerpo y pie.
 */


const Ejercicio8 = ({ title, body, footer }) => {
  return (
    <div className="col">
      <div className="card h-100">
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">
             {body}
          </p>
        </div>
        <div className="card-footer">
          <small className="text-body-secondary">{footer}</small>
        </div>
      </div>
    </div>
  )
}

export default Ejercicio8
