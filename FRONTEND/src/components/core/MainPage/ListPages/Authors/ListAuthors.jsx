import Authors from "./Authors";
import propTypes from "prop-types";


function ListAuthors ({filteredArray}) {

    return (
        <>
        <h2>Listado de Autores</h2>
        {filteredArray.map((author) => (
          <Authors author={author} key={author._id} />
        ))}
      </>
    )
    
}
ListAuthors.propTypes = {
    filteredArray: propTypes.array,
}

export default ListAuthors;
