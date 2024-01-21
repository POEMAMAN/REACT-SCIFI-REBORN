import Universes from "./Universes";


function ListUniverses({ filteredArray }) {
  return (
    <>
      <div className="container-universes-List">
        <h2 className="container-universes-List-title"></h2>
        {filteredArray.map((universe) => (
          <Universes universe={universe} key={universe._id} />
        ))}
      </div>
    </>
  );
}
export default ListUniverses;
