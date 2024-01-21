import img from "../../../images/vintage-silhouette-bearded-man-writing-260nw-652202881_swbvxe.webp"

function Authors({ author }) {
  console.log(author)
  return (
    <article className="authorCard">
      <p>{author.author}</p>
      <p>{author.countrie}</p>
      <p>{author.life}</p>
      <p className="resume">{author.resume}</p>
      {author.picture ? <img className="author-image" src={author.picture} alt={`Imagen de ${author.title}`} /> : <img className="author-image" src={img} />}
    </article>
  );
}

export default Authors;


