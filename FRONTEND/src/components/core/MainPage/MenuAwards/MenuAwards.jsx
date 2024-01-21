import { useEffect, useState } from "react";
import { API } from "../../../axios/api";
import ListAwards from "./ListAwards";
import SearchAward from "./SearchAward";

function MenuAwards() {
  const [awards, setAwards] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredArray, setFilteredArray] = useState([]);

  useEffect(() => {
    try {
      API.get(`http://localhost:5000/awards`)
        .then(
          (resp) => {
            setAwards(resp.data);
            setFilteredArray(resp.data);
          },
          (error) => {
            console.log(error);
          }
        );
    } catch (error) {
      console.log(error);
    }
  }, []);


  const changeSearch = (value) => {
    setSearch(value);
  };
  const filterAwards = () => {
    const newArray = awards.filter((eachAward) =>
      eachAward.title.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredArray(newArray);
  };

  return (
    <>
    <div className="container-Awards">
      <h2 className="container-Awards-title"></h2>
      <SearchAward
        changeSearch={changeSearch}
        search={search}
        filterAwards={filterAwards}
      />
      <ListAwards filteredArray={filteredArray} />
      </div>
    </>
  );
}
export default MenuAwards;