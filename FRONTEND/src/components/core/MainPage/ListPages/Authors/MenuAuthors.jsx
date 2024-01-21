import { useEffect, useState } from "react";
import { API } from "../../../../axios/api.js";

import LogOut from "../../LogOut";
import ActualUser from "../../ActualUser";

import ListAuthors from "./ListAuthors";
import SearchAuthors from "./SearchAuthors";


const MenuAuthors = () => {

    const [Authors, setAuthors] = useState([]);
    const [search, setSearch] = useState("");
    const [filteredArray, setFilteredArray] = useState([]);

    useEffect(() => {
        try {
            API.get(`http://localhost:5000/Authors`)
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
    });

    const changeSearch = (value) => {
        setSearch(value);
    };
    const filterAuthors = () => {
        const newArray = Authors.filter((eachAuthor) =>
            eachAuthor.title.toLowerCase().includes(search.toLowerCase())
        );
        setFilteredArray(newArray);
    };

    return (
        <>
            <div>
                <ActualUser />
                <LogOut />
                <h2 className="container-list-Authors"></h2>
                <SearchAuthors
                    changeSearch={changeSearch}
                    search={search}
                    filterAuthors={filterAuthors} />
                <ListAuthors filteredArray={filteredArray} />
            </div>
        </>
    )
}


export default MenuAuthors;

