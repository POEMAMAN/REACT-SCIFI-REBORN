import Books from "./Books";
// import propTypes from "prop-types";


function ListBooks ({filteredArray}) {
  console.log(filteredArray)
    return (
        <>
        <h2>Listado de libros</h2>
        {filteredArray.map((book) => (
          <Books book={book} key={book._id} />

        ))}
      </>
    )
    
}
// ListBooks.propTypes = {
//     filteredArray: propTypes.array,
// }

export default ListBooks;