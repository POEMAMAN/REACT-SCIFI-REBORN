import Planets from './Planets';


function ListPlanets({ filteredArray }) {
  return (
    <>
      <h2 className="container-planets-listTitle">Listado de planetas</h2>
      {filteredArray.map((planet) => (
        <Planets planet={planet} key={planet._id} />
      ))}
    </>
  );
}
export default ListPlanets;
