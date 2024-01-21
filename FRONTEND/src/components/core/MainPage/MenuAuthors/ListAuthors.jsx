import Authors from "./Authors";


function ListAuthors({ filteredArray }) {
  return (
    <>
      <div className="container-authors-List">
        <h2 className="container-authors-listTitle"></h2>
        {filteredArray.map((author) => (
          <Authors author={author} key={author._id} />
        ))}
      </div>
    </>
  );
}
export default ListAuthors;
