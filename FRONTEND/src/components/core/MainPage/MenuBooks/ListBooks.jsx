import Books from "./Books";


function ListBooks({ filteredArray }) {
  return (
    <>
      <div className="container-books-List">
        <h2 className="container-books-List-title"></h2>
        {filteredArray.map((book) => (
          <Books book={book} key={book._id} />
        ))}
      </div>
    </>
  );
}
export default ListBooks;
