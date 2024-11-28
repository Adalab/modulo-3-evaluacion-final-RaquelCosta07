import FilterByName from "./FilterByName";
import FilterBySpecies from "./FilterBySpecies";
/* eslint-disable react/prop-types*/

function Filters({ onChangeName, onChangeSpecies }) {
    return (
        <form>
            <FilterByName onChangeName={onChangeName} />
            <FilterBySpecies onChangeSpecies={onChangeSpecies} />
        </form>
    )
}

export default Filters