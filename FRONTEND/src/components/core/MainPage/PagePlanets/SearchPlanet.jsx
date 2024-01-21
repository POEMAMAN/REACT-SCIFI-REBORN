function SearchPlanet({ changeSearch, search, filterPlanets }) {
  const handleInput = (event) => {
    changeSearch(event.target.value);
  };
  const handleCancel = (event) => {
    event.preventDefault();
    changeSearch("");
  };
  const handleSearch = (event) => {
    event.preventDefault();
    filterPlanets();
  };
  return (
    <form>
      <label htmlFor="">Indica el planeta</label>
      <input type="text" name="" id="" onChange={handleInput} value={search} />
      {console.log(search)}
      <input type="submit" value="Buscar" onClick={handleSearch} />
      <input type="submit" value="Cancelar" onClick={handleCancel} />
    </form>
  );
}

export default SearchPlanet;
