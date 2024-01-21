// import PropTypes  from "prop-types";

function Planets({planet}) {
  return (
    <article>
      <h2>{planet.name}</h2>
      <p>{planet.settled}</p>
      <p>{planet.population}</p>
      <p>{planet.capital}</p>
      <p>{planet.location}</p>
      <p>{planet.gravity}</p>
      <p>{[planet.country]}</p>
      <img src={planet.picture} alt={`Imagen de ${planet.name}`} />
    </article>
  );
}

export default Planets;



