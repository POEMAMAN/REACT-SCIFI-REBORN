import { useEffect, useState } from "react";
import { API } from "../../../axios/api";
import ListUniverses from "./ListUniverses";
import SearchUniverse from "./SearchUniverse";

function MenuUniverses() {
  const [universes, setUniverses] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredArray, setFilteredArray] = useState([]);

  useEffect(() => {
    try {
      API.get(`http://localhost:5000/books`)
        .then(
          (resp) => {
            setUniverses(resp.data);
            setFilteredArray(resp.data);
          },
          (error) => {
            console.log(error);
          }
        );
    } catch (error) {
      console.log(error);
    }
  }, [universes]);
  




  const changeSearch = (value) => {
    setSearch(value);
  };
  const filterUniverses = () => {
    const newArray = universes.filter((eachUniverse) =>
      eachUniverse.title.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredArray(newArray);
  };

  return (
    <>
    <div className="container-Universes">
      <h2 className="container-Universes-title">Universos de Ciencia Ficcion</h2>
      <SearchUniverse
        changeSearch={changeSearch}
        search={search}
        filterUniverses={filterUniverses}
      />
      <SelectUniverse changeSearch={changeSearch} universes={universes}/>
      <ListUniverses filteredArray={filteredArray} />
      </div>
    </>
  );
}
export default MenuUniverses;