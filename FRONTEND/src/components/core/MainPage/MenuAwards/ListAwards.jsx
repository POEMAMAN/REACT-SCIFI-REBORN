import Awards from "./Awards";


function ListAwards({ filteredArray }) {
  return (
    <>
      <div className="container-awards-List">
        <h2 className="container-awards-List-title"></h2>
        {filteredArray.map((award) => (
          <Awards award={award} key={award._id} />
        ))}
      </div>
    </>
  );
}
export default ListAwards;
