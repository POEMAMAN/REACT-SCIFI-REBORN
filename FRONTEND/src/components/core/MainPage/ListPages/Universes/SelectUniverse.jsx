import propTypes from "prop-types";

function SelectUniverse({ changeUniverse, universe }) {
    const handleChange = (event) => {
      changeUniverse(event.target.value);
    };

    return (
        <>
        <label htmlFor="">Selecciona un Universo</label>
        <select name="id" onChange={handleChange} value={universe}> 
            <option value="Foundation">Foundation</option>
            <option value="Uplift">Uplift</option>
            <option value="null">Independiente</option>
            <option value="The Expanse">The Expanse</option>
            <option value="Lock In">Lock In</option>
            <option value="The Interdependency">The Interdependency</option>
            <option value="Dune">Dune</option>
            <option value="Old Man's War">Old Man´s War</option>
        </select>
        </>
    )
}

SelectUniverse.propTypes = {
    changeUniverse: propTypes.function,
    universe: propTypes.string,
}


export default SelectUniverse;