import Universes from "./Universes";


function ListUniverses({ filteredArray }) {
  return (
    <>
      <h2 className="container-universes-listTitle"></h2>
      {filteredArray.map((universe) => (
        <Universes universe={universe} key={universe._id} />
      ))}
    </>
  );
}
export default ListUniverses;
