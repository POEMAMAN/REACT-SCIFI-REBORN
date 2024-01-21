import { useEffect, useState } from "react";
import { API } from "../../../axios/api";
import ListAuthors from "./ListAuthors";
import SearchAuthor from "./SearchAuthor";

function MenuAuthors() {
  const [authors, setAuthors] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredArray, setFilteredArray] = useState([]);

  useEffect(() => {
    try {
      API.get(`http://localhost:5000/author`)
        .then(
          (resp) => {
            setAuthors(resp.data);
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
  const filterAuthors = () => {
    const newArray = authors.filter((eachAuthor) =>
      eachAuthor.author.toLowerCase().includes(search.toLowerCase()));
    console.log(search)
    setFilteredArray(newArray);
  };

  return (
    <>
    <div className="container-Authors">
      <h2 className="container-Authors-title">Autores de Ciencia Ficcion</h2>
      <SearchAuthor
        changeSearch={changeSearch}
        search={search}
        filterAuthors={filterAuthors}
      />
      <ListAuthors filteredArray={filteredArray} />
      </div>
    </>
  );
}
export default MenuAuthors;