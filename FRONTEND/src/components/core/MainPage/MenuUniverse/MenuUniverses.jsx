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
      API.get(`http://localhost:5000/universes`)
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
      eachUniverse.nameUniverse.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredArray(newArray);
  };

  return (
    <>
    <div className="container-Universes">
      <h2 className="container-Universes-title"></h2>
      <SearchUniverse
        changeSearch={changeSearch}
        search={search}
        filterUniverses={filterUniverses}
      />
      <ListUniverses filteredArray={filteredArray} />
      </div>
    </>
  );
}
export default MenuUniverses;