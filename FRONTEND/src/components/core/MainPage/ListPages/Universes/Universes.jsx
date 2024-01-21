import img from "../../../../images/Vacío-6_jh3g7a.jpg"
function Universes (universe) {

    return( 
        <article>
            <h2>{universe.nameUniverse}</h2>
            <p>{universe.author}</p>
            <p>{universe.collection}</p>
            {universe.picture ? <img className="imageCard" src={universe.picture} alt={`Imagen de ${universe.nameUniverse}`}/> :<img className="imageCard" src={img}/>}
        </article>
    )
}

export default Universes;
