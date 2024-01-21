import img from "../../../images/notImgBook_okiaba.jpg"

function Books({ book }) {

  return (
    <article className="bookCard">
      <h2>{book.title}</h2>
      <p>{book.author}</p>
      <p>{book.universe}</p>
      <p>{book.collection_index}</p>
      <p>{book.publication_year}</p>
      {book.picture ? <img className="book-image" src={book.picture} alt={`Imagen de ${book.title}`} /> : <img className="book-image" src={img} />}
    </article>
  );
}

export default Books;


