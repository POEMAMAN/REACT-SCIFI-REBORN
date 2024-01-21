// import PropTypes  from "prop-types";

function Books({book}) {
  return (
    <article>
      <h2>{book.title}</h2>
      <p>{book.serie}</p>
      <p>{book.publication_date}</p>
      <p>{book.pages}</p>
      <p>{book.timeframe}</p>
      <img src={book.picture} alt={`Imagen de ${book.title}`} />
    </article>
  );
}

export default Books;


