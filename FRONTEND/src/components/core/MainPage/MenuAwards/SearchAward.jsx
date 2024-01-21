function SearchAward({ changeSearch, search, filterAwards }) {
  const handleInput = (event) => {
    changeSearch(event.target.value);
  };
  const handleCancel = (event) => {
    event.preventDefault();
    changeSearch("");
  };
  const handleSearch = (event) => {
    event.preventDefault();
    filterAwards();
  };
  return (
    <form>
      <label htmlFor="">Selecciona el premio</label>
      <input type="text" name="" id="" onChange={handleInput} value={search} />
      <input type="submit" value="Buscar" onClick={handleSearch} />
      <input type="submit" value="Cancelar" onClick={handleCancel} />
    </form>
  );
}

export default SearchAward;
