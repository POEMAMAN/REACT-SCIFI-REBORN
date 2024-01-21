// import propTypes from "prop-types";

// function SearchBooks({ changeSearch, search, filterBooks }) {
//     const handleInput = (event) => {
//       changeSearch(event.target.value);
//     };
//     const handleCancel = (event) => {
//       event.preventDefault();
//       changeSearch("");
//     };
//     const handleSearch = (event) => {
//       event.preventDefault();
//       filterBooks();
//     };
//     return (
//       <form>
//         <label htmlFor="">Indica el título del libro</label>
//         <input type="text" name="" id="" onChange={handleInput} value={search} />
//         <input type="submit" value="Buscar" onClick={handleSearch} />
//         <input type="submit" value="Cancelar" onClick={handleCancel} />
//       </form>
//     );
//   }

//   SearchBooks.propTypes = {
//     changeSearch: propTypes.func,
//     search: propTypes.string,
//     filterBooks: propTypes.array,
// }
  
  // export default SearchBooks;