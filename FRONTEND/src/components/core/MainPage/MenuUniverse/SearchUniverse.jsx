function SearchUniverse({ changeSearch, search, filterUniverses }) {
  const handleInput = (event) => {
    changeSearch(event.target.value);
  };
  const handleCancel = (event) => {
    event.preventDefault();
    changeSearch("");
  };
  const handleSearch = (event) => {
    event.preventDefault();
    filterUniverses();
  };
  return (
    <form>
      <label htmlFor="">¿Que universo buscas?</label>
      <input type="text" name="" id="" onChange={handleInput} value={search} />
      <input type="submit" value="Buscar" onClick={handleSearch} />
      <input type="submit" value="Cancelar" onClick={handleCancel} />
    </form>
  );
}

export default SearchUniverse;
