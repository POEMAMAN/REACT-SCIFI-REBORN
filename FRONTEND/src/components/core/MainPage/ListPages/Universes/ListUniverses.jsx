
import propTypes from "prop-types";
import Universes from "./Universes";



function ListUniverses ({filteredArray}) {

    return (
        <>
        <h2>Listado de Universos de Ciencia Ficcion</h2>
        {filteredArray.map((universe) => (
          <Universes book={universe} key={universe._id} />
        ))}
      </>
    )
    
}
ListUniverses.propTypes = {
    filteredArray: propTypes.array,
}

export default ListUniverses;
