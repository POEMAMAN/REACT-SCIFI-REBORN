import img from "../../../../images/notImgBook_okiaba.jpg"
function Books (book) {

    return( 
        <article>
            <h2>{book.title}</h2>
            <p>{book.publication_year}</p>
            <p>{book.collection}</p>
            <p>{book.collection_index}</p>
            <p>{book.universe}</p>
            <p>{book.author}</p>
            {book.picture ? <img className="imageCard" src={book.picture} alt={`Imagen de ${book.title}`}/> :<img className="imageCard" src={img}/>}
        </article>
    )
}

export default Books;
