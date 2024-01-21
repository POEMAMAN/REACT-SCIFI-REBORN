function SearchAuthor({ changeSearch, search, filterAuthors }) {
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
      <label htmlFor="">Dime que Autor quieres consultar</label>
      <input type="text" name="" id="" onChange={handleInput} value={search} />
      <input type="submit" value="Buscar" onClick={handleSearch} />
      <input type="submit" value="Cancelar" onClick={handleCancel} />
    </form>
  );
}

export default SearchAuthor;
