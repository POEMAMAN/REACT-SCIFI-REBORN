import propTypes from "prop-types";

function SearchAuthors({ changeSearch, search, filterAuthors }) {
    const handleInput = (event) => {
      changeSearch(event.target.value);
    };
    const handleCancel = (event) => {
      event.preventDefault();
      changeSearch("");
    };
    const handleSearch = (event) => {
      event.preventDefault();
      filterAuthors();
    };
    return (
      <form>
        <label htmlFor="">Indica el Autor que buscas</label>
        <input type="text" name="" id="" onChange={handleInput} value={search} />
        {console.log(search)}
        <input type="submit" value="Buscar" onClick={handleSearch} />
        <input type="submit" value="Cancelar" onClick={handleCancel} />
      </form>
    );
  }

  SearchAuthors.propTypes = {
    changeSearch: propTypes.func,
    search: propTypes.string,
    filterAuthors: propTypes.func,
}
  
  export default SearchAuthors;