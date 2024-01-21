

function Awards({ award }) {

  return (
    <article className="awardCard">
      <h2>{award.name}</h2>
      <p>{award.categories}</p>
      <p>{award.organization}</p>
      <p>{award.countrie}</p>
      <p className="resume">{award.resume}</p>
      {award.picture ? <img className="award-image" src={award.picture} alt={`Imagen de ${award.title}`} /> : <img className="award-image" src={""} />}
    </article>
  );
}

export default Awards;


