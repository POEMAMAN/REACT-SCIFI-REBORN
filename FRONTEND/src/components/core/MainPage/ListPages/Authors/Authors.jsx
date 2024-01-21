import img from "../../../../images/vintage-silhouette-bearded-man-writing-260nw-652202881_swbvxe.webp"
function Authors (author) {

    return( 
        <article>
            <h2>{author.author}</h2>
            <p>{author.countrie}</p>
            <p>{author.books}</p>
            {author.picture ? <img className="imageCard" src={author.picture} alt={`Imagen de ${author.title}`}/> :<img className="imageCard" src={img}/>}
        </article>
    )
}

export default Authors;