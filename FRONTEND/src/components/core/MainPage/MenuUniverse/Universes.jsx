import img from "../../../images/Vacío-6_jh3g7a.jpg"

function Universes({ universe }) {

  return (
    <article className="universeCard">
      <h2 className="nameUniverse">{universe.nameUniverse}</h2>
      <p>{universe.author}</p>
      <p>{universe.sagas1}</p>
      <p>{universe.sagas2}</p>
      <p>{universe.sagas3}</p>
      <p>{universe.sagas4}</p>
      <p>{universe.sagas5}</p>
      <p>{universe.sagas6}</p>
      <p>{universe.sagas7}</p>
      <p className="resume">{universe.resume}</p>
      {universe.picture ? <img className="universe-image" src={universe.picture} alt={`Imagen de ${universe.title}`} /> : <img className="universe-image" src={img} />}
    </article>
  );
}

export default Universes;


