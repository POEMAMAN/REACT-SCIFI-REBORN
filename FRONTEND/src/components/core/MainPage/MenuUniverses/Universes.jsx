// import img from "../../../images/notImguniverse_okiaba.jpg"

function Universes({universe}) {
  return (
    <article>
      <h2>{universe.nameUniverse}</h2>
      <p>{universe.author}</p>
      <p>{universe.collection}</p>
      {universe.picture ? <img className="imageCard" src={universe.picture} alt={`Imagen de ${universe.title}`}/> :<img className="imageCard" src={img}/>}
    </article>
  );
}

export default Universes;
 

