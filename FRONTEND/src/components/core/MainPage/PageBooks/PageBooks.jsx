import { useEffect, useState } from "react";
import { API } from "../../../axios/api";
import SelectSerie from "./SelectSerie";
import ListBooks from "./ListBooks";
import SearchBook from "./SearchBook";

function PageBooks() {
  const [serie, setSerie] = useState("Honorverse");
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredArray, setFilteredArray] = useState([]);

  useEffect(() => {
    try {
      API.get(`http://localhost:5000/books`)
        .then(
          (resp) => {
            setBooks(resp.data);
            setFilteredArray(resp.data);
          },
          (error) => {
            console.log(error);
          }
        );
    } catch (error) {
      console.log(error);
    }
  }, [serie]);


  const changeSerie = (value) => {
    setSerie(value);
  };

  const changeSearch = (value) => {
    setSearch(value);
  };
  const filterBooks = () => {
    const newArray = books.filter((eachBook) =>
      eachBook.title.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredArray(newArray);
  };

  return (
    <>
    <div className="container-Books">
      <h2 className="container-Books-title">Books Honor Harrington</h2>
      {/* <SelectSerie changeSerie={changeSerie} serie={serie} /> */}
      <SearchBook
        changeSearch={changeSearch}
        search={search}
        filterBooks={filterBooks}
      />
      <ListBooks filteredArray={filteredArray} />
      </div>
    </>
  );
}
export default PageBooks;