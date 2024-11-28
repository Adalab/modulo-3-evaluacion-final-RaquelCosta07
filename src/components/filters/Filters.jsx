import FilterByName from "./FilterByName";
/* eslint-disable react/prop-types*/

function Filters({ onChangeName }) {
    return (
        <form>
            <FilterByName onChangeName={onChangeName} />
        </form>
    )
}

export default Filters