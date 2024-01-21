import { useEffect, useState } from "react";
import { API } from "../../../../axios/api.js";

import LogOut from "../../LogOut";
import ActualUser from "../../ActualUser";

import ListUniverses from "./ListUniverses";
import SelectUniverse from "./SelectUniverse";


const MenuUniverses = () => {

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
    });

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
            <div>
                <ActualUser />
                <LogOut />
                <h2 className="container-list-Books"></h2>
                <SelectUniverse
                    changeSearch={changeSearch}
                    search={search}
                    filterUniverses={filterUniverses} />
                <ListUniverses filteredArray={filteredArray} />
            </div>
        </>
    )
}


export default MenuUniverses;
