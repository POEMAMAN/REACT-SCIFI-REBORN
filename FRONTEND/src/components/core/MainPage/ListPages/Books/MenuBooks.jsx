import { useEffect, useState } from "react";
import { API } from "../../../../axios/api.js";

import LogOut from "../../LogOut";
import ActualUser from "../../ActualUser";

import ListBooks from "./ListBooks";
// import SearchBooks from "./SearchBooks";


const MenuBooks = () => {

    const [universe, setUniverse] = useState("Foundation");
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
    }, [universe]);

    // const changeUniverse = (value) => {
    //     setUniverse(value);
    // };

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
            <div>
                <ActualUser />
                <LogOut />
                {/* <SearchBooks
                    changeSearch={changeSearch}
                    search={search}
                    filterBooks={filterBooks} /> */}
                <ListBooks filteredArray={filteredArray} />
            </div>
        </>
    )
}


export default MenuBooks;
